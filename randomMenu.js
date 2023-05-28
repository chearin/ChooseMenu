class RandomMenu
{
    constructor(Menu)
    {
        this.MenuList = Menu;
    }
    choice;
    result;

    chooseMenu();
    showResult();
};

RandomMenu.prototype.chooseMenu = function()
{
    this.choice = Math.floor(Math.random()*100 % this.MenuList.length);
}

RandomMenu.prototype.showResult = function()
{
    this.result = this.MenuList[this.choice];
    document.write(this.result);
}