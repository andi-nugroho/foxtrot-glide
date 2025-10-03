import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 ${
        scrolled
          ? "left-1/2 -translate-x-1/2 top-0 sm:top-4 w-[calc(100%-1rem)] sm:w-[min(92%,1100px)] rounded-full glass-effect shadow-xl"
          : "inset-x-2 sm:left-1/2 sm:-translate-x-1/2 top-0 w-[calc(100%-1rem)] sm:w-[min(92%,1100px)] bg-transparent"
      }`}
    >
      <div className="mx-auto px-3 sm:px-4 h-16 sm:h-14">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 h-full">
          {/* Logo */}
          <Link to="/" className="justify-self-start transition-transform hover:scale-105">
            <span className="text-2xl font-bold text-foreground">Foxtrot</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-self-center items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions - Right aligned */}
          <div className="justify-self-end flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="default" size="sm" className="hidden sm:inline-flex rounded-full gradient-primary">
              <Link to="/dashboard">Get Started</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Toggle menu" className="rounded-full">
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="glass-effect">
                <nav className="mx-auto w-full max-w-sm sm:max-w-md pt-8">
                  <div className="grid gap-2 text-center">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, link.href);
                          setMobileOpen(false);
                        }}
                        className="text-lg font-medium py-3 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <Link to="/signin" onClick={() => setMobileOpen(false)}>Sign In</Link>
                    </Button>
                    <Button asChild size="sm" className="rounded-full gradient-primary">
                      <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Get Started</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
