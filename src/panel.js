class Panel
{
    constructor()
    {
        this.chosenWord = ["C", "O", "C", "I", "N", "A", "R"];
        this.lastWord = "";
    }

    createLines(word)
    {
        const wordLength = word.length;

        for(let counter = 0; counter < wordLength; counter++)
        {
            console.log("_");
        }
    }
}