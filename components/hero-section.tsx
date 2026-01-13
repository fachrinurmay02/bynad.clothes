"use client"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img src="/images/foto 13.jpeg" alt="KYRA Fashion Collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="font-serif text-[9rem] md:text-[16rem] lg:text-[24rem] tracking-tighter drop-shadow-2xl h-[-500px] lg:h-[500px] text-[#804408]">
            KYRA
          </h1>
          <p className="text-lg md:text-base tracking-[0.3em] uppercase drop-shadow-lg text-[#412912]">
            bynad.clothes
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background rounded-full" />
        </div>
      </div>
    </section>
  )
}
