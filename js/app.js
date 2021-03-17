//LAB07 CREATING CONSTRUCTOR AND TABLE.

'use strict';
let myTableId = document.getElementById('fuild');//Calling the table by The ID.
let tableCreator = document.createElement('table');//creating the table.

//Appen the body to the Table
myTableId.appendChild(tableCreator);

//the form ID
let input=document.getElementById('formID');

//Hour Array To Specify the the time of opening and closing.
let hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];
let sumOfTotal=[];
// let cityTotal=[];
//A Constructor Instide Of The 5 Previous Objects.
function CityData(max,min,avg,name,total) {
  this.max=max;
  this.min=min;
  this.avg=avg;
  this.name=name;
  this.customerberhour=[];
  this.coockiesForEachPerson=[];
  this.total=total;

  this.randomCus=function(){
    for(let b=0; b<hour.length;b++ ){
      let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
      this.customerberhour.push(randCustomer);
    }
  };
}
CityData.prototype.avgOfCockiesForEachPerson= function() {
  this.randomCus();
  for(let a=0;a<hour.length;a++){
    let avgOfCockies=Math.ceil(this.avg * this.customerberhour[a]);
    // console.log(avgOfCockies);
    this.coockiesForEachPerson.push(avgOfCockies);
    this.total+=avgOfCockies;
  }
  sumOfTotal.push(this.total);
  console.log(sumOfTotal);
};


//generating the table content.
CityData.prototype.generatTableForTheCities= function() {

  //Creating the first table data to include the name in it.
  let tableBody = document.createElement('tr');

  //Calling the name and append it.
  let tableRows = document.createElement('td');
  let nameOfTheCity=this.name+': ';

  //appending the data
  tableCreator.appendChild(tableBody);
  tableBody.appendChild(tableRows);
  tableRows.textContent=nameOfTheCity;

  this.avgOfCockiesForEachPerson();
  //creating the other elements in the table.
  for (let j = 0; j <hour.length; j++) {
    let tableData = document.createElement('td');
    let cookiesNumber=this.coockiesForEachPerson[j];
    tableData.textContent=cookiesNumber+' ';
    // tableBody.appendChild(tableRows);
    tableBody.appendChild(tableData);
  }
  let tableData = document.createElement('td');
  tableData.textContent=this.total;
  tableBody.appendChild(tableData);
  // tableBody.appendChild(tableRows);

};

// Calling The Objects By "The Data Of Each City" Inside A Costructor.
let seattle=new CityData(65,23,6.3,'Seattle',0);
console.log(seattle);

let Tokyo=new CityData( 24, 3, 1.2,'Tokyo',0);
console.log(Tokyo);

let Dubai=new CityData(38,11,3.7,'Dubai',0);
console.log(Dubai);

let Paris=new CityData(38,20,2.3,'Paris',0);
console.log(Paris);

let Lima= new CityData(16,2, 4.6,'Lima',0);
console.log(Lima);



let cityList=[seattle,Tokyo,Dubai,Paris,Lima];

//Generating Head For The Table.
function generatHeaderForTheTable(){

  //Creating the first table data to include the name in it.
  let tableHead = document.createElement('tr');

  //appending the data.
  tableCreator.appendChild(tableHead);

  //First Cell for my table which is the city name.
  let tableData = document.createElement('td');
  tableData.textContent='Citys Names ';
  tableHead.appendChild(tableData);

  //creating the other elements in the table.
  for (let i = 0; i < hour.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent=hour[i]+' ';
    tableHead.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent='Each City Total ';
  tableHead.appendChild(tableData);
}

//Creating the first table data to include the name in it.
let tableFoot = document.createElement('tr');

//Genarating the Foot fot the Table.
function generatFooterForTheTable() {

  //appending the data.
  tableCreator.appendChild(tableFoot);

  let totalOfTheTotal=0;
  //First Cell for my table which is the city name.
  let tableData = document.createElement('td');
  tableData.textContent='Total / ';
  tableFoot.appendChild(tableData);

  //creating the other elements in the table.
  for (let i = 0; i < hour.length; i++){
    let hours=0;
    for(let j=0;j<cityList.length;j++){
      hours+=cityList[j].coockiesForEachPerson[i];
      totalOfTheTotal+=cityList[j].coockiesForEachPerson[i];
    }
    let tableData = document.createElement('td');
    tableData.textContent=hours+'   ';
    tableFoot.appendChild(tableData);
  }
  let tableData1 = document.createElement('td');
  tableData1.textContent=totalOfTheTotal+'   ';
  tableFoot.appendChild(tableData1);
}

//calling the functions to apply them
generatHeaderForTheTable();

seattle.generatTableForTheCities();
Tokyo.generatTableForTheCities();
Dubai.generatTableForTheCities();
Paris.generatTableForTheCities();
Lima.generatTableForTheCities();


//add  even to enable control on it
input.addEventListener('submit', addingNewElement());


function addingNewElement(event) {
  event.preventDefault();//default action that belongs to the event will not occur.

  //set the new data to the object
  let name=event.target.fname.value;
  let max=parseInt(event.target.max.value);
  let nmn=parseInt(event.target.min.value);
  let avg=parseInt(event.target.avg.value);

  // Calling The Objects By "The New Data Of Each City" Inside A Costructor.
  let newItem= new CityData(max,nmn,avg,name,0);
  console.log(newItem);

  //to generate the new row for the new city
  newItem.generatTableForTheCities();

  //remove the existing footer to add the new one
  myTableId.removeChild(tableFoot);

  //calling the footer
  generatFooterForTheTable();


}
