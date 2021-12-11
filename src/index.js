// import "./styles.css";
// import { Dog } from "./dog"; // dog class
// import { dogs } from "../public/data"; // array of dog objects

// const dogDiv = document.querySelector(".dogList"); // grab div

// const handleClick = () => {
//   dogDiv.innerHtml = "";
//   let sortedDogs = Dog.all.sort((a, b) => a.name.localeCompare(b.name));
//   Dog.all.forEach((dog) =>
//   dogDiv.insertAdjacentHTML("beforeend", dog.renderDog())
//   );
//   return sortedDogs
// };

// const sortDogs = document.getElementById("sortDogs");
// sortDogs.addEventListener("click", handleClick);

// const addDogs = () => {
//   // loop over array of dogs
//   for (const dogData of dogs) {
//     const { id, name, breed, knownFor } = dogData;
//     const dog = new Dog(id, name, breed, knownFor); // create dog objects
//     Dog.all.push(dog); // add to Dog.all
//     // dogDiv.insertAdjacentHTML("beforeend", dog.renderDog());
//   }
// };

// addDogs(); // invoke function

import "./styles.css";
import { Dog } from "./dog"; // dog class
import { dogs } from "../public/data"; // array of dog objects

const dogDiv = document.querySelector(".dogList"); // grab div
const sortDogs = document.getElementById("sortDogs");

const handleClick = () => {
  dogDiv.innerHtml = "";
  let sortedDogs = Dog.all.sort((a, b) => a.name.localeCompare(b.name));
  Dog.all.forEach((dog) =>
  dogDiv.insertAdjacentHTML("beforeend", sortedDogs)
  );
};

sortDogs.addEventListener('click', handleClick);

const addDogs = () => {
  // loop over array of dogs
  for (const dogData of dogs) {
    const { id, name, breed, knownFor } = dogData;
    const dog = new Dog(id, name, breed, knownFor); // create dog objects
    Dog.all.push(dog); // add to Dog.all
    dogDiv.insertAdjacentHTML("beforeend", dog.renderDog());
  }
};

addDogs(); // invoke function