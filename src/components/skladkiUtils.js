// Obiekt stałych z domyślnymi stawkami procentowymi składek
export const RATES = {
    // Stawka procentowa składki emerytalnej (np. 9.76%)
    emerytalna: 9.76,
    // Stawka procentowa składki rentowej (np. 1.5%)
    rentowa: 1.5,
    // Stawka procentowa składki chorobowej (np. 2.45%)
    chorobowa: 2.45,
}

// Funkcja obliczająca składkę emerytalną na podstawie kwoty brutto
export const computeEmerytalna = (brutto) => {
    // Konwersja wejścia na liczbę; jeśli niepoprawne, użyj 0
    const base = Number(brutto) || 0
    // Zwróć kwotę = brutto * (stawka / 100)
    return base * (RATES.emerytalna / 100)
}

// Funkcja obliczająca składkę rentową na podstawie kwoty brutto
export const computeRentowa = (brutto) => {
    // Konwersja wejścia na liczbę; jeśli niepoprawne, użyj 0
    const base = Number(brutto) || 0
    // Zwróć kwotę = brutto * (stawka / 100)
    return base * (RATES.rentowa / 100)
}

// Funkcja obliczająca składkę chorobową na podstawie kwoty brutto
export const computeChorobowa = (brutto) => {
    // Konwersja wejścia na liczbę; jeśli niepoprawne, użyj 0
    const base = Number(brutto) || 0
    // Zwróć kwotę = brutto * (stawka / 100)
    return base * (RATES.chorobowa / 100)
}

// Funkcja zwracająca sumę wszystkich składek dla danej kwoty brutto
export const computeSkladkiRazem = (brutto) => {
    // Suma: emerytalna + rentowa + chorobowa
    return computeEmerytalna(brutto) + computeRentowa(brutto) + computeChorobowa(brutto)
}
