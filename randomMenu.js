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

RandomMenu.prototype.chooseMenu() = function()
{
     
    choice = Math.random()*100 % MenuList.length;
}

RandomMenu.prototype.showResult() = function()
{
    result = MenuList[choice];
    document.write(result);
}