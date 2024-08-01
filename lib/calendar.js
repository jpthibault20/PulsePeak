
export const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
}

export const getDayName = (date) => {
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return dayNames[date.getDay()];
}

function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}


export const getLastDayOfMonth = (year, month) => {
    return new Date(year, month, getDaysInMonth(year, month)).getDay();
}


export const generateCalendar = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const lastDay = getLastDayOfMonth(year, month);


    // Nombre de jours dans le mois précédent à afficher
    const daysInPreviousMonth = firstDay === 0 ? 6 : firstDay - 1;

    // Nombre de jours dans le mois suivant à afficher
    const daysInNextMonth = lastDay === 7 ? 0 : 7 - lastDay;

    const calendar = [];

    // Ajouter les jours du mois précédent
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const prevDaysInMonth = getDaysInMonth(prevYear, prevMonth);

    for (let day = prevDaysInMonth - daysInPreviousMonth + 1; day <= prevDaysInMonth; day++) {
        const date = new Date(prevYear, prevMonth, day);
        calendar.push({ day, month: prevMonth + 1, year: prevYear, type: 'prev', dayName: getDayName(date) });
    }

    // Ajouter les jours du mois en cours
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        calendar.push({ day, month: month + 1, year, type: 'current', dayName: getDayName(date) });
    }

    // Ajouter les jours du mois suivant
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    for (let day = 1; day <= daysInNextMonth; day++) {
        const date = new Date(nextYear, nextMonth, day);
        calendar.push({ day, month: nextMonth + 1, year: nextYear, type: 'next', dayName: getDayName(date) });
    }

    return calendar;
}