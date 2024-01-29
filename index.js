

let price = prompt('Enter The Amount : ');
let fifty = 15;
let eight = 8;
let discount1 = 3500;
let discount2 = 8000;


if (price >= 8000 ){
    //15% discount
    let discount = price * fifty/100;
    let payAmount = price - discount;
    alert('You get ' + fifty+'%' +' discount and your bill is : ' + payAmount);
}
else if (price >= 3500){
    //8% discount
    discount = price * eight / 100
    payAmount = price - discount
   alert('You get ' + eight+'%' +' discount and your bill is : ' + payAmount)
   if(price <8000){
    discount2 = discount2- price
    alert('if You Buy ' + discount2 + 'tk more then you will get 15% discount')
   }
}

else if (price < 3500 && price > 2000){
    discount1 = discount1 - price
    alert('Your bill is : ' + price);
    alert('if You Buy ' + discount1 + 'tk more then you will get 8% discount')
}
else{
    alert('Your bill is : ' + price);
}




