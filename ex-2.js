// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || (isPlatinum);

console.log(hasPromotion);

lastMonthPaidMoreThan4000 = 2>1;
isWeekday = 3>1;
hasBoughtProductFromITCategory = 2>3;
hasAttendedDiscountEvent = 4>2;
isPlatinum = 3>2;

console.log(hasPromotion);