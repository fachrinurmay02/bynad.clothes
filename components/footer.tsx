import { Instagram, Mail, ShoppingBag, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl tracking-tight text-foreground mb-2">bynad.clothes</div>
            {/* <p className="text-sm tracking-wider text-muted-foreground">bynad.clothes</p> */}
            <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
              Elegant, aesthetic, and casual fashion for everyday comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-wider uppercase text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#collection" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Collection
              </a>
              <a href="#story" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Our Story
              </a>
              <a href="#vision" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Our Vision
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-wider uppercase text-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/bynad.clothes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @bynad.clothes
              </a>
              <a
                href="mailto:hello@bynad.clothes"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                bynad.clothess@gmail.com
              </a>
              <a
                href="https://wa.me/6281999074309"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                Whatsapp
              </a>
              <a
                href="https://www.tiktok.com/@bynad.clothes?_r=1&_t=ZS-91MUPncqrge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} bynad.clothes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
