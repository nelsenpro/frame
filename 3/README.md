[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2SkG2t8NshC_wKAJhPhixCLtsYfzlLCBxRrMXfPXUNq8iLBtHzHFmkyQ36SedZw5CpGEIdFk0hfD1D8OykxFcqSueHpGuOQFwhaiX51P_0Tg670-0afL0-JmxDKcMCkSVF3LvNb_s92G3KAzexnFbsBT2vUqWo2Of5WL5VI6CqHFVor-zIE6yqatoSw/s4096/Framecss-banner.jpg" width=40% align=center>](https://github.com/nelsenpro/frame)
# Framecss - Framework CSS
**CSS Framework Indonesia**
Menyediakan berbagai macam library CSS untuk keperluan Desain Aplikasi Web Responsible 
## Daftar isi :
- [Persiapan](#install)
- [Dokumentasi](#dokumentasi)
- [Struktur Framecss](#struktur-framecss)
- [Layout](#float-layout)
- [Grid Layout](#grid-layout)
- [Bikin Header](#membangun-header)
- [Bikin Panel](#header-panel)
- [Bikin Tombol](#membangun-tombol)
- [Bikin Tabel](#membangun-tabel)
- [Dokumentasi Lainnya](https://github.com/nelsenpro/frame/blob/main/3/docs/docs.md)
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f(1).min.css" type="text/css" media="all" />
<!--JS -->
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
```
## Starter Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!--CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f(1).min.css" type="text/css" media="all" />
    <!--JS -->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```
## Deskripsi
| Nama | Deskripsi |
| --- | --- |
| Versi | 3|
| Lisensi | GNU GPL 3 |
# Dokumentasi
## Struktur Framecss
```text
framecss/
|── data/
  |
  ├── fonts/all.min.css
  ├── f.min.css
  ├── f.min.js
```
## Layout dan Template Cepat ::Framecss
### Float Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f(1).min.css" type="text/css" media="all" />
    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>

    <title>Framecss 3</title>
</head>
<body class="putih">
    <!--- awal blok atau header -->
    <div class="header">
        <div class="header-content bg-biru">
            <h1 class="">Halo Dunia</h1>
            <p>
                Framecss 3.1.23
            </p>
        </div>
    </div>
    <!-- akhir blok atau header -->
    <div class="baris">
        <!-- isi konten 1 -->
        <div class="utama samping bg-kuning">
            <h2 class="">Konten 1</h2>
        </div>
        <!-- akhir konten 1 -->
        <!-- isi konten 2 -->
        <div class="utama tengah bg-magenta">
            <h2 class="">Konten 2</h2>
        </div>
        <!-- akhir konten 2 -->
    </div>
    <!-- awal footer -->
    <div class="footer bg-hijau">
        <p class="footer-content">
            Footer
        </p>
    </div>
    <!-- akhir footer -->
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f(1).min.css" type="text/css" media="all" />
    <!--JS -->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
    <title>grid1</title>
</head>
<body class="putih">
    <div class="header blok-biru">
        <div class="header-content">
            <h2 class="">Header</h2>
        </div>
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
        <div class="footer-content">
           <p>footer-content</p>
        </div>
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f(1).min.css" type="text/css" media="all" />
    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
    <title>grid2</title>
</head>
<body class="putih">
    <div class="header bg-magenta">
        <div class="header-content">
            <h1 class="">Grid 2</h1>
        </div>
    </div>
    <div class="framecss-grid2">
        <div class="konten-kiri bg-kuning">
            konten Kiri
        </div>
        <div class="konten-tengah bg-biru">
            konten tengah
        </div>
    </div>
    <div class="footer bg-hijau">
        <div class="footer-content">
            <p>
                footer
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f(1).min.css" type="text/css" media="all" />
    <!--JS -->
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/frame/3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
    <title>grid3</title>
</head>
<body class="putih">
    <div class="header lbs-merah">
        <div class="header-content">
            <h2>header</h2>
        </div>
    </div>
    <div class="framecss-grid3">
        <div class="konten-kiri lbs-hijau">
            konten Kiri
        </div>
        <div class="konten-tengah bg-magenta">
            konten Tengah
        </div>
        <div class="konten-kanan bg-biru">
            konten kanan
        </div>
    </div>
    <div class="footer bg-ungu">
        <div class="footer-content">
            <p>
                footer
            </p>
        </div>
    </div>
</body>
</html>
```
## Membangun Header
**Dasar**
```html
<div class="header">
    <div class="header-content">
        <!-- kode konten kamu -->
    </div>
</div>
```
**Dasar 2**
```html
<div class="header">
    <div class="blok">
        <h1 class="">Header</h1>
    </div>
</div>

<div class="header putih">
    <div class="blok-merah">
        <h1 class="">Header</h1>
    </div>
</div>
```
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
    <div class="header-content">
        <h1 class="">Selamat Datang di Framecss Indonesia</h1>
        <small class="">
            versi <i>3.1.23</i> <b>::</b>
        </small>
    </div>
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
### Footer
**Dasar 1**
```html
<div class="footer">
    <div class="footer-content">
        <!-- kode konten kamu -->
    </div>
</div>
```
**Dasar 2**
```html
<div class="footer">
    <p class="blok">
        Footer
    </p>
</div>

<div class="footer putih">
    <p class="blok-magenta">
        Footer
    </p>
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
### 'btn' atau 'btn success', 'btn danger', 'btn info'
```html
<button class="btn" type="submit">Tombol</button>
```
```html
<button class="btn danger" type="submit">Tombol</button>
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
## Background Colors :: Warna Latar Belakang
### pakai 'bg-NamaWarna' dan 'lbs-NamaWarna'
```html
<body class="bg-merah"> ;
<h1 class="bg-merah"></h1>;
atau
<body class="lbs-merah"> ;
<h1 class="lbs-merah"></h1>;
```
### Background Colors Linear Gradient 
```html
<body class="sublime-light"> ;
<h1 class="amin"></h1>;
atau warna yang lain....
<body class="megatron"> ;
<h1 class="lawrencium"></h1>;
```
## [Lanjutkan Dokumentasi atau Tutorial](https://github.com/nelsenpro/frame/blob/main/3/docs/docs.md)

## Creators
[*Nelsen Niko*](https://wa.me/6285328736706/)
<!-- Text -->

## Thanks
[Normalize.css](https://necolas.github.io/normalize.css/) | [Animate.css](https://animate.style/) | [Fontsawesome](https://fontawesome.com/) | [StaticSave](https://staticsave.com/) | [W3schools](https://www.w3schools.com/) |

