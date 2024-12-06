import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Анализ бизнеса",
    description: "Детальное изучение процессов, брифинг и выявление точек роста",
    duration: "2-3 дня"
  },
  {
    number: "02",
    title: "Разработка стратегии",
    description: "Создание плана внедрения AI с учетом особенностей компании, актуализация рабочих процессов",
    duration: "5-7 дней"
  },
  {
    number: "03",
    title: "Интеграция решений",
    description: "Поэтапное внедрение AI-решений в текущие бизнес-процессы без глобальных перемен в инструментах",
    duration: "10-14 дней"
  },
  {
    number: "04",
    title: "Оптимизация",
    description: "Настройка и улучшение работы системы, контроль качества рабочих процессов, замер KPI",
    duration: "10-15 дней"
  }
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
          Процесс внедрения
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <div className="absolute top-0 right-0 p-4 text-6xl font-serif font-bold text-primary/10">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="text-sm text-primary">
                  Длительность: {step.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}