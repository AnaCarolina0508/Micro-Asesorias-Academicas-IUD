const mongoose = require('mongoose');
const getConnection = async  () => {
    
    try{
        const url = 'mongodb://AsesoriasAcademicasIUD:12345678910@ac-yhwuvzw-shard-00-00.zzyeyld.mongodb.net:27017,ac-yhwuvzw-shard-00-01.zzyeyld.mongodb.net:27017,ac-yhwuvzw-shard-00-02.zzyeyld.mongodb.net:27017/?ssl=true&replicaSet=atlas-v4wfui-shard-0&authSource=admin&retryWrites=true&w=majority'
    await mongoose.connect(url); 
    
    console.log('Conexion exitosa')

    } catch (error){
        console.log(error);
    }
    
}

module.exports = {
    getConnection,
}