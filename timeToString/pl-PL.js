var hours = [
    'zero',
    'pierwsza',
    'druga',
    'trzecia',
    'czwarta',
    'piąta',
    'szósta',
    'siódma',
    'ósma',
    'dziewiąta',
    'dziesiata',
    'jedynasta',
    'dwunasta',
    'trzynasta',
    'czternasta',
    'piętnasta',
    'szesnasta',
    'siedemnasta',
    'osiemnasta',
    'dziewiętnasta',
    'dwudziesta',
    'dwudziesta pierwsza',
    'dwudziesta druga',
    'dwudziesta trzecia',
    'dwudziesta czwarta'
];

var minutes = [
    'zero',
    'jeden',
    'dwa',
    'trzy',
    'cztery',
    'pięć',
    'sześć',
    'siedem',
    'osiem',
    'dziewięć',
]
var tens = [
    '',
    'dziesięć',
    'dwadzieścia',
    'trzydzieści',
    'czterdzieści',
    'pięćdziesiąt',
    'sześćdziesiąt',
    'siedemdziesiąt',
    'osiemdziesiąt',
    'dziewięćdziesiąt',
];
var teens = [
    'dziesięć',
    'jedenaście',
    'dwanaście',
    'trzynaście',
    'czternaście',
    'piętnaście',
    'szesnaście',
    'siedemnaście',
    'osiemnaście',
    'dziewiętnaście',
];

function getTranslations(type) {
    let parseArraytoObject = (array) =>
        array.reduce((obj, val) => {
            obj[val] = val;
            return obj;
        }, {});


    if (type === 'object') {
        return {
            hours: parseArraytoObject(hours),
            minutes: parseArraytoObject(minutes),
            tens: parseArraytoObject(tens),
            teens: parseArraytoObject(teens),
        };
    }
    if (type === 'array') {
        return {
            hours,
            minutes,
            tens,
            teens,
        };
    }
}

module.exports = getTranslations;
