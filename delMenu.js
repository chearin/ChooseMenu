class DelMenu
{
    constructor(Menu)
    {
        this.MenuList = Menu;
    }
    D; //del Menu

    inputDelMenu()
    {
        this.D = prompt("삭제할 메뉴는 무엇입니까?");
    }
    delMenu()
    {
        let idx = this.MenuList.indexOf(this.D);
        if(idx !== -1)
        {
            this.MenuList.splice(idx, 1);
        }        
        document.getElementById("printList").innerHTML = this.MenuList.join(" ");
    }
};