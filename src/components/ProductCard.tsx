import { Product } from "@/data/products";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="card-hover group bg-card border border-border overflow-hidden flex flex-col">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        {product.badge && (
          <span className="absolute top-4 left-4 font-montserrat text-xs letter-wide uppercase px-3 py-1 bg-gold text-background">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 font-montserrat text-xs letter-wide uppercase px-6 py-2 bg-gold text-background hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
        >
          В корзину
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="font-montserrat text-xs text-gold letter-wide uppercase mb-2">{product.category}</p>
        <h3 className="font-cormorant text-xl font-light mb-2 text-foreground">{product.name}</h3>
        <p className="font-montserrat text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-cormorant text-xl text-gold">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="md:hidden font-montserrat text-xs px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-background transition-colors"
          >
            + Корзина
          </button>
        </div>
      </div>
    </div>
  );
}
