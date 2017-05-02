function rentalCarCost(Noofdays) {
    var DIALYCAR_RENT = 40,
        totalAmt, rentPerDays, rentDiscountperdays = {
            days: [3, 7],
            discount: [20, 50]
        };
    rentPerDays = (Noofdays * DIALYCAR_RENT);
    if (Noofdays < rentDiscountperdays["days"][0]) {
        totalAmt = rentPerDays
    } else if (Noofdays >= rentDiscountperdays["days"][0] && Noofdays < rentDiscountperdays["days"][1]) {
        totalAmt = (rentPerDays - (rentDiscountperdays["discount"][0]))
    } else {
        totalAmt = (rentPerDays - (rentDiscountperdays["discount"][1]))
    }

    return totalAmt

}
