export function OurStory() {
  return (
    <section id="story" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-serif text-6xl lg:text-7xl tracking-tight text-foreground leading-[0.9]">
              OUR
              <br />
              STORY
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed max-w-xl">
              <p>
                It started with me personally liking and collecting several shirts, that's why I released this product.
              </p>
              <p className="text-muted-foreground">
                This shirt I made is very simple yet looks very neat and can complement today's outfits. It's made from a fabric that I personally like and is definitely comfortable for everyday wear.
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/images/foto-baju-2.jpeg"
                alt="Product detail"
                className="w-full h-64 object-cover"
                query="elegant casual premium shirt fabric detail close up"
              />
              <img
                src="/images/foto 1-.jpeg"
                alt="Lifestyle shot"
                className="w-full h-80 object-cover"
                query="casual elegant shirt worn by person everyday lifestyle"
              />
            </div>
            <div className="pt-12">
              <img
                src="/images/foto-baju-1.jpeg"
                alt="Brand aesthetic"
                className="w-full h-96 object-cover"
                query="elegant casual premium shirt product shot neutral background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
