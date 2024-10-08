import drinkMenus from "../json/drink.json"
import dessertMenus from "../json/dessert.json"


// 커피 
const isHotCoffee = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(HOT) 커피"){return true}
}
export const hotCoffee = ()=> { return drinkMenus.filter(isHotCoffee) }

const isIceCoffee = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(ICE) 커피"){return true}
}
export const iceCoffee = ()=> { return drinkMenus.filter(isIceCoffee) }



// 티
const isHotTea = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(HOT) 티"){return true}
}
export const hotTea = ()=>{ return drinkMenus.filter(isHotTea) }

const isIceTea = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(ICE) 티"){return true}
}
export const iceTea = ()=>{ return drinkMenus.filter(isIceTea) }


// 에이드, 주스 
const isAdeAndJuice = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(ICE) 에이드&주스"){return true}
}
export const adeAndJuice = ()=>{ return drinkMenus.filter(isAdeAndJuice) }



// 스무디 , 프라페
const isSmoothieAndFrappe = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(ICE) 스무디 & 프라페"){return true}
}
export const smoothieAndFrappe = ()=>{ return drinkMenus.filter(isSmoothieAndFrappe) }



// 디카페인
const isHotDecafCoffee = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(HOT) 디카페인"){return true}
}
export const hotDecafCoffee = ()=>{ return drinkMenus.filter(isHotDecafCoffee) }

const isIceDecafCoffee = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(ICE) 디카페인"){return true}
}
export const iceDecafCoffee = ()=>{ return drinkMenus.filter(isIceDecafCoffee) }



//음료
const isHotDrinks = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(HOT) 음료"){return true}
}
export const hotDrinks = ()=>{ return drinkMenus.filter(isHotDrinks) }

const isIceDrinks = (drinkMenus)=>{
    if(drinkMenus.categoryName === "(ICE) 음료"){return true}
}
export const iceDrinks = ()=>{ return drinkMenus.filter(isIceDrinks) }




// 음료 신메뉴
const isNewDrinks = (drinkMenus)=>{
    if(drinkMenus.categoryName === "신메뉴"){return true}
}
export const newDrinks = ()=>{ return drinkMenus.filter(isNewDrinks) }




// 디저트
const isDessert = (dessertMenus)=>{
    if(dessertMenus.categoryName === "디저트"){return true}
}
export const dessert = ()=>{ return dessertMenus.filter(isDessert) }



// 디저트 신메뉴
const isNewDessert = (dessertMenus)=>{
    if(dessertMenus.categoryName === "신메뉴"){return true}
}
export const newDessert = ()=>{ return dessertMenus.filter(isNewDessert) }



// 음료 상세메뉴
export function getMenuDetail(menuCode){
    const codeAsNumber = parseInt(menuCode);
    return drinkMenus.filter(menu => menu.menuCode === codeAsNumber)[0];
}