// --- DATA MATERI UTUH 100% (1-40) ---
const materiData = [
    {
        id: 1,
        title: "1. KONSEP ENERGI",
        content: `
            <p><strong>Pengertian Energi</strong></p>
            <p>Energi adalah kemampuan untuk melakukan usaha (kerja) atau menyebabkan perubahan.</p>
            <p>Contoh:</p>
            <ul>
                <li>Lampu menyala karena ada energi listrik.</li>
                <li>Mobil bergerak karena ada energi bahan bakar.</li>
                <li>Tubuh manusia bergerak karena energi dari makanan.</li>
            </ul>
            <p><strong>Hukum Kekekalan Energi</strong></p>
            <p>Energi tidak dapat diciptakan dan tidak dapat dimusnahkan.</p>
            <p>Energi hanya dapat berubah bentuk.</p>
            <p>Contoh:</p>
            <ul>
                <li>Energi listrik → energi cahaya (lampu)</li>
                <li>Energi kimia → energi gerak (mobil)</li>
                <li>Energi matahari → energi listrik (panel surya)</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Soal</p>
            <p>Mengapa kipas angin dapat berputar?</p>
            <p>A. Karena memiliki massa</p>
            <p>B. Karena mengalami perubahan energi listrik menjadi energi gerak</p>
            <p>C. Karena menghasilkan energi baru</p>
            <p>D. Karena memusnahkan energi listrik</p>
            <p>Jawaban</p>
            <p>B</p>
            <p>Pembahasan</p>
            <p>Kipas menerima energi listrik.</p>
            <p>Motor di dalam kipas mengubah energi listrik menjadi energi gerak.</p>
            <p>Karena itu baling-baling berputar.</p>
            <p>Jadi jawabannya B.</p>
        `
    },
    {
        id: 2,
        title: "2. ENERGI POTENSIAL",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi potensial adalah energi yang dimiliki benda karena kedudukannya.</p>
            <p>Semakin tinggi posisi benda, semakin besar energi potensialnya.</p>
            <p>Contoh:</p>
            <ul>
                <li>Buah di pohon</li>
                <li>Air di bendungan</li>
                <li>Batu di atas tebing</li>
            </ul>
            <p><strong>Rumus</strong></p>
            <p>EP=m×g×h</p>
            <p>Keterangan:</p>
            <p>EP = energi potensial (Joule)</p>
            <p>m = massa (kg)</p>
            <p>g = gravitasi (10 m/s²)</p>
            <p>h = tinggi (m)</p>
            <p><strong>Faktor yang Mempengaruhi</strong></p>
            <p>1. Massa</p>
            <p>Semakin besar massa → energi potensial semakin besar.</p>
            <p>2. Tinggi</p>
            <p>Semakin tinggi posisi benda → energi potensial semakin besar.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Sebuah benda bermassa 5 kg berada pada ketinggian 10 m.</p>
            <p>Hitung energi potensialnya.</p>
            <p>Penyelesaian</p>
            <p>Diketahui:</p>
            <p>m = 5 kg</p>
            <p>h = 10 m</p>
            <p>g = 10 m/s²</p>
            <p>Rumus:</p>
            <p>EP=mgh<br>EP=5×10×10<br>EP=500J</p>
            <p>Jawaban</p>
            <p>500 Joule</p>
            <p>Mengapa?</p>
            <p>Karena benda memiliki massa dan berada pada ketinggian tertentu.</p>
            <p>Semakin tinggi atau semakin berat bendanya, energi potensial semakin besar.</p>
        `
    },
    {
        id: 3,
        title: "3. ENERGI KINETIK",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi kinetik adalah energi yang dimiliki benda karena bergerak.</p>
            <p>Contoh:</p>
            <ul>
                <li>Mobil melaju</li>
                <li>Bola menggelinding</li>
                <li>Sepeda berjalan</li>
            </ul>
            <p><strong>Rumus</strong></p>
            <p>EK = 1/2 mv²</p>
            <p>Keterangan:</p>
            <p>EK = energi kinetik</p>
            <p>m = massa</p>
            <p>v = kecepatan</p>
            <p><strong>Faktor yang Mempengaruhi</strong></p>
            <p>Massa</p>
            <p>Semakin besar massa → energi kinetik semakin besar.</p>
            <p>Kecepatan</p>
            <p>Semakin cepat benda bergerak → energi kinetik semakin besar.</p>
            <p>Kecepatan sangat berpengaruh karena dikuadratkan.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Sebuah mobil bermassa 1000 kg bergerak dengan kecepatan 10 m/s.</p>
            <p>Hitung energi kinetiknya.</p>
            <p>Penyelesaian</p>
            <p>EK = 1/2 mv²<br>EK = 1/2 (1000)(10)²<br>EK = 500 × 100<br>EK = 50.000J</p>
            <p>Jawaban</p>
            <p>50.000 Joule</p>
        `
    },
    {
        id: 4,
        title: "4. ENERGI MEKANIK",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi mekanik adalah jumlah energi potensial dan energi kinetik.</p>
            <p>Rumus:</p>
            <p>EM=EP+EK</p>
            <p><strong>Contoh</strong></p>
            <p>Buah jatuh dari pohon:</p>
            <p>Di atas:</p>
            <p>EP besar<br>EK kecil</p>
            <p>Saat jatuh:</p>
            <p>EP berkurang<br>EK bertambah</p>
            <p>Total energi mekanik tetap.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Suatu benda memiliki:</p>
            <p>EP = 300 J</p>
            <p>EK = 200 J</p>
            <p>Hitung energi mekaniknya.</p>
            <p>Penyelesaian</p>
            <p>EM=EP+EK<br>EM=300+200<br>EM=500J</p>
            <p>Jawaban</p>
            <p>500 Joule</p>
        `
    },
    {
        id: 5,
        title: "5. ENERGI KALOR",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi kalor adalah energi panas yang dapat menaikkan suhu benda.</p>
            <p>Contoh:</p>
            <ul>
                <li>Kompor</li>
                <li>Setrika</li>
                <li>Matahari</li>
            </ul>
            <p><strong>Perpindahan Kalor</strong></p>
            <p>Konduksi</p>
            <p>Panas berpindah melalui zat padat.</p>
            <p>Contoh:</p>
            <p>Sendok dalam teh panas ikut panas.</p>
            <p>Konveksi</p>
            <p>Panas berpindah bersama aliran zat.</p>
            <p>Contoh:</p>
            <p>Air mendidih.</p>
            <p>Radiasi</p>
            <p>Panas berpindah tanpa perantara.</p>
            <p>Contoh:</p>
            <p>Panas matahari sampai ke bumi.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa tangan terasa hangat ketika berada dekat api unggun?</p>
            <p>A. Konduksi</p>
            <p>B. Konveksi</p>
            <p>C. Radiasi</p>
            <p>D. Evaporasi</p>
            <p>Jawaban</p>
            <p>C</p>
            <p>Pembahasan</p>
            <p>Api tidak menyentuh tangan.</p>
            <p>Panas berpindah melalui gelombang.</p>
            <p>Itulah radiasi.</p>
        `
    },
    {
        id: 6,
        title: "6. ENERGI LISTRIK",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi listrik adalah energi yang berasal dari aliran muatan listrik.</p>
            <p>Contoh:</p>
            <ul>
                <li>Lampu menyala</li>
                <li>Televisi</li>
                <li>Charger HP</li>
                <li>Kipas angin</li>
            </ul>
            <p><strong>Perubahan Energi Listrik</strong></p>
            <table border="1" style="border-collapse:collapse; width:100%; text-align:left; margin:10px 0;">
                <tr><th>Alat</th><th>Perubahan Energi</th></tr>
                <tr><td>Lampu</td><td>Listrik → Cahaya</td></tr>
                <tr><td>Kipas</td><td>Listrik → Gerak</td></tr>
                <tr><td>Setrika</td><td>Listrik → Panas</td></tr>
                <tr><td>Speaker</td><td>Listrik → Bunyi</td></tr>
            </table>
            <p><strong>Contoh Soal</strong></p>
            <p>Lampu yang menyala menunjukkan perubahan energi ...</p>
            <p>A. Kimia → Cahaya</p>
            <p>B. Listrik → Cahaya</p>
            <p>C. Panas → Cahaya</p>
            <p>D. Gerak → Cahaya</p>
            <p>Jawaban</p>
            <p>B</p>
            <p>Mengapa?</p>
            <p>Lampu menggunakan listrik kemudian menghasilkan cahaya.</p>
        `
    },
    {
        id: 7,
        title: "7. ENERGI KIMIA",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi kimia adalah energi yang tersimpan dalam zat kimia.</p>
            <p>Contoh:</p>
            <ul>
                <li>Makanan</li>
                <li>Baterai</li>
                <li>Bensin</li>
                <li>Solar</li>
            </ul>
            <p><strong>Contoh Perubahan</strong></p>
            <p>Makanan → Energi gerak tubuh</p>
            <p>Bensin → Energi gerak kendaraan</p>
            <p>Baterai → Energi listrik</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa manusia dapat berlari setelah makan?</p>
            <p>Jawaban</p>
            <p>Karena energi kimia dalam makanan diubah menjadi energi gerak.</p>
        `
    },
    {
        id: 8,
        title: "8. USAHA",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Usaha adalah kerja yang dilakukan gaya sehingga benda berpindah.</p>
            <p><strong>Rumus</strong></p>
            <p>W=F×s</p>
            <p>Keterangan:</p>
            <p>W = usaha (Joule)</p>
            <p>F = gaya (Newton)</p>
            <p>s = perpindahan (meter)</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Gaya 20 N mendorong benda sejauh 5 m.</p>
            <p>Hitung usaha.</p>
            <p>Penyelesaian</p>
            <p>W=F×s<br>W=20×5<br>W=100J</p>
            <p>Jawaban</p>
            <p>100 Joule</p>
        `
    },
    {
        id: 9,
        title: "9. ENERGI NUKLIR",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi nuklir adalah energi yang berasal dari inti atom.</p>
            <p><strong>Kelebihan</strong></p>
            <ul>
                <li>Menghasilkan energi sangat besar</li>
                <li>Tidak menghasilkan asap pembakaran</li>
            </ul>
            <p><strong>Kekurangan</strong></p>
            <ul>
                <li>Limbah radioaktif berbahaya</li>
                <li>Biaya pembangunan mahal</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Sumber energi pada PLTN berasal dari ...</p>
            <p>A. Matahari</p>
            <p>B. Angin</p>
            <p>C. Inti atom</p>
            <p>D. Air</p>
            <p>Jawaban</p>
            <p>C</p>
        `
    },
    {
        id: 10,
        title: "10. MINYAK BUMI",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Minyak bumi adalah bahan bakar fosil yang berasal dari sisa makhluk hidup purba.</p>
            <p><strong>Hasil Pengolahan</strong></p>
            <ul>
                <li>Bensin</li>
                <li>Solar</li>
                <li>Minyak tanah</li>
                <li>Aspal</li>
            </ul>
            <p><strong>Tahapan Pengolahan</strong></p>
            <p>Eksplorasi → Pengeboran → Penyulingan → Distribusi</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Bensin merupakan hasil olahan ...</p>
            <p>A. Batu bara</p>
            <p>B. Minyak bumi</p>
            <p>C. Matahari</p>
            <p>D. Angin</p>
            <p>Jawaban</p>
            <p>B</p>
        `
    },
    {
        id: 11,
        title: "11. BATU BARA",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Batu bara adalah bahan bakar fosil yang terbentuk dari tumbuhan purba.</p>
            <p><strong>Pemanfaatan</strong></p>
            <ul>
                <li>PLTU</li>
                <li>Industri semen</li>
                <li>Industri baja</li>
            </ul>
            <p><strong>Dampak</strong></p>
            <ul>
                <li>Polusi udara</li>
                <li>Pemanasan global</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Sumber energi utama PLTU adalah ...</p>
            <p>A. Angin</p>
            <p>B. Air</p>
            <p>C. Batu bara</p>
            <p>D. Matahari</p>
            <p>Jawaban</p>
            <p>C</p>
        `
    },
    {
        id: 12,
        title: "12. ENERGI MATAHARI",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi matahari adalah energi yang berasal dari sinar matahari.</p>
            <p><strong>Kelebihan</strong></p>
            <ul>
                <li>Gratis</li>
                <li>Ramah lingkungan</li>
                <li>Terbarukan</li>
            </ul>
            <p><strong>Contoh Pemanfaatan</strong></p>
            <ul>
                <li>Menjemur pakaian</li>
                <li>Panel surya</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa energi matahari disebut energi terbarukan?</p>
            <p>Jawaban</p>
            <p>Cyberpunk. Karena persediaannya terus tersedia dan tidak habis dalam waktu singkat.</p>
        `
    },
    {
        id: 13,
        title: "13. PANEL SURYA",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Panel surya adalah alat yang mengubah energi cahaya matahari menjadi energi listrik.</p>
            <p><strong>Alur Kerja</strong></p>
            <p>Matahari → Panel Surya → Listrik</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Fungsi utama panel surya adalah ...</p>
            <p>A. Mengubah panas menjadi bunyi</p>
            <p>B. Mengubah cahaya menjadi listrik</p>
            <p>C. Mengubah listrik menjadi panas</p>
            <p>D. Mengubah angin menjadi listrik</p>
            <p>Jawaban</p>
            <p>B</p>
        `
    },
    {
        id: 14,
        title: "14. PLTA",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>PLTA = Pembangkit Listrik Tenaga Air</p>
            <p><strong>Cara Kerja</strong></p>
            <p>Air jatuh dari ketinggian → Memutar turbin → Turbin memutar generator → Menghasilkan listrik</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Energi yang digunakan PLTA berasal dari ...</p>
            <p>A. Energi potensial air</p>
            <p>B. Energi nuklir</p>
            <p>C. Energi kimia</p>
            <p>D. Energi panas bumi</p>
            <p>Jawaban</p>
            <p>A</p>
        `
    },
    {
        id: 15,
        title: "15. BIOETANOL",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Bioetanol adalah bahan bakar yang dibuat dari tumbuhan.</p>
            <p><strong>Bahan Bioetanol</strong></p>
            <ul>
                <li>Tebu</li>
                <li>Singkong</li>
                <li>Jagung</li>
            </ul>
            <p><strong>Kelebihan</strong></p>
            <ul>
                <li>Dapat diperbarui</li>
                <li>Mengurangi penggunaan minyak bumi</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Bioetanol termasuk energi ...</p>
            <p>A. Tak terbarukan</p>
            <p>B. Terbarukan</p>
            <p>C. Fosil</p>
            <p>D. Nuklir</p>
            <p>Jawaban</p>
            <p>B</p>
        `
    },
    {
        id: 16,
        title: "16. MANFAAT BIOENERGI",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Bioenergi adalah energi yang berasal dari makhluk hidup atau hasil olahannya.</p>
            <p><strong>Manfaat</strong></p>
            <ul>
                <li>Mengurangi polusi</li>
                <li>Mengurangi ketergantungan BBM</li>
                <li>Ramah lingkungan</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa bioenergi dianggap lebih ramah lingkungan?</p>
            <p>Jawaban</p>
            <p>Karena berasal dari sumber yang dapat diperbarui dan menghasilkan polusi lebih sedikit.</p>
        `
    },
    {
        id: 17,
        title: "17. ENERGI TERBARUKAN",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Energi yang dapat diperbarui secara alami.</p>
            <p><strong>Contoh</strong></p>
            <ul>
                <li>Matahari</li>
                <li>Air</li>
                <li>Angin</li>
                <li>Biomassa</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Manakah yang termasuk energi terbarukan?</p>
            <p>A. Batu bara</p>
            <p>B. Minyak bumi</p>
            <p>C. Matahari</p>
            <p>D. Gas alam</p>
            <p>Jawaban</p>
            <p>C</p>
        `
    },
    {
        id: 18,
        title: "18. DAMPAK ENERGI FOSIL",
        content: `
            <p><strong>Dampak Positif</strong></p>
            <p>Mudah digunakan, Energi besar</p>
            <p><strong>Dampak Negatif</strong></p>
            <p>Polusi udara, Hujan asam, Pemanasan global</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa penggunaan batu bara berlebihan dapat menyebabkan pemanasan global?</p>
            <p>Jawaban</p>
            <p>Karena menghasilkan banyak gas karbon dioksida yang memerangkap panas di atmosfer.</p>
        `
    },
    {
        id: 19,
        title: "19. PLTMH",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>PLTMH = Pembangkit Listrik Tenaga Mikrohidro.</p>
            <p>Menggunakan aliran sungai kecil.</p>
            <p><strong>Syarat Sungai</strong></p>
            <ul>
                <li>Air mengalir terus</li>
                <li>Debit stabil</li>
                <li>Ada perbedaan ketinggian</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa sungai berarus deras cocok untuk PLTMH?</p>
            <p>Jawaban</p>
            <p>Karena memiliki energi gerak yang besar untuk memutar turbin.</p>
        `
    },
    {
        id: 20,
        title: "20. PEMBANGKIT LISTRIK",
        content: `
            <p><strong>Jenis-Jenis</strong></p>
            <ul>
                <li>PLTA (Air)</li>
                <li>PLTU (Batu bara)</li>
                <li>PLTS (Matahari)</li>
                <li>PLTB (Angin)</li>
                <li>PLTN (Nuklir)</li>
            </ul>
            <p><strong>Contoh Soal</strong></p>
            <p>PLTB memanfaatkan energi ...</p>
            <p>A. Air</p>
            <p>B. Angin</p>
            <p>C. Panas bumi</p>
            <p>D. Batu bara</p>
            <p>Jawaban</p>
            <p>B</p>
        `
    },
    {
        id: 21,
        title: "21. GENERATOR AC",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Generator AC menghasilkan arus bolak-balik.</p>
            <p><strong>Perubahan Energi</strong></p>
            <p>Energi gerak → Energi listrik</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Generator mengubah energi ...</p>
            <p>A. Kimia menjadi listrik</p>
            <p>B. Gerak menjadi listrik</p>
            <p>C. Listrik menjadi gerak</p>
            <p>D. Panas menjadi listrik</p>
            <p>Jawaban</p>
            <p>B</p>
        `
    },
    {
        id: 22,
        title: "22. BATERAI",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Baterai menyimpan energi kimia.</p>
            <p><strong>Perubahan Energi</strong></p>
            <p>Kimia → Listrik</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa senter dapat menyala saat diberi baterai?</p>
            <p>Jawaban</p>
            <p>Karena energi kimia dalam baterai diubah menjadi energi listrik.</p>
        `
    },
    {
        id: 23,
        title: "23. MOTOR LISTRIK",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Motor listrik mengubah energi listrik menjadi energi gerak.</p>
            <p><strong>Contoh</strong></p>
            <ul>
                <li>Kipas angin</li>
                <li>Blender</li>
            </ul>
            <p><strong>Soal</strong></p>
            <p>Kipas angin menggunakan prinsip ...</p>
            <p>Jawaban</p>
            <p>Energi listrik menjadi energi gerak.</p>
        `
    },
    {
        id: 24,
        title: "24. LAMPU LISTRIK",
        content: `
            <p><strong>Perubahan Energi</strong></p>
            <p>Listrik → Cahaya (Sebagian menjadi panas).</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa lampu terasa hangat saat menyala lama?</p>
            <p>Jawaban</p>
            <p>Karena sebagian energi listrik berubah menjadi kalor.</p>
        `
    },
    {
        id: 25,
        title: "25. PLTP",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>PLTP = Pembangkit Listrik Tenaga Panas Bumi.</p>
            <p><strong>Sumber Energi</strong></p>
            <p>Panas dari dalam bumi.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Indonesia cocok mengembangkan PLTP karena ...</p>
            <p>Jawaban</p>
            <p>Memiliki banyak gunung api yang menghasilkan panas bumi.</p>
        `
    },
    {
        id: 26,
        title: "26. INTERAKSI KERUANGAN",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Interaksi keruangan adalah hubungan timbal balik yang terjadi antara satu wilayah dengan wilayah lain karena adanya kebutuhan yang berbeda.</p>
            <p>Sederhananya, suatu daerah membutuhkan sesuatu dari daerah lain sehingga terjadi perpindahan manusia, barang, jasa, atau informasi.</p>
            <p><strong>Mengapa Terjadi Interaksi Keruangan?</strong></p>
            <p>Karena setiap wilayah memiliki potensi yang berbeda.</p>
            <p>Contoh:</p>
            <ul>
                <li>Desa menghasilkan sayuran.</li>
                <li>Kota membutuhkan sayuran.</li>
            </ul>
            <p>Akibatnya terjadi perdagangan antara desa dan kota.</p>
            <p><strong>Bentuk Interaksi Keruangan</strong></p>
            <p>1. Perpindahan Manusia (Contoh: Mudik, Urbanisasi, Pariwisata)</p>
            <p>2. Perpindahan Barang (Contoh: Beras dari Karawang dikirim ke Jakarta.)</p>
            <p>3. Perpindahan Informasi (Contoh: Berita melalui internet, Video pembelajaran online.)</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa terjadi perdagangan antara desa dan kota?</p>
            <p>A. Karena desa dan kota memiliki kebutuhan yang sama</p>
            <p>B. Karena desa dan kota memiliki sumber daya berbeda</p>
            <p>C. Karena desa lebih maju</p>
            <p>D. Karena kota lebih luas</p>
            <p>Jawaban</p>
            <p>B</p>
            <p>Pembahasan</p>
            <p>Desa dan kota memiliki potensi yang berbeda. Desa menghasilkan bahan pangan. Kota menghasilkan barang dan jasa. Perbedaan inilah yang menyebabkan interaksi keruangan.</p>
        `
    },
    {
        id: 27,
        title: "27. KONSEP RUANG",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Ruang adalah tempat di permukaan bumi yang digunakan makhluk hidup untuk melakukan aktivitas.</p>
            <p><strong>Unsur Ruang</strong></p>
            <p>Daratan, Perairan, Udara</p>
            <p><strong>Contoh Ruang</strong></p>
            <p>Sawah, Hutan, Kota, Laut</p>
            <p><strong>Mengapa Konsep Ruang Penting?</strong></p>
            <p>Karena setiap aktivitas manusia terjadi di suatu ruang.</p>
            <p>Contoh: Petani bekerja di sawah. Nelayan bekerja di laut. Guru mengajar di sekolah.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Sawah termasuk contoh ...</p>
            <p>A. Waktu</p>
            <p>B. Ruang</p>
            <p>C. Interaksi</p>
            <p>D. Mobilitas</p>
            <p>Jawaban</p>
            <p>B</p>
            <p>Pembahasan</p>
            <p>Sawah merupakan tempat berlangsungnya aktivitas manusia sehingga termasuk ruang.</p>
        `
    },
    {
        id: 28,
        title: "28. KONSEP WAKTU",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Waktu adalah kapan suatu peristiwa terjadi.</p>
            <p>Konsep waktu digunakan untuk mengetahui urutan kejadian.</p>
            <p><strong>Fungsi Konsep Waktu</strong></p>
            <p>Mengetahui masa lalu, Mengetahui masa sekarang, Mengetahui masa depan</p>
            <p><strong>Contoh</strong></p>
            <p>Proklamasi Indonesia terjadi pada 17 Agustus 1945. Pemilu dilakukan setiap beberapa tahun.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Tanggal 17 Agustus 1945 menunjukkan konsep ...</p>
            <p>A. Ruang</p>
            <p>B. Interaksi</p>
            <p>C. Waktu</p>
            <p>D. Mobilitas</p>
            <p>Jawaban</p>
            <p>C</p>
            <p>Pembahasan</p>
            <p>Karena menunjukkan kapan suatu peristiwa terjadi.</p>
        `
    },
    {
        id: 29,
        title: "29. INTERAKSI RUANG",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Interaksi ruang adalah hubungan yang terjadi karena perpindahan manusia, barang, atau informasi antar wilayah.</p>
            <p><strong>Contoh</strong></p>
            <p>Siswa belajar melalui internet. Barang dari Surabaya dikirim ke Jakarta. Wisatawan datang ke Bali.</p>
            <p><strong>Dampak Positif</strong></p>
            <p>Mempermudah perdagangan. Menambah lapangan pekerjaan. Mempercepat penyebaran informasi.</p>
            <p><strong>Dampak Negatif</strong></p>
            <p>Kemacetan. Polusi. Penyebaran penyakit.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Turis yang datang ke Bali merupakan contoh ...</p>
            <p>A. Interaksi ruang</p>
            <p>B. Ruang</p>
            <p>C. Waktu</p>
            <p>D. Astronomis</p>
            <p>Jawaban</p>
            <p>A</p>
        `
    },
    {
        id: 30,
        title: "30. SYARAT TERJADINYA INTERAKSI KERUANGAN",
        content: `
            <p>Ada tiga syarat utama.</p>
            <p><strong>1. Saling Melengkapi (Complementarity)</strong></p>
            <p>Suatu daerah memiliki kelebihan barang. Daerah lain membutuhkan barang tersebut.</p>
            <p>Contoh: Desa menghasilkan sayur. Kota membutuhkan sayur.</p>
            <p><strong>2. Kesempatan Antara (Intervening Opportunity)</strong></p>
            <p>Tidak ada daerah lain yang lebih dekat yang menyediakan kebutuhan tersebut.</p>
            <p><strong>3. Kemudahan Transfer (Transferability)</strong></p>
            <p>Tersedia sarana transportasi dan komunikasi yang memadai.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa jalan raya penting dalam interaksi keruangan?</p>
            <p>Jawaban</p>
            <p>Karena memudahkan perpindahan manusia dan barang. Ini memenuhi syarat transferability.</p>
        `
    },
    {
        id: 31,
        title: "31. MOBILITAS PENDUDUK",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Mobilitas penduduk adalah perpindahan penduduk dari satu tempat ke tempat lain.</p>
            <p><strong>Jenis Mobilitas</strong></p>
            <p>Permanen (Pindah menetap), Non Permanen (Tidak menetap. Contoh: Mudik, Wisata)</p>
            <p><strong>Penyebab Mobilitas</strong></p>
            <p>Pendidikan, Pekerjaan, Ekonomi, Keamanan</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Seseorang pindah dari desa ke kota untuk bekerja. Ini disebut ...</p>
            <p>A. Urbanisasi</p>
            <p>B. Imigrasi</p>
            <p>C. Emigrasi</p>
            <p>D. Remigrasi</p>
            <p>Jawaban</p>
            <p>A</p>
        `
    },
    {
        id: 32,
        title: "32. LETAK GEOGRAFIS INDONESIA",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Letak geografis adalah letak suatu wilayah berdasarkan posisi sebenarnya di permukaan bumi.</p>
            <p><strong>Letak Indonesia</strong></p>
            <p>Di antara Benua Asia dan Australia, serta Samudra Hindia dan Pasifik.</p>
            <p><strong>Dampak Letak Geografis</strong></p>
            <p>Positif: Jalur perdagangan dunia, Banyak budaya masuk, Potensi ekonomi besar.</p>
            <p>Negatif: Pengaruh budaya asing, Potensi penyelundupan.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa Indonesia disebut negara strategis?</p>
            <p>Jawaban</p>
            <p>Karena berada di antara dua benua dan dua samudra.</p>
        `
    },
    {
        id: 33,
        title: "33. LETAK ASTRONOMIS INDONESIA",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Letak astronomis adalah letak berdasarkan garis lintang dan garis bujur.</p>
            <p><strong>Letak Astronomis Indonesia</strong></p>
            <p>Lintang: 6° LU – 11° LS</p>
            <p>Bujur: 95° BT – 141° BT</p>
            <p><strong>Dampak</strong></p>
            <p>Iklim Tropis (Karena dekat garis khatulistiwa).</p>
            <p>Dua Musim (Musim hujan dan Musim kemarau).</p>
            <p>Curah Hujan Tinggi (Karena banyak penguapan).</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa Indonesia memiliki iklim tropis?</p>
            <p>Jawaban</p>
            <p>Karena terletak dekat garis khatulistiwa.</p>
        `
    },
    {
        id: 34,
        title: "34. KERJA SAMA INTERNASIONAL",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Kerja sama internasional adalah kerja sama antara dua negara atau lebih untuk mencapai tujuan bersama.</p>
            <p><strong>Tujuan</strong></p>
            <p>Meningkatkan kesejahteraan, Menjaga perdamaian, Mengembangkan ilmu pengetahuan, Memperkuat ekonomi.</p>
            <p><strong>Manfaat</strong></p>
            <p>Ekonomi (Perdagangan internasional), Pendidikan (Pertukaran pelajar), Teknologi (Transfer teknologi).</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Mengapa negara melakukan kerja sama internasional?</p>
            <p>Jawaban</p>
            <p>Karena tidak ada negara yang dapat memenuhi semua kebutuhannya sendiri.</p>
        `
    },
    {
        id: 35,
        title: "35. KERJA SAMA BILATERAL",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Kerja sama antara dua negara.</p>
            <p>Contoh: Indonesia ↔ Jepang, Indonesia ↔ Malaysia, Indonesia ↔ Australia</p>
            <p><strong>Bidang Kerja Sama</strong></p>
            <p>Pendidikan, Ekonomi, Pertahanan, Pariwisata</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Kerja sama Indonesia dan Jepang termasuk kerja sama ...</p>
            <p>A. Regional</p>
            <p>B. Bilateral</p>
            <p>C. Multilateral</p>
            <p>D. Internasional</p>
            <p>Jawaban</p>
            <p>B</p>
            <p>Pembahasan: Karena hanya melibatkan dua negara.</p>
        `
    },
    {
        id: 36,
        title: "36. KERJA SAMA REGIONAL",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Kerja sama yang dilakukan oleh negara-negara dalam satu kawasan tertentu.</p>
            <p>Contoh: ASEAN (Asia Tenggara)</p>
            <p><strong>Tujuan ASEAN</strong></p>
            <p>Menjaga stabilitas kawasan, Meningkatkan ekonomi, Mempererat persahabatan.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>ASEAN termasuk kerja sama ...</p>
            <p>A. Bilateral</p>
            <p>B. Regional</p>
            <p>C. Multilateral</p>
            <p>D. Nasional</p>
            <p>Jawaban</p>
            <p>B</p>
        `
    },
    {
        id: 37,
        title: "37. KERJA SAMA MULTILATERAL",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Kerja sama yang melibatkan banyak negara. Biasanya lebih dari dua negara.</p>
            <p>Contoh: PBB, WHO, UNESCO, WTO</p>
            <p><strong>Contoh Soal</strong></p>
            <p>PBB termasuk kerja sama ...</p>
            <p>A. Bilateral</p>
            <p>B. Regional</p>
            <p>C. Multilateral</p>
            <p>D. Nasional</p>
            <p>Jawaban</p>
            <p>C</p>
        `
    },
    {
        id: 38,
        title: "38. ASEAN",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>ASEAN adalah Association of Southeast Asian Nations. Didirikan pada 8 Agustus 1967.</p>
            <p><strong>Negara Pendiri</strong></p>
            <p>Indonesia, Malaysia, Thailand, Singapura, Filipina</p>
            <p><strong>Tujuan ASEAN</strong></p>
            <p>Kerja sama ekonomi, Perdamaian kawasan, Pendidikan, Budaya</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Indonesia merupakan salah satu ...</p>
            <p>A. Anggota baru ASEAN</p>
            <p>B. Negara pendiri ASEAN</p>
            <p>C. Pengamat ASEAN</p>
            <p>D. Mitra ASEAN</p>
            <p>Jawaban</p>
            <p>B</p>
        `
    },
    {
        id: 39,
        title: "39. PBB (PERSERIKATAN BANGSA-BANGSA)",
        content: `
            <p><strong>Pengertian</strong></p>
            <p>Organisasi internasional yang bertujuan menjaga perdamaian dunia. Didirikan pada tahun 1945.</p>
            <p><strong>Tujuan PBB</strong></p>
            <p>Menjaga perdamaian dunia, Menegakkan hak asasi manusia, Membantu negara berkembang.</p>
            <p><strong>Contoh Badan PBB</strong></p>
            <p>UNESCO, WHO, UNICEF</p>
            <p><strong>Contoh Soal</strong></p>
            <p>Organisasi yang bertugas menjaga perdamaian dunia adalah ...</p>
            <p>A. ASEAN</p>
            <p>B. WTO</p>
            <p>C. PBB</p>
            <p>D. APEC</p>
            <p>Jawaban</p>
            <p>C</p>
        `
    },
    {
        id: 40,
        title: "40. CONTOH KERJA SAMA MULTILATERAL",
        content: `
            <p><strong>WHO:</strong> Mengurus kesehatan dunia. Contoh: Penanganan wabah penyakit.</p>
            <p><strong>UNESCO:</strong> Mengurus pendidikan dan kebudayaan. Contoh: Penetapan Candi Borobudur sebagai warisan dunia.</p>
            <p><strong>WTO:</strong> Mengatur perdagangan internasional.</p>
            <p><strong>IMF:</strong> Membantu negara yang mengalami masalah keuangan.</p>
            <p><strong>Contoh Soal</strong></p>
            <p>UNESCO bergerak di bidang ...</p>
            <p>A. Kesehatan</p>
            <p>B. Pendidikan dan kebudayaan</p>
            <p>C. Perdagangan</p>
            <p>D. Pertahanan</p>
            <p>Jawaban</p>
            <p>B</p>
            <p>Pembahasan: UNESCO merupakan badan PBB yang fokus pada pendidikan, ilmu pengetahuan, dan kebudayaan. Contohnya adalah penetapan situs warisan dunia seperti Borobudur dan Prambanan.</p>
        `
    }
];

// --- 40 LATIHAN SOAL INTERAKTIF ---
const allQuestions = [
    { q: "Mengapa kipas angin dapat berputar?", options: ["Karena memiliki massa", "Karena mengalami perubahan energi listrik menjadi energi gerak", "Karena menghasilkan energi baru", "Karena memusnahkan energi listrik"], answer: 1, desc: "Kipas menerima energi listrik, lalu motor di dalamnya mengubahnya menjadi energi gerak." },
    { q: "Sebuah benda bermassa 5 kg berada pada ketinggian 10 m. Hitung energi potensialnya jika g=10 m/s².", options: ["50 Joule", "100 Joule", "500 Joule", "250 Joule"], answer: 2, desc: "EP = m x g x h = 5 x 10 x 10 = 500 Joule." },
    { q: "Energi kinetik adalah energi yang dimiliki benda karena...", options: ["Kedudukannya", "Suhunya", "Bentuknya", "Gerakannya"], answer: 3, desc: "Energi kinetik adalah energi yang dimiliki oleh benda yang sedang bergerak." },
    { q: "Rumus dari Energi Mekanik (EM) adalah...", options: ["EM = EP - EK", "EM = EP + EK", "EM = EP x EK", "EM = m x g x h"], answer: 1, desc: "Energi mekanik adalah jumlah keseluruhan dari energi potensial dan energi kinetik (EM = EP + EK)." },
    { q: "Mengapa tangan terasa hangat ketika berada dekat api unggun?", options: ["Konduksi", "Konveksi", "Radiasi", "Evaporasi"], answer: 2, desc: "Panas api unggun berpindah tanpa zat perantara melalui gelombang radiasi." },
    { q: "Lampu yang menyala menunjukkan perubahan energi utama yaitu...", options: ["Kimia ke Cahaya", "Listrik ke Cahaya", "Panas ke Cahaya", "Gerak ke Cahaya"], answer: 1, desc: "Lampu memanfaatkan aliran muatan listrik lalu memancarkan cahaya." },
    { q: "Manakah di bawah ini yang menyimpan bentuk energi kimia?", options: ["Lampu", "Baterai", "Kipas angin", "Setrika"], answer: 1, desc: "Baterai, makanan, dan bensin adalah contoh benda penampung energi kimia." },
    { q: "Gaya sebesar 20 N mendorong benda sejauh 5 m. Berapakah usahanya?", options: ["4 Joule", "15 Joule", "25 Joule", "100 Joule"], answer: 3, desc: "W = F x s = 20 N x 5 m = 100 Joule." },
    { q: "Sumber energi utama pada PLTN berasal dari pembelahan...", options: ["Molekul air", "Inti atom", "Sel surya", "Gas alam"], answer: 1, desc: "PLTN memanfaatkan energi panas raksasa dari reaksi fisi inti atom uranium." },
    { q: "Bensin, solar, dan aspal merupakan hasil olahan akhir dari...", options: ["Batu bara", "Minyak bumi", "Biomassa", "Gas alam"], answer: 1, desc: "Minyak bumi diproses lewat penyulingan bertingkat untuk menghasilkan bensin dll." },
    { q: "Sumber energi fosil padat yang menjadi bahan baku utama PLTU adalah...", options: ["Minyak bumi", "Batu bara", "Gas alam", "Uranium"], answer: 1, desc: "PLTU menggunakan pembakaran batu bara untuk mendidihkan air menjadi uap penggerak turbin." },
    { q: "Mengapa energi matahari digolongkan sebagai energi terbarukan?", options: ["Harganya mahal", "Dapat habis esok hari", "Terus tersedia secara alami dan tak terbatas", "Menghasilkan asap hitam"], answer: 2, desc: "Sinar matahari diproduksi konstan oleh fusi bintang sehingga tidak akan habis." },
    { q: "Alat yang berfungsi merubah energi cahaya matahari menjadi energi listrik disebut...", options: ["Generator", "Turbin", "Panel surya", "Aki"], answer: 2, desc: "Panel surya memakai sel fotovoltaik untuk menangkap cahaya dan menghasilkan arus listrik." },
    { q: "Energi mula-mula yang dimanfaatkan oleh PLTA untuk memutar turbin berasal dari...", options: ["Energi potensial & kinetik air", "Energi nuklir air", "Energi kimia air", "Energi panas air"], answer: 0, desc: "Air terjun/bendungan memiliki posisi tinggi (EP) yang jatuh mengalir (EK) memutar turbin." },
    { q: "Bioetanol merupakan bahan bakar ramah lingkungan yang diproduksi dari...", options: ["Minyak bumi", "Batu bara", "Tumbuhan seperti singkong dan jagung", "Limbah nuklir"], answer: 2, desc: "Bioetanol diolah melalui fermentasi karbohidrat tanaman seperti tebu, jagung, atau singkong." },
    { q: "Apa manfaat utama dari penggunaan bioenergi?", options: ["Menambah polusi", "Meningkatkan impor BBM", "Mengurangi pencemaran lingkungan & ketergantungan fosil", "Membuat mesin cepat rusak"], answer: 2, desc: "Bioenergi bersifat terbarukan dan emisi karbonnya jauh lebih bersih." },
    { q: "Manakah kelompok sumber energi di bawah ini yang semuanya terbarukan?", options: ["Matahari, air, angin", "Minyak bumi, batu bara, nuklir", "Gas alam, kayu, bensin", "Solar, angin, batu bara"], answer: 0, desc: "Matahari, air, dan angin tersedia melimpah di alam tanpa risiko habis." },
    { q: "Gas buang dari pembakaran bahan bakar fosil yang memicu pemanasan global adalah...", options: ["Oksigen", "Uap Air", "Karbon Dioksida (CO2)", "Nitrogen"], answer: 2, desc: "Gas CO2 menyelimuti atmosfer dan memerangkap panas matahari (efek rumah kaca)." },
    { q: "PLTMH (Mikrohidro) sangat cocok dibangun pada kondisi daerah yang memiliki...", options: ["Aliran sungai kecil dengan perbedaan ketinggian", "Laut lepas", "Danau tenang", "Sumur dalam"], description: "Mikrohidro menyasar debit air sungai kecil terpencil yang mempunyai jeram/air terjun.", answer: 0, desc: "Aliran sungai kecil dengan perbedaan ketinggian memberikan energi gerak yang cukup untuk skala mikro." },
    { q: "Pembangkit listrik yang menggunakan energi angin dinamakan...", options: ["PLTA", "PLTU", "PLTS", "PLTB"], answer: 3, desc: "PLTB singkatan dari Pembangkit Listrik Tenaga Bayu (Angin)." },
    { q: "Generator AC memproduksi listrik arus bolak-balik dengan mengubah...", options: ["Energi gerak menjadi listrik", "Energi kimia menjadi listrik", "Energi panas menjadi listrik", "Energi bunyi menjadi listrik"], answer: 0, desc: "Putaran poros generator mengubah energi mekanis/gerak menjadi energi listrik." },
    { q: "Ketika dipasang pada senter, baterai mengalami perubahan energi...", options: ["Listrik menjadi kimia", "Kimia menjadi listrik", "Gerak menjadi panas", "Nuklir menjadi cahaya"], answer: 1, desc: "Zat kimia di dalam sel baterai bereaksi mengeluarkan arus listrik menuju lampu senter." },
    { q: "Komponen alat rumah tangga yang menerapkan prinsip motor listrik (listrik jadi gerak) adalah...", options: ["Setrika", "Kipas angin", "Lampu pijar", "Senter"], answer: 1, desc: "Kipas angin memakai motor listrik untuk menggerakkan baling-balingnya." },
    { q: "Mengapa lampu pijar terasa panas jika dinyalakan terlalu lama?", options: ["Karena lampu menyerap es", "Karena sebagian energi listrik terbuang menjadi energi kalor", "Karena filamen membeku", "Karena arus listriknya hilang"], answer: 1, desc: "Efisiensi lampu belum 100%, sebagian energi listrik berubah menjadi energi sampingan berupa panas." },
    { q: "Alasan utama wilayah Indonesia sangat melimpah akan potensi PLTP (Panas Bumi) yaitu...", options: ["Banyak lautan", "Banyak dataran rendah", "Berada di jalur gunung api aktif (Ring of Fire)", "Sering terjadi badai"], answer: 2, desc: "Magma di bawah gunung api memanaskan air tanah menghasilkan uap panas bertekanan tinggi." },
    { q: "Faktor dasar yang mendorong terjadinya interaksi keruangan antarwilayah ialah...", options: ["Kesamaan komoditas", "Perbedaan potensi dan pemenuhan kebutuhan", "Jumlah penduduk yang sama", "Luas wilayah yang sama"], answer: 1, desc: "Satu wilayah menjual apa yang tidak dimiliki wilayah lain demi memenuhi kebutuhan bersama." },
    { q: "Tempat di permukaan bumi yang dimanfaatkan makhluk hidup untuk beraktivitas disebut...", options: ["Waktu", "Ruang", "Orbit", "Lintasan"], answer: 1, desc: "Ruang meliputi darat, air, dan udara tempat tinggal makhluk hidup." },
    { q: "Urutan jalannya kronologi sebuah peristiwa sejarah dicatat berdasarkan konsep...", options: ["Ruang", "Jarak", "Waktu", "Lokasi"], answer: 2, desc: "Konsep waktu memetakan kapan hari, tanggal, dan tahun sebuah kejadian berlangsung." },
    { q: "Perpindahan komoditas beras dari daerah Karawang menuju Jakarta termasuk ke dalam jenis...", options: ["Interaksi ruang/keruangan", "Konsep waktu", "Letak astronomis", "Zonasi iklim"], answer: 0, desc: "Adanya pengiriman fisik komoditas barang lintas daerah menandai interaksi ruang." },
    { q: "Salah satu dari tiga syarat interaksi keruangan yang berkaitan dengan kemudahan akses jalan dinamakan...", options: ["Complementarity", "Intervening Opportunity", "Transferability", "Regionalisasi"], answer: 2, desc: "Transferability menitikberatkan pada kemudahan transfer, infrastruktur jalan, dan transportasi." },
    { q: "Urbanisasi merupakan bentuk migrasi atau mobilitas penduduk dari...", options: ["Kota ke Desa", "Desa ke Kota", "Negara ke Negara", "Pulau ke Pulau"], answer: 1, desc: "Urbanisasi adalah perpindahan masyarakat desa menuju kota untuk mencari pekerjaan/pendidikan." },
    { q: "Secara letak geografisnya, wilayah Indonesia diapit oleh dua samudra besar yaitu...", options: ["Atlantik dan Arktik", "Hindia dan Pasifik", "Pasifik dan Atlantik", "Hindia dan Atlantik"], answer: 1, desc: "Indonesia terletak di posisi silang strategis antara Samudra Hindia dan Samudra Pasifik." },
    { q: "Dampak koordinat astronomis Indonesia (6° LU – 11° LS) menyebabkan Indonesia beriklim...", options: ["Subtropis", "Gurun", "Kutub", "Tropis"], answer: 3, desc: "Karena dilalui garis khatulistiwa (ekuator), Indonesia mendapat sinar matahari sepanjang tahun (Tropis)." },
    { q: "Negara melakukan kerja sama internasional terutama dilatarbelakangi oleh...", options: ["Ingin menguasai negara lain", "Tidak ada negara yang mampu hidup mandiri memenuhi seluruh kebutuhannya", "Perintah organisasi dunia", "Sengaja menghabiskan anggaran"], answer: 1, desc: "Keterbatasan sumber daya alam dan teknologi memaksa negara saling bekerja sama." },
    { q: "Kerja sama kemitraan yang digalang khusus hanya melibatkan dua negara saja dinamakan...", options: ["Multilateral", "Regional", "Bilateral", "Nasional"], answer: 2, desc: "Bilateral berasal dari kata 'Bi' yang artinya dua pihak/negara (contoh: Indonesia-Jepang)." },
    { q: "Organisasi perhimpunan bangsa-bangsa di kawasan Asia Tenggara (ASEAN) tergolong kerja sama...", options: ["Bilateral", "Regional", "Multilateral", "Internasional Global"], answer: 1, desc: "Regional didasarkan pada kesamaan kedekatan wilayah geografis/satu kawasan." },
    { q: "Jenis kerja sama terbuka berskala global yang merangkul banyak negara di dunia dinamakan...", options: ["Bilateral", "Regional", "Multilateral", "Lokal"], answer: 2, desc: "Multilateral melibatkan banyak negara tanpa dibatasi wilayah (contoh: PBB, WHO)." },
    { q: "Manakah di bawah ini negara yang tidak termasuk ke dalam 5 deklarator pendiri ASEAN?", options: ["Indonesia", "Malaysia", "Filipina", "Vietnam"], answer: 3, desc: "Lima negara pendiri ASEAN adalah Indonesia, Malaysia, Thailand, Singapura, dan Filipina." },
    { q: "Tahun berapakah organisasi perdamaian dunia PBB resmi didirikan?", options: ["1914", "1928", "1945", "1967"], answer: 2, desc: "PBB (United Nations) resmi berdiri pasca-Perang Dunia II berakhiran pada tahun 1945." },
    { q: "Badan PBB khusus yang mengesahkan Candi Borobudur sebagai warisan budaya dunia adalah...", options: ["WHO", "UNESCO", "UNICEF", "WTO"], answer: 1, desc: "UNESCO berfokus menangani kerja sama bidang Pendidikan, Sains, dan Kebudayaan internasional." }
];

// --- FUNGSI RENDER HALAMAN MATERI DENGAN ANIMASI BERTALAH (STAGGERED) ---
function renderMateri() {
    const container = document.getElementById('materi-list');
    if (!container) return;

    container.innerHTML = '';
    materiData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'accordion-item';
        div.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(this)">
                <span>${item.title}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="accordion-content">
                ${item.content}
            </div>
        `;
        container.appendChild(div);
    });

    // --- LOGIKA ANIMASI BERTALAP (MUNCUL SATU PER SATU) ---
    const items = container.querySelectorAll('.accordion-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show-fade');
        }, index * 100); // Jeda 100ms (0.1 detik) antar materi agar muncul bergantian
    });

    // Fitur Live Search Materi
    const searchInput = document.getElementById('materi-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const val = e.target.value.toLowerCase();
            items.forEach(el => {
                const titleText = el.querySelector('.accordion-header span').innerText.toLowerCase();
                if (titleText.includes(val)) {
                    el.style.display = 'block';
                } else {
                    el.style.display = 'none';
                }
            });
        });
    }
}

    // Fitur Live Search Materi
    const searchInput = document.getElementById('materi-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const val = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.accordion-item');
            items.forEach(el => {
                const titleText = el.querySelector('.accordion-header span').innerText.toLowerCase();
                if (titleText.includes(val)) {
                    el.style.display = 'block';
                } else {
                    el.style.display = 'none';
                }
            });
        });
    }

