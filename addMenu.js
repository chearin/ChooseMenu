class AddMenu
{
    constructor(Menu)
    {
        this.MenuList = Menu;
    }
    M; //add Menu
  
    showMenu();
    inputMenu();
    addMenu();
};

AddMenu.prototype.showMenu() = functin()
{
    for (let i = 0; i < MenuList.length; i++)
    {
        document.write(MenuList[i]+" ");
    }
    document.write("\n");
}

AddMenu.prototype.inputMenu() = function()
{
    M = prompt("추가할 메뉴는 무엇입니까?");
}

AddMenu.prototype.addMenu() = function()
{
    MenuList.add(M);
}



// let object = new AddMenu();
// Object.showMenu();