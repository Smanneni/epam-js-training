function rentalCarCost(Noofdays) {
    var dialyCarRent = 40,
        totalAmt, rentPerdays, rentDiscountperdays = {
            days: [3, 7],
            discount: [20, 50]
        };
    rentPerdays = (Noofdays * dialyCarRent);
    if (Noofdays < rentDiscountperdays["days"][0]) {
        totalAmt = rentPerdays
    } else if (Noofdays >= rentDiscountperdays["days"][0] && Noofdays < rentDiscountperdays["days"][1]) {
        totalAmt = (rentPerdays - (rentDiscountperdays["discount"][0]))
    } else {
        totalAmt = (rentPerdays - (rentDiscountperdays["discount"][1]))
    }

    return totalAmt

}
