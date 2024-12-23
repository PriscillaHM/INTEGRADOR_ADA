//SISTEMA DE GESTION DE BIBLIOTECA
//GRUPO 7: 
//Priscilla Hurtado
//Liz Quero Batista
//Aura Morales García
//Paso 0.- Colocamos la constante prompt para que los usuarios puedan ingresar datos
//en nuestro programa ya sea en letras o numeros.
const prompt = require("prompt-sync")({ sigint: true });

// 1. Estructura del proyecto

// a) Array donde se guardan los libros.
// Paso 1.- Creamos un array llamado objeto que contenga datos de diez libros (id (número) 
// , título (string), autor (string), año (número), género (string),
//  disponible (booleano: true o false).)

let libros = [ 
    {id: 1, titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, genero: "Ciencia ficcion", disponible: true }, //colocamos {} para que los datos a consultar sean por libro
    {id: 2, titulo: "Cumbres borrascosas", autor: "Emily Bronte", anio: 1847, genero: "Romance", disponible: false },
    {id: 3, titulo: "Mujercitas", autor: "Louisa May Alcott", anio: 1868, genero: "Ficcion", disponible: false },
    {id: 4, titulo: "Dracula", autor: "Bram Stoker", anio: 1897, genero: "Terror", disponible: false },
    {id: 5, titulo: "La tregua", autor: "Mario Benedetti", anio: 1960, genero: "Romance", disponible: true },
    {id: 6, titulo: "Dune", autor: "Frank Herbert", anio: 1965, genero: "Ciencia ficcion", disponible: false },
    {id: 7, titulo: "Carrie", autor: "Stephen King", anio: 1974, genero: "Terror", disponible: true },
    {id: 8, titulo: "El hombre en busca de sentido", autor: "Viktor Frankl", anio: 1946, genero: "Psicologia", disponible: true },
    {id: 9, titulo: "Ensayo sobre la ceguera", autor: "Jose Saramago", anio: 1995, genero: "Distopia", disponible: false },
    {id: 10, titulo: "Un mundo feliz", autor: "Aldous Huxley", anio: 1932, genero: "Distopia", disponible: true},
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
function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, anio, genero, disponible: true };
    libros.push(nuevoLibro);
    console.log("Libro agregado con éxito:", nuevoLibro);
}

// b) Función buscarLibro(criterio, valor) que permita buscar 
// libros por título, autor o género utilizando el algoritmo de búsqueda 
// lineal.
function buscarLibro(criterio, valor) {
    const resultado = libros.filter(libro => libro[criterio]?.toLowerCase() === valor.toLowerCase());
    if (resultado.length > 0) {
        console.log("Libros encontrados:", resultado);
    } else {
        console.log("No se encontraron libros con ese criterio.");
    }
}

// c) Función ordenarLibros(criterio) que ordena los libros 
// por título o año utilizando el algoritmo de ordenamiento burbuja
// y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                const temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }
    console.log("Libros ordenados por", criterio, ":", libros);
}

// d) función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id);
    if (indice !== -1) {
        const libroEliminado = libros.splice(indice, 1);
        console.log("Libro eliminado:", libroEliminado[0]);
    } else {
        console.log("No se encontró un libro con ese ID.");
    }
}

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
        usuarios.splice(indice,1);
        console.log(`Usuario eliminado: nombre ${nombreBorrar}, email ${emailBorrar}`);
    }
}

// 4. Sistema de Préstamos

// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque 
// un libro como no disponible y lo agregue a la lista de libros prestados 
// del usuario.
//Funcion que muestra los libros disponibles
let mostrarLibrosDisponibles = () => {
    const librosDisponibles = libros.filter(libro => libro.disponible);

    console.log("Libros disponibles:");
    librosDisponibles.forEach(libro => {
        console.log(`ID: ${libro.id}, Nombre: ${libro.titulo}`);
    });
}

let prestarLibro = (idLibro, idUsuario) => {
    //Buscamos el libro para prestar
    let libroPrestar = libros.find(libro => libro.id == idLibro);
    //Buscamos el usuario que solicita el libro
    let usuarioPrestamo = usuarios.find(usuario => usuario.id == idUsuario);
    //Verificamos que el libro este disponible
    if(libroPrestar.disponible == false){
        console.log(`Lo sentimos, el libro ${libroPrestar.nombre} no se encuentra disponible`);
    } else{
        libroPrestar.disponible = false;
        usuarioPrestamo.libros.push(parseFloat(idLibro));
        console.log('Prestamo autorizado, aculmente cuenta con: ' + usuarioPrestamo.libros.length + ' libro(s) en prestamo.');
    }
}

