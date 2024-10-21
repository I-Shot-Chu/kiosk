import drinkMenus from "../json/drink.json"
import dessertMenus from "../json/dessert.json"
import mdItem from "../json/MDProduct.json"
import newMenu from "../json/newMenu.json"


// 커피 
const Coffee2 = (drinkMenus)=>{
    if(drinkMenus.categoryName === "커피"){return true}
}
export const coffee = ()=> { return drinkMenus.filter(Coffee2) }



// 티
const Tea = (drinkMenus)=>{
    if(drinkMenus.categoryName === "티"){return true}
}
export const tea = ()=>{ return drinkMenus.filter(Tea) }


// 에이드, 주스 
const isAdeAndJuice = (drinkMenus)=>{
    if(drinkMenus.categoryName === "에이드&주스"){return true}
}
export const adeAndJuice = () => { return drinkMenus.filter(isAdeAndJuice) }



// 스무디 , 프라페
const isSmoothieAndFrappe = (drinkMenus)=>{
    if(drinkMenus.categoryName === "스무디 & 프라페"){return true}
}
export const smoothieAndFrappe = () => { return drinkMenus.filter(isSmoothieAndFrappe) }



// 디카페인
const DecafCoffee = (drinkMenus)=>{
    if(drinkMenus.categoryName === "디카페인"){return true}
}
export const decafCoffee = ()=>{ return drinkMenus.filter(DecafCoffee) }

//음료
const Drinks = (drinkMenus)=>{
    if(drinkMenus.categoryName === "음료"){return true}
}
export const drinks = ()=>{ return drinkMenus.filter(Drinks) }


// 디저트
const isDessert = (dessertMenus)=>{
    if(dessertMenus.categoryName === "디저트"){return true}
}
export const dessert = ()=>{ return dessertMenus.filter(isDessert) }




//신메뉴
const isNewDrinks = (newMenu)=>{
    if(newMenu.categoryName === "음료"){return true}
}
export const newDrinks = ()=>{ return newMenu.filter(isNewDrinks) }

const isNewDessert = (newMenu)=>{
    if(newMenu.categoryName === "디저트"){return true}
}
export const newDessert = ()=>{ return newMenu.filter(isNewDessert) }



// Md
export const mdProduct= ()=>{
    return mdItem;
}


// 음료 상세메뉴
export function drinkgetMenuDetail(menuCode){
    const codeAsNumber = parseInt(menuCode);
    return drinkMenus.filter(menu => menu.menuCode === codeAsNumber)[0];
}

// 디저트 상세메뉴
export function dessertgetMenuDetail(menuCode){
    const codeAsNumber = parseInt(menuCode);
    return dessertMenus.filter(menu => menu.menuCode === codeAsNumber)[0];
}


// MD 상세메뉴
export function mdgetMenuDetail(menuCode){
    const codeAsNumber = parseInt(menuCode);
    return mdItem.filter(menu => menu.menuCode === codeAsNumber)[0];
}