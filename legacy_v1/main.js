// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize GSAP Defaults
    gsap.defaults({ ease: "power3.out", duration: 1.2 });

    // 2. Justice Counter Logic (Updated for New Hero)
    const martyredDate = new Date('2024-12-18T14:24:00'); // Dec 18, 2024
    function updateCounter() {
        const today = new Date();
        const diffInMs = today - martyredDate;
        const diffInDays = Math.floor(Math.abs(diffInMs) / (1000 * 60 * 60 * 24));

        // Added '#hero-days-count' to the selector list
        const dayElements = document.querySelectorAll('#days-count, .hero-days, #countdown-hero, #hero-days-count');

        dayElements.forEach(el => {
            gsap.to({ val: 0 }, {
                val: diffInDays,
                duration: 3,
                ease: "power4.out",
                onUpdate: function () {
                    el.innerText = Math.floor(this.targets()[0].val);
                }
            });
        });

        // Animate the hero progress bar based on days (max 365 days = 100%)
        const progressBars = document.querySelectorAll('.hero-progress-bar');
        const progressPercent = Math.min((diffInDays / 365) * 100, 100);
        progressBars.forEach(bar => {
            gsap.to(bar, {
                width: `${progressPercent}%`,
                duration: 2.5,
                delay: 0.5,
                ease: "power2.out"
            });
        });
    }
    updateCounter();

    // Hero Revolutionary Reveal Sequence
    const heroTl = gsap.timeline();
    
    // 1. Reveal Background Elements
    heroTl.fromTo(".hero-bg-layers", 
        { opacity: 0 },
        { opacity: 0.8, duration: 1.5, ease: "power2.out" }
    )
    .fromTo(".hero-grid-pattern",
        { opacity: 0, scale: 1.1 },
        { opacity: 0.2, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=1.2"
    )
    // 2. Left Column: Manifesto (Punchy Reveal)
    .fromTo(".reveal-left",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.5"
    )
    // 3. Right Column: Justice Card (Strong Entrance)
    .fromTo(".reveal-right",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power4.out" },
        "-=0.8"
    )
    .fromTo(".hero-justice-card",
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
        "-=0.6"
    );

    // Red Alert Pulse for Status
    gsap.to(".animate-pulse", {
        scale: 1.2,
        opacity: 0.5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Animate Days Counter (Fast & Urgent)
    const dayCounter = document.getElementById("hero-days-count");
    if(dayCounter) {
        gsap.from(dayCounter, {
            textContent: 0,
            duration: 2,
            ease: "power4.out",
            snap: { textContent: 1 },
            onUpdate: function() {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
            }
        });
    }

    // Hero orbs subtle animation enhancement
    gsap.to(".hero-orb-1", {
        x: 30,
        y: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    
    gsap.to(".hero-orb-2", {
        x: -25,
        y: 25,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Interactive Spotlight & Mouse Follow Parallax
    const heroSection = document.getElementById('hero');
    const spotlight = document.getElementById('spotlight');

    if (heroSection && spotlight) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const x = clientX / window.innerWidth;
            const y = clientY / window.innerHeight;

            // Update Spotlight
            gsap.to(spotlight, {
                background: `radial-gradient(800px circle at ${clientX}px ${clientY}px, rgba(225, 29, 72, 0.05), transparent 80%)`,
                duration: 0.5
            });

            // Subtle Parallax for Elements & Cinematic BG
            gsap.to(".parallax-layer, .reveal-up:not(.hero-image-reveal)", {
                x: (x - 0.5) * 50,
                y: (y - 0.5) * 50,
                duration: 1,
                ease: "power2.out"
            });

            gsap.to(".hero-image-reveal img", {
                x: (x - 0.5) * 20,
                y: (y - 0.5) * 20,
                scale: 1.05,
                duration: 2,
                ease: "power2.out"
            });

            gsap.to(".glass-card-premium", {
                x: (x - 0.5) * -30,
                y: (y - 0.5) * -30,
                duration: 1.5,
                ease: "power2.out"
            });
        });

        // Scroll Hint Fade
        const scrollHint = document.querySelector('.scroll-hint');
        if (scrollHint) {
            gsap.to(scrollHint, {
                opacity: 0,
                y: 20,
                scrollTrigger: {
                    trigger: "#hero",
                    start: "20% top",
                    end: "50% top",
                    scrub: true
                }
            });
        }
    }

    // 3. Revolutionary Timeline (Zigzag Rendering)
    const timelineData = [
        { date: "২০২৪ জুলাই", title: "বিপ্লবের নেতৃত্ব", desc: "ঢাকার রামপুরা এলাকায় বৈষম্যবিরোধী ছাত্র আন্দোলনের সমন্বয়ক হিসেবে বলিষ্ঠ ভূমিকা।" },
        { date: "১৩ আগস্ট ২০২৪", title: "ইনকিলাব মঞ্চ প্রতিষ্ঠা", desc: "ভারতীয় আধিপত্যবাদের বিরুদ্ধে ও সার্বভৌমত্ব রক্ষায় ইনকিলাব মঞ্চের মুখপাত্র হিসেবে দায়িত্ব গ্রহণ।" },
        { date: "২৪ মে ২০২৫", title: "জাতীয় সরকারের ডাক", desc: "সকল বিরোধী শক্তির সমন্বয়ে জাতীয় সরকার গঠনের এক ঐতিহাসিক ঘোষণা।" },
        { date: "১২ ডিসেম্বর ২০২৫", title: "নির্মম হামলা", desc: "ঢাকার পল্টনে প্রচারণার সময় স্নাইপারের গুলিতে গুরুতর আহত হন।" },
        { date: "১৫ ডিসেম্বর ২০২৫", title: "সিঙ্গাপুরে স্থানান্তর", desc: "উন্নত চিকিৎসার জন্য এয়ার অ্যাম্বুলেন্সে সিঙ্গাপুর জেনারেল হাসপাতালে নিয়ে যাওয়া হয়।" },
        { date: "১৮ ডিসেম্বর ২০২৫", title: "শহীদ বরণ", desc: "সিঙ্গাপুরে চিকিৎসাধীন অবস্থায় শাহাদাত বরণ করেন। মরদেহ জাতীয় কবির মাজার সংলগ্ন কবরে শায়িত হয়।" }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineContainer.innerHTML = '';
        timelineData.forEach((item, index) => {
            const isEven = index % 2 !== 0;
            const entry = document.createElement('div');
            entry.className = `timeline-item-zigzag flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between relative`;
            entry.innerHTML = `
                <div class="timeline-dot-zigzag"></div>
                ${!isEven ? `<div class="timeline-connector"></div>` : ''}
                <div class="timeline-card-zigzag group ${isEven ? 'md:mr-auto' : 'md:ml-0'} w-full md:w-[45%]">
                    <span class="inline-block px-4 py-1 bg-brand-emerald/10 text-brand-emerald rounded-full text-xs font-black uppercase tracking-widest font-accent mb-6">${item.date}</span>
                    <h4 class="text-3xl font-black text-white font-accent mb-4 group-hover:text-brand-emerald transition-colors">${item.title}</h4>
                    <p class="text-white/40 text-lg font-bengali leading-relaxed">${item.desc}</p>
                </div>
                ${isEven ? `<div class="timeline-connector"></div>` : ''}
                <div class="hidden md:block w-[45%]"></div>
            `;
            timelineContainer.appendChild(entry);
        });

        // GSAP Timeline Progress Line
        gsap.to("#timeline-progress", {
            scrollTrigger: {
                trigger: "#timeline-container",
                start: "top 20%",
                end: "bottom 80%",
                scrub: 1
            },
            scaleY: 1
        });

        // Staggered Reveal for Timeline Cards
        gsap.from(".timeline-card-zigzag", {
            scrollTrigger: {
                trigger: "#timeline",
                start: "top 60%",
            },
            opacity: 0,
            y: 50,
            stagger: 0.3,
            duration: 1
        });
    }

    // 4. Memory Album (Dynamic Categorization)
    const galleryItems = [
        { type: 'video', src: 'https://www.youtube.com/embed/cKY5C-2HnUY?si=tq9c6jFygkWx2Piq', tag: 'বক্তব্য', title: 'বিপ্লবের রাজপথে কণ্ঠস্বর' },
        { src: 'assets/Osman-Hadi.jpg', tag: 'বিপ্লবী', title: 'রাজপথে আপোষহীন' },
        { src: 'assets/23cef3fac665b11c69879d5198dbd755c52f11776a048789.jpg', tag: 'বিপ্লব', title: 'বিশাল জনসমুদ্র' },
        { src: 'assets/hero-rally..webp', tag: 'ইনকিলাব', title: 'আন্দোলনের অগ্রদূত' },
        { src: 'assets/osman4-BZsl1Qk-.jpg', tag: 'প্রতিকৃতি', title: 'হাস্যোজ্জ্বল বীর' },
        { src: 'assets/1200px-Osman_Hadi.jpeg', tag: 'মিডিয়া', title: 'কণ্ঠস্বর যখন বজ্র' },
        { src: 'assets/Hadis-funeral.jpg', tag: 'বিদায়', title: 'শেষ বিদায়ের জনস্রোত' },
        { src: 'assets/hadi-1766234773.jpg', tag: 'শাহাদাত', title: 'স্মৃতির চারা গাছ' },
        { src: 'assets/8f47e6b93edaf5672e43f1c575ddf0db2b6fe0a5b96a1330.jpg', tag: 'উত্তরাধিকার', title: 'আগত প্রজন্মের দিশারী' },
        { src: 'assets/sharif-osman-hadi-was-shot-in-broad-daylight-last-week-in-dhaka-by-masked-attackers-images-social-280451154-16x9_0.webp', tag: 'সংবাদ', title: 'গণমাধ্যমের শিরোনামে' },
        { src: 'assets/image-343646-1766224013.jpg', tag: 'স্মৃতি', title: 'অমর হাদি' }
    ];

    const galleryGrid = document.querySelector('#gallery .grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = ''; // Clear existing
        galleryItems.forEach((item, index) => {
            const card = document.createElement('div');
            const isLarge = index === 0 || index === 5;
            card.className = `${isLarge ? 'md:col-span-2 md:row-span-2' : ''} group relative overflow-hidden rounded-[3rem] border border-white/5 bg-brand-slate/20`;

            if (item.type === 'video') {
                card.innerHTML = `
                    <iframe src="${item.src}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent pointer-events-none opacity-60"></div>
                    <div class="absolute bottom-10 left-10 pointer-events-none">
                        <span class="px-3 py-1 bg-brand-crimson/20 text-brand-crimson text-[10px] font-black uppercase tracking-widest rounded-full mb-3 inline-block font-accent">${item.tag}</span>
                        <h4 class="text-2xl font-black text-white font-accent leading-tight">${item.title}</h4>
                    </div>
                `;
            } else {
                card.innerHTML = `
                    <img src="${item.src}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${item.title}">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div class="absolute bottom-10 left-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span class="px-3 py-1 bg-brand-emerald/20 text-brand-emerald text-[10px] font-black uppercase tracking-widest rounded-full mb-3 inline-block font-accent">${item.tag}</span>
                        <h4 class="text-2xl font-black text-white font-accent leading-tight">${item.title}</h4>
                    </div>
                `;
            }
            galleryGrid.appendChild(card);
        });

        // Gallery Staggered Reveal
        gsap.from("#gallery .group", {
            scrollTrigger: {
                trigger: "#gallery",
                start: "top 70%",
            },
            scale: 0.9,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "back.out(1.7)"
        });
    }

    // 5. Quotes Slider Logic
    const quotesData = [
        "আমি চলে গেলে আমার <span class='text-brand-crimson'>সন্তান লড়বে</span>।",
        "আমরা বিচার চাই না, <span class='text-brand-crimson'>ফাঁসি চাই</span>।",
        "<span class='text-brand-crimson'>ভারতীয় আধিপত্যবাদকে</span> এই মাটিতে কবর দেওয়া হবে।",
        "প্রতি প্রতিটি শহীদ আমাদের <span class='text-brand-crimson'>সার্বভৌমত্বের</span> একেকটি পাহারাদার।"
    ];

    const quotesContainer = document.getElementById('quotes-container');
    const progressBar = document.getElementById('quote-progress-bar');
    if (quotesContainer) {
        quotesContainer.innerHTML = '';
        quotesData.forEach((quote, index) => {
            const slide = document.createElement('div');
            slide.className = `absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none quote-slide-gsap`;
            slide.innerHTML = `<blockquote class="text-5xl lg:text-7xl font-black text-white text-center font-accent leading-tight max-w-5xl">"${quote}"</blockquote>`;
            quotesContainer.appendChild(slide);
        });

        let currentQuote = 0;
        const qSlides = document.querySelectorAll('.quote-slide-gsap');
        function nextQuote() {
            gsap.to(qSlides[currentQuote], { opacity: 0, y: -50, pointerEvents: "none" });
            currentQuote = (currentQuote + 1) % qSlides.length;
            gsap.fromTo(qSlides[currentQuote], { opacity: 0, y: 50 }, { opacity: 1, y: 0, pointerEvents: "auto", delay: 0.5 });
            gsap.fromTo(progressBar, { width: "0%" }, { width: "100%", duration: 6, ease: "none" });
        }
        if (qSlides.length > 0) {
            gsap.set(qSlides[0], { opacity: 1, y: 0, pointerEvents: "auto" });
            gsap.to(progressBar, { width: "100%", duration: 6, ease: "none" });
            setInterval(nextQuote, 6000);
        }
    }

    // 6. Global Parallax & Particles
    gsap.to(".parallax-bg", {
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
        y: 200, scale: 1.2
    });

    const dustContainer = document.querySelector('.blood-dust-container');
    if (dustContainer) {
        // Updated to Memorial Embers (Golden)
        for (let i = 0; i < 40; i++) {
            const p = document.createElement('div');
            p.className = 'memorial-embers';
            const size = Math.random() * 4 + 2;
            gsap.set(p, {
                width: size,
                height: size,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5
            });
            dustContainer.appendChild(p);

            // Living Embers Motion
            gsap.to(p, {
                x: "+=" + (Math.random() - 0.5) * 600,
                y: "-=" + (Math.random() * 400 + 200), // Float upwards
                opacity: 0,
                duration: 15 + Math.random() * 15,
                repeat: -1,
                ease: "sine.inOut",
                delay: Math.random() * 10
            });
        }
    }

    // 7. Dashboard 3D Tracking
    const dashboard = document.getElementById('justice-dashboard');
    if (dashboard) {
        document.addEventListener('mousemove', (e) => {
            const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
            const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
            gsap.to(dashboard, { rotateY: xPos, rotateX: -yPos, duration: 1 });
        });
    }

    // 8. Modal Logic
    const modal = document.getElementById('signature-modal');
    const openBtn = document.getElementById('open-signature-btn');
    const closeBtn = document.querySelector('.modal-close');
    if (modal && openBtn) {
        openBtn.onclick = () => {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            gsap.fromTo(modal.children[0], { scale: 0.8, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" });
        };
        closeBtn.onclick = () => {
            gsap.to(modal.children[0], { scale: 0.8, opacity: 0, y: 50, duration: 0.5, onComplete: () => { modal.classList.add('hidden'); modal.classList.remove('flex'); } });
        };
    }
});
