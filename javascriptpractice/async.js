console.log("welcome to asynchronous programming language");
//       // document.write("here we are trying the asynchronous programming")
//   let body=document.body;
// let arr=["sujal ","kumar","tinku"];

//    for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
//    }

//   var name="sujal";
//   var name2="kumar";
//     console.log(`my name is ${name} and my surname is ${name2}`)
//       function style(first,second){
//      return `${first}  ${second}`
//       }

//        let cll=`hello ${style("pinku","kumar")}`

//        console.log(cll);

//        let ny="<h1> here is my heading </h1> <p> here is paragraph</p>"
//   // sty.innerHTML=ny;

//    const h1= document.createElement("h1")
//     h1.innerText="hellow world";

//   body.appendChild(h1);
//          const fr=document.createElement("p")

//          fr.innerText="style the console ";
//          body.append(fr);

//            const ty=` here is style something <h1> inside the element there is heading</h1> <h2> here when we trying the element </h2>   we are here to style the system      <p> we are there to analysis the system</p>                              `

//            fr.innerHTML=ty;

//            function outer(){
//              var x=86;
//             console.log("here is outer element");

//             function inner(){
//               var y=98;
//               console.log(x+y)
//             }

//               inner();
//            }

//   outer();

//          const ti=()=>{
//           console.log(this);
//          }

//  ti();
//    function isit(){
//     console.log("here is function");

//    }

//   let rt={
//     ny:"sujal",
//     ju:()=>{
//       console.log(this)
//     },
//   }

//   // let de=document.querySelector("#sty");

//     // de.remove();
//       let cre = document.createElement("h3");
//       cre.innerText="here we are trying to add the ";
//       let cre2= document.createElement("h4");
//       cre2.innerText="here we are trying to console the ";
//       body.appendChild(cre,cre2);

//     console.log(document.URL);

//     // let ro=new Date();

//           //  setInterval(() => {
//           //   console.log(ro);
//           // }, 1000);

//     let date=document.querySelector("#date");
//     date.style.color="red";
//     date.style.margin="43px"
//     date.style.padding="21px"
//     date.style.border="solid";

//       function dr(){
//         date.innerHTML=new Date();

//       }
//       setInterval(dr,1000);
//       console.log("here is style");

//        let boj1={
//         name:"sujal",
//         home:"purnia",
//         study:"b.tech",
//         ft:function yt(){
//           console.log(this.name)
//         }
//        }

//       let age=20;
//       let message=(age>58)?"you are adult":"you are not adult";
//       console.log(message);

//   let obj5={
//     name:"aujal kumar",
//     student:"studing b.tech",
//     hobbies:"palying badminton",
//       by:function(){
//         console.log("here is function that i want to destructring it before it the the system updation ");
//       }
//   }

// let {student,by,hy}=obj5;
//   // console.log(by);
//   by();
// const numbers = [1, 2, 3, 4, 5];
// const [firstd, second, ...rest] = numbers;
// console.log(firstd); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]

//    var g=997;

//  function ny(){
//   var g="yu";
//  }

//   console.log(g);

//   let int=[43,47,454,343,454,];
// let int2=[1,243,43,43,3,2,2];
//  let arr5=[...int,...int2];
//    arr5.forEach((value)=>{
// console.log(value)
//    })

// console.log(Math.max(...int));

// let str="sujal kuamr";
// console.log(...str);
// let rto=[23,"syajl",98];

//   function sr(jkjdhf,jjdlfjdl){
//     console.log(jkjdhf)
//   }
//   sr(...rto)

//  let arru=["sk;jdspj",98934,"njdbdfk"];
//   let obj9={...arru};
//   console.log(obj9);
//    let sting="nldshofuhs";
//    let ruo=[...sting];
//    console.log(ruo);

//    console.log()
// let pritn=function tu(){
//   console.log(this.name)
//   }
// // here see the call bind and apply function in javascript
//   let aru=[ function(){
//     console.log("here is functon inside the array");
//     console.log(this.name);
//   }           ]

//     let user1={
//       name:"yes it is first one",
//       ob:function( rtyy){
//           console.log(this.name);
//           console.log(rtyy)
//         }
//       }
//       let user2={
//         name:"sujal kumar",
//         ob1:()=>{
//           console.log("here is second function ")
//         }

//       }

//       user1.ob.apply(user2,["apply"]);
//       // ou();
//  pritn.call(user1,user2);
//  aru[0].call(user2);

// now we can see the prototype about the any particular object

// let obj1 = {
//   name: "sujal",
//   study: "b.tech",
//   education: "always interested",
// };

// let obj2 = {
//   name1: "sujal kumar",
//   study1: "electrical engineering",
//   perofession: "softwere engineer",
 
// };
    
//    let arr=[45,86,"filhsdlf"];
//    console.log(arr);

//    function Person () 
//    { this.name = 'John', this. age = 23 };
//     const person = new Person();

//     console.log(person);
//     // let person=87;



//     let obj3={
//       name3:"obj3"
//     }
//   let obj4={
//     name4:"obj4",
//     __proto__:obj3
//   }
//   let obj5={
//     name5:"obj5",
//     __proto__:obj4
//   }
      

  // console.log(obj5);
  // const objt=new Object();
  // console.log(objt);



  let arry=["sujal",53,"tinku",5434,"thid"];


     let obj9={

     }
     arry.forEach((value,index)=>{
    
         obj9[index]=value;
         
        })
     console.log(obj9);

     let  o=0; 
   for(let i=0;i<8;i++){
   
    console.log(o);
     o++;
   }








