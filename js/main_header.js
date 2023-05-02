// js header setion 
let news_short = document.querySelector('#short');
let news_long = document.querySelector('#long');
let newDiv = document.querySelector('.lan-cur');
// news breaking slide is not completed
// let change = true;
// setInterval(() => {
//     if (!change) {
//         news_short.innerHTML = `Something you love is now on sale!
//         <a href="">buy now!</a>`;
//         news_short.classList.add('scale')
//         change = true;
//     } else {
//         news_short.innerHTML = `<strong>Welcome to Fastkart!</strong>
//         Wrap new offers/gift every signle day on Weekends.
//         <strong>New Coupon Code: Fast024
//         </strong>`
//         change = false;
//     }
// }, 3000);
// content of languages
let language = document.querySelector('.language');
language.onclick = () => {
    langContent();
}
document.querySelector('.coin').onclick = () => {
    coin();
}
function langContent() {
    let ul = document.createElement('ul');
    ul.classList = 'langJS'
    for (let i = 0; i <= 2; i++) {
        if (i == 0) {
            let ln1 = document.createElement('li');
            let img1 = document.createElement('img')
            img1.src = " /img/10002.png";
            let h4one = document.createElement('h4');
            h4one.innerText = 'english';
            ln1.appendChild(img1);
            ln1.appendChild(h4one);
            ul.appendChild(ln1);
            ln1.onclick = () => {
                fullLang(img1.src, h4one.innerText);
            };
        }
        if (i == 1) {
            let ln1 = document.createElement('li');
            let img1 = document.createElement('img')
            img1.src = " /img/10005.png";
            let h4one = document.createElement('h4');
            h4one.innerText = 'turki';
            ln1.appendChild(img1);
            ln1.appendChild(h4one);
            ul.appendChild(ln1);
            ln1.onclick = () => {
                fullLang(img1.src, h4one.innerText);
            };
        }
        if (i == 2) {
            let ln1 = document.createElement('li');
            let img1 = document.createElement('img')
            img1.src = " /img/10004.png";
            let h4one = document.createElement('h4');
            h4one.innerText = 'Germany';
            ln1.appendChild(img1);
            ln1.appendChild(h4one);
            ul.appendChild(ln1);
            ln1.onclick = () => {
                fullLang(img1.src, h4one.innerText);
            };
        }
    }
    newDiv.appendChild(ul);
    // remov this contnet when click outside
    setTimeout(() => {
        document.onclick = () => {
            ul.remove();
        }
    }, 0)

}
// full langauge od web app
function fullLang(src, name) {
    // language
    const lang = document.querySelector('.language');
    lang.children[0].src = src;
    lang.children[1].innerText = name;
}
// content of coin
function coin() {
    let ul = document.createElement('ul');
    ul.classList = 'my-coin';
    for (let i = 0; i <= 2; i++) {
        if (i == 0) {
            let li = document.createElement("li");
            li.innerText = 'AUD';
            ul.appendChild(li);
            li.onclick = () => {
                document.querySelector('#coin').innerText = li.innerText
            }
        }
        if (i == 1) {
            let li = document.createElement("li");
            li.innerText = 'EUR';
            ul.appendChild(li);
            li.onclick = () => {
                document.querySelector('#coin').innerText = li.innerText
            }
        }
        if (i == 2) {
            let li = document.createElement("li");
            li.innerText = 'CNY';
            ul.appendChild(li);
            li.onclick = () => {
                document.querySelector('#coin').innerText = li.innerText
            }
        }
    }
    newDiv.appendChild(ul);
    // remov this contnet when click outside
    setTimeout(() => {
        document.onclick = () => {
            ul.remove();
        }
    }, 0)
}
// show menu bar in small screen when user click at bars
let bars = document.getElementById('bars');
let close = document.querySelector('#close');
const button = [bars, close];
const menu = document.querySelector('.pages');
const overlay = document.querySelector('.overlay');
// when click at overlay hide menu 
const btnP = document.querySelector('.Today');
overlay.onclick = () => {
    menu.classList.remove('visible');
    document.querySelector('html').classList.remove('visible');
    document.querySelector(".my-location") ? document.querySelector(".my-location").classList.remove('animate') : "";
    setTimeout(() => {
        document.querySelector(".my-location") ? document.querySelector(".my-location").remove() : "";
        overlay.classList.remove('visible');
    }, 140);
    // deal today
    document.querySelector('.my-product') ? document.querySelector('.my-product').classList.remove('animate') : "";
    setTimeout(() => {
        document.querySelector('.my-product') ? document.querySelector('.my-product').remove() : "";
        overlay.classList.remove('visible');
    }, 140);

}
button.forEach((btn) => {
    btn.onclick = () => {
        menu.classList.toggle('visible');
        overlay.classList.toggle('visible');
        document.querySelector('html').classList.toggle('visible');

    }
});
// conetnt of city delivery location
const getArea = document.querySelector('.location');
// when use click at div location run follow function
getArea.onclick = () => {
    overlay.classList.add('visible');
    cityDelivery();
    setTimeout(() => {
        document.querySelector(".my-location").classList.add('animate');
    }, 0);
}
function cityDelivery() {
    let areas = ["Alabama", "Arizona", "California", "Colorado", "Florida", "Georgia"
        , "Kansas", "Minnesota", "New York", "Washington"]
    let div = document.createElement('div');
    div.classList = 'my-location';
    let text = document.createElement('div');
    text.classList = 'text-location';
    let h3 = document.createElement('h3')
    h3.innerText = 'Choose your Delivery Location';
    text.appendChild(h3);
    let h5 = document.createElement('h5');
    h5.innerText = 'Enter your address and we will specify the offer for your area.';
    text.appendChild(h5);
    div.appendChild(text);
    // search div
    let search = document.createElement('div');
    search.classList = 'search-location';
    let input = document.createElement('input');
    input.id = 'my-area';
    input.placeholder = 'Search Your Area';
    let iconSearch = document.createElement('span');
    iconSearch.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                            <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none"
                                stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                stroke-width="32" d="M338.29 338.29L448 448" />
                        </svg>`;
    search.appendChild(input);
    search.appendChild(iconSearch);
    div.appendChild(search);
    // select location
    let area = document.createElement('div');
    area.classList = 'area';
    let label = document.createElement('label');
    label.innerText = 'Select a Location';
    area.appendChild(label);
    let ul = document.createElement('ul');
    ul.classList = 'areas';
    for (let i = 0; i < areas.length; i++) {
        let price = 110;
        let a = document.createElement('a');
        let spanCity = document.createElement("span");
        spanCity.innerText = areas[i];
        let priceDlvry = document.createElement('span');
        priceDlvry.innerText = `Min: $ ${price}`;
        price++;
        a.appendChild(spanCity);
        a.appendChild(priceDlvry);
        ul.appendChild(a);
    }
    // btn close 
    let btnclose = document.createElement('button');
    btnclose.id = 'close';
    btnclose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>`;
    btnclose.onclick = () => {
        menu.classList.remove('visible');
        document.querySelector('html').classList.remove('visible');
        document.querySelector(".my-location") ? document.querySelector(".my-location").classList.remove('animate') : "";
        setTimeout(() => {
            document.querySelector(".my-location") ? document.querySelector(".my-location").remove() : "";
            overlay.classList.remove('visible');
        }, 140);
    }
    area.appendChild(ul);
    div.appendChild(area);
    div.appendChild(btnclose);
    document.querySelector('body').appendChild(div);
}
// create recent products in cart user
//parent products
const parent = document.querySelector('.products');
class Product {
    constructor(imgP, nameP, QtP, priceP, parentP) {
        this.imgP = imgP;
        this.nameP = nameP;
        this.QtP = QtP;
        this.priceP = priceP;
        this.parentP = parentP;
    }
    createProduct() {
        const boxP = document.createElement('div');
        boxP.classList = 'box-product';
        const span = document.createElement('span');
        span.id = 'rm-pr';
        span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>`;
        boxP.appendChild(span);
        const a = document.createElement('a');
        a.href = '';
        const divimg = document.createElement('div');
        divimg.classList = 'img';
        const img = document.createElement('img');
        img.src = this.imgP;
        divimg.appendChild(img);
        a.appendChild(divimg);
        const info = document.createElement('div');
        info.classList = 'info';
        const descrep = document.createElement('span');
        descrep.classList = 'descrp';
        descrep.innerText = this.nameP;
        info.appendChild(descrep);
        const pricing = document.createElement('pricing');
        pricing.classList = 'pricing';
        info.appendChild(pricing);
        const qt = document.createElement('span');
        qt.id = 'qt';
        qt.innerText = this.QtP;
        pricing.appendChild(qt);
        const text = document.createTextNode('x $');
        pricing.appendChild(text);
        const price = document.createElement('span');
        price.classList = 'price';
        price.innerText = this.priceP;
        pricing.appendChild(price);
        a.appendChild(info);
        boxP.appendChild(a);
        this.parentP.appendChild(boxP);
        // method of this function
        span.onclick = () => {
            boxP.style.opacity = 0;
            setTimeout(() => {
                boxP.remove();
            }, 300)
        }
    }
};
// when pull the data from server in build the product
for (let i = 0; i < 2; i++) {
    let myProduct = new Product('/img/10028.png', 'chips playing', 340, 23, parent);
    myProduct.createProduct();
}
btnP.onclick = (e) => {
    e.preventDefault();
    overlay.classList.add('visible');
    setTimeout(() => {
        document.querySelector(".my-product").classList.add('animate');
    }, 0);
    recomenedProduct();
}
class RecentProduct {
    constructor(imgP, descrp, price, deduct, weight,newparent) {
        this.imgP = imgP;
        this.descrp = descrp;
        this.price = price;
        this.deduct = deduct;
        this.weight = weight;
        this.newparent = newparent;
    }
    // cretae Product
    createProduct() {
        const product = document.createElement('div');
        product.classList = 'rcemnd-product';
        let img = document.createElement('div');
        img.classList = 'img';
        let imgp = document.createElement('img');
        imgp.classList = 'imgProduct';
        imgp.src = this.imgP;
        img.appendChild(imgp);
        product.appendChild(img);
        const infop = document.createElement('div');
        infop.classList = 'info';
        const descrp = document.createElement('span');
        descrp.innerText = this.descrp;
        descrp.classList = 'descrp bold';
        infop.appendChild(descrp);
        const infoProd = document.createElement('div');
        infoProd.classList = 'infoProd';
        const text = document.createTextNode('$');
        infoProd.appendChild(text);
        const price = document.createElement('span');
        price.id = 'price';
        price.innerText = this.price;
        const mydeduct = document.createElement('span');
        mydeduct.classList = 'deduct';
        mydeduct.innerText = this.deduct;
        const weightPr = document.createElement('span');
        weightPr.classList = 'weight';
        weightPr.innerText = `${this.weight}G`;
        infoProd.appendChild(price);
        infoProd.appendChild(mydeduct);
        infoProd.appendChild(weightPr);
        infop.appendChild(infoProd);
        product.appendChild(infop);
        this.newparent.appendChild(product);
        console.log(this.newparent);
    }
}
function recomenedProduct() {
    let div = document.createElement('div');
    // my-location
    div.classList = 'my-product';
    let text = document.createElement('div');
    // text-location
    text.classList = 'titles';
    let h3 = document.createElement('h3')
    h3.innerText = 'Deal Today';
    text.appendChild(h3);
    let h5 = document.createElement('h5');
    h5.innerText = 'Recommended deals for you.';
    text.appendChild(h5);
    div.appendChild(text);
    document.querySelector('body').appendChild(div);
    const contentPr = document.createElement('div');
    contentPr.classList = 'content-prd';
    div.appendChild(contentPr);
    for(let i=0;i<4;i++){
        let newProduct = new RecentProduct('/img/10028.png','this is my product',i+23.43,30.50,300,contentPr);
        newProduct.createProduct();
    }
    // btn close 
    let btnclose = document.createElement('button');
    btnclose.id = 'close';
    btnclose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>`;
    btnclose.onclick = () => {
        menu.classList.remove('visible');
        document.querySelector('html').classList.remove('visible');
        document.querySelector(".my-product") ? document.querySelector(".my-product").classList.remove('animate') : "";
        setTimeout(() => {
            document.querySelector(".my-product") ? document.querySelector(".my-product").remove() : "";
            overlay.classList.remove('visible');
        }, 140);
    }
    div.appendChild(btnclose);
}