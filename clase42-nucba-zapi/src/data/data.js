export const foodItems = [
  {
    id: 1,
    name: "Pizza piola",
    img: "/img/pizza1.jpg",
    section: "Pizzas",
    description: "La pizza más cheta del condado",
    price: 10000,
  },
  {
    id: 2,
    name: "Pizza Mix",
    img: "/img/pizza2.jpg",
    section: "Pizzas",
    description:
      "Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.",
    price: 100,
  },
  {
    id: 3,
    name: "Pizza Mix NO ES UNA COPIA",
    img: "/img/pizza2.jpg",
    section: "Pizzas",
    description:
      "Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.",
    price: 100,
  },
  {
    id: 4,
    name: "Burger Zarpada",
    img: "/img/burger1.jpg",
    section: "Burgers",
    description:
      "Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.",
    price: 100,
  },
  {
    id: 5,
    name: "Burger en la pera",
    img: "/img/burger2.jpg",
    section: "Burgers",
    description:
      "Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.",
    price: 100,
  },
  {
    id: 6,
    name: "Burger Zarpada NO ES UNA COPIA",
    img: "/img/burger1.jpg",
    section: "Burgers",
    description:
      "Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.",
    price: 100,
  },
  {
    id: 7,
    name: "Sambuchito 1",
    img: "/img/sanbu1.jpg",
    section: "Sambuchitos",
    description:
      "Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.",
    price: 100,
  },
  {
    id: 8,
    name: "Sambuchito 2",
    img: "/img/sanbu2.jpg",
    section: "Sambuchitos",
    description:
      "Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.",
    price: 100,
  },
  {
    id: 9,
    name: "Sambuchito 1 NO ES UNA COPIA",
    img: "/img/sanbu1.jpg",
    section: "Sambuchitos",
    description:
      "Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.",
    price: 100,
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }

  res[food.section] = [...res[food.section], food];

  return res;
}, {});
