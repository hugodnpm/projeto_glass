const express = require('express')
const app = express()

// ------  APP do EXPRESS -----
app.set('view engine', 'ejs')

app.use(express.static('public'))

// ------ Páginas ejs -------
app.get('/', (request, response) => {
    response.render('home')
})
app.get('/especificacoes', (request, response) => {
    response.render('especificacoes')
})
app.get('/fotos', (request, response) => {
    response.render('fotos')
})
app.get('/multimidia', (request, response) => {
    response.render('multimidia')
})
app.get('/faleconosco', (request, response) => {
    response.render('faleconosco')
})
// ------ SERVIDOR -----
app.listen(3000,(err) => {
    if(err){
        console.log('Erro ao iniciar o servidor')
    }else{
        console.log('Servidor funcionando Normalmente')
    }
})