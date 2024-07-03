const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 552233,
    lat: 14.3232,
    lng: 34.7867,
  },
};

// console.table(persona);

// Clon de un objeto
const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
