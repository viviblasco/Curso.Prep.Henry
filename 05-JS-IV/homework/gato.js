function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    var gato = {
        nombre: nombre,
        edad: edad,
        meow: function() {
            'Mi nombre es ' + this.nombre + 'tengo' + this.edad + ' ... Meow!'


        }
    };
    return gato;
}
const minina = new crearGato(minina, 5);
console.log(minina);