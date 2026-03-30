import React, { useState, useEffect } from 'react';
import { MessageCircle, Search, Menu, X, Instagram, Diamond, ShieldCheck, Sparkles, Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "A elegância que ilumina os seus dias.",
      subtitle: "Nova Coleção Alvorecer"
    },
    {
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Detalhes que contam a sua história.",
      subtitle: "Joias em Ouro 18k"
    },
    {
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
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
              src={slide.image} 
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
            <button 
              className="px-8 py-3 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: colors.amareloAlvorecer, color: colors.azulNoite }}
            >
              Ver Catálogo
            </button>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Colares */}
            <div className="group relative h-96 overflow-hidden cursor-pointer rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Colares" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8">
                <h4 className="text-white text-2xl font-serif italic mb-2">Colares</h4>
                <span className="text-white text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all">Ver produtos</span>
              </div>
            </div>

            {/* Card Brincos */}
            <div className="group relative h-96 overflow-hidden cursor-pointer rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Brincos" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8">
                <h4 className="text-white text-2xl font-serif italic mb-2">Brincos</h4>
                <span className="text-white text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all">Ver produtos</span>
              </div>
            </div>

            {/* Card Anéis */}
            <div className="group relative h-96 overflow-hidden cursor-pointer rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Anéis" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8">
                <h4 className="text-white text-2xl font-serif italic mb-2">Anéis</h4>
                <span className="text-white text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all">Ver produtos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques (Produtos) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif italic mb-4" style={{ color: colors.azulNoite }}>Mais Desejados</h3>
              <div className="w-16 h-1" style={{ backgroundColor: colors.amareloAlvorecer }}></div>
            </div>
            <a href="#" className="hidden md:block text-sm font-bold tracking-widest uppercase hover:underline" style={{ color: colors.azulNoite }}>
              Ver todos
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Produto 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Colar Esmeralda" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 py-3 bg-white/90 text-[#1F364C] text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1F364C] hover:text-[#FAF5E9]">
                  Consultar Peça
                </button>
              </div>
              <h5 className="font-serif text-lg mb-1">Colar Ponto de Luz</h5>
              <p className="text-sm opacity-70 mb-2">Banho Ouro 18k</p>
              <p className="font-semibold">R$ 189,90</p>
            </div>

            {/* Produto 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1629224316170-f61cc3a596e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Argola Torcida Clássica" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2 py-1 text-[10px] font-bold tracking-wider uppercase text-[#1F364C]" style={{ backgroundColor: colors.amareloAlvorecer }}>
                  Mais Desejado
                </div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 py-3 bg-white/90 text-[#1F364C] text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1F364C] hover:text-[#FAF5E9]">
                  Consultar Peça
                </button>
              </div>
              <h5 className="font-serif text-lg mb-1">Argola Torcida Clássica</h5>
              <p className="text-sm opacity-70 mb-2">Banho Ouro 18k</p>
              <p className="font-semibold">R$ 149,90</p>
            </div>

            {/* Produto 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Anel Solitário" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 py-3 bg-white/90 text-[#1F364C] text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1F364C] hover:text-[#FAF5E9]">
                  Consultar Peça
                </button>
              </div>
              <h5 className="font-serif text-lg mb-1">Anel Solitário Brilho</h5>
              <p className="text-sm opacity-70 mb-2">Banho Ródio Branco</p>
              <p className="font-semibold">R$ 129,90</p>
            </div>

            {/* Produto 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pulseira Rivieira" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 py-3 bg-white/90 text-[#1F364C] text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1F364C] hover:text-[#FAF5E9]">
                  Consultar Peça
                </button>
              </div>
              <h5 className="font-serif text-lg mb-1">Pulseira Riviera</h5>
              <p className="text-sm opacity-70 mb-2">Banho Ouro 18k</p>
              <p className="font-semibold">R$ 259,90</p>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <a href="#" className="inline-block border-b-2 pb-1 text-sm font-bold tracking-widest uppercase" style={{ borderColor: colors.amareloAlvorecer, color: colors.azulNoite }}>
              Ver toda a loja
            </a>
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
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-1 px-6 py-4 rounded-full border border-[#1F364C]/10 text-sm focus:outline-none focus:border-[#FFD580] transition-colors"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105"
                  style={{ backgroundColor: colors.azulNoite, color: colors.amareloAlvorecer }}
                >
                  Inscrever
                </button>
              </form>
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
            <div className="mt-4 md:mt-0">
              CNPJ: 00.000.000/0001-00 | Brasil
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
