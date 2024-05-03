const mongoose = require("mongoose");

async function main(){
    try{
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://pedroaugusto:6M88flsl1PvT1KPR@cluster3.2bsfafz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3"
        );
        console.log("Conectado ao Banco!");
    } catch (error) {
        console.log(error);
    }
}
    
module.exports = main;



