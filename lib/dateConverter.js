

export const stringToDate = (days, months, years) => {

    const daysInt = parseInt(days, 10);
    const monthInt = parseInt(months, 10); // Les mois commencent à 0 en JavaScript
    const yearsInt = parseInt(years, 10);

    const date = new Date(yearsInt, monthInt, daysInt);

    date.setHours(date.getHours() + 2);
    return date;
}
