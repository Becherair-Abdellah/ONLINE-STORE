const parent = document.querySelector('.boxes');
// create class of product 
class New_Product {
    constructor(img, name, descrep, capacity, newP, lastP) {
        this.img = img;
        this.name = name;
        this.descrep = descrep;
        this.capacity = capacity;
        this.newP = newP;
        this.lastP = lastP;
    }
    create_New_Product() {
        // Create the div element
        var div = document.createElement('div');
        div.className = 'box';

        // Create the img element
        var img = document.createElement('img');
        img.src = '/img/searchPrimg/10028.png';
        img.alt = '';
        div.appendChild(img);

        // Create the h6 element
        var h6 = document.createElement('h6');
        h6.textContent = 'chips potato';
        div.appendChild(h6);

        // Create the div element with class 'descrep'
        var descrep = document.createElement('div');
        descrep.className = 'descrep';
        descrep.textContent = 'Fresh Bread and Pastry Flour 200 g';
        div.appendChild(descrep);

        // Create the div element with class 'rating'
        var rating = document.createElement('div');
        rating.className = 'rating';

        // Create the i elements with class 'fa-solid fa-star'
        for (var i = 0; i < 4; i++) {
            var star = document.createElement('i');
            star.className = 'fa-solid fa-star';
            rating.appendChild(star);
        }

        // Create the i element with class 'fa-solid fa-star-half-stroke'
        var starHalfStroke = document.createElement('i');
        starHalfStroke.className = 'fa-solid fa-star-half-stroke';
        rating.appendChild(starHalfStroke);

        div.appendChild(rating);

        // Create the div element with class 'capacity'
        var capacity = document.createElement('div');
        capacity.className = 'capacity';
        capacity.textContent = '200g';
        div.appendChild(capacity);

        // Create the div element with class 'pricing'
        var pricing = document.createElement('div');
        pricing.className = 'pricing';

        // Create the span element with class 'now'
        var now = document.createElement('span');
        now.className = 'now';
        now.textContent = '$08.02';
        pricing.appendChild(now);

        // Create the span element with class 'last'
        var last = document.createElement('span');
        last.className = 'last';
        last.textContent = '$15.15';
        pricing.appendChild(last);

        div.appendChild(pricing);

        // Create the div element with class 'more-less'
        var moreLess = document.createElement('div');
        moreLess.className = 'more-less';

        // Create the button element with class 'less'
        var lessButton = document.createElement('button');
        lessButton.className = 'less';

        // Create the i element with class 'fa-solid fa-minus'
        var minusIcon = document.createElement('i');
        minusIcon.className = 'fa-solid fa-minus';
        lessButton.appendChild(minusIcon);

        moreLess.appendChild(lessButton);

        // Create the input element with type 'text' and placeholder 'add'
        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'add';
        moreLess.appendChild(input);

        // Create the button element with class 'more'
        var moreButton = document.createElement('button');
        moreButton.className = 'more';

        // Create the i element with class 'fa-solid fa-plus'
        var plusIcon = document.createElement('i');
        plusIcon.className = 'fa-solid fa-plus';
        moreButton.appendChild(plusIcon);

        moreLess.appendChild(moreButton);

        div.appendChild(moreLess);

        // Append the div element to the document body or any other desired element
        parent.appendChild(div);

    }
}
for(let i=0;i<9;i++){
new New_Product().create_New_Product();
}