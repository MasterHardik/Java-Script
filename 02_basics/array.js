const marvel_heros = ["thor", "Ironman" ,"Spiderman"]
const dc_heros = ["superman", "flash","batman"]

// marvel_heros.push(dc_heros)// bt issue that it stores array at third index
// console.log(marvel_heros); 
// console.log(marvel_heros[2][1]);

const allHeros = marvel_heros.concat(dc_heros)// bt issue that it stores array at third index
console.log(allHeros); //proper pushing

// thirdle using spread operator

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity )//flats to the depest depth toherwise can provide the level of flatning)

console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))// gives empty array : [] as donst udnerstand so we need to tell from keys or values // interesting


let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

