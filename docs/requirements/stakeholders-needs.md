# Формування запитів зацікавлених осіб
## Вступ
У даному розділі розглядається процес формування запитів зацікавлених осіб у контексті інформаційних систем. Запити відіграють ключову роль у взаємодії користувачів із системами, забезпечуючи отримання необхідних даних для аналізу, прийняття рішень та управління.  
Розуміння механізмів формування запитів, таких як структура SQL-запитів, параметризовані запити, API-запити та механізми фільтрації, є критично важливим для ефективного управління інформацією. У цьому розділі аналізуються основні підходи до побудови запитів, а також порівняльний аналіз різних підходів з використанням моделі FURPS, що охоплює функціональні вимоги, зручність використання, надійність, продуктивність і підтримку.

## Мета
Створення системи, що забезпечує роботу з відкритими даними: їх отримання, зберігання чи оновлення.

## Контекст
Визначення запитів зацікавлених осіб – це важливий процес для визначення вимог до створення проекту. Це дозволяє спростити процеси проектування через розуміння важливих аспектів, що можуть бути найбільш потрібними користувачам.  
Цей документ описує основні вимоги, що мають бути враховані задля реалізації найважливіших потреб, які є причиною створення проекту.

## Основні визначення
**[FURPS](Джерело)** — це акронім, що представляє модель для класифікації атрибутів якості програмного забезпечення (функціональні та нефункціональні вимоги):  
- **[Functionality](Джерело)** — функціональні вимоги — можливості (розмір і загальність набору функцій), повторне використання (сумісність, портативність), безпека (безпека та можливість використання). Є основними, за цими вимогами будуються діаграми варіантів використання (Use case diagram).  
- **[Usability](Джерело)** — юзабіліті — вимоги до зручності використання (UX): людський фактор, естетика, послідовність, документація.  
- **[Reliability](Джерело)** — надійність — вимоги до надійності: частота можливих збоїв, стійкість до відмов, відновлюваність/живучість, передбачуваність (стабільність) стійкості.  
- **[Performance](Джерело)** — продуктивність — вимоги до продуктивності: час відгуку, використання ресурсів (потужність, оперативна пам’ять, кеш-пам’ять тощо), ефективність, потужність, пропускна здатність, ємність, масштабованість.  
- **[Supportability](Джерело)** — зручність супроводу — вимоги до підтримки (придатність до обслуговування, ремонтопридатність, стабільність, швидкість ремонту): можливість тестування, гнучкість (можливість модифікації, конфігурації, адаптивності, розширення, модульність), можливість встановлення, локалізація.  

