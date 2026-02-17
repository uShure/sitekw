document.addEventListener('DOMContentLoaded', () => {
    // --- ЗАЩИТА КОНТЕНТА ---

    // Отключение контекстного меню
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // Отключение горячих клавиш (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+C)
    document.addEventListener('keydown', (e) => {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I (Инструменты разработчика)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }

        // Ctrl+U (Просмотр кода)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }

        // Ctrl+S (Сохранить)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }

        // Ctrl+C (Копировать)
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            return false;
        }
    });

    // Отключение перетаскивания изображений
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });
    });

    // --- ЛОГИКА СТРАНИЦЫ ---

    // Функция для обработки выбора карточек (доставка, оплата)
    function setupSelection(selector) {
        const cards = document.querySelectorAll(selector);

        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Удаляем активный класс у всех карточек в этой группе
                cards.forEach(c => c.classList.remove('active'));
                // Добавляем активный класс кликнутой карточке
                card.classList.add('active');
            });
        });
    }

    // Инициализация выбора доставки
    setupSelection('.delivery-card');

    // Инициализация выбора оплаты
    setupSelection('.payment-card');

    // Маска телефона (простая реализация)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            // Здесь можно добавить полноценную маску, пока просто placeholder
        });
    }
});
