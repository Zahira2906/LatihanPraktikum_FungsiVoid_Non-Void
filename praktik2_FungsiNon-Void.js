function luasPersegi(sisi) {
    return sisi * sisi;
}

let luas1 = luasPersegi(5);
let luas2 = luasPersegi(8);

console.log('Luas persegi pertama: ' + luas1);
console.log('Luas persegi kedua: ' + luas2);
console.log('Jumlah kedua luas: ' + (luas1 + luas2));

// 1. Jika return dihapus, fungsi tidak akan mengembalikan hasil perhitungan. Akibatnya, luas1 dan luas2 akan bernilai undefined, sehingga hasil penjumlahannya juga tidak bisa dilakukan dengan benar.
// 2. Karena luas1 dan luas2 menyimpan hasil dari fungsi luasPersegi() berupa angka, sehingga keduanya bisa dijumlahkan menggunakan operator +.