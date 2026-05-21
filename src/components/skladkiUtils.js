export const RATES = {
    emerytalna: 9.76,
    rentowa: 1.5,
    chorobowa: 2.45,
}

export const computeEmerytalna = (brutto) => {
    const base = Number(brutto) || 0
    return base * (RATES.emerytalna / 100)
}

export const computeRentowa = (brutto) => {
    const base = Number(brutto) || 0
    return base * (RATES.rentowa / 100)
}

export const computeChorobowa = (brutto) => {
    const base = Number(brutto) || 0
    return base * (RATES.chorobowa / 100)
}

export const computeSkladkiRazem = (brutto) => {
    return computeEmerytalna(brutto) + computeRentowa(brutto) + computeChorobowa(brutto)
}
