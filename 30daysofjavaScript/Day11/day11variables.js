const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}


]


//Q1 
let [e,pi,gravity,bodyTemp,boilingTemp] = constants
console.log(e, pi, gravity, bodyTemp , boilingTemp);
//Q2 Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin,est,sw,den,nor] = countries
//Q3
let {width: w, height: h, area: a, perimeter: p } = rectangle
console.log(w, h, a, p)

//LVL TWO 
//Q1 
for (const {name,scores,skills,age} of users){
  console.log(name,scores,skills,age)}
//Q2
for(const {skills}of users){
let arr = (skills.length)
if (skills.length <2){
  console.log(name);//not sure 
}
}

