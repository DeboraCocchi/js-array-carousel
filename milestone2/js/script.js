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





/* MINIATURE MOMENTANEAMENTE IN PAUSA

mi occupo delle miniature:
1-creo il campo - per ora vuoto - dei tag, che andrò poi ad arricchire;
2-prendo il container in cui inserirò i tag*/

let miniatureTag = '';
const miniatures = document.querySelector('.miniatures');
const miniPaintings =document.createElement('div');
miniPaintings.className='mini-paintings';
const paintInfo = document.createElement('p');
const ShadowContainer = document.createElement('div');
ShadowContainer.classList.add('shadow');
const miniCard=[];

for (let i=0;i<paintingsArray.length;i++){

  miniatureTag = `
    <img class="mini-item" src="img/${paintingsArray[i]}" alt="${paintingsArray[i]}">
  `;

  ShadowContainer.innerHTML=miniatureTag;
  console.log(ShadowContainer);



}

//creo il div mini-paintings
// const divForMini = document.createElement('div');
// const miniaturesArray=[];


// for(let i=0; i<paintingsArray.length;i++){
//   miniatureTag = `<img class="mini-item" src="img/${paintingsArray[i]}" alt="${paintingsArray[i]}">`;

 
//   divForMini.innerHTML=miniatureTag;
//   console.log(miniatureTag , i);
  
//   console.log(divForMini , i);
//   miniaturesArray.push(divForMini);
 

// } 

// console.table(miniaturesArray);
// console.log(miniaturesArray[0]);
// console.log(miniaturesArray[1]);
// console.log(miniaturesArray[2]);
// console.log(miniaturesArray[3]);
// console.log(miniaturesArray[4]);



// // ciclo

// down.addEventListener('click', function(){
//   items[counterPainting].classList.remove('active');
//   if(counterPainting=== paintingsArray.length -1){
//     counterPainting=0;
//   }else{  
//   ++counterPainting;}
//   items[counterPainting].classList.add('active');

// });

// up.addEventListener('click', function(){
//   items[counterPainting].classList.remove('active');
//   if(counterPainting===0){
//     counterPainting=paintingsArray.length -1;
//   }else{  
//   --counterPainting;}
//   items[counterPainting].classList.add('active');

// });

// //   // fin qui ok
  
  


// // }



