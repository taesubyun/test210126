// 1.객체지향 프로그래밍 다형성에 대해서 아는 대로 설명하시오.
// -> 하나의 객체를 가지고 다양한 형태로 나타내는 것
// 1. 다형성의 핵심 구현 방법 2가지를 설명하시오.
// -> overriding/ overloading
// 2.break와 continue에 차이점에 대해 설명하시오.
// -> break: 반복문에서 이터레이션 중에 특정 지점에서 중지하고 반복문에서 빠져 나와라 라는 명령.
//    continue : 반복문에서 이터레이션 중에 특정 지점만 중지하고 이터레이션을 조건에 부합할때까지 계속 진행하라는 명령.
//------------------------------------------------------------------------------------------------------

function getSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("getSum(1)의 값은 " + getSum(1));
console.log("getSum(2)의 값은 " + getSum(2));
console.log("getSum(10)의 값은 " + getSum(10));
// ------------------------------------------------------------------------------------------------------------

function filterDividedBy2(numbers) {
  if (numbers === null) {
    return [];
  }
  const filtered = [];
  for (index in numbers) {
    if (numbers[index] < 0) {
      return [];
    } else if (number[index] % 2 === 0) {
      filtered.push(numbers[index]);
    }
  }
  return filtered;
}
console.log(filterDividedBy2([1, 2, 3]));

//------------------------------------------------------------------------------------------------------------
function filterDivideBy(x, numbers) {
  if (numbers === null) {
    return [];
  }
  const filtered = [];
  for (index in numbers) {
    if (numbebrs[index] < 0) {
      return [];
    } else if (numbers[index] % x === 0) {
      filtered.push(numbers[index]);
    }
  }
  return filtered;
}
console.log(filterDivideBy(2, [1, 2, 3]));

//------------------------------------------------------------------------------------------------------
class SportsTeam {
  constructor(win, lose, draw) {
    this.win = win;
    this.lose = lose;
    this.draw = draw;
  }
}

class SoccerTeam extends SportsTeam {
  constructor(win, lose, draw) {
    super(win, lose, draw);
  }
  getPoint = function () {
    return this.win * 3 + this.draw * 1;
  };
}

const manUtd = new SoccerTeam(12, 3, 4);
console.log("manUtd.getPoint() 는 " + manUtd.getPoint());

const manCity = new SoccerTeam(11, 2, 5);
console.log("manCity.getPoint() 는 " + manCity.getPoint());

const leisterCity = new SoccerTeam(12, 5, 2);
console.log("liesterCity.getPoint() 는 " + leisterCity.getPoint());

const liverPool = new SoccerTeam(9, 3, 7);
console.log("liverPool.getPoint() 는 " + liverPool.getPoint());

const tottenHam = new SoccerTeam(9, 3, 6);
console.log("tottenHam.getPoint() 는 " + tottenHam.getPoint());

const SoccerTeams = [manUtd, manCity, leisterCity, liverPool, tottenHam];
for (let i = 0; i < SoccerTeams.length; i++) {
  console.log(
    "soccerTeams 리스트를 반복문으로 순회하면서 승점을 출력한 값은 " +
      SoccerTeams[i].getPoint() +
      " 이다,"
  );
}
console.log(
  "SoccerTeams리스트와 반복문을 활용하여 얹은 최다 승점을 가진 팀은 : " +
    Math.max(40, 38, 38, 34, 33) +
    "이다"
);
