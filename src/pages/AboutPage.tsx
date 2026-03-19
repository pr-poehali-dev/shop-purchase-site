export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-card border-b border-border py-16 px-6 text-center">
        <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">История</p>
        <h1 className="font-cormorant text-5xl font-light text-foreground mb-4">О бренде</h1>
        <div className="gold-line w-16 mx-auto" />
      </div>

      {/* Основной блок */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-6">Наша история</p>
            <h2 className="font-cormorant text-4xl font-light text-foreground mb-6 leading-tight">
              Два десятилетия<br />
              <span className="italic text-gradient-gold">безупречного качества</span>
            </h2>
            <div className="gold-line w-12 mb-8" />
            <p className="font-montserrat text-xs text-muted-foreground leading-loose mb-5">
              MAISON основан в 2004 году группой мастеров, объединённых одной идеей — создавать предметы роскоши, которые переживут время. Каждый товар в нашей коллекции проходит ручную работу и многоуровневый контроль качества.
            </p>
            <p className="font-montserrat text-xs text-muted-foreground leading-loose">
              Мы работаем только с лучшими материалами: кожа из итальянских танжерий, золото 18 карат от швейцарских ювелиров, натуральный шёлк из Лиона. Каждая деталь имеет значение.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/37331b1f-a794-4b1c-80b2-cc0e8648fbbf/files/76a36dfc-f63d-42c4-a96c-84e60b690c1f.jpg"
              alt="О бренде"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold/30" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/30" />
          </div>
        </div>

        {/* Цифры */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-border mb-24">
          {[
            { value: "20+", label: "лет на рынке" },
            { value: "12K+", label: "довольных клиентов" },
            { value: "300+", label: "уникальных товаров" },
            { value: "45", label: "стран доставки" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-cormorant text-5xl text-gradient-gold mb-2">{stat.value}</p>
              <p className="font-montserrat text-xs letter-wide uppercase text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Ценности */}
        <div className="text-center mb-12">
          <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">Принципы</p>
          <h2 className="font-cormorant text-4xl font-light text-foreground">Наши ценности</h2>
          <div className="gold-line w-16 mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Аутентичность", text: "Только оригинальные товары с сертификатами подлинности. Никаких компромиссов." },
            { title: "Мастерство", text: "Каждый продукт создан вручную мастерами с многолетним опытом в своём деле." },
            { title: "Вечность", text: "Мы создаём не модные вещи, а вечную классику, которая передаётся из поколения в поколение." },
          ].map((val, i) => (
            <div key={i} className="border border-border p-8 hover:border-gold/30 transition-colors">
              <div className="gold-line w-8 mb-6" />
              <h3 className="font-cormorant text-2xl text-foreground mb-4">{val.title}</h3>
              <p className="font-montserrat text-xs text-muted-foreground leading-loose">{val.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
