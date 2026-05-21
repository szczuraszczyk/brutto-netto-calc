// Default percentage rates (expressed in percent, e.g. 9.76 means 9.76%)
export const RATES = {
    emerytalna: 9.76,
    rentowa: 1.5,
    chorobowa: 2.45,
}

// Compute emerytalna contribution from a brutto value
export const computeEmerytalna = (brutto) => {
    // Ensure we work with a number; fallback to 0 for invalid input
    const base = Number(brutto) || 0
    // Return percentage of base (convert percent to fraction)
    return base * (RATES.emerytalna / 100)
}

// Compute rentowa contribution from a brutto value
export const computeRentowa = (brutto) => {
    const base = Number(brutto) || 0
    return base * (RATES.rentowa / 100)
}

// Compute chorobowa contribution from a brutto value
export const computeChorobowa = (brutto) => {
    const base = Number(brutto) || 0
    return base * (RATES.chorobowa / 100)
}

// Sum all three social contributions
export const computeSkladkiRazem = (brutto) => {
    return computeEmerytalna(brutto) + computeRentowa(brutto) + computeChorobowa(brutto)
}
