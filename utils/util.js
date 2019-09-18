/* 1. General */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Llenado de Elementos
// const myArray = [...ArrayExistente]
// Cambiar de contexto al this de una funcion
// .bind(this)
/* 2. Funciones */
// Ejecutar una funcion bindeandola
// miFunction.call( this  ,  args )
// miFunction.apply( this, [args] )
// Ejecutar una funcion destructurando un objeto
// const persona = { nombre: 'jorge' , edad: 24 }
// function persona( {edad} ) {}
// funciones asincronicas
// el async indica que una funcion es asyncrona: Esto quiere decir que no se ejecutara hasta la carga total del DOM 
// y entrara en la cola de peticiones.
// con el AWAIT esperamos hasta que nos responda dicha petición
// async function () { await }
// async function () { await Promises.all(promesas) }
/* 3. Arrow functions */
// Declaración con return entre corchetes
// const fnArrow = () => {}
// con return en una sola linea
// const fnArrow = () => varRetornable
// con 1 solo parametro
// const fnArrow = parametro => varRetornable
/* 4. Array functions */
// Recorrer arreglo y modificar
// .map()
// Llenar array
// .fill()
// Filtrar un array
// .filter()
// Reducir el array a un solo valor
// .reduce()
/* 5. Promises */
// Creación
// const miPromesa = new Promise( (resolve, reject) => { ... } )
// Obtener resultado exitoso
// miPromesa.then()
// Obtener resultado de error
// miPromesa.catch()
// Encadenar promesas
// const miPromesa = new Promise ( (resolve,reject) => { ...resolve(data) } )
// miPromesa.then((data) => { ... return miPromesa2() })
// .then((data) => miPromesa3()).then((data) => miPromesa4)...
// Ejecuta una lista de promesas
// Promise.all()
// const persona = { nombre: 'Sacha' }
// persona === { nombre: 'Sacha' } 
// const persona = { nombre: 'jorge' , edad: 24 }
// function persona( {edad} ) {
//   console.log(edad)
// }
// TYPES UNION
// type myType = string | number
// const hol: myType = "as"
// INTERFACES 
// interface interface1 {
//   prop1: number
// }
// interface interface2 {
//   prop1: number
//   prop2: number
//   prop3: number
// }
// type InterfaceMix = interface1 | interface2
// TYPES INTERSECTION
// const miInterface: InterfaceMix = {
//   prop1: 3
// }
// type InterfaceMix2 = interface1 & interface2
// const miInterface2: InterfaceMix = {
//   prop1: 3,
//   prop3: 3
// }
//FUNCTION TYPES
// type callBackError = Error | null
// type callBack = (response: object, error: callBackError) => void
// type sendRequest = (cb: callBack) => void
// class myClass {
//   sendRequest: sendRequest = (cb: callBack): void => {
//     if (cb) {
//       cb({ message: 'Todo salio como lo esperaba' }, null)
//     }
//   }
//   myFunction() {
//     return this.sendRequest((response, error) => {
//       console.log(response)
//     })
//   }
//   myFunction2() {
//     return this.sendRequest((response, error) => {
//       console.log(response, error)
//     })
//   } 
// }
// console.log("Hola")
// const myCLase = new myClass
// myCLase.myFunction()
// myCLase.myFunction2()
// DECORATORS
function log(target, key) {
    console.log(key + " se ha llamado");
}
var persona = /** @class */ (function () {
    function persona(name) {
        this.name = name;
    }
    persona.prototype.sayMyName = function () {
        console.log(this.name);
    };
    __decorate([
        log
    ], persona.prototype, "sayMyName");
    return persona;
}());
var Jorge = new persona("Jorge");
Jorge.sayMyName();
