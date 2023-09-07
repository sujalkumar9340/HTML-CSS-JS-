var name="suajl";
console.log(name);
// const body=document.body;
// const h1= document.createElement('h1');
// h1.innerText='hellow world';
// body.append(h1);
// console.log("hellow world");
// console.log(mh);
// var mh="fty";
let mh="jndn";
console.log(mh);

console.log("tyijldsjds/");
// document.write("here is documment written");
console.log(window);
document.body.style.background="yellow";
document.body;
var na=document.getElementsByTagName('h1');
var hy=na[0];
hy.textContent = "coputer course";
console.log(hy);
var dr=document.getElementById('try');
//  var hyr=dr.innerHTML;
  var gt=dr.innerHTML= "<p> here is new paragraph</p>";
 console.log(gt);
var io=tu.innerHTML;
// console.log(io);
var it=document.getElementsByClassName("listitems");
it[0].textContent = 'animation';
it[2].style.fontWeight='bold';
it[2].style.color= 'white';
// it[2].style.backgroundColor='blue';
for(var i=0;i<it.length;i++){
    it[i].style.backgroundColor='blue';
}
var tyo=document.getElementsByClassName('listitems');
console.log(tyo);
const body=document.body;
const h6=document.createElement('h5');
h6.innerText='hello world';
body.append(h6);
console.log(document.URL);
const op=document.getElementById('yu')
const um=document.getElementById('rt');
op.removeChild(um);
const qw=document.getElementById("ao");
const iot=qw.getAttribute("href");
console.log(iot);
// Get a reference to the element
var element = document.getElementById("ao");

// Modify the value of the attribute
element.attributeName = "s/chttps://www.hotstar.com/in/sportricket?filters=sport_type%3Dcricket";
const my=document.getElementById("custome");
console.log(my.dataset);

 function newfunction(a,b){
  console.log("yes this is first function to excecute  for the ")
     return a*b;
 }
//  console.log(newfunction(9,4));
 function emailchec(email){
  const rp=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ ;
  const pi=rp.test(email);
  return pi;
 }
 const iy=emailchec("sujal978@gmail.hkj");
 console.log(iy);
 var ob={
    name:"sujal",
    addre:"india",
    number:9340389016,
 }
 console.log(ob);
var arr=["sujal",7783,"fruit","style",94];
console.log(arr[2]);
var str="sujal";
var se=str.toUpperCase();
console.log(se);
function first(){
    console.log("this is first one");
}
function myevent(){
console.log("this is first event that i apply");
}
function second(){
    console.log("here is second event");
}

var firsts=document.querySelector("#events")
firsts.addEventListener("click",first ,{ capture:true});
var ent=document.querySelector("#events1")
ent.style.backgroundColor="red";
ent.addEventListener("click",myevent,{capture:true});
const ran=document.querySelector("#events2")
// ran.style.backgroundColor="black";
ran.addEventListener("click",function(){
    console.log("this is mouseover"),{ captur:true} ;
});
function callback(){
    console.log("here is call back function to executed");

}
function call(calr){
    calr();
    console.log("inside this function we can call the function")
    
}
call(callback)
var fn=()=>{
    console.log("it is arrow function");

}
fn();
function dt(){
    console .log("it is used to try the howto invoke the function");

}
dt();

function st(){
    console .log("here we are waiting for the callback function to call the system to call it")
}

function now(){
    setTimeout(()=>{
        console.log("yes  set time out is going  in to the ")
    },100)
    // callback();
}
now();
console.log(" ruka huwa abhi nahi cahl raha hai ");

let num="4543";
let rt=4543;
console.log(num==rt);