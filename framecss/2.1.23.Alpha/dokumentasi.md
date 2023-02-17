[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2SkG2t8NshC_wKAJhPhixCLtsYfzlLCBxRrMXfPXUNq8iLBtHzHFmkyQ36SedZw5CpGEIdFk0hfD1D8OykxFcqSueHpGuOQFwhaiX51P_0Tg670-0afL0-JmxDKcMCkSVF3LvNb_s92G3KAzexnFbsBT2vUqWo2Of5WL5VI6CqHFVor-zIE6yqatoSw/s4096/Framecss-banner.jpg" width=50%>](https://)
# Contoh Halaman Login 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
    <link rel="stylesheet" href="https://static.staticsave.com/edata/frame.css" type="text/css" media="all" />
    <script src="https://static.staticsave.com/edata/frame.js" type="text/javascript" charset="utf-8"></script>
</head>
<body class="framecss img">
    <style>
        /* latar login gambar */
        .img {
            height: 100vh;
            background-image: url(https://bit.ly/41638Oz);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        /* akhir login gambar */
    </style>
    <div class="form1">
        <h1>Login</h1>
        <div>
            <form class="form">
                <div>
                    <label for="email">Email</label> <input type="email" id="email" name="email" value="nelsen@niko.com">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" value="password" placeholder="password">
                </div>
                <button formaction="../index.html">Login</button>
            </form>
        </div>

    </div>
</body>
</html>
```
# Nama Class Animasi
```text
nama class :

animate__bounce
animate__flash
animate__pulse
animate__rubberBand
animate__shakeX
animate__shakeY
animate__headShake
animate__tada

nama lainnya:
1. Attention seekers :
bounce
flash
pulse
rubberBand
shakeX
shakeY
headShake
swing
tada
wobble
jello
heartBeat

2. Back entrances :
backInDown
backInLeft
backInRight
backInUp

3. Back exits :
backOutDown
backOutLeft
backOutRight
backOutUp

4. Bouncing entrances :
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp

5. Bouncing exits :
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp

6. Fading entrances :
fadeIn
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInUp
fadeInUpBig
fadeInTopLeft
fadeInTopRight
fadeInBottomLeft
fadeInBottomRight

7. Fading exits :
fadeOut
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutUp
fadeOutUpBig
fadeOutTopLeft
fadeOutTopRight
fadeOutBottomRight
fadeOutBottomLeft

8. Flippers :
flip
flipInX
flipInY
flipOutX
flipOutY

9. Lightspeed :
lightSpeedInRight
lightSpeedInLeft
lightSpeedOutRight
lightSpeedOutLeft

10. Rotating entrances :
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight

11. Rotating exits :
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight

12. Specials :
hinge
jackInTheBox
rollIn
rollOut

13. Zooming entrances :
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp

14. Zooming exits :
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp

15. Sliding entrances :
slideInDown
slideInLeft
slideInRight
slideInUp
Sliding exits
slideOutDown
slideOutLeft
slideOutRight
slideOutUp
```
### cara menggunakan Animasi, modifikasi dengan CSS
```css
.animasi-ku {
    display: inline-block;
    margin: 0 0.5rem;*/
    animation: bounce;  /*nama animasi  */
    animation-duration: 2s;  /*durasi animasi  */
}
```
```html
<h1 class="animasi-ku">class animasi-ku</h1>
```
### cara lainnya, masukkan class pada tag html nya
```html
<h1 class="animate__animated animate__bounce">An animated element</h1>
```
### atau modifikasi dengan JavaScript
```javascript
const element = document.querySelector('.animasi-ku');
element.classList.add('animate__animated', 'animate__bounce');
```
# Foto Slideshow
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://static.staticsave.com/edata/frame.css" type="text/css" media="all" />
    <script src="https://static.staticsave.com/edata/frame.js" type="text/javascript" charset="utf-8"></script>
    <title>framecss</title>
</head>
<body class="putih framecss">
    <div class="framecss-grid">
        <div class="kepala lbs-ungu">
            <h1 class="">Selamat Datang di Framecss Indonesia</h1>
            <small class="">
                versi <i>2.1.23</i> <b>Alpha</b>
            </small>
        </div>
        <div class="badan-kiri lbs-hijau">
            <div class="">
                <h2 class="">badan samping</h2>
            </div>
        </div>
        <div class="badan-tengah lbs-oren">
            <div class="">
                <h2 class="">badan tengah</h2>
                <h2 class="">Slideshow</h2>
                <div class="slideshow-container">

                    <div class="frameslides fade">
                        <div class="angkateks">
                            1 / 3
                        </div>
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK1FqEhHQKe8QVRWHkJELDHR2xU3XzAjOsuM5anEEabGPuXkgiIjYDvT0lCLlpPAtt2ont5GXPT5uBgivz7Z9mj8L2jF_jtQa1DY26g_E7J6IAWWJz2g8-opSVm7dNgqJCTpc1sJjeLjkOvdxGZBXFxKtP8Ohh3sE6ZoSVfh4HaNqdJpYBoy3eIH-VIA/s1920/gmb1.jpg" style="width:100%">
                        <div class="text">
                            Gambar 1
                        </div>
                    </div>

                    <div class="frameslides fade">
                        <div class="angkateks">
                            2 / 3
                        </div>
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_GVYSyLNBGLeZMPwWEeyOHeE1Ju0wqj0E1JeIecqGv3_COoyjm06F2pVv-zBta99jH46612ju_diDlQ-hyrHuCq3J3flooLVIWxh8v9CiprNAo1NjoudWUAEAr1u4OYeM9ucgnOEseCGtJFtDPgYZQbEr4hZXEjTj4B5Eys2MLBxCgpf-ld6mlqhQ6Q/s1920/gmb5.jpg" style="width:100%">
                        <div class="text">
                            Gambar 2
                        </div>
                    </div>

                    <div class="frameslides fade">
                        <div class="angkateks">
                            3 / 3
                        </div>
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIb-fNdsxPD2Nrfr85-CruNjbAAvmQiArjpYiZ_nTiZ6dhZAEz74dnyd8H31QHCY8uIPj5g9WeWOF_umQ_LdM3hfa3_DY0txNekN6i1sssAGdDUdxu_1ko2UpWI8MKKhb7le8GayN65MGyafwG2hb_3b_-hyGW6zEwCa3x7H0QLma0_hUYDGsZfCqY2g/s1920/gmb6.jpg" style="width:100%">
                        <div class="text">
                            Gambar 3
                        </div>
                    </div>
                </div>

                <div style="text-align:center">
                    <span class="titik"></span>
                    <span class="titik"></span>
                    <span class="titik"></span>
                </div>
            </div>
        </div>
        <div class="badan-kanan lbs-merah">
            <div class="">
                <h2 class="">badan kanan</h2>
            </div>
        </div>
        <div class="kaki lbs-ping">
            <h2 class="putih">Kaki</h2>
        </div>
    </div>
    <script type="text/javascript" charset="utf-8">
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("frameslides");
            let titiks = document.getElementsByClassName("titik");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            for (i = 0; i < titiks.length; i++) {
                titiks[i].className = titiks[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            titiks[slideIndex-1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
    </script>
</body>
</html>
```
