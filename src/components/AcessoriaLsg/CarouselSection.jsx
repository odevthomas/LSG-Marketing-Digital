import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSection = () => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Ajuste conforme necessário

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
      updateCurrentPage(-1);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      updateCurrentPage(1);
    }
  };

  const scrollToPage = (pageIndex) => {
    if (scrollContainerRef.current) {
      const scrollAmount = pageIndex * (320 * itemsPerPage);
      scrollContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setCurrentPage(pageIndex);
    }
  };

  const updateCurrentPage = (direction) => {
    setCurrentPage(prev => {
      const newPage = prev + direction;
      const maxPages = Math.ceil(items.length / itemsPerPage);
      return Math.max(0, Math.min(newPage, maxPages - 1));
    });
  };

  // Adicione um listener para atualizar a página atual durante a rolagem
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const newPage = Math.round(scrollLeft / (320 * itemsPerPage));
      setCurrentPage(newPage);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [itemsPerPage]);

  return (
    <div className="relative w-full">
      {/* Indicador de rolagem */}
      <div className="absolute -top-8 right-0 flex items-center gap-2 text-sm text-gray-600">
        <span className="hidden sm:inline">Deslize para ver mais</span>
        <div className="flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Botões de navegação com aria-label */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hover:bg-white transition-all"
        aria-label="Ver itens anteriores"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hover:bg-white transition-all"
        aria-label="Ver próximos itens"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide relative"
        role="region"
        aria-label="Carrossel de serviços"
      >
        {/* Conteúdo do carrossel */}
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex-none w-[280px] md:w-[320px]"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} de ${items.length}`}
          >
            {/* ... conteúdo do item ... */}
          </div>
        ))}
      </div>

      {/* Indicadores de página */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentPage === index ? 'bg-red-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => scrollToPage(index)}
            aria-label={`Ir para página ${index + 1}`}
            aria-current={currentPage === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection; 