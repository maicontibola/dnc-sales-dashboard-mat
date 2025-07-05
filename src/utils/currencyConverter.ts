/**
 * Convert to BRL currency format
 * @param value - Number to be converted
 * @return Converted BRL string
 * 
 */

export function currencyConvert(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}