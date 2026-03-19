import Icon from "@/components/ui/icon";

export default function DeliveryPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-card border-b border-border py-16 px-6 text-center">
        <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">Сервис</p>
        <h1 className="font-cormorant text-5xl font-light text-foreground mb-4">Доставка и оплата</h1>
        <div className="gold-line w-16 mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
        {/* Способы доставки */}
        <section>
          <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-8">Доставка</p>
          <div className="space-y-4">
            {[
              {
                icon: "Truck",
                title: "Курьерская доставка",
                desc: "По Москве в течение 1–2 рабочих дней. По России — 3–7 дней. Доставка в дискретной фирменной упаковке.",
                price: "Бесплатно от 30 000 ₽, иначе 500 ₽"
              },
              {
                icon: "Globe",
                title: "Международная доставка",
                desc: "Доставляем в 45 стран мира через EMS и курьерские службы. Срок 7–14 рабочих дней.",
                price: "От 2 500 ₽"
              },
              {
                icon: "MapPin",
                title: "Самовывоз",
                desc: "Заберите заказ из нашего шоурума в Москве, ул. Пречистенка, 20. Пн–Вс 10:00–21:00.",
                price: "Бесплатно"
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-card border border-border p-6 hover:border-gold/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center">
                  <Icon name={item.icon as "Truck"} size={20} className="text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-cormorant text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="font-montserrat text-xs text-muted-foreground leading-loose mb-2">{item.desc}</p>
                  <p className="font-montserrat text-xs text-gold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="gold-line" />

        {/* Оплата */}
        <section>
          <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-8">Оплата</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "CreditCard", title: "Банковская карта", desc: "Visa, Mastercard, МИР. Оплата на сайте через защищённый шлюз." },
              { icon: "Building2", title: "Банковский перевод", desc: "Для юридических лиц. Выставляем счёт в течение 1 рабочего часа." },
              { icon: "Smartphone", title: "SberPay / T-Pay", desc: "Быстрая оплата через приложение банка без введения данных карты." },
              { icon: "Banknote", title: "Наличные", desc: "При самовывозе или курьерской доставке (при заказе до 100 000 ₽)." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border p-6 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name={item.icon as "CreditCard"} size={16} className="text-gold" />
                  <h3 className="font-cormorant text-lg text-foreground">{item.title}</h3>
                </div>
                <p className="font-montserrat text-xs text-muted-foreground leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="gold-line" />

        {/* Возврат */}
        <section>
          <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-8">Возврат</p>
          <div className="bg-card border border-border p-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="RotateCcw" size={24} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-cormorant text-2xl text-foreground mb-3">30 дней на возврат</h3>
                <p className="font-montserrat text-xs text-muted-foreground leading-loose">
                  Если товар не оправдал ожиданий — мы примем его обратно в течение 30 дней с момента получения. Полный возврат стоимости без лишних вопросов, при условии сохранности товарного вида и упаковки.
                </p>
              </div>
            </div>
            <div className="gold-line" />
            <p className="font-montserrat text-xs text-muted-foreground mt-6">
              Для оформления возврата свяжитесь с нашей службой поддержки: <span className="text-gold">support@maison.ru</span> или по телефону <span className="text-gold">+7 (495) 123-45-67</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
