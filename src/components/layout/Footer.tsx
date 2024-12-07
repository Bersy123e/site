import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <a href="tel:+79994568491" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                +7 999 456-84-91
              </a>
              <a href="mailto:nobrainer@yandex.ru" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" />
                nobrainer@yandex.ru
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Социальные сети</h3>
            <div>
              <a href="https://t.me/millervai" className="text-muted-foreground hover:text-primary">
                Telegram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Документы</h3>
            <div className="space-y-2">
              <a href="/privacy-policy" className="block text-muted-foreground hover:text-primary">
                Политика конфиденциальности
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary">
                Пользовательское соглашение
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">О компании</h3>
            <p className="text-muted-foreground">
              NobrainerAI - интегратор решений на базе искусственного интеллекта для бизнеса
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NobrainerAI. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
