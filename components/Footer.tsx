import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg border-t-[3px] border-accent pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link
              href="#home"
              className="font-display text-4xl tracking-wide flex items-center gap-1"
            >
              <span className="text-accent">DISPOSABLE</span>
              <span className="text-text">FILMS</span>
            </Link>
            <p className="font-sans text-text/80 max-w-md">
              A content-first creative house based in Mumbai. We build brands,
              shoot content, and rent out our space.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 bg-bg2 neo-border flex items-center justify-center text-text hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-bg2 neo-border flex items-center justify-center text-text hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                LI
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-bg2 neo-border flex items-center justify-center text-text hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                YT
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-condensed font-bold uppercase tracking-widest text-text mb-2">
              Navigation
            </h4>
            {[
              { name: "Home", href: "/#home" },
              { name: "About", href: "/#about" },
              { name: "Services", href: "/#services" },
              { name: "Studios", href: "/#studios" },
              { name: "Work", href: "/#work" },
              { name: "Contact", href: "/#contact" }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-text/80 hover:text-accent transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-condensed font-bold uppercase tracking-widest text-text mb-2">
              Contact
            </h4>
            <a
              href="mailto:hello@disposablefilms.com"
              className="font-sans text-text/80 hover:text-accent transition-colors w-fit"
            >
              hello@disposablefilms.com
            </a>
            <p className="font-sans text-text/80">
              Andheri West, Mumbai
              <br />
              Maharashtra, India
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-[3px] border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-text/60 text-sm">
            © {new Date().getFullYear()} Disposable Films. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-sans text-text/60 text-sm hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-text/60 text-sm hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
