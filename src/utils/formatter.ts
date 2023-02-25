import moment from "moment"

function formatNumberToString(number: number): string {

    const parseNumberToPercent = number.toFixed(2)

    return String(parseNumberToPercent).replace(".", ",")
}

type Options = {
    customFormat?: boolean
}

function formatDateToBRFormat(dateISOString: string, { customFormat }: Options): string {
    const date = moment(dateISOString)

    if (customFormat) {
        return date.format("DD.MM.YYYY")
    }

    return date.format("DD/MM/YYYY")
}

function formatHourToBRFormat(dateISOString: string): string {
    const date = moment(dateISOString)
    const hour = date.format("HH:mm")

    return hour
}

function formatToISOFormat(date: Date, hour: Date) {
    const formatedDate = moment(date).format("YYYY-MM-DD")
    const formatedHour = moment(hour).format("HH:mm")

    return `${formatedDate}T${formatedHour}`
}

export { formatNumberToString, formatDateToBRFormat, formatHourToBRFormat, formatToISOFormat }
