import React from "react";

const Test = () => {
  //------------------------------------------
  const sum = (a) => {
    return (b) => {
      return a + b;
    };
  };
  const summa = sum(9)(8);

  //------------------------------------------
  let arr = [1, 2, 3, 4, 5, 6, 7];

  //let between = arr.filter((item) => item >= 3 && item <= 6).join(" ");

  let between = arr.filter(inBetween(2, 6)).join(" ");

  function inBetween(a, b) {
    return function (item) {
      return item >= a && item <= b;
    };
  }

  const inArray = (arr) => (item) => arr.includes(item);
  const array = arr.filter(inArray([2, 3, 10, 6])).join(" ");

  //------------------------------------------
  const users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  //const userSort = users.sort((a, b) => (a.name > b.name ? 1 : -1));

  const userSort = users.sort(byField("name"));

  function byField(prop) {
    return (a, b) => (a[prop] > b[prop] ? 1 : -1);
  }

  //------------------------------------------
  function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
      let item = function () {
        return i;
      };
      shooters.push(item);
    }
    return shooters;
  }

  let army = makeArmy();
  army.forEach((i) => console.log(i()));

  return (
    <div>
      <p>{summa}</p>
      <p>{between}</p>
      <p>{array}</p>
      <p>{JSON.stringify(users)}</p>
    </div>
  ); //<div>TEST PAGE</div>;
};

export default Test;
