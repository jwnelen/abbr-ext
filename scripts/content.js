console.log("Calling content.js");

const map = new Map();
map.set("vaatwasser", "vawa");
map.set("Vaatwasser", "Vawaa");
map.set("Kralingse Plas", "Krapla");
map.set("Kralingse plas", "Krapla");
map.set("kralingse plas", "Krapla");
map.set("aanbieding", "in de bonus");

// list of map keys
// var words = Object.keys(map);
var words = Array.from(map.keys());
var regex = new RegExp("(" + words.join("|") + ")", "g");
console.log(regex);

var replacer = function (value) {
  var res = map.get(value);
  return res;
};

// /(vaatwasser|Vaatwasser|Kralingse Plas)/g

// Getting part of the page text
function replaceRecursively(element) {
  if (element.childNodes.length) {
    element.childNodes.forEach((child) => replaceRecursively(child));
  } else {
    const cont = element.textContent;
    if (cont) {
      element.textContent = cont.replace(regex, replacer);
    }
  }
}

replaceRecursively(document.body);
abbr-ext