/* ============================================================
   OPES LANDING PAGE – script.js
   ============================================================ */

/* ---- COPIA IBAN ---- */
function copyIBAN(btn) {
    const iban = 'IT11L05387032080000010887812';
    navigator.clipboard.writeText('IT 11 L 05387 03208 000001088781').then(function () {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.classList.add('copied');
        setTimeout(function () {
            btn.innerHTML = orig;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(function () {
        // fallback
        const el = document.createElement('textarea');
        el.value = 'IT 11 L 05387 03208 000001088781';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.classList.add('copied');
        setTimeout(function () {
            btn.innerHTML = '<i class="fas fa-copy"></i>';
            btn.classList.remove('copied');
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', function () {

    /* ---- MOBILE NAV TOGGLE ---- */
    const navToggle = document.getElementById('nav-toggle');
    const mainNav   = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');
            const isOpen = mainNav.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Chiudi nav cliccando su un link
        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('open');
            });
        });
    }

    /* ---- STICKY HEADER SHADOW ---- */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ---- BACK TO TOP ---- */
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- PROGRAMMA TABS ---- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const programmaDays = document.querySelectorAll('.programma-content');

    tabBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const day = btn.getAttribute('data-day');

            tabBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            programmaDays.forEach(function (content) {
                content.classList.add('hidden');
            });

            const target = document.getElementById('programma-day-' + day);
            if (target) {
                target.classList.remove('hidden');
                target.style.animation = 'fadeInUp .4s ease both';
            }
        });
    });

    /* ---- FAQ ACCORDION ---- */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', function () {
            const isOpen = item.classList.contains('open');
            // Chiudi tutte
            faqItems.forEach(function (i) { i.classList.remove('open'); });
            // Apri quella cliccata (se non era già aperta)
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    /* ---- COUNTDOWN ---- */
    const courseDate = new Date('2025-04-18T09:00:00').getTime();
    const cdDays  = document.getElementById('cd-days');
    const cdHours = document.getElementById('cd-hours');
    const cdMin   = document.getElementById('cd-min');
    const cdSec   = document.getElementById('cd-sec');
    const cdBar   = document.getElementById('countdown-bar');

    function updateCountdown() {
        const now  = Date.now();
        const diff = courseDate - now;

        if (diff <= 0) {
            if (cdBar) cdBar.classList.add('hidden-bar');
            return;
        }

        const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs  = Math.floor((diff % (1000 * 60)) / 1000);

        if (cdDays)  cdDays.textContent  = String(days).padStart(2, '0');
        if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
        if (cdMin)   cdMin.textContent   = String(mins).padStart(2, '0');
        if (cdSec)   cdSec.textContent   = String(secs).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Chiudi countdown bar
    const countdownClose = document.getElementById('countdown-close');
    if (countdownClose && cdBar) {
        countdownClose.addEventListener('click', function () {
            cdBar.classList.add('hidden-bar');
        });
    }

    /* ---- COUNTER ANIMATION ---- */
    function animateCounter(el, target, duration) {
        let start = 0;
        const step = Math.ceil(target / (duration / 50));
        const suffix = el.getAttribute('data-suffix') || '';
        const interval = setInterval(function () {
            start += step;
            if (start >= target) {
                el.textContent = target + suffix;
                clearInterval(interval);
            } else {
                el.textContent = start + suffix;
            }
        }, 50);
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    function startCounters() {
        if (countersStarted) return;
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersStarted = true;
            statNumbers.forEach(function (el) {
                const target = parseInt(el.getAttribute('data-target'), 10);
                animateCounter(el, target, 1500);
            });
        }
    }

    window.addEventListener('scroll', startCounters);
    startCounters(); // per primo render

    /* ---- SCROLL ANIMATIONS ---- */
    const animatedEls = document.querySelectorAll(
        '.info-card, .obiettivo-item, .timeline-block, .destinatario-card, .contatto-card, .faq-item'
    );

    animatedEls.forEach(function (el) {
        el.classList.add('animate-on-scroll');
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, idx) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('animated');
                }, idx * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedEls.forEach(function (el) {
        observer.observe(el);
    });

    /* ---- SMOOTH SCROLL per link interni ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const hash = this.getAttribute('href');
            if (hash === '#' || hash === '') return;
            const target = document.querySelector(hash);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    /* ---- FORM ISCRIZIONE – mailto ---- */
    const form        = document.getElementById('iscrizione-form');
    const formSuccess = document.getElementById('form-success');

    // Mappa valore qualifica → etichetta leggibile
    const qualificaLabel = {
        'allenatore':       'Allenatore Sportivo',
        'istruttore_fitness':'Istruttore Fitness',
        'insegnante_ef':    'Insegnante di Educazione Fisica',
        'studente':         'Studente ISEF/Scienze Motorie',
        'appassionato':     'Appassionato di Sport',
        'altro':            'Altro'
    };

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparazione email...';

            // Raccoglie i dati dal form
            const nome      = form.nome.value.trim();
            const cognome   = form.cognome.value.trim();
            const email     = form.email.value.trim();
            const telefono  = form.telefono.value.trim() || 'Non indicato';
            const citta     = form.citta.value.trim()    || 'Non indicata';
            const qualifica = qualificaLabel[form.qualifica.value] || 'Non indicata';
            const messaggio = form.messaggio.value.trim() || 'Nessuna nota';
            const dataOra   = new Date().toLocaleString('it-IT');

            // Salva anche sul database
            try {
                await fetch('tables/iscrizioni', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        nome, cognome, email,
                        telefono, citta,
                        qualifica: form.qualifica.value,
                        messaggio,
                        data_iscrizione: new Date().toISOString()
                    })
                });
            } catch (err) {
                console.warn('Salvataggio DB non disponibile:', err);
            }

            // Compone l'oggetto email
            const oggetto = encodeURIComponent(
                '📋 Nuova Iscrizione Corso OPES – ' + nome + ' ' + cognome
            );

            // Compone il corpo email con tutti i dati
            const corpo = encodeURIComponent(
                '══════════════════════════════════════\n' +
                '   NUOVA RICHIESTA DI ISCRIZIONE\n' +
                '   6° Corso OPES – Educazione al Movimento\n' +
                '══════════════════════════════════════\n\n' +
                '📅 Data invio: ' + dataOra + '\n\n' +
                '─────────────────────────────────────\n' +
                '  DATI PERSONALI\n' +
                '─────────────────────────────────────\n' +
                '▸ Nome:          ' + nome + '\n' +
                '▸ Cognome:       ' + cognome + '\n' +
                '▸ Email:         ' + email + '\n' +
                '▸ Telefono:      ' + telefono + '\n' +
                '▸ Città:         ' + citta + '\n' +
                '▸ Qualifica:     ' + qualifica + '\n\n' +
                '─────────────────────────────────────\n' +
                '  NOTE / DOMANDE\n' +
                '─────────────────────────────────────\n' +
                messaggio + '\n\n' +
                '══════════════════════════════════════\n' +
                '  CORSO: Sabato 18 e Domenica 19 Aprile\n' +
                '  Contatto: +39 324 615 9299\n' +
                '══════════════════════════════════════'
            );

            // Costruisce il link mailto e lo apre
            const mailtoLink = 'mailto:partecipazionecorsi@gmail.com'
                + '?subject=' + oggetto
                + '&body='    + corpo;

            // Piccolo delay per feedback visivo
            setTimeout(function () {
                window.location.href = mailtoLink;

                // Mostra messaggio di successo
                form.style.display = 'none';
                if (formSuccess) {
                    formSuccess.classList.remove('hidden');
                }

                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Invia Richiesta di Iscrizione';
            }, 800);
        });
    }

    /* ---- ACTIVE NAV LINK su scroll ---- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    function updateActiveNav() {
        const scrollPos = window.scrollY + (header ? header.offsetHeight + 20 : 80);
        sections.forEach(function (section) {
            const top    = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id     = section.getAttribute('id');
            const link   = document.querySelector('.main-nav a[href="#' + id + '"]');
            if (link) {
                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(function (l) { l.classList.remove('active-nav'); });
                    link.classList.add('active-nav');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    /* ---- HERO parallax leggero ---- */
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function () {
        if (!hero) return;
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = (scrolled * 0.4) + 'px';
        }
    });

});
