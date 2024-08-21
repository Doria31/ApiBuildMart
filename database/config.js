const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connected to database')
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = dbConnect