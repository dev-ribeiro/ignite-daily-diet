import moment from "moment";

export function createDateTime(date: Date, hour: Date): string {
    const getDate = moment(date).format("YYYY-MM-DD")
    const getHour = moment(hour).format("HH:mm")

    const isoDate = new Date(`${getDate}T${getHour}`).toISOString()

    return isoDate
}
