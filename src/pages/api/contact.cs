import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, phone } = req.body;

    // Проверка на наличие всех полей
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Все поля обязательны для заполнения." });
    }

    try {
      // Настройка транспорта для отправки email через Yandex
      const transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru", // SMTP сервер Yandex
        port: 465, // Порт для SSL
        secure: true, // Использовать SSL
        auth: {
          user: "nobrainer@yandex.ru", // Ваш email Yandex
          pass: "zshxmohqzbwcmvxh", // Пароль приложения Yandex
        },
      });

      // Настройка содержимого письма
      const mailOptions = {
        from: `"Заявка с сайта" <nobrainer@yandex.ru>`, // Отправитель
        to: "nobrainer@yandex.ru", // Получатель
        subject: "Новая заявка с сайта",
        text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}`,
        html: `
          <h1>Новая заявка с сайта</h1>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
        `,
      };

      // Отправка письма
      await transporter.sendMail(mailOptions);

      console.log("Email успешно отправлен:", { name, email, phone });

      return res.status(200).json({ message: "Форма успешно отправлена." });
    } catch (error) {
      console.error("Ошибка при отправке email:", error);
      return res.status(500).json({ message: "Не удалось отправить письмо. Попробуйте позже." });
    }
  }

  // Если метод запроса не POST
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Метод ${req.method} не разрешен`);
}
