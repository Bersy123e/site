import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    company: "Подорожник",
    text: "Внедрение AI-решений позволило нам сократить время обработки заказов на 70% и увеличить количество продаж акционных товаров на 65%.",
    stats: "Рост выручки на 18% за первый месяц"
  },
  {
    company: "NamasteCamp",
    text: "Автоматизация ответов в групповом чате наших курсов по йоге разгрузила наш персонал и нам теперь не нужен дополнительный человек в команду.",
    stats: "Экономия составит до 150 тысяч за каждый курс"
  },
  {
    company: "ClearDesign",
    text: "Автоматизация записи клиентов на первичную консультацию по дизайну, позволила более точно выявить потребности клиентов и освободиться от работы с подрядчиками.",
    stats: "Уменьшение фонда оплаты труда на 23%"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
          Отзывы клиентов
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-4">
                  {testimonial.company}
                </h3>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div className="text-sm font-semibold text-primary">
                  {testimonial.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}