// b) Implementar una función devolverLibro(idLibro, idUsuario) que 
// marque un libro como disponible y lo elimine de la lista de libros 
// prestados del usuario.
let devolverLibro = (idLibro, idUsuario) =>{
    //Buscamos el libro para devolver
    let libroPrestar = libros.find(libro => libro.id == idLibro);
    //Buscamos el usuario que regresa el libro
    let usuarioPrestamo = usuarios.find(usuario => usuario.id == idUsuario);

    libroPrestar.disponible = true;

    let indice = usuarioPrestamo.libros.findIndex(libro => libro === idLibro);
    usuarioPrestamo.libros.splice(indice,1);
    console.log(`Gracias por delvolver el libro ${libroPrestar.titulo}`);
}

// 5. Reportes
// Paso 1.- a) Crear una función generarReporteLibros()
let generarReporteLibros = () => { //notita:usamos un arrow para simplificar
    const titulos = libros.map(libro => libro.titulo); //usamos map. para que se muestren solo titulos (decidimos usar arrow => en toda la sección para no utilizar la palabra function y acortar codigo) e imprimimos
    console.log (`Dato 1.-Los libros dentro del reporte son:  ${titulos}`);

    const totalLibros = libros.length; // definimos cuantos libros hay y colocamos ese dato dentro de nuestra funcion
    console.log (`Dato 2.-La cantidad total de libros es:  ${totalLibros}`);

    const librosPrestados = libros.filter(libro => !libro.disponible); //revisamos que libros se han prestado, usamos !para que busque los false en el dato de disponibilodad
    console.log("Dato 3.- Los libros prestados a usuarios actualmente son: ", librosPrestados); //imprimimos

    const librosGenero = libros.reduce((total, libro) => //revisamos cuantos libros existen por genero usando reduce. 
    {total[libro.genero] = (total[libro.genero] // buscamos en cada linea del array libros original, se inicia de cero y si ya hay un valor previo se suma 1 (|| 0) + 1)
    || 0) + 1; return total;}, {}); //notita: el dato "total" inicia como un objeto vacio para poder contener los diversos generos

    //imprimimos
    console.log("Dato 4.- Los generos son: " , librosGenero);

    const { libroViejo, libroNuevo } = libros.reduce((total, libro) => { //vamos a comparar antiguedad de libros para conocer el que tiene mayor y menor, 
    // usamos reduce. para que evalue todos los que contiene el array libros
        if (libro.anio < total.libroViejo.anio) {  //usamos if para evaluar dos condiciones excluyentes, si libro analizado es más antiguo que libroViejo se cumple la condicion
            total.libroViejo = libro; // y se actualiza automaticamente
        } else if (libro.anio > total.libroNuevo.anio) { //como son condiciones excluyentes (no peude ser mayor y menor al mismo tiempo) usamos else if
            total.libroNuevo = libro; // Misma logica anterior se revisa si el libro es más nuevo que el que reduce. reviso en linea del array libros y de ser así se actualiza
        }
        return total; // Regresemos el valor total de antiguedad actualizado con la info del array libros del inicio
    }, {
        libroViejo: libros[0], // notita: De inicio se asume que el primer libro es el más viejo y reduce. va modificando, lo mismo con libroNuevo
        libroNuevo: libros[0]
    }); // imprimimos
    console.log("Dato 5.- El libro más viejo es: " , libroViejo);
    console.log("Dato 6.- El libro más reciente es: " ,  libroNuevo);
        
}
//generarReporteLibros(); //Ejecutamos el reporte (*notita para que no corra al final del codigo lo puse como texto)


// 6. Identificación Avanzada de libros

// a) Implementar una función librosConPalabrasEnTitulo() que identifique 
// y muestre todos los libros cuyo título contiene más de una palabra
// (no títulos que contengan números ni otros caracteres).

function librosConPalabrasEnTitulo() {
    // Filtramos libros que cumplan las dos condiciones:
    const librosFiltrados = libros.filter(libro => {
        const soloLetrasYEspacios = /^[a-zA-Z\s]+$/.test(libro.titulo); // Solo letras y espacios
        const masDeUnaPalabra = libro.titulo.trim().split(" ").length > 1; // Más de una palabra
        return soloLetrasYEspacios && masDeUnaPalabra;
    });

    // Obtenemos solo los títulos de los libros filtrados
    const titulos = librosFiltrados.map(libro => libro.titulo);

    // Mostramos en la consola los títulos encontrados
    console.log("Libros con títulos que cumplen las condiciones:", titulos);

    // Retornamos el array con los títulos para uso adicional
    return titulos;
}

// b) La función debe devolver un array con los títulos y mostrarlos en consola.
// Esto ya está cubierto en la implementación de la función anterior.

// 7. Cálculos Estadísticos

