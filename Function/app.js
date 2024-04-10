// const dais1 = rollDie();
// const dais2 = rollDie();
// const dais3 = rollDie();
// const dais4 = rollDie();
// const dais5 = rollDie();
// const dais6 = rollDie();

// const total = rollDie(6);

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

// function singSong() {
//     console.log('ド');
//     console.log('レ');
//     console.log('ミ');
// }

// function greet(fisrtName, lastName) {
//   console.log(`Hi, ${fisrtName} ${lastName[0]}.`);
// }
// greet('ken', 'yamada');

// repeat('hi', 3);

// function repeat(str, numTimes) {
//   let result = '';
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }

function add(x,y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    return false;
  }
  return x + y;
}