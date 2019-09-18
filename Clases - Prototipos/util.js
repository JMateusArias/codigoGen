//Javascript no soporta las clases, maneja los prototipos que son objetos
//Las clases en javascript son prototipos

class Persona {

  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura > 1.80
  }

}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super()
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
  }
}

