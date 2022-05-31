const userList = [
  { id: 1, name: "John", city: 1 },
  { id: 2, name: "Pete", city: 2 },
  { id: 3, name: "Mary", city: 3 },
  { id: 4, name: "Mike", city: 4 },
  { id: 5, name: "Vasya", city: 5 },
];

const cityList = {
  1: "New York",
  2: "Paris",
  3: "London",
  4: "Berlin",
  5: "Moscow",
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userList);
        }, 2000);
    })
}


const getCities = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cityList);
        }, 2000);
    })
}


// 
// const userPromise = getUsers();
// const cityPromise = getCities();
// userPromise.then(users => {
//     console.log(users);
//     return cityPromise;
// }).then((cities) => {
//     console.log(cities);
// }).catch(err => {console.error(err)})


const getInfo = async () => {
    console.time("getInfo");
    try {
        const cities =  await getCities();
        const users =  await getUsers()
        console.log('users: ', users);
        console.log(cities);
        console.timeEnd("getInfo");
    } catch (err) {
        console.error(err);
    }
}
getInfo();

const getInfo2 = async () => {
    console.time("getInfo2");
    Promise.all([getCities(), getUsers()])
    .then(([cities, users]) => {
        console.log(cities);
        console.log(users);
        console.timeEnd("getInfo2");
    })
}

getInfo2();