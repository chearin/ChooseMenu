class AddMenu
{
    constructor(Menu)
    {
        this.MenuList = Menu;
    }
    M; //add Menu
  
    showMenu()
    {
        var textPrint = document.createTextNode(this.MenuList.join(" "));
        document.getElementById("printList").appendChild(textPrint);
    }
    inputMenu()
    {
        this.M = prompt("추가할 메뉴는 무엇입니까?");
    }
    addMenu()
    {
        this.MenuList.push(this.M);
        var textPrint = document.createTextNode(" "+this.MenuList[this.MenuList.length-1]);
        document.getElementById("printList").appendChild(textPrint);
    }
};