var sandwich = {
  pan: "masa madre",
  proteína: "asado",
  queso: "queso suizo lacey",
  salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"],
};

console.log(sandwich);

function sandwichFactory(pan, proteína, queso, salsas) {
  var sandwich = {};
  sandwich.pan = pan;
  sandwich.proteína = proteína;
  sandwich.queso = queso;
  sandwich.salsas = salsas;
  return sandwich;
}

var s1 = sandwichFactory("trigo", "pavo", "provolone", [
  "mostaza",
  "cebolla frita",
  "rúcula",
]);
console.log(s1);

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
  var pizza = {};
  pizza.tipoCorteza = tipoCorteza;
  pizza.tipoSalsa = tipoSalsa;
  pizza.quesos = quesos;
  pizza.salsas = salsas;
  return pizza;
}

var pizza1 = pizzaOven(
  "estilo Chicago",
  "Tradicional",
  ["Mozarella"],
  ["Pepperoni", "Salchicha"]
);
var pizza2 = pizzaOven(
  "lanzada a mano",
  "marinara",
  ["mozzarella", "feta"],
  ["champiñones", "aceitunas", "cebollas"]
);
var pizza3 = pizzaOven(
  "lanzada a mano",
  "Tradicional",
  ["mozzarella"],
  ["Pepperoni", "res", "cebollas", "jamon"]
);
var pizza4 = pizzaOven(
  "Tradicional",
  "marinara",
  ["mozzarella"],
  ["champiñones", "aceitunas", "Maiz", "Res"]
);

console.log(pizza1, pizza2, pizza3, pizza4);
