//SISTEMA DE GESTION DE BIBLIOTECA
//GRUPO 7 
//Paso 0.- Colocamos la constante prompt para que los usuarios puedan ingresar datos
//en nuestro programa ya sea en letras o numeros.
const prompt = require("prompt-sync")({ sigint: true });

// 1. Estructura del proyecto

// a) Array donde se guardan los libros.
// Paso 1.- Creamos un array llamado objeto que contenga datos de diez libros (id (número) 
// , título (string), autor (string), año (número), género (string),
//  disponible (booleano: true o false).)

let libros = [ 
    {id: 1, título: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953, género: "Ciencia ficcion", disponible: true }, //colocamos [] para que los datos a consultar sean por libro
    {id: 2, título: "Cumbres borrascosas", autor: "Emily Bronte", año: 1847, género: "Romance", disponible: true },
    {id: 3, título: "Mujercitas", autor: "Louisa May Alcott", año: 1868, género: "Ficcion", disponible: false },
    {id: 4, título: "Dracula", autor: "Bram Stoker", año: 1897, género: "Terror", disponible: false },
    {id: 5, título: "La tregua", autor: "Mario Benedetti", año: 1960, género: "Romance", disponible: false },
    {id: 6, título: "Dune", autor: "Frank Herbert", año: 1965, género: "Ciencia ficcion", disponible: true },
    {id: 7, título: "Carrie", autor: "Stephen King", año: 1974, género: "Terror", disponible: false },
    {id: 8, título: "El hombre en busca de sentido", autor: "Viktor Frankl", año: 1946, género: "Psicologia", disponible: true },
    {id: 9, título: "Ensayo sobre la ceguera", autor: "Jose Saramago", año: 1995, género: "Distopia", disponible: true },
    {id: 10, título: "Un mundo feliz", autor: "Aldous Huxley", año: 1932, género: "Distopia", disponible: false },
];

// Paso 2.- Imprimimos para que se muestre nuestro array de libros
//console.log("Libros: ", libros);

// b) Array donde se guardan los usuarios.
// Paso 3.- Creamos un array con datos (id (número), nombre (string), email (string), 
// librosPrestados "array de ids de libros".) de al menos cinco usarios.

let usuarios = [
    {id: 1, nombre: "Berenice Castro", email: "berenice.castro@gmail.com", libros: [3]},
    {id: 2, nombre: "Liz Quero", email: "liz.quero@gmail.com", libros: [9]},
    {id: 3, nombre: "Priscila Hurtado", email: "priscila.hurtado@gmail.com", libros: [4]},
    {id: 4, nombre: "Aura Garcia", email: "aura.garcia@gmail.com", libros: [2]},
    {id: 5, nombre: "Daniela Mendez", email: "daniela.mendez@gmail.com", libros: [6] },
]

//Paso 4.- Imprimimos

//console.log("Usuarios: " , usuarios);

// 2. Funciones de Gestion de Libros 

// a) Funcion agregarLibro (id, titulo, autor, anio, genero) que agraga un nuevo libro al 
// array de libros.

// b) Función buscarLibro(criterio, valor) que permita buscar 
// libros por título, autor o género utilizando el algoritmo de búsqueda 
// lineal.

// c) Función ordenarLibros(criterio) que ordena los libros 
// por título o año utilizando el algoritmo de ordenamiento burbuja
// y luego muestre los libros ordenados en la consola.

// d) función borrarLibro(id) que elimine el libro que se le pase por parámetro.

// 3. Gestion de Usuarios 

// a) Implementar una función registrarUsuario(nombre, email) que 
// agregue un nuevo usuario al array usuarios.
let registrarUsuario = (nombre, email) =>{
    if(!nombre || !email){
        console.log('El nombre y el usuario son obligatorios. Intente nuevamente.');
        return;
    }

    //Creamos el nuevo usuario
    const nuevoUsuario = {nombre, email};

    //Agregamos el usuario al array
    usuarios.push(nuevoUsuario);


    console.log('Usuario registrado con exito: ', nuevoUsuario);
}

