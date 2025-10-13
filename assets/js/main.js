 // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Loading Screen
        window.addEventListener('load', function () {
            setTimeout(function () {
                document.getElementById('loading').style.display = 'none';
            }, 1000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Back to top button
            const backToTop = document.querySelector('.back-to-top');
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // Back to top functionality
        document.getElementById('backToTop').addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        const darkModeToggle = document.getElementById('darkModeToggle');
        const icon = darkModeToggle.querySelector('i');
        const offcanvas = document.getElementById('mobileMenu');
        const navbar = document.querySelector('.navbar');
        const closeBtn = document.getElementById('close-btn');

        // Function to apply theme based on mode
        function applyTheme(isDark) {
            if (isDark) {
                document.body.classList.add('dark-mode');
                icon.classList.remove('bi-moon');
                icon.classList.add('bi-sun');
                localStorage.setItem('darkMode', 'enabled');

                // Offcanvas and navbar dark theme
                offcanvas.classList.remove('text-bg-light');
                offcanvas.classList.add('text-bg-dark');
                navbar.classList.remove('navbar-light', 'bg-light');
                navbar.classList.add('navbar-dark',);
                closeBtn.classList.add('btn-close-white');
            } else {
                document.body.classList.remove('dark-mode');
                icon.classList.remove('bi-sun');
                icon.classList.add('bi-moon');
                localStorage.setItem('darkMode', 'disabled');

                // Offcanvas and navbar light theme
                offcanvas.classList.remove('text-bg-dark');
                offcanvas.classList.add('text-bg-light');
                navbar.classList.remove('navbar-dark', 'bg-dark');
                navbar.classList.add('navbar-dark');
                closeBtn.classList.remove('btn-close-white');
            }
        }

        // Toggle button click event
        darkModeToggle.addEventListener('click', function () {
            const isDark = !document.body.classList.contains('dark-mode');
            applyTheme(isDark);
        });

        // On page load: apply saved preference
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'enabled') {
            applyTheme(true);
        } else {
            applyTheme(false);
        }
        // Animate progress bars when they come into view
        const progressBars = document.querySelectorAll('.progress-bar');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 300);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            observer.observe(bar);
        });

        // 🌍 Multilingual Translations (EN / FR / ES / LN)
        const translations = {
            en: {
                "nav_home": "Home",
                "nav_about": "About",
                "nav_skills": "Skills",
                "nav_projects": "Projects",
                "nav_experience": "Experience",
                "nav_contact": "Contact",

                "hero_title": "Hi, I'm Isaac Kuakua",
                "hero_subtitle": "A Passionate Developer & UI/UX Designer focused on innovation and performance.",
                "hero_description": "Currently a Junior Analyst Programmer at We Market SARL (RDC), I specialize in backend development, user-centered design, and digital platform optimization using Laravel and modern frameworks.",
                "view_work": "View My Work",
                "contact_me": "Contact Me",

                "about_title": "About Me",
                "who_is_isaac": "Who is ISAAC KUAKUA?",
                "about_description_1": "I'm KUAKUA MATALATALA Isaac — a developer and UI/UX designer combining technical expertise with creativity to build digital solutions that perform and inspire. Currently working as Junior Analyst Programmer at We Market SARL in the Democratic Republic of Congo, I design and develop scalable web platforms, focusing on user experience and backend efficiency.",
                "about_description_2": "Previously, I led UI/UX and software development at Illumination Metaverse Group, where I shaped innovative digital products and guided a development team. My academic path took me from Industrial Informatics & Networking in Kinshasa to a Bachelor's in Information Technology at Eastern Mediterranean University in Cyprus.",
                "languages_title": "Languages",
                "french_language": "French – Native",
                "english_language": "English – Academic",
                "lingala_language": "Lingala – National",
                "kikongo_language": "Kikongo – National",

                "skills_title": "Technical Skills",
                "skills_subtitle": "A mix of development, design, and analytical skills.",
                "programming_languages": "Programming Languages",
                "frameworks_libraries": "Frameworks & Libraries",
                "tools_technologies": "Tools & Technologies",
                "specializations": "Specializations",

                "projects_title": "Featured Projects",
                "projects_subtitle": "Some of my latest professional and academic projects",
                "cybersecurity_project": "We Market Digital Platform",
                "cybersecurity_description": "Development of a scalable web application for digital service management using Laravel and MySQL.",
                "ui_project": "Illumination Metaverse",
                "ui_description": "Led UI/UX and frontend design for a metaverse-inspired experience, focusing on immersive interfaces.",
                "iot_project": "IoT Automation System",
                "iot_description": "Designed and deployed IoT-based home automation prototypes integrating Arduino and sensor systems.",
                "view_details": "View Details",
                "code_link": "Code",
                "demo_link": "Demo",

                "education_experience": "Experience & Education",
                "job1_title": "Junior Analyst Programmer – We Market SARL (RDC)",
                "job1_description": "Developing digital service platforms using PHP (Laravel) with a focus on backend optimization and user experience.",
                "job2_title": "UI/UX Lead & Software Developer – Illumination Metaverse Group",
                "job2_description": "Led a design and development team, creating user-focused digital experiences and improving technical workflows.",
                "job3_title": "Technician – Arkin Hotel / Kaya Arthemis Hotel",
                "job3_description": "Provided technical maintenance and IT infrastructure support ensuring seamless digital operations.",
                "job4_title": "Technician – Karakas Prefabrik (Cyprus)",
                "job4_description": "Installed and configured network systems in prefabricated buildings, ensuring stable internal IT systems.",
                "education_title": "Education",
                "current_education": "Bachelor's in Information Technology",
                "previous_education": "Industrial Informatics & Networks",
                "high_school_diploma": "High School Diploma in Industrial Electronics",

                "contact_title": "Contact Me",
                "contact_subtitle": "Let's collaborate and build something amazing.",
                "name_label": "Your Name",
                "email_label": "Your Email",
                "subject_label": "Subject",
                "message_label": "Your Message",
                "send_message": "Send Message",
                "email_contact": "Email",
                "phone_contact": "Phone",
                "location_contact": "Location",
                "cyprus_location_full":"Kinshasa, RDC",
                "copyright": "© 2025 ISAAC KUAKUA – All Rights Reserved."
            },

            fr: {
                "nav_home": "Accueil",
                "nav_about": "À propos",
                "nav_skills": "Compétences",
                "nav_projects": "Projets",
                "nav_experience": "Expérience",
                "nav_contact": "Contact",

                "hero_title": "Bonjour, je suis Isaac Kuakua",
                "hero_subtitle": "Développeur passionné & Designer UI/UX axé sur l'innovation et la performance.",
                "hero_description": "Actuellement Analyste Programmeur Junior chez We Market SARL (RDC), je me spécialise dans le développement backend, la conception centrée sur l'utilisateur et l'optimisation des plateformes numériques utilisant Laravel et des frameworks modernes.",
                "view_work": "Voir mon travail",
                "contact_me": "Me contacter",

                "about_title": "À propos de moi",
                "who_is_isaac": "Qui est ISAAC KUAKUA ?",
                "about_description_1": "Je suis KUAKUA MATALATALA Isaac — un développeur et designer UI/UX combinant expertise technique et créativité pour construire des solutions numériques performantes et inspirantes. Actuellement Analyste Programmeur Junior chez We Market SARL en République Démocratique du Congo, je conçois et développe des plateformes web évolutives, en me concentrant sur l'expérience utilisateur et l'efficacité backend.",
                "about_description_2": "Précédemment, j'ai dirigé le développement UI/UX et logiciel chez Illumination Metaverse Group, où j'ai façonné des produits numériques innovants et guidé une équipe de développement. Mon parcours académique m'a mené de l'Informatique Industrielle et Réseaux à Kinshasa à une Licence en Technologies de l'Information à l'Université de la Méditerranée Orientale à Chypre.",
                "languages_title": "Langues",
                "french_language": "Français – Natif",
                "english_language": "Anglais – Académique",
                "lingala_language": "Lingala – National",
                "kikongo_language": "Kikongo – National",

                "skills_title": "Compétences techniques",
                "skills_subtitle": "Un mélange de compétences en développement, design et analyse.",
                "programming_languages": "Langages de programmation",
                "frameworks_libraries": "Frameworks et bibliothèques",
                "tools_technologies": "Outils et technologies",
                "specializations": "Spécialisations",

                "projects_title": "Projets en vedette",
                "projects_subtitle": "Certains de mes derniers projets professionnels et académiques",
                "cybersecurity_project": "Plateforme numérique We Market",
                "cybersecurity_description": "Développement d'une application web évolutive pour la gestion de services numériques utilisant Laravel et MySQL.",
                "ui_project": "Illumination Metaverse",
                "ui_description": "Dirigé la conception UI/UX et frontend pour une expérience inspirée du métavers, en mettant l'accent sur des interfaces immersives.",
                "iot_project": "Système d'automatisation IoT",
                "iot_description": "Conçu et déployé des prototypes d'automatisation domestique basés sur l'IoT intégrant Arduino et des systèmes de capteurs.",
                "view_details": "Voir les détails",
                "code_link": "Code",
                "demo_link": "Démo",

                "education_experience": "Expérience et éducation",
                "job1_title": "Analyste Programmeur Junior – We Market SARL (RDC)",
                "job1_description": "Développement de plateformes de services numériques utilisant PHP (Laravel) avec un accent sur l'optimisation backend et l'expérience utilisateur.",
                "job2_title": "Responsable UI/UX & Développeur Logiciel – Illumination Metaverse Group",
                "job2_description": "Dirigé une équipe de conception et développement, créant des expériences numériques centrées sur l'utilisateur et améliorant les flux de travail techniques.",
                "job3_title": "Technicien – Arkin Hotel / Kaya Arthemis Hotel",
                "job3_description": "Fourni une maintenance technique et un support d'infrastructure informatique assurant des opérations numériques fluides.",
                "job4_title": "Technicien – Karakas Prefabrik (Chypre)",
                "job4_description": "Installé et configuré des systèmes de réseau dans des bâtiments préfabriqués, assurant des systèmes informatiques internes stables.",
                "education_title": "Éducation",
                "current_education": "Licence en Technologies de l'Information",
                "previous_education": "Informatique Industrielle et Réseaux",
                "high_school_diploma": "Diplôme d'études secondaires en Électronique Industrielle",

                "contact_title": "Contactez-moi",
                "contact_subtitle": "Collaborons et construisons quelque chose d'incroyable.",
                "name_label": "Votre nom",
                "email_label": "Votre email",
                "subject_label": "Sujet",
                "message_label": "Votre message",
                "send_message": "Envoyer le message",
                "email_contact": "Email",
                "phone_contact": "Téléphone",
                "location_contact": "Localisation",
                "cyprus_location_full": "Kinshasa, RDC",
                "copyright": "© 2025 ISAAC KUAKUA – Tous droits réservés."
            },

            es: {
                "nav_home": "Inicio",
                "nav_about": "Acerca de",
                "nav_skills": "Habilidades",
                "nav_projects": "Proyectos",
                "nav_experience": "Experiencia",
                "nav_contact": "Contacto",

                "hero_title": "Hola, soy Isaac Kuakua",
                "hero_subtitle": "Desarrollador apasionado y Diseñador UI/UX enfocado en la innovación y el rendimiento.",
                "hero_description": "Actualmente Analista Programador Junior en We Market SARL (RDC), me especializo en desarrollo backend, diseño centrado en el usuario y optimización de plataformas digitales utilizando Laravel y frameworks modernos.",
                "view_work": "Ver mi trabajo",
                "contact_me": "Contáctame",

                "about_title": "Sobre mí",
                "who_is_isaac": "¿Quién es ISAAC KUAKUA?",
                "about_description_1": "Soy KUAKUA MATALATALA Isaac — un desarrollador y diseñador UI/UX que combina experiencia técnica y creatividad para construir soluciones digitales que funcionan e inspiran. Actualmente trabajo como Analista Programador Junior en We Market SARL en la República Democrática del Congo, diseño y desarrollo plataformas web escalables, enfocándome en la experiencia del usuario y la eficiencia del backend.",
                "about_description_2": "Anteriormente, lideré el desarrollo de UI/UX y software en Illumination Metaverse Group, donde di forma a productos digitales innovadores y guié a un equipo de desarrollo. Mi camino académico me llevó de Informática Industrial y Redes en Kinshasa a una Licenciatura en Tecnologías de la Información en la Universidad del Mediterráneo Oriental en Chipre.",
                "languages_title": "Idiomas",
                "french_language": "Francés – Nativo",
                "english_language": "Inglés – Académico",
                "lingala_language": "Lingala – Nacional",
                "kikongo_language": "Kikongo – Nacional",

                "skills_title": "Habilidades técnicas",
                "skills_subtitle": "Una mezcla de habilidades de desarrollo, diseño y análisis.",
                "programming_languages": "Lenguajes de programación",
                "frameworks_libraries": "Frameworks y bibliotecas",
                "tools_technologies": "Herramientas y tecnologías",
                "specializations": "Especializaciones",

                "projects_title": "Proyectos destacados",
                "projects_subtitle": "Algunos de mis últimos proyectos profesionales y académicos",
                "cybersecurity_project": "Plataforma digital We Market",
                "cybersecurity_description": "Desarrollo de una aplicación web escalable para la gestión de servicios digitales utilizando Laravel y MySQL.",
                "ui_project": "Illumination Metaverse",
                "ui_description": "Lideré el diseño UI/UX y frontend para una experiencia inspirada en el metaverso, centrándome en interfaces inmersivas.",
                "iot_project": "Sistema de automatización IoT",
                "iot_description": "Diseñé e implementé prototipos de automatización del hogar basados en IoT integrando Arduino y sistemas de sensores.",
                "view_details": "Ver detalles",
                "code_link": "Código",
                "demo_link": "Demo",

                "education_experience": "Experiencia y educación",
                "job1_title": "Analista Programador Junior – We Market SARL (RDC)",
                "job1_description": "Desarrollo de plataformas de servicios digitales utilizando PHP (Laravel) con un enfoque en la optimización del backend y la experiencia del usuario.",
                "job2_title": "Líder UI/UX y Desarrollador de Software – Illumination Metaverse Group",
                "job2_description": "Lideré un equipo de diseño y desarrollo, creando experiencias digitales centradas en el usuario y mejorando los flujos de trabajo técnicos.",
                "job3_title": "Técnico – Arkin Hotel / Kaya Arthemis Hotel",
                "job3_description": "Proporcioné mantenimiento técnico y soporte de infraestructura de TI asegurando operaciones digitales sin problemas.",
                "job4_title": "Técnico – Karakas Prefabrik (Chipre)",
                "job4_description": "Instalé y configuré sistemas de red en edificios prefabricados, asegurando sistemas de TI internos estables.",
                "education_title": "Educación",
                "current_education": "Licenciatura en Tecnologías de la Información",
                "previous_education": "Informática Industrial y Redes",
                "high_school_diploma": "Diploma de escuela secundaria en Electrónica Industrial",

                "contact_title": "Contáctame",
                "contact_subtitle": "Colaboremos y construyamos algo increíble.",
                "name_label": "Tu nombre",
                "email_label": "Tu correo electrónico",
                "subject_label": "Asunto",
                "message_label": "Tu mensaje",
                "send_message": "Enviar mensaje",
                "email_contact": "Correo electrónico",
                "phone_contact": "Teléfono",
                "location_contact": "Ubicación",
                "cyprus_location_full": "Kinshasa, RDC",
                "copyright": "© 2025 ISAAC KUAKUA – Todos los derechos reservados."
            },

            ln: {
                "nav_home": "Liboso",
                "nav_about": "Maloba",
                "nav_skills": "Bokoki",
                "nav_projects": "Misala",
                "nav_experience": "Bokiti",
                "nav_contact": "Kotuna",

                "hero_title": "Mbote, ngai Isaac Kuakua",
                "hero_subtitle": "Moto ya kosala na ba-ordinateur mpe kosala design ya UI/UX, na makasi na inovation mpe kosala malamu.",
                "hero_description": "Sikoyo, ngai Analyst Programmeur Junior na We Market SARL (RDC), nazali na makasi na kosala ba-programme ya backend, kosala design malamu mpe kosala ba-plateforme numérique malamu na kozala na Laravel mpe ba-framework ya sika.",
                "view_work": "Tala misala na ngai",
                "contact_me": "Tuna ngai",

                "about_title": "Maloba na ngai",
                "who_is_isaac": "Nani ISAAC KUAKUA?",
                "about_description_1": "Ngai KUAKUA MATALATALA Isaac — moto ya kosala na ba-ordinateur mpe kosala design ya UI/UX, nazali na makasi na kosala ba-solution numérique oyo ezali kosala malamu mpe kolakisa motema. Sikoyo, nazali Analyst Programmeur Junior na We Market SARL na Republique Democratique du Congo, nazali kosala mpe kobongisa ba-plateforme web oyo ekoki kozala na makasi, na kotala malamu expérience ya basali mpe kosala malamu ba-programme ya backend.",
                "about_description_2": "Yambo, nazalaki mokonzi ya UI/UX mpe kosala ba-programme na Illumination Metaverse Group, wapi nazalaki kobongisa ba-produit numérique ya inovation mpe kokamba équipe ya basali. Makambo ya kelasi na ngai esalaki ngai kowuta na Informatique Industrielle & Réseaux na Kinshasa kino na Bachelor na Information Technology na Eastern Mediterranean University na Chypre.",
                "languages_title": "Bato",
                "french_language": "Falansé – Monoko ya liboso",
                "english_language": "Lingelesé – Na kelasi",
                "lingala_language": "Lingala – Monoko ya mboka",
                "kikongo_language": "Kikongo – Monoko ya mboka",

                "skills_title": "Bokoki ya technique",
                "skills_subtitle": "Ba-bokoki ya kosala na ba-ordinateur, kosala design mpe koyeba kokataka.",
                "programming_languages": "Ba-langage ya kosala programme",
                "frameworks_libraries": "Ba-framework mpe ba-bibliothèque",
                "tools_technologies": "Ba-outil mpe ba-technologie",
                "specializations": "Ba-spécialisation",

                "projects_title": "Ba-projet ya malamu",
                "projects_subtitle": "Ba-misala na ngai ya sika mpe ya kelasi",
                "cybersecurity_project": "Plateforme numérique We Market",
                "cybersecurity_description": "Kobongisa ba-application web oyo ekoki kozala na makasi mpo na kosala gestion ya ba-service numérique na kozala na Laravel mpe MySQL.",
                "ui_project": "Illumination Metaverse",
                "ui_description": "Nazalaki mokonzi ya UI/UX mpe kosala design ya liboso mpo na expérience ya metaverse, na kotala malamu ba-interface oyo ezali kokamata motema.",
                "iot_project": "Système ya automatisation IoT",
                "iot_description": "Nabongisi mpe natindi ba-prototype ya automatisation ya ndako oyo ezali na IoT, na kosangisa Arduino mpe ba-système ya ba-capteur.",
                "view_details": "Tala ba-détail",
                "code_link": "Code",
                "demo_link": "Démo",

                "education_experience": "Bokiti mpe kelasi",
                "job1_title": "Analyst Programmeur Junior – We Market SARL (RDC)",
                "job1_description": "Kobongisa ba-plateforme ya ba-service numérique na kozala na PHP (Laravel) na kotala malamu kosala malamu ba-programme ya backend mpe expérience ya basali.",
                "job2_title": "Mokonzi UI/UX & Moto ya kosala Programme – Illumination Metaverse Group",
                "job2_description": "Nazalaki kokamba équipe ya kosala design mpe kosala ba-programme, kobongisa ba-expérience numérique oyo ezali kotala malamu basali mpe kosala malamu ba-travail ya technique.",
                "job3_title": "Technicien – Arkin Hotel / Kaya Arthemis Hotel",
                "job3_description": "Napesaki maintenance technique mpe support ya infrastructure ya IT mpo na kosala malamu ba-opération numérique.",
                "job4_title": "Technicien – Karakas Prefabrik (Chypre)",
                "job4_description": "Natelaki mpe nasalaki configuration ya ba-système réseau na ba-bâtiment préfabriqué, mpo na kosala malamu ba-système IT ya kati.",
                "education_title": "Kelasi",
                "current_education": "Bachelor na Information Technology",
                "previous_education": "Informatique Industrielle & Réseaux",
                "high_school_diploma": "Diplôme ya lycée na Électronique Industrielle",

                "contact_title": "Tuna ngai",
                "contact_subtitle": "Tosala elongo mpe tobongisa eloko moko ya malamu.",
                "name_label": "Kombo na yo",
                "email_label": "Email na yo",
                "subject_label": "Sujet",
                "message_label": "Lettre na yo",
                "send_message": "Tinda lettre",
                "email_contact": "Email",
                "phone_contact": "Téléphone",
                "location_contact": "Esika",
                "cyprus_location_full": "Kinshasa, RDC",
                "copyright": "© 2025 ISAAC KUAKUA – Ba-droit nyoso esungami."
            }
        };

        // 🔄 Language Switching
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                document.getElementById('current-language').textContent = this.textContent;
                localStorage.setItem('preferredLanguage', lang);
            });
        });

        function changeLanguage(lang) {
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
        }

        // Set initial language based on browser preference or saved preference
        window.addEventListener('DOMContentLoaded', () => {
            const savedLang = localStorage.getItem('preferredLanguage');
            const browserLang = navigator.language.slice(0, 2);
            const supported = ['en', 'fr', 'es', 'ln'];
            const defaultLang = savedLang || (supported.includes(browserLang) ? browserLang : 'en');

            changeLanguage(defaultLang);

            // Update language selector text
            document.getElementById('current-language').textContent =
                defaultLang === 'fr' ? 'Français' :
                    defaultLang === 'es' ? 'Español' :
                        defaultLang === 'ln' ? 'Lingala' : 'English';
        });


        (function () {
            emailjs.init("g-FoznCp19__LlITb"); // Your actual EmailJS public key
        })();

        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();

            // 🕒 Get current local date and time
            const now = new Date();
            const currentTime = now.toLocaleString();


            const params = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value,
                time: currentTime
            };

            emailjs.send("Porfolio_KIM", "template_ryfaczr", params)
                .then(function (response) {
                    alert("✅ Message sent successfully!");
                    e.target.reset();
                }, function (error) {
                    alert("❌ Failed to send message. Please try again later.");
                    console.error("EmailJS Error:", error);
                });
        });
