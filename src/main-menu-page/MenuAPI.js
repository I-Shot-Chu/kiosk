import drinkMenus from "../json/drink.json"
import dessertMenus from "../json/dessert.json"


// 커피 
const isCoffee = (drinkMenus)=>{
    if(drinkMenus.categoryName === "커피"){return true}
}
export const coffee = ()=> {return drinkMenus.filter(isCoffee)}


// 티
const isTea = (drinkMenus)=>{
    if(drinkMenus.categoryName === "티"){return true}
}
export const tea = ()=>{
    return drinkMenus.filter(isTea)
}


// 에이드, 주스 
const isAdeandJuice = (drinkMenus)=>{
    if(drinkMenus.categoryName === "에이드&주스"){return true}
}
export const adeandjuice = ()=>{
    return drinkMenus.filter(isAdeandJuice)
}


// 스무디 , 프라페
const isSmoothieandFrappe = (drinkMenus)=>{
    if(drinkMenus.categoryName === "스무디&프라페"){return true}
}
export const smoothieandfrappe = ()=>{
    return drinkMenus.filter(isSmoothieandFrappe)
}


// 디카페인
const isDcaffein = (drinkMenus)=>{
    if(drinkMenus.categoryName === "디카페인"){return true}
}
export const decaffeincoffee = ()=>{
    return drinkMenus.filter(isDcaffein)
}


// 음료 신메뉴
const isNewDrinks = (drinkMenus)=>{
    if(drinkMenus.categoryName === "음료신메뉴"){return true}
}
export const newdrinks = ()=>{
    return drinkMenus.filter(isNewDrinks)
}


// 디저트
const isDessert = (dessertMenus)=>{
    if(dessertMenus.categoryName === "디저트"){return true}
}
export const dessert = ()=>{
    return dessertMenus.filter(isDessert)
}



// 디저트 신메뉴
const isNewDessert = (dessertMenus)=>{
    if(dessertMenus.categoryName === "디저트신메뉴"){return true}
}
export const newdessert = ()=>{
    return dessertMenus.filter(isNewDessert)
}