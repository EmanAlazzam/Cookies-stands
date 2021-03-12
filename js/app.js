'use strict';

//Hour Array To Specify the the time of opening and closing.
let hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];


//Creating an unordered list for each object.
function render (branch)
{
  //Creating The Unorder List For Each Object.
  let Elemens=document.getElementById('list');
  let unOrderList=document.createElement('ul');
  Elemens.appendChild(unOrderList);

  //Creating An Element For The City Name.
  let cityName=document.createElement('p');
  unOrderList.appendChild(cityName);
  cityName.textContent=branch.name;

  //Creating The Lists For Each Random Number.
  for(let j=0;j<hour.length;j++)
  {
    let numOfTotal=branch.avgOfCockiesForEachPerson();
    let lists=document.createElement('li');
    unOrderList.appendChild(lists);
    branch.total+=numOfTotal;
    lists.textContent=hour[j]+': '+numOfTotal+' of Cookies.';
  }

  console.log(branch.total);
  //Unodered list for the summation of cookies ber day.
  let lists=document.createElement('li');
  unOrderList.appendChild(lists);
  lists.textContent='Total'+': '+branch.total+' of Cookies.';

}

//Declearing The Objects For The 5 Different Locations.
let Seattle={
  max:65,
  min:23,
  total:0,
  avg:6.3,
  name:'Seattle',
  randomCus: function(){
    let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return randCustomer;
  },
  avgOfCockiesForEachPerson: function() {
    let avgOfCockies=(Math.floor(this.avg * this.randomCus()));
    return avgOfCockies;
  },
};

//
let Tokyo={
  max: 24,
  min: 3,
  avg: 1.2,
  name:'Tokyo',
  total:0,
  randomCus: function(){
    let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return randCustomer;
  },
  avgOfCockiesForEachPerson: function() {
    let avgOfCockies=(Math.floor(this.avg * this.randomCus()));
    return avgOfCockies;
  },};

//
let Dubai={
  max: 38,
  min: 11,
  avg: 3.7,
  name:'Dubai',
  total:0,
  randomCus: function(){
    let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return randCustomer;
  },
  avgOfCockiesForEachPerson: function() {
    let avgOfCockies=(Math.floor(this.avg * this.randomCus()));
    return avgOfCockies;
  },
};

//
let Paris={
  max: 38,
  min: 20,
  avg: 2.3,
  name:'Paris',
  total:0,
  randomCus: function(){
    let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return randCustomer;
  },
  avgOfCockiesForEachPerson: function() {
    let avgOfCockies=(Math.floor(this.avg * this.randomCus()));
    return avgOfCockies;
  },
};

//
let Lima={
  max: 16,
  min: 2,
  avg: 4.6,
  name:'Lima',
  total:0,
  randomCus: function(){
    let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return randCustomer;
  },
  avgOfCockiesForEachPerson: function() {
    let avgOfCockies=(Math.floor(this.avg * this.randomCus()));
    return avgOfCockies;
  },};




// Calling The Objects By "Name of the object" Inside A Render Function.
render(Seattle);
render(Tokyo);
render(Dubai);
render(Paris);
render(Lima);
