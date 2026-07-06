
        (function() {
            'use strict';

            // ============================================================
            // دوال إنشاء SVG الأيقونات (كل أيقونة تعيد <svg>)
            // ============================================================
            function svgIcon(inner, viewBox, extra) {
                viewBox = viewBox || '0 0 24 24';
                extra = extra || '';
                return '<svg viewBox="' + viewBox + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
                    extra + '>' + inner + '</svg>';
            }

            function iconLightning() {
                return svgIcon('<polyline points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>');
            }

            function iconDashboard() {
                return svgIcon(
                    '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'
                    );
            }

            function iconHabits() {
                return svgIcon(
                    '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>');
            }

            function iconAnalytics() {
                return svgIcon(
                    '<path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="12"/><path d="M9 16v2"/><path d="M15 16v2"/><path d="M6 19h12"/>'
                    );
            }

            function iconShop() {
                return svgIcon(
                    '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>'
                    );
            }

            function iconSettings() {
                return svgIcon(
                    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
                    );
            }

            function iconCheck() {
                return svgIcon('<polyline points="20 6 9 17 4 12"/>');
            }

            function iconFire() {
                return svgIcon(
                    '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
                    '0 0 24 24', 'fill="currentColor" stroke="none"');
            }

            // تعديل دالة iconCoin لاستخدام stroke بدلاً من fill، مع إضافة stroke للتباين
            function iconCoin() {
                return svgIcon(
                    '<circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/><path d="M12 6v12M9 9a3 3 0 0 1 6 0 3 3 0 0 1-6 0zM8 15a4 4 0 0 0 8 0" stroke="currentColor" fill="none"/>',
                    '0 0 24 24', 'stroke="currentColor" fill="none"');
            }

            function iconGift() {
                return svgIcon(
                    '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>'
                    );
            }

            function iconStar() {
                return svgIcon(
                    '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
                    );
            }

            function iconSun() {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
            }

            function iconMoon() {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
            }

            function iconTrash() {
                return svgIcon(
                    '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'
                    );
            }

            function iconEdit() {
                return svgIcon(
                    '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'
                    );
            }

            function iconAdd() {
                return svgIcon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>');
            }

            function iconLevel() {
                return svgIcon('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>');
            }

            function iconXp() {
                return svgIcon('<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>');
            }

            function iconChevronLeft() {
                return svgIcon('<polyline points="15 18 9 12 15 6"/>');
            }

            // إضافة دالة أيقونة السهم لليمين (Chevron Right)
            function iconChevronRight() {
                return svgIcon('<polyline points="9 18 15 12 9 6"/>');
            }

            // ====== دوال مساعدة لتغليف أيقونة في span مع فئات ======
            function iconSpan(svgHTML, className) {
                className = className || 'icon-svg';
                return '<span class="' + className + '" aria-hidden="true">' + svgHTML + '</span>';
            }

            function iconWithClass(iconFn, extraClass) {
                extraClass = extraClass || '';
                return iconSpan(iconFn(), 'icon-svg ' + extraClass);
            }

            // دوال أيقونات إضافية للتوست
            function iconWarning() {
                return svgIcon(
                    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
                    );
            }

            function iconInfo() {
                return svgIcon(
                    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
                    );
            }

            // ============================================================
            // DATABASE LAYER (IndexedDB)
            // ============================================================
            var DB_NAME = 'HabitQuestDB';
            var DB_VERSION = 2;
            var db = null;

            function openDB() {
                return new Promise(function(resolve, reject) {
                    var req = indexedDB.open(DB_NAME, DB_VERSION);
                    req.onupgradeneeded = function(e) {
                        var d = e.target.result;
                        if (!d.objectStoreNames.contains('habits')) {
                            var hs = d.createObjectStore('habits', { keyPath: 'id', autoIncrement: true });
                            hs.createIndex('createdAt', 'createdAt', { unique: false });
                        }
                        if (!d.objectStoreNames.contains('logs')) {
                            var ls = d.createObjectStore('logs', { keyPath: 'id', autoIncrement: true });
                            ls.createIndex('habitDate', ['habitId', 'date'], { unique: true });
                        }
                        if (!d.objectStoreNames.contains('userData')) {
                            d.createObjectStore('userData', { keyPath: 'key' });
                        }
                        if (!d.objectStoreNames.contains('rewards')) {
                            d.createObjectStore('rewards', { keyPath: 'id', autoIncrement: true });
                        }
                        if (!d.objectStoreNames.contains('cryptoMeta')) {
                            d.createObjectStore('cryptoMeta', { keyPath: 'key' });
                        }
                    };
                    req.onsuccess = function(e) {
                        db = e.target.result;
                        resolve(db);
                    };
                    req.onerror = function() {
                        reject(req.error);
                    };
                });
            }

            function dbPut(storeName, data) {
                return new Promise(function(resolve, reject) {
                    var tx = db.transaction(storeName, 'readwrite');
                    var store = tx.objectStore(storeName);
                    var req = store.put(data);
                    req.onsuccess = function() {
                        resolve(req.result);
                    };
                    req.onerror = function() {
                        reject(req.error);
                    };
                });
            }

            function dbGetAll(storeName) {
                return new Promise(function(resolve, reject) {
                    var tx = db.transaction(storeName, 'readonly');
                    var store = tx.objectStore(storeName);
                    var req = store.getAll();
                    req.onsuccess = function() {
                        resolve(req.result);
                    };
                    req.onerror = function() {
                        reject(req.error);
                    };
                });
            }

            function dbGet(storeName, key) {
                return new Promise(function(resolve, reject) {
                    var tx = db.transaction(storeName, 'readonly');
                    var store = tx.objectStore(storeName);
                    var req = store.get(key);
                    req.onsuccess = function() {
                        resolve(req.result);
                    };
                    req.onerror = function() {
                        reject(req.error);
                    };
                });
            }

            function dbDelete(storeName, key) {
                return new Promise(function(resolve, reject) {
                    var tx = db.transaction(storeName, 'readwrite');
                    var store = tx.objectStore(storeName);
                    var req = store.delete(key);
                    req.onsuccess = function() {
                        resolve();
                    };
                    req.onerror = function() {
                        reject(req.error);
                    };
                });
            }

            // ============================================================
            // CLIENT-SIDE ENCRYPTION (Web Crypto API – AES-GCM 256)
            // ============================================================
            var cryptoKey = null;
            var ENC_PREFIX = 'ENCv1:';

            function getOrCreateCryptoKey() {
                if (!window.crypto || !window.crypto.subtle) return Promise.resolve(null);
                return dbGet('cryptoMeta', 'aesKey').then(function(stored) {
                    if (stored && stored.jwk) {
                        return crypto.subtle.importKey('jwk', stored.jwk, { name: 'AES-GCM' }, true, ['encrypt',
                            'decrypt'
                        ]);
                    }
                    return crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
                        .then(function(key) {
                            return crypto.subtle.exportKey('jwk', key).then(function(jwk) {
                                return dbPut('cryptoMeta', { key: 'aesKey', jwk: jwk }).then(function() {
                                    return key;
                                });
                            });
                        });
                }).catch(function(err) {
                    console.warn('[Crypto] Unable to initialize encryption key, falling back to plain text:',
                        err);
                    return null;
                });
            }

            function bufToBase64(buf) {
                return btoa(String.fromCharCode.apply(null, new Uint8Array(buf)));
            }

            function base64ToBuf(b64) {
                return Uint8Array.from(atob(b64), function(c) { return c.charCodeAt(0); });
            }

            function encryptField(plainText) {
                if (cryptoKey == null || plainText == null || plainText === '') return Promise.resolve(plainText);
                try {
                    var iv = crypto.getRandomValues(new Uint8Array(12));
                    var encoded = new TextEncoder().encode(String(plainText));
                    return crypto.subtle.encrypt({ name: 'AES-GCM', iv: iv }, cryptoKey, encoded).then(function(
                    cipherBuf) {
                        return ENC_PREFIX + bufToBase64(iv) + ':' + bufToBase64(cipherBuf);
                    });
                } catch (err) {
                    console.warn('[Crypto] Encryption failed, storing as plain text:', err);
                    return Promise.resolve(plainText);
                }
            }

            function decryptField(value) {
                if (typeof value !== 'string' || !value.startsWith(ENC_PREFIX) || cryptoKey == null) return Promise
                    .resolve(value);
                try {
                    var parts = value.slice(ENC_PREFIX.length).split(':');
                    var iv = base64ToBuf(parts[0]);
                    var cipherBuf = base64ToBuf(parts[1]);
                    return crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, cryptoKey, cipherBuf).then(function(
                        plainBuf) {
                        return new TextDecoder().decode(plainBuf);
                    });
                } catch (err) {
                    console.warn('[Crypto] Decryption failed:', err);
                    return Promise.resolve('');
                }
            }

            // ============================================================
            // i18n – الترجمة
            // ============================================================
            var translations = {
                en: {
                    dashboard: 'Dashboard',
                    habits: 'Habits',
                    analytics: 'Analytics',
                    shop: 'Rewards Shop',
                    settings: 'Settings',
                    level: 'Level',
                    xp: 'XP',
                    coins: 'Coins',
                    streak: 'Streak',
                    todayProgress: "Today's Progress",
                    weeklyOverview: 'Weekly Overview',
                    addHabit: 'Add Habit',
                    editHabit: 'Edit Habit',
                    habitName: 'Habit Name',
                    description: 'Description',
                    frequency: 'Frequency',
                    daily: 'Daily',
                    weekly: 'Weekly',
                    customDays: 'Custom Days',
                    selectDays: 'Select Days',
                    category: 'Category',
                    reminderTime: 'Reminder Time',
                    save: 'Save',
                    cancel: 'Cancel',
                    delete: 'Delete',
                    edit: 'Edit',
                    complete: 'Complete',
                    undo: 'Undo',
                    redeem: 'Redeem',
                    redeemed: 'Redeemed',
                    addReward: 'Add Reward',
                    rewardName: 'Reward Name',
                    rewardCost: 'Cost (Coins)',
                    cost: 'Cost',
                    noHabits: 'No habits yet. Create your first habit!',
                    noRewards: 'No rewards defined. Add some rewards to spend your coins!',
                    confirmDelete: 'Are you sure you want to delete this?',
                    levelUp: 'Level Up!',
                    newLevel: 'You reached level',
                    streakMilestone: 'Streak Milestone!',
                    dayStreak: 'day streak',
                    days: 'days',
                    mon: 'Mon',
                    tue: 'Tue',
                    wed: 'Wed',
                    thu: 'Thu',
                    fri: 'Fri',
                    sat: 'Sat',
                    sun: 'Sun',
                    completed: 'Completed',
                    total: 'Total',
                    darkMode: 'Dark Mode',
                    lightMode: 'Light Mode',
                    language: 'Language',
                    exportData: 'Export Data',
                    clearData: 'Clear All Data',
                    notificationTitle: 'Habit Reminder',
                    notificationBody: 'Time to complete your habit:',
                    coinsEarned: 'coins earned',
                    xpEarned: 'XP earned',
                    wellness: 'Wellness',
                    fitness: 'Fitness',
                    learning: 'Learning',
                    productivity: 'Productivity',
                    social: 'Social',
                    other: 'Other',
                    soundEffects: 'Sound Effects',
                    soundOn: 'Sound On',
                    soundOff: 'Sound Off',
                    notifications: 'Notifications',
                    enableReminders: 'Enable Reminders',
                    notifStatus: 'Status',
                    dataSection: 'Data',
                    importData: 'Import Data',
                    importSuccess: 'Data imported successfully!',
                    importError: 'Failed to import file. Please check the format.',
                    invalidBackupFile: 'This file does not look like a valid HabitQuest backup.',
                    confirmImport: 'This will replace all your current data with the imported backup. Continue?'
                },
                fr: {
                    dashboard: 'Tableau de Bord',
                    habits: 'Habitudes',
                    analytics: 'Analytique',
                    shop: 'Boutique',
                    settings: 'Paramètres',
                    level: 'Niveau',
                    xp: 'XP',
                    coins: 'Pièces',
                    streak: 'Série',
                    todayProgress: 'Progrès du Jour',
                    weeklyOverview: 'Aperçu Hebdomadaire',
                    addHabit: 'Ajouter Habitude',
                    editHabit: 'Modifier Habitude',
                    habitName: "Nom de l'Habitude",
                    description: 'Description',
                    frequency: 'Fréquence',
                    daily: 'Quotidien',
                    weekly: 'Hebdomadaire',
                    customDays: 'Jours Personnalisés',
                    selectDays: 'Sélectionner Jours',
                    category: 'Catégorie',
                    reminderTime: 'Heure de Rappel',
                    save: 'Enregistrer',
                    cancel: 'Annuler',
                    delete: 'Supprimer',
                    edit: 'Modifier',
                    complete: 'Terminé',
                    undo: 'Annuler',
                    redeem: 'Échanger',
                    redeemed: 'Échangé',
                    addReward: 'Ajouter Récompense',
                    rewardName: 'Nom Récompense',
                    rewardCost: 'Coût (Pièces)',
                    cost: 'Coût',
                    noHabits: 'Aucune habitude. Créez votre première habitude!',
                    noRewards: 'Aucune récompense. Ajoutez des récompenses!',
                    confirmDelete: 'Êtes-vous sûr de vouloir supprimer?',
                    levelUp: 'Niveau Supérieur!',
                    newLevel: 'Vous avez atteint le niveau',
                    streakMilestone: 'Jalon de Série!',
                    dayStreak: 'jours de série',
                    days: 'jours',
                    mon: 'Lun',
                    tue: 'Mar',
                    wed: 'Mer',
                    thu: 'Jeu',
                    fri: 'Ven',
                    sat: 'Sam',
                    sun: 'Dim',
                    completed: 'Terminé',
                    total: 'Total',
                    darkMode: 'Mode Sombre',
                    lightMode: 'Mode Clair',
                    language: 'Langue',
                    exportData: 'Exporter Données',
                    clearData: 'Effacer Données',
                    notificationTitle: 'Rappel Habitude',
                    notificationBody: 'Temps de compléter votre habitude:',
                    coinsEarned: 'pièces gagnées',
                    xpEarned: 'XP gagné',
                    wellness: 'Bien-être',
                    fitness: 'Forme physique',
                    learning: 'Apprentissage',
                    productivity: 'Productivité',
                    social: 'Social',
                    other: 'Autre',
                    soundEffects: 'Effets Sonores',
                    soundOn: 'Son Activé',
                    soundOff: 'Son Désactivé',
                    notifications: 'Notifications',
                    enableReminders: 'Activer les Rappels',
                    notifStatus: 'Statut',
                    dataSection: 'Données',
                    importData: 'Importer des Données',
                    importSuccess: 'Données importées avec succès !',
                    importError: "Échec de l'importation. Vérifiez le format du fichier.",
                    invalidBackupFile: 'Ce fichier ne semble pas être une sauvegarde HabitQuest valide.',
                    confirmImport: 'Ceci remplacera toutes vos données actuelles par la sauvegarde importée. Continuer ?'
                },
                ar: {
                    dashboard: 'لوحة التحكم',
                    habits: 'العادات',
                    analytics: 'التحليلات',
                    shop: 'متجر المكافآت',
                    settings: 'الإعدادات',
                    level: 'المستوى',
                    xp: 'خبرة',
                    coins: 'عملات',
                    streak: 'التتابع',
                    todayProgress: 'تقدم اليوم',
                    weeklyOverview: 'نظرة أسبوعية',
                    addHabit: 'إضافة عادة',
                    editHabit: 'تعديل عادة',
                    habitName: 'اسم العادة',
                    description: 'وصف',
                    frequency: 'التكرار',
                    daily: 'يومي',
                    weekly: 'أسبوعي',
                    customDays: 'أيام مخصصة',
                    selectDays: 'اختر الأيام',
                    category: 'الفئة',
                    reminderTime: 'وقت التذكير',
                    save: 'حفظ',
                    cancel: 'إلغاء',
                    delete: 'حذف',
                    edit: 'تعديل',
                    complete: 'مكتمل',
                    undo: 'تراجع',
                    redeem: 'استبدال',
                    redeemed: 'تم الاستبدال',
                    addReward: 'إضافة مكافأة',
                    rewardName: 'اسم المكافأة',
                    rewardCost: 'التكلفة (عملات)',
                    cost: 'التكلفة',
                    noHabits: 'لا توجد عادات. أنشئ عادتك الأولى!',
                    noRewards: 'لا توجد مكافآت. أضف مكافآت لإنفاق عملاتك!',
                    confirmDelete: 'هل أنت متأكد من الحذف؟',
                    levelUp: 'ارتقاء مستوى!',
                    newLevel: 'وصلت إلى المستوى',
                    streakMilestone: 'إنجاز تتابع!',
                    dayStreak: 'يوم تتابع',
                    days: 'أيام',
                    mon: 'اثنين',
                    tue: 'ثلاثاء',
                    wed: 'أربعاء',
                    thu: 'خميس',
                    fri: 'جمعة',
                    sat: 'سبت',
                    sun: 'أحد',
                    completed: 'مكتمل',
                    total: 'المجموع',
                    darkMode: 'الوضع الداكن',
                    lightMode: 'الوضع الفاتح',
                    language: 'اللغة',
                    exportData: 'تصدير البيانات',
                    clearData: 'مسح البيانات',
                    notificationTitle: 'تذكير عادة',
                    notificationBody: 'حان وقت إكمال عادتك:',
                    coinsEarned: 'عملة مكتسبة',
                    xpEarned: 'خبرة مكتسبة',
                    wellness: 'الصحة والعافية',
                    fitness: 'اللياقة البدنية',
                    learning: 'التعلم',
                    productivity: 'الإنتاجية',
                    social: 'التواصل الاجتماعي',
                    other: 'أخرى',
                    soundEffects: 'المؤثرات الصوتية',
                    soundOn: 'الصوت مفعّل',
                    soundOff: 'الصوت متوقف',
                    notifications: 'الإشعارات',
                    enableReminders: 'تفعيل التذكيرات',
                    notifStatus: 'الحالة',
                    dataSection: 'البيانات',
                    importData: 'استيراد البيانات',
                    importSuccess: 'تم استيراد البيانات بنجاح!',
                    importError: 'فشل استيراد الملف. تحقق من صيغة الملف.',
                    invalidBackupFile: 'هذا الملف لا يبدو كنسخة احتياطية صالحة لـ HabitQuest.',
                    confirmImport: 'سيتم استبدال جميع بياناتك الحالية بالنسخة الاحتياطية المستوردة. هل تريد الاستمرار؟'
                }
            };

            // ============================================================
            // STATE
            // ============================================================
            var state = {
                language: 'en',
                theme: 'dark',
                currentPage: 'dashboard',
                habits: [],
                logs: [],
                rewards: [],
                userData: {
                    key: 'userData',
                    xp: 0,
                    coins: 0,
                    level: 1,
                    currentStreak: 0,
                    lastActiveDate: '',
                    theme: 'dark',
                    language: 'en',
                    soundEnabled: true
                },
                editingHabit: null,
                editingReward: null,
                notificationPermission: 'default',
                reminderInterval: null,
            };

            var streakUpdateInterval = null;

            function t(key) {
                return translations[state.language] && translations[state.language][key] ? translations[state
                    .language][key] : translations['en'][key] || key;
            }

            function updateDirection() {
                document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.lang = state.language;
                document.body.style.fontFamily = state.language === 'ar' ? 'var(--font-arabic)' :
                'var(--font-primary)';
            }

            function updateTheme() {
                document.documentElement.setAttribute('data-theme', state.theme);
                var btn = document.getElementById('btnThemeToggle');
                if (btn) {
                    var iconHTML = state.theme === 'dark' ? iconSun() : iconMoon();
                    btn.innerHTML = iconSpan(iconHTML, 'icon-svg glow');
                }
            }

            // ============================================================
            // GAMIFICATION ENGINE
            // ============================================================
            function calculateLevel(xp) {
                return Math.floor(Math.sqrt(xp / 100)) + 1;
            }

            function xpForLevel(level) {
                return Math.pow(level - 1, 2) * 100;
            }

            function xpProgressInLevel(xp) {
                var lvl = calculateLevel(xp);
                var currentLvlXp = xpForLevel(lvl);
                var nextLvlXp = xpForLevel(lvl + 1);
                var progress = ((xp - currentLvlXp) / (nextLvlXp - currentLvlXp)) * 100;
                return Math.min(100, Math.max(0, progress));
            }

            function getStreakBonus(streak) {
                return Math.min(streak * 5, 50);
            }

            function getXpForCompletion(streak) {
                return 20 + getStreakBonus(streak);
            }

            function getCoinsForCompletion(streak) {
                return 10 + Math.floor(getStreakBonus(streak) / 2);
            }

            function calculateHabitStreak(habitId, logs) {
                var habitLogs = logs.filter(function(l) { return l.habitId === habitId && l.completed; }).map(function(l) {
                    return l.date;
                }).sort().reverse();
                if (habitLogs.length === 0) return 0;
                var today = getTodayStr();
                var yesterday = getDateStr(new Date(Date.now() - 86400000));
                var checkDate = habitLogs[0];
                if (checkDate !== today && checkDate !== yesterday) return 0;
                var streak = 1;
                for (var i = 1; i < habitLogs.length; i++) {
                    var expected = getDateStr(new Date(new Date(habitLogs[i - 1]).getTime() - 86400000));
                    if (habitLogs[i] === expected) streak++;
                    else break;
                }
                return streak;
            }

            function calculateOverallStreak(logs) {
                var dates = [...new Set(logs.filter(function(l) { return l.completed; }).map(function(l) { return l
                        .date; }))].sort().reverse();
                if (dates.length === 0) return 0;
                var today = getTodayStr();
                var yesterday = getDateStr(new Date(Date.now() - 86400000));
                if (dates[0] !== today && dates[0] !== yesterday) return 0;
                var streak = 1;
                for (var i = 1; i < dates.length; i++) {
                    var expected = getDateStr(new Date(new Date(dates[i - 1]).getTime() - 86400000));
                    if (dates[i] === expected) streak++;
                    else break;
                }
                return streak;
            }

            function getTodayStr() {
                return new Date().toISOString().slice(0, 10);
            }

            function getDateStr(date) {
                return date.toISOString().slice(0, 10);
            }

            function getDayName(dayIndex) {
                var keys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
                return t(keys[dayIndex]);
            }

            function isHabitDueToday(habit) {
                var freq = habit.frequency;
                if (freq === 'daily') return true;
                if (freq === 'weekly') return true;
                if (Array.isArray(freq) && freq.length > 0) {
                    var today = new Date().getDay();
                    return freq.indexOf(today) !== -1;
                }
                return true;
            }

            // ============================================================
            // DATA LOADING
            // ============================================================
            function loadAllData() {
                return dbGetAll('habits').then(function(rawHabits) {
                    return Promise.all(rawHabits.map(function(h) {
                        return decryptField(h.name).then(function(decName) {
                            return decryptField(h.description || '').then(function(decDesc) {
                                return { ...h, name: decName, description: decDesc };
                            });
                        });
                    }));
                }).then(function(decryptedHabits) {
                    state.habits = decryptedHabits;
                    return dbGetAll('logs');
                }).then(function(logs) {
                    state.logs = logs;
                    return dbGetAll('rewards');
                }).then(function(rawRewards) {
                    return Promise.all(rawRewards.map(function(r) {
                        return decryptField(r.name).then(function(decName) {
                            return decryptField(r.description || '').then(function(decDesc) {
                                return { ...r, name: decName, description: decDesc };
                            });
                        });
                    }));
                }).then(function(decryptedRewards) {
                    state.rewards = decryptedRewards;
                    return dbGet('userData', 'userData');
                }).then(function(ud) {
                    if (ud) {
                        state.userData = ud;
                        state.theme = ud.theme || 'dark';
                        state.language = ud.language || 'en';
                        if (state.userData.soundEnabled === undefined) state.userData.soundEnabled = true;
                    } else {
                        state.userData = {
                            key: 'userData',
                            xp: 0,
                            coins: 0,
                            level: 1,
                            currentStreak: 0,
                            lastActiveDate: '',
                            theme: 'dark',
                            language: 'en',
                            soundEnabled: true
                        };
                        return dbPut('userData', state.userData);
                    }
                }).then(function() {
                    updateDirection();
                    updateTheme();
                    updateOverallStreak();
                });
            }

            function updateOverallStreak() {
                var streak = calculateOverallStreak(state.logs);
                state.userData.currentStreak = streak;
                state.userData.lastActiveDate = getTodayStr();
            }

            function saveUserData() {
                state.userData.level = calculateLevel(state.userData.xp);
                state.userData.theme = state.theme;
                state.userData.language = state.language;
                return dbPut('userData', state.userData);
            }

            // ============================================================
            // NOTIFICATIONS
            // ============================================================
            function requestNotificationPermission() {
                if (!('Notification' in window)) return Promise.resolve('denied');
                return Notification.requestPermission().then(function(perm) {
                    state.notificationPermission = perm;
                    return perm;
                });
            }

            function sendNotification(title, body) {
                if (state.notificationPermission === 'granted') {
                    new Notification(title, { body: body, icon: '⚡', tag: 'habit-reminder' });
                }
            }

            function scheduleReminders() {
                if (state.reminderInterval) clearInterval(state.reminderInterval);
                state.reminderInterval = setInterval(function() {
                    var now = new Date();
                    var timeStr = now.toTimeString().slice(0, 5);
                    for (var i = 0; i < state.habits.length; i++) {
                        var habit = state.habits[i];
                        if (habit.reminderTime === timeStr && isHabitDueToday(habit)) {
                            var todayLog = state.logs.find(function(l) { return l.habitId === habit.id && l
                                    .date === getTodayStr(); });
                            if (!todayLog || !todayLog.completed) {
                                sendNotification(t('notificationTitle'), t('notificationBody') + ' ' + habit
                                    .name);
                            }
                        }
                    }
                }, 30000);
            }

            // ============================================================
            // SOUND EFFECTS (Web Audio API)
            // ============================================================
            var audioCtx = null;

            function getAudioCtx() {
                if (audioCtx) return audioCtx;
                try {
                    audioCtx = new(window.AudioContext || window.webkitAudioContext)();
                } catch (err) {
                    audioCtx = null;
                }
                return audioCtx;
            }
            var SFX_NOTES = {
                complete: [523.25, 659.25],
                levelup: [523.25, 659.25, 783.99],
                streak: [440, 554.37, 659.25],
            };

            function playSound(type) {
                type = type || 'complete';
                if (!state.userData || !state.userData.soundEnabled) return;
                var ctx = getAudioCtx();
                if (!ctx) return;
                try {
                    if (ctx.state === 'suspended') ctx.resume();
                    var notes = SFX_NOTES[type] || SFX_NOTES.complete;
                    var now = ctx.currentTime;
                    var step = 0.09;
                    var osc = ctx.createOscillator();
                    var gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    gain.gain.setValueAtTime(0.0001, now);
                    gain.gain.exponentialRampToValueAtTime(0.16, now + 0.01);
                    for (var i = 0; i < notes.length; i++) {
                        osc.frequency.setValueAtTime(notes[i], now + i * step);
                    }
                    var endTime = now + notes.length * step + 0.15;
                    gain.gain.exponentialRampToValueAtTime(0.0001, endTime);
                    osc.start(now);
                    osc.stop(endTime + 0.02);
                } catch (err) {
                    console.warn('[SFX] Playback failed:', err);
                }
            }

            // ============================================================
            // CONFETTI
            // ============================================================
            function spawnConfetti(count) {
                count = count || 40;
                var emojis = ['✨', '🎉', '🌟', '💫', '⭐', '🔥', '💎', '🏆', '🎯', '⚡'];
                for (var i = 0; i < count; i++) {
                    var particle = document.createElement('span');
                    particle.className = 'confetti-particle';
                    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = -(Math.random() * 60 + 10) + 'px';
                    particle.style.animationDuration = (1.2 + Math.random() * 2) + 's';
                    particle.style.animationDelay = Math.random() * 0.4 + 's';
                    document.body.appendChild(particle);
                    setTimeout(function(p) { return function() { p.remove(); }; }(particle), 2500);
                }
            }

            // ============================================================
            // TOAST
            // ============================================================
            function showToast(message, iconSvg) {
                var container = document.getElementById('toastContainer');
                var toast = document.createElement('div');
                toast.className = 'toast';
                var iconHTML = iconSvg ? iconSpan(iconSvg, 'icon-svg glow') : '✅';
                toast.innerHTML = iconHTML + ' ' + sanitizeHTML(message);
                container.appendChild(toast);
                setTimeout(function() {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateX(40px)';
                    toast.style.transition = 'all 0.3s ease';
                    setTimeout(function() { toast.remove(); }, 300);
                }, 2800);
            }

            function sanitizeHTML(str) {
                var div = document.createElement('div');
                div.textContent = str;
                return div.innerHTML;
            }

            // ============================================================
            // MODALS
            // ============================================================
            function showModal(title, contentHTML, onSave, onCancel) {
                var root = document.getElementById('modalRoot');
                var overlay = document.createElement('div');
                overlay.className = 'modal-overlay';
                overlay.innerHTML =
                    '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitleHeading">' +
                    '<h3 id="modalTitleHeading">' + sanitizeHTML(title) + '</h3>' +
                    '<div class="modal-body">' + contentHTML + '</div>' +
                    '<div style="display:flex;gap:10px;justify-content:flex-end;margin-top:18px;">' +
                    '<button class="btn btn-secondary btn-sm modal-cancel" aria-label="' + t('cancel') + '">' + t(
                        'cancel') + '</button>' +
                    '<button class="btn btn-primary btn-sm modal-save" aria-label="' + t('save') + '">' + t('save') +
                    '</button>' +
                    '</div></div>';
                root.appendChild(overlay);

                var saveBtn = overlay.querySelector('.modal-save');
                var cancelBtn = overlay.querySelector('.modal-cancel');

                function close() {
                    overlay.style.opacity = '0';
                    overlay.style.transition = 'opacity 0.2s ease';
                    setTimeout(function() { overlay.remove(); }, 200);
                }
                cancelBtn.onclick = function() {
                    close();
                    if (onCancel) onCancel();
                };
                saveBtn.onclick = function() {
                    var result = onSave ? onSave(overlay) : true;
                    if (result !== false) close();
                };
                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) {
                        close();
                        if (onCancel) onCancel();
                    }
                });
            }

            // ============================================================
            // HABIT FORM
            // ============================================================
            function openHabitForm(habit) {
                state.editingHabit = habit || null;
                var isEdit = !!habit;
                var name = habit && habit.name ? habit.name : '';
                var desc = habit && habit.description ? habit.description : '';
                var freq = habit && habit.frequency ? habit.frequency : 'daily';
                var isCustomDays = Array.isArray(freq);
                var customDays = isCustomDays ? freq : [];
                var category = habit && habit.category ? habit.category : 'wellness';
                var reminderTime = habit && habit.reminderTime ? habit.reminderTime : '';
                var color = habit && habit.color ? habit.color : '#5ec4d4';
                var icon = habit && habit.icon ? habit.icon : '✅';

                var categories = [
                    { value: 'wellness', label: '🧘 ' + t('wellness') },
                    { value: 'fitness', label: '💪 ' + t('fitness') },
                    { value: 'learning', label: '📚 ' + t('learning') },
                    { value: 'productivity', label: '⚡ ' + t('productivity') },
                    { value: 'social', label: '🤝 ' + t('social') },
                    { value: 'other', label: '📌 ' + t('other') },
                ];

                var dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
                var daysHTML = dayNames.map(function(d, i) {
                    return '<button type="button" class="day-pill' + (customDays.indexOf(i) !== -1 ?
                        ' selected' : '') + '" data-day="' + i + '">' + t(d) + '</button>';
                }).join('');

                var contentHTML =
                    '<div class="form-group"><label>' + t('habitName') +
                    '</label><input type="text" id="habitNameInput" value="' + sanitizeHTML(name) +
                    '" maxlength="60" required></div>' +
                    '<div class="form-group"><label>' + t('description') +
                    '</label><textarea id="habitDescInput" maxlength="200">' + sanitizeHTML(desc) +
                    '</textarea></div>' +
                    '<div class="form-group"><label>' + t('frequency') + '</label>' +
                    '<select id="habitFreqSelect">' +
                    '<option value="daily"' + (freq === 'daily' ? ' selected' : '') + '>' + t('daily') +
                    '</option>' +
                    '<option value="weekly"' + (freq === 'weekly' ? ' selected' : '') + '>' + t('weekly') +
                    '</option>' +
                    '<option value="custom"' + (isCustomDays ? ' selected' : '') + '>' + t('customDays') +
                    '</option>' +
                    '</select></div>' +
                    '<div class="form-group" id="customDaysGroup" style="display:' + (isCustomDays ? 'block' :
                        'none') + ';">' +
                    '<label>' + t('selectDays') + '</label>' +
                    '<div class="day-pills" id="dayPillsContainer">' + daysHTML + '</div></div>' +
                    '<div class="form-group"><label>' + t('category') + '</label>' +
                    '<select id="habitCatSelect">' + categories.map(function(c) {
                        return '<option value="' + c.value + '"' + (category === c.value ? ' selected' :
                            '') + '>' + c.label + '</option>';
                    }).join('') + '</select></div>' +
                    '<div class="form-group"><label>' + t('reminderTime') +
                    '</label><input type="time" id="habitReminderInput" value="' + reminderTime + '"></div>' +
                    '<input type="hidden" id="habitColorInput" value="' + color + '">' +
                    '<input type="hidden" id="habitIconInput" value="' + icon + '">';

                showModal(isEdit ? t('editHabit') : t('addHabit'), contentHTML, function(overlay) {
                    var nameVal = overlay.querySelector('#habitNameInput').value.trim();
                    if (!nameVal) {
                        showToast('Name is required', iconWarning());
                        return false;
                    }
                    var freqVal = overlay.querySelector('#habitFreqSelect').value;
                    var frequency = freqVal;
                    if (freqVal === 'custom') {
                        var pills = overlay.querySelectorAll('#dayPillsContainer .day-pill.selected');
                        frequency = Array.from(pills).map(function(p) { return parseInt(p.dataset.day); });
                        if (frequency.length === 0) {
                            showToast('Select at least one day', iconWarning());
                            return false;
                        }
                    }
                    var descVal = overlay.querySelector('#habitDescInput').value.trim();
                    var reminderVal = overlay.querySelector('#habitReminderInput').value || null;
                    var colorVal = overlay.querySelector('#habitColorInput').value;
                    var iconVal = overlay.querySelector('#habitIconInput').value || '✅';
                    var catVal = overlay.querySelector('#habitCatSelect').value;

                    encryptField(nameVal).then(function(encName) {
                        return encryptField(descVal).then(function(encDesc) {
                            var habitData = {
                                name: encName,
                                description: encDesc,
                                frequency: frequency,
                                category: catVal,
                                reminderTime: reminderVal,
                                color: colorVal,
                                icon: iconVal,
                                createdAt: habit && habit.createdAt ? habit.createdAt : new Date()
                                    .toISOString(),
                                archived: false,
                            };
                            if (isEdit) habitData.id = habit.id;
                            return dbPut('habits', habitData);
                        });
                    }).then(function() {
                        return loadAllData();
                    }).then(function() {
                        renderAll();
                        scheduleReminders();
                        showToast(isEdit ? 'Habit updated!' : 'Habit created!', iconCheck());
                    });
                    return true;
                });

                setTimeout(function() {
                    var freqSelect = document.querySelector('#habitFreqSelect');
                    var customGroup = document.querySelector('#customDaysGroup');
                    if (freqSelect && customGroup) {
                        freqSelect.addEventListener('change', function() {
                            customGroup.style.display = freqSelect.value === 'custom' ? 'block' :
                            'none';
                        });
                    }
                    var dayPills = document.querySelectorAll('#dayPillsContainer .day-pill');
                    dayPills.forEach(function(pill) {
                        pill.addEventListener('click', function() { pill.classList.toggle('selected'); });
                    });
                }, 50);
            }

            // ============================================================
            // REWARD FORM
            // ============================================================
            function openRewardForm(reward) {
                state.editingReward = reward || null;
                var isEdit = !!reward;
                var contentHTML =
                    '<div class="form-group"><label>' + t('rewardName') +
                    '</label><input type="text" id="rewardNameInput" value="' + sanitizeHTML(reward && reward.name ?
                        reward.name : '') + '" maxlength="50" required></div>' +
                    '<div class="form-group"><label>' + t('description') +
                    '</label><textarea id="rewardDescInput" maxlength="150">' + sanitizeHTML(reward && reward
                        .description ? reward.description : '') + '</textarea></div>' +
                    '<div class="form-group"><label>' + t('rewardCost') +
                    '</label><input type="number" id="rewardCostInput" value="' + (reward && reward.cost ? reward
                        .cost : 50) + '" min="1" max="99999" required></div>';

                showModal(isEdit ? 'Edit Reward' : t('addReward'), contentHTML, function(overlay) {
                    var nameVal = overlay.querySelector('#rewardNameInput').value.trim();
                    var costVal = parseInt(overlay.querySelector('#rewardCostInput').value);
                    if (!nameVal || isNaN(costVal) || costVal < 1) {
                        showToast('Invalid input', iconWarning());
                        return false;
                    }
                    var rewardDescVal = overlay.querySelector('#rewardDescInput').value.trim();

                    encryptField(nameVal).then(function(encName) {
                        return encryptField(rewardDescVal).then(function(encDesc) {
                            var rewardData = {
                                name: encName,
                                description: encDesc,
                                cost: costVal,
                                icon: '🎁',
                                redeemed: reward && reward.redeemed || false,
                                redeemedDate: reward && reward.redeemedDate || null,
                            };
                            if (isEdit) rewardData.id = reward.id;
                            return dbPut('rewards', rewardData);
                        });
                    }).then(function() {
                        return loadAllData();
                    }).then(function() {
                        renderAll();
                        showToast(isEdit ? 'Reward updated!' : 'Reward added!', iconGift());
                    });
                    return true;
                });
            }

            // ============================================================
            // HABIT ACTIONS
            // ============================================================
            function toggleHabitCompletion(habitId) {
                var today = getTodayStr();
                var existingLog = state.logs.find(function(l) { return l.habitId === habitId && l.date === today; });
                var habit = state.habits.find(function(h) { return h.id === habitId; });
                if (!habit) return Promise.resolve();

                if (existingLog && existingLog.completed) {
                    existingLog.completed = false;
                    return dbPut('logs', existingLog).then(function() {
                        var filteredLogs = state.logs.filter(function(l) {
                            return !(l.habitId === habitId && l.date === today && l.id === existingLog
                                .id);
                        });
                        var streakBefore = calculateHabitStreak(habitId, filteredLogs);
                        var xpLost = getXpForCompletion(streakBefore);
                        var coinsLost = getCoinsForCompletion(streakBefore);
                        state.userData.xp = Math.max(0, state.userData.xp - xpLost);
                        state.userData.coins = Math.max(0, state.userData.coins - coinsLost);
                        return saveUserData();
                    }).then(function() {
                        return loadAllData();
                    }).then(function() {
                        renderAll();
                        showToast('Completion undone', iconInfo());
                    });
                } else {
                    var logEntry = existingLog || { habitId: habitId, date: today, completed: true,
                        timestamp: new Date().toISOString() };
                    logEntry.completed = true;
                    logEntry.timestamp = new Date().toISOString();
                    return dbPut('logs', logEntry).then(function() {
                        var updatedLogs = state.logs.filter(function(l) {
                            return !(l.habitId === habitId && l.date === today);
                        });
                        updatedLogs.push({ habitId: habitId, date: today, completed: true });
                        var streak = calculateHabitStreak(habitId, updatedLogs);
                        var xpGained = getXpForCompletion(streak);
                        var coinsGained = getCoinsForCompletion(streak);
                        var oldLevel = calculateLevel(state.userData.xp);
                        state.userData.xp += xpGained;
                        state.userData.coins += coinsGained;
                        var newLevel = calculateLevel(state.userData.xp);
                        return saveUserData();
                    }).then(function() {
                        return loadAllData();
                    }).then(function() {
                        renderAll();
                        showToast('+' + xpGained + ' ' + t('xpEarned') + ' • +' + coinsGained + ' ' + t(
                            'coinsEarned'), iconFire());
                        playSound('complete');
                        var newLevel = calculateLevel(state.userData.xp);
                        var oldLevel = calculateLevel(state.userData.xp - getXpForCompletion(
                        calculateHabitStreak(habitId, state.logs)));
                        if (newLevel > oldLevel) {
                            showToast(t('levelUp') + ' ' + t('newLevel') + ' ' + newLevel + '!', iconStar());
                            spawnConfetti(50);
                            playSound('levelup');
                        }
                        var streak = calculateHabitStreak(habitId, state.logs);
                        if (streak > 0 && streak % 7 === 0) {
                            showToast(streak + ' ' + t('dayStreak') + '!', iconLightning());
                            spawnConfetti(25);
                            playSound('streak');
                        }
                    });
                }
            }

            function deleteHabit(habitId) {
                if (!confirm(t('confirmDelete'))) return Promise.resolve();
                var relatedLogs = state.logs.filter(function(l) { return l.habitId === habitId; });
                return dbDelete('habits', habitId).then(function() {
                    return Promise.all(relatedLogs.map(function(log) { return dbDelete('logs', log.id); }));
                }).then(function() {
                    return loadAllData();
                }).then(function() {
                    renderAll();
                    showToast('Habit deleted', iconTrash());
                });
            }

            function redeemReward(rewardId) {
                var reward = state.rewards.find(function(r) { return r.id === rewardId; });
                if (!reward || reward.redeemed) return Promise.resolve();
                if (state.userData.coins < reward.cost) {
                    showToast('Not enough coins!', iconWarning());
                    return Promise.resolve();
                }
                state.userData.coins -= reward.cost;
                reward.redeemed = true;
                reward.redeemedDate = getTodayStr();
                return saveUserData().then(function() {
                    return dbPut('rewards', reward);
                }).then(function() {
                    return loadAllData();
                }).then(function() {
                    renderAll();
                    showToast('Redeemed: ' + reward.name + '!', iconGift());
                    spawnConfetti(30);
                });
            }

            // ============================================================
            // SVG CHARTS & RINGS
            // ============================================================
            function createProgressRing(percentage, size, strokeWidth, color) {
                size = size || 90;
                strokeWidth = strokeWidth || 8;
                color = color || 'var(--accent)';
                var r = (size - strokeWidth) / 2;
                var circ = 2 * Math.PI * r;
                var offset = circ - (percentage / 100) * circ;
                return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
                    '<circle cx="' + (size / 2) + '" cy="' + (size / 2) + '" r="' + r +
                    '" fill="none" stroke="var(--ring-bg)" stroke-width="' + strokeWidth + '"/>' +
                    '<circle cx="' + (size / 2) + '" cy="' + (size / 2) + '" r="' + r +
                    '" fill="none" stroke="' + color + '" stroke-width="' + strokeWidth +
                    '" stroke-dasharray="' + circ + '" stroke-dashoffset="' + offset +
                    '" stroke-linecap="round" style="transition: stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1);"/>' +
                    '</svg>';
            }

            function buildWeeklyChart(containerId) {
                var container = document.getElementById(containerId);
                if (!container) return;
                var days = [];
                for (var i = 6; i >= 0; i--) {
                    var d = new Date(Date.now() - i * 86400000);
                    days.push({
                        label: getDayName(d.getDay()),
                        date: getDateStr(d),
                        short: d.toLocaleDateString(state.language === 'ar' ? 'ar' : 'en', { weekday: 'narrow' })
                    });
                }
                var dueHabitsPerDay = days.map(function(d) {
                    return state.habits.filter(function(h) {
                        if (h.frequency === 'daily') return true;
                        if (Array.isArray(h.frequency)) return h.frequency.indexOf(new Date(d.date)
                            .getDay()) !== -1;
                        return true;
                    }).length;
                });
                var completedPerDay = days.map(function(d) {
                    return state.logs.filter(function(l) { return l.date === d.date && l.completed; }).length;
                });

                var maxVal = Math.max.apply(null, dueHabitsPerDay.concat([1]));
                var barWidth = 36;
                var chartW = 420;
                var chartH = 180;
                var padL = 30;
                var padB = 32;
                var padT = 20;
                var plotH = chartH - padB - padT;

                var barsSVG = '';
                days.forEach(function(d, idx) {
                    var x = padL + idx * ((chartW - padL - 20) / 7) + 8;
                    var dueH = (dueHabitsPerDay[idx] / maxVal) * plotH;
                    var compH = (completedPerDay[idx] / maxVal) * plotH;
                    var yDue = padT + plotH - dueH;
                    var yComp = padT + plotH - compH;
                    barsSVG +=
                        '<rect x="' + x + '" y="' + yDue + '" width="' + barWidth + '" height="' + dueH +
                        '" rx="6" fill="var(--ring-bg)" class="bar-chart-bar"/>' +
                        '<rect x="' + x + '" y="' + yComp + '" width="' + barWidth + '" height="' + compH +
                        '" rx="6" fill="var(--accent)" class="bar-chart-bar" opacity="0.9"/>' +
                        '<text x="' + (x + barWidth / 2) + '" y="' + (chartH - padB + 18) +
                        '" text-anchor="middle" fill="var(--text-tertiary)" font-size="11">' + d.short +
                        '</text>' +
                        '<text x="' + (x + barWidth / 2) + '" y="' + (yComp - 6) +
                        '" text-anchor="middle" fill="var(--text-secondary)" font-size="10" font-weight="600">' +
                        completedPerDay[idx] + '/' + dueHabitsPerDay[idx] + '</text>';
                });

                container.innerHTML =
                    '<svg viewBox="0 0 ' + chartW + ' ' + chartH + '" style="width:100%;max-width:420px;">' +
                    barsSVG +
                    '<line x1="' + padL + '" y1="' + padT + '" x2="' + padL + '" y2="' + (chartH - padB) +
                    '" stroke="var(--chart-grid)" stroke-width="1"/>' +
                    '<line x1="' + padL + '" y1="' + (chartH - padB) + '" x2="' + (chartW - 10) + '" y2="' + (
                        chartH - padB) + '" stroke="var(--chart-grid)" stroke-width="1"/>' +
                    '</svg>';
            }

            function buildMonthlyGrid(containerId) {
                var container = document.getElementById(containerId);
                if (!container) return;
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var daysInMonth = new Date(year, month + 1, 0).getDate();
                var firstDay = new Date(year, month, 1).getDay();
                var cells = [];
                for (var d = 1; d <= daysInMonth; d++) {
                    var dateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
                    var totalDue = state.habits.filter(function(h) {
                        if (h.frequency === 'daily') return true;
                        if (Array.isArray(h.frequency)) return h.frequency.indexOf(new Date(dateStr)
                            .getDay()) !== -1;
                        return true;
                    }).length;
                    var completed = state.logs.filter(function(l) { return l.date === dateStr && l.completed; })
                        .length;
                    var rate = totalDue > 0 ? completed / totalDue : 0;
                    var fill = 'var(--ring-bg)';
                    if (rate >= 1) fill = 'var(--success)';
                    else if (rate >= 0.6) fill = 'var(--accent)';
                    else if (rate >= 0.3) fill = 'var(--accent3)';
                    else if (rate > 0) fill = 'var(--text-tertiary)';
                    cells.push({ dateStr: dateStr, rate: rate, fill: fill, day: d, completed: completed,
                        totalDue: totalDue });
                }
                var cellSize = 26;
                var gap = 4;
                var cols = 7;
                var rows = Math.ceil((firstDay + daysInMonth) / cols);
                var svgW = cols * (cellSize + gap) + 20;
                var svgH = rows * (cellSize + gap) + 30;

                var cellsSVG = '';
                cells.forEach(function(cell, idx) {
                    var col = (firstDay + idx) % cols;
                    var row = Math.floor((firstDay + idx) / cols);
                    var x = 10 + col * (cellSize + gap);
                    var y = 10 + row * (cellSize + gap);
                    cellsSVG += '<rect x="' + x + '" y="' + y + '" width="' + cellSize + '" height="' +
                        cellSize + '" rx="5" fill="' + cell.fill +
                        '" opacity="0.85"><title>' + cell.dateStr + ': ' + cell.completed + '/' + cell
                        .totalDue + ' ' + t('completed') + '</title></rect>';
                });

                container.innerHTML =
                    '<svg viewBox="0 0 ' + svgW + ' ' + svgH + '" style="width:100%;max-width:' + svgW +
                    'px;">' +
                    cellsSVG +
                    '<text x="10" y="' + (svgH - 6) +
                    '" fill="var(--text-tertiary)" font-size="10">' + now.toLocaleDateString(state.language ===
                        'ar' ? 'ar' : 'en', { month: 'long', year: 'numeric' }) + '</text>' +
                    '</svg>';
            }

            // ============================================================
            // RENDER – جميع دوال العرض
            // ============================================================
            function renderSidebar() {
                var nav = document.getElementById('sidebarNav');
                var pages = [
                    { id: 'dashboard', icon: iconDashboard, label: t('dashboard') },
                    { id: 'habits', icon: iconHabits, label: t('habits') },
                    { id: 'analytics', icon: iconAnalytics, label: t('analytics') },
                    { id: 'shop', icon: iconShop, label: t('shop') },
                    { id: 'settings', icon: iconSettings, label: t('settings') },
                ];
                // إضافة data-tooltip لكل زر لحل مشكلة التلميحات الفارغة
                nav.innerHTML = pages.map(function(p) {
                    return '<button class="' + (state.currentPage === p.id ? 'active' : '') +
                        '" data-page="' + p.id + '" data-tooltip="' + p.label + '" aria-label="' + p
                        .label + '"' + (state.currentPage === p.id ? ' aria-current="page"' : '') + '>' +
                        '<span class="nav-icon">' + iconSpan(p.icon(), 'icon-svg glow') + '</span>' +
                        '<span class="label-text">' + p.label + '</span>' +
                        '</button>';
                }).join('');
                nav.querySelectorAll('button').forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        state.currentPage = btn.dataset.page;
                        renderAll();
                    });
                });

                var themeToggleBtn = document.getElementById('btnThemeToggle');
                if (themeToggleBtn) {
                    var label = state.theme === 'dark' ? t('lightMode') : t('darkMode');
                    themeToggleBtn.setAttribute('aria-label', label);
                    themeToggleBtn.setAttribute('title', label);
                }
            }

            // ============================================================
            // دالة التحكم بالقائمة الجانبية (نسخة متطورة)
            // ============================================================
            function initSidebarToggle() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // استعادة الحالة المحفوظة (اختياري، يمكنك إبقاؤها)
    var isCollapsed = localStorage.getItem('habitquest-sidebar-collapsed') === 'true';
    sidebar.classList.toggle('collapsed', isCollapsed);

    // خاصية الطي التلقائي عند التمرير (بدون زر)
    var scrollTimeout = null;
    window.addEventListener('scroll', function() {
        if (sidebar.matches(':hover')) return;
        var currentScrollY = window.scrollY;
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = requestAnimationFrame(function() {
            if (currentScrollY > 150 && !sidebar.classList.contains('collapsed')) {
                sidebar.classList.add('collapsed');
                localStorage.setItem('habitquest-sidebar-collapsed', 'true');
            } else if (currentScrollY < 50 && sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                localStorage.setItem('habitquest-sidebar-collapsed', 'false');
            }
            scrollTimeout = null;
        });
    });
}

            function renderDashboard() {
                var main = document.getElementById('mainContent');
                var todayStr = getTodayStr();
                var dueHabits = state.habits.filter(function(h) { return isHabitDueToday(h); });
                var completedToday = state.logs.filter(function(l) { return l.date === todayStr && l.completed; })
                .length;
                var totalDue = dueHabits.length;
                var progressPercent = totalDue > 0 ? Math.round((completedToday / totalDue) * 100) : 0;
                var overallStreak = state.userData.currentStreak || 0;
                var xpProgress = xpProgressInLevel(state.userData.xp);

                var dueHabitsHTML = dueHabits.length === 0 ?
                    '<p style="color:var(--text-tertiary);text-align:center;padding:20px;">' + t('noHabits') +
                    '</p>' :
                    dueHabits.map(function(h) {
                        var isDone = state.logs.some(function(l) { return l.habitId === h.id && l
                                .date === todayStr && l.completed; });
                        var streak = calculateHabitStreak(h.id, state.logs);
                        var checkIcon = isDone ? iconSpan(iconCheck(), 'icon-svg glow') : '';
                        var fireIcon = streak > 0 ? iconSpan(iconFire(), 'icon-svg flicker') : '';
                        return '<div class="habit-item" onclick="window._habitQuest.toggleHabit(' + h
                            .id +
                            ')" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();window._habitQuest.toggleHabit(' +
                            h.id +
                            ')}" role="button" tabindex="0" aria-pressed="' + isDone +
                            '" aria-label="' + sanitizeHTML(h.name) + (isDone ? '' : ' ' + t(
                                'complete')) + '">' +
                            '<div class="habit-check' + (isDone ? ' done' : '') + '">' + checkIcon +
                            '</div>' +
                            '<div class="habit-info">' +
                            '<div class="habit-name">' + sanitizeHTML(h.icon || '✅') + ' ' +
                            sanitizeHTML(h.name) + '</div>' +
                            '<div class="habit-streak">' + (streak > 0 ? fireIcon + ' ' + streak +
                                ' ' + t('days') : '') + '</div>' +
                            '</div>' +
                            '<div class="habit-actions">' +
                            '<button class="btn-icon" onclick="event.stopPropagation();window._habitQuest.editHabit(' +
                            h.id +
                            ')" title="' + t('edit') + '" aria-label="' + t('edit') + ' ' +
                            sanitizeHTML(h.name) + '">' + iconSpan(iconEdit(), 'icon-svg') +
                            '</button>' +
                            '</div></div>';
                    }).join('');

                main.innerHTML =
                    '<div class="page active" id="page-dashboard">' +
                    '<div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap;">' +
                    '<div class="level-badge">' + state.userData.level + '</div>' +
                    '<div style="flex:1;min-width:150px;">' +
                    '<div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-secondary);margin-bottom:4px;">' +
                    '<span>' + t('level') + ' ' + state.userData.level + '</span><span>' + t('xp') +
                    ': ' + state.userData.xp + '</span>' +
                    '</div>' +
                    '<div class="xp-bar-outer"><div class="xp-bar-inner" style="width:' + xpProgress +
                    '%;"></div></div>' +
                    '</div>' +
                    '<div style="font-weight:700;color:var(--accent3);display:flex;align-items:center;gap:4px;">' +
                    iconSpan(iconCoin(), 'icon-svg glow pulse') + ' ' + state.userData.coins +
                    '</div></div>' +
                    '<div class="stats-grid">' +
                    '<div class="stat-card"><div class="stat-value">' + completedToday + '/' + totalDue +
                    '</div><div class="stat-label">' + t('todayProgress') + '</div></div>' +
                    '<div class="stat-card"><div class="stat-value">' + overallStreak +
                    '</div><div class="stat-label">' + iconSpan(iconFire(), 'icon-svg flicker') + ' ' +
                    t('streak') + '</div></div>' +
                    '<div class="stat-card"><div class="stat-value">' + state.userData.xp +
                    '</div><div class="stat-label">' + iconSpan(iconXp(), 'icon-svg glow') + ' ' + t(
                        'xp') + '</div></div>' +
                    '<div class="stat-card"><div class="stat-value">' + iconSpan(iconCoin(),
                        'icon-svg glow pulse') + ' ' + state.userData.coins +
                    '</div><div class="stat-label">' + t('coins') + '</div></div>' +
                    '</div>' +
                    '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:20px;">' +
                    '<div class="card" style="flex:1;min-width:200px;text-align:center;">' +
                    '<div class="card-glow"></div>' +
                    '<div class="ring-container" id="progressRingContainer"></div>' +
                    '<p style="margin-top:8px;font-weight:600;">' + t('todayProgress') + '</p>' +
                    '</div>' +
                    '<div class="card" style="flex:2;min-width:300px;">' +
                    '<div class="card-glow"></div>' +
                    '<h4 style="margin-bottom:12px;">' + t('weeklyOverview') + '</h4>' +
                    '<div id="weeklyChartContainer" class="chart-container"></div>' +
                    '</div></div>' +
                    '<div class="card">' +
                    '<div class="card-glow"></div>' +
                    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">' +
                    '<h4>' + t('habits') + '</h4>' +
                    '<button class="btn btn-primary btn-sm" id="btnAddHabitDash">' + iconSpan(iconAdd(),
                        'icon-svg') + ' ' + t('addHabit') +
                    '</button></div>' +
                    '<div class="habit-list" id="dashboardHabitList">' + dueHabitsHTML +
                    '</div></div></div>';

                setTimeout(function() {
                    var ringContainer = document.getElementById('progressRingContainer');
                    if (ringContainer) {
                        ringContainer.innerHTML = createProgressRing(progressPercent, 100, 9,
                            'var(--accent)') + '<span class="ring-value">' + progressPercent +
                            '%</span>';
                    }
                    buildWeeklyChart('weeklyChartContainer');
                }, 50);

                document.getElementById('btnAddHabitDash')?.addEventListener('click', function() {
                    openHabitForm();
                });
            }

            function renderHabitsPage() {
                var main = document.getElementById('mainContent');
                var habitsHTML = state.habits.length === 0 ?
                    '<p style="color:var(--text-tertiary);text-align:center;padding:40px;">' + t('noHabits') +
                    '</p>' :
                    state.habits.map(function(h) {
                        var streak = calculateHabitStreak(h.id, state.logs);
                        var freqLabel = Array.isArray(h.frequency) ? h.frequency.map(function(i) {
                            return getDayName(i);
                        }).join(', ') : t(h.frequency);
                        var fireIcon = streak > 0 ? iconSpan(iconFire(), 'icon-svg flicker') : '';
                        return '<div class="habit-item">' +
                            '<div class="habit-info">' +
                            '<div class="habit-name">' + sanitizeHTML(h.icon || '✅') + ' ' +
                            sanitizeHTML(h.name) + '</div>' +
                            '<div style="font-size:0.72rem;color:var(--text-tertiary);display:flex;align-items:center;gap:4px;">' +
                            freqLabel + ' • ' + fireIcon + ' ' + streak + ' ' + t('days') +
                            '</div></div>' +
                            '<div class="habit-actions">' +
                            '<button class="btn-icon" onclick="window._habitQuest.editHabit(' + h.id +
                            ')" title="' + t('edit') + '" aria-label="' + t('edit') + ' ' +
                            sanitizeHTML(h.name) + '">' + iconSpan(iconEdit(), 'icon-svg') +
                            '</button>' +
                            '<button class="btn-icon danger" onclick="window._habitQuest.deleteHabit(' +
                            h.id + ')" title="' + t('delete') + '" aria-label="' + t('delete') +
                            ' ' + sanitizeHTML(h.name) + '">' + iconSpan(iconTrash(), 'icon-svg') +
                            '</button>' +
                            '</div></div>';
                    }).join('');

                main.innerHTML =
                    '<div class="page active" id="page-habits">' +
                    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">' +
                    '<h2>' + t('habits') + '</h2>' +
                    '<button class="btn btn-primary" id="btnAddHabit">' + iconSpan(iconAdd(), 'icon-svg') +
                    ' ' + t('addHabit') + '</button></div>' +
                    '<div class="card"><div class="card-glow"></div><div class="habit-list">' + habitsHTML +
                    '</div></div></div>';

                document.getElementById('btnAddHabit')?.addEventListener('click', function() { openHabitForm(); });
            }

            function renderAnalyticsPage() {
                var main = document.getElementById('mainContent');
                main.innerHTML =
                    '<div class="page active" id="page-analytics">' +
                    '<h2 style="margin-bottom:16px;">' + t('analytics') + '</h2>' +
                    '<div class="card" style="margin-bottom:16px;">' +
                    '<div class="card-glow"></div>' +
                    '<h4 style="margin-bottom:10px;">' + t('weeklyOverview') + '</h4>' +
                    '<div id="analyticsWeeklyChart" class="chart-container"></div></div>' +
                    '<div class="card">' +
                    '<div class="card-glow"></div>' +
                    '<h4 style="margin-bottom:10px;">Monthly Activity</h4>' +
                    '<div id="analyticsMonthlyGrid" class="chart-container"></div></div></div>';

                setTimeout(function() {
                    buildWeeklyChart('analyticsWeeklyChart');
                    buildMonthlyGrid('analyticsMonthlyGrid');
                }, 50);
            }

            function renderShopPage() {
                var main = document.getElementById('mainContent');
                var rewardsHTML = state.rewards.length === 0 ?
                    '<p style="color:var(--text-tertiary);text-align:center;padding:40px;">' + t('noRewards') +
                    '</p>' :
                    state.rewards.map(function(r) {
                        return '<div class="shop-item' + (r.redeemed ? ' redeemed' : '') + '">' +
                            '<div class="shop-icon">' + (r.icon || '🎁') + '</div>' +
                            '<h4>' + sanitizeHTML(r.name) + '</h4>' +
                            '<p style="font-size:0.78rem;color:var(--text-secondary);">' + sanitizeHTML(
                                r.description || '') + '</p>' +
                            '<div class="shop-cost">' + iconSpan(iconCoin(), 'icon-svg glow pulse') +
                            ' ' + r.cost + '</div>' +
                            (r.redeemed ?
                                '<p style="font-size:0.7rem;color:var(--success);margin-top:4px;">' +
                                iconSpan(iconCheck(), 'icon-svg glow') + ' ' + t('redeemed') +
                                '</p>' :
                                '<button class="btn btn-primary btn-xs" style="margin-top:8px;" onclick="window._habitQuest.redeemReward(' +
                                r.id + ')"' + (state.userData.coins < r.cost ? ' disabled' : '') +
                                '>' + t('redeem') + '</button>') +
                            '</div>';
                    }).join('');

                main.innerHTML =
                    '<div class="page active" id="page-shop">' +
                    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">' +
                    '<h2>' + t('shop') + ' <span style="font-size:0.9rem;color:var(--accent3);display:inline-flex;align-items:center;gap:4px;">' +
                    iconSpan(iconCoin(), 'icon-svg glow pulse') + ' ' + state.userData.coins +
                    '</span></h2>' +
                    '<button class="btn btn-primary" id="btnAddReward">' + iconSpan(iconAdd(), 'icon-svg') +
                    ' ' + t('addReward') + '</button></div>' +
                    '<div class="shop-grid">' + rewardsHTML + '</div></div>';

                document.getElementById('btnAddReward')?.addEventListener('click', function() { openRewardForm(); });
            }

            // تعديل دالة renderSettingsPage لتحسين تبديل الثيم (تجنب الوميض)
            function renderSettingsPage() {
                var main = document.getElementById('mainContent');
                main.innerHTML =
                    '<div class="page active" id="page-settings">' +
                    '<h2 style="margin-bottom:16px;">' + t('settings') + '</h2>' +
                    '<div class="card" style="margin-bottom:12px;">' +
                    '<div class="card-glow"></div>' +
                    '<h4>' + t('language') + '</h4>' +
                    '<div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">' +
                    '<button class="btn btn-sm ' + (state.language === 'en' ? 'btn-primary' :
                        'btn-secondary') + '" data-lang="en">🇬🇧 English</button>' +
                    '<button class="btn btn-sm ' + (state.language === 'fr' ? 'btn-primary' :
                        'btn-secondary') + '" data-lang="fr">🇫🇷 Français</button>' +
                    '<button class="btn btn-sm ' + (state.language === 'ar' ? 'btn-primary' :
                        'btn-secondary') + '" data-lang="ar">🇸🇦 العربية</button>' +
                    '</div></div>' +
                    '<div class="card" style="margin-bottom:12px;">' +
                    '<div class="card-glow"></div>' +
                    '<h4>' + t('darkMode') + ' / ' + t('lightMode') + '</h4>' +
                    '<button class="btn btn-sm btn-secondary" id="btnToggleThemeInline" style="margin-top:8px;" aria-label="' +
                    (state.theme === 'dark' ? t('lightMode') : t('darkMode')) + '">' +
                    (state.theme === 'dark' ?
                        iconSpan(iconSun(), 'icon-svg glow') + ' ' + t('lightMode') :
                        iconSpan(iconMoon(), 'icon-svg glow') + ' ' + t('darkMode')) +
                    '</button></div>' +
                    '<div class="card" style="margin-bottom:12px;">' +
                    '<div class="card-glow"></div>' +
                    '<h4>' + t('soundEffects') + '</h4>' +
                    '<button class="btn btn-sm btn-secondary" id="btnToggleSound" style="margin-top:8px;" aria-label="' +
                    (state.userData.soundEnabled ? t('soundOn') : t('soundOff')) + '" aria-pressed="' + (!!
                        state.userData.soundEnabled) + '">' +
                    (state.userData.soundEnabled ?
                        iconSpan(iconCheck(), 'icon-svg glow') + ' ' + t('soundOn') :
                        iconSpan(iconWarning(), 'icon-svg') + ' ' + t('soundOff')) +
                    '</button></div>' +
                    '<div class="card" style="margin-bottom:12px;">' +
                    '<div class="card-glow"></div>' +
                    '<h4>' + t('notifications') + '</h4>' +
                    '<button class="btn btn-sm btn-secondary" id="btnRequestNotif" style="margin-top:8px;" aria-label="' +
                    t('enableReminders') + '">' +
                    iconSpan(iconInfo(), 'icon-svg glow') + ' ' + t('enableReminders') +
                    '</button>' +
                    '<p style="font-size:0.7rem;color:var(--text-tertiary);margin-top:4px;">' + t(
                        'notifStatus') + ': ' + state.notificationPermission +
                    '</p></div>' +
                    '<div class="card">' +
                    '<div class="card-glow"></div>' +
                    '<h4>' + t('dataSection') + '</h4>' +
                    '<div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">' +
                    '<button class="btn btn-sm btn-secondary" id="btnExport" aria-label="' + t(
                        'exportData') + '">' +
                    iconSpan(iconAnalytics(), 'icon-svg') + ' ' + t('exportData') +
                    '</button>' +
                    '<button class="btn btn-sm btn-secondary" id="btnImport" aria-label="' + t(
                        'importData') + '">' +
                    iconSpan(iconAdd(), 'icon-svg') + ' ' + t('importData') +
                    '</button>' +
                    '<input type="file" id="importFileInput" accept="application/json" style="display:none;" aria-hidden="true">' +
                    '<button class="btn btn-sm btn-secondary danger" id="btnClear" style="color:var(--danger);" aria-label="' +
                    t('clearData') + '">' +
                    iconSpan(iconTrash(), 'icon-svg') + ' ' + t('clearData') +
                    '</button></div></div></div>';

                // أحداث الأزرار
                document.querySelectorAll('[data-lang]').forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        state.language = btn.dataset.lang;
                        updateDirection();
                        saveUserData().then(function() {
                            renderAll();
                            showToast('Language: ' + state.language.toUpperCase(), iconInfo());
                        });
                    });
                });

                // تحسين تبديل الثيم: تحديث الثيم دون إعادة رسم الصفحة كاملة
                var themeToggleInline = document.getElementById('btnToggleThemeInline');
                if (themeToggleInline) {
                    themeToggleInline.addEventListener('click', function() {
                        state.theme = state.theme === 'dark' ? 'light' : 'dark';
                        updateTheme();
                        saveUserData().then(function() {
                            // تحديث الزر نفسه ليعكس الثيم الجديد
                            var newLabel = state.theme === 'dark' ? t('lightMode') : t('darkMode');
                            themeToggleInline.setAttribute('aria-label', newLabel);
                            themeToggleInline.innerHTML = (state.theme === 'dark' ?
                                iconSpan(iconSun(), 'icon-svg glow') + ' ' + t('lightMode') :
                                iconSpan(iconMoon(), 'icon-svg glow') + ' ' + t('darkMode'));
                            // لا ندعو renderAll() حتى لا نعيد رسم الصفحة
                            // لكن يجب تحديث باقي العناصر التي تعتمد على الثيم مثل أزرار القائمة الجانبية
                            // يمكن تحديث زر الثيم الرئيسي في الأسفل أيضاً
                            var mainThemeBtn = document.getElementById('btnThemeToggle');
                            if (mainThemeBtn) {
                                var mainIconHTML = state.theme === 'dark' ? iconSun() : iconMoon();
                                mainThemeBtn.innerHTML = iconSpan(mainIconHTML, 'icon-svg glow');
                            }
                        });
                    });
                }

                document.getElementById('btnToggleSound')?.addEventListener('click', function() {
                    state.userData.soundEnabled = !state.userData.soundEnabled;
                    saveUserData().then(function() {
                        renderAll();
                        if (state.userData.soundEnabled) playSound('complete');
                    });
                });

                document.getElementById('btnRequestNotif')?.addEventListener('click', function() {
                    requestNotificationPermission().then(function(perm) {
                        showToast('Notification permission: ' + perm, iconInfo());
                        scheduleReminders();
                    });
                });

                document.getElementById('btnExport')?.addEventListener('click', function() {
                    var data = {
                        schema: 'habitquest-backup',
                        schemaVersion: 1,
                        habits: state.habits,
                        logs: state.logs,
                        rewards: state.rewards,
                        userData: state.userData,
                        exportedAt: new Date().toISOString(),
                    };
                    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                    var url = URL.createObjectURL(blob);
                    var a = document.createElement('a');
                    a.href = url;
                    a.download = 'habitquest-backup.json';
                    a.click();
                    URL.revokeObjectURL(url);
                    showToast('Data exported!', iconCheck());
                });

                document.getElementById('btnImport')?.addEventListener('click', function() {
                    document.getElementById('importFileInput')?.click();
                });

                document.getElementById('importFileInput')?.addEventListener('change', function(e) {
                    var file = e.target.files && e.target.files[0];
                    e.target.value = '';
                    if (!file) return;
                    var reader = new FileReader();
                    reader.onload = function(ev) {
                        try {
                            var parsed = JSON.parse(ev.target.result);
                            var looksValid = parsed && typeof parsed === 'object' &&
                                Array.isArray(parsed.habits) && Array.isArray(parsed.rewards) &&
                                Array.isArray(parsed.logs);
                            if (!looksValid) {
                                showToast(t('invalidBackupFile'), iconWarning());
                                return;
                            }
                            if (!confirm(t('confirmImport'))) return;

                            var stores = ['habits', 'logs', 'rewards'];
                            var clearPromises = [];
                            stores.forEach(function(s) {
                                clearPromises.push(dbGetAll(s).then(function(all) {
                                    return Promise.all(all.map(function(item) {
                                        return dbDelete(s, item.id);
                                    }));
                                }));
                            });

                            Promise.all(clearPromises).then(function() {
                                var importPromises = [];
                                parsed.habits.forEach(function(h) {
                                    var rest = { ...h };
                                    delete rest.id;
                                    importPromises.push(encryptField(rest.name || '')
                                        .then(function(encName) {
                                            return encryptField(rest
                                                .description || '');
                                        }).then(function(encDesc) {
                                            rest.name = encName;
                                            rest.description = encDesc;
                                            return dbPut('habits', rest);
                                        }));
                                });
                                parsed.rewards.forEach(function(r) {
                                    var rest = { ...r };
                                    delete rest.id;
                                    importPromises.push(encryptField(rest.name || '')
                                        .then(function(encName) {
                                            return encryptField(rest
                                                .description || '');
                                        }).then(function(encDesc) {
                                            rest.name = encName;
                                            rest.description = encDesc;
                                            return dbPut('rewards', rest);
                                        }));
                                });
                                parsed.logs.forEach(function(l) {
                                    var rest = { ...l };
                                    delete rest.id;
                                    importPromises.push(dbPut('logs', rest));
                                });
                                if (parsed.userData) {
                                    var importedUserData = { ...parsed.userData,
                                        key: 'userData' };
                                    if (importedUserData.soundEnabled === undefined)
                                        importedUserData.soundEnabled = true;
                                    importPromises.push(dbPut('userData',
                                    importedUserData));
                                }
                                return Promise.all(importPromises);
                            }).then(function() {
                                return loadAllData();
                            }).then(function() {
                                renderAll();
                                showToast(t('importSuccess'), iconCheck());
                            }).catch(function(err) {
                                console.error('[Import] Failed:', err);
                                showToast(t('importError'), iconWarning());
                            });
                        } catch (err) {
                            console.error('[Import] Parse error:', err);
                            showToast(t('importError'), iconWarning());
                        }
                    };
                    reader.readAsText(file);
                });

                document.getElementById('btnClear')?.addEventListener('click', function() {
                    if (confirm('Delete ALL data permanently? This cannot be undone.')) {
                        var stores = ['habits', 'logs', 'rewards', 'userData'];
                        var clearPromises = [];
                        stores.forEach(function(s) {
                            clearPromises.push(dbGetAll(s).then(function(all) {
                                return Promise.all(all.map(function(item) {
                                    return dbDelete(s, item.id || item.key);
                                }));
                            }));
                        });
                        Promise.all(clearPromises).then(function() {
                            state = {
                                ...state,
                                habits: [],
                                logs: [],
                                rewards: [],
                                userData: {
                                    key: 'userData',
                                    xp: 0,
                                    coins: 0,
                                    level: 1,
                                    currentStreak: 0,
                                    lastActiveDate: '',
                                    theme: state.theme,
                                    language: state.language,
                                    soundEnabled: true
                                }
                            };
                            return dbPut('userData', state.userData);
                        }).then(function() {
                            renderAll();
                            showToast('All data cleared', iconWarning());
                        });
                    }
                });
            }

            function renderAll() {
                renderSidebar();
                switch (state.currentPage) {
                    case 'dashboard':
                        renderDashboard();
                        break;
                    case 'habits':
                        renderHabitsPage();
                        break;
                    case 'analytics':
                        renderAnalyticsPage();
                        break;
                    case 'shop':
                        renderShopPage();
                        break;
                    case 'settings':
                        renderSettingsPage();
                        break;
                    default:
                        renderDashboard();
                }
            }

            // ============================================================
            // GLOBAL HANDLERS
            // ============================================================
            window._habitQuest = {
                toggleHabit: toggleHabitCompletion,
                editHabit: function(id) {
                    var habit = state.habits.find(function(h) { return h.id === id; });
                    if (habit) openHabitForm(habit);
                },
                deleteHabit: deleteHabit,
                redeemReward: redeemReward,
                renderAll: renderAll,
            };

            document.getElementById('btnThemeToggle')?.addEventListener('click', function() {
                state.theme = state.theme === 'dark' ? 'light' : 'dark';
                updateTheme();
                saveUserData().then(function() { renderAll(); });
            });

            // ============================================================
            // INIT
            // ============================================================
            function init() {
                openDB().then(function() {
                    return getOrCreateCryptoKey();
                }).then(function(key) {
                    cryptoKey = key;
                    return loadAllData();
                }).then(function() {
                    updateDirection();
                    updateTheme();
                    renderAll();
                    scheduleReminders();

                    if ('serviceWorker' in navigator) {
                        navigator.serviceWorker.register('./sw.js')
                            .then(function(reg) { console.log('✅ SW registered:', reg); })
                            .catch(function(err) { console.error('❌ SW registration failed:', err); });
                    }

                    if ('Notification' in window) {
                        state.notificationPermission = Notification.permission;
                    }

                    if (streakUpdateInterval) {
                        clearInterval(streakUpdateInterval);
                        streakUpdateInterval = null;
                    }

                    streakUpdateInterval = setInterval(function() {
                        updateOverallStreak();
                        saveUserData();
                    }, 60000);

                    window.addEventListener('beforeunload', function() {
                        if (streakUpdateInterval) {
                            clearInterval(streakUpdateInterval);
                            streakUpdateInterval = null;
                        }
                        if (state.reminderInterval) {
                            clearInterval(state.reminderInterval);
                            state.reminderInterval = null;
                        }
                    });

                    document.getElementById('logoIcon').innerHTML = iconSpan(iconLightning(), 'logo-icon-svg');


                    // تهيئة القائمة الجانبية (بعد أن يصبح كل شيء جاهزاً)
                    initSidebarToggle();
                }).catch(function(err) {
                    console.error('Initialization error:', err);
                    document.getElementById('mainContent').innerHTML =
                        '<p style="color:var(--danger);padding:40px;">Failed to initialize. Please refresh the page.</p>';
                });
            }

            // ============================================================
            // مراقبة التغييرات في DOM لإضافة كلاس "is-visible" للبطاقات
            // ============================================================
            new MutationObserver(function() {
                document.querySelectorAll('.card, .habit-item').forEach(function(el) {
                    el.classList.add('is-visible');
                });
            }).observe(document.getElementById('mainContent'), { childList: true, subtree: true });

            // بدء التطبيق
            init();

        })();