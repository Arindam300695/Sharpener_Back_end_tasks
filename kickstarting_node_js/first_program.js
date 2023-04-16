let arr = ["apple", "oranges", " ", "mango", " ", "lemon"];
let changed = arr.map((item) => {
  if (item === " ") return "empty string";
  return item;
});
console.log(changed);
