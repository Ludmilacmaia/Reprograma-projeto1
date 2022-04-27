const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const opcaoInicial = read.question('Deseja buscar por livros ainda não lidos? S/N').toUpperCase()

    if (opcaoInicial === 'S'){
        //serão mostrados apenas os livros cuja resposta para "leu" seja false
        const naoLeu = livros.filter(livro => livro.leu === false)
        
         console.table(naoLeu)
        

            
        }
    }



module.exports = listarLivrosNaoLidos