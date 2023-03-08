<link rel="stylesheet" href="3/data/f.min.css" type="text/css" media="all" />
<script src="3/data/f.min.js" type="text/javascript" charset="utf-8"></script>
<style type="text/css" media="all">
    .img {
        width: 110px;
        border: none;
    }
    .header-content {
        padding-bottom: 5px;
        padding-top: 10px;
        padding-left: 16px;
        padding-right: 16px;
    }
    .h1 {
        margin-bottom: 16px;
        margin-top: 10px;
        color: var(--white);
        background-color: var(--bs-biru);
        padding: 20px;
    }
    .h3 {
        text-align: center;
        background-color: var();
    }
    body {
        border: 5px solid var(--magenta);
        padding: 2px;

    }
    #whats {
        padding: 5px;
        margin: 10px;
        font-family: Monospace;
        background-color: var(--birudoger);
        color: var(--white);
    }
    #status {
        padding: 5px;
        background-color: var(--yellow);
    }
    #join {
        padding: 5px;
        margin: 10px;
        background-color: var(--green);
    }
    .active {
        border-radius: 12px;
    }
</style>
<body>

    <div class="header">
        <div class="header-content">
            <div class="nav" id="nav">
                <a href="#home" class="active">F</a>
                <a href="#berita" onclick="typing2()">Lisensi</a>
                <a href="#hubungi" onclick="typing3()">Creator</a>
                <a href="#" onclick="typing4()">QnA</a>
                <a href="javascript:void(0);" class="icon" onclick="navFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </div>
    <h1 class="h1">CSS Framework Framecss</h1>
    <div class="">
        <p align="center">
            <a href="#"><button onclick="typing0()" class="btn success mybtn1" type="submit">Whats?</button></a>
            <a href="#">
                <button onclick="typing1()" class="btn danger mybtn2" type="submit">Status</button>
            </a>
            <a href="#">
                <button class="btn warning mybtn3" type="submit">Mulai</button>
            </a>
            <a href="https://chat.whatsapp.com/G3340KQHfs7DNLbFvHDXGd" target="_blank">
                <button class="btn info mybtn3" type="submit">Join</button>
            </a>
        </p>
    </div>

    <p align="center">
        <a href="#">
            <img class="img" src="../g.jpg" alt="Framecss Logo" width="" height="">
        </a>
    </p>

    <h3 id="demo" class="h3">Framecss 3 :: </h3>

    <p id="whats"></p>
    <p id="status"></p>
    <p id="join"></p>


    <script type="text/javascript" charset="utf-8">
        var i = 0;
        var txt = 'Framecss adalah CSS Framework, menyediakan berbagai macam library CSS yang siap untuk mendesign web dan aplikasi web responsible.';
        var speed = 100;

        function typing0() {
            if (i < txt.length) {
                document.getElementById("whats").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typing0, speed);
            }
        }
        function typing1() {
            alert("Status : Release Version ")
        }
        function typing2() {
            alert("GPL 3.0")
        }
        function typing3() {
            alert("Created by Nelsen Niko ")
        }
        function typing4() {
            alert("QnA : +62-853-2873-6706")
        }
    </script>
</body>