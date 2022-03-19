const express = require("express")
const mongoose = require("mongoose")
 
 
const App = express()


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/movie")
}



const movieSchema = new mongoose.Schema({
    _id: {type: Number},
    movie: {type: String},
    production_year: {type: Number },
    budget: {type: Number },
    movie_genre:{type:String }
});

// step 3 :- create a model
//let Movie;
//try{

  let  Movie = mongoose.model("movieData", movieSchema)

//catch(e){
    //console.log(e.message)


App.get("/movie", async (req, res) => {

    const movies = await Movie.find().lean().exec()
    console.log(movies)
   return  res.send(movies)
})


 

App.listen(2345, async function() {
    try{
        await connect()
        console.log("listing on port 2345")
    }catch(e){
        console.log(e)
    }
  
    
})