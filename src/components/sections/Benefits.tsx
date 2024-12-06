import { Brain, TrendingUp, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Brain,
    title: "Интеллектуальная автоматизация процессов",
    description: "Наши ИИ-боты самостоятельно обрабатывают заявки, квалифицируют лиды, проводят консультации и записывают клиентов, сокращая нагрузку на сотрудников и увеличивая точность на 95%."
  },
  {
    icon: TrendingUp,
    title: "Реальный рост конверсии и продаж",
    description: "Скорость обработки заявок увеличивается до 90%, что ведет к росту конверсии на 10-30%. За счет мгновенных откликов на запросы, клиенты не уходят к конкурентам, а ваш бизнес получает больше лидов."
  },
  {
    icon: Users,
    title: "Оптимизация затрат на персонал",
    description: "Снижение затрат на менеджеров и сотрудников до 50%. ИИ берет на себя рутинные задачи, позволяя вам перераспределить ресурсы на более важные и высокооплачиваемые функции."
  },
  {
    icon: Clock,
    title: "Мгновенная интеграция и результаты",
    description: "Запуск системы происходит всего за 3-7 рабочих дней, а первые результаты, такие как улучшение качества обработки заявок и увеличение скорости, можно увидеть уже через 2 недели после внедрения."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
          Преимущества внедрения ИИ в ваш бизнес
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6 pb-8 text-center">
                <div className="mb-4 flex justify-center">
                  <benefit.icon className="h-14 w-14 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-justify text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
