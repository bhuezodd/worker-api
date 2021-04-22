import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/worker",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Connect'))
    .catch(err=> console.log('Error'))
