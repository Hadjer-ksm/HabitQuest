// ============================================================
//  Service Worker – HabitQuest PWA (v2.0)
//  استراتيجية تخزين متقدمة: Stale-While-Revalidate + Cache-First
//  يدعم التحديثات التلقائية وإدارة الكاش بذكاء
// ============================================================

const CACHE_NAME = 'habitquest-v2.0.0';
const STATIC_CACHE = 'habitquest-static-v2.0.0';
const DYNAMIC_CACHE = 'habitquest-dynamic-v2.0.0';

// قائمة الملفات الأساسية التي سيتم تخزينها مسبقاً (Pre-cache)
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './favicon.svg',
  './apple-touch-icon.png',
  './robots.txt',
  './sitemap.xml',
  './animations.css'        // أضفنا ملف التأثيرات
];

// امتدادات الملفات التي سيتم تخزينها ديناميكياً (عند الطلب)
const DYNAMIC_EXTENSIONS = ['.js', '.css', '.png', '.jpg', '.jpeg', '.svg', '.webp', '.woff2'];

// ============================================================
//  1. حدث التثبيت (Install) – تخزين الملفات الأساسية
// ============================================================
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting(); // فعّل الخدمة فوراً
      })
      .catch((error) => {
        console.error('[SW] Installation failed:', error);
      })
  );
});

// ============================================================
//  2. حدث التنشيط (Activate) – تنظيف الكاش القديم وإدارة الإصدارات
// ============================================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');

  const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE];

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return cacheNames.filter((name) => !currentCaches.includes(name));
      })
      .then((oldCaches) => {
        return Promise.all(
          oldCaches.map((oldCache) => {
            console.log('[SW] Deleting old cache:', oldCache);
            return caches.delete(oldCache);
          })
        );
      })
      .then(() => {
        console.log('[SW] Claiming clients');
        return self.clients.claim(); // يسيطر على الصفحات المفتوحة فوراً
      })
      .catch((error) => {
        console.error('[SW] Activation failed:', error);
      })
  );
});

// ============================================================
//  3. حدث الجلب (Fetch) – استراتيجيات ذكية حسب نوع المورد
// ============================================================
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // تجاهل طلبات التحليلات والإحصائيات (لا تخزنها)
  if (url.origin.includes('google-analytics') || url.origin.includes('gtag')) {
    return;
  }

  // ---------- استراتيجية 1: Cache-First للملفات الثابتة (HTML, CSS, JS) ----------
  if (STATIC_ASSETS.includes(url.pathname) || STATIC_ASSETS.includes(url.pathname + '/')) {
    event.respondWith(cacheFirstStrategy(request));
    return;
  }

  // ---------- استراتيجية 2: Stale-While-Revalidate للملفات الديناميكية (الصور، الخطوط، إلخ) ----------
  if (shouldCacheDynamically(url.pathname)) {
    event.respondWith(staleWhileRevalidateStrategy(request));
    return;
  }

  // ---------- استراتيجية 3: Network-First (للصفحات الداخلية أو أي طلبات خاصة) ----------
  // نطبقها على الطلبات التي تحوي "page" في المسار، أو طلبات الـ HTML العامة
  if (request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(networkFirstStrategy(request));
    return;
  }

  // ---------- استراتيجية 4: Fallback (إذا لم ينطبق أي من السابق) ----------
  event.respondWith(
    fetch(request)
      .then((response) => {
        // نخزن النسخة في الكاش الديناميكي للاستخدام المستقبلي
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then((cache) => cache.put(request, clone))
            .catch(() => {});
        }
        return response;
      })
      .catch(() => {
        // إذا فشل كل شيء، نعيد صفحة Offline مخصصة
        return new Response('⚠️ Offline – Please check your connection.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain' })
        });
      })
  );
});

// ============================================================
//  4. دوال الاستراتيجيات (Strategies)
// ============================================================

// 4.1 Cache-First (الأولوية للكاش، ثم الشبكة)
async function cacheFirstStrategy(request) {
  const cached = await caches.match(request);
  if (cached) {
    console.log('[SW] Cache-First: serving from cache', request.url);
    return cached;
  }

  try {
    const network = await fetch(request);
    if (network && network.status === 200) {
      const clone = network.clone();
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, clone);
    }
    return network;
  } catch (error) {
    console.warn('[SW] Cache-First: network failed for', request.url);
    // نعيد صفحة Offline إذا كان الطلب لصفحة HTML
    if (request.headers.get('accept')?.includes('text/html')) {
      return new Response('🌐 Offline – Please reconnect.', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({ 'Content-Type': 'text/html' })
      });
    }
    throw error;
  }
}

// 4.2 Stale-While-Revalidate (يعطي الكاش أولاً، ويحدث في الخلفية)
async function staleWhileRevalidateStrategy(request) {
  const cached = await caches.match(request);
  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(DYNAMIC_CACHE)
          .then((cache) => cache.put(request, clone))
          .catch(() => {});
      }
      return response;
    })
    .catch(() => {});

  if (cached) {
    // أعد الكاش فوراً، ثم حدّث في الخلفية دون انتظار
    event.waitUntil(networkPromise); // لا ننتظر النتيجة، فقط نطلقها
    return cached;
  }

  // إذا لم يكن في الكاش، انتظر الشبكة
  const network = await networkPromise;
  if (network) return network;

  // إذا فشل كل شيء، أعد صفحة Offline بديلة
  return new Response('🔄 No connection & no cache.', {
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// 4.3 Network-First (الشبكة أولاً، ثم الكاش كملاذ أخير)
async function networkFirstStrategy(request) {
  try {
    const network = await fetch(request);
    if (network && network.status === 200) {
      const clone = network.clone();
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, clone);
      return network;
    }
    throw new Error('Network response not ok');
  } catch (error) {
    console.warn('[SW] Network-First: falling back to cache', request.url);
    const cached = await caches.match(request);
    if (cached) return cached;
    // إذا لم يوجد كاش، نعيد صفحة Offline
    return new Response('📴 You are offline. Please try again later.', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// ============================================================
//  5. دوال مساعدة (Helper Functions)
// ============================================================

// تحديد ما إذا كان المورد يستحق التخزين الديناميكي (حسب الامتداد)
function shouldCacheDynamically(pathname) {
  return DYNAMIC_EXTENSIONS.some((ext) => pathname.endsWith(ext));
}

// ============================================================
//  6. رسالة إعلامية عند تحديث التطبيق (اختياري)
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

console.log('✅ HabitQuest Service Worker loaded successfully!');