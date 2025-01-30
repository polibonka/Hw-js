const delay = ms => {
   return new Promise((resolve) => {
     setTimeout(() => { 
        resolve(ms)
     }, ms);
   })
  };


  const logger = time => console.log(`Resolved after ${time}ms`);
  // Виклич функції для перевірки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms


  //2

  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  const toggleUserState = (allUsers, userName) => {
 return new Promise ((resolve, reject) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      );
      resolve(updatedUsers)
      reject(new Error('User not found'))
 })
    
  };
  const logger2 = updatedUsers => console.table(updatedUsers);

 
  toggleUserState(users, 'Mango').then(logger2);
  toggleUserState(users, 'Lux').then(logger2);

  //3
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction) => {
    return new Promise((resolve, reject) => {
      const delay = randomIntegerFromInterval(200, 500);
  
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
  
        if (canProcess) {
          resolve({ id: transaction.id, time: delay }); // Передаємо об'єкт
        } else {
          reject(transaction.id); // Передаємо лише id
        }
      }, delay);
    });
  };
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = (id) => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  // Виклики функції
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);
  