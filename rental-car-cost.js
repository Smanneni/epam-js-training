function rentalCarCost(Noofdays) {
var DialyCarRent="$40";
var RentDiscountperdays = {
    days: [3,7],
    discount: ["$20","$50"]
};
var TotalAmt;
if(Noofdays<RentDiscountperdays["days"][0])
{
 TotalAmt=(Noofdays*parseInt(DialyCarRent.slice(1)))
}
else if(Noofdays>=RentDiscountperdays["days"][0] && Noofdays<RentDiscountperdays["days"][1])
{
 TotalAmt=((Noofdays*parseInt(DialyCarRent.slice(1)))-parseInt(RentDiscountperdays["discount"][0].slice(1)))
}
else
{
 TotalAmt=((Noofdays*parseInt(DialyCarRent.slice(1)))-parseInt(RentDiscountperdays["discount"][1].slice(1)))
}

return TotalAmt
  
}
