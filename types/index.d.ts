declare module 'lodash' {
    function multiply(multiplier: number, multiplicand: number): number

    function reverse<Type>(array:Type[]): Type[]

    function dropRight(array: (string | number)[], n: number): (string | number)[]
}
