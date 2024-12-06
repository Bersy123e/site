import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6">
            Узнайте за 5 минут, почему автоматизация бизнеса с помощью нейросети увеличит вашу прибыль
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            мы разрабатываем индивидуальные AI-решения для автоматизации бизнес-процессов с гарантированным ROI от 300% и готовы вам это продемонстрировать
          </p>
          <Button size="lg" className="w-full sm:w-auto text-sm sm:text-lg px-4 sm:px-8 py-6" asChild>
            <a href="#contact">Получить консультацию</a>
          </Button>
        </div>
      </div>
    </section>
  );
}