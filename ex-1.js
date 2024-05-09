let isOver18 = true;
let hasCriminalBlacklist = true;

let isAllow = isOver18 && hasCriminalBlacklist;

console.log(isAllow);

isOver18 = 3 > 1;
hasCriminalBlacklist = 4 > 2;

console.log(isAllow);