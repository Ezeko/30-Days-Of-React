/**
 * Declare an empty array;
Declare an array with more than 5 number of elements
Find the length of your array
Get the first item, the middle item and the last item of the array
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies
 */

 //1
 const emptyArray = Array();
 //2
 const emptyFiveArray = Array(5);
 const jsFrameworks = ['React', 'React Native', 'Angular', 'Vue', 'Knockout', 'Express', 'Oracle Jet'];
 //3
const lengthOfFrameworksArray = jsFrameworks.length;
//4
const firstItem = jsFrameworks[0]

const middleItem = jsFrameworks[((parseInt(lengthOfFrameworksArray/2)) - 1)];

const lastItem = jsFrameworks[((lengthOfFrameworksArray)-1)];
//5
const mixedDataTypes = [[1,2,3], 20.7, 'john doe', {name: 'Helen Uwen', age: 24, location: "USA"}, 1000, 'Professor', 'Money heist'];
//6
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//7 
console.log(companies);
//8 
const companyLenth = companies.length;
console.log(companyLenth);
//9
const firstCompany = companies[0];

const middleCompany = companies[((parseInt(companyLenth/2)) - 1)];

const lastCompany = companies[((companyLenth)-1)];
console.log(`First company: ${firstCompany}`);
console.log(`Middle company: ${middleCompany}`);
console.log(`Last company: ${lastCompany}`)

// 10

for(i=0; i < companyLenth; i++ ){
    console.log(`Number ${i + 1} company is ${companies[i]}`)
}

// 11

for(i=0; i < companyLenth; i++ ){
    console.log(`Number ${i + 1} company in uppercase: ${companies[i].toUpperCase()}`)
}
//12 
console.log(companies.join(', '), ', are big IT companies');
//13
checkCompany = 8;
companies.indexOf(checkCompany) === 1 ?  console.log(companies[checkCompany]) : console.log('Company does not exist in companies list');
//14
for(i=0; i < companyLenth; i++ ){
    if (companies[i].includes('oo')){
        //dont print
    }else{
        console.log(`${companies[i].toUpperCase()} does not contain OO`)
    }

}
//15
const sortCompanies = companies.sort();
//16
const reverseCompanies = companies.reverse();
//console.log(companies)
//17
const removeFirstThree = companies.splice(1,3)
//18
const removelastThree = companies.splice(4,6)
//19
const removeMiddle = (companies.slice((parseInt(companyLenth / 2)), (parseInt(companyLenth/2) + 1)));
//20 
const removeFirstcompany = companies.shift();
//21 
const removeMiddleCompany = companies.shift(parseInt(companyLenth/2));
//22
const removeLastCompany = companies.pop();
//23
const removeAll = console.log(companies.splice())