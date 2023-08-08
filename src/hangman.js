class Hangman
{
    constructor()
    {
        this.images = ["../assets/images/img_001.png", "../assets/images/img_002.png", "../assets/images/img_003.png", "../assets/images/img_004.png", "../assets/images/img_005.png", "../assets/images/img_006.png", "../assets/images/img_007.png"];
        this.position = 0;
    }

    changeImage()
    {
        return this.images[this.position];
    }
}

export {Hangman};