/**
 * 
 * @param {Array <string>} deck Arreglo de cartas
 * @returns {String} Retorna una carta
 */


export const pedirCarta = (deck) => {

    const carta = deck.pop();
    return carta;
}