
export const provisionalProgramme = [
    {
        "ID": 1,
        "type": [
            "Swimming"
        ],
        'date': '2024-07-27',
        "validated": true,
    },
    {
        "ID": 2,
        "type": [
            "Swimming"
        ],
        'date': '2024-07-29',
        "validated": true,
    },
    {
        "ID": 3,
        "type": [
            "Swimming"
        ],
        'date': '2024-08-01',
        "validated": false
    },
    {
        "ID": 4,
        "type": [
            "Swimming"
        ],
        'date': '2024-08-02',
        "validated": false
    },
    {
        "ID": 5,
        "type": [
            "Swimming"
        ],
        'date': '2024-08-03',
        "validated": true
    },
    {
        "ID": 6,
        "type": [
            "Swimming",
        ],
        'date': '2024-08-05',
        "validated": null
    },
    {
        "ID": 7,
        "type": [
            "Swimming",
            "Running",
            "Cycling"
        ],
        'date': '2024-08-06',
        "validated": null
    },
    {
        "ID": 8,
        "type": [
            "Swimming",
            "Running"
        ],
        'date': '2024-08-10',
        "validated": null
    },
    {
        "ID": 9,
        "type": [
            "Cycling"
        ],
        'date': '2024-08-13',
        "validated": null
    },
    {
        "ID": 10,
        "type": [
            "Running"
        ],
        'date': '2024-08-15',
        "validated": null
    },
    {
        "ID": 11,
        "type": [
            "Swimming",
            "Running",
            "Cycling"
        ],
        'date': '2024-08-17',
        "validated": null
    },
    {
        "ID": 12,
        "type": [
            "Swimming",
            "Cycling"
        ],
        'date': '2024-08-19',
        "validated": null
    },
    {
        "ID": 13,
        "type": [
            "Swimming",
            "Running",
            "Cycling"
        ],
        'date': '2024-08-22',
        "validated": null
    },
    {
        "ID": 14,
        "type": [
            "Swimming",
            "Running",
        ],
        'date': '2024-08-24',
        "validated": null
    },
    {
        "ID": 15,
        "type": [
            "Running"
        ],
        'date': '2024-08-26',
        "validated": null
    },
    {
        "ID": 16,
        "type": [
            "Cycling"
        ],
        'date': '2024-08-29',
        "validated": null
    }
]

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
        const today = false
        const { ID, Swimming, Running, Cycling, validated } = searchActivityByDate(date);

        calendar.push({
            day, month: prevMonth + 1,
            year: prevYear,
            type: 'prev',
            dayName: getDayName(date),
            today,
            ID,
            Swimming,
            Running,
            Cycling,
            validated
        });
    }

    // Ajouter les jours du mois en cours
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const today = date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate();
        const { ID, Swimming, Running, Cycling, validated } = searchActivityByDate(date);

        calendar.push({
            day,
            month: month + 1,
            year,
            type: 'current',
            dayName: getDayName(date),
            today,
            ID,
            Swimming,
            Running,
            Cycling,
            validated
        });
    }

    // Ajouter les jours du mois suivant
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    for (let day = 1; day <= daysInNextMonth; day++) {
        const date = new Date(nextYear, nextMonth, day);
        const today = false
        const { ID, Swimming, Running, Cycling, validated } = searchActivityByDate(date);

        calendar.push({
            day,
            month: nextMonth + 1,
            year: nextYear,
            type: 'next',
            dayName: getDayName(date),
            today,
            ID,
            Swimming,
            Running,
            Cycling,
            validated
        });
    }

    return calendar;
}

export const searchActivityByDate = (date) => {
    const todayDate = new Date().toISOString().split('T')[0];
    date = new Date(date).toISOString().split('T')[0];
    let Swimming = false;
    let Running = false;
    let Cycling = false;
    let validated = null;

    const Event = provisionalProgramme.find(event => event.date === date);

    if (Event) {
        for (let i = 0, len = Event.type.length; i < len; i++) {
            switch (Event.type[i]) {
                case 'Swimming':
                    Swimming = true;
                    break;
                case 'Running':
                    Running = true;
                    break;
                case 'Cycling':
                    Cycling = true;
                    break;
            }
        }

        if (new Date(todayDate) > new Date(Event.date)) {
            Event.validated === true ? validated = true : validated = false;
        }

        return {
            ID: Event.ID,
            validated,
            Swimming,
            Running,
            Cycling
        }

    }

    return {
        ID: null,
        validated: null,
        Swimming: null,
        Running: null,
        Cycling: null
    };


}


export const splitPerDay = (calendar) => {
    // Tableau pour les noms courts des jours de la semaine
    const nameOfDay = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];

    // Initialiser un objet pour stocker les jours groupés par jour de la semaine
    const daysGroupedByWeekday = {
        LUN: [],
        MAR: [],
        MER: [],
        JEU: [],
        VEN: [],
        SAM: [],
        DIM: [],
    };

    // Remplir l'objet avec les jours correspondants
    calendar.forEach((day) => {
        switch (day.dayName) {
            case 'Lundi':
                daysGroupedByWeekday.LUN.push(day);
                break;
            case 'Mardi':
                daysGroupedByWeekday.MAR.push(day);
                break;
            case 'Mercredi':
                daysGroupedByWeekday.MER.push(day);
                break;
            case 'Jeudi':
                daysGroupedByWeekday.JEU.push(day);
                break;
            case 'Vendredi':
                daysGroupedByWeekday.VEN.push(day);
                break;
            case 'Samedi':
                daysGroupedByWeekday.SAM.push(day);
                break;
            case 'Dimanche':
                daysGroupedByWeekday.DIM.push(day);
                break;
            default:
                break;
        }
    });

    return { nameOfDay, daysGroupedByWeekday };
}