import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

const navLinks = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "about", label: "О бренде" },
  { id: "delivery", label: "Доставка" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar({ currentPage, onNavigate, cartCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="font-cormorant text-2xl font-light tracking-widest text-gold hover:opacity-80 transition-opacity"
        >
          MAISON
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`font-montserrat text-xs letter-wide uppercase transition-colors ${
                currentPage === link.id
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate("cart")}
            className="relative text-foreground hover:text-gold transition-colors"
          >
            <Icon name="ShoppingBag" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-background text-xs w-4 h-4 rounded-full flex items-center justify-center font-montserrat font-500">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-foreground hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`block w-full text-left px-6 py-3 font-montserrat text-xs letter-wide uppercase transition-colors ${
                currentPage === link.id ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
