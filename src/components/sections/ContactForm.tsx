import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false, // Состояние для чекбокса
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверка согласия с обработкой персональных данных
    if (!formData.consent) {
      setErrorMessage("Вы должны согласиться на обработку персональных данных.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", consent: false });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Ошибка отправки. Попробуйте позже.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Ошибка соединения. Попробуйте позже.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-2xl px-4">
        <Card className="backdrop-blur bg-card/50">
          <CardContent className="p-6 sm:p-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8">
              Получите персональную консультацию
            </h2>
            {status === "success" ? (
              <p className="text-center text-green-600 font-bold text-lg">
                Спасибо! Ваша заявка успешно отправлена.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                {/* Чекбокс с уведомлением о согласии */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mr-2"
                    required
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    Я согласен на обработку персональных данных и ознакомлен с{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </Label>
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-center">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  className="w-full text-sm sm:text-base py-6"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Отправка..." : "Записаться на консультацию"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
