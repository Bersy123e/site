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

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-transparent border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {isVisible ? (
                    <span className="transition-all duration-1000">
                      {stat.value}
                      {stat.suffix}
                    </span>
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}