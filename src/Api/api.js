import cupons from "../json/coupon.json";

export function detailCoupon(code){
   return  cupons.filter(item =>item.cuponCode===code)[0];
}

