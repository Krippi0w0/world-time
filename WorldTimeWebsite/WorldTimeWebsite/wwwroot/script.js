function updateTime(timezone) {
    const now = new Date();

    // Формат времени
    const timeOptions = {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    const time = new Intl.DateTimeFormat('ru-RU', timeOptions).format(now);
    document.getElementById('time').textContent = time;

    // Формат даты
    const dateOptions = { timeZone: timezone, day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Intl.DateTimeFormat('ru-RU', dateOptions).format(now);
    document.getElementById('date').textContent = date;

    // Дни до Нового года
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const daysLeft = Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').textContent = `До Нового года осталось: ${daysLeft} дней`;
}

function changeTimezone(timezone, background) {
    clearInterval(window.timer); // Очищаем предыдущий таймер
    document.body.style.background = `url('./${background}') no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    window.timer = setInterval(() => updateTime(timezone), 1000);
}

// Устанавливаем начальный город
changeTimezone('Europe/Moscow', 'moscow.jpg');
