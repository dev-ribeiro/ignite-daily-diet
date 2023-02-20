import moment from "moment"

function formatNumberToString(number: number): string {

    const parseNumberToPercent = (number / 100).toFixed(2)

    return String(parseNumberToPercent).replace(".", ",")
}

function formatDateToBRFormat(dateISOString: string): string {
    const date = moment(dateISOString)
    const formated = date.format("DD/MM/YYYY")

    return formated
}

function formatHourToBRFormat(dateISOString: string): string {
    const date = moment(dateISOString)
    const hour = date.format("HH:mm")

    return hour
}

export { formatNumberToString, formatDateToBRFormat, formatHourToBRFormat }
