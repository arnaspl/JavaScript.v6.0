// ---------------------Promise example---------------------

// const myPromise = new Promise((resolve, reject) => {
//     const a = 1 + 1;
//     if (a === 2) {
//         resolve('Success');
//     } else {
//         reject('Failure');
//     }
// });

// myPromise
//     .then(message => console.log(message))
//     .catch(error => console.log(error))

// ---------------------Task 1 ---------------------

// const person = {
//     id: 1,
//     firstName: 'Jonas',
//     lastName: 'Jonaitis',
//     keepPromise: true
// }

// const keptPromise = new Promise((resolve, reject) => {
//     person.keepPromise ? resolve('SUCCESS') : reject('FAILURE')
// });

// keptPromise
//     .then(message => console.log(message))
//     .catch(error => console.log(error))

// ---------------------Promise example with return---------------------

// function isCityInLithuania (location) {
//     return new Promise((resolve, reject) => {
//         if (location === 'Vilnius') {
//             resolve(location);
//         } else if (location === 'Kaunas') {
//             resolve(location);
//         } else if (location === 'Alytus') {
//             resolve(location);
//         } else {
//             reject('Tokio miesto nera');
//         }
//     })
// }

// isCityInLithuania('Alytus')
//     .then(location => console.log(location))
//     .catch(error => console.log(error))

// ---------------------Promise example with array---------------------

// const cities = ['Vilnius', 'Kaunas', 'Alytus'];

// function isCityInLithuania (location) {
//     return new Promise((resolve, reject) => {
//         cities.includes(location) ? resolve(location) : reject('Tokio miesto nera')
//     })
// }

// isCityInLithuania('Alytus')
//     .then(location => console.log(location))
//     .catch(error => console.log(error))

// ---------------------Multiple promises loading at the same time example---------------------

// const getUsers = new Promise((resolve, reject) => {
//     resolve('USERS DATA');
// })

// const getCities = new Promise((resolve, reject) => {
//     resolve('CITIES DATA');
// })

// const getCountries = new Promise((resolve, reject) => {
//     resolve('COUNTRIES DATA');
// })

// Promise.all([getUsers, getCities, getCountries])
//     .then(data => console.log(data))


// Gets promise which loads first
// Promise.race([getUsers, getCities, getCountries])
//     .then(data => console.log(data))

// Shorter way to write promise, without reject
// const getUsers = new Promise.resolve('USERS DATA');

// ---------------------Promise example #2---------------------

// const hasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//     if (hasMeeting) {
//         const details = {
//             location: 'Slack',
//             time: '12.30'
//         }
//         resolve(details);
//     } else {
//         reject('Susitikimo nebus')
//     }
// });

// const addToCalendar = details => {
//     const calendar = `Susitikimas paskirtas ${details.time} valanda per ${details.location} programele`;
//     return Promise.resolve(calendar)

    // return new Promise((resolve, reject) =>{
    // const calendar = `Susitikimas paskirtas ${details.time} valanda per ${details.location} programele`;
    // resolve(calendar)
// })
// }

// meeting
//     .then(addToCalendar)
//     .then(details => console.log(details))
//     .catch(error => console.log(error))

// ---------------------Async example---------------------

// async function asyncFunction () {
//     const data = await getDataFromDatabase();
//     console.log(data)
// }

// ---------------------Async example #2---------------------
// const hasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//     if (hasMeeting) {
//         const details = {
//             location: 'Slack',
//             time: '12.30'
//         }
//         resolve(details);
//     } else {
//         reject('Susitikimo nebus')
//     }
// });

// const addToCalendar = details => {
//     const calendar = `Susitikimas paskirtas ${details.time} valanda per ${details.location} programele`;
//     return Promise.resolve(calendar)
// }
// // naudojamas vietoj .then() ir .catch()
// async function myMeeting () {
//     const meetingDetails = await meeting;
//     const message = await addToCalendar(meetingDetails);
//     console.log(message);
// }

// myMeeting();

// ---------------------Async example #2---------------------

fetch('https://my-json-server.typicode.com/typicode/demo/db')
    .then(response => response.json())
    .then(data => console.log(data.posts))