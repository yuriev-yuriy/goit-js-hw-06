"use strict";
import users from "./users.js";
console.table(users);

// // // Задание №1
// Получить массив имен всех пользователей(поле name).

const getUserNames = (users) => {
  const userNames = users.map((user) => user.name);
  return userNames;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание №2
const getUsersWithEyeColor = (users, color) => {
  const sortUserByEyeColor = users.filter((user) => user.eyeColor === color);
  return sortUserByEyeColor;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание №3
// Получить массив имен пользователей по полу(поле gender).
const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => {
      return user.gender === gender;
    })
    .map((user) => {
      return user.name;
    });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание №4
// Получить массив только неактивных пользователей(поле isActive).
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание №5
// Получить пользоваля(не массив) по email(поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// Задание №6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Задание №7
// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// Задание №8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание №9
// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => {
      return a.friends.length - b.friends.length;
    })
    .map((user) => {
      return user.name;
    });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание №10
// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  return users

    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])

    .filter((a, b, c) => {
      return c.indexOf(a) === b;
    })

    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
