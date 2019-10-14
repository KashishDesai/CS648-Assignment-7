//STEP 1
var step1 = function () {
    "use strict";
    var arrayOfFavMovies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD"];
    window.console.log(arrayOfFavMovies[1]);
}

//STEP 2
var step2 = function () {
    "use strict";
    var movies = new Array(5);
    movies[0] = "3 Idiots";
    movies[1] = "Avengers: End Game";
    movies[2] = "Pursuit of Happyness";
    movies[3] = "The Shawshank Redemption";
    movies[4] = "ZNMD";

    window.console.log(movies[0]);
}

// var firstElement = movies.filter(function (params) {

// });


//STEP 3
var step3 = function () {
    "use strict";
    var movies = new Array(5);
    movies[0] = "3 Idiots";
    movies[1] = "Avengers: End Game";
    movies[2] = "Pursuit of Happyness";
    movies[3] = "The Shawshank Redemption";
    movies[4] = "ZNMD";

    movies.splice(2, 0, "DDLJ");
    window.console.log(movies);
    window.console.log(movies.length);
}

//STEP 4
var step4 = function () {
    "use strict";
    var movies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD"];
    delete movies[0];
    window.console.log(movies);
}

//STEP 5
var step5 = function () {
    "use strict";
    var movies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD", "DDLJ", "Forrest Gump"];
    movies.forEach(function (arrayElements) {
        window.console.log(arrayElements);
    });
}


//STEP 6
var step6 = function () {
    "use strict";
    var index;
    var movies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD", "DDLJ", "Forrest Gump"];
    for (index in movies) {
        if (!movies.hasOwnProperty[index]) {
            window.console.log(movies[index]);
        }
    }
}


//STEP 7
var step7 = function () {
    "use strict";
    var index;
    var movies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD", "DDLJ", "Forrest Gump"];
    movies.sort();
    for (index in movies) {
        if (!movies.hasOwnProperty[index]) {
            window.console.log(movies[index]);
        }
    }
}

//STEP 8
var step8 = function () {
    "use strict";
    var leastFavMovies = ["Iternal Sunshine of Spotless Mind", "Eye in the Sky", "The GodFather"];
    var movies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD", "DDLJ", "Forrest Gump"];
    var favMovies = movies.filter(function (item) {
        return typeof item === 'string';
    });

    var lessFavMovies = leastFavMovies.filter(function (element) {
        return typeof element === 'string';
    });

    window.console.log("Movies I Like: \n");
    window.console.log("");
    window.console.log(favMovies.join("\n"));
    window.console.log("");
    window.console.log("Movies I Regret Watching: \n");
    window.console.log("");
    window.console.log(lessFavMovies.join("\n"));
}

//STEP 9
var step9 = function () {
    var leastFavMovies = ["Iternal Sunshine of Spotless Mind", "Eye in the Sky", "The GodFather"];
    var movies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD", "DDLJ", "Forrest Gump"];
    movies.concat(leastFavMovies);
    movies.reverse();
    window.console.log(movies);
}

//STEP 10
var step10 = function () {
    var leastFavMovies = ["Iternal Sunshine of Spotless Mind", "Eye in the Sky", "The GodFather"];
    var movies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "ZNMD", "DDLJ", "Forrest Gump"];
    movies.concat(leastFavMovies);
    movies.reverse();
    window.console.log(movies.slice(-1)[0]);
    window.console.log(movies[movies.length - 1]);
}

step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();

