class Hangman
{
    constructor()
    {
        this.images = ["../assets/images/0.png", "../assets/images/1.png", "../assets/images/2.png", "../assets/images/3.png", "../assets/images/4.png", "../assets/images/5.png", "../assets/images/6.png"];
        this.position = 0;
    }

    changeImage()
    {
        return this.images[this.position];
    }
}

export {Hangman};