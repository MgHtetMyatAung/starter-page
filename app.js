let btn=document.getElementById('btn');
let icon=document.getElementById('icon');
let show=document.getElementById('show');

btn.addEventListener('click',_=>{
    icon.classList.toggle('fa-xmark');
    show.classList.toggle('active');
});

window.onscroll=()=>{
    show.classList.remove('active');
    icon.classList.remove('fa-xmark');
}