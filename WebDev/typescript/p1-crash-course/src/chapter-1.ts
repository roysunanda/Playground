// function hello(name: string) {
//   console.log(name);
// }

// hello(`sandy`);

// Enum
// enum Size {
//   small = 1,
//   medium,
//   large,
// }

// let mySize: Size = Size.small;

// console.log(`helloooooooo world`);

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];
  address: Address;
};
