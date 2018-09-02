/**
 * Predicate function to test if any of the cods is different than 200 
 * @param   {Array} codsArr - list of cods
 * @returns {Boolean}      
 */

export default codsArr => {
    return !codsArr
        // maps to string
        .map(cod => `${cod}`)
        .some(cod => cod !== '200')
}   
