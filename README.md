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
├── data/
│ ├── animate.css
│ ├── files.css
│ ├── fonts/
│ │
│ │
│ ├── frame.min.css
│ ├── frame.min.s
│ ├
│ └── normalize.css
├── index.html
```
## Template Standar::Framecss
### Float Layout
```html

```
### Grid Layout
#### Grid 2 items
```html

```
#### Grid 3 items
```html

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
