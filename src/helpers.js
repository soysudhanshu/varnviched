const addHalant = char => {
    return char + '्';
}

const isHalant = char => {
    return char === '्';
}

const isAnunasik = char => {
    return char === 'ँ';
}

const addAnunasik = char => {
    return char + 'ँ';
}

const isVisarg = char => {
    return char === 'ः'
}

const addVisarg = char => {
    return char + 'ः';
}

/**
 * Normalizes a devanagari string.
 * 
 * @param {string} string 
 * @returns {string}
 */
const devanagariNormalize = string => {
    if(!string){
        return '';
    }
    
    string = String(string);
    
    const normalizationChart = {
        '\u0915\u093C': '\u0958',
        '\u0916\u093C': '\u0959',
        '\u0917\u093C': '\u095A',
        '\u091C\u093C': '\u095B',
        '\u0921\u093C': '\u095C',
        '\u0922\u093C': '\u095D',
        '\u092B\u093C': '\u095E',
        '\u092F\u093C': '\u095F',

        '\u0930\u093C': '\u0931',
        '\u0928\u093C': '\u0929',
        '\u0933\u093C': '\u0934',

        '\u0917\u0952': '\u097B',
        '\u091C\u0952': '\u097C',
        '\u0921\u0952': '\u097E',
        '\u092C\u0952': '\u097F'
    }

    let normalized = string.normalize();
    for (const decomposedChar in normalizationChart) {
        const regex = new RegExp(decomposedChar, 'g');
        normalized = normalized.replace(regex, normalizationChart[decomposedChar]);
    }
    return normalized;
}

module.exports.addHalant = addHalant;
module.exports.isHalant = isHalant;
module.exports.devanagariNormalize = devanagariNormalize;
module.exports.isAnunasik = isAnunasik;
module.exports.addAnunasik = addAnunasik;
module.exports.isVisarg = isVisarg;
module.exports.addVisarg = addVisarg;