[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2SkG2t8NshC_wKAJhPhixCLtsYfzlLCBxRrMXfPXUNq8iLBtHzHFmkyQ36SedZw5CpGEIdFk0hfD1D8OykxFcqSueHpGuOQFwhaiX51P_0Tg670-0afL0-JmxDKcMCkSVF3LvNb_s92G3KAzexnFbsBT2vUqWo2Of5WL5VI6CqHFVor-zIE6yqatoSw/s4096/Framecss-banner.jpg" width=55%>](https://github.com/nelsenpro/frame)
# Selamat Datang di ::Framecss Framework CSS
Menyediakan berbagai macam library CSS untuk keperluan Desain Aplikasi Web
## Daftar isi :
- [Persiapan](#download)
- [Dokumentasi](#dokumentasi)
- [Struktur Framecss](#struktur-framecss)
- [Layout](#float-layout)
- [Grid Layout](#grid-layout)
- [Bikin Header](#membangun-header)
- [Bikin Panel](#header-panel)
- [Bikin Tombol](#membangun-tombol)
- [Bikin Tabel](#membangun-tabel)
- [Dokumentasi Lainnya](https://github.com/nelsenpro/frame/blob/main/framecss/2.1.23.Alpha/dokumentasi.md)
- [Creators](#creators)
- [Thanks](#thanks)
## install :
### NPM - old version
```text
npm i framecss3
```
### Download - old version
[Gitlab](https://gitlab.com/nelsenpro/frame/-/archive/main/frame-main.zip)
## CDN - new update
```html
<!--CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.css" type="text/css" media="all" />
<!--JS -->
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
```

## Deskripsi
| Nama | Deskripsi |
| --- | --- |
| Versi Alpha | 1.1.23; 2.1.23; 3.1.23|
| Lisensi | GNU GPL 3 |
# Dokumentasi
## Struktur Framecss
```text
framecss/
|── data/
  ├── animate.css
  |
  ├── fonts/all.min.css
  │
  │
  ├── f.min.css
  ├── f.min.js
  |
  └── normalize.css

```
## Template Cepat ::Framecss
### Float Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.css" type="text/css" media="all" />
    <!--JS-->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
    <!---
            <link rel="stylesheet" href="data/f.min.css" type="text/css" media="all" />
            <script src="data/f.min.js" type="text/javascript" charset="utf-8"></script>
        -->
    <title>Framecss 3</title>
</head>
<body>
    <style type="text/css" media="all">
:root {
        --magenta: #d80073;
    }
        * {
            color: var(--white);
        }
        .bg-magenta {
            background-color: var(--magenta);
        }
    </style>
    <div class="header bg-merah">
        <h1 class="">Halo Dunia</h1>
        <p>
            Framecss 3.1.23
        </p>
    </div>
    <!-- akhir blok, jumbotron-->

    <!-- isi konten 1-->
    <div class="baris">
        <div class="utama samping bg-kuning">
            <h2 class="">Konten 1 lebar 30%</h2>
        </div>
        <!-- akhir konten 1-->

        <!-- isi konten 2-->
        <div class="utama tengah bg-magenta">
            <h2 class="">Konten 2 lebar 65%, kamu dapat menggunakan grid 2 untuk lebar 100%</h2>
        </div>
        <!-- akhir konten 2-->

        <!-- awal footer-->
    </div>
    <div class="footer bg-hijau">
        <p class="">
            Footer
        </p>
    </div>
    <!-- akhir footer-->

</body>
</html>
```
### Grid Layout
#### Grid 1 items
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.css" type="text/css" media="all" />
    <!--JS-->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
    <!--
            <link rel="stylesheet" href="data/f.min.css" type="text/css" media="all" />
            <script src="data/f.min.js" type="text/javascript" charset="utf-8"></script>
            -->
    <title>grid1</title>
</head>
<body>
    <style type="text/css" media="all">
        * {
            color: var(--white);
        }
    </style>
    <div class="header lbs-indigo">
        header
    </div>
    <div class="framecss-grid1">
        <div class="konten bg-hijau">
            konten 1 bg-hijau
        </div>
        <div class="konten bg-merah">
            konten 2 bg-merah
        </div>
        <div class="konten bg-kuning bs-hitam">
            konten 3 bs-hitam
        </div>
        <div class="konten lbs-biru">
            konten 4 lbs-biru
        </div>
        <div class="konten lbs-ungu">
            konten 5 lbs-ungu
        </div>
        <div class="konten lbs-oren bs-hitam">
            konten 6 bs-hitam
        </div>
    </div>
    <div class="footer lbs-cyan">
        footer
    </div>
</body>
</html>
```
#### Grid 2 items
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.css" type="text/css" media="all" />
    <!--JS-->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
    <!--
            <link rel="stylesheet" href="data/f.min.css" type="text/css" media="all" />
            <script src="data/f.min.js" type="text/javascript" charset="utf-8"></script>
            -->
    <title>grid2</title>
</head>
<body>
    <div class="framecss-grid2">
        <div class="header lbs-kuning putih">
            <h2>header</h2>
        </div>

        <div class="konten-kiri lbs-ungu putih">
            konten Kiri, teks putih
        </div>
        <div class="konten-tengah bg-hijau putih">
            konten Tengah, teks putih
        </div>

        <div class="footer bg-merah putih">
            <p>
                Kaki
            </p>
        </div>
    </div>
</body>
</html>
```
#### Grid 3 items
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.css" type="text/css" media="all" />
    <!--JS-->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
    <!--
            <link rel="stylesheet" href="data/f.min.css" type="text/css" media="all" />
            <script src="data/f.min.js" type="text/javascript" charset="utf-8"></script>
            -->
    <title>grid3</title>
</head>
<body>
    <div class="framecss-grid3">
        <div class="header">
            <h2>header</h2>
        </div>

        <div class="konten-kiri">
            konten Kiri
        </div>
        <div class="konten-tengah">
            konten Tengah
        </div>
        <div class="konten-kanan">
            konten kanan
        </div>

        <div class="footer">
            <p>
                footer
            </p>
        </div>
    </div>
</body>
</html>
```
## Membangun Header
### Header Navigasi
```html
<div class="nav" id="nav">
    <a href="#home" class="active">Beranda</a>
    <a href="#berita">Berita</a>
    <a href="#hubungi">Hubungi</a>
    <a href="#tanya">Tanya</a>
    <a href="#unduh">Unduh</a>
    <a href="#contoh">Contoh</a>
    <a href="javascript:void(0);" class="icon" onclick="navFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>
```
```html
<div class="nav-hijau" id="nav-hijau">
    <a href="#home" class="active">Beranda</a>
    <a href="#news">Berita</a>
    <a href="#hubungi">Hubungi</a>
    <a href="#tanya">Tanya</a>
    <a href="#unduh">Unduh</a>
    <a href="#contoh">Contoh</a>
    <a href="javascript:void(0);" class="icon" onclick="hijauFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>
```
### Header Panel
## Membangun Header Panel
### Panel Default
```html
<div class="header">
    <h1 class="hitam">Selamat Datang di Framecss Indonesia</h1>
    <small class="hitam">
        versi <i>3.1.23</i> <b>::</b>
    </small>
</div>
```
### Panel modifikasi Latar
```html
<div class="nav-ping" id="nav-ping">
    <a href="#home" class="active">Beranda</a>
    <a href="#berita">Berita</a>
    <a href="#hubungi">Hubungi</a>
    <a href="#tanya">Tanya</a>
    <a href="#unduh">Unduh</a>
    <a href="#contoh">Contoh</a>
    <a href="javascript:void(0);" class="icon" onclick="pingFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>
```
### Panel modifikasi Latar Animasi
```html
<div class="nav-kuning animasi-latar" id="nav-kuning">
    <a href="#home" class="active">Beranda</a>
    <a href="#berita">Berita</a>
    <a href="#hubungi">Hubungi</a>
    <a href="#tanya">Tanya</a>
    <a href="#unduh">Unduh</a>
    <a href="#contoh">Contoh</a>
    <a href="javascript:void(0);" class="icon" onclick="kuningFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>
```
## Membangun Tombol
### tombol default
```html
<button class="tombol" type="submit">Tombol</button>
```
### tombol modifikasi
```html
<button class="tombol bayang-merah u10px" type="submit">Tombol</button>
<button class="tombol-kuning r12px" type="submit">Tombol</button>
<button class="tombol-ping r8px bayang" type="submit">Tombol</button>
<button class="tombol-magenta u25px bayang-hijau" type="submit">Tombol</button>
```
### tombol grup : Float pakai section, grid pakai div
```html
<section class="grup-tmb" style="width:">
    <button class="r12px frame expand" judul="tombol ini radius 12px" onclick="" style="width:">AcdEF</button>
    <button class="u20px frame swing" judul="tombol ini radius 20px" onclick="" style="width:">BcDefG</button>
    <button class="u10px" onclick="" style="width:">Cdefg</button>
    <button class="r8px" onclick="" style="width:">DefGh</button>
    <button class="u1px" onclick="" style="width:">EfGhij</button>

</section>
<br />
<section class="grup-tmb-v" style="width:auto">
    <p>
        grup vertikal : animasi latar berubah
    </p>
    <button class="frame fade" judul="ukuran 50%" onclick="" style="width:50%">Abcde</button>
    <button onclick="" style="width:50%">BcDefg</button>
    <button class="frame aframe" onclick="" style="width:50%">CdEfgh
        <span class="teks">tombol ini ukuran 50%</span></button>
    <button onclick="" style="width:90%">DefGHi</button>
    <button onclick="" style="width:40%">EFgHI</button>
    <button onclick="" style="width:15%">F</button>
    <button onclick="" style="width:60%">G</button>
</section>
```
## Membangun Tabel
### tabel default
```html
<table class="tabel ta l80">
    <tr>
        <th>Nama</th>
        <th>Class</th>
    </tr>
    <tr>
        <td>Hijau</td>
        <td>hijau</td>
    </tr>
</table>
```
### tabel modifikasi
```html
<input type="text" id="ketikkan" onkeyup="fungsicariTabel()" placeholder="cari nama..">
<table id="caritabel" class="tabel-magenta">
    <tr>
        <th>Nama</th>
        <th>Class</th>
    </tr>
    <tr>
        <td>Hijau</td>
        <td>hijau</td>
    </tr>
    <tr>
        <td>Merah</td>
        <td>merah</td>
    </tr>
    <tr>
        <td>Magenta</td>
        <td>magenta</td>
    </tr>
</table>
```
## [Lanjutkan Dokumentasi atau Tutorial](https://github.com/nelsenpro/frame/blob/main/framecss/2.1.23.Alpha/dokumentasi.md)

## Creators
[*Nelsen Niko*](https://wa.me/6285328736706/)
<!-- Text -->

## Thanks
[Normalize.css](https://necolas.github.io/normalize.css/) | [Animate.css](https://animate.style/) | [Fontsawesome](https://fontawesome.com/) | [StaticSave](https://staticsave.com/) | [W3schools](https://www.w3schools.com/) |
