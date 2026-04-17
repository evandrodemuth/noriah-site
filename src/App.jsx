import React, { useState, useEffect } from 'react';
import { MessageCircle, Search, Menu, X, Instagram, Diamond, ShieldCheck, Sparkles, Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5500000000000'; // Substitua pelo número real

const products = [
  { id: 'CO002RO', category: 'COLAR', name: 'Cordão Baiano', bath: 'Ródio', price: 124.42, image: 'fotos/COLAR CORDÃO BAIANO_RO.jpg' },
  { id: 'CO002OU', category: 'COLAR', name: 'Cordão Baiano', bath: 'Ouro', price: 136.86, image: 'fotos/COLAR CORDAO BAIANO_OU.jpg' },
  { id: 'CO003OU', category: 'COLAR', name: 'Chocker Coração', bath: 'Ouro', price: 169.86, image: 'fotos/COLAR CORRENTE COR_OU.jpg' },
  { id: 'CO004OU', category: 'COLAR', name: 'Chocker', bath: 'Ouro', price: 124.42, image: 'fotos/BRINCO COR MAE_OU.JPG' },
  { id: 'CO005RO', category: 'COLAR', name: 'Chocker Fita', bath: 'Ródio', price: 114.42, image: 'fotos/COLAR FITA_ROOU2.JPG' },
  { id: 'CO006RO', category: 'COLAR', name: 'Colar Riviera', bath: 'Ródio', price: 308.03, image: 'fotos/COLAR RIVEIRA_RO.jpg' },
  { id: 'CO008RO', category: 'COLAR', name: 'Colar Fecho Cravejado', bath: 'Ródio', price: 276.42, image: 'fotos/COLAR FECHO ZIRCONIA MAE_RO.jpg' },
  { id: 'CO008OU', category: 'COLAR', name: 'Colar Fecho Cravejado', bath: 'Ouro', price: 246.42, image: 'fotos/COLAR FECHO ZIRCONIA MAE_OU.jpg' },
  { id: 'CO009OU', category: 'COLAR', name: 'Colar Grumet', bath: 'Ouro', price: 180.42, image: 'fotos/COLAR TRANÇADO E PEROLA_OU2.JPG' },
  { id: 'CO010OU', category: 'COLAR', name: 'Chocker Pérola Orgânica', bath: 'Ouro', price: 125.86, image: 'fotos/COLAR TRANÇADO E PEROLA_OU2.JPG' },
  { id: 'CO011RO', category: 'COLAR', name: 'Colar Coração', bath: 'Ródio', price: 136.42, image: 'fotos/COLAR COR_RO.jpg' },
  { id: 'CO012OU', category: 'COLAR', name: 'Colar Pérola Orgânica', bath: 'Ouro', price: 142.42, image: 'fotos/COLAR TRANÇADO E PEROLA_OU2.JPG' },
  { id: 'BRO002OU', category: 'BRINCO', name: 'Brinco Cravejado Zircônia', bath: 'Ouro', price: 136.86, image: 'fotos/BRINCO MEIA ARGOLA ZIRCONIA_OU.jpg' },
  { id: 'BRO003OU', category: 'BRINCO', name: 'Brinco', bath: 'Ouro', price: 110.46, image: 'fotos/BRINCO COR MAE_OU.JPG' },
  { id: 'BRO003RO', category: 'BRINCO', name: 'Brinco', bath: 'Ródio', price: 121.46, image: 'fotos/BRINCO COR MAE_RO.jpg' },
  { id: 'BRO004RO', category: 'BRINCO', name: 'Trio Argola', bath: 'Ródio', price: 120.42, image: 'fotos/BRINCO TRIO ARGOLA_RO.jpg' },
  { id: 'BRO004OU', category: 'BRINCO', name: 'Trio Argola', bath: 'Ouro', price: 110.42, image: 'fotos/BRINCO TRIO ARGOLA_OU.jpg' },
  { id: 'BRO005RO', category: 'BRINCO', name: 'Brinco Nó', bath: 'Ródio', price: 124.42, image: 'fotos/BRINCO NÓ_ROOU.jpg' },
  { id: 'BRO005OU', category: 'BRINCO', name: 'Brinco Nó', bath: 'Ouro', price: 114.42, image: 'fotos/BRINCO NÓ_ROOU.jpg' },
  { id: 'BRO006OU', category: 'BRINCO', name: 'Brinco Orgânico', bath: 'Ouro', price: 98.42, image: 'fotos/BRINCO ORGANICO_OU.jpg' },
  { id: 'BRO007OU', category: 'BRINCO', name: 'Brinco Gota', bath: 'Ouro', price: 108.42, image: 'fotos/BRINCO GOTA_OU.jpg' },
  { id: 'BRO008RO', category: 'BRINCO', name: 'Brinco Gota', bath: 'Ródio', price: 77.46, image: 'fotos/BRINCO GOTA2_RO.jpg' },
  { id: 'BRO009OU', category: 'BRINCO', name: 'Brinco Cravejado', bath: 'Ouro', price: 125.53, image: 'fotos/BRINCO MEIA ARGOLA_OU.jpg' },
  { id: 'BRO010OU', category: 'BRINCO', name: 'Argola Cravejada', bath: 'Ouro', price: 130.26, image: 'fotos/BRINCO ARGOLA_OU.jpg' },
  { id: 'BRO011OU', category: 'BRINCO', name: 'Brinco Oval Cravejado', bath: 'Ouro', price: 214.42, image: 'fotos/BRINCO OVAL COM ZIRCONIA MEIO.jpg' },
  { id: 'BRO012OU', category: 'BRINCO', name: 'Argola Quadrada', bath: 'Ouro', price: 125.86, image: 'fotos/BRINCO QUADRADO_OU.jpg' },
  { id: 'BRO013OU', category: 'BRINCO', name: 'Brinco Cristal', bath: 'Ouro', price: 134.42, image: 'fotos/BRINCO CRISTAL_OU.jpg' },
  { id: 'BRO014RO', category: 'BRINCO', name: 'Brinco Mini', bath: 'Ródio', price: 68.42, image: 'fotos/BRINCO COR PEQ_RO.jpg' },
  { id: 'BRO015RO', category: 'BRINCO', name: 'Aircuf Coração', bath: 'Ródio', price: 86.42, image: 'fotos/BRINCO AIRCUF COR_RO.jpg' },
  { id: 'BRO016RO', category: 'BRINCO', name: 'Aircuf Bola', bath: 'Ródio', price: 136.42, image: 'fotos/BRINCO AIRCUF BOLA_RO.jpg' },
  { id: 'BRO017OU', category: 'BRINCO', name: 'Argola Pérola Orgânica', bath: 'Ródio', price: 143.03, image: 'fotos/BRINCO ARGOLA PEROLA ORGANICA_OU.jpg' },
  { id: 'BRO018RO', category: 'BRINCO', name: 'Brinco Pequeno', bath: 'Ródio', price: 52.42, image: 'fotos/BRINCO COR MEDIO_RO.jpg' },
  { id: 'BRO020RO', category: 'BRINCO', name: 'Brinco Zircônia', bath: 'Ródio', price: 150.06, image: 'fotos/BRINCO ZIRCONIA_RO.jpg' },
  { id: 'BRO021OU', category: 'BRINCO', name: 'Brinco Pérola Cascata', bath: 'Ouro', price: 147.86, image: 'fotos/BRINCO PEROLA CASCATA.jpg' },
  { id: 'BRA002RO', category: 'BRACELETE', name: 'Bracelete Liso', bath: 'Ródio', price: 174.42, image: 'fotos/BRACELETE LARGO OND_RO.jpg' },
  { id: 'BRA003OU', category: 'BRACELETE', name: 'Bracelete Zircônia', bath: 'Ouro', price: 138.32, image: 'fotos/BRACELETE NÓ_OU.JPG' },
  { id: 'BRA004OU', category: 'BRACELETE', name: 'Aparador Liso', bath: 'Ouro', price: 124.42, image: 'fotos/BRACELETE APARA_OU.jpg' },
  { id: 'BRA005OU', category: 'BRACELETE', name: 'Bracelete Gota', bath: 'Ouro', price: 164.42, image: 'fotos/BRACELETE LARGO_OU.jpg' },
  { id: 'BRA006OU', category: 'BRACELETE', name: 'Bracelete Ondulado Liso', bath: 'Ouro', price: 90.66, image: 'fotos/BRACELETE ONDULADO_ROOU.jpg' },
  { id: 'BRA006RO', category: 'BRACELETE', name: 'Bracelete Ondulado Liso', bath: 'Ródio', price: 124.42, image: 'fotos/BRACELETE ONDULADO_ROOU.jpg' },
  { id: 'BRA007RO', category: 'BRACELETE', name: 'Bracelete Riviera Coração', bath: 'Ródio', price: 161.06, image: 'fotos/BRACELETE RIVEIRA COR_RO.jpg' },
  { id: 'BRA008RO', category: 'BRACELETE', name: 'Bracelete Largo Ondulado', bath: 'Ródio', price: 184.42, image: 'fotos/BRACELETE GRANDE ONDULADO_RO.jpg' },
  { id: 'AN003RO', category: 'ANEL', name: 'Regulável com Zircônia', bath: 'Ródio', price: 118.03, image: 'fotos/ANEL ZIRCONIA_ROOU.jpg' },
  { id: 'AN003OU', category: 'ANEL', name: 'Regulável com Zircônia', bath: 'Ouro', price: 105.53, image: 'fotos/ANEL ZIRCONIA_ROOU.jpg' },
  { id: 'AN005OU', category: 'ANEL', name: 'Regulável Liso', bath: 'Ouro', price: 98.42, image: 'fotos/ANEL REGULAVEL LISO_OU.jpg' },
  { id: 'AN005RO', category: 'ANEL', name: 'Regulável Liso', bath: 'Ródio', price: 113.03, image: 'fotos/ANEL REGULAVEL_RO.jpg' },
  { id: 'AN007OU', category: 'ANEL', name: 'Solitário Cristal', bath: 'Ouro', price: 123.03, image: 'fotos/ANEL SOLITARIO_OU.jpg' },
  { id: 'AN008RO', category: 'ANEL', name: 'Regulável Cristal', bath: 'Ródio', price: 85.53, image: 'fotos/ANEL CORAÇÃO_RO1.jpg' },
  { id: 'PUL001OU', category: 'PULSEIRA', name: '1 Pérola Orgânica', bath: 'Ouro', price: 74.42, image: 'fotos/PULSEIRA PEROLA UNICA_OU.jpg' },
  { id: 'PUL002OU', category: 'PULSEIRA', name: 'Pulseira Fecho Cravejado', bath: 'Ouro', price: 214.42, image: 'fotos/PULSEIRA FECHO CRAVEJADA.jpg' },
  { id: 'PUL002RO', category: 'PULSEIRA', name: 'Pulseira Fecho Cravejado', bath: 'Ródio', price: 236.42, image: 'fotos/PULSEIRA MAE_RO.jpg' },
  { id: 'CJ002RO', category: 'CONJUNTO', name: 'Conj. Gota Cravejada', bath: 'Ródio', price: 138.42, image: 'fotos/CONJ GOTA CRAVEJADA.jpg' },
  { id: 'CJ003OU', category: 'CONJUNTO', name: 'Citrino com Zircônia', bath: 'Ouro', price: 161.75, image: 'fotos/CONJUNTO CITRINO.jpg' },
  { id: 'CJ004RO', category: 'CONJUNTO', name: 'Conj. Coração Zircônia', bath: 'Ródio', price: 124.42, image: 'fotos/CONJUNTO CORAÇÃO ZIRCONIA E LISO.jpg' },
  { id: 'CJ005RO', category: 'CONJUNTO', name: 'Conj. Coração Liso', bath: 'Ródio', price: 124.42, image: 'fotos/CONJUNTO CORAÇÃO ZIRCONIA E LISO.jpg' },
];

const CATEGORIES = ['TODOS', 'COLAR', 'BRINCO', 'BRACELETE', 'ANEL', 'PULSEIRA', 'CONJUNTO'];
const CATEGORY_LABELS = { TODOS: 'Todos', COLAR: 'Colares', BRINCO: 'Brincos', BRACELETE: 'Braceletes', ANEL: 'Anéis', PULSEIRA: 'Pulseiras', CONJUNTO: 'Conjuntos' };

function ProductCard({ product, colors }) {
  const msg = encodeURIComponent(`Olá! Tenho interesse na peça: ${product.name} | Banho ${product.bath} | Cód. ${product.id}`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-50 rounded-2xl">
        <img
          src={import.meta.env.BASE_URL + encodeURI(product.image)}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=60'; }}
        />
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 py-3 bg-white/90 text-[#1F364C] text-xs font-bold tracking-widest uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1F364C] hover:text-[#FAF5E9] rounded"
        >
          Consultar Peça
        </a>
      </div>
      <h5 className="font-serif text-base mb-1">{product.name}</h5>
      <p className="text-xs opacity-60 mb-1">Banho {product.bath}</p>
      <p className="font-semibold text-sm">R$ {product.price.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('TODOS');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error' | 'loading'

  const heroSlides = [
    {
      image: "fotos/COLAR RIVEIRA_RO.jpg",
      title: "A elegância que ilumina os seus dias.",
      subtitle: "Nova Coleção Alvorecer"
    },
    {
      image: "fotos/CONJUNTO CITRINO.jpg",
      title: "Detalhes que contam a sua história.",
      subtitle: "Joias em Ouro 18k"
    },
    {
      image: "fotos/COLAR FECHO ZIRCONIA MAE_RO.jpg",
      title: "Sinta a exclusividade em cada peça.",
      subtitle: "Design Atemporal"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Paleta de cores baseada no PDF
  const colors = {
    azulNoite: '#1F364C',
    amareloAlvorecer: '#FFD580',
    calmaria: '#FAF5E9',
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.calmaria, color: colors.azulNoite }}>
      
      {/* Top Bar / Announcement */}
      <div 
        className="w-full py-2 text-center text-xs md:text-sm font-medium tracking-wider"
        style={{ backgroundColor: colors.azulNoite, color: colors.amareloAlvorecer }}
      >
        ATENDIMENTO PERSONALIZADO E EXCLUSIVO
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b" style={{ borderColor: colors.calmaria }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2 text-[#1F364C] hover:text-[#FFD580] transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Menu - Left */}
            <div className="hidden md:flex space-x-8 items-center flex-1">
              <a href="#lancamentos" className="text-sm font-medium tracking-widest hover:text-[#FFD580] transition-colors uppercase">Lançamentos</a>
              <a href="#colecoes" className="text-sm font-medium tracking-widest hover:text-[#FFD580] transition-colors uppercase">Coleções</a>
              <a href="#sobre" className="text-sm font-medium tracking-widest hover:text-[#FFD580] transition-colors uppercase">A Marca</a>
            </div>

            {/* Logo */}
            {/* INSTRUÇÃO: Substitua a div abaixo por uma tag <img src="Fundo_Calmaria_Logo_Noriah.svg" alt="Noriah" /> */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center flex-1 md:flex-none cursor-pointer">
              <img 
                src="Fundo_Calmaria_Logo_Noriah.svg" 
                alt="Noriah" 
                className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_0.8px_rgba(31,54,76,0.8)]" 
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} 
              />
              <div style={{ display: 'none' }} className="flex-col items-center justify-center">
                <h1 className="font-serif text-3xl md:text-4xl italic tracking-wide" style={{ color: colors.azulNoite }}>
                  Noriah
                </h1>
                <span className="text-[0.6rem] md:text-xs tracking-[0.3em] uppercase" style={{ color: colors.azulNoite }}>
                  semijoias
                </span>
              </div>
            </div>

            {/* Icons - Right */}
            <div className="flex items-center justify-end space-x-4 flex-1">
              <button className="p-2 text-[#1F364C] hover:text-[#FFD580] transition-colors hidden md:block">
                <Search size={20} />
              </button>
              <button className="p-2 text-[#1F364C] hover:text-[#FFD580] transition-colors relative flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="hidden md:inline text-xs font-medium uppercase tracking-widest">Contato</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: colors.calmaria }}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center border-t border-[#1F364C]/10">
              <a href="#lancamentos" className="block px-3 py-2 text-base font-medium tracking-widest hover:text-[#FFD580] uppercase">Lançamentos</a>
              <a href="#colecoes" className="block px-3 py-2 text-base font-medium tracking-widest hover:text-[#FFD580] uppercase">Coleções</a>
              <a href="#sobre" className="block px-3 py-2 text-base font-medium tracking-widest hover:text-[#FFD580] uppercase">A Marca</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-gray-100 overflow-hidden">
        {/* Carrossel de Imagens */}
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={import.meta.env.BASE_URL + encodeURI(slide.image)} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay escuro para garantir leitura do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F364C]/70 to-transparent"></div>
          </div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl transition-all duration-700 transform">
            <span className="block text-sm font-semibold tracking-widest uppercase mb-4 animate-fadeIn" style={{ color: colors.amareloAlvorecer }}>
              {heroSlides[currentSlide].subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white leading-tight animate-slideUp">
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-lg text-white/90 mb-8 font-light max-w-md">
              Peças exclusivas banhadas a ouro 18k, desenhadas para realçar a sua beleza natural com sofisticação.
            </p>
            <a
              href="#catalogo"
              className="inline-block px-8 py-3 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: colors.amareloAlvorecer, color: colors.azulNoite }}
            >
              Ver Catálogo
            </a>
          </div>
        </div>

        {/* Controles do Carrossel */}
        <div className="absolute bottom-10 right-10 flex space-x-4 z-10">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#1F364C] transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#1F364C] transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-[#FFD580]' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 border-b border-[#1F364C]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Diamond size={32} className="mb-3" style={{ color: colors.amareloAlvorecer }} />
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Banho Ouro 18k</h4>
              <p className="text-xs opacity-70">Qualidade premium</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck size={32} className="mb-3" style={{ color: colors.amareloAlvorecer }} />
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">1 Ano de Garantia</h4>
              <p className="text-xs opacity-70">Contra defeitos de fabricação</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sparkles size={32} className="mb-3" style={{ color: colors.amareloAlvorecer }} />
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Hipoalergênico</h4>
              <p className="text-xs opacity-70">Livre de níquel</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star size={32} className="mb-3" style={{ color: colors.amareloAlvorecer }} />
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Design Exclusivo</h4>
              <p className="text-xs opacity-70">Peças selecionadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coleções */}
      <section id="colecoes" className="py-20" style={{ backgroundColor: colors.calmaria }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif italic mb-4">Nossas Coleções</h3>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: colors.amareloAlvorecer }}></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: 'Colares', cat: 'COLAR', img: 'fotos/COLAR RIVEIRA_RO.jpg' },
              { label: 'Brincos', cat: 'BRINCO', img: 'fotos/BRINCO OVAL COM ZIRCONIA MEIO.jpg' },
              { label: 'Anéis', cat: 'ANEL', img: 'fotos/ANEL SOLITARIO_OU.jpg' },
              { label: 'Braceletes', cat: 'BRACELETE', img: 'fotos/BRACELETE RIVEIRA COR_RO.jpg' },
              { label: 'Pulseiras', cat: 'PULSEIRA', img: 'fotos/PULSEIRA FECHO CRAVEJADA.jpg' },
              { label: 'Conjuntos', cat: 'CONJUNTO', img: 'fotos/CONJUNTO CITRINO.jpg' },
            ].map(({ label, cat, img }) => (
              <a
                key={cat}
                href="#catalogo"
                onClick={() => setActiveCategory(cat)}
                className="group relative h-96 overflow-hidden cursor-pointer rounded-3xl block"
              >
                <img
                  src={import.meta.env.BASE_URL + encodeURI(img)}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-serif italic mb-2">{label}</h4>
                  <span className="text-white text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all">Ver produtos</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-serif italic mb-4" style={{ color: colors.azulNoite }}>Catálogo</h3>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: colors.amareloAlvorecer }}></div>
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-full border"
                  style={activeCategory === cat
                    ? { backgroundColor: colors.azulNoite, color: colors.amareloAlvorecer, borderColor: colors.azulNoite }
                    : { backgroundColor: 'transparent', color: colors.azulNoite, borderColor: colors.azulNoite + '40' }
                  }
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
            {/* Busca por nome */}
            <div className="mt-4 flex justify-center">
              <div className="relative w-full max-w-sm">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" style={{ color: colors.azulNoite }} />
                <input
                  type="text"
                  placeholder="Buscar produto..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full border focus:outline-none focus:border-[#1F364C] transition-colors"
                  style={{ borderColor: colors.azulNoite + '30', color: colors.azulNoite }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => (activeCategory === 'TODOS' || p.category === activeCategory)
                && p.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(product => (
                <ProductCard key={product.id} product={product} colors={colors} />
              ))
            }
          </div>
        </div>
      </section>

      {/* Sobre a Marca */}
      <section id="sobre" className="py-0 flex flex-col md:flex-row w-full" style={{ backgroundColor: colors.azulNoite }}>
        <div className="w-full md:w-1/2 h-[500px] md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Essência Noriah" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24" style={{ color: colors.calmaria }}>
          <div className="max-w-md">
            <h3 className="text-3xl md:text-5xl font-serif italic mb-6">A Essência Noriah</h3>
            <p className="mb-6 leading-relaxed font-light opacity-90">
              Nascemos do desejo de transformar momentos cotidianos em memórias inesquecíveis. A Noriah é mais que uma marca de semijoias; é uma celebração da força e da delicadeza feminina.
            </p>
            <p className="mb-8 leading-relaxed font-light opacity-90">
              Cada peça é cuidadosamente desenhada e banhada com excelência para garantir não apenas beleza, mas durabilidade e conforto em todos os momentos da sua vida.
            </p>
            <a href="#" className="inline-flex items-center uppercase tracking-widest text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: colors.amareloAlvorecer }}>
              Conheça nossa história
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter / Call to Action */}
      <section className="py-20" style={{ backgroundColor: colors.calmaria }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-[#1F364C]/5">
            <div className="max-w-md">
              <h3 className="text-3xl md:text-4xl font-serif italic mb-4" style={{ color: colors.azulNoite }}>Receba nossas novidades</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Cadastre-se para receber em primeira mão nossos lançamentos exclusivos, curadoria de estilo e ofertas especiais da Noriah.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={async e => {
                e.preventDefault();
                setNewsletterStatus('loading');
                try {
                  const { ip } = await fetch('https://api.ipify.org?format=json').then(r => r.json()).catch(() => ({ ip: null }));
                  const res = await fetch('https://n8n.demuthlab.cloud/webhook/mail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: newsletterEmail, ip }),
                  });
                  setNewsletterStatus(res.ok ? 'success' : 'error');
                } catch {
                  setNewsletterStatus('error');
                }
              }}>
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                  className="flex-1 px-6 py-4 rounded-full border border-[#1F364C]/10 text-sm focus:outline-none focus:border-[#FFD580] transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                  className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: colors.azulNoite, color: colors.amareloAlvorecer }}
                >
                  {newsletterStatus === 'loading' ? 'Enviando...' : newsletterStatus === 'success' ? 'Inscrito!' : 'Inscrever'}
                </button>
              </form>
              {newsletterStatus === 'success' && (
                <p className="mt-3 text-xs text-green-600 font-medium">Obrigada! Você receberá nossas novidades em breve.</p>
              )}
              {newsletterStatus === 'error' && (
                <p className="mt-3 text-xs text-red-500 font-medium">Algo deu errado. Tente novamente.</p>
              )}
              <p className="mt-4 text-[10px] opacity-40 text-center sm:text-left">
                Ao se inscrever, você concorda com nossa Política de Privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10" style={{ backgroundColor: colors.azulNoite, color: colors.calmaria }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="md:col-span-1">
              <div className="flex flex-col items-start cursor-pointer mb-6">
                <img 
                  src="Fundo_Azul_Noite_Logo_Noriah.svg" 
                  alt="Noriah Semijoias" 
                  className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_0.8px_rgba(250,245,233,0.8)]"
                />
              </div>
              <p className="text-sm opacity-80 mb-6 font-light">
                Brilho e sofisticação para o seu dia a dia. Semijoias premium com garantia de qualidade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#FFD580] transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: colors.amareloAlvorecer }}>Institucional</h4>
              <ul className="space-y-3 text-sm opacity-80 font-light">
                <li><a href="#" className="hover:text-[#FFD580] transition-colors">Quem Somos</a></li>
                <li><a href="#" className="hover:text-[#FFD580] transition-colors">Garantia e Cuidados</a></li>
                <li><a href="#" className="hover:text-[#FFD580] transition-colors">Política de Trocas</a></li>
              </ul>
            </div>

            {/* Ajuda */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: colors.amareloAlvorecer }}>Atendimento</h4>
              <ul className="space-y-3 text-sm opacity-80 font-light">
                <li><a href="#" className="hover:text-[#FFD580] transition-colors">Fale Conosco (WhatsApp)</a></li>
                <li><a href="#" className="hover:text-[#FFD580] transition-colors">Dúvidas Frequentes</a></li>
                <li><a href="#" className="hover:text-[#FFD580] transition-colors">Guia de Medidas</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 font-light" style={{ borderColor: 'rgba(250, 245, 233, 0.1)' }}>
            <p>&copy; {new Date().getFullYear()} Noriah Semijoias. Todos os direitos reservados.</p>
            <a href="mailto:contato@noriahsemijoias.com.br" className="mt-2 md:mt-0 hover:opacity-100 transition-opacity">
              contato@noriahsemijoias.com.br
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
