import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-card border-b border-border py-16 px-6 text-center">
        <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">Связь</p>
        <h1 className="font-cormorant text-5xl font-light text-foreground mb-4">Контакты</h1>
        <div className="gold-line w-16 mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Форма */}
          <div>
            <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-6">Напишите нам</p>
            <h2 className="font-cormorant text-3xl font-light text-foreground mb-8">
              Мы ответим в течение<br />одного рабочего дня
            </h2>

            {sent ? (
              <div className="bg-card border border-gold/30 p-8 text-center">
                <Icon name="CheckCircle" size={32} className="text-gold mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl text-foreground mb-2">Сообщение отправлено</h3>
                <p className="font-montserrat text-xs text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 font-montserrat text-xs letter-wide uppercase text-gold hover:text-foreground transition-colors"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-montserrat text-xs letter-wide uppercase text-muted-foreground block mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full bg-card border border-border focus:border-gold/50 px-4 py-3 font-montserrat text-xs text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-montserrat text-xs letter-wide uppercase text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-card border border-border focus:border-gold/50 px-4 py-3 font-montserrat text-xs text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-montserrat text-xs letter-wide uppercase text-muted-foreground block mb-2">Сообщение</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ваш вопрос или пожелание..."
                    className="w-full bg-card border border-border focus:border-gold/50 px-4 py-3 font-montserrat text-xs text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-montserrat text-xs letter-wide uppercase py-4 gold-gradient text-background hover:opacity-90 transition-opacity"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>

          {/* Контактная информация */}
          <div className="space-y-8">
            <div>
              <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-6">Реквизиты</p>
              <div className="space-y-6">
                {[
                  { icon: "MapPin", title: "Шоурум", text: "Москва, ул. Пречистенка, 20\nПн–Вс, 10:00–21:00" },
                  { icon: "Phone", title: "Телефон", text: "+7 (495) 123-45-67\nБесплатно по России" },
                  { icon: "Mail", title: "Email", text: "info@maison.ru\nsupport@maison.ru" },
                  { icon: "MessageCircle", title: "Telegram", text: "@maison_support\nОнлайн-чат 24/7" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center">
                      <Icon name={item.icon as "MapPin"} size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-montserrat text-xs letter-wide uppercase text-muted-foreground mb-1">{item.title}</p>
                      <p className="font-montserrat text-xs text-foreground leading-loose whitespace-pre-line">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gold-line" />

            <div>
              <p className="font-montserrat text-xs letter-widest uppercase text-gold mb-4">Социальные сети</p>
              <div className="flex gap-3">
                {["Instagram", "Youtube", "Send"].map((net) => (
                  <button
                    key={net}
                    className="w-10 h-10 border border-border hover:border-gold/50 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                  >
                    <Icon name={net as "Send"} size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
