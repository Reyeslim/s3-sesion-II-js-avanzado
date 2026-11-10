const peliculas = [
  {
    titulo: "Origen",
    fecha: 2010,
    genero: "Ciencia Ficción",
    rating: 8.8,
    disponible: true,
  },
  {
    titulo: "Parásitos",
    fecha: 2019,
    genero: "Drama",
    rating: 8.6,
    disponible: true,
  },
  {
    titulo: "El Faro",
    fecha: 2019,
    genero: "Terror",
    rating: 7.5,
    disponible: false,
  },
  {
    titulo: "Dune",
    fecha: 2021,
    genero: "Ciencia Ficción",
    rating: 8.0,
    disponible: true,
  },
  {
    titulo: "La Pianista",
    fecha: 2001,
    genero: "Drama",
    rating: 7.2,
    disponible: false,
  },
  {
    titulo: "Midsommar",
    fecha: 2019,
    genero: "Terror",
    rating: 7.1,
    disponible: true,
  },
]

// EJERCICIO 1: Function vs arrow function

// console.log(saludarTradicional("Reyes"))

// function saludarTradicional(nombre) {
//   return `Hola ${nombre}`
// }

// console.log(saludarTradicional("Guille"))

// const saludarArrow = (nombre) => {
//   return `Hola ${nombre}`
// }

// console.log(saludarArrow("Guille"))
// console.log(saludarArrow("Reyes"))

// // Sin parámetros

// const obtenerFecha = () => new Date().getFullYear()

// console.log(obtenerFecha())

// // Varios parámetros
// const calcularProgresoFinalización = (visto, total) =>
//   ((visto / total) * 100).toFixed(0) + "%"

// console.log(calcularProgresoFinalización(5, 10))

// const clasificarPeli = (nota) => {
//   if (nota >= 9) return "Obra maestra"
//   if (nota >= 7) return "Recomendada"
//   return "Para pasar el rato"
// }

// console.log(clasificarPeli(8.5))

// const obtenerFecha2 = () => new Date().getFullYear()

// const crearTarjeta = (titulo, rating) => ({
//   titulo: titulo,
//   rating: rating,
//   clasificacion: clasificarPeli(rating),
// })

// console.log(crearTarjeta("Dune", 8.8))

// function procesarReproduccion(tituloPeli, callback) {
//   console.log(`Cargando ${tituloPeli}...`)
//   callback(tituloPeli)
// }

// procesarReproduccion("Origen", (tituloPeli) => {
//   console.log(`Reproduciendo ${tituloPeli} en HD`)
// })

// EJERCICIO 2: forEach - Recorrer arrays

const generos = [
  "Acción",
  "Drama",
  "Comedia",
  "Terror",
  "Ciencia Ficción",
  "Documental",
]

// generos.forEach((genero, index) => {
//   console.log(`${index + 1}. ${genero}`)
// })

// peliculas.forEach((pelicula) => {
//   if (pelicula.disponible) {
//     console.log(
//       `${pelicula.titulo} - ${pelicula.fecha} - ${pelicula.disponible}`,
//     )
//   }
// })

// // EJERCICIO 3: map - Transformar arrays

// const titulos = peliculas.map((pelicula) => pelicula.titulo)
// console.log(titulos)
// console.log(peliculas)

const pelisPorRating = peliculas.map((pelicula) => {
  let clasificacion
  if (pelicula.rating >= 8.5) {
    clasificacion = "Obra maestra"
  } else if (pelicula.rating >= 7.5) {
    clasificacion = "Muy buena"
  } else {
    clasificacion = "Regulera"
  }
  return {
    titulo: pelicula.titulo,
    rating: pelicula.rating,
    clasificacion,
  }
})

pelisPorRating.forEach((peli) => {
  console.log(`${peli.clasificacion} - ${peli.titulo}: ${peli.rating}`)
})

// EJERCICIO 4: filter - Filtrar arrays

const disponibles = peliculas.filter((pelicula) => pelicula.disponible)
console.log(disponibles)

const cienciaFiccion = peliculas.filter(
  (pelicula) => pelicula.genero === "Ciencia Ficción",
)

console.log(cienciaFiccion)

// EJERCICIO 5: Combinar filter + map

const titulosTop = peliculas
  .filter((peli) => peli.disponible && peli.rating >= 8)
  .map((peli) => peli.titulo)

console.log("Títulos top disponibles:", titulosTop)

// EJERCICIO 6: find, some, every
// find: devuelve el primer elemento que cumple con la condición
// some: devuelve true si al menos uno de los elementos cumple con la condición
// every: devuelve true si todos cumplen la condición
const usuarios = [
  { nombre: "Sofía", plan: "Premium", activo: true, peliculasVistas: 42 },
  { nombre: "Miguel", plan: "Básico", activo: true, peliculasVistas: 15 },
  { nombre: "Carmen", plan: "Premium", activo: false, peliculasVistas: 78 },
  { nombre: "Daniel", plan: "Básico", activo: true, peliculasVistas: 3 },
  { nombre: "Lucía", plan: "Premium", activo: true, peliculasVistas: 61 },
]

// find - primer usuario premium activo

const userPremium = usuarios.find(
  (user) => user.plan === "Premium" && user.activo,
)

console.log("Primer usuario premium activo:", userPremium?.nombre)

// some - ¿hay algún usuario inactivo?

const hayInactivos = usuarios.some((user) => !user.activo)

console.log("¿Hay usuarios inactivos?", hayInactivos)

// some - más de 50 pelis vistas

const visionadoMas50Pelis = usuarios.some((user) => user.peliculasVistas > 50)
console.log("¿Hay usuarios que han visto más de 50 pelis?", visionadoMas50Pelis)

// every - ¿todos los usuarios tienen alguna peli vista?

const todosHanVistoPelis = usuarios.every((user) => user.peliculasVistas > 0)
console.log("¿Todos han visto al menos 1 peli?", todosHanVistoPelis)

// EJERCICIO 7: reduce - Acumular valores

// let suma = 0
const totalVistas = usuarios.reduce((suma, user) => {
  return suma + user.peliculasVistas
}, 0)

console.log("Total películas vistas por todos los usuarios", totalVistas)

// cuantos usuarios premium hay

const totalPremium = usuarios.reduce((contador, user) => {
  return user.plan === "Premium" ? contador + 1 : contador
}, 0)

console.log("Usuarios premium:", totalPremium)
