import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M12 2v20M2 12h20" />
          </svg>
          <span className="font-serif text-xl font-semibold">NobrainerAI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-sm font-medium hover:text-primary">
            Преимущества
          </a>
          <a href="#process" className="text-sm font-medium hover:text-primary">
            Процесс
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary">
            Как это работает
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">
            Отзывы
          </a>
          <Button variant="default" asChild>
            <a href="#contact">Получить консультацию</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-4 p-6">
                <a href="#benefits" className="text-sm font-medium hover:text-primary">
                  Преимущества
                </a>
                <a href="#process" className="text-sm font-medium hover:text-primary">
                  Процесс
                </a>
                <a href="#faq" className="text-sm font-medium hover:text-primary">
                  Как это работает
                </a>
                <a href="#testimonials" className="text-sm font-medium hover:text-primary">
                  Отзывы
                </a>
                <Button variant="default" className="w-full text-sm py-6" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}