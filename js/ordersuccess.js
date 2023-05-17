// functions of cart page
const parent = document.querySelector('.parent');
class Product {
    constructor(img, soldby, qty, productname, newprice, lastprice, yousave, totalprice) {
        this.i = img;
        this.sb = soldby;
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
howMuch.appendChild(now);
td3.appendChild(price);
td3.appendChild(howMuch);
tr.appendChild(td3);
// const Myqty = document.createElement('span');
// Myqty.innerText = 
// create td element for price
const td4 = document.createElement("td");
td4.setAttribute("class", "flx-jst-colmn-mini low-gap");
const mynow = document.createElement("span");
mynow.innerHTML = "01";
const myqt = document.createElement("span");
myqt.setAttribute("class", "p-text");
myqt.innerHTML = "Qty";
td4.appendChild(myqt);
td4.appendChild(mynow);
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
parent.appendChild(tr)
}
}
const pr = new Product();
console.log(pr.createTdpr());
console.log(pr.createTdpr());
console.log(pr.createTdpr());
console.log(pr.createTdpr());