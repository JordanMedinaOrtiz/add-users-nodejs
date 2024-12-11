const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.DATABASE);

const User = mongoose.model('User', {
  username: String,
  edad: Number,
})

const crear = async () => {
  const user = new User({username: 'Jordan', edad: 19})
  const savedUser = await user.save()
  console.log(savedUser);
}

// crear();

const buscarTodo = async () => {
  const users = await User.find()
  console.log(users)
}

// buscarTodo();

const buscar = async () => {
  const user = await User.find({ username: 'Jordan' })
  console.log(user);
}

// buscar();

const buscarUno = async () => {
  const user = await User.findOne({username: 'Jordan'})
  console.log(user);
}

// buscarUno();

const actualizar = async () => {
  const user = await User.findOne({username: 'Jordan'})
  console.log(user);
  user.edad = 20
  await user.save()
}

// actualizar();

const eliminar = async () => {
  const user = await User.findOne({username: 'Jordan'})
  console.log(user)
  if(user) {
    await user.deleteOne()
  }
}

// eliminar();