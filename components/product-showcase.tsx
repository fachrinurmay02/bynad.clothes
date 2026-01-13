export function ProductShowcase() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Product Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img src="/images/bynad-2.jpg" alt="KYRA Fashion Collection" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <h3 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground mb-4">KYRA</h3>
                <p className="text-sm tracking-[0.3em] uppercase text-foreground/80 mb-8">Fashion Collection</p>
                <p className="text-foreground/90 leading-relaxed mb-2 text-pretty">
                  This shirt I made is very simple yet looks very neat and can complement today's outfits. It's made
                  from a fabric that I personally like and is definitely comfortable for everyday wear.
                </p>
                <p className="text-sm text-muted-foreground">@bynad.clothes</p>
              </div>
            </div>
          </div>

          {/* Page Number */}
          <div className="absolute bottom-8 left-8">
            <p className="font-serif text-2xl tracking-tight text-foreground">Page 07</p>
          </div>
        </div>

        {/* Product Detail Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-20">
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest text-muted-foreground mb-2">@bynad.clothes</p>
              <h3 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.9]">
                KYRA
                <br />
                SHIRT
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">present to complement your outfit.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/bynad-7.jpg" alt="Product shot" className="w-full h-64 object-cover" />
            <div className="flex flex-col justify-center">
              <p className="font-serif text-3xl tracking-tight mb-2">simple</p>
              <p className="text-sm tracking-wider uppercase text-foreground/70">comfortable</p>
              <p className="text-sm tracking-wider uppercase text-foreground/70">and</p>
              <p className="text-sm tracking-wider uppercase text-foreground/70">aesthetic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
