var movieDB = [
    {
        title: "In Bruges",
        ratings: 4.5,
        hasWatched: false
    },
    {
        title: "Avengers 3 ",
        ratings: 10,
        hasWatched: true
    },
    {
        title: "Get Out",
        ratings: 10,
        hasWatched: true
    },
    {
        title: "50 shades of gray",
        ratings: 4.5,
        hasWatched: false
    }

];


// function iterateMovies(){

    
//     var s;
//     for(var x=0;x<movieDB.length;x++){
//         if(movieDB[x].hasWatched)
//            s="You have watched ";
//         else
//            s="You have not seen ";
        
//        console.log(s +movieDB[x].title +" - " + movieDB[x].ratings);

//     }
 
// }

// iterateMovies();

movieDB.forEach(function(movs){
console.log(movs.title);


});