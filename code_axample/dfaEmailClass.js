
class DFA {
    constructor() {
        // Estado inicial
        this.initialState = 'q0'
        // Estados finales
        this.finalStates = ['q3', 'q2']
    }

    /**
     * Validación q0 nombre usuario antes del "@" y transición q1
     * @param char caracter
     * @returns 'q0' Mientras que no llegue al '@' despues transición 'q1'
     */
    q0(char) {
        return /[[abcdefghijklmnopqrstuvwxyz0123456789]/i.test(char) ? 'q0' : (char === '@' ? 'q1' : null)
    }

    /**
     * Validación q1 nombre dominio antes del "." y transición q2
     * @param char caracter
     * @returns 'q1' Mientras que no llegue al '.' despues transición 'q2'
     */
    q1(char) {
        return /[[abcdefghijklmnopqrstuvwxyz0123456789]/i.test(char) ? 'q1' : (char === '.' ? 'q2' : null)
    }

    /**
     * Validación q2 extencion 1 del dominio antes del "." y transición q3
     * @param char caracter
     * @returns 'q2' Mientras que no llegue al '.' despues transición 'q3'
     */
    q2(char) {
        return /[[abcdefghijklmnopqrstuvwxyz0123456789]/i.test(char) ? 'q2' : (char === '.' ? 'q3' : null)
    }

    /**
     * Validación q2 extencion 1 del dominio antes del "." y transición q3
     * @param char caracter
     * @returns 'q2' Mientras que no llegue al '.' despues transición 'q3'
     */
    q3(char) {
        return /[[abcdefghijklmnopqrstuvwxyz0123456789]/i.test(char) ? 'q3' : null
    }

    /**
     * Método para verificar si una cadena es aceptada por el DFA
     * @param email correo
     * @returns 'true' si es valido, 'false' si no es soportado
     */
    accept(email) {
        let currentState = this.initialState
        for (let char of email) { // Se recorre caracter a caracter el correo
            console.log('Caracter:', char)
            console.log('Estado Actual:', currentState)
            const nextState = this[currentState](char)
            console.log('Cambio de Estado:', nextState)
            if (nextState === null) {
                console.log('Formato no soportado')
                return false // No hay transición válida para el carácter actual
            }
            currentState = nextState // Cambio de estado
        }
        console.log('Estado Final', currentState)
        return this.finalStates.includes(currentState) // Verificar si el estado actual es final
    }
}

// Ejemplo de uso
const dfa = new DFA()
const correo = "jcestupinan@poligran.edu.co"
console.log("El correo electrónico", correo, "es válido:", dfa.accept(correo))
