class Keyboard
{
    constructor()
    {
        this.keyboardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.aboutLetters = [

            {
                id: 1,
                letter: "A",
                status: false
            },
            {
                id: 2,
                letter: "B",
                status: false
            },
            {
                id: 3,
                letter: "C",
                status: false
            },
            {
                id: 4,
                letter: "D",
                status: false
            },
            {
                id: 5,
                letter: "E",
                status: false
            },
            {
                id: 6,
                letter: "F",
                status: false
            },
            {
                id: 7,
                letter: "G",
                status: false
            },
            {
                id: 8,
                letter: "H",
                status: false
            },
            {
                id: 9,
                letter: "I",
                status: false
            },
            {
                id: 10,
                letter: "J",
                status: false
            },
            {
                id: 11,
                letter: "K",
                status: false
            },
            {
                id: 12,
                letter: "L",
                status: false
            },
            {
                id: 13,
                letter: "M",
                status: false
            },
            {
                id: 14,
                letter: "N",
                status: false
            },
            {
                id: 15,
                letter: "Ñ",
                status: false
            },
            {
                id: 16,
                letter: "O",
                status: false
            },
            {
                id: 17,
                letter: "P",
                status: false
            },
            {
                id: 18,
                letter: "Q",
                status: false
            },
            {
                id: 19,
                letter: "R",
                status: false
            },
            {
                id: 20,
                letter: "S",
                status: false
            },
            {
                id: 21,
                letter: "T",
                status: false
            },
            {
                id: 22,
                letter: "U",
                status: false
            },
            {
                id: 23,
                letter: "V",
                status: false
            },
            {
                id: 24,
                letter: "W",
                status: false
            },
            {
                id: 25,
                letter: "X",
                status: false
            },
            {
                id: 26,
                letter: "Y",
                status: false
            },
            {
                id: 26,
                letter: "Z",
                status: false
            }
        ];
    }

    // - - - - - - - - - - || CREATE KEYBOARD || - - - - - - - - - - //
    createKeyboard()
    {
        return this.aboutLetters;
    }

    // - - - - - - - - - - || SELECT LETTER || - - - - - - - - - - //
    selectLetter(letter)
    {
        this.aboutLetters.map(object => {

            if(object.letter === letter)
            {
                object.status = true;
            }

        });
    }
}

export {Keyboard};