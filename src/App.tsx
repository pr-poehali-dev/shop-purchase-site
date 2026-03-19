import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Product } from "@/data/products";

import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import CartPage from "@/pages/CartPage";
import AboutPage from "@/pages/AboutPage";
import DeliveryPage from "@/pages/DeliveryPage";
import ContactsPage from "@/pages/ContactsPage";

const queryClient = new QueryClient();

interface CartItem extends Product {
  qty: number;
}

const App = () => {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={navigate} />;
      case "catalog": return <CatalogPage onAddToCart={addToCart} />;
      case "cart": return <CartPage cart={cart} onUpdateQty={updateQty} onRemove={removeFromCart} onNavigate={navigate} />;
      case "about": return <AboutPage />;
      case "delivery": return <DeliveryPage />;
      case "contacts": return <ContactsPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-background text-foreground">
          <Navbar currentPage={page} onNavigate={navigate} cartCount={cartCount} />
          <main>{renderPage()}</main>
          <footer className="border-t border-border bg-card py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                <div>
                  <p className="font-cormorant text-3xl text-gold mb-2">MAISON</p>
                  <p className="font-montserrat text-xs text-muted-foreground">Предметы роскоши высочайшего качества</p>
                </div>
                <div className="flex gap-12">
                  {[
                    { label: "Магазин", links: [{ name: "Каталог", id: "catalog" }, { name: "О бренде", id: "about" }] },
                    { label: "Помощь", links: [{ name: "Доставка", id: "delivery" }, { name: "Контакты", id: "contacts" }] },
                  ].map((col) => (
                    <div key={col.label}>
                      <p className="font-montserrat text-xs letter-wide uppercase text-gold mb-4">{col.label}</p>
                      {col.links.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => navigate(link.id)}
                          className="block font-montserrat text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="gold-line mb-6" />
              <p className="font-montserrat text-xs text-muted-foreground text-center">
                © 2024 MAISON de Luxe. Все права защищены.
              </p>
            </div>
          </footer>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
