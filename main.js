const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(a);
console.log(b);
console.log(c, 'ikkalasi qoshilgan');
let i = '12'
console.log(i);
console.log(+i, 'Number');
let j = Math.round(Math.random() * 100)
if(j % 2 == 0){
    console.log(j, 'bu son juft');
}else{
    console.log(j, 'bu son toq');
}
let k = prompt('soz kiriting')
if(k == 'Mars'){
    console.log('Mars')
}else{
    console.log('Mars IT School')
}
const m = ['Mars', 'School', 'Qalesan', 'ari', 'Kiriting']
console.log(m)
for (let i = 0; i < m.length; i++) {
    if (m[i].length >= 5) {
      console.log(m[i]);
    }
}
const arr = []
const array = []
for(let n = 0; n < 100; n++){
    if(n % 2 == 0){
        arr.push(n)
    }else{
        array.push(n)
    }
}
console.log(arr, 'juft');
console.log(array, 'toq');