// a) Desarrollar una función calcularEstadisticas() que utilice el objeto 
// Math para calcular y mostrar:
// ✓ Promedio de años de publicación de los libros.
// ✓ Año de publicación más frecuente.
// ✓ Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas() {
    // Paso 1: Crear un array con los años de publicación de los libros
    const anios = libros.map(libro => libro.anio);

    // Paso 2: Calcular el promedio de años
    const promedio = anios.reduce((sum, anio) => sum + anio, 0) / anios.length;

    // Paso 3: Calcular el año más frecuente
    const frecuencia = anios.reduce((contador, anio) => {
        contador[anio] = (contador[anio] || 0) + 1; // Contamos cuántas veces aparece cada año
        return contador;
    }, {});
    const anioFrecuente = Object.keys(frecuencia).reduce((a, b) => frecuencia[a] > frecuencia[b] ? a : b);

    // Paso 4: Calcular la diferencia entre el libro más antiguo y el más nuevo
    const diferencia = Math.max(...anios) - Math.min(...anios);

    // Paso 5: Mostrar los resultados en consola
    console.log("Promedio de años de publicación:", promedio.toFixed(2)); // Limitamos a 2 decimales
    console.log("Año más frecuente de publicación:", anioFrecuente);
    console.log("Diferencia entre el libro más antiguo y el más nuevo:", diferencia);
}

// 8. Manejo de Cadenas

// a) Crear una función normalizarDatos() que utilice métodos de strings 
// para:
// ✓ Convertir todos los títulos a mayúsculas.
// ✓ Eliminar espacios en blanco al inicio y final de los nombres de 
// autores.
// ✓ Formatear los emails de los usuarios a minúsculas.
let normalizarDatos = () =>{
    //Convertir todos los títulos a mayúsculas.
    //Eliminar espacios en blanco al inicio y final de los nombres de autores.
    libros.forEach(libro => {
        libro.titulo = libro.titulo.trim().toUpperCase();
        libro.autor = libro.autor.trim();
    });

    //Formatear los emails de los usuarios a minúsculas.
    usuarios.forEach(usuario =>{
        usuario.email = usuario.email.toLowerCase();
    });
    
    console.log("Libros formateados:", libros);
    console.log("Usuarios formateados:", usuarios);
}

// 9. Interfaz de Usuario por Consola

// Implementamos una función menuPrincipal() que muestre un menú de 
// opciones al usuario y permita interactuar con el sistema utilizando 
// prompt(), imprimimos para que el usuario pueda seleccionar una opción de accióna realizar (las acciones corresponden a las secciones del codigo)

function menuPrincipal() {
    let opcion;
    do {
        console.log("\n=== Menú Principal ===");
        console.log("1. Agregar Libro"); 
        console.log("2. Buscar Libro");
        console.log("3. Ordenar Libros");
        console.log("4. Borrar Libro");
        console.log("5. Registrar Usuario");
        console.log("6. Mostrar Usuarios");
        console.log("7. Prestar Libro");
        console.log("8. Devolver Libro");
        console.log("9. Generar Reporte de Libros");
        console.log("10. Libros con Palabras en Títulos");
        console.log("11. Calcular Estadísticas");
        console.log("12. Salir");
// Para construir el usamos las estructuras de control if, switch y ciclos, 
// se enlazan con todos los apartados que construimos en el codigo

        opcion = prompt("Seleccione una opción: ");//si el usuario selecciona el numero 1 se le 
        // desplegara el punto 1 que imprimimos en el bloque anterior "agregar libros", y subsecuentemente hasta la opción 12.
        switch (opcion) {
            case "1":
                const id = parseInt(prompt("ID: "));
                const titulo = prompt("Título: ");
                const autor = prompt("Autor: ");
                const anio = parseInt(prompt("Año: "));
                const genero = prompt("Género: ");
                agregarLibro(id, titulo, autor, anio, genero);
                break;
            case "2":
                const criterio = prompt("Buscar por (titulo, autor, genero): ");
                const valor = prompt("Valor de búsqueda: ");
                buscarLibro(criterio, valor);
                break;
            case "3":
                const criterioOrden = prompt("Ordenar por (titulo, anio): ");
                ordenarLibros(criterioOrden);
                break;
            case "4":
                const idBorrar = parseInt(prompt("ID del libro a borrar: "));
                borrarLibro(idBorrar);
                break;
            case "5":
                const nombreUsuario = prompt("Nombre: ");
                const emailUsuario = prompt("Email: ");
                registrarUsuario(nombreUsuario, emailUsuario);
                break;
            case "6":
                mostrarTodosLosUsuarios();
                break;
            case "7":
                const idLibroPrestar = parseInt(prompt("ID del libro: "));
                const idUsuarioPrestar = parseInt(prompt("ID del usuario: "));
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;
            case "8":
                const idLibroDevolver = parseInt(prompt("ID del libro: "));
                const idUsuarioDevolver = parseInt(prompt("ID del usuario: "));
                devolverLibro(idLibroDevolver, idUsuarioDevolver);
                break;
            case "9":
                generarReporteLibros();
                break;
            case "10":
                librosConPalabrasEnTitulo();
                break;
            case "11":
                calcularEstadisticas();
                break;
            case "12":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "12");
}

menuPrincipal(); //ejecutamos menu principal.