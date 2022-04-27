
const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

const resposta = read.question(`
########## Menu #########

1 - CATEGORIA: Buscar livros por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Busca livros não lidos
5 - SAIR

Digite um numero[1-5]:

`)

switch (resposta){
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listarRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    default:
        console.log('fim do algoritmo')
        break
}
