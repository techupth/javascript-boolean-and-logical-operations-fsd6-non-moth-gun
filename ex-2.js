// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

lastMonthPaidMoreThan4000 = 4001;
isWeekday = "friday";
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

hasPromotion = (lastMonthPaidMoreThan4000 > 4000
                && (isWeekday == "monday" 
                    || isWeekday == "tuesday" 
                    || isWeekday == "wednesday" 
                    || isWeekday == "thursday" 
                    || isWeekday == "friday") 
                && hasBoughtProductFromITCategory == false 
                && hasAttendedDiscountEvent == false) 
                || (isPlatinum == true)
console.log(hasPromotion);
