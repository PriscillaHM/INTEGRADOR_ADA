//SISTEMA DE GESTION DE BIBLIOTECA
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
console.log("Libros: ", libros);

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

console.log("Usuarios: " , usuarios);

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

// b) Implementar una función mostrarTodosLosUsuarios() que me 
// devuelva el array completo de usuarios

// c) Crear una función buscarUsuario(email) que devuelva la información 
// de un usuario dado su email.

// d) Implementar una función borrarUsuario(nombre, email) que elimine el 
// usuario seleccionado.

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

// 10. Comentando mi código

// a) Se tomará como último punto a evaluar la correcta utilización de 
// comentarios explicando paso por paso su código. 

// b) Deberán seccionar el código punto por punto y con una explicación 
// corta y simple de que hicieron en cada punto.