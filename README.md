# DJ ALEX - Landing Page

Landing page profissional para DJ Alex desenvolvida com **HTML5, CSS3 e JavaScript vanilla puro** (sem frameworks).

## 🎨 Design

**Filosofia**: Cyberpunk Synthwave Revival
- Cores néon: Ciano (#00FFFF), Magenta (#FF00FF), Amarelo (#FFFF00)
- Animações energéticas e dinâmicas
- Design responsivo mobile-first
- Efeitos visuais imersivos

## 📋 Funcionalidades

✅ **Header Fixo** - Logotipo néon com menu de navegação e botão WhatsApp
✅ **Hero Section** - Título gigante com efeitos de glow e partículas animadas
✅ **Seção Sobre** - Card com informações sobre o DJ
✅ **Galeria com Carousel** - Navegação por setas, dots clicáveis e auto-play
✅ **Som de Coração** - Toca ao clicar em qualquer lugar da página
✅ **Background Animado** - Gradient que muda continuamente
✅ **Efeitos Especiais** - Grid de linhas, scan line, partículas flutuantes
✅ **Seção de Contato** - Botão WhatsApp e links de redes sociais
✅ **Responsivo** - Otimizado para mobile, tablet e desktop

## 📁 Estrutura

```
dj-alex-vanilla/
├── index.html          # Estrutura HTML5
├── css/
│   └── styles.css      # Estilos CSS3 completos
├── js/
│   └── main.js         # JavaScript vanilla
├── images/
│   └── dj_alex_logo.png # Logotipo néon
├── audio/
│   └── heartbeat.mp3   # Som de batimento cardíaco
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Extraia os arquivos
2. Abra `index.html` em um navegador web
3. Pronto! O site está funcionando

### Opção 2: Com Servidor Local (Recomendado)

**Python 3:**
```bash
cd dj-alex-vanilla
python3 -m http.server 8000
# Acesse http://localhost:8000
```

**Node.js (http-server):**
```bash
npm install -g http-server
cd dj-alex-vanilla
http-server
# Acesse http://localhost:8080
```

**PHP:**
```bash
cd dj-alex-vanilla
php -S localhost:8000
# Acesse http://localhost:8000
```

## ✏️ Personalizações

### Substituir Imagens do Carousel

Abra `js/main.js` e localize o array `galleryImages` (linha ~9):

```javascript
const galleryImages = [
    "/images/sua-foto-1.jpg",
    "/images/sua-foto-2.jpg",
    "/images/sua-foto-3.jpg",
    // ... adicione mais imagens
];
```

Coloque suas imagens na pasta `images/` e atualize os caminhos.

### Alterar Links de Redes Sociais

No arquivo `index.html`, localize a seção de redes sociais (linha ~195) e substitua os `href="#"`:

```html
<a href="https://instagram.com/seu_perfil" class="social-link">
    <!-- Instagram icon -->
</a>
```

### Modificar Conteúdo de Texto

Todos os textos estão no `index.html`. Basta editar diretamente:

- Título: `<h1 class="hero-title">DJ ALEX</h1>`
- Subtítulo: `<p class="hero-subtitle">LEVANDO A ENERGIA...</p>`
- Descrição: `<p class="hero-description">Sets exclusivos...</p>`
- Etc.

### Mudar Cores Néon

No arquivo `css/styles.css`, localize as variáveis CSS (linha ~10):

```css
:root {
    --neon-cyan: #00FFFF;      /* Azul ciano */
    --neon-magenta: #FF00FF;   /* Rosa/Magenta */
    --neon-yellow: #FFFF00;    /* Amarelo */
    --dark-bg: #000000;        /* Fundo preto */
}
```

## 🎬 Animações

- **Gradient Background**: Muda de cores a cada 20 segundos
- **Scan Line**: Linha horizontal atravessando a tela
- **Neon Flicker**: Oscilação sutil nos elementos néon
- **Floating Particles**: Partículas de luz flutuando
- **Carousel Auto-play**: Muda de imagem a cada 4 segundos
- **Hover Effects**: Transições suaves nos botões

## 📱 Responsividade

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Ajustes de espaçamento e tipografia
- **Mobile**: Menu otimizado, botões full-width, imagens adaptadas

## 🔊 Som de Batimento Cardíaco

- Arquivo: `audio/heartbeat.mp3`
- Ativação: Qualquer clique na página
- Implementação: Event listener global em JavaScript

## 🌐 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notas Técnicas

- Sem dependências externas (HTML5, CSS3, JavaScript vanilla)
- Otimizado para performance
- Lazy loading de imagens
- Animações CSS para melhor performance
- Sem jQuery ou frameworks
- Código bem comentado e organizado

## 🎯 Próximos Passos

1. Substitua as imagens placeholder pelas suas fotos
2. Adicione seus links de redes sociais
3. Personalize o conteúdo de texto
4. Teste em diferentes dispositivos
5. Deploy em um servidor web

## 📞 Contato

- WhatsApp: +55 34 9731-5151
- Email: [Adicione seu email]
- Instagram: [Adicione seu perfil]

## 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para usar e modificar conforme necessário.

---

**Desenvolvido com energia néon e batidas futuristas! 🎵✨**
