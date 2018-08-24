/*
   * buatlah function penerjunPayung yang menerima 2 parameter
   * parameter yang pertama adalah array posisi x dan y lokasi yang dipilih untuk terjun payung
   * parameter array berisi peta lokasi yang berisi symbol O dan X
   * function ini akan mengecek apakah penerjun jatuh ke lokasi dengan simbol O atau X
   * jika turun di simbol O maka akan menampilkan "Pendaratan berhasil"
   * jika turun di simbol X maka akan menampilkan "Pendaratan gagal jatuh di zona bahaya"
   * posisi x dan posisi y selalu dimulai dari 0, posisi x menunjukan baris dan posisi y
     menunjukan kolom seperti ilustrasi dibawah
  * asumsi map selalu memiliki sisi yang sama misal 2x2, 3x3, atau 4x4 dan seterusnya
  EXAMPLE:
  Jika posisi target jatuh [1, 2] maka akan jatuh di 'O'

                Pos Y   ke-0  ke-1 ke-2
                      [   |    |    |
                          |    |    |
  posisi X ke 0         ['X', 'X', 'O'],
  posisi X ke 1         ['O', 'X', 'O//jatuh disini'],
  posisi X ke 2         ['X', 'X', 'X'],
                      ]


  rules:
  1. tidak boleh menggunakan indexOf atau findIndex
*/

function penerjunPayung(target, map){

  if(map[target[0]][target[1]]==='O'){
    return 'Pendaratan berhasil'
  } else {
    return 'Pendaratan gagal jatuh di zona bahaya'
  }
}

// Test Case
console.log(penerjunPayung([2,3], [
  ['O','O','X','O'],
  ['X','O','X','X'],
  ['X','X','X','O'],
  ['X','O','O','X']
])); // Pendaratan berhasil

console.log(penerjunPayung([0,2], [
['X','X','X','X'],
['X','O','X','X'],
['O','X','O','O'],
['X','X','X','X']
])); // Pendaratan gagal jatuh di zona bahaya

console.log(penerjunPayung([1,1], [
['X','X'],
['X','O']
])); // Pendaratan berhasil