export function AboutCasual() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest text-muted-foreground mb-2">@bynad.clothes</p>
              <h2 className="font-serif text-6xl lg:text-7xl tracking-tight text-foreground leading-[0.9]">
                ABOUT
                <br />
                CASUAL
              </h2>
            </div>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Suitable for those who wear hijab or not, it is very simple but has its own characteristics in this
                shirt
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img src="/images/bynad-3.jpg" alt="Casual style front" className="w-full h-[500px] object-cover" />
            </div>
            <div>
              <img
                src="/images/bynad-3.jpg"
                alt="Casual style back"
                className="w-full h-[500px] object-cover object-left"
              />
              <div className="mt-4 text-right">
                <p className="font-serif text-2xl tracking-tight">bynad</p>
                <p className="font-serif text-2xl tracking-tight">clothes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
