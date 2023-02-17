function formatNumberToString(number: number): string {

    const parseNumberToPercent = (number / 100).toFixed(2)

    return String(parseNumberToPercent).replace(".", ",")
}

function formatZeroLeft(time: number) {

    if (time < 10) {
        return "0" + time
    }

    return String(time)
}

function formatDateToBRFormat(date: Date): string {

    const formatedDate = `${formatZeroLeft(date.getDate())}/${formatZeroLeft(date.getMonth())}/${date.getFullYear()}`

    return formatedDate
}

function formatHourToBRFormat(date: Date): string {
    const hour = date.getUTCHours()
    const minutes = date.getUTCMinutes()

    return `${formatZeroLeft(hour)}:${formatZeroLeft(minutes)}`
}

export { formatNumberToString, formatDateToBRFormat, formatHourToBRFormat }