function toggleAccordion(element) {
    const item = element.parentElement;
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');
    
    // Tutup materi lain yang sedang terbuka (fitur auto-collapse)
    document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.accordion-content');
            if (otherContent) {
                otherContent.style.maxHeight = null;
                otherContent.style.opacity = 0;
                otherContent.style.paddingTop = "0px";
                otherContent.style.paddingBottom = "0px";
            }
        }
    });

    if (!isActive) {
        item.classList.add('active');
        // Memberikan tinggi dinamis sesuai isi materi agar animasi lancar
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
        content.style.paddingTop = "15px";
        content.style.paddingBottom = "15px";
    } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
        content.style.opacity = 0;
        content.style.paddingTop = "0px";
        content.style.paddingBottom = "0px";
    }
}
// --- FUNGSI LOGIKA HALAMAN LATIHAN ---
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let quizQuestions = [];

function initQuiz() {
    if (!document.getElementById('quiz-body')) return;
    // Acak urutan 40 soal
    quizQuestions = allQuestions.sort(() => Math.random() - 0.5);
    showQuestion();
    startTimer();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.q;
    document.getElementById('question-count').innerText = `Soal ${currentQuestionIndex + 1}/40`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Gandakan array pilihan lalu acak urutan pilihan jawabannya
    const optionsWithIndex = question.options.map((opt, i) => ({ text: opt, originalIndex: i }));
    optionsWithIndex.sort(() => Math.random() - 0.5);

    optionsWithIndex.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => checkAnswer(opt.originalIndex, question.answer, question.desc);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('quiz-progress').style.width = `${((currentQuestionIndex) / 40) * 100}%`;
}

