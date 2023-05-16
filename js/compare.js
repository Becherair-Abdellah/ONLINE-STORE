const tableTr = document.querySelectorAll('table tr');
console.log(tableTr)
// create product class
class Compare_product {
    constructor(nameProduct, imgProduct, hairType, If, price, avail, weight) {
        this.nP = nameProduct;
        this.iP = imgProduct;
        this.hT = hairType;
        this.If = If;
        this.pr = price;
        this.av = avail;
        // this.ra = rating;
        this.we = weight;
    }
    create_compare() {
        // td 1
        const td1 = document.createElement('td');
        td1.textContent = this.nP;
        tableTr[0].appendChild(td1);
        // td 2
        const td2 = document.createElement('td');
        const atd2 = document.createElement('a');
        const imgtd2 = document.createElement('img');
        atd2.href = '';
        imgtd2.src = this.iP;
        imgtd2.alt = '';
        atd2.appendChild(imgtd2);
        td2.appendChild(atd2);
        tableTr[1].appendChild(td2);
        // td 3
        const td3 = document.createElement('td');
        td3.textContent = this.hT;
        tableTr[2].appendChild(td3);
        // td 4
        const td4 = document.createElement('td');
        td4.textContent = this.If;
        tableTr[3].appendChild(td4);
        // td 5
        const td5 = document.createElement('td');
        td5.textContent = this.pr;
        tableTr[4].appendChild(td5);
        // td 6
        const td6 = document.createElement('td');
        td6.textContent = this.av;
        tableTr[5].appendChild(td6);
        // td 7
        const td7 = document.createElement('td');
        const divElement = document.createElement('div');
        const starsElement = document.createElement('div');
        const spanElement = document.createElement('span');
        divElement.classList.add('r-t', 'flx-jst');
        starsElement.classList.add('stars');
        const starSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>`;
        starsElement.innerHTML = starSVG.repeat(5);
        spanElement.textContent = '(20 rating)';
        divElement.appendChild(starsElement);
        divElement.appendChild(spanElement);
        td7.appendChild(divElement);
        tableTr[6].appendChild(td7);
        // td 8
        const td8 = document.createElement('td');
        td8.textContent = this.we;
        tableTr[7].appendChild(td8);
        // create "add" button
        const td9 = document.createElement('td');
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('btn');
        buttonElement.textContent = 'add to cart';
        td9.appendChild(buttonElement);
        tableTr[8].appendChild(td9);
        buttonElement.onclick = () => {
            console.log('hello td 9');
        }
        const td10 = document.createElement('td');
        const aElement = document.createElement('a');
        const iElement = document.createElement('i');
        aElement.href = '';
        aElement.textContent = 'remove';
        iElement.classList.add('fa-solid', 'fa-trash-can', 'me-2');
        aElement.appendChild(iElement);
        td10.appendChild(aElement);
        tableTr[9].appendChild(td10)
        aElement.onclick = (e)=>{
            console.log('remove item from compare');
            e.preventDefault();
            // remove all elements
            td1.remove();
            td2.remove();
            td3.remove();
            td4.remove();
            td5.remove();
            td6.remove();
            td7.remove();
            td8.remove();
            td9.remove();
            td10.remove();
        }
    }
}
const td = new Compare_product('abdellah',"/img/imgcompare/10001.png","normal","gel","$120.34","in stock","10.06kg");
console.log(td.create_compare());
console.log(td.create_compare());
console.log(td.create_compare());
console.log(td.create_compare());