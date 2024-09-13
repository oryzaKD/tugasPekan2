//cara untuk run 
// node nama file nya

function hitungAkarPangkatDua(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    } else {
        return Math.sqrt(x);
    }
}

// Contoh penggunaan
console.log(hitungAkarPangkatDua(16)); // Output: 4
console.log(hitungAkarPangkatDua(-4)); // Output: Tidak bisa input bilangan negatif
console.log(hitungAkarPangkatDua(7));  // Output: Tidak bisa input bilangan ganjil