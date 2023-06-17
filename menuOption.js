class MenuOption
{
    //constructor(MList,menuList,menuList0,menuList1,menuList2,menuList3)
    constructor(menuList)
    {
        this.MenuList = menuList;
    }
    menuType = 4;
    menuList = ["국수","김치찌개","돈까스","된장찌개","떡볶이","라면","만두","볶음밥","비빔밥","삼겹살","샌드위치","샐러드","아이스크림","우동","짜장면","짬뽕","초밥","치킨","카레","커피","타코","타코야끼","파스타","피자","햄버거"];
    menuList0 = ["김치찌개","돈까스","된장찌개","떡볶이","만두","볶음밥","비빔밥","삼겹살","초밥","카레","타코"];
    menuList1 = ["국수","라면","우동","짜장면","짬뽕","파스타"];
    menuList2 = ["치킨","피자","햄버거"];
    menuList3 = ["샌드위치","샐러드","아이스크림","커피","타코야끼"];

    inputType()
    {
        this.menuType = prompt("옵션을 선택해주세요.\n기본 식사메뉴(0) 면(1) 인스턴트(2) 디저트(3) 전체(4)");
    }

    changeMenuList()
    {
        if(this.menuType == "0")
        {
            //this.MenuList = this.menuList0;
            var i = 0;
            var n = this.MenuList.length;
            for(i = 0; i<n; i++)
            {
                this.MenuList.pop();
            }
            for(i = 0; i<this.menuList0.length; i++)
            {
                this.MenuList.push(this.menuList0[i]);
            }
            
        }
        if(this.menuType == "1")
        {
            var i = 0;
            var n = this.MenuList.length;
            for(i = 0; i<n; i++)
            {
                this.MenuList.pop();
            }
            for(i = 0; i<this.menuList1.length; i++)
            {
                this.MenuList.push(this.menuList1[i]);
            }
        }
        if(this.menuType == "2")
        {
            var i = 0;
            var n = this.MenuList.length;
            for(i = 0; i<n; i++)
            {
                this.MenuList.pop();
            }
            for(i = 0; i<this.menuList2.length; i++)
            {
                this.MenuList.push(this.menuList2[i]);
            }
        }
        if(this.menuType == "3")
        {
            var i = 0;
            var n = this.MenuList.length;
            for(i = 0; i<n; i++)
            {
                this.MenuList.pop();
            }
            for(i = 0; i<this.menuList3.length; i++)
            {
                this.MenuList.push(this.menuList3[i]);
            }
        }
        if(this.menuType == "4")
        {
            var i = 0;
            var n = this.MenuList.length;
            for(i = 0; i<n; i++)
            {
                this.MenuList.pop();
            }
            for(i = 0; i<this.menuList.length; i++)
            {
                this.MenuList.push(this.menuList[i]);
            }
        }
           
        document.getElementById("printList").innerHTML = this.MenuList.join(" ");
    }
};