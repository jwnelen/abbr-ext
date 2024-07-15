console.log("Calling content.js");

const map = new Map();
map.set("vaatwasser", "vawa");
map.set("Vaatwasser", "Vawaa");
map.set("Kralingse Plas", "Krapla");
map.set("Kralingse plas", "Krapla");
map.set("kralingse plas", "Krapla");
map.set("aanbieding", "in de bonus");

var words = Array.from(map.keys());
var regex = new RegExp("(" + words.join("|") + ")", "g");

var replacer = function (value) {
  var res = map.get(value);
  return res;
};

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
