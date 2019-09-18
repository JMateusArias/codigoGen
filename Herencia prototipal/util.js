//Javascript no soporta las clases, maneja los prototipos que son objetos
//Todas las funciones tiene el atributo prototype

function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () { }
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// EL prototype es el acceso de las propiedades de un objeto, podemos extender dichas propiedades
// con el .this accedemos a las propiedades de dicho objeto, no se puede usar un arrow function => () 
// debido a que el acceso de .this sería gobal osea this sería = a window.
Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.80
}

//var jorge = new Persona('Jorge', 'Mateus', 1.80)

//Herencia prototipal

function Desarrollador(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

heredaDe(Desarrollador, Persona);


Desarrollador.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