function checkAnswer(selectedIndex, correctIndex, description) {
    const popup = document.getElementById('quiz-popup');
    const title = document.getElementById('popup-title');
    const desc = document.getElementById('popup-desc');
    const optionsContainer = document.getElementById('options-container');
    const buttons = optionsContainer.querySelectorAll('.option-btn');

    // Cari tahu tombol mana yang diklik pengguna secara visual
    buttons.forEach(btn => {
        // Kita cari tombol berdasarkan teks pilihan yang diklik
        if (btn.innerText === quizQuestions[currentQuestionIndex].options[selectedIndex]) {
            if (selectedIndex === correctIndex) {
                btn.classList.add('answer-correct'); // Kasih efek hijau + memantul
            } else {
                btn.classList.add('answer-wrong'); // Kasih efek merah + bergetar
            }
        }
        btn.disabled = true; // Kunci tombol agar tidak bisa klik berkali-kali
    });

    // Jalankan delay sedikit sebelum pop-up penjelasan muncul agar animasinya kelihatan dulu
    setTimeout(() => {
        if (selectedIndex === correctIndex) {
            correctCount++;
            title.innerText = "✅ Jawaban Kamu Benar!";
            title.style.color = "#22c55e";
        } else {
            wrongCount++;
            const correctText = quizQuestions[currentQuestionIndex].options[correctIndex];
            title.innerText = "❌ Jawaban Kurang Tepat";
            title.style.color = "#ef4444";
            title.innerHTML += `<br><span style="font-size:1.1rem; color:var(--text-dark);">Jawaban yang benar adalah: <strong>${correctText}</strong></span>`;
        }
        
        desc.innerHTML = `<br><strong>Penjelasan:</strong><br>${description}`;
        popup.style.display = 'flex';
    }, 400); // Pop-up muncul setelah 0.4 detik (setelah animasi tombol selesai)
}

