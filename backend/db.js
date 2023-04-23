const mongoose = require('mongoose')

const url = "mongodb://soumya9589:dKPauzDoIoipIJu4@ac-o0tz0wt-shard-00-00.xo0zslr.mongodb.net:27017,ac-o0tz0wt-shard-00-01.xo0zslr.mongodb.net:27017,ac-o0tz0wt-shard-00-02.xo0zslr.mongodb.net:27017/Quoraclonemern?ssl=true&replicaSet=atlas-3n0bsg-shard-0&authSource=admin&retryWrites=true&w=majority"

//    dKPauzDoIoipIJu4 soumya9589

module.exports.connect = () => {
    mongoose.connect(url,{
    }).then(()=>{
        console.log('mongodb connected successfullly')
    }).catch((error)=>{
        console.log('error', error)
    })
}