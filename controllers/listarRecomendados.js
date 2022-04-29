const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const opcaoInicial = read.question('Deseja buscar somente livros recomendados? S/N').toUpperCase()

    
        if (opcaoInicial === 'S'){
            //serão mostrados apenas os livros cuja resposta para "leu" seja false
            const recomendados = livros.filter(livro => (livro.leu === true && livro.recomenda === true))
            
             console.table(recomendados)
            
    
                
            }
            else{
                console.log('ok, fica para a próxima')
            }
        }
    
    
    
    module.exports = listarRecomendados