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
span2.className = "sv-wish";
span2.textContent = "Save for later";
const span3 = document.createElement("span");
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