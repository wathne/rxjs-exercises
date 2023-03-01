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
/* STOP */
console.log(
  JSON.stringify([
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ]
    .concatAll()
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
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
            },
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
            },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
            },
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
            },
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
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
            },
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
            },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
            },
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
            },
            {
              width: 300,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
            },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
      ],
    },
  ];

  /* Use one or more map, concatAll, and filter calls to create an array with 
   * the following items
   * [
   *   {
         "id": 675465,
         "title": "Fracture",
         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
       },
   *   {
         "id": 65432445,
         "title": "The Chamber",
         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
       },
   *   {
         "id": 654356453,
         "title": "Bad Boys",
         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
       },
   *   {
         "id": 70111470,
         "title": "Die Hard",
         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
       },
   * ];
   */

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



console.log("Exercise 13: Implement concatMap()");
/* START */
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this
    .map((item) => projectionFunctionThatReturnsArray(item))
    .concatAll();

    // ------------   INSERT CODE HERE!  ----------------------------
    // Apply the projection function to each item. The projection
    // function will return a new child array. This will create a
    // two-dimensional array.
    // ------------   INSERT CODE HERE!  ----------------------------

    // apply the concatAll function to flatten the two-dimensional array
};
/* STOP */
const spanishFrenchEnglishWords = [
  ["cero","rien","zero"],
  ["uno","un","one"],
  ["dos","deux","two"],
];

/* Collect all the words for each number, in every language, in a single, flat
 * list. */
const allWords = [0,1,2]
  .concatMap((index) => spanishFrenchEnglishWords[index]);

console.log(
  JSON.stringify(allWords
  ) === '["cero","rien","zero","uno","un","one","dos","deux","two"]'
);



console.log(
  "Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art " +
  "url for every video");
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
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
            },
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
            },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
            },
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
            },
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
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
            },
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
            },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": [],
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
            },
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
            },
            {
              width: 300,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
            },
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }],
        },
      ],
    },
  ];

  /* Use one or more map, concatAll, and filter calls to create an array with 
   * the following items
   * [
   *   {
         "id": 675465,
         "title": "Fracture",
         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
       },
   *   {
         "id": 65432445,
         "title": "The Chamber",
         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
       },
   *   {
         "id": 654356453,
         "title": "Bad Boys",
         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
       },
   *   {
         "id": 70111470,
         "title": "Die Hard",
         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
       },
   * ];
   */

  return movieLists
    .concatMap((movieList) => movieList.videos
      .concatMap((video) => video.boxarts
        .filter((boxart) => boxart.width === 150)
        .map((boxart) => ({
          id: video.id,
          title: video.title,
          boxart: boxart.url,
        }))
      )
    ); // Complete this expression!
}
/* STOP */
)());



console.log("Exercise 15: Use forEach to find the largest box art");
console.log((
/* START */
() => {
  const boxarts = [
    {
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
    },
    {
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
    },
    {
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
    },
    {
      width: 425,
      height: 150,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
    },
  ];
  let currentSize;
  let maxSize = -1;
  let largestBoxart;

  boxarts.forEach((boxart) => {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

  return largestBoxart;
}
/* STOP */
)());



console.log("Exercise 16: Implement reduce()");
/* START */
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one function.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};
/* STOP */
console.log([1,2,3].reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue)); // === [6]
console.log([1,2,3].reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue, 10)); // === [16]



