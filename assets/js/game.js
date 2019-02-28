var waktu_awal=20; // waktu awal memulai game
var margin_atas=5; 
var margin_kiri=10;
var score = 0; // score awal

// mulai permainan
function start(){
    var posisi = new pergeseran_posisi();
    var waktu = new penghitung_waktu();
}

// untuk menghitung score ketika nyamuk berhasil di klik maka score tambah 1
function nilai(){
    document.getElementById("score").value =  score;
    score++;
    // document.getElementById("score").innerHTML = score;
}

// untuk menghitung waktu permainan
function penghitung_waktu(){
    waktu_sekarang = document.getElementById("time").value = waktu_awal;
    document.getElementById("time").innerHTML = waktu_awal;
    waktu_awal--;
    var hasil = document.getElementById("score").value;
    if(waktu_sekarang==0){ // jika waktu sudah habis
        if(hasil<20){ // score di bawah 20 klik maka kalah
            alert("SELAMAT ANDA KALAH!!!");
            window.location="index.html";
            hasil = 0;
        }
        else{ // jika lebih sama dengan 20 klik maka menang
            alert("YAH ANDA MENANG!!!");
            window.location="index.html";
            hasil = 0;
        }
    }
    else{
        setTimeout("penghitung_waktu()", 1000);
    }
}

// untuk menggeser posisi nyamuk
var batas_kiri = false; // batas margin kiri
var batas_atas = false; // batas margin atas
function pergeseran_posisi(){
    var gambar = document.getElementById("gambar");
    gambar.style.position = "fixed";
    gambar.style.marginLeft = margin_kiri+"px";
    gambar.style.marginTop = margin_atas+"px";
    if(margin_kiri>=1150){
        batas_kiri =true;
    }
    else if(margin_kiri==10){
        batas_kiri=false;
    }
    if(margin_atas==250){
        batas_atas=true;
    }
    else if(margin_atas==100){
        batas_atas=false;
    }
    if(batas_kiri){
        margin_kiri-=3;
    }
    else{
        margin_kiri+=3;
    }
    if(batas_atas){
        if(margin_kiri>=1150){
            margin_atas-=15;
        }
        else if(margin_kiri==10){
            margin_atas-=15;
        }
    }
    else{
        if(margin_kiri>=1150){
            margin_atas+=15;
        }
        else if(margin_kiri==10){
            margin_atas+=15;
        }
    }
 setTimeout("pergeseran_posisi()", 5); 
 }