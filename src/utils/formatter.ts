function formatNumberToString(number: number): string {

    const parseNumberToPercent = (number / 100).toFixed(2)

    return String(parseNumberToPercent).replace(".", ",")
}

export { formatNumberToString }