console.log("Exercise 17: Retrieve the largest rating.");
console.log((
/* START */
() => {
	const ratings = [2,3,1,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	return ratings.
		reduce((accumulatedValue, currentValue) => {
		  console.log("--------------------");
		  console.log("currentValue: " + currentValue);
		  console.log("accumulatedValue: " + accumulatedValue);
		  if (currentValue > accumulatedValue) {
		    console.log(currentValue + " > " + accumulatedValue + " ~ replace");
		    return currentValue;
		  }
		  console.log(currentValue + " <= " + accumulatedValue + " ~ keep");
		  return accumulatedValue;
		}); // Complete this expression
}
/* STOP */
)());



console.log("Exercise 18: Retrieve url of the largest boxart");
console.log((
/* START */
function() {
	var boxarts = [
			{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		];

	// You should return an array containing only the URL of the largest box art. Remember that reduce always
	// returns an array with one item.
	return boxarts.
		reduce((accumulated, current) => {
		  const currentArea = current.width * current.height;
		  const accumulatedArea = accumulated.width * accumulated.height;
		  if (currentArea > accumulatedArea) {
		    return current;
		  }
		  return accumulated;
		})
		.map((boxart) => boxart.url);   // Complete this expression
}
/* STOP */
)());



console.log("Exercise 19:");
console.log((
/* START */
function() {
	var videos = [
		{
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"id": 675465,
			"title": "Fracture"
		},
		{
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"id": 654356453,
			"title": "Bad Boys"
		}
	];

	// Expecting this output...
	// [
	//	 {
	//		 "65432445": "The Chamber",
	//		 "675465": "Fracture",
	//		 "70111470": "Die Hard",
	//		 "654356453": "Bad Boys"
	//	 }
	// ]
	return videos.
		reduce(function(accumulatedMap, video) {
		var obj = {};

        obj[video.id] = video.title;

		// ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
		// ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----

		// Object.assign() takes all of the enumerable properties from
		// the object listed in its second argument (obj) and assigns them
		// to the object listed in its first argument (accumulatedMap).
		return Object.assign(accumulatedMap, obj);
		},
		// Use an empty map as the initial value instead of the first item in
		// the list.
		{});
}
/* STOP */
)());



console.log("Exercise 20: Retrieve the id, title, and smallest box art url for every video.");
console.log((
/* START */
function() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id:432534, time:65876586 }]
				}
			]
		},
		{
			name: "Thrillers",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
						{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id:432534, time:65876586 }]
				}
			]
		}
	];


	// Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

  return movieLists
    .concatMap((movieList) => movieList.videos
      .concatMap((video) => video.boxarts
        .reduce((accumulated, current) => {
          const currentArea = current.width * current.height;
          const accumulatedArea = accumulated.width * accumulated.height;
          if (currentArea < accumulatedArea) {
            return current;
          }
          return accumulated;
        })
        .map((boxart) => ({
          id: video.id,
          title: video.title,
          boxart: boxart.url,
        }))
      )
    ); // Complete this expression!
}
/* STOP */
)());



console.log("Exercise 21: Combine videos and bookmarks by index");
console.log((
/* START */
function() {
	var videos = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			}
		],
		bookmarks = [
			{id: 470, time: 23432},
			{id: 453, time: 234324},
			{id: 445, time: 987834}
		],
	counter,
	videoIdAndBookmarkIdPairs = [];

	for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
		// Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
		videoIdAndBookmarkIdPairs.push({
		  videoId: videos[counter].id,
		  bookmarkId: bookmarks[counter].id
		});
	}

	return videoIdAndBookmarkIdPairs;
}
/* STOP */
)());



console.log("Exercise 22: Implement zip");
/* START */
// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		// Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
        results.push(combinerFunction(left[counter], right[counter]));
	}

	return results;
};
/* STOP */
console.log(JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]');



console.log("Exercise 23: Combine videos and bookmarks by index");
console.log((
/* START */
function() {
	var videos = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			}
		],
		bookmarks = [
			{id: 470, time: 23432},
			{id: 453, time: 234324},
			{id: 445, time: 987834}
		];
//{videoId, bookmarkId}
	return Array.
		zip(videos, bookmarks, (left, right) => ({
		  videoId: left.id,
		  bookmarkId: right.id,
		})); //... finish this expression
}
/* STOP */
)());


