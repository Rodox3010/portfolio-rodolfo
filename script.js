
gsap.registerPlugin(ScrollTrigger);

        // --- DADOS DOS PROJETOS ---
        const projectsData = [
            {
                id: 1,
                title: "TRABALHOS ACADÊMICOS",
                client: "FACULDADE UNIP",
                year: "2012/2013",
                category: "Trabalhos Acadêmicos",
                imageURL: "img/academicos/allstarfinal.jpg", 
                description: "Este projeto reúne uma seleção dos trabalhos desenvolvidos ao longo do curso de Design Gráfico. Cada exercício representou uma oportunidade de explorar diferentes áreas do design, desde identidade visual, tipografia e diagramação até fotografia, ilustração e design editorial. Durante esse período, pude experimentar, aprender técnicas, compreender processos criativos e fortalecer minha visão estética e conceitual. Esses projetos marcaram o início da minha trajetória como designer e refletem minha evolução profissional e pessoal dentro da área.",
                gallery: [
                    "img/academicos/logo_idea/logo_idea_1.jpg",
                    "img/academicos/logo_idea/1.jpg",
                    "img/academicos/logo_idea/2.jpg",
                    "img/academicos/logo_idea/3.jpg"
                ],
                pdfs: [
                    {
                        pdfThumbnail: "img/academicos/revistacmique/revistacemique.jpg",
                        pdfLink: "img/academicos/revistacmique/revistacemique.pdf",
                        pdfName: "Revista Cemique"
                    },
                    {
                        pdfThumbnail: "img/academicos/Identidade_diagonal/diagonal.jpg",
                        pdfLink: "img/academicos/Identidade_diagonal/diagonal.pdf",
                        pdfName: "Identidade Diagonal"
                    }
                ]
            },
            {
                id: 2,
                title: "ALFA INSTRUMENTOS",
                client: "ALFA INSTRUMENTO",
                year: "2019/2021",
                category: "Web Design/Design Gráfico",
                imageURL: "img/alfainstrumentos/agrishow.jpg",
                description: "Nesta área vou mostrar alguns trabalhos realizados na empresa Alfa Instrumentos.",
                gallery: [
                    "img/alfainstrumentos/dia_do_cacau.jpg",
                    "img/alfainstrumentos/mundia_meio_ambiente.jpg",
                    "img/alfainstrumentos/ensacador_de_bigbag.jpg",
                    "img/alfainstrumentos/Indice-de-protecao-IP.jpg",
                    "img/alfainstrumentos/vagas.jpg",
                ],
                pdfs: [
                    {
                        
                        pdfThumbnail: "img/alfainstrumentos/Gif-Dosadora.gif",
                        pdfLink: "img/alfainstrumentos/Gif-Dosadora.gif",
                        pdfName: "Gif Dosadora"
                    },
                    {
                        pdfThumbnail: "img/alfainstrumentos/Gif-Envasadora-de-liquidos.gif",
                        pdfLink: "img/alfainstrumentos/Gif-Envasadora-de-liquidos.gif",
                        pdfName: "Gif Envasadora"
                    },
                    {
                        pdfThumbnail: "img/alfainstrumentos/ensacador_de_bigbag.jpg",
                        pdfLink: "https://youtu.be/ZIHuXQJAT5Y?si=GZxOA-skp-yGENlW",
                        pdfName: "Vídeo Ensacadora de Big Bag"
                    },
                    {
                        pdfThumbnail: "img/alfainstrumentos/Indice-de-protecao-IP.jpg",
                        pdfLink: "https://youtu.be/7ZRK-z7QDKw?si=iwO2C_vtT5NLvpgk",
                        pdfName: "Vídeo Balança de bancada - IP69K"
                    },
                ]
            },
            {
                id: 3,
                title: "IDENTIDADE VISUAL",
                client: "HJA REPRESENTAÇÕES",
                year: "2025",
                category: "ID",
                imageURL: "img/hjarepresetacao/Capa1.jpg",
                description: "O logo foi desenvolvido para transmitir solidez, profissionalismo e a essência do representate comercial.",
                gallery: [
                    "img/hjarepresetacao/Capa2.jpg",
                    "img/hjarepresetacao/Capa3.jpg",
                    "img/hjarepresetacao/aplicacao1.jpg",
                    "img/hjarepresetacao/aplicacao2.jpg",
                    "img/hjarepresetacao/aplicacao3.jpg",
                  //  "img/hjarepresetacao/aplicacao4.jpg",
                    "img/hjarepresetacao/aplicacao5.jpg",
                    "img/hjarepresetacao/aplicacao6.jpg"
                ],
              
            },
            {
                id: 4,
                title: "MENU/VETORIZAÇÃO/ANÚNCIO",
                client: "JA CREPES - CREPES FRANCÊS",
                year: "2023",
                category: "Folders",
                imageURL: "img/Jacrepes/logo_jacrepes.png",
                description: "Neste trabalho, realizei a vetorização do logotipo da empresa Jacrepes (recuperação), além da criação de dois tipos de anúncios para celular e o menu da empresa.",
                gallery: [
                    "img/Jacrepes/promo_pizza.png",
                    "img/Jacrepes/promo_crepe.png"
                ],
                pdfs: [
                    {
                        pdfThumbnail: "img/Jacrepes/capa_crepe.jpg",
                        pdfLink: "img/Jacrepes/menu_crepe.pdf",
                        pdfName: "Folder Crepe - para celular"
                    },
                    {
                        pdfThumbnail: "img/Jacrepes/capa_pizza.jpg",
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
                imageURL: "img/jmjosemilton/Logo_3D_JM.jpg",
                description: "Foi criado um logo para um pequeno escritório do interior da Bahia. Além do logo, foram desenvolvidos também o cartão de visita e uma faixa para a fachada do escritório.",
                gallery: [
                    "img/jmjosemilton/Moukup_Cartao.jpg",
                    "img/jmjosemilton/cartao_JM.png",
                    "img/jmjosemilton/faixa_escritorio.jpg",

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


      // --- LÓGICA DO FORMULÁRIO (ATUALIZADA COM SEU ID FORMSPREE) ---
                const form = document.getElementById('contact-form');
                const btnText = document.getElementById('btn-text');
                const btnSpinner = document.getElementById('btn-spinner');
                const formStatus = document.getElementById('form-status');

                        if (form) {
                            form.addEventListener('submit', async (e) => {
                                e.preventDefault();
                        
                                // Estado de Carregamento
                                if (btnText) btnText.textContent = 'Enviando...';
                                if (btnSpinner) btnSpinner.classList.remove('hidden');
                                form.classList.add('opacity-50', 'pointer-events-none');
                        
                                const formData = new FormData(form);
                        
                                try {
                                    // USANDO O SEU ENDPOINT ESPECÍFICO DO FORMSPREE
                                    const response = await fetch('https://formspree.io/f/xwvqgdkn', {
                                        method: 'POST',
                                        body: formData,
                                        headers: {
                                            'Accept': 'application/json'
                                        }
                                    });
                        
                                    if (response.ok) {
                                        showStatus('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                                        form.reset();
                                    } else {
                                        showStatus('Ocorreu um erro ao enviar. Tente novamente mais tarde.', 'error');
                                    }
                                } catch (error) {
                                    showStatus('Erro de conexão. Verifique sua internet.', 'error');
                                } finally {
                                    if (btnText) btnText.textContent = 'Enviar Mensagem';
                                    if (btnSpinner) btnSpinner.classList.add('hidden');
                                    form.classList.remove('opacity-50', 'pointer-events-none');
                                }
                            });
                        }

// Função Auxiliar para as mensagens de sucesso/erro
function showStatus(message, type) {
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.className = `mt-6 text-sm text-center font-medium p-4 rounded-lg transition-all duration-300 ${
        type === 'success' ? 'bg-green-900/20 text-success-green' : 'bg-red-900/20 text-red-400'
    }`;
    formStatus.classList.remove('opacity-0');
    
    setTimeout(() => {
        formStatus.classList.add('opacity-0');
    }, 5000);
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












