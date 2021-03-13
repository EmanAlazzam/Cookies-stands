//LAB07 CREATING CONSTRUCTOR AND TABLE.

'use strict';

//Hour Array To Specify the the time of opening and closing.
let hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];
let cookiesArray=[];
let sumOfTotal=[];
let cityTotal=[];
//A Constructor Instide Of The 5 Previous Objects.
function CityData(max,min,avg,name,total) {
  this.max=max;
  this.min=min;
  this.avg=avg;
  this.name=name;
  this.total=total;
  this.randomCus=function(){
    let randCustomer= (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return randCustomer;
  };
  this.avgOfCockiesForEachPerson= function() {
    let avgOfCockies=(Math.floor(this.avg * this.randomCus()));
    console.log(this.randomCus());
    return avgOfCockies;
  };

}

//Generating Head For The Table.
function generatHeaderForTheTable(hourArry){

  let myTableHead = document.getElementById('tableid');//Calling the table by The ID "tavleid".
  let tableCreator = document.createElement('table');//creating the table.
  let tableHead = document.createElement('tr');//Creating the first table data to include the name in it.

  //appending the data.
  myTableHead.appendChild(tableCreator);
  tableCreator.appendChild(tableHead);

  //First Cell for my table which is the city name.
  let tableData = document.createElement('th');
  tableData.textContent='City Name / ';
  tableHead.appendChild(tableData);

  //creating the other elements in the table.
  for (let i = 0; i < hourArry.length; i++) {
    let tableData = document.createElement('th');
    tableData.textContent=hourArry[i]+' ';
    tableHead.appendChild(tableData);
  }
}

//Calling The Head Function.
generatHeaderForTheTable(hour);


//generating the table content.
CityData.prototype.generatTableForTheList= function() {
  let myTableId = document.getElementById('tableid');//Calling the table by The ID "tavleid".
  let tableCreator = document.createElement('table');//creating the table.
  let tableBody = document.createElement('tr');//Creating the first table data to include the name in it.

  //appending the data
  myTableId.appendChild(tableCreator);
  tableCreator.appendChild(tableBody);

  //Calling the name and append it.
  let tableRows = document.createElement('tr');
  let nameOfTheCity=this.name;
  tableBody.appendChild(tableRows);
  tableRows.append(nameOfTheCity);

  //creating the other elements in the table.
  for (let j = 0; j <hour.length; j++) {
    let tableData = document.createElement('td');
    let cookiesNumber=this.avgOfCockiesForEachPerson();
    tableData.appendChild(document.createTextNode(cookiesNumber));
    tableBody.appendChild(tableRows);
    tableRows.appendChild(tableData);
    this.total+=cookiesNumber;
    cookiesArray[j]=cookiesNumber;
  }
  let tableData = document.createElement('td');
  tableData.appendChild(document.createTextNode(' '+this.total));
  tableBody.appendChild(tableRows);
  tableRows.appendChild(tableData);
  console.log(cookiesArray);
  cityTotal.push(this.total);

};


// Calling The Objects By "The Data Of Each City" Inside A Costructor.
let seattle=new CityData(65,23,6.3,'Seattle',0);
console.log(seattle);
seattle.generatTableForTheList();
let seattleArry=[];
seattleArry=cookiesArray;
console.log(seattleArry);

let Tokyo=new CityData( 24, 3, 1.2,'Tokyo',0);
console.log(Tokyo);
Tokyo.generatTableForTheList();
console.log(cookiesArray);
let tokyoArry=cookiesArray;

let Dubai=new CityData(38,11,3.7,'Dubai',0);
console.log(Dubai);
Dubai.generatTableForTheList();
console.log(cookiesArray);
let dubaiArry=cookiesArray;

let Paris=new CityData(38,20,2.3,'Paris',0);
console.log(Paris);
Paris.generatTableForTheList();
console.log(cookiesArray);
let parisArry=cookiesArray;

let Lima= new CityData(16,2, 4.6,'Lima',0);
console.log(Lima);
Lima.generatTableForTheList();
console.log(cookiesArray);
let limaArry=cookiesArray;
console.log(cityTotal);

//Genarating the Foot fot the Table.
function generatFooterForTheTable() {

  let myTableFoot = document.getElementById('tableid');//Calling the table by The ID "tavleid".
  let tableCreator = document.createElement('table');//creating the table.
  let tableFoot = document.createElement('tr');//Creating the first table data to include the name in it.

  //appending the data.
  myTableFoot.appendChild(tableCreator);
  tableCreator.appendChild(tableFoot);

  //First Cell for my table which is the city name.
  let tableData = document.createElement('th');
  tableData.textContent='Total / ';
  tableFoot.appendChild(tableData);

  //creating the other elements in the table.
  for (let i = 0; i < 17; i++) {
    let tableData = document.createElement('th');
    sumOfTotal[i] = seattleArry[i] + tokyoArry[i] + dubaiArry[i] + parisArry[i] + limaArry[i];
    tableData.textContent=sumOfTotal[i];
    tableFoot.appendChild(tableData);
    console.log(seattleArry[i]);
  }
  let tableData1 = document.createElement('th');
  sumOfTotal[hour.length] = cityTotal[0]+cityTotal[1]+cityTotal[2]+cityTotal[3]+cityTotal[4];
  tableData1.textContent=sumOfTotal[hour.length]+' ';
  tableFoot.appendChild(tableData1);
}

generatFooterForTheTable();