console.log("Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url.");
console.log((
/* START */
function() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:213432 },
							{ type: "Start", time: 64534 },
							{ type: "Middle", time: 323133}
						]
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:54654754 },
							{ type: "Start", time: 43524243 },
							{ type: "Middle", time: 6575665}
						]
					}
				]
			},
			{
				name: "Instant Queue",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:132423 },
							{ type: "Start", time: 54637425 },
							{ type: "Middle", time: 3452343}
						]
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:45632456 },
							{ type: "Start", time: 234534 },
							{ type: "Middle", time: 3453434}
						]
					}
				]
			}
		];

  //------------ COMPLETE THIS EXPRESSION --------------
  return movieLists
    .concatMap((movieList) => movieList.videos
      .concatMap((video) => Array.zip(
        video.boxarts
          .reduce((accumulated, current) => {
            const currentArea = current.width * current.height;
            const accumulatedArea = accumulated.width * accumulated.height;
            if (currentArea < accumulatedArea) {
              return current;
            }
            return accumulated;
          }),
        video.interestingMoments
          .filter((element) => element.type === "Middle"),
        (a, b) => ({
          id: video.id,
          title: video.title,
          time: b.time,
          url: a.url,
        })
      ))
    );
}
/* STOP */
)());


console.log("Exercise 25: Converting from Arrays to Trees");
console.log((
/* START */
() => {
  const lists = [
    {
      "id": 5434364,
      "name": "New Releases",
    },
    {
      "id": 65456475,
      "name": "Thrillers",
    },
  ];
  const videos = [
    {
      "listId": 5434364,
      "id": 65432445,
      "title": "The Chamber",
    },
    {
      "listId": 5434364,
      "id": 675465,
      "title": "Fracture",
    },
    {
      "listId": 65456475,
      "id": 70111470,
      "title": "Die Hard",
    },
    {
      "listId": 65456475,
      "id": 654356453,
      "title": "Bad Boys",
    },
  ];

/*
return
  [
    {
      "name": "New Releases",
      "videos": [
        {
          "id": 65432445,
          "title": "The Chamber",
        },
        {
          "id": 675465,
          "title": "Fracture",
        },
      ],
	},
	{
      "name": "Thrillers",
      "videos": [
        {
          "id": 70111470,
          "title": "Die Hard",
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
        },
      ],
    },
  ]
*/

  return lists
    .map((list) => ({
      name: list.name,
      videos: videos
        .filter((video) => video.listId === list.id)
        .map((video) => ({
          id: video.id,
          title: video.title,
        })),
    })); // complete this expression
}
/* STOP */
)());



console.log("Exercise 26: Converting from Arrays to Deeper Trees");
console.log((
/* START */
function() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				name: "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		],
		boxarts = [
			{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
			{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
			{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
			{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
			{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
			{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
			{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
		],
		bookmarks = [
			{ videoId: 65432445, time: 32432 },
			{ videoId: 675465, time: 3534543 },
			{ videoId: 70111470, time: 645243 },
			{ videoId: 654356453, time: 984934 }
		];

/*
[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber",
				"time": 32432,
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
			},
			{
				"id": 675465,
				"title": "Fracture",
				"time": 3534543,
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard",
				"time": 645243,
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"time": 984934,
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
			}
		]
	}
]
*/

  return lists
    .map((list) => ({
      name: list.name,
      videos: videos
        .filter((video) => video.listId === list.id)
        .concatMap((video) => Array.zip(
          bookmarks
            .filter((bookmark) => bookmark.videoId === video.id),
          boxarts
            .filter((boxart) => boxart.videoId === video.id)
            .reduce((accumulated, current) => {
              const currentArea = current.width * current.height;
              const accumulatedArea = accumulated.width * accumulated.height;
              if (currentArea < accumulatedArea) {
                return current;
              }
              return accumulated;
            }),
          (bookmark, boxart) => ({
            id: video.id,
            title: video.title,
            time: bookmark.time,
            boxart: boxart.url,
        })
      )),
    })); // complete this expression
}
/* STOP */
)());



console.log("Exercise 27: Stock Ticker");
const now = new Date();
const pricesNASDAQ = [
	{name: "ANGI", price: 31.22, timeStamp: new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 11,
  )},
	{name: "MSFT", price: 32.32, timeStamp: new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 10,
  )},
	{name: "GOOG", price: 150.43, timeStamp: new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 9,
  )},
	{name: "ANGI", price: 28.44, timeStamp: new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 8,
  )},
	{name: "GOOG", price: 199.33, timeStamp: new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7,
  )},
];
(
/* START */
(pricesNASDAQ, printRecord) => {
  const now = new Date();
  const tenDaysAgo = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 10,
  );

  /* Use filter() to filter the trades for MSFT prices recorded any time after
   * 10 days ago. */
  const microsoftPrices =
    pricesNASDAQ
      .filter((priceRecord) => priceRecord.timeStamp >= tenDaysAgo);
  // finish this expression

  // Print the trades to the output console
  microsoftPrices
    .forEach((priceRecord) => printRecord(priceRecord));
}
/* STOP */
)(pricesNASDAQ, console.log);



