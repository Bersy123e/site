import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Как ИИ помогает обрабатывать клиентские заявки?",
    answer: `
      Искусственный интеллект автоматизирует весь процесс от первичного контакта до завершения сделки: мгновенные ответы на запросы, уточнение деталей и запись клиента на услугу. 
      Например, наш клиент из автосервиса увеличил поток заявок на 40%, внедрив ИИ-бота для записи через WhatsApp и Telegram. 
      На консультации мы подробнее обсудим, как мы можем адаптировать это решение для вашего бизнеса и показать, как оно будет работать на вашем примере.`,
  },
  {
    question: "Чем ИИ-бот лучше стандартного чат-бота?",
    answer: `
      Стандартные боты действуют по заранее заданным сценариям, в то время как ИИ обучается на данных вашего бизнеса и способен адаптироваться под реальные запросы клиентов. 
      Например, фитнес-центр с помощью ИИ-бота начал предлагать дополнительные услуги и увеличил средний чек на 20%. 
      Мы подготовим демонстрационное решение, чтобы вы могли увидеть, как ИИ адаптируется под ваш бизнес и повышает результаты.`,
  },
  {
    question: "Сколько стоит внедрение ИИ?",
    answer: `
      Стоимость внедрения рассчитывается индивидуально, но зачастую начинается от 120 000 рублей за внедрение во все каналы связи, в том числе виджет на сайт, с ежемесячной подпиской от 5 до 15 тыс. рублей в зависимости от объема клиентов. 
      Например, обслуживание 250 клиентов обойдется всего в 10 тыс. рублей в месяц. 
      Мы подготовим точный расчет и обсудим, какие опции подходят для вашего бизнеса на консультации.`,
  },
  {
    question: "Как понять, что автоматизация через ИИ мне подходит?",
    answer: `
      ИИ-боты разрабатываются под бизнес индивидуально, что означает их применимость в любом бизнесе. Однако следует учитывать, что при маленьком количестве заявок и небольших оборотах, рекомендуется использовать более простые решения.
      Мы продемонстрируем, как такой бот может работать в вашей компании и сможем понять нужно ли вам такое решение на первичной консультации.`,
  },
  {
    question: "Подходит ли ИИ для малого бизнеса?",
    answer: `
      Да! Например, владелец салона красоты сэкономил до 40% времени администратора, автоматизировав запись клиентов через ИИ-бота. 
      Мы покажем, как ИИ-бот может значительно упростить процессы в вашем бизнесе, повысив качество обслуживания и экономя ресурсы.`,
  },
  {
    question: "Как протестировать ИИ-бота перед внедрением?",
    answer: `
      Мы предлагаем создать демонстрационную версию ИИ-бота, которая будет работать с вашими данными, чтобы вы могли на практике оценить, как он обрабатывает заявки и взаимодействует с клиентами.
      На консультации мы объясним, как именно это решение будет работать в вашем бизнесе, и проведем тестирование бесплатно.`,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
          Часто задаваемые вопросы о внедрении ИИ
        </h2>
        <p className="text-lg text-center mb-16">
          Мы собрали ключевые вопросы о наших решениях. Если у вас остались
          сомнения, на консультации мы подробно обсудим все аспекты и подберем оптимальное решение для вашего бизнеса.
        </p>
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur">
          <Accordion type="single" collapsible className="p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
        <div className="text-center mt-12">
         <Button
  onClick={() => {
    // Находим элемент с id="contact" (форму)
    const contactForm = document.querySelector("#contact");
    if (contactForm) {
      // Прокручиваем страницу к форме плавно
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl"
>
  Записаться на консультацию
</Button>
        </div>
      </div>
    </section>
  );
}