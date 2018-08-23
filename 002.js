/*
===================
Jumlah Huruf Vocal
===================
[INSTRUCTIONS]
SumVocal adalah sebuah function yang menerima satu parameter berupa string.
Jika tidak ada vocal dalam string tersebut, maka function akan mereturn angka -1

[RULE]
- Dilarang menggunakan sintaks .split()! .findIndex .indexOf .filter .map
- Dilarang menggunakan regex .match, .replace dan lainnya!
- Asumsi input selalu upper case atau huruf besar
- Jika tidak ada huruf vocal maka function akan mengembalikan nilai -1
[EXAMPLE]
SumVocal('ABCDEFG')

output: 2
*/

function SumVocal(array) {
  var jumlah = 0
  for(var i = 0; i < array.length ; i++){
    //console.log(array[i])
    
    if(array[i]=='A'||array[i]=='I'||array[i]=='U'||array[i]=='E'||array[i]=='O'){
      jumlah += 1
    } 
  }

  if (jumlah === 0){
    return -1
  } else {
    return jumlah
  }
}

console.log(SumVocal('AIUEO')); // 5
console.log(SumVocal('HACKTIV8')); // 2
console.log(SumVocal('JAKARTA')); // 3
console.log(SumVocal('QWRTYP')); // -1