import moment from "moment"

export function hourAdapter(time: string):Date {
    const splitHour = time.split(':')

    const hour = splitHour[0]
    const minutes = splitHour[1]
    const today = new Date()

    const dateTime = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${hour}:${minutes}:00`

    return moment(dateTime,'DD/MM/YYYY hh:mm:ss').toDate()

 }
