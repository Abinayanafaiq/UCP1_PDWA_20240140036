// simulasi penyimpanan data sementara menggunakan array
// untuk demo antar halaman, kita gunakan localStorage agar data tidak hilang saat pindah halaman
let dataAnggota = JSON.parse(localStorage.getItem('anggotaList')) || [
    { nama: "Abin", email: "abin@email.com", minat: "Web Development" }
];

// FUNGSI UNTUK HALAMAN INDEX (Halaman Utama)
function tampilkanTabel() {
    const tbody = document.getElementById('data-anggota');
    if (tbody) {
        // bersihkan tabel dulu kecuali data awal jika mau, tapi kita render ulang dari array
        tbody.innerHTML = '';
        
        dataAnggota.forEach((item, index) => {
            let row = `<tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.email}</td>
                <td>${item.minat}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }
}

// FUNGSI UNTUK HALAMAN FORM
const form = document.getElementById('memberForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // cegah halaman refresh

        // ambil data dari input
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const minat = document.getElementById('minat').value;

        // simpan ke dalam objek
        const anggotaBaru = {
            nama: nama,
            email: email,
            minat: minat
        };

        // masukkan ke dalam array
        dataAnggota.push(anggotaBaru);
        
        // simpan balik ke localStorage agar bisa dilihat di index.html
        localStorage.setItem('anggotaList', JSON.stringify(dataAnggota));

        // tampilkan alert
        alert("Data berhasil disimpan: " + nama);

        // tampilkan di bagian bawah form
        document.getElementById('hasilInput').style.display = "block";
        document.getElementById('tampilNama').innerText = "Nama: " + nama;
        document.getElementById('tampilEmail').innerText = "Email: " + email;
        document.getElementById('tampilMinat').innerText = "Bidang Minat: " + minat;

        // kosongkan form
        form.reset();
    });
}

// FUNGSI UNTUK HALAMAN MULTIMEDIA (info.html)
function putarAudio() {
    const audio = document.getElementById('myAudio');
    audio.play();
}

function berhentiAudio() {
    const audio = document.getElementById('myAudio');
    audio.pause();
    audio.currentTime = 0; // reset ke awal
}

function gantiGambar() {
    const img = document.getElementById('gambarUtama');
    // ganti ke gambar teknologi lain
    img.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400";
    alert("Gambar telah diganti!");
}

function tampilInfo() {
    alert("Ini adalah halaman galeri multimedia komunitas kami. Klik tombol di bawah video untuk memutar audio.");
}

// jalankan penampil tabel jika di halaman index
window.onload = function() {
    tampilkanTabel();
};
