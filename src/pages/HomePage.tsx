import Icon from "@/components/ui/icon";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, hsl(20,10%,10%) 0%, hsl(20,10%,4%) 100%)"
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, hsl(43,74%,62%,0.05) 80px, hsl(43,74%,62%,0.05) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, hsl(43,74%,62%,0.05) 80px, hsl(43,74%,62%,0.05) 81px)"
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-slide-up">
          <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-8 tracking-[0.4em]">
            Эксклюзивная коллекция
          </p>
          <h1 className="font-cormorant text-7xl md:text-9xl font-light leading-none mb-6"
            style={{ lineHeight: "1.05" }}>
            <span className="text-gradient-gold">Maison</span>
            <br />
            <span className="text-foreground italic">de Luxe</span>
          </h1>
          <div className="gold-line w-24 mx-auto my-8" />
          <p className="font-montserrat text-sm font-light text-muted-foreground max-w-md mx-auto leading-loose mb-12">
            Предметы роскоши, созданные мастерами для тех, кто ценит истинное совершенство
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("catalog")}
              className="font-montserrat text-xs letter-wide uppercase px-10 py-4 gold-gradient text-background hover:opacity-90 transition-opacity"
            >
              Перейти в каталог
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="font-montserrat text-xs letter-wide uppercase px-10 py-4 border border-gold/40 text-gold hover:border-gold transition-colors"
            >
              О бренде
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-gold/50" />
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "Award", title: "Подлинность", desc: "Каждый товар сопровождается сертификатом подлинности и паспортом качества" },
              { icon: "Truck", title: "Доставка по всему миру", desc: "Бесплатная доставка от 30 000 ₽. Дискретная упаковка в фирменной коробке" },
              { icon: "RotateCcw", title: "30 дней на возврат", desc: "Если товар не оправдал ожиданий — полный возврат без лишних вопросов" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/30 mb-6 group-hover:border-gold transition-colors">
                  <Icon name={item.icon as any} size={20} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="font-montserrat text-xs text-muted-foreground leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">Коллекции</p>
          <h2 className="font-cormorant text-5xl font-light text-foreground">Наши категории</h2>
          <div className="gold-line w-16 mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Парфюм", emoji: "🌹" },
            { name: "Аксессуары", emoji: "✨" },
            { name: "Украшения", emoji: "💎" },
            { name: "Уход за кожей", emoji: "🫧" },
          ].map((cat, i) => (
            <button
              key={i}
              onClick={() => onNavigate("catalog")}
              className="group relative border border-border hover:border-gold/50 p-8 text-center transition-all duration-300 hover:bg-card"
            >
              <span className="text-4xl mb-4 block">{cat.emoji}</span>
              <p className="font-montserrat text-xs letter-wide uppercase text-muted-foreground group-hover:text-gold transition-colors">
                {cat.name}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-6">Эксклюзивно</p>
          <h2 className="font-cormorant text-5xl font-light text-foreground mb-6">
            Получите доступ к<br />
            <span className="italic text-gradient-gold">закрытым коллекциям</span>
          </h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="font-montserrat text-xs text-muted-foreground leading-loose mb-10">
            Подпишитесь на нашу рассылку и первыми узнавайте о новых поступлениях, закрытых продажах и специальных предложениях
          </p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-background border border-border border-r-0 px-5 py-3 font-montserrat text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50"
            />
            <button className="font-montserrat text-xs letter-wide uppercase px-6 py-3 gold-gradient text-background hover:opacity-90 transition-opacity whitespace-nowrap">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