// b) Implementar una función mostrarTodosLosUsuarios() que me 
// devuelva el array completo de usuarios
let mostrarTodosLosUsuarios = () => {
    //Si no usuarios registrados
    if (usuarios.length === 0) {
        console.log("No hay usuarios registrados.");
        return;
    }

    console.log("Usuarios registrados:");
    //Recore el array e imprime los usuarios registrados
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nombre: ${usuario.nombre}, Email: ${usuario.email}`);
    });
}

// c) Crear una función buscarUsuario(email) que devuelva la información 
// de un usuario dado su email.
let buscarUsuario = (emailBuscar) =>{
    //Buscamos en el array el email proporcionado
    let indice = usuarios.find(usuario => usuario.email == emailBuscar);
    //En caso de que no encuentre el usuario
    if(indice == undefined){
        console.log(`Usuario con email el ${emailBuscar} no ha sido encontrado`);
    } else{ //En caso de encontrar el usuario
       console.log(`Usuario encontrado: nombre ${indice.nombre}, email ${indice.email}`);
    }
}

// d) Implementar una función borrarUsuario(nombre, email) que elimine el 
// usuario seleccionado.
let borrarUsuario = (nombreBorrar, emailBorrar) =>{
    //Buscamos en el array el email proporcionado
    let indiceNombre = usuarios.find(usuario => usuario.nombre == nombreBorrar);
    let indiceEmail = usuarios.find(usuario => usuario.email == emailBorrar);
    let indice = usuarios.findIndex(usuario => usuario.email === emailBorrar);
    //En caso de que no encuentre el usuario
    if(indiceNombre.id != indiceEmail.id){
        console.log(`Usuario con el nombre ${nombreBorrar} y el email el ${emailBuscar} no ha sido encontrado`);
    } else{ //En caso de encontrar el usuario
        //Usuario que se borrara
        const usuarioABorrar = usuarios.splice(indice,1);
        console.log(`Usuario eliminado: nombre ${nombreBorrar}, email ${emailBorrar}`);
    }
}

// 4. Sistema de Préstamos

// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque 
// un libro como no disponible y lo agregue a la lista de libros prestados 
// del usuario.

// b) Implementar una función devolverLibro(idLibro, idUsuario) que 
// marque un libro como disponible y lo elimine de la lista de libros 
// prestados del usuario.

// 5. Reportes
// a) Crear una función generarReporteLibros() que utilice métodos 
// avanzados de arrays (.map(), .filter(), .reduce()) para generar un 
// reporte con la siguiente información:
// ✓ Cantidad total de libros.
// ✓ Cantidad de libros prestados.
// ✓ Cantidad de libros por género.
// ✓ Libro más antiguo y más nuevo.

// 6. Identificación Avanzada de libros

// a) Implementar una función librosConPalabrasEnTitulo() que identifique 
// y muestre todos los libros cuyo título contiene más de una palabra
// (no títulos que contengan números ni otros caracteres).

// b) La función debe devolver un array con los títulos de esos libros y 
// mostrarlo en la consola.

// 7. Cálculos Estadísticos

// a) Desarrollar una función calcularEstadisticas() que utilice el objeto 
// Math para calcular y mostrar:
// ✓ Promedio de años de publicación de los libros.
// ✓ Año de publicación más frecuente.
// ✓ Diferencia en años entre el libro más antiguo y el más nuevo.

// 8. Manejo de Cadenas

// a) Crear una función normalizarDatos() que utilice métodos de strings 
// para:
// ✓ Convertir todos los títulos a mayúsculas.
// ✓ Eliminar espacios en blanco al inicio y final de los nombres de 
// autores.
// ✓ Formatear los emails de los usuarios a minúsculas.

// 9. Interfaz de Usuario por Consola

// a) Implementar una función menuPrincipal() que muestre un menú de 
// opciones al usuario y permita interactuar con el sistema utilizando 
// prompt().
// b) El menú debe incluir opciones para todas las funcionalidades 
// anteriores y utilizar estructuras de control (if, switch, ciclos) para 
// manejar la lógica.


let menuPrincipal = () =>{
    let opcion;
    do {
        console.log("\n=== Menú ===");
        console.log("5. Registrar usuario");
        console.log("6. Mostrar usuarios");
        console.log("7. Buscar usuario");
        console.log("8. Borrar usuario");
        console.log("3. Salir");
        opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
            case "5":
                const nombre = prompt("Ingrese el nombre del usuario: ");
                const email = prompt("Ingrese el email del usuario: ");
                registrarUsuario(nombre, email);
                break;
            case "6":
                mostrarTodosLosUsuarios();
                break;
            case "7":
                const emailBuscar = prompt('Ingrese el email del usuario que desea buscar: ');
                buscarUsuario(emailBuscar);
                break;
            case "8":
                const nombreBorrar = prompt('Ingrese el nombre del usuario que desea borrar: ');
                const emailBorrar = prompt('Ingrese el email del usuario que desea borrar: ');
                borrarUsuario(nombreBorrar,emailBorrar);
                break;
            case "3":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "3");
}

menuPrincipal();

// 10. Comentando mi código

// a) Se tomará como último punto a evaluar la correcta utilización de 
// comentarios explicando paso por paso su código. 

// b) Deberán seccionar el código punto por punto y con una explicación 
// corta y simple de que hicieron en cada punto.