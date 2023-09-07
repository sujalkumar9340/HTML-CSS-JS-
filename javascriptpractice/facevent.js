function getcheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="*";
            console.log("here is the chess",cheese)
            resolve(cheese)
        },2000);
    })
}

const { reject } = require("async");

const { reject } = require("async");

const { reject } = require("async");

function makeDough(cheess){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=cheess +"**";
            console.log("here is the dough",dough)
            resolve(dough)
        },2000);
    })
}
function bakepizza(dough){
    return  new Promise((resolve,reject)=>{
    setTimeout(() =>{
        const pizza= dough +"***";
        console.log("here is the pizza",pizza);
        resolve(pizza);
    },2000);
})}

  getcheese().then((cheess)=>{
    console.log("here is the cheese",cheess);
    return makeDough(cheese);
  })
.then((dough)=>{
    console.log("here is the dough",dough);
    return bakepizza(dough);
}).then((pizza)=>{
  console.log("here is the pizza",pizza)
})

  // now fetch API

//     let p=fetch('https://goweather.herokuapp.com/weather/ny')

//   p.then(value=>{
//     console.log(value.status)
//     console.log(value.ok)
//     return value.json()
//   }).then((value2)=>{
//   console.log(value2);
//   }).catch((error)=>{
//   console.log(error)
//   })

//   ;


   





// const apiKey = 'YOUR_API_KEY';
// const city = 'patna';

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     // Access the weather data
//     console.log(data);
//   })
//   .catch(error => console.log(error));


//   console.log("here api concept is going on");







// let student={
//     name:"durgesh",
    // age:20,
// };


// let str= `{"name":"durgesh","age":20}`
// let ans=JSON.stringify(student);
// console.log(ans);

//   let ob=JSON.parse(str);
//   console.log(ob);


//   let se=["ndfhl",8479,"skdlkfjes",84];
//     let dr=JSON.stringify(se);
//     console.log(dr);
//     console.log(se);








//    function cos(){
//     console.log("this is constructor function")
//       return  "sujal";
//    }

//   const obj=new cos();
//   console.log(obj)

//   function retu(){
//     console.log("this is mainly used to return the value")
//      return {
//         name:"sujal",
//         home:"kfdhohe",
//         distrit:"purnia"
//      }
   
//   }
//     let obj=retu();
    // console.log(obj.name);









//   function returning(){
//     console.log("we are using the returing the function")
//   }


//  function tyu(){
//     console.log("here is main function to call")
//     return returning();
//  }
//   tyu()

//   function check(name){
//     console.log("here is my name"+ name)
//   }



//     check();

// function gy(uyi ){
//     console.log("here we are calling")
// }


//  function gt(chess){
//     console.log("hhodhfldsifjio");
//     return gy(uyi)
//  }

// gt();
  //  console.log("eshewo");

  function set1(){
    setTimeout(() => {
       console.log("here is first one")
    }, 1000);
  }

  function set2(){
    setTimeout(() => {
       console.log("here is second one")
    }, 4000);
  }
  function hy(){
    console.log("checking for error")
  }

function ui(){
  console.log("here is function that is call")
}
console.log("njdshfiu");
  const promises=new Promise((resolve,reject)=>{
     
   const hy="h";
  
  const hyi="hd";
  if(hy===hyi){
    resolve("yes it is resolve")
  }
  else{
    reject(new Error("ther is error"));
  }


  })

    promises.then(set2).then(set1).catch(hy).catch(ui);


   console.log("liyreorje");









