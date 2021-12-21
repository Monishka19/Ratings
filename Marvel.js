var movieRatings =  [ {movie:'Iron Man',rates:7.9},
     {movie:'The Incredible Hulk',rates:6.6}];
let youRate = prompt ("Type 'rate' to rate a movie,'list' to see list and 'q' to exit");
while( youRate!== 'q' && youRate !== 'quit' ){
    
    if (youRate === 'rate'){
        let input = prompt("Enter Your Favourite Movie or'q'to exit");
        while(input !== 'q' && input !== 'quit'){
        let rating = prompt(`Enter the Rating for ${input} or'q'to exit`) 
            if (rating == 'q' || rating == 'quit' ) break;
            input = prompt("Enter Your Favourite Movie or'q'to exit")
            movieRatings.push({
                movie: input, 
                rates: rating
            });
        }
    }else if(youRate === 'list') {
        console.log('*******')
        for (let  i=0; i<movieRatings.length;i++ ){
            console.log(`${movieRatings[i].movie} - ${movieRatings[i].rates}`)
        }
        console.log('*******')
    }
    youRate = prompt ("Type 'rate' to rate a movie,'list' to see list or 'quit' to exit")
}
console.log('OK! You can exit now!!!!')
