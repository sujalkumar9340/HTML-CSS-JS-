console.log("here is javascript");
let target=document.getElementById("div");
  function style(){
    
    target.style.color="red";
  }    

    target.addEventListener("click",style);
    
  console.log("here is new line");


    
let user={
  count1:110,
  name:"tinku",
  increasecount:function(name,state) {
    console.log(this.name+ " "+name+"  "+state );
    return ++this.count;
  }
  
}
console.log("here is string");

let user1={
  count:11,
  name:"sujal",
  inte: function(){
     console.log("ye second wala function hai jo ki ")
  }
};



// const obj=new obj({    // ye glath hai new k sath koi define kiya huwa 
// function lena parega object predefine function hai java k tarh object isme create nahi hoga
//   name:"sujal"
// })


let a={
  name2:"harry",
  language:"javascript",
  run:()=>{
    // alert("self run")
  }
}
// console.log(a)

let p={
  run:()=>{
    // alert("run");
  }
}

 a.__proto__=p;
 a.run();

 p.__proto__={
  name:"jackie"
 }

console.log(p.name)

const obj={
  name:"ajay suneja",
  getname: function(){
    return this.name
  }
}

console.log(obj)

const obj2={
  roll:1,
  __proto__:obj,
  name:"sujal"

}
// obj2.prototype=obj;
// Object.setPrototypeOf(obj)
console.log(obj2.getname())


const obj3={
  class:"MCA",
  __proto__:obj2,
  name:"tinku"

}
console.log(obj3.getname())
 
 
 let arr=["slj;","tinlu","style",{name:"gjff",ghjg:7767}, "kkjflj",9874];
 arr.forEach((value)=>{
  console.log(value)
 })

 console.log(arr);


Array .prototype.show=function(){
  return this;
}
const cities=["delhi"];
console.log(cities.show());
console.log(cities);

 Array .prototype.convertIntoobject=function(){
  let newobj={};
  this.forEach(Element=>{
    newobj[Element]=Element;

  })
  return newobj;
 }

console.log(cities.convertIntoobject());

     const trail={
      name:"sujal kumar",
      tri:function(name){
            return this. name=name;
      }
     }


  console.log(trail.tri("tinku"))
  console.log( trail.name);


       function Myproto(names){
          this.name=names;
        console.log("here is mehtod which is want to retun ")
        // return "sujalstyile";
       }
       const ti=new Myproto("student");
       console.log(ti.names);
       console.log(ti);
      
      // console.log(myproto("st"));
        function obj5(){
          console.log("this is second proto")
;        }

    obj5();


   Myproto.prototype=obj5;

  //  const ti=new myproto("student");
  //      console.log(ti.myproto());
  function Person(name, age ) {
    console.log("here is my name")
    this.name = name;
    this.age = age;
    // return "lklj";
  }
  
  // Creating an object without the 'new' keyword
  // const person1 = Person("tfthrt",65);
  // console.log(person1.name); // Output: undefined
  
  // Creating an object with the 'new' keyword
  const person2 = new Person("Jane", 25);
  console.log(person2.name); // Output: Person { name: "Jane", age: 25 }
  
  // ty.innhtml=new Date();
  div.innerHTML= "<p> here is paragraph </p>";







  




  








