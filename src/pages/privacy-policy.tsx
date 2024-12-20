import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>

      <p>
        Мы ценим вашу конфиденциальность и соблюдаем строгие меры для защиты
        персональных данных. Настоящая политика конфиденциальности описывает,
        как мы собираем, используем и защищаем ваши данные.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Наименование оператора</h2>
      <p>
        Оператором персональных данных является физическое лицо — Гонцов
        Вячеслав Васильевич.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Адрес оператора</h2>
      <p>
        Адрес оператора: Россия, город Малая Вишера, улица Красная, дом 2.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Список собираемых данных</h2>
      <p>Мы собираем только необходимые для нашей работы персональные данные:</p>
      <ul className="list-disc ml-6">
        <li>Фамилия, имя, отчество (ФИО)</li>
        <li>Электронная почта (email)</li>
        <li>Номер телефона</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Цель сбора и обработки данных</h2>
      <p>
        Собранные данные будут использоваться исключительно для следующих
        целей:
      </p>
      <ul className="list-disc ml-6">
        <li>Для связи с вами в рамках предоставления консультационных услуг;</li>
        <li>Для организации и проведения консультаций по вопросам, связанным с услугами сайта;</li>
        <li>Для обработки заявок и общения по вопросам, связанным с использованием нашего сайта и услуг.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Сроки обработки данных</h2>
      <p>
        Персональные данные будут обрабатываться исключительно в рамках
        вышеуказанных целей. После выполнения поставленных задач все
        персональные данные будут удалены. Обработка данных возможна в течение
        5 лет с момента их сбора. По истечении этого срока все данные подлежат
        удалению.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Привлечение третьих лиц к обработке данных
      </h2>
      <p>
        В процессе обработки данных могут быть привлечены третьи лица, в
        частности для хостинга и технической поддержки, в том числе через
        партнёрские программы. Например, для размещения сайта и хранения данных
        будет использован хостинг-провайдер REG.RU.
      </p>
      <p>
        Все третьи лица обязаны соблюдать строгие условия конфиденциальности и не
        передавать данные третьим сторонам.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Контактные данные оператора</h2>
      <p>
        Для связи с нами по вопросам, связанным с обработкой ваших персональных
        данных, вы можете использовать следующие контактные данные:
      </p>
      <ul className="list-disc ml-6">
        <li>Телефон: +7 999 456 84 91</li>
        <li>Email: <a href="mailto:nobrainer@yandex.ru">nobrainer@yandex.ru</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Меры обеспечения безопасности персональных данных</h2>
      <p>
        Мы принимаем все необходимые меры для защиты ваших персональных данных.
        Все данные хранятся на защищенных серверах, находящихся на территории
        России, что соответствует требованиям законодательства Российской
        Федерации о защите персональных данных. Для защиты информации
        используются современные методы шифрования и защиты от несанкционированного
        доступа.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
