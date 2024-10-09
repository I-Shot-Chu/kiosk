import coupons from "../json/coupon.json";

export function detailCoupon(code){
   return  coupons.filter(item =>item.couponCode===code)[0];
}

