let isOver18 = true;
let hasCriminalBlacklist = true;

let isAllow;

isOver18 = !true;
hasCriminalBlacklist = !true;

isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
