// let input = prompt("Enter Your Favourite Movie")
// let rating = prompt(`Enter the Rating for ${input}`)
// const movieRatings = [
//     {input:'Iron Man',rating:7.9},
//     {input:'The Incredible Hulk',rating:6.6}
// ]
// while (input !== 'quit' && rating !== 'quit' && input !== 'q' && rating !== 'q'){
//    if(input === 'Rate') {
//        console.log('*************************')

//        for(let i=0;i<movieRatings.length;i++){
//            console.log(`${movieRatings[i].input} - ${movieRatings[i].rating}`)
//        }

//        console.log('*************************')
//    }
    
//     // input = prompt('What would u like to do')
//     input = prompt("Enter Your Favourite Movie")
//     rating = prompt(`Enter the Rating for ${input}`)
// }
// console.log("OK!! You can exit now")


















//  let youRate = prompt ("Type 'list' to see the list & 'rate' to rate a movie");
//  let input = prompt("Enter Your Favourite Movie");
//  const movieRatings = [{movie:'Iron Man',rates:7.9},
//      {movie:'The Incredible Hulk',rates:6.6}
//     ]
// while( input!== 'q' && input !== 'quit' && youRate!== 'q' && youRate !== 'quit' ){
//     if (youRate === 'list'){
//         console.log('*******')
//         for (let  i=0; i<movieRatings.length;i++ ){
//             console.log(`${movieRatings[i].input} - ${movieRatings[i].rating}`)
//         }
//         console.log('*******')
//      } else if (youRate === 'rate'){
//         let input = prompt("Enter Your Favourite Movie");
//         while(input !== 'q' && input !== 'quit'){
//             let rating = prompt(`Enter the Rating for ${input}`) 
//             if (rating == 'q' || rating == 'quit' ) break;
//             input = prompt("Enter Your Favourite Movie")
//             movieRatings.push({
//                 movie: input, 
//                 rates: rating
//               });
              
//               console.log(movieRatings)

//      }
    // let rating = prompt(`Enter the Rating for ${input}`) 
    // if (rating == 'q' || rating == 'quit' ) break;
    // input = prompt("Enter Your Favourite Movie")
// }
// }



//Another piece of code you dont touch
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// var movieRatings =  [ {movie:'Iron Man',rates:7.9},
//      {movie:'The Incredible Hulk',rates:6.6}];
// let youRate = prompt ("Type 'rate' to rate a movie");
// while( youRate!== 'q' && youRate !== 'quit' ){
//     if(youRate === 'list') {
//         console.log('*******')
//         for (let  i=0; i<movieRatings.length;i++ ){
//             console.log(`${movieRatings[i].movie} - ${movieRatings[i].rates}`)
//         }
//         console.log('*******')
//     }
//     else if (youRate === 'rate'){
//         let input = prompt("Enter Your Favourite Movie");
//         while(input !== 'q' && input !== 'quit'){
//         let rating = prompt(`Enter the Rating for ${input}`) 
//             if (rating == 'q' || rating == 'quit' ) break;
//             input = prompt("Enter Your Favourite Movie")
//             movieRatings.push({
//                 movie: input, 
//                 rates: rating
//             });
//             console.log(movieRatings)
//         }
//     }youRate = prompt ("Type 'rate' to rate a movie")
// }
// console.log('BBBByyyyyyyyyy')
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



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





































// var nietos = [];
// var obj = {};
// obj["01"] = nieto.label;
// obj["02"] = nieto.value;
// nietos.push(obj);


// let obj = { name: 'Bob' };
// let arr = [{ name: 'John' } , {name: 'Lukas'}];

// // add obj to array
// arr = [...arr, obj];

// console.log(arr)



// let input = prompt("Enter Your Favourite Movie")
// // let rating = prompt(`Enter the Rating for ${input}`) 
// let rating = prompt(`Enter the Rating for ${input}`)
// // //push the input and rating into object??????????

// var a = [];
// while( input !== 'q' &&  rating!=='q'){
// const input = prompt("Enter Your Favourite Movie")
// const rating = prompt(`Enter the Rating for ${input}`) 
// // On some event
// a.push({
//   movie: input, 
//   rates: rating
// });

// console.log(a)}


// let obj = { input: 'Bob' , rating : 2};
// let arr =[{ input: 'wanda ', rating: 6.9 } , {input: 'Loki', rating: 7.7}];
// // push object into array like this:::::::::::
// arr = [...arr, obj];
// console.log(arr)
// //     } else if (youRate === 'rate'){
// //         const elm = prompt("what is the new movie and rating?");
// //         movieRatings.push(elm);
// //         console.log(`${elm} added to list`)












// var movieRa =  [ {movie:'Iron Man',rates:7.9},
//      {movie:'The Incredible Hulk',rates:6.6}];
// let input = prompt("Enter Your Favourite Movie");
// while(input !== 'q' && input !== 'quit'){
//     let rating = prompt(`Enter the Rating for ${input}`) 
//     if (rating == 'q' || rating == 'quit' ) break;
//     input = prompt("Enter Your Favourite Movie")
//     movieRa.push({
//         movie: input, 
//         rates: rating
//       });
      
//       console.log(movieRa)
// }






// var a = [ {movie:'Iron Man',rates:7.9},
//     {movie:'The Incredible Hulk',rates:6.6}];
// while( input !== 'q' &&  rating!=='q'){
// const input = prompt("Enter Your Favourite Movie")
// const rating = prompt(`Enter the Rating for ${input}`) 
// // On some event
// a.push({
//   movie: input, 
//   rates: rating
// });

// console.log(a)}

















































































// THses are the most correct pieces of codes.Just copy!!!!!!!!!!
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let input = prompt("Enter Your Favourite Movie");
// while(input !== 'q' && input !== 'quit'){
//     let rating = prompt(`Enter the Rating for ${input}`) 
//     if (rating == 'q' || rating == 'quit' ) break;
//     input = prompt("Enter Your Favourite Movie")
// }

// var movieRa =  [ {movie:'Iron Man',rates:7.9},
//      {movie:'The Incredible Hulk',rates:6.6}];
// let input = prompt("Enter Your Favourite Movie");
// while(input !== 'q' && input !== 'quit'){
//     let rating = prompt(`Enter the Rating for ${input}`) 
//     if (rating == 'q' || rating == 'quit' ) break;
//     input = prompt("Enter Your Favourite Movie")
//     movieRa.push({
//         movie: input, 
//         rates: rating
//       });
      
//       console.log(movieRa)
// }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::