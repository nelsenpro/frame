function navFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
};
function nav2Function() {
    var x = document.getElementById("nav2");
    if (x.className === "nav2") {
        x.className += " responsive2";
    } else {
        x.className = "nav2";
    }
};
function kuningFunction() {
    var x = document.getElementById("nav-kuning");
    if (x.className === "nav-kuning") {
        x.className += " responsivekuning";
    } else {
        x.className = "nav-kuning";
    }
};

function pingFunction() {
    var x = document.getElementById("nav-ping");
    if (x.className === "nav-ping") {
        x.className += " responsiveping";
    } else {
        x.className = "nav-ping";
    }
};
function hijauFunction() {
    var x = document.getElementById("nav-hijau");
    if (x.className === "nav-hijau") {
        x.className += " responsivehijau";
    } else {
        x.className = "nav-hijau";
    }
};
function biruFunction() {
    var x = document.getElementById("nav-biru");
    if (x.className === "nav-biru") {
        x.className += " responsivebiru";
    } else {
        x.className = "nav-biru";
    }
};
function magFunction() {
    var x = document.getElementById("magentanav");
    if (x.className === "nav-magenta") {
        x.className += " responsivemagenta";
    } else {
        x.className = "nav-magenta";
    }
};
// modal

// akhir modal

// modifikasi animasi

// akhir modifikasi animasi

function fungsicariTabel() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ketikkan");
    filter = input.value.toUpperCase();
    table = document.getElementById("caritabel");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};

// modifikasi JavaScript disini
console.log('koneksi ke JS berhasil');
// mulai modifikasi....