console.log("Exercise 28: Subscribing to an event");
const function_28 =
/* START */
function(button) {
	// the button click handler
	var handler = function(ev) {
		// Unsubscribe from the button event.
		button.removeEventListener("click", handler);

		alert("Button was clicked. Unsubscribing from event.");
	};

	// add the button click handler
	button.addEventListener("click", handler);
}
/* STOP */
;



console.log("Exercise 29: Traversing an Event");
const function_29 =
/* START */
function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");

	var subscription =
		buttonClicks.
			do(function(clickEvent) {
				alert("Button was clicked. Stopping Traversal.");

				// Stop traversing the button clicks
				subscription.unsubscribe();
			}).
			subscribe();
}
/* STOP */
;



console.log("Exercise 30: Completing Sequences with take()");
const function_30 =
/* START */
function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");

	// Use take() to listen for only one button click
	// and unsubscribe.
	buttonClicks
		.take(1)// Insert take() call here
		.forEach(function(clickEvent) {
			alert("Button was clicked once. Stopping Traversal.");
		});
}
/* STOP */
;



console.log("Exercise 31: Completing sequences with takeUntil()");
const function_31 =
/* START */
function(pricesNASDAQ, printRecord, stopButton) {
	var stopButtonClicks = Observable.fromEvent(stopButton, "click");
	// ----- To finish this expression, use Observable.fromEvent to convert the "click" event on the stop button to an Observable

		microsoftPrices =
			pricesNASDAQ
				.filter(function(priceRecord) {
					return priceRecord.name === "MSFT";
				})
				.takeUntil(stopButtonClicks)
/* takeUntil subscribes and begins mirroring the source Observable. It also 
 * monitors a second Observable, notifier that you provide. If the notifier
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes. If the notifier doesn't emit any value and completes then
 * takeUntil will pass all values. */
				
				// ----- To finish this expression, use takeUntil to complete the sequence when stopButtonClicks fires.

	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}
/* STOP */
;



console.log("Exercise 32: Creating a mouse drag event");
const function_32 =
/* START */
function(sprite, spriteContainer) {
	var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown"),
		spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove"),
		spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup"),
		spriteMouseDrags =
			// For every mouse down event on the sprite...
			spriteMouseDowns
				// --------------------------------------------------------
				//					  INSERT CODE HERE
				// --------------------------------------------------------
				// Complete this expression...
				// For every mouse down event, return the mouse move event
				// sequence until a mouse up event occurs.
				.concatMap((element) => spriteContainerMouseMoves
				  .takeUntil(spriteContainerMouseUps)
				);

	// For each mouse drag event, move the sprite to the absolute page position.
	spriteMouseDrags.forEach(function(dragPoint) {
		sprite.style.left = dragPoint.pageX + "px";
		sprite.style.top = dragPoint.pageY + "px";
	});
}
/* STOP */
;



