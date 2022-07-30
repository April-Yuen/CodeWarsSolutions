// The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let current = new Date(currentDate)
    let exp = new Date(expirationDate)
    if(enteredCode === correctCode && exp >= current){
      return true
    }else{
      return false
    }
}