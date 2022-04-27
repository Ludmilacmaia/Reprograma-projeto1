const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const opcaoInicial = read.question('Deseja buscar por quantidade de páginas? S/N').toUpperCase()

    if (opcaoInicial === 'S'){
        //todas os livros serão mostrados por ordem crescente de número de páginas
        const paginas = livros.map(livro => livro.paginas)
        // console.table(paginas)
        
        const paginasOrdenadas = paginas.sort((a,b) => a-b)
         console.table(paginasOrdenadas)
        

        const inputPaginas = read.question('Digite o numero de paginas conforme a tabela acima')

        const confirmacao = read.question('Tem certeza? S/N)').toUpperCase()

        if(confirmacao ==='S'){
            const livrosFiltrados = livros.filter(livro => livro.paginas === inputPaginas)
            console.table(livrosFiltrados)
            
        }
    }
}


module.exports = listarLivrosOrdenados