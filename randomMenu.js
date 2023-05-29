class RandomMenu
{
    constructor(Menu)
    {
        this.MenuList = Menu;
    }
    choice;
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
};