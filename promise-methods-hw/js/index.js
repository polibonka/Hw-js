//1
const delayedPromise = (value, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay)
    })
}

const promises = [
    delayedPromise('Проміс 1', 1000),
    delayedPromise('Проміс 2', 2000),
    delayedPromise('Проміс 3', 3000),
    delayedPromise('Проміс 4', 4000),
    delayedPromise('Проміс 5', 5000),

]

Promise.all(promises)

.then((results) => {
    console.log('Усі промісу завершено');
    
     console.log(results)
    })

.catch((error) => console.log(error))


//2

const randomDelay = (value, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, Math.random() * delay)
    })
}


const randomPromises = [
    randomDelay('Проміс 1', 1000),
    randomDelay('Проміс 2', 2000),
    randomDelay('Проміс 3', 3000),
    randomDelay('Проміс 4', 4000),
    randomDelay('Проміс 5', 5000),

]

Promise.race(randomPromises)

.then((result) => {
    console.log('Проміс завершився першим за час');
    console.log(result)
    })

    .catch((error) => console.log(error))


