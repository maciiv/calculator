export function convertToMm(x: number, unit: string) {
    switch (unit) {
        case "cm":
            return x * 10
        case "m":
            return x * 1000
        default:
            return x
    }
}

export function convertFromMmSquared(x: number, unit: string) {
    switch (unit) {
        case "cm":
            return x / 100
        case "m":
            return x / 1000000
        default:
            return x
    }
}