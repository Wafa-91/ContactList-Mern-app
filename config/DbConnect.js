let mongoose = require("mongoose");
// si serveur ta7 en panne kafch na3ref ino bd makonctech :callbackfunction:conncectili 3l bd si maconncetitich catchili il erreur
const DbConnect = async () => {
  try {
      //estana connceti kif tarja3lak resultat raja3li msg:injm na5dem b then.catch:handle error 
      ////comme dire ya mongose i7kili m3a mongodb(connctilib )3al port 27017
    const result=await mongoose.connect(process.env.URL);
    console.log("database connected")
  } catch (error) {
      console.log(`can not connect to data base because this error: ${error}`)
  }
};
module.exports = DbConnect;

// mongoose.connect(process.env.URL, {useNewUrlParser: true})
// .then(()=>{console.log("dbconnct")})
// .catch((error)=>{console.log(error)})