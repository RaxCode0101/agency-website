# Website SMK Jakarta 59

Website statis responsif untuk profil sekolah SMK Jakarta 59.

## Cara Menjalankan

- Buka `index.html` langsung di browser, atau
- Jalankan server statis lokal:

```bash
# via Python 3
python3 -m http.server 8080 --directory /workspace
# lalu buka: http://localhost:8080/index.html
```

## Struktur Proyek

```
/workspace
├─ index.html
├─ pages/
│  ├─ tentang.html
│  ├─ program-keahlian.html
│  ├─ berita.html
│  ├─ ppdb.html
│  ├─ ekstrakurikuler.html
│  ├─ prestasi.html
│  ├─ galeri.html
│  └─ kontak.html
└─ assets/
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  └─ main.js
   └─ img/
```

## Kustomisasi

- Ganti teks alamat, telepon, dan email pada footer.
- Perbarui gambar menggunakan folder `assets/img/` dan sesuaikan tag `<img>`.
- Tambahkan berita, prestasi, dan mitra industri sesuai kebutuhan.

## Lisensi

Hak cipta © SMK Jakarta 59. Konten placeholder dapat diganti sesuai data sekolah.
