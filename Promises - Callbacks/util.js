const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

//FORMA 3 Definitiva
async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))

  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()

//FORMA 2
//Forma de encadenar promesas corta o paralelismo
// var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(id => obtenerPersonaje(id))
// Promise
//   .all(promesas)
//   .then(personajes => console.log(personajes))
//   .catch(onError)


//FORMA 1
// Forma de encadenar promesas larga
// obtenerPersonaje(1)
//   .then((personaje) => {
//     console.log(`El personaje 1 es ${personaje.name}`);
//     return obtenerPersonaje(2)
//   })
//   .then((personaje) => {
//     console.log(`El personaje 2 es ${personaje.name}`);
//     return obtenerPersonaje(3)
//   })
//   .then((personaje) => {
//     console.log(`El personaje 3 es ${personaje.name}`);
//     return obtenerPersonaje(4)
//   })
//   .then((personaje) => {
//     console.log(`El personaje 4 es ${personaje.name}`);
//     return obtenerPersonaje(5)
//   })
//   .then((personaje) => {
//     console.log(`El personaje 5 es ${personaje.name}`);
//     return obtenerPersonaje(6)
//   })
//   .then((personaje) => {
//     console.log(`El personaje 6 es ${personaje.name}`);
//     return obtenerPersonaje(7)
//   })
//   .then((personaje) => {
//     console.log(`El personaje 7 es ${personaje.name}`);
//   })
//   .catch(onError)
