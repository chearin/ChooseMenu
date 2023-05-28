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

AddMenu.prototype.showMenu() = function()
{
    for (let i = 0; i < this.MenuList.length; i++)
    {
        document.write(this.MenuList[i]+" ");
    }
    document.write("\n");
}

AddMenu.prototype.inputMenu() = function()
{
    this.M = prompt("추가할 메뉴는 무엇입니까?");
}

AddMenu.prototype.addMenu() = function()
{
    this.MenuList.push(M);
}



// let object = new AddMenu();
// Object.showMenu();