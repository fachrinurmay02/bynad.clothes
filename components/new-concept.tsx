export function NewConcept() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-serif text-6xl lg:text-7xl tracking-tight text-foreground leading-[0.9]">
              NEW
              <br />
              CONCEPT
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I present shirts and will continue to produce other models that suit the tastes and are in demand by
                many other groups.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-4 pt-8">
              <div className="font-serif text-4xl tracking-tight">Elegant</div>
              <div className="font-serif text-4xl tracking-tight">Aesthetic</div>
              <div className="font-serif text-4xl tracking-tight">Casual</div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="/images/bynad-6.jpg" alt="New Concept" className="w-full h-[600px] object-cover" />
            <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm px-6 py-3">
              <p className="font-serif text-xl tracking-tight">bynad</p>
              <p className="font-serif text-xl tracking-tight">clothes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
