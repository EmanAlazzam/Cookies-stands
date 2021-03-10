'use strict';

let hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];
let Seattle={
  max:65,
  min:23,
  avg:6.3,
  hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'],
  name:'seattle',
  total:0,
  avgOfCockies:[],

  randomCus: function(){
    for (let i=0;i<this.hour.length ;i++){
      let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
      return randCustomer;
    }
  },
  avgOfCockiesForEachPerson: function() {
    for(let j=0;j<this.hour.length;j++){
      this.avgOfCockies=(Math.floor(this.avg * this.randomCus()));
      this.total=this.total+this.avgOfCockies[j]; //this keep give me a zero as the sum 
    }
  },
  dom: function() {
    document.getElementById('test').innerText=this.name;
    let prg=document.getElementById('lists');
    let unOrderedList=document.createElement('ul');
    for(let c=0;c<this.hour.length;c++){
      let lists=document.createElement('li');
      lists.innerText=[hour[c]+': '+this.hourArry[c]];
      unOrderedList.appendChild(lists);
      prg.appendChild(unOrderedList);
    }
    document.getElementById('test2').innerText=this.total;
  }
};

console.log(Seattle.randomCus());
console.log(Seattle.avgOfCockiesForEachPerson());
console.log(Seattle.dom());




// function hour(hourArry) {
//   for(let i=0;i<=16;i++){
//     avgArry[i]=[hourArry[i]+seattle.avgOfCockies];
//     console.log(avgArry);
//   }
// let seattle={
//   name: 'jordan',
//   max:65,
//   min: 23,
//   avg: 6.3,
//   avgOfCockies: function(){
//     let randCustomer= Math.floor(Math.random() * (this.max - this.min) + this.min);
//     return randCustomer;
//   }
// };
// console.log(seattle.randCustomer());

//   for(let i=6;i<12;i++){
//     hourArry[i]=[i+'am: '+this.avgOfCockies()];
//   }
//   for(let i=12;i<20;i++){
//     hourArry[i]=[i+'pm: '+this.avgOfCockies()];
//   }
//   return hourArry;
// }


//   Tokyo:{
//     max: 24,
//     min: 3,
//     avg: 1.2,
//   },
//   Dubai:{
//     max: 38,
//     min: 11,
//     avg: 3.7,
//   },
//   Paris:{
//     max: 38,
//     min: 20,
//     avg: 2.3,
//   },
//   Lima:{
//     max: 16,
//     min: 2,
//     avg: 4.6,
//   },
// };