console.log("Exercise 33:");
const function_33 =
/* START */
function(sprite, spriteContainer) {
  // All of the mouse event sequences look like this:
  // seq([ {pageX: 22, pageY: 3423, layerX: 14, layerY: 22} ,,, ])
  const spriteMouseDowns = Observable.fromEvent(sprite, "mousedown");
  const spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove");
  const spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup");
  // Create a sequence that looks like this:
  // seq([ {pageX: 22, pageY:4080 },,,{pageX: 24, pageY: 4082},,, ])
  const spriteMouseDrags =
    // For every mouse down event on the sprite...
    spriteMouseDowns
      // ...retrieve all the mouse move events on the sprite container...
      .concatMap((contactPoint) => spriteContainerMouseMoves
        // ...until a mouse up event occurs.
        .takeUntil(spriteContainerMouseUps)
        // ------------   INSERT CODE HERE  -----------------
        // Project each mouse move object into a new object
        // with adjusted pageX and pageY properties.
        // Translate each page coordinate based on the value
        // of the layerX and layerY properties in the
        // contactPoint.
        // -------------------------------------------------
        .map((movePoint) => ({
          pageX: movePoint.pageX - contactPoint.layerX,
          pageY: movePoint.pageY - contactPoint.layerY,
        }))
      ); // Complete expression...

	// For each mouse drag event, move the sprite to the absolute page position.
	spriteMouseDrags.forEach(function(dragPoint) {
		sprite.style.left = dragPoint.pageX + "px";
		sprite.style.top = dragPoint.pageY + "px";
	});
}
/* STOP */
;



console.log("Exercise 34: HTTP requests");
const function_34 =
/* START */
function($) {
	$.getJSON(
		"http://api-global.netflix.com/queue",
		{
			success: function(json) {
				alert("Data has arrived.");
			},
			error: function(ex) {
				alert("There was an error.")
			}
		});
}
/* STOP */
;



console.log("Exercise 35: Sequencing HTTP requests with callbacks");
const function_35 =
/* START */
function(window, $, showMovieLists, showError) {
	var error,
		configDone,
		movieLists,
		queueList,
		windowLoaded,
		outputDisplayed,
		errorHandler = function() {
			// Otherwise show the error.
			error = "There was a connectivity error";

			// We may be ready to display out
			tryToDisplayOutput();
		},
		tryToDisplayOutput = function() {
			if (outputDisplayed) {
				return;
			}
			if (windowLoaded) {
				if (configDone && movieLists !== undefined) {
					if (queueList !== undefined) {
						movieLists.push(queueList);
					}
					outputDisplayed = true;
					showMovieLists(JSON.stringify(movieLists));
				}
				else if (error) {
					outputDisplayed = true;
					showError(error);
				}
			}
		},
		windowLoadHandler = function() {
			windowLoaded = true;

			// Remember to unsubscribe from events
			window.removeEventListener("load", windowLoadHandler);

			// This may be the last task we're waiting on, so try and display output.
			tryToDisplayOutput();
		};

	// Register for the load event
	window.addEventListener("load", windowLoadHandler);

	// Request the service url prefix for the users AB test
	$.getJSON(
		"http://api-global.netflix.com/abTestInformation",
		{
			success: function(abTestInformation) {
				// Request the member's config information to determine whether their instant
				// queue should be displayed.
				$.getJSON(
					"http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/config",
					{
						success: function(config) {
							// Parallel retrieval of movie list could've failed,
							// in which case we don't want to issue this call.
							if (!error) {
								// If we're supposed to
								if (config.showInstantQueue) {
									$.getJSON(
										"http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/queue",
										{
											success: function(queueMessage) {
												queueList = queueMessage.list;

												configDone = true;
												tryToDisplayOutput();
											},
											error: errorHandler
										});
								}
								else {
									configDone = true;
									tryToDisplayOutput();
								}
							}
						},
						error: errorHandler
					});

				// Retrieve the movie list
				$.getJSON(
					"http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/movieLists",
					{
						success: function(movieListMessage) {
							movieLists = movieListMessage.list;
							tryToDisplayOutput();
						},
						error: errorHandler
					});
			},
			error: errorHandler
		});
}
/* STOP */
;



