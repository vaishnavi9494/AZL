const mongoose = require("mongoose");
//const env = require("../environment/environment");

//const mongoUri = 'mongodb://' + env.dbName + ':' + env.key + '@' + env.dbName + '.mongo.cosmos.azure.com:' + env.cosmosPort + '/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@azcosmosfirst@';
//console.log(mongoUri);
mongoose.connect(process.env.mongoUri).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log(e);
})