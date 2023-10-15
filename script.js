const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle.addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});


var typed= new Typed(".auto-type",{
    strings: [' خيارك لتصميم المواقع الالكترونية'],
    typeSpeed:150,
    backSpeed:50,
    loop:true
})
console.log('e')

let count2=document.getElementById( 'count2')
let count3=document.getElementById( 'count3')
let count1=document.getElementById( 'count1')
let count=document.getElementById('count');
console.log(count.textContent)
function conunter(e){
  let goal =e.dataset.goal;
  let fan= setInterval(()=>{e.textContent++;
  if(e.textContent==goal){
    clearInterval(fan);
  }
  },4000/goal)
}
conunter(count)
conunter(count1)
conunter(count2)
conunter(count3)


let up=document.querySelector('.up');
window.onscroll=function(){

  console.log(this.scrollY)
  if( this.scrollY>=1000){
    up.style.bottom='30px';
    }
    else{
      up.style.bottom='-40px'
    }
};
function upper(){
  this.scrollTo({
    top:0,
    behavior:"smooth"

  })
  
}