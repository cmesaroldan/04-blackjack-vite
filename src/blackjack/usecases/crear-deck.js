import _ from 'underscore';

/**
 * Esta función crea un arreglo de carta
 * @param {array <String>} tiposDeCarta  Ej: ['C','D','H','S'];
 * @param {array <String>} tiposEspeciales Ej: ['A','J','Q','K'];
 * @returns {array <String>}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error ( 'Tipos de cartas es obligatorio' );
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error ( 'Tipos de cartas es obligatorio' );

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

export default crearDeck;