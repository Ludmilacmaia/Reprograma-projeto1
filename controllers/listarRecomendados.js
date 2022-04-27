// const livros = require('../database')
// const read = require('readline-sync')

// const listarRecomendados = () => {
//     const opcaoInicial = read.question('Deseja buscar somente livros recomendados? S/N').toUpperCase()

//     if (opcaoInicial === 'S'){
//         //todas as categorias serão mostradas no console
//         const categorias = livros.map(livro => livro.categoria)
//         console.table(categorias)

//         const inputCategoria = read.question('Digite uma categoria conforme a tabela acima')

//         const confirmacao = read.question('Tem certeza? S/N)').toUpperCase()

//         if(confirmacao ==='S'){
//             const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
//             console.table(livrosFiltrados)
            
//         }
//     }
// }


// module.exports = buscarLivros