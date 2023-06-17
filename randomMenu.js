class RandomMenu
{
    constructor(Menu)
    {
        this.MenuList = Menu;
        this.choice = -1;
    }
    //choice;
    result;

    chooseMenu()
    {
        this.choice = Math.floor(Math.random() * 100) % this.MenuList.length;
    }
    showResult()
    {
        this.result = this.MenuList[this.choice];
        document.getElementById("printResult").innerHTML = this.result;
    }
    // showIMG()
    // {
    //     const IMAGES = ['food/1.png'];
    //     const IMG_NUM = 25;            
    //     IMAGES[this.choice]
    // }
};