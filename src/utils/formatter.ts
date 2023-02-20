import moment from "moment"

function formatNumberToString(number: number): string {

    const parseNumberToPercent = (number / 100).toFixed(2)

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

export { formatNumberToString, formatDateToBRFormat, formatHourToBRFormat }
