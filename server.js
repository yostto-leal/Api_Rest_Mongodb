import express from 'express'

const app = express()
app.use(express.json())

const users =[]

app.post('/usuarios', (req, res) => { 

    users.push (req.body)

    res.status (201).json(req.body)
} )

app.get('/usuarios', (req, res) => {
    res.status (200).json(users)

})

app.listen(3000)

/*  objetivo :
 criar nossa API de usuarios

 -criar um usuarios
 -listar todos usuarios
 -editar um usuarios
 deletar um usuarios
 o1qgCVatn0oD0qj1


 */