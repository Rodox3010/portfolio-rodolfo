
gsap.registerPlugin(ScrollTrigger);

        // --- DADOS DOS PROJETOS ---
        const projectsData = [
            {
                id: 1,
                title: "TRABALHOS ACADÊMICOS",
                client: "FACULDADE UNIP",
                year: "2012/2013",
                category: "Trabalhos Acadêmicos",
                imageURL: "img/academicos/allstarfinal.webp", 
                description: "Este projeto reúne uma seleção dos trabalhos desenvolvidos ao longo do curso de Design Gráfico. Cada exercício representou uma oportunidade de explorar diferentes áreas do design, desde identidade visual, tipografia e diagramação até fotografia, ilustração e design editorial. Durante esse período, pude experimentar, aprender técnicas, compreender processos criativos e fortalecer minha visão estética e conceitual. Esses projetos marcaram o início da minha trajetória como designer e refletem minha evolução profissional e pessoal dentro da área.",
                gallery: [
                    "img/academicos/logo_idea/logo-idea.webp",
                    "img/academicos/logo_idea/outdoor-idea.webp",
                    "img/academicos/logo_idea/caixa-lampada-idea-aberta.webp",
                    "img/academicos/logo_idea/caixa-lampada-idea-fechada.webp"
                ],
                pdfs: [
                    {
                        pdfThumbnail: "img/academicos/revistacmique/revistacemique.webp",
                        pdfLink: "img/academicos/revistacmique/revistacemique.pdf",
                        pdfName: "Revista Cemique"
                    },
                    {
                        pdfThumbnail: "img/academicos/Identidade_diagonal/capa-diagonal-games.webp",
                        pdfLink: "img/academicos/Identidade_diagonal/diagonal.pdf",
                        pdfName: "Identidade Diagonal"
                    }
                ]
            },
            {
                id: 2,
                title: "ALFA INSTRUMENTOS",
                client: "ALFA INSTRUMENTOS",
                year: "2019/2021",
                category: "Web Design/Design Gráfico",
                imageURL: "img/alfainstrumentos/agrishow-alfa-instrumentos.webp",
                description: "Nesta área vou mostrar alguns trabalhos realizados na empresa Alfa Instrumentos.",
                gallery: [
                    "img/alfainstrumentos/dia-do-cacau.webp",
                    "img/alfainstrumentos/dia-mundia-meio-ambiente.webp",
                    "img/alfainstrumentos/ensacador-velocidade.webp",
                    "img/alfainstrumentos/anuncio-vagas.webp",
                ],
                pdfs: [
                    {
                        
                        pdfThumbnail: "img/alfainstrumentos/gif-dosadora.gif",
                        pdfLink: "img/alfainstrumentos/gif-dosadora.gif",
                        pdfName: "Gif Dosadora"
                    },
                    {
                        pdfThumbnail: "img/alfainstrumentos/gif-envasadora-de-liquidos.gif",
                        pdfLink: "img/alfainstrumentos/gif-envasadora-de-liquidos.gif",
                        pdfName: "Gif Envasadora"
                    },
                    {
                        pdfThumbnail: "img/alfainstrumentos/ensacador-big-bag.webp",
                        pdfLink: "https://youtu.be/ZIHuXQJAT5Y?si=GZxOA-skp-yGENlW",
                        pdfName: "Vídeo Ensacadora de Big Bag"
                    },
                    {
                        pdfThumbnail: "img/alfainstrumentos/indice-de-protecao-ip.webp",
                        pdfLink: "https://youtu.be/7ZRK-z7QDKw?si=iwO2C_vtT5NLvpgk",
                        pdfName: "Vídeo Balança de bancada - IP69K"
                    },
                ]
            },
            {
                id: 3,
                title: "HJA REPRESENTAÇÕES",
                client: "HJA REPRESENTAÇÕES",
                year: "2025",
                category: "ID",
                imageURL: "img/hjarepresetacao/Capa1.webp",
                description: "O logo foi desenvolvido para transmitir solidez, profissionalismo e a essência do representate comercial.",
                gallery: [
                    "img/hjarepresetacao/Capa2.webp",
                    "img/hjarepresetacao/Capa3.webp",
                    "img/hjarepresetacao/aplicacao1.webp",
                    "img/hjarepresetacao/aplicacao2.webp",
                    "img/hjarepresetacao/aplicacao3.webp",
                  //"img/hjarepresetacao/aplicacao4.webp",
                  //"../img/hjarepresetacao/aplicacao5.webp",
                  //"../img/hjarepresetacao/aplicacao6.webp"
                ],
                      pdfs: [
                    {
                        pdfThumbnail: "img/hjarepresetacao/Capa1.webp",
                        pdfLink: "img/hjarepresetacao/id_hja_representacoes.pdf",
                        pdfName: "Identidade Visual - Completa"
                    }
                    
                ]
              
            },
            {
                id: 4,
                title: "JACREPES",
                client: "JACREPES - CREPES FRANCÊS",
                year: "2023",
                category: "Folders",
                imageURL: "img/Jacrepes/logo-jacrepes.webp",
                description: "Neste trabalho, realizei a vetorização do logotipo da empresa Jacrepes (recuperação), além da criação de dois tipos de anúncios para celular e o menu da empresa.",
                gallery: [
                    "img/Jacrepes/promo-crepe.webp",
                    "img/Jacrepes/promo-pizza.webp"
                ],
                pdfs: [
                    {
                        pdfThumbnail: "img/Jacrepes/capa-crepe.webp",
                        pdfLink: "img/Jacrepes/menu_crepe.pdf",
                        pdfName: "Folder Crepe - para celular"
                    },
                    {
                        pdfThumbnail: "img/Jacrepes/capa-pizza.webp",
                        pdfLink: "img/Jacrepes/menu_pizza.pdf",
                        pdfName: "Folder Pizza - para celular"
                    },
                    
                ]
            },
            {
                id: 5,
                title: "JM ESCRITÓRIO",
                client: "JM - José Milton",
                year: "2022",
                category: "Criação de Logo",
                imageURL: "img/jmjosemilton/logo-3d-jm.webp",
                description: "Foi criado um logo para um pequeno escritório do interior da Bahia. Além do logo, foram desenvolvidos também o cartão de visita e uma faixa para a fachada do escritório.",
                gallery: [
                    "img/jmjosemilton/moukup-cartao.webp",
                    "img/jmjosemilton/cartao-jm-novo.webp",
                    "img/jmjosemilton/faixa-escritorio.webp",

                ],
                
            }
        ];

        // --- RENDERIZAÇÃO DA LISTA ---
        const listContainer = document.getElementById('projects-list-container');

        projectsData.forEach(project => {
            const link = document.createElement('a');
            link.href = `#project-${project.id}`;
            link.className = 'project-link flex items-center py-4 md:py-6 border-b border-[#333] hoverable relative group w-full';
            link.setAttribute('data-cursor', 'view');
            
            link.innerHTML = `
                <div class="inline-image-wrapper">
                    <img src="${project.imageURL}" alt="${project.title}">
                </div>
                <div class="flex items-center justify-between w-full pointer-events-none">
                    <h2 class="font-display text-4x1 md:text-7xl font-bold uppercase text-off-white project-item-text whitespace-nowrap">
                        ${project.title}
                    </h2>
                    <span class="text-sm md:text-base text-secondary-gray opacity-50 group-hover:opacity-100 transition-opacity hidden md:block">
                        ${project.category}
                    </span>
                </div>
            `;

            link.addEventListener('click', (e) => {
                e.preventDefault();
                openProjectDetail(project);
            });

            listContainer.appendChild(link);
        });


        // --- LÓGICA DO FORMULÁRIO ---
        const messageInput = document.getElementById('message');
        const charCount = document.getElementById('charCount');
        if(messageInput && charCount){
            messageInput.addEventListener('input', function() {
                charCount.textContent = this.value.length;
            });
        }

        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const formStatus = document.getElementById('formStatus');

        if(contactForm) {
            contactForm.addEventListener("submit", async function(event) {
                event.preventDefault();
                
                const originalBtnContent = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class="spinner"></span> Enviando...';
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

                const data = new FormData(event.target);
                
                try {
                    const response = await fetch(event.target.action, {
                        method: contactForm.method,
                        body: data,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (response.ok) {
                        formStatus.innerHTML = "Mensagem enviada com Sucesso!";
                        formStatus.classList.remove('text-red-500');
                        formStatus.classList.add('text-success-green');
                        contactForm.reset();
                        charCount.textContent = '0';
                        submitBtn.innerHTML = "Enviado!";
                    } else {
                        throw new Error('Erro no servidor');
                    }
                } catch (error) {
                    formStatus.innerHTML = "Erro ao enviar. Tente novamente.";
                    formStatus.classList.remove('text-success-green');
                    formStatus.classList.add('text-red-500');
                    submitBtn.innerHTML = originalBtnContent;
                }

                formStatus.classList.remove('opacity-0');
                
                if(submitBtn.innerHTML === "Enviado!") {
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
                        formStatus.classList.add('opacity-0');
                    }, 5000);
                }
            });
        }


        // --- LÓGICA DO DETAIL VIEW ---
        const detailView = document.getElementById('project-detail-view');
        const detailContentWrapper = document.getElementById('detail-content-wrapper');
        const closeBtn = document.getElementById('closeDetailBtn');

        function openProjectDetail(project) {
            const galleryHTML = project.gallery.map(imgSrc => `
                <div class="w-full mb-4 md:mb-8 reveal-image">
                    <img src="${imgSrc}" class="w-full h-auto object-cover" loading="lazy">
                </div>
            `).join('');

            const pdfsHTML = project.pdfs ? project.pdfs.map(pdf => `
                <div class="w-1/4 md:w-1/6 p-2 reveal-image text-center">
                    <a href="${pdf.pdfLink}" target="_blank" class="hoverable" data-cursor="link">
                        <img src="${pdf.pdfThumbnail}" class="w-full h-auto object-cover" loading="lazy">
                    </a>
                    <p class="text-white text-sm mt-2">${pdf.pdfName || ''}</p>
                </div>
            `).join('') : '';

            const pdfContainer = pdfsHTML ? `
                <div class="flex flex-wrap -m-2">
                    ${pdfsHTML}
                </div>
            ` : '';

            detailContentWrapper.innerHTML = `
                <div class="w-full bg-[#080808] min-h-screen">
                    <div class="px-6 md:px-12 pt-32 pb-16 max-w-7xl mx-auto">
                        <div class="detail-header-anim opacity-0 translate-y-8">
                            <h1 class="font-display text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-none">
                                ${project.title}
                            </h1>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#333] pt-8 text-secondary-gray detail-header-anim opacity-0 translate-y-8">
                            <div><span class="block text-xs uppercase tracking-widest mb-1">Cliente</span><span class="text-off-white text-lg">${project.client}</span></div>
                            <div><span class="block text-xs uppercase tracking-widest mb-1">Ano</span><span class="text-off-white text-lg">${project.year}</span></div>
                            <div><span class="block text-xs uppercase tracking-widest mb-1">Serviço</span><span class="text-off-white text-lg">${project.category}</span></div>
                        </div>
                        <div class="mt-16 text-xl md:text-2xl leading-relaxed text-gray-300 max-w-4xl detail-header-anim opacity-0 translate-y-8">${project.description}</div>
                    </div>
                    <div class="w-full pb-32">
                        <div class="w-full mb-4 md:mb-8 reveal-image"><img src="${project.imageURL}" class="w-full h-auto object-cover"></div>
                        ${galleryHTML}
                        ${pdfContainer}
                    </div>
                    <div class="py-24 text-center border-t border-[#333] bg-[#080808]">
                        <p class="text-sm text-secondary-gray mb-4">Gostou deste projeto?</p>
                        <a href="#contact" onclick="closeProjectDetail()" class="text-3xl font-display font-bold hover:text-white transition-colors hoverable cursor-pointer" data-cursor="link">Vamos conversar</a>
                    </div>
                </div>
            `;

            detailView.scrollTop = 0;
            detailView.classList.add('open');
            document.body.style.overflow = 'hidden';
            closeBtn.classList.remove('opacity-0', 'pointer-events-none', 'invisible');

            const tl = gsap.timeline();
            tl.to('.detail-header-anim', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.3 });
            tl.from('.reveal-image', { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.5");
        }

        function closeProjectDetail() {
            detailView.classList.remove('open');
            document.body.style.overflow = 'auto';
            
            // Fix for SecurityError in blob/iframe environments
            try {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            } catch (e) {
                console.log("History API not supported in this environment");
            }

            closeBtn.classList.add('opacity-0', 'pointer-events-none', 'invisible');
        }

        closeBtn.addEventListener('click', closeProjectDetail);

        // --- GERAL ---
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
        });
        
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.closest('.hoverable')) {
                const link = e.target.closest('.hoverable');
                const type = link.getAttribute('data-cursor');
                cursor.classList.add('active');
                if(type === 'view') {
                     gsap.to(cursor, { scale: 0.5, opacity: 0.5, duration: 0.2 }); 
                } else {
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
                }
            } else {
                cursor.classList.remove('active');
                gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
            }
        });

        window.addEventListener('load', () => {
            gsap.to('.hero-text', { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" });
        });












