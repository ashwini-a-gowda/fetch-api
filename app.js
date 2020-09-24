const text = document.querySelector(".text");
const json = document.querySelector(".json");
const api = document.querySelector(".data");
const div = document.querySelector(".box");
 const div1 = document.getElementById("box1")

text.addEventListener("click", fetchText);

function fetchText(e){
   fetch('app.txt').then(function(response){
       return response.text();
    //    console.log(response);
   }).then(function(data){
       console.log(data);
    const text1=   document.createElement('li');
    text1.className="text";
    div1.appendChild(text1);
    text1.innerHTML=data;

   })
}

json.addEventListener("click", fetchJson);

function fetchJson(){
fetch('app.json')
  .then((response) => response.json())
  .then((users) =>{

    let json1 = '<h2></h2>';
    users.forEach((user) => {
     
      console.log(user);
       json1 =   `<ul class="a">
                      <li class="b">${user.id}</li>
                      <li class="b">${user.name}</li>
                      <li class="b">${user.username}</li> 
                      <li class="b">${user.email}</li>
                      </ul>`;
        
    });
    document.getElementById("box1").innerHTML = json1;
  })
 

}

api.addEventListener("click", fetchApi);

function fetchApi(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>{
  
      let api1 = '<h2></h2>';
      users.forEach((user) => {
       
        console.log(user);
         api1 =   `<ul class="a">
                        <li class="b">${user.id}</li>
                        <li class="b">${user.name}</li>
                        <li class="b">${user.username}</li> 
                        <li class="b">${user.email}</li>
                        </ul>`;
          
      });
      document.getElementById("box1").innerHTML = api1;
    })
   
  
  }