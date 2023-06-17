// const IMAGES = ['food/1.png'];
// const IMG_NUM = 25;

// IMAGES[this.choice]

class PrintIMG
{
    constructor(Menu)
    {
        this.MenuList = Menu;
        
    }
    choice;
    MenuName;
    IMGName;
    container;
    image;

    findIMG(choice)
    {
        this.choice = choice;
        //document.write(this.choice);
        this.MenuName = this.MenuList[this.choice];
        this.IMGName = this.MenuName+".png";
        //document.write(this.IMGName);
    }

    print()
    {
        this.container = document.getElementById("printImage");
        this.image = document.createElement("img");
        this.image.setAtrribute('src', './food/'+this.IMGName);
        document.getElementById("printImage").innerHTML = this.image;
    }
};