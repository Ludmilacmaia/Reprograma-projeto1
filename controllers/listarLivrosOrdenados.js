const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {

    const opcaoInicial = read.question('Deseja buscar por quantidade de paginas? S/N').toUpperCase()

    if (opcaoInicial === 'S'){

        //todos os livros serão mostrados por ordem crescente de número de páginas
        const paginas = livros.map(livro => livro.paginas)
    
        
        const paginasOrdenadas = paginas.sort((a,b) => a-b)
         console.table(paginasOrdenadas)
        

        
        }
        else{
            console.log('ok, fica para a próxima')
        }
    }



module.exports = listarLivrosOrdenados