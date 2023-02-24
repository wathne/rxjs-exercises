// https://reactivex.io/learnrx/



console.log("Exercise 1: Print all the names in an array");
(
/* START */
(console) => {
  const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
  let counter;

  for(counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}
/* STOP */
)(console);



console.log("Exercise 2: Use forEach to print all the names in an array");
(
/* START */
(console) => {
  const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

  names.forEach((element, index, array) => {
    console.log(element);
  });
}
/* STOP */
)(console);



console.log(
  "Exercise 3: Project an array of videos into an array of {id,title} pairs " +
  "using forEach()");
console.log((
/* START */
() => {
  const newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": [],
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": [],
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
  ];

  const videoAndTitlePairs = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate {id, title} pairs from each video.
  // Put the results into the videoAndTitlePairs array using the Array's
  // push() method. Example: videoAndTitlePairs.push(newItem);
  // ------------ INSERT CODE HERE! -----------------------------------

  newReleases.forEach((element, index, array) => {
    const newElement = {
      id: element.id,
      title: element.title,
    };
    videoAndTitlePairs.push(newElement);
  });

  return videoAndTitlePairs;
}
/* STOP */
)());



console.log("Exercise 4: Implement map()");
/* START */
Array.prototype.map = function(projectionFunction) {
  const results = [];
  this.forEach((element, index, array) => {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------

    results.push(projectionFunction(element));
  });

  return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

// JSON.stringify([1,2,3].map((x) => x + 1)) === '[2,3,4]'

/* STOP */
console.log(JSON.stringify([1,2,3].map((x) => x + 1)) === '[2,3,4]');



console.log(
  "Exercise 5: Use map() to project an array of videos into an array of " +
  "{id,title} pairs");
console.log((
/* START */
() => {
  const newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": [],
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": [],
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  return newReleases.map((element) => {
    const newElement = {
      id: element.id,
      title: element.title,
    };

    return newElement;
  }); // finish this expression!
  // ------------ INSERT CODE HERE! -----------------------------------

}
/* STOP */
)());



console.log(
  "Exercise 6: Use forEach() to collect only those videos with a rating of 5.0"
);
console.log((
/* START */
() => {
  const newReleases = [
  {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": [],
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": [],
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
  ];

  const videos = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------

  newReleases.forEach((element, index, array) => {
    if (element.rating === 5.0) {
      videos.push(element);
    }
  });

  return videos;
}
/* STOP */
)());



console.log("Exercise 7: Implement filter()");
/* START */
Array.prototype.filter = function(predicateFunction) {
  const results = [];
  this.forEach((element, index, array) => {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------

    if (predicateFunction(element)) {
      results.push(element);
    }
  });

  return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

// JSON.stringify([1,2,3].filter((x) => x > 2)) === "[3]"

/* STOP */
console.log(JSON.stringify([1,2,3].filter((x) => x > 2)) === "[3]");



console.log(
  "Exercise 8: Chain filter and map to collect the ids of videos that have a " +
  "rating of 5.0");
console.log((
/* START */
() => {
  const newReleases = [
  {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": [],
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": [],
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }],
    },
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Chain the filter and map functions to select the id of all videos
  // with a rating of 5.0.

  return newReleases
    .filter((element) => element.rating === 5.0)
    .map((element) => element.id); // Complete this expression
  // ------------ INSERT CODE HERE! -----------------------------------
}
/* STOP */
)());



console.log(
  "Exercise 9: Flatten the movieLists array into an array of video ids");
console.log((
/* START */
() => {
  const movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
      ],
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
      ],
    },
  ];

  const allVideoIdsInMovieLists = [];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  movieLists.forEach((element_1, index_1, array_1) => {
    element_1.videos.forEach((element_2, index_2, array_2) => {
      allVideoIdsInMovieLists.push(element_2.id);
    });
  });

  return allVideoIdsInMovieLists;
}
/* STOP */
)());



console.log("Exercise 10: Implement concatAll()");
/* START */
Array.prototype.concatAll = function() {
  const results = [];
  this.forEach((element_1, index_1, array_1) => {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------

    element_1.forEach((element_2, index_2, array_2) => {
      results.push(element_2);
    });
  });

  return results;
};

/* JSON.stringify(
 *   [ [1,2,3], [4,5,6], [7,8,9] ].concatAll()
 * ) === "[1,2,3,4,5,6,7,8,9]" */

// Throws an error because this is a one-dimensional array.
//[1,2,3].concatAll();

/* STOP */
console.log(
  JSON.stringify(
    [ [1,2,3], [4,5,6], [7,8,9] ].concatAll()
  ) === "[1,2,3,4,5,6,7,8,9]"
);

// Throws an error because this is a one-dimensional array.
//[1,2,3].concatAll();



console.log(
  "Exercise 11: Use map() and concatAll() to project and flatten the " +
  "movieLists into an array of video ids");
console.log((
/* START */
() => {
  const movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
      ],
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
      ],
    },
  ];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return movieLists
    .map((element_1) => element_1.videos
      .map((element_2) => element_2.id))
    .concatAll(); // Complete this expression!
}
/* STOP */
)());



console.log(
  "Exercise 12: Retrieve id, title, and a 150x200 box art url for every video");
console.log((
/* START */
() => {
  const movieLists = [
    {
      name: "Instant Queue",
      videos : [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
          ],
        },
        {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
      ],
    },
  ];

  // Use one or more map, concatAll, and filter calls to create an array with the following items
  // [
  //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists
    .map((movieList) => movieList.videos
      .map((video) => video.boxarts
        .filter((boxart) => boxart.width === 150)
        .map((boxart) => ({
          id: video.id,
          title: video.title,
          boxart: boxart.url,
        }))
      )
      .concatAll()
    )
    .concatAll(); // Complete this expression!
}
/* STOP */
)());



console.log("Exercise 13:");
/* START */
/* STOP */



console.log("Exercise 14:");
/* START */
/* STOP */



console.log("Exercise 15:");
/* START */
/* STOP */



console.log("Exercise 16:");
/* START */
/* STOP */



console.log("Exercise 17:");
/* START */
/* STOP */



console.log("Exercise 18:");
/* START */
/* STOP */



