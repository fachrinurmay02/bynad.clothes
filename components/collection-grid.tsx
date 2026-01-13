"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CollectionGrid() {
  const lookbookItems = [
    { image: "/images/foto 5.jpeg", title: "KYRA SHIRT", category: "Collection" },
    { image: "/images/foto 8.jpeg", title: "ELEGANT WEAR", category: "Collection" },
    { image: "/images/foto 9.jpeg", title: "CASUAL COMFORT", category: "Collection" },
    { image: "/images/foto 16.jpeg", title: "AESTHETIC VIBES", category: "Collection" },
    { image: "/images/foto 17.jpeg", title: "PREMIUM CASUAL", category: "Collection" },
  ]

  const instagramFeed = [
    { image: "/images/bynad-5.jpg", likes: "2.5K", comments: "156" },
    { image: "/images/bynad-6.jpg", likes: "3.1K", comments: "248" },
    { image: "/images/bynad-3.jpg", likes: "2.8K", comments: "192" },
    { image: "/images/bynad-4.jpg", likes: "3.4K", comments: "267" },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="collection" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground mb-4">Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our curated lookbook and latest collection updates
          </p>
        </div>

        <div className="mb-24">
          <div className="relative">
            {/* Scroll Container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-webkit-mask-image:linear-gradient(to_right,black_0%,black_85%,transparent_100%)] mask-image-[linear-gradient(to_right,black_0%,black_85%,transparent_100%)]"
            >
              {lookbookItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-muted mb-4 aspect-[3/4]">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-xl tracking-tight text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* <div>
          <div className="mb-8">
            <h3 className="font-serif text-2xl tracking-tight text-foreground">@bynad.clothes</h3>
            <p className="text-sm text-muted-foreground mt-1">Follow us for daily inspiration</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramFeed.map((item, index) => (
              <div key={index} className="group cursor-pointer relative overflow-hidden aspect-square bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-2xl font-semibold">{item.likes}</p>
                    <p className="text-sm">Likes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
