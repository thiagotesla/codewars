// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

function magNumber(info) {

    let gunType = info[0]
    let numberOfStreets = info[1]
    let bullets = 0
    let fireInEachStreet = 3


    switch (gunType) {
        case "PT92":
            bullets = 17
        break;

        case "M4A1":
            bullets = 30
        break;

        case "M16A2":
            bullets = 30
        break;

        case "PSG1":
            bullets = 5
        break;
    }

    return Math.ceil((((numberOfStreets * fireInEachStreet) / bullets)))
}
