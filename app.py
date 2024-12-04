from flask import Flask, request, render_template
import csv

app = Flask(__name__)

# Путь к CSV-файлу
CSV_FILE = "contacts.csv"

# Главная страница с формой
@app.route('/')
def index():
    return render_template('index.html')

# Обработка отправки формы
@app.route('/submit', methods=['POST'])
def submit():
    # Получение данных из формы
    name = request.form.get('name')
    phone = request.form.get('phone')
    email = request.form.get('email')
    consent = request.form.get('consent')

    # Проверяем, что чекбокс согласия установлен
    if not consent:
        return "Согласие на обработку данных обязательно!", 400

    # Сохраняем данные в CSV
    with open(CSV_FILE, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([name, phone, email])

    return "Данные успешно сохранены! Спасибо за обращение."

if __name__ == '__main__':
    app.run(debug=True)