function nextQuestion() {
    const quizBody = document.getElementById('quiz-body');
    
    // Beri efek memudar keluar sebelum ganti soal
    if (quizBody) quizBody.classList.add('fade-question');
    
    setTimeout(() => {
        document.getElementById('quiz-popup').style.display = 'none';
        currentQuestionIndex++;
        
        if (currentQuestionIndex < 40) {
            showQuestion();
            // Kembalikan ke tampilan normal (menghilangkan efek memudar)
            if (quizBody) quizBody.classList.remove('fade-question');
        } else {
            showResults();
        }
    }, 250); // Jeda sepersekian detik untuk transisi perpindahan soal
}

function showResults() {
    document.getElementById('score-screen').style.display = 'flex';
    document.getElementById('final-correct').innerText = correctCount;
    document.getElementById('final-wrong').innerText = wrongCount;
    
    const percent = Math.round((correctCount / 40) * 100);
    document.getElementById('final-percent').innerText = `${percent}%`;
    
    let cat = "";
    if (percent >= 90) {
        cat = "Sangat Baik";
        if (typeof confetti === 'function') confetti(); // Efek kembang api jika nilai >= 90
    } else if (percent >= 80) {
        cat = "Baik";
    } else if (percent >= 70) {
        cat = "Cukup";
    } else {
        cat = "Perlu Belajar Lagi";
    }
    
    document.getElementById('final-category').innerText = `Kategori: ${cat}`;
}

