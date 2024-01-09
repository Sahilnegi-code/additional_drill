const data = require("./data");

const totalNumberOfPeople = () => {
  const houses = data.houses;
  let count = 0;
  houses.forEach((houseKey) => {
    houseKey.people.forEach((name) => {
      count++;
    });
  });
  return count;
};

console.log(totalNumberOfPeople());

const peopleByHouses = () => {
  const countOfPeopleByHouses = {};
  const houses = data.houses;
  houses.forEach((houseKey) => {
    let count = 0;
    houseKey.people.forEach((peopleInform) => {
      count++;
    });
    countOfPeopleByHouses[houseKey.name] = count;
  });
  return countOfPeopleByHouses;
};

console.log(peopleByHouses());

// 3. Write a function called `everyone` which returns a array of names of all the people in `got` variable.
const everyOne = () => {
  const houses = data.houses;

  const arr = houses.reduce((tempArray, houseKey) => {
    houseKey.people.forEach((peopleInform) => {
      tempArray.push(peopleInform.name);
    });
    return tempArray;
  }, []);

  return arr;
};
console.log(everyOne());

//  4. Write a function called `nameWithS` which returns a array of names of all the people in `got` variable whose name includes `s` or `S`.
const nameOfPeopleStartingWithS = () => {
  const houses = data.houses;

  const arr = houses.reduce((tempArray, houseKey) => {
    houseKey.people.forEach((peopleInform) => {
      if (peopleInform.name.includes("S") || peopleInform.name.includes("s")) {
        tempArray.push(peopleInform.name);
      }
    });
    return tempArray;
  }, []);

  return arr;
};

console.log(nameOfPeopleStartingWithS());

// - 5. Write a function called `nameWithA` which returns a array of names of all the people in `got` variable whose name includes `a` or `A`.
const nameOfPeopleStartingWithA = () => {
  const houses = data.houses;

  const arr = houses.reduce((tempArray, houseKey) => {
    houseKey.people.forEach((peopleInform) => {
      if (peopleInform.name.includes("A") || peopleInform.name.includes("a")) {
        tempArray.push(peopleInform.name);
      }
    });
    return tempArray;
  }, []);

  return arr;
};
console.log(nameOfPeopleStartingWithA());

// - 6. Write a function called `surnameWithS` which returns a array of names of all the people in `got` variable whoes surname is starting with `S`(capital s).
const surnameWithS = () => {
  const houses = data.houses;

  const arr = houses.reduce((tempArray, houseKey) => {
    houseKey.people.forEach((peopleInform) => {
      const surname = peopleInform.name.split(" ")[1][0];

      if (surname === "S") {
        tempArray.push(peopleInform.name);
      }
    });
    return tempArray;
  }, []);

  return arr;
};

console.log(surnameWithS());

const surnameWithA = () => {
  const houses = data.houses;

  const arr = houses.reduce((tempArray, houseKey) => {
    houseKey.people.forEach((peopleInform) => {
      const surname = peopleInform.name.split(" ")[1][0];

      if (surname === "A") {
        tempArray.push(peopleInform.name);
      }
    });
    return tempArray;
  }, []);

  return arr;
};

console.log(surnameWithA());

//   - 8. Write a function called `peopleNameOfAllHouses` which returns an object with the key of the name of house and value will be all the people in the house in an array.
const peopleNameOfAllHouses = () => {
  const peopleNameOfAllHousesObj = {};
  const houses = data.houses;
  houses.forEach((houseKey) => {
    peopleNameOfAllHousesObj[houseKey.name] = [];
    houseKey.people.forEach((peopleInform) => {
      peopleNameOfAllHousesObj[houseKey.name].push(peopleInform.name);
    });
  });
  return peopleNameOfAllHousesObj;
};
console.log(peopleNameOfAllHouses());
