const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})


app.get('/users', (req,res) => {
    User.find({}).then((users)=>{
        res.send(users);

    }).catch((e)=> {
       res.status(500).send()
    })
})

app.get('/users/:id', (req,res) => {
   const _id=req.params.id;

   
    User.findById(_id).then((required_user)=>{
        if(!required_user){
         return res.status(404).send()
        }
         res.send(required_user);
        

    }).catch((e)=> {
       res.status(500).send()
    })
})


app.get('/tasks', (req,res) => {
    Task.find({}).then((tasks)=>{
        res.send(tasks);

    }).catch((e)=> {
       res.status(500).send()
    })
})

app.get('/tasks/:id2', (req,res) => {
   const _id=req.params.id2;

   
    Task.findById(_id).then((required_task)=>{
        if(!required_task){
         return res.status(404).send()
        }
         res.send(required_task);
        

    }).catch((e)=> {
       res.status(500).send()
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})