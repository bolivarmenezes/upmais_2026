// Menu Mobile agora é gerenciado pelo Bootstrap automaticamente

// Smooth Scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form submission
const contatoForm = document.querySelector('.contato-form');
if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contatoForm.reset();
    });
}

// Animações ao scroll com Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Não observar novamente após animar (melhor performance)
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Função para observar elementos com animação
function observeElements() {
    // Seção Hero - aparece imediatamente (sem animação de scroll)
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.classList.add('fade-in-left', 'animate');
    }
    
    if (heroImage) {
        heroImage.classList.add('fade-in-right', 'animate');
    }
    
    // Section Headers
    document.querySelectorAll('.section-header').forEach((el, index) => {
        el.classList.add('fade-in-up');
        if (index > 0) {
            el.classList.add(`animate-delay-${Math.min(index, 2)}`);
        }
        scrollObserver.observe(el);
    });
    
    // Cards de Planos - aplicar animações
    document.querySelectorAll('.plano-card').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.classList.add(`animate-delay-${Math.min(index + 1, 5)}`);
        scrollObserver.observe(el);
    });
    
    // Seção Sobre - texto da esquerda, imagem da direita
    const sobreText = document.querySelector('.sobre-text');
    const sobreImage = document.querySelector('.sobre-image');
    
    if (sobreText) {
        sobreText.classList.add('fade-in-left');
        scrollObserver.observe(sobreText);
    }
    
    if (sobreImage) {
        sobreImage.classList.add('fade-in-right');
        scrollObserver.observe(sobreImage);
    }
    
    // Features da seção Sobre
    document.querySelectorAll('.sobre-feature').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.classList.add(`animate-delay-${Math.min(index + 1, 3)}`);
        scrollObserver.observe(el);
    });
    
    // Seção Trabalho Remoto - imagem e conteúdo
    const trabalhoRemotoImage = document.querySelector('.trabalho-remoto-image');
    const trabalhoRemotoContent = document.querySelector('.trabalho-remoto-content');
    
    if (trabalhoRemotoImage) {
        trabalhoRemotoImage.classList.add('fade-in-left');
        scrollObserver.observe(trabalhoRemotoImage);
    }
    
    if (trabalhoRemotoContent) {
        trabalhoRemotoContent.classList.add('fade-in-right');
        scrollObserver.observe(trabalhoRemotoContent);
    }
    
    // Features da seção Trabalho Remoto
    document.querySelectorAll('.trabalho-remoto-feature-item').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.classList.add(`animate-delay-${Math.min(index + 1, 4)}`);
        scrollObserver.observe(el);
    });
    
    // Seção Streaming - imagem e conteúdo
    const streamingImage = document.querySelector('.streaming-image');
    const streamingContent = document.querySelector('.streaming-content');
    
    if (streamingImage) {
        streamingImage.classList.add('fade-in-right');
        scrollObserver.observe(streamingImage);
    }
    
    if (streamingContent) {
        streamingContent.classList.add('fade-in-left');
        scrollObserver.observe(streamingContent);
    }
    
    // Features da seção Streaming
    document.querySelectorAll('.streaming-feature-item').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.classList.add(`animate-delay-${Math.min(index + 1, 4)}`);
        scrollObserver.observe(el);
    });
    
    // Seção Jogos - imagem e conteúdo
    const jogosImage = document.querySelector('.jogos-image');
    const jogosContent = document.querySelector('.jogos-content');
    
    if (jogosImage) {
        jogosImage.classList.add('fade-in-right');
        scrollObserver.observe(jogosImage);
    }
    
    if (jogosContent) {
        jogosContent.classList.add('fade-in-left');
        scrollObserver.observe(jogosContent);
    }
    
    // Features da seção Jogos
    document.querySelectorAll('.jogos-feature-item').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.classList.add(`animate-delay-${Math.min(index + 1, 4)}`);
        scrollObserver.observe(el);
    });
    
    // Seção Empresas - imagem e conteúdo
    const empresasImage = document.querySelector('.empresas-image');
    const empresasContent = document.querySelector('.empresas-content');
    
    if (empresasImage) {
        empresasImage.classList.add('fade-in-left');
        scrollObserver.observe(empresasImage);
    }
    
    if (empresasContent) {
        empresasContent.classList.add('fade-in-right');
        scrollObserver.observe(empresasContent);
    }
    
    // Features da seção Empresas
    document.querySelectorAll('.empresas-feature-item').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.classList.add(`animate-delay-${Math.min(index + 1, 4)}`);
        scrollObserver.observe(el);
    });
    
    // Seção Contato - informações e formulário
    const contatoInfo = document.querySelector('.contato-info');
    const contatoForm = document.querySelector('.contato-form');
    
    if (contatoInfo) {
        contatoInfo.classList.add('fade-in-left');
        scrollObserver.observe(contatoInfo);
    }
    
    if (contatoForm) {
        contatoForm.classList.add('fade-in-right');
        scrollObserver.observe(contatoForm);
    }
    
    // Footer sections
    document.querySelectorAll('.footer-section').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.classList.add(`animate-delay-${Math.min(index + 1, 4)}`);
        scrollObserver.observe(el);
    });
}

// Inicializar observações quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        observeElements();
    });
} else {
    observeElements();
}
