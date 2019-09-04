// document.querySelector('.shopping-item-delete').onclick=function(){

// console.log("delete the item")

// }


let totalprice=0;

let totalprice2=0;

let totalprice3=0;

const logDeleteMessage=()=>
{   console.log('delete the item')}

document.querySelector('.shopping-item-quantity-increment').onclick=function(event){

let span=event.target.parentNode.querySelector('span')
span.innerText++
 let unitPrice=event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price span')
 let quantity=event.target.parentNode.querySelector('.shopping-item-quantity span')
 totalprice=event.target.parentNode.parentNode.querySelector('.shopping-item-total-price span').innerText=Number(unitPrice.innerText)*Number(quantity.innerText);

}

document.querySelector('.shopping-item-quantity-decrement').onclick=function(event){
let span=event.target.parentNode.querySelector('span')
if (span.innerText <=0)
{
    return
}
span.innerText--
let unitPrice=event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price span')
 let quantity=event.target.parentNode.querySelector('.shopping-item-quantity span')
totalprice=event.target.parentNode.parentNode.querySelector('.shopping-item-total-price span').innerText=Number(unitPrice.innerText)*Number(quantity.innerText);

}

var incr1=document.querySelector('.shopping-item-quantity-increment2')
incr1.addEventListener('click', function()
{
    let span=event.target.parentNode.querySelector('span')
    span.innerText++
    let unitPrice=event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price span')
 let quantity=event.target.parentNode.querySelector('.shopping-item-quantity span')
 totalprice2=event.target.parentNode.parentNode.querySelector('.shopping-item-total-price span').innerText=Number(unitPrice.innerText)*Number(quantity.innerText);


})
 document.querySelector('.shopping-item-quantity-decrement2').onclick=function(event){
let span=event.target.parentNode.querySelector('span')
if(span.innerText <=0)
{
    return
}
span.innerText--
let unitPrice=event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price span')
 let quantity=event.target.parentNode.querySelector('.shopping-item-quantity span')
 totalprice2=event.target.parentNode.parentNode.querySelector('.shopping-item-total-price span').innerText=Number(unitPrice.innerText)*Number(quantity.innerText);

}

var incr3=document.querySelector('.shopping-item-quantity-increment3')
incr3.addEventListener('click', function()
{

let span=event.target.parentNode.querySelector('span')
span.innerText++
let unitPrice=event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price span')
 let quantity=event.target.parentNode.querySelector('.shopping-item-quantity span')
 totalprice3=event.target.parentNode.parentNode.querySelector('.shopping-item-total-price span').innerText=Number(unitPrice.innerText)*Number(quantity.innerText);

})

document.querySelector('.shopping-item-quantity-decrement3').onclick=function(event){

let span=event.target.parentNode.querySelector('span')
if (span.innerText <=0)
{

    return
}
span.innerText--

let unitPrice=event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price span')
 let quantity=event.target.parentNode.querySelector('.shopping-item-quantity span')
totalprice3=event.target.parentNode.parentNode.querySelector('.shopping-item-total-price span').innerText=Number(unitPrice.innerText)*Number(quantity.innerText);

}

function calculate( unitPrice, quantity)
{
return unitPrice*quantity;

}

function somme(){
    let span= document.querySelector('.total');
    var total=totalprice+totalprice2+totalprice3;
    document.querySelector('.total').textContent=total;
 
}