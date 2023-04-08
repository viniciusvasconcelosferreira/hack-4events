import moment from "moment";

export const Years = () => {
    const years = []
    const dateStart = moment()
    const dateEnd = moment().subtract(100, 'y')
    while (dateEnd <= dateStart) {
        years.push(dateEnd.format('YYYY'));
        dateEnd.add(1, 'year');
    }
    return years;
}
export const Months = () => {
    const months = []
    const dateStart = moment()
    const dateEnd = moment().add(12, 'month')
    while (dateEnd.diff(dateStart, 'months') >= 0) {
        months.push(dateStart.format('M'))
        dateStart.add(1, 'month')
    }

    return [...new Set(months)].sort(function (a, b) {
        return a - b
    });
}
export const Days = () => {
    const days = []
    const dateStart = moment()
    const dateEnd = moment().add(30, 'days')
    while (dateEnd.diff(dateStart, 'days') >= 0) {
        days.push(dateStart.format('D'))
        dateStart.add(1, 'days')
    }
    return days.sort(function (a, b) {
        return a - b
    });
}