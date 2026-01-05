        console.log("Hello, World!");
//1 task 
       /* var name='maalasa'
        console.log('hello '+name);
//can reasssign for both var and let
        let a=20
        let b=40
        b=50
        let c=a+b
        console.log('a+b = '+c);

        const grade='ex'
        //grade='a'
        console.log('grade = '+grade);
//cannot reassign const
*/
//task 2
        /*function add(x,y){
            return x+y;
        }
        let sum=add(10,20);
        console.log('sum = '+sum);
        //arrow function
        let add1=(a,b)=>{
            return a+b
        }
        let sum1=add1(30,50);
        console.log('sum1 = '+sum1);

        let sub1=(a,b)=>a-b
        console.log('sub1 = '+sub1(50,20));
*/
//task 3
       /* alert('Your 
       charge is very low ')
       let name1= prompt('please enter your name:')
       console.log('name of the user is '+ name1)
       alert("hello "+ name1)
       */
         
//task 4
/*function changetext(){
  document.getElementById("para").innerHTML="changed paragraph"
}
function addtext(){
  document.getElementById("message").innerHTML +=" welcome to js"
}
function removetext(){
  document.getElementById("message").innerHTML=""
}*/

//task 5
 function change(){
  document.getElementById("heading").classList.toggle("active")
}

//task 6
  function submitForm(){
 event.preventDefault(); // for showinf wotut refreshing
    console.log("form submitted");
  }

  document.getElementById("mouse").onmouseover=function(){
    this.style.color="red";
    this.style.backgroundColor="yellow";
  }

  document.getElementById("mouse").onmouseout=function(){
    this.style.color="purple";
    this.style.backgroundColor="yellowgreen";
  }

  function printPage() {
    window.print();
}



function askName() {
    let username = prompt("Enter your name:");

    if (username === null || username.trim() === "") {
        document.getElementById("greet").textContent = "No name entered!";
    } else {
        document.getElementById("greet").textContent = "Hello, " + username + "! Welcome 😊";
    }
}


function validateForm() {
    let name = document.getElementById("fname").value.trim();
    let age = document.getElementById("age").value;

    let result = document.getElementById("formResult");

    if (name === "") {
        result.textContent = "Name cannot be empty!";
        result.style.color = "red";
        return false;  
    }

    if (age === "" || age <= 0) {
        result.textContent = "Please enter a valid age!";
        result.style.color = "red";
        return false;
    }

    result.textContent = "Form submitted successfully!";
    result.style.color = "green";

    return false; 
}