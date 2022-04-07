console.log(window);
// console.log(window.origin);
// console.log(window.self);

//Listen for keyboard events 
// window.addEventListener('keydown', function(){
  
//   console.log('keydown');
  
// });


//Listining to our key-presses
 window.addEventListener('keydown', (event) => {
  
  console.log(event);
   //log 'keycode' for 't' key 
     console.log(event.keyCode);
   //log 'key' property for 't' key
     console.log(event.key);
   
   
   //get Audio element
   const audio = document.querySelector(`audio[data-thing="${event.keyCode}"]`);
   console.log( audio );
   //Play Sound
   audio.play();
 });


//In order to do a button change color when pressed thing,
// I need create at least a new function? 
// ex.) function changeColor(){
//        document.body.kbd.style.color = "yellow";
// OR  SOMETHING OR OTHER
// function changeTheColorOfButtonDemo() {
//       if (document.querySelector(`audio[data-thing="${event.keyCode}"]`) {
//          document.querySelector(`audio[data-thing="${event.keyCode}"]`).style.background = "green";
//       } else {
//          document.querySelector(`audio[data-thing="${event.keyCode}"]`).style.background = "skyblue";
//       }
//    }

const audio = new Audio('https://assets.codepen.io/7544116/435497__etcd-09__car-horn-honk.wav');
button.addEventListner('click',() =>{

  audio.play();
});