// --- UTILS & GLOBAL INTERACTION ---
// Pemicu Tombol Kembali ke Atas (Back To Top)
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Fitur Membaca Progress Pengguna
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('reading-progress');
    if (bar) bar.style.width = scrolled + "%";
});

// Animasi Angka Statistik di Beranda
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
        const count = +counter.innerText;
        const inc = target / 50;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 15);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Pengaturan Timer Sederhana
let seconds = 0;
function startTimer() {
    setInterval(() => {
        seconds++;
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        const timerEl = document.getElementById('timer');
        if (timerEl) {
            timerEl.innerHTML = `<i class="fas fa-clock"></i> ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// Menjalankan inisialisasi otomatis berdasarkan halaman yang dibuka
window.addEventListener('DOMContentLoaded', () => {
    renderMateri();
    initQuiz();
});

// --- LOGIKA INTERACTIVE ENERGY TRANSFORMER ---
function transformEnergy(asal, hasil, namaAlat, element) {
    // 1. Reset status keaktifan semua tombol pilihan alat
    document.querySelectorAll('.energy-btn').forEach(btn => {
        btn.classList.remove('active-transform');
    });
    
    // 2. Aktifkan tombol yang baru saja diklik pengguna
    element.classList.add('active-transform');

    // 3. Ambil elemen DOM display visual
    const nodeAsal = document.getElementById('node-asal');
    const nodeHasil = document.getElementById('node-hasil');
    const flowArrow = document.getElementById('flow-arrow');
    const deviceTitle = document.getElementById('device-title');
    const explanation = document.getElementById('transform-explanation');

    // 4. Ubah Teks Judul Alat yang sedang disimulasikan
    deviceTitle.innerText = `Simulasi: ${namaAlat}`;

    // 5. Ubah node teks energi asal dan hasil sesuai dengan parameter fungsi
    nodeAsal.innerText = asal;
    nodeHasil.innerText = hasil;

    // 6. Jalankan efek animasi denyut cahaya (Pulse & Glow Arrow)
    nodeAsal.classList.add('pulse');
    nodeHasil.classList.add('pulse');
    flowArrow.classList.add('active-arrow');

    // 7. Berikan teks narasi pembahasan konsep edukasi hukum energinya
    if (namaAlat === 'Kipas Angin') {
        explanation.innerHTML = "<strong>Prinsip Kerja:</strong> Kipas angin tersambung aliran muatan <strong>Energi Listrik</strong>, komponen motor listrik di dalamnya mengubah energi tersebut menjadi daya putar <strong>Energi Gerak</strong> baling-baling.";
    } else if (namaAlat === 'Lampu Listrik') {
        explanation.innerHTML = "<strong>Prinsip Kerja:</strong> Arus <strong>Energi Listrik</strong> memanaskan kawat filamen tipis di dalam bola lampu sehingga memancarkan pendaran <strong>Energi Cahaya</strong> (dan membuang sedikit energi sampingan berupa kalor).";
    } else if (namaAlat === 'Setrika Litrik') {
        explanation.innerHTML = "<strong>Prinsip Kerja:</strong> Hambatan elemen pemanas logam di dalam setrika menahan laju aliran <strong>Energi Listrik</strong>, mengubahnya menjadi suhu tinggi konstan <strong>Energi Panas (Kalor)</strong>.";
    } else if (namaAlat === 'Baterai Senter') {
        explanation.innerHTML = "<strong>Prinsip Kerja:</strong> Reaksi zat kimia aktif di dalam tabung baterai menghasilkan beda potensial arus searah <strong>Energi Kimia → Energi Listrik</strong> untuk menyalakan lampu senter.";
    } else if (namaAlat === 'Mobil Bensin') {
        explanation.innerHTML = "<strong>Prinsip Kerja:</strong> Bahan bakar fosil cair (bensin) menyimpan <strong>Energi Kimia</strong>. Saat dikompresi dan dipantik busi dalam ruang bakar, ledakan tersebut menghasilkan daya dorong piston pemicu <strong>Energi Gerak</strong>.";
    } else if (namaAlat === 'Panel Surya') {
        explanation.innerHTML = "<strong>Prinsip Kerja:</strong> Sel fotovoltaik menangkap radiasi gelombang foton <strong>Energi Cahaya Matahari</strong>, memicu pergerakan elektron semikonduktor menghasilkan aliran bersih <strong>Energi Listrik</strong>.";
    }
}