**[Запит](Джерело)** – формалізоване звернення до інформаційної системи для отримання або зміни даних.  
**[SQL-запит](Джерело)** – набір команд для отримання, зміни чи видалення даних у реляційній базі даних.  
**[API-запит](Джерело)** – звернення до вебсервісу або зовнішньої системи для отримання інформації через HTTP-запити (GET, POST, PUT, DELETE).  
**[Фільтрація даних](Джерело)** – процес відбору необхідної інформації на основі заданих критеріїв.  
**[Кешування запитів](Джерело)** – технологія тимчасового збереження результатів запитів для підвищення продуктивності.  
**[GraphQL](https://graphql.org/)** – мова запитів для API, яка дозволяє отримувати саме ті дані, що потрібні.  
**[REST API](Джерело)** – архітектурний стиль для побудови вебсервісів, що використовує стандартизовані HTTP-запити.  
**[ORM (Object-Relational Mapping)](Джерело)** – спосіб взаємодії програм з базами даних через об’єктно-орієнтоване програмування.

## Методи формування запитів та їх переваги і недоліки
### Реляційні запити (SQL)
**Переваги:**  
- Висока ефективність обробки структурованих даних.  
- Стандартизовані механізми запитів та маніпуляції даними.  
- Можливість складної аналітики через JOIN, GROUP BY тощо.  

**Недоліки:**  
- Потребує чітко визначеної схеми даних.  
- Виконання складних запитів може бути ресурсомістким.

### Запити через API
**Переваги:**  
- Гнучкість у взаємодії з різними системами.  
- Підтримка різних форматів даних (JSON, XML).  
- Висока масштабованість.  

**Недоліки:**  
- Залежність від зовнішніх сервісів.  
- Вразливість до змін API.

### Параметризовані запити
**Переваги:**  
- Запобігання SQL-ін’єкціям.  
- Динамічне управління параметрами.  

**Недоліки:**  
- Потребує додаткового налаштування та безпекових механізмів.

### Фільтрація та сортування
**Переваги:**  
- Дозволяє швидке отримання потрібних даних.  
- Оптимізує запити, зменшуючи навантаження на систему.  

**Недоліки:**  
- Може бути складним у реалізації для великих масивів даних.

### Оптимізація запитів
- Індексація даних.  
- Оптимізація запитів у великих базах.  
- Використання кешування результатів.  
- Балансування навантаження серверів.  
- Використання NoSQL-баз для масштабованих проєктів.

## Порівняння підходів до запитів (модель FURPS)
| Підхід               | Функціональність | Зручність | Надійність  | Продуктивність   | Підтримка                   |
|----------------------|------------------|-----------|-------------|------------------|-----------------------------|
| SQL-запити          | Висока           | Середня   | Висока      | Висока           | Хороша документація         |
| API-запити          | Висока           | Висока    | Висока      | Залежить від сервера | Підтримка API-провайдерів   |
| Параметризовані запити | Висока         | Висока    | Дуже висока | Висока           | Доступність стандартних методів |
| Кешування запитів   | Динамічна        | Середня   | Висока      | Дуже висока      | Вимагає налаштування        |

## Короткий зміст
[Розділ містить опис того, про що йдеться в цій частині цього документу, що залишилася. Також тут описана структура документу.]

## Характеристика ділових процесів
Глибоке розуміння процесів проекту є відокремлення зовнішніх факторів від внутрішніх. Зовнішні фактори називають бізнес-акторами, а внутрішні – бізнес-робітниками.

### Бізнес-актори:
- **Користувач** – фізична особа, що взаємодіє з проектом.  
- **Оновлення інформації**, що потребує оновлення даних проекту.  
- **Адміністратор** – людина, що забезпечує оновлення актуальної інформації.

### Бізнес-робітники:
- **Розробники** – люди, що стоять за технічною підтримкою проекту та контролюють зміни, занесені в систему.

Звідси виведемо такі сценарії:

### ID: PullInfo
**НАЗВА:** Отримання певної інформації з бази.  
**УЧАСНИКИ:** Користувач, система  
**ПЕРЕДУМОВИ:** Запрошена інформація наявна в системі  
**РЕЗУЛЬТАТ:** Користувач отримує інформацію, на яку посилав запит  
**ВИКЛЮЧНІ СИТУАЦІЇ:**  
- Данної інформації немає в системі (InfoNotFoundExeption)  
**ОСНОВНИЙ СЦЕНАРІЙ:**  
- Користувач відправляє запит на отримання певної інформації.  
- Система перевіряє наявність інформації в базі.  
- Передає інформацію користувачу.

### ID: UpdateInfo
**НАЗВА:** Оновлення даних у базі до актуальних.  
**УЧАСНИКИ:** Адміністратор, система  
**ПЕРЕДУМОВИ:** Актуальна інформація відрізняється від тієї, що в системі  
**РЕЗУЛЬТАТ:** Інформація оновлюється до актуальної  
**ВИКЛЮЧНІ СИТУАЦІЇ:**  
- Інформація не потребує оновлення (NoNewInfoExeption)  
**ОСНОВНИЙ СЦЕНАРІЙ:**  
- Відправляється запит на оновлення.  
- Система перевіряє, чи інформація в базі є актуальною.  
- Якщо інформація не є актуальною, то вона оновлюється в базі.

### ID: CheckInfo
**НАЗВА:** Перевірка даних на достовірність.  
**УЧАСНИКИ:** Адміністратор, система  
**ПЕРЕДУМОВИ:** Певні дані є недостовірними  
**РЕЗУЛЬТАТ:** Інформація оновлюється до правильної  
**ВИКЛЮЧНІ СИТУАЦІЇ:**  
- Інформація є достовірною (NoFalseInfoExeption)  
**ОСНОВНИЙ СЦЕНАРІЙ:**  
- Відправляється запит на перевірку даних.  
- Дані перевіряються на правдивість.  
- Йде пошук та зміна достовірних даних.

## Короткий огляд продукту
Система має працювати з базою відкритих даних. Користувачі мають змогу переглянути всі дані та отримати конкретні за потреби. Користувачі – будь-які люди, що хочуть отримати інформацію, яку вони потребують.

### Функціональність
- Швидкий та надійний доступ до інформації.  
- Забезпечення актуальності відкритих даних.  
- Показ та передача цих даних.

### Практичність
- Зручний та зрозумілий інтерфейс.  
- Забезпечення зрозумілого виведення інформації.  
- Актуальна та перевірена інформація.

### Надійність
- Перевірка даних на достовірність.  
- Заборона на зміну без перевірки.

### Продуктивність
- Оптимізація отримання інформації.  
- Автоматизація перевірки та оновлення даних.

### Експлуатаційна придатність
- Актуалізація інформації дає впевненість у тому, що отримані дані не будуть застарілими.  
- Оптимізована система забезпечує ефективне отримання інформації.  
- Перевірка даних дозволяє бути впевненим, що отримані дані є достовірними.

## Висновки
Формування запитів є невід’ємною частиною інформаційних систем і вимагає грамотного підходу до вибору методів отримання даних. Для ефективного управління інформацією рекомендується комбінувати SQL-запити для складних вибірок, API-запити для інтеграції зовнішніх сервісів, а також механізми кешування для підвищення продуктивності. Вибір методу залежить від вимог до швидкості, безпеки та доступності даних.

## Джерела
- [C.J. Date. "An Introduction to Database Systems", 8th Edition, Addison-Wesley, 2003.](Розділ 3: SQL і його структура)  
- [Fielding R. "Architectural Styles and the Design of Network-based Software Architectures", 2000.](Розділ 5: REST API)  
- [GraphQL Documentation](https://graphql.org/). Розділ: Queries and Mutations.  
- [Markus Winand. "SQL Performance Explained", 2012.](Глава 4: Індекси та оптимізація запитів)  
- [Google Developers: HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching). Розділ: Основи кешування HTTP.
