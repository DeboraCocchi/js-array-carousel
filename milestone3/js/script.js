const paintingsArray = [
  'vangogh.jpeg',
  'bruegel.jpeg',
  'dali.jpeg',
  'magritte.jpeg',
  'cabanel.png',
];


let paintingsTags = '';
const paintings = document.querySelector('.paintings');

// costruisco le stringhe dei tag img da inserire nel div paintings
for(let i=0; i<paintingsArray.length;i++){
  paintingsTags += `
  <img class="item" src="img/${paintingsArray[i]}" alt="${paintingsArray[i]}">
  `;

}

// inserisco la maxi stringa concatenata di tag creati con literals
paintings.innerHTML=paintingsTags;

// caratteristiche del default sul primo dipinto; inizializzo il contatore

let counterPainting = 0;
const items = document.getElementsByClassName('item');
items[counterPainting].classList.add('active');
const up = document.querySelector('.arrow.up');
const down = document.querySelector('.arrow.down');
up.classList.add('hide');

down.addEventListener('click', function(){
  items[counterPainting].classList.remove('active');
  console.log(counterPainting);
  if(counterPainting=== paintingsArray.length -1){
    counterPainting=0;
  }else{  
  ++counterPainting;}
  items[counterPainting].classList.add('active');

});

up.addEventListener('click', function(){
  items[counterPainting].classList.remove('active');
  console.log(counterPainting);
  if(counterPainting===0){
    counterPainting=paintingsArray.length -1;
  }else{  
  --counterPainting;}
  items[counterPainting].classList.add('active');

});




/* MINIATURE MOMENTANEAMENTE IN PAUSA

mi occupo delle miniature:
1-creo il campo - per ora vuoto - dei tag, che andrò poi ad arricchire;
2-prendo il container in cui inserirò i tag
*/
// let miniatureTag = '';
// const miniatures = document.querySelector('.miniatures');

// // creo il div mini-paintings
// const divForMini = document.createElement('div');
// divForMini.className='mini-paintings';

// const miniaturesArray=[];


// for(let i=0; i<paintingsArray.length;i++){
//   miniatureTag = `
//   <div class="shadow">
//   <img class="mini-item" src="img/${paintingsArray[i]}" alt="${paintingsArray[i]}"></div>
//   `;

//   console.log(miniatureTag , i);
//   divForMini.innerHTML=miniatureTag;
//   console.log(divForMini);
  

//   // fin qui ok
  
  


// }



