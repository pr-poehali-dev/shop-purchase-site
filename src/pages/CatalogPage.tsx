import { useState } from "react";
import { products, categories, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";

interface CatalogPageProps {
  onAddToCart: (product: Product) => void;
}

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === "Все" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 px-6 text-center">
        <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">Коллекция</p>
        <h1 className="font-cormorant text-5xl font-light text-foreground mb-4">Каталог товаров</h1>
        <div className="gold-line w-16 mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Поиск */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60">
            <Icon name="Search" size={16} />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по названию или описанию..."
            className="w-full bg-card border border-border focus:border-gold/50 pl-11 pr-4 py-3 font-montserrat text-xs text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors"
            >
              <Icon name="X" size={14} />
            </button>
          )}
        </div>

        {/* Категории */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-montserrat text-xs letter-wide uppercase px-5 py-2 border transition-all ${
                activeCategory === cat
                  ? "border-gold bg-gold text-background"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Результаты */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <Icon name="Search" size={32} className="text-gold/30 mx-auto mb-4" />
            <p className="font-cormorant text-2xl text-muted-foreground">Ничего не найдено</p>
            <p className="font-montserrat text-xs text-muted-foreground mt-2">Попробуйте изменить запрос</p>
          </div>
        ) : (
          <>
            <p className="font-montserrat text-xs text-muted-foreground mb-8">
              Найдено: {filtered.length} {filtered.length === 1 ? "товар" : "товаров"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
