alert('Testing');

const price=document.querySelector('.price');

// console.log(price);

// price.textContent;

const quant=document.querySelector('.quant');
const check=document.querySelector('.check');
const summary=document.querySelector('.summary');


check.addEventListener('click',function(){
  let totalPrice;
  let msg;
  totalPrice=price.textContent*quant.value;
  console.log(`Oder details: You have added ${quant.value} pens to your shopping cart, \n the  total price is ${totalPrice}`)
  msg=`Oder details: You have added ${quant.value} pens to your shopping cart, \n the  total price is ${totalPrice}`;
  summary.textContent=msg;

}) 


console.log($('.summary'));

$('.summary').text('Something new');

$('.summary').css('color','lightgreen');

$('.check').on('click',function(){
   summary.text('applied jquery');

});

$('.check').click(function(){
    summary.text('applied jquery');
 
 });
 