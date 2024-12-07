import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: 15, label: "Средний рост конверсии", suffix: "%" },
  { value: 30, label: "Среднее увеличение прибыли", suffix: "%" },
  { value: 25, label: "Сокращение статьи расходов", suffix: "%" },
  { value: 14, label: "Дней для запуска", suffix: "" }
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeouts = stats.map((stat, index) => {
        const targetValue = stat.value;
        let currentValue = 0;

        const interval = setInterval(() => {
          if (currentValue < targetValue) {
            currentValue += Math.ceil(targetValue / 100);
            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = currentValue;
              return newValues;
            });
          } else {
            clearInterval(interval);
          }
        }, 10);

        return interval;
      });

      return () => {
        timeouts.forEach(clearInterval);
      };
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-emerald-800 to-green-700 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            Ожидаемые результаты с автоматизацией на нейросетях
          </h2>
          <p className="text-xl text-white/80">
            Статистика, достигается с помощью наших решений, зависит от сферы применения и требует индивидуальной консультации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-transparent border-white/20 rounded-lg shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {isVisible ? (
                    <span>
                      {animatedValues[index]}
                      {stat.suffix}
                    </span>
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
