import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center px-4">
          {/* Заголовок с улучшенным шрифтом и черным цветом */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide leading-snug text-black drop-shadow-md mb-6">
            Автоматизация: как умные боты могут увеличить прибыль вашего бизнеса уже сегодня
          </h1>

          {/* Описание с черным текстом */}
          <p className="text-lg sm:text-xl md:text-2xl text-black/80 mb-8 max-w-2xl mx-auto text-justify">
            мы разрабатываем индивидуальные AI-решения для автоматизации бизнес-процессов с гарантированным ROI от 300% и готовы вам это продемонстрировать
          </p>

          {/* Кнопка */}
          <Button size="lg" className="w-full sm:w-auto text-sm sm:text-lg px-4 sm:px-8 py-6" asChild>
            <a href="#contact">Получить консультацию</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
