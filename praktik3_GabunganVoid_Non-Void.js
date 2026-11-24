// Non-Void: menghasilkan nilai 
function kelilingPersegi(sisi) {
    return 4 * sisi;
}

// Void: menampilkan hasil
function cetakKeliling(sisi) {
    let hasil = kelilingPersegi(sisi);
    console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling ' + hasil);
}

cetakKeliling(6);
cetakKeliling(10);

// 1. Fungsi Void: cetakKeliling(sisi) karena hanya menampilkan hasil menggunakan console.log() dan tidak mengembalikan nilai dengan return.
//    Fungsi Non-Void: kelilingPersegi(sisi) karena menggunakan return untuk mengembalikan hasil perhitungan keliling persegi.

// Kesimpulan: Non-Void mengembalikan nilai, sedangkan Void hanya menjalankan perintah tanpa mengembalikan nilai.