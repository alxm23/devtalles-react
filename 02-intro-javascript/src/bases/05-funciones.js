// Funciones en JS
// const saludar = function (nombre) {
//   return `Hola, ${nombre}`;
// };

// Funcion flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar("Vegeta"));

console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "ELDOGOR123",
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformen a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABC567",
//     username: nombre,
//   };
// }

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  usename: nombre,
});

const usuarioActivo = getUsuarioActivo("Alexis");
console.log(usuarioActivo);
