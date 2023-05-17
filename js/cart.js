// functions of cart page
const parent = document.querySelector('.parent');
class Product {
    constructor(img, soldby, qty, productname, newprice, lastprice, yousave, totalprice) {
        this.i = img;
        this.sb = soldby;
        this.q = qty;
        this.pn = productname;
        this.np = newprice;
        this.lp = lastprice;
        this.ys = yousave;
        this.tp = totalprice;
    }
    createTdpr() {
        // create tr element with class attribute
const tr = document.createElement("tr");
tr.setAttribute("class", "flx-jst");

// create td element for image
const td1 = document.createElement("td");
td1.setAttribute("class", "");
const img = document.createElement("img");
img.setAttribute("src", "/img/imgheader/10028.png");
img.setAttribute("alt", "");
td1.appendChild(img);
tr.appendChild(td1);

// create td element for product information
const td2 = document.createElement("td");
td2.setAttribute("class", "flx-jst-colmn-mini");
const name = document.createElement("span");
name.setAttribute("class", "name l-text");
name.innerHTML = "bell pepper";
const soldBy = document.createElement("span");
soldBy.setAttribute("class", "sold-by t-text");
soldBy.innerHTML = "sold by: ";
const seller = document.createElement("span");
seller.setAttribute("class", "solder m-text");
seller.innerHTML = "fresho";
soldBy.appendChild(seller);
const qty = document.createElement("span");
qty.setAttribute("class", "qty t-text");
qty.innerHTML = "quantity ";
const quantity = document.createElement("span");
quantity.setAttribute("class", "q m-text");
quantity.innerHTML = "-500g";
qty.appendChild(quantity);
td2.appendChild(name);
td2.appendChild(soldBy);
td2.appendChild(qty);
tr.appendChild(td2);

// create td element for price
const td3 = document.createElement("td");
td3.setAttribute("class", "flx-jst-colmn-mini low-gap");
const price = document.createElement("span");
price.setAttribute("class", "p-text");
price.innerHTML = "price";
const howMuch = document.createElement("span");
howMuch.setAttribute("class", "how-much flx-jst");
const now = document.createElement("span");
now.setAttribute("class", "now");
now.innerHTML = "$35.10";
const last = document.createElement("span");
last.setAttribute("class", "last");
last.innerHTML = "$45.68";
howMuch.appendChild(now);
howMuch.appendChild(last);
const youSave = document.createElement("span");
youSave.setAttribute("class", "you-save");
youSave.innerHTML = "you save : $20.68";
td3.appendChild(price);
td3.appendChild(howMuch);
td3.appendChild(youSave);
tr.appendChild(td3);

// create td element for quantity
const td4 = document.createElement("td");
td4.setAttribute("class", "flx-jst-colmn-mini big-pd-right");
const qtyText = document.createElement("span");
qtyText.innerHTML = "qty";
const counter = document.createElement("div");
counter.setAttribute("class", "counter-pr mybtn flx-jst");
const lessBtn = document.createElement("button");
lessBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>`;
lessBtn.setAttribute("id", "less");
counter.appendChild(lessBtn);
// counter.innerHTML += "1";
const input = document.createElement('input');
lessBtn.onclick = ()=>{
    if(input.value >0){
        input.value--;
    }
}
input.value = 0;
input.type = 'number';
counter.appendChild(input);
const moreBtn = document.createElement("button");
moreBtn.onclick = ()=>{
        input.value++;
}
moreBtn.setAttribute("class", "more");
moreBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>`;
counter.appendChild(moreBtn);
td4.appendChild(qtyText);
td4.appendChild(counter);
tr.appendChild(td4);

// create td element for total price
const td5 = document.createElement("td");
td5.setAttribute("class", "flx-jst-colmn-mini big-pd-right");
const totalText = document.createElement("span");
totalText.innerHTML = "total";
const totalPrice = document.createElement("span");
totalPrice.setAttribute("class", "total-price");
totalPrice.innerHTML = "$35.10";
td5.appendChild(totalText);
td5.appendChild(totalPrice);
tr.appendChild(td5);

const tdelement6 = document.createElement("td");
tdelement6.className = "flx-jst-colmn-mini big-pd-right";
const span1 = document.createElement("span");
span1.textContent = "action";
const span2 = document.createElement("span");
span2.onclick = ()=>{
    progress();
}
span2.className = "sv-wish";
span2.textContent = "Save for later";
const span3 = document.createElement("span");
span3.onclick = ()=>{
    tr.style = 'opacity:0;'
    setTimeout(()=>{
        tr.remove();
    },400)
}
span3.className = "rm-wish";
span3.textContent = "remove";
tdelement6.appendChild(span1);
tdelement6.appendChild(span2);
tdelement6.appendChild(span3);
tr.appendChild(tdelement6);
parent.appendChild(tr)
}
}
const pr = new Product();
console.log(pr.createTdpr());
console.log(pr.createTdpr());
console.log(pr.createTdpr());
console.log(pr.createTdpr());
// function prompt save products in wish list and progress it
function progress(){
    if(document.querySelector('.wait-min')){
        document.querySelector('.wait-min').remove();
    }
    // Create the <div> element with the class "wait-min flx-jst-colmn"
var divElement = document.createElement('div');
divElement.className = 'wait-min flx-jst-colmn';
// Create the first <span> element with the success message and icon
var firstSpanElement = document.createElement('span');
var nestedSpanElement = document.createElement('span');
nestedSpanElement.className = 'btnsuccess';
var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgElement.setAttribute('viewBox', '0 0 448 512');
var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathElement.setAttribute('d', 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z');
svgElement.appendChild(pathElement);
nestedSpanElement.appendChild(svgElement);
firstSpanElement.appendChild(nestedSpanElement);
firstSpanElement.appendChild(document.createTextNode(' Success!'));

// Create the second <span> element with the success message
var secondSpanElement = document.createElement('span');
secondSpanElement.appendChild(document.createTextNode('Item Successfully added in wishlist'));

// Create the third <span> element with the close button icon
var thirdSpanElement = document.createElement('span');
thirdSpanElement.onclick = ()=>{
    divElement.remove();
}
thirdSpanElement.className = 'btnclose';
var svgElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgElement2.setAttribute('class', 'ionicon');
svgElement2.setAttribute('viewBox', '0 0 512 512');
var pathElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathElement2.setAttribute('fill', 'none');
pathElement2.setAttribute('stroke', 'currentColor');
pathElement2.setAttribute('stroke-linecap', 'round');
pathElement2.setAttribute('stroke-linejoin', 'round');
pathElement2.setAttribute('stroke-width', '32');
pathElement2.setAttribute('d', 'M368 368L144 144M368 144L144 368');
svgElement2.appendChild(pathElement2);
thirdSpanElement.appendChild(svgElement2);

// Create the fourth <span> element for the progress
var fourthSpanElement = document.createElement('span');
fourthSpanElement.className = 'progress';

// Append all the elements to the <div> element
divElement.appendChild(firstSpanElement);
divElement.appendChild(secondSpanElement);
divElement.appendChild(thirdSpanElement);
divElement.appendChild(fourthSpanElement);

// Append the <div> element to the document body or any other desired location
document.body.appendChild(divElement);
setTimeout(()=>{
    fourthSpanElement.style.width = '25%';
    setTimeout(()=>{
        fourthSpanElement.style.width = '50%';
        setTimeout(()=>{
            fourthSpanElement.style.width = '75%';
            setTimeout(()=>{
                fourthSpanElement.style.width = 'calc(100% + 2px)';
                setTimeout(()=>{
                    divElement.remove();
                },1000)
            },1000);
        },1000);
    },2000);
},1000);
}