//console.log(document.querySelector('.alert'))

//

/**
 * 
 */

//var name = "Martynas"; //global
//let name = "Tadas";
//var lname = "Jonaitis";
//function test(){
   // var lName = 'Petraitis';  //function
//}
//if(lName){
   // let name="Jonas"; //block scope
//}

//

//let firstName = "Jonas"; // string
//let age = 25; //number int
//let price = 12.56; //number float
//let userOnline = false; //boolean
//firstName = "Tadas";

//const count = 12; //read only

//console.log(userOnline)
//console.log(price)
//console.log(age)
//console.log(firstName)  //ouput var
//console.log(typeof(firstName)) //data type

//Array
//let users = ['Jonas','Ieva','Tadas','Karolis'];

//Object
let user = {
    firstName: 'Jonas',
    lastName: 'Jonaitis',
    email: 'jonas@gmail.com',
};

//Array
let users = [
    {
        firstName: 'Jonas',
        lastName: 'Jonaitis',
        email: 'jonas@gmail.com',
    },
    {
        firstName: 'Jonas',
        lastName: 'Jonaitis',
        email: 'jonadsss@gmail.com',
    },
    {
        firstName: 'Jonas',
        lastName: 'Jonaitis',
        email: 'jonaffds@gmail.com',
    },
]

//console.log(users[2].email);
//console.log(typeof(users));
//console.log(user.firstName); //output firstName


//let items = 15;

//console.log(items++);     abu atsikomentuoti
//console.log(items++);

//console.log(++items);


//let userOnePoints = 10;  //number

//let userTwoPoints = '10'; //string

//if(userOnePoints === userTwoPoints){
  //  console.log('Rezultatas yra lygus')
//}else{
  //  console.log('Rezultatas nera lygus')
//}



//let movieTitle = 'The Matrix';
//let item = 12;
//let price = 12.56;
//console.log('Filmo pavadinimas yra:' + movieTitle); //prastesnis
//console.log(`Filmo pavadinimas yra: ${movieTitle}`) //geresnis
//console.log(`Items price is: ${item*price}`);
//console.log(`Filmo pavadinimo ilgis: ${movieTitle.length}`);
//console.log(movieTitle[4]);
//console.log(movieTitle.indexOf('rix'));
//console.log(movieTitle.slice(3,7)); //gabalas kazko
//console.log(movieTitle.replace('The','At')) //replace

let items = ['Phone', 'Computer', 'Milk']; //cia array

console.log(items.length); //skaiciuoja

items = items.join(','); //convert arrey to string

items = items.split(','); //covert string to array

items.push('Smart watch'); //prideti elementa

items.pop(); //pasalina paskutini elementa

items.shift(); //remove first element in array

items.unshift('Kazkas'); //prideda pirma to array

console.log(items);

let activeUser = 'Jonas';

if(activeUser === "Jonas" && activeUser.lenght<=4){
    console.log('Standart user');
}else if(activeUser.length<=8){
    console.log('VIP user')
}
else{
    console.log('User is inactive');
}

let language = "lt";

switch(language){
    case "lt":
        console.log("Labas");
        break;
    case "en":
        console.log("Hello");
        break;
    default:
        console.log('Nezinau tokios kalbos');
}

let result = 12 > 6 ? "true":"false"; //ternary operator
console.log(result);

// ciklai

for(let i=0;i<10;i++){
    console.log(i);
}

for(let item of items){  //works only with array
    console.log(item)
}

for(let item in items){
console.log(items[item])
}


let item = {
    code: 1234,
    title:'Computer',
    count:12,
    price: 1250.50
};

for(let property in item){
    console.log(`property: ${item[property]}`)
}

let userList = [
    "Gabriele",
    "Laura",
    "Greta",
    "Egle",
    "Ieva",
    "Milda",
    "Jurga",
    "Rasa",
    "Giedre",
    "Ingrida"
];


for(let name of userList){
    if (name.length === 5 || name==='Milda')
    console.log(name)
}




let students = [
    {
        id:1,
        firstName: "Ponas",
        lastName: "Ponaitis",
        age:22,
        email: "ponas@gmail.com",
        group: "students"
    },
    {
        id:2,
        firstName: "Jonas",
        lastName: "Jonaitis",
        age:25,
        email: "jonas@gmail.com",
        group: "students"
    },
    {
        id:3,
        firstName: "Lonas",
        lastName: "Lonaitis",
        age:27,
        email: "lonas@gmail.com",
        group: "students"
    },
    {
        id:4,
        firstName: "Petras",
        lastName: "Jonaitis",
        age:28,
        email: "petras@gmail.com",
        group: "students"
    },
    {
        id:5,
        firstName: "Tonas",
        lastName: "Tonaitis",
        age:20,
        email: "tonas@gmail.com",
        group: "students"
    }
];

console.log('Studentu sarasas:');
for (let student of students ){
    console.log('.............')
    for(let value in student){
        console.log(`${value}: ${student[value]}`)
    }
}



console.log('Studentu sarasas:');
for (let student of students ){
    console.log('.............')
    if(student.age <=25){
        for(let value in student){
        console.log(`${value}: ${student[value]}`)
        }
    }
}