console.log("Exercise 36: Traversing callback-based Asynchronous APIs");
const function_36 =
/* START */
function(window, $) {
	var getJSON = function(url) {
		return Observable.create(function(observer) {
			var subscribed = true;

			$.getJSON(url,
				{
					success:
						function(data) {
							// If client is still interested in the results, send them.
							if (subscribed) {
								// Send data to the client
								observer.next(data);
								// Immediately complete the sequence
								observer.complete();
							}
						},
					error: function(ex) {
						// If client is still interested in the results, send them.
						if (subscribed) {
							// Inform the client that an error occurred.
							observer.error(ex);
						}
					}
				});

			// Definition of the Subscription objects unsubscribe (dispose in RxJS 4) method.
			return function() {
				subscribed = false;
			}
		});
	};

	var observer = {
		// onNext in RxJS 4
		next: function (data) {
			alert(JSON.stringify(data));
		},
		// onError in RxJS 4
		error: function (err) {
			alert(err);
		},
		// onComplete in RxJS 4
		complete: function () {
			alert("The asynchronous operation has completed.");
		}
	};

	var subscription =
		getJSON("http://api-global.netflix.com/abTestInformation").subscribe(observer);

	// setTimeout(function () {
	// 	alert("Changed my mind, I do not want notifications any more!")
	// 	subscription.unsubscribe();
	// }, 10);
}
/* STOP */
;



console.log("Exercise 37: Sequencing HTTP requests with Observable");
const function_37 =
/* START */
function(window, getJSON, showMovieLists, showError) {
	var movieListsSequence =
		Observable.zip(
			getJSON("http://api-global.netflix.com/abTestInformation").
				concatMap(function(abTestInformation) {
					return Observable.zip(
						getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/config").
							concatMap(function(config) {
								if (config.showInstantQueue) {
									return getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/queue").
										map(function(queueMessage) {
											return queueMessage.list;
										});
								}
								else {
									return Observable.returnValue(undefined);
								}
							}),
						getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/movieLists"),
						function(queue, movieListsMessage) {
							var copyOfMovieLists = [].concat(movieListsMessage.list);
							if (queue !== undefined) {
								copyOfMovieLists.push(queue);
							}

							return copyOfMovieLists;
						});
				}),
			Observable.fromEvent(window, "load"),
			function(movieLists, loadEvent) {
				return movieLists;
			});

	movieListsSequence.
		do(
			function(movieLists) {
				showMovieLists(movieLists);
			},
			function(err) {
				showError(err);
			}
		).
		subscribe();
}
/* STOP */
;



console.log("Exercise 38: Throttle Input");
const function_38 =
/* START */
(clicks, saveData, name) => clicks
  // TODO: Throttle the clicks so that it only happens every one second
  .throttleTime(1000)
  .concatMap(() => saveData(name))
/* STOP */
;



console.log("Exercise 39: Autocomplete Box");
const function_39 =
/* START */
(getSearchResultSet, keyPresses, textBox) => keyPresses
  .map(() => textBox.value)
  // TODO: Ensure that we only trigger a maximum of one search request per second
  .throttleTime(1000)
  .concatMap((text) => getSearchResultSet(text)
    // TODO: Ensure this sequence ends as soon as another key press arrives
    .takeUntil(keyPresses)
  )
/* STOP */
;



console.log("Exercise 40: Distinct Until Changed Input");
const function_40 =
/* START */
(keyPresses, isAlpha) => keyPresses
  .map((e) => String.fromCharCode(e.keyCode))
  // Ensure we only have alphabetic characters
  .filter((character) => isAlpha(character))
  // TODO: Filter out successive repetitive keys
  .distinctUntilChanged()
  // Building up a string of all the characters typed.
  .scan((stringSoFar, character) => stringSoFar + character, "")
/* STOP */
;



console.log("Exercise 41: Autocomplete Box Part 2: Electric Boogaloo");
const function_41 =
/* START */
(getSearchResultSet, keyPresses, textBox) => keyPresses
  .map(() => textBox.value)
  .throttleTime(1000)
  // TODO: Make sure we only get distinct values
  .distinctUntilChanged()
  // TODO: Make sure the text is not empty
  .filter((string) => string !== "")
  .concatMap((text) => getSearchResultSet(text)
    .takeUntil(keyPresses)
  )
/* STOP */
;



