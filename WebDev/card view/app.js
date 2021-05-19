const card=document.querySelector(".card");
const container=document.querySelector(".container");

const name=document.querySelector(".name");
const pic = document.querySelector(".pic img");
const purchase = document.querySelector(".site ");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".btns");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  //Animate In
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    name.style.transform = "translateZ(150px)";
    pic.style.transform = "translateZ(140px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  });
  //Animate Out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    name.style.transform = "translateZ(0px)";
    pic.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  });