import { Product } from "@/data/products";
import Icon from "@/components/ui/icon";

interface CartItem extends Product {
  qty: number;
}

interface CartPageProps {
  cart: CartItem[];
  onUpdateQty: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  onNavigate: (page: string) => void;
}

export default function CartPage({ cart, onUpdateQty, onRemove, onNavigate }: CartPageProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-card border-b border-border py-16 px-6 text-center">
        <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">Ваш выбор</p>
        <h1 className="font-cormorant text-5xl font-light text-foreground mb-4">Корзина</h1>
        <div className="gold-line w-16 mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {cart.length === 0 ? (
          <div className="text-center py-24">
            <Icon name="ShoppingBag" size={48} className="text-gold/20 mx-auto mb-6" />
            <h2 className="font-cormorant text-3xl font-light text-foreground mb-4">Корзина пуста</h2>
            <p className="font-montserrat text-xs text-muted-foreground mb-8">
              Откройте каталог и добавьте понравившиеся товары
            </p>
            <button
              onClick={() => onNavigate("catalog")}
              className="font-montserrat text-xs letter-wide uppercase px-10 py-4 gold-gradient text-background hover:opacity-90 transition-opacity"
            >
              Перейти в каталог
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-card border border-border p-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-montserrat text-xs text-gold letter-wide uppercase mb-1">{item.category}</p>
                    <h3 className="font-cormorant text-lg text-foreground mb-1">{item.name}</h3>
                    <p className="font-cormorant text-lg text-gold">{item.price.toLocaleString("ru-RU")} ₽</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Icon name="X" size={16} />
                    </button>
                    <div className="flex items-center gap-2 border border-border">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="font-montserrat text-xs w-6 text-center text-foreground">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Итог */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-8 sticky top-24">
                <h2 className="font-cormorant text-2xl font-light text-foreground mb-6">Итог заказа</h2>
                <div className="gold-line mb-6" />
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="font-montserrat text-xs text-muted-foreground truncate mr-2">{item.name} × {item.qty}</span>
                      <span className="font-montserrat text-xs text-foreground whitespace-nowrap">
                        {(item.price * item.qty).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  ))}
                </div>
                <div className="gold-line mb-6" />
                <div className="flex justify-between mb-8">
                  <span className="font-cormorant text-xl text-foreground">Итого</span>
                  <span className="font-cormorant text-xl text-gold">{total.toLocaleString("ru-RU")} ₽</span>
                </div>
                <button className="w-full font-montserrat text-xs letter-wide uppercase py-4 gold-gradient text-background hover:opacity-90 transition-opacity mb-3">
                  Оформить заказ
                </button>
                <button
                  onClick={() => onNavigate("catalog")}
                  className="w-full font-montserrat text-xs letter-wide uppercase py-3 border border-border text-muted-foreground hover:border-gold/50 hover:text-foreground transition-colors"
                >
                  Продолжить покупки
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
