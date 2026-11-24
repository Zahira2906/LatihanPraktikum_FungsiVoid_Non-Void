function kartuNama(nama, kelas) {
    console.log('=====================')
    console.log('Nama : ' + nama);
    console.log('Kelas : ' + kelas);
    console.log('=====================')
}

kartuNama('Budi', 'X RPL');
kartuNama('Siti', 'X RPL');

// 1. Fungsi dipanggil sebanyak 2 kali, sehingga menghasilkan 2 kartu nama, yaitu Budi dan Siti.
// 2. Parameter: nama dan kelas (ditulis dalam fungsi)
//    Argumen: 'Budi', 'X RPL' dan 'Siti', 'X RPL' (nilai yang dimasukkan saat fungsi dipanggil).
// 3. 3. Tidak menggunakan return. Fungsi ini termasuk Function tanpa return (void) karena hanya menampilkan hasil menggunakan console.log() tanpa mengembalikan nilai.