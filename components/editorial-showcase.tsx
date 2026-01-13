export function EditorialShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column - Typography */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-6xl lg:text-7xl leading-tight tracking-tight mb-6 text-foreground">
              KYRA
              <br />
              SHIRT
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-12 text-base">
              A gift to complement your outfit with an elegant, aesthetic, and casual style using yarnyed cotton material.
            </p>
          </div>

          {/* Middle column - Top image and description */}
          <div className="lg:col-span-4">
            <div className="mb-8 aspect-[3/4] overflow-hidden bg-muted">
              <img src="/images/foto 9.jpeg" alt="Kyra Shirt lifestyle" className="w-full h-full object-cover" />
            </div>
            <div>

              <p className="font-serif text-2xl italic tracking-tight mb-2 ">Elegant <span className="ml-6">Aesthetic</span>   <span className="ml-6">Casual</span></p>
            </div>
          </div>

          {/* Right column - Brand name and bottom image */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h3 className="font-serif text-3xl tracking-tight mb-2">bynad.clothes</h3>
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src="/images/foto-baju-3.jpeg"
                alt="Bynad Collection showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
