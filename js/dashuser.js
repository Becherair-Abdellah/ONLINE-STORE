const lis = document.querySelectorAll('.tools li');
lis.forEach((ele) => {
    ele.onclick = () => {
        lis.forEach((ele) => {
            ele.classList.remove('active');
        })
        ele.classList.add('active');
    }
});
// body here 
const my_body = document.querySelector('body');
// show more button in mobile screen
// pesudo element
const pesudo = document.querySelector('.pesudo');
const edits = document.querySelectorAll('#edit');
const contnet_show = document.querySelector('.myforms');
edits.forEach((ele) => {
    ele.onclick = () => {
        contnet_show.classList.add('bl-imp');
        my_body.classList.add('overflow-hidden');
        pesudo.classList.add('myoverlay');
        setTimeout(() => {
            contnet_show.classList.add('animate');
        }, 100);
        pesudo.onclick = () => {
            contnet_show.classList.remove('animate');
            pesudo.classList.remove('myoverlay');
            setTimeout(() => {
                contnet_show.classList.remove('bl-imp');
                my_body.classList.remove('overflow-hidden');

            }, 300);
        }
    };
});
// close buttons at forms
const all_close = document.querySelectorAll('#close');
console.log(all_close);
all_close.forEach((ele) => {
    ele.onclick = () => {
        // for mobile screen and tablet and laptop
        if (window.innerWidth < 1280) {
            contnet_show.classList.remove('bl-imp');
        }
        else {
            setTimeout(() => {
                contnet_show.classList.remove('bl-imp');
            }, 500);
        }
        my_body.classList.remove('overflow-hidden');
        pesudo.classList.remove('myoverlay');
        contnet_show.classList.remove('animate');

    }
});
// button show more
const show_more = document.querySelector('#show-more');
const profile_contnet = document.querySelector('.pro-file');
show_more.onclick = () => {
    profile_contnet.classList.add('l-0');
    my_body.classList.add('overflow-hidden');
    pesudo.classList.add('myoverlay');
    // create button close tab
    let creat_btn = document.createElement('button');
    creat_btn.innerText = 'x';
    creat_btn.classList = 'btnclose';
    document.querySelector('.info').appendChild(creat_btn);
    // close tab contnet
    let eles = [creat_btn, pesudo];
    eles.forEach((ele) => {
        ele.onclick = () => {
            my_body.classList.remove('overflow-hidden');
            pesudo.classList.remove('myoverlay');
            profile_contnet.classList.remove('l-0');
        }
    });
    //setting some changes about screen height 
    if (window.innerHeight <= 628) {

        document.querySelector('.tools').classList.add('h-[350px]', 'overflow-hidden', 'overflow-y-visible');
        console.log('run time');
    }
};
// function create tab  content 
const content = document.querySelector('.content');
console.log(content);
dashboard();
function dashboard() {
    const tab = document.createElement('div');
    tab.classList = 'tab-content';
    content.appendChild(tab);
    // create h1
    const h1main = document.createElement('h1');
    h1main.classList = 'w-fit text-3xl font-bold text-gray text-gray-800 after relative mb-7';
    h1main.innerText = 'My Dashboard';
    const svg = document.createElement('div');
    svg.innerHTML = `<svg class="absolute bg-gray-50 z-10 px-3 w-12 h-6 left-[15%] fill-none " width="31" height="27"
    viewBox="0 0 31 27" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M19.8953 12.1549C20.7505 12.1561 21.4467 11.4607 21.4467 10.6069C21.4467 9.75351 20.7511 9.05787 19.8977 9.05787C14.1928 9.05787 9.88347 10.7032 6.69324 12.8055C6.71872 12.6287 6.74941 12.4513 6.78582 12.2733C7.51891 8.6918 10.387 5.78641 13.9516 4.9573C15.5022 4.59816 16.9939 4.62898 18.3692 4.95619C21.8506 5.78428 25.7595 4.50208 27.7216 1.10608L27.7219 1.10549C27.765 1.03073 27.8347 0.998023 27.9055 1.00009C27.9728 1.00206 28.0231 1.03303 28.0523 1.0978L28.0526 1.09865C28.9772 3.15168 29.5015 5.68618 29.5015 8.13234C29.5015 15.3466 25.5577 21.3113 19.7439 23.2336L19.7268 23.2392L19.7102 23.2458C18.6145 23.6798 17.4259 23.926 16.1806 23.926C12.6426 23.926 9.35009 21.9344 7.68468 18.7696L7.3091 18.0558L6.71626 18.6026C3.48841 21.5801 2.57971 24.9791 2.52798 25.1935C2.44354 25.5469 2.1264 25.7872 1.77543 25.7872C1.71776 25.7872 1.65629 25.7804 1.59281 25.7657C1.17813 25.6649 0.922285 25.2464 1.02128 24.8318C1.27532 23.7875 2.53537 20.6044 5.46995 17.6901C8.38552 14.7947 12.9618 12.155 19.8953 12.1549ZM19.8953 12.1549C19.8951 12.1549 19.8949 12.1549 19.8947 12.1549L19.8958 11.5353V12.1549C19.8957 12.1549 19.8954 12.1549 19.8953 12.1549Z"
        stroke="#0da487" />
</svg>`;
h1main.appendChild(svg);
    tab.appendChild(h1main);
    // name of dashboard user
    const nameUser = document.createElement('div');
    nameUser.classList = 'text-gray-600 mb-5';
    nameUser.innerText = 'hello, ';
    const strongName = document.createElement('strong');
    strongName.innerText = 'Vicki E. Pope';
    strongName.classList = 'text-gray-900';
    nameUser.appendChild(strongName);
    tab.appendChild(nameUser);
    // descreption
    const descrp = document.createElement('p');
    descrp.innerText = `From your My Account Dashboard you have the ability to view
    a snapshot of your recent account
    activity and update your account information.Select a link below to view or edit information.`;
    descrp.classList = 'text-gray-500 text-[15.5px] mb-8';
    tab.appendChild(descrp);
    // create div of boxes
    const all_boxes = document.createElement('div');
    all_boxes.classList = 'boxes grid grid-cols-1 gap-6 sm:grid-cols-2  md:flex sm:items-center sm:justify-between sm:gap-6 sm:mb-8';
    // box1
    const box1 = document.createElement('div');
    box1.classList = 'relative overflow-hidden box flex items-center p-5 rounded-lg bg-white w-full s-h';
    const img = document.createElement('img');
    img.src = "/img/dashuser/10003.svg";
    img.alt = '';
    img.classList = 'w-16';
    box1.appendChild(img);
    const descrpBox = document.createElement('div');
    descrpBox.classList = 'descrp flex flex-col ml-5';
    const span1 = document.createElement('span');
    span1.innerText = 'Total order'
    span1.classList = 'text-gray-500 text-lg';
    const span2 = document.createElement('span');
    span2.innerText = '558'
    span2.classList = 'text-xl font-semibold';
    descrpBox.appendChild(span1);
    descrpBox.appendChild(span2);
    box1.appendChild(descrpBox);
    all_boxes.appendChild(box1);
    tab.appendChild(all_boxes);
    // last part

    // Create the main container div
const lastPartDiv = document.createElement('div');
lastPartDiv.classList.add('last-part', 'mt-6');

// Create the h1 element for "Account Information"
const h1Element = document.createElement('h1');
h1Element.classList.add('text-xl', 'font-medium', 'mb-6');
h1Element.textContent = 'Account Information';

// Create the first info-1 div
const info1Div = document.createElement('div');
info1Div.classList.add('info-1', 'grid', 'grid-cols-1', 'md:flex', 'md:items-start', 'md:justify-between', 'gap-5');

// Create the first d1 div
const d1Div = document.createElement('div');
d1Div.classList.add('d1', 'w-full');

// Create the div1 div inside d1Div
const div1Div = document.createElement('div');
div1Div.classList.add('i1', 'flex', 'items-center', 'justify-between', 'py-1', 'border-b-[1px]', 'border-gray-200');

// Create the h1 element for "Contact Information"
const h1Contact = document.createElement('h1');
h1Contact.classList.add('text-lg', 'text-gray-800');
h1Contact.textContent = 'Contact Information';

// Create the span element for "edit"
const spanEdit = document.createElement('span');
spanEdit.classList.add('text-[#0da487]', 'capitalize', 'cursor-pointer');
spanEdit.id = 'edit';
spanEdit.textContent = 'edit';

// Append h1Contact and spanEdit to div1Div
div1Div.appendChild(h1Contact);
div1Div.appendChild(spanEdit);

// Create the second div inside d1Div
const div2Div = document.createElement('div');
div2Div.classList.add('py-4');

// Create the h3 element for the name
const h3Name = document.createElement('h3');
h3Name.classList.add('text-gray-500', 'text-[15px]');
h3Name.textContent = 'MARK JECNO';

// Create the h4 element for the email
const h4Email = document.createElement('h4');
h4Email.classList.add('text-gray-500', 'text-sm', 'my-3');
h4Email.textContent = 'vicki.pope@gmail.com';

// Create the span element for "Change Password"
const spanPassword = document.createElement('span');
spanPassword.classList.add('text-[#0da487]', 'text-sm', 'cursor-pointer');
spanPassword.id = 'ch-password';
spanPassword.textContent = 'Change Password';

// Append h3Name, h4Email, and spanPassword to div2Div
div2Div.appendChild(h3Name);
div2Div.appendChild(h4Email);
div2Div.appendChild(spanPassword);

// Append div1Div and div2Div to d1Div
d1Div.appendChild(div1Div);
d1Div.appendChild(div2Div);

// Create the second d2 div
const d2Div = document.createElement('div');
d2Div.classList.add('d2', 'w-full');

// Create the div2 div inside d2Div
const div2Div2 = document.createElement('div');
div2Div2.classList.add('i2', 'flex', 'items-center', 'justify-between', 'w-full', 'py-1', 'border-b-[1px]', 'border-gray-200');

// Create the h1 element for "Newsletters"
const h1Newsletters = document.createElement('h1');
h1Newsletters.classList.add('text-lg', 'text-gray-800');
h1Newsletters.textContent = 'Newsletters';

// Create the span element for "edit"
const spanEdit2 = document.createElement('span');
spanEdit2.classList.add('text-[#0da487]', 'capitalize', 'cursor-pointer');
spanEdit2.id = 'edit';
spanEdit2.textContent = 'edit';

// Append h1Newsletters and spanEdit2 to div2Div2
div2Div2.appendChild(h1Newsletters);
div2Div2.appendChild(spanEdit2);

// Create the p element for the newsletter text
const pNewsletter = document.createElement('p');
pNewsletter.classList.add('mt-5', 'text-gray-500', 'text', 'text-sm');
pNewsletter.textContent = 'You are currently not subscribed to any newsletter';

// Append div2Div2 and pNewsletter to d2Div
d2Div.appendChild(div2Div2);
d2Div.appendChild(pNewsletter);

// Create the third d2 div
const d2Div2 = document.createElement('div');
d2Div2.classList.add('d2', 'w-full', 'mt-6');

// Create the div3 div inside d2Div2
const div3Div = document.createElement('div');
div3Div.classList.add('i2', 'flex', 'items-center', 'justify-between', 'w-full', 'py-1', 'border-b-[1px]', 'border-gray-200');

// Create the h1 element for "Address Book"
const h1AddressBook = document.createElement('h1');
h1AddressBook.classList.add('text-lg', 'text-gray-800');
h1AddressBook.textContent = 'Address Book';

// Create the span element for "edit"
const spanEdit3 = document.createElement('span');
spanEdit3.classList.add('text-[#0da487]', 'capitalize', 'cursor-pointer');
spanEdit3.id = 'edit';
spanEdit3.textContent = 'edit';

// Append h1AddressBook and spanEdit3 to div3Div
div3Div.appendChild(h1AddressBook);
div3Div.appendChild(spanEdit3);

// Create the first address div
const all_address = document.createElement('div');
all_address.classList = 'grid-cols-1 md:flex md:justify-between md:items-center';
const addressDiv1 = document.createElement('div');
addressDiv1.classList.add('w-full', 'text-gray-500', 'py-3', 'flex', 'flex-col', 'gap-2', 'text-sm');

// Create the span element for "Default Billing Address"
const spanDefaultBilling1 = document.createElement('span');
spanDefaultBilling1.textContent = 'Default Billing Address';

// Create the span element for the address message
const spanAddress1 = document.createElement('span');
spanAddress1.textContent = 'You have not set a default billing address.';

// Create the span element for "Edit Address"
const spanEditAddress1 = document.createElement('span');
spanEditAddress1.classList.add('text-[#0da487]', 'capitalize', 'cursor-pointer');
spanEditAddress1.id = 'edit';
spanEditAddress1.textContent = 'Edit Address';

// Append spanDefaultBilling1, spanAddress1, and spanEditAddress1 to addressDiv1
addressDiv1.appendChild(spanDefaultBilling1);
addressDiv1.appendChild(spanAddress1);
addressDiv1.appendChild(spanEditAddress1);

// Create the second address div
const addressDiv2 = document.createElement('div');
addressDiv2.classList.add('w-full', 'text-gray-500', 'py-3', 'flex', 'flex-col', 'gap-2', 'text-sm');
all_address.appendChild(addressDiv1);
all_address.appendChild(addressDiv2);
// Create the span element for "Default Billing Address"
const spanDefaultBilling2 = document.createElement('span');
spanDefaultBilling2.textContent = 'Default Billing Address';

// Create the span element for the address message
const spanAddress2 = document.createElement('span');
spanAddress2.textContent = 'You have not set a default billing address.';

// Create the span element for "Edit Address"
const spanEditAddress2 = document.createElement('span');
spanEditAddress2.classList.add('text-[#0da487]', 'capitalize', 'cursor-pointer');
spanEditAddress2.id = 'edit';
spanEditAddress2.textContent = 'Edit Address';

// Append spanDefaultBilling2, spanAddress2, and spanEditAddress2 to addressDiv2
addressDiv2.appendChild(spanDefaultBilling2);
addressDiv2.appendChild(spanAddress2);
addressDiv2.appendChild(spanEditAddress2);

// Append div3Div, addressDiv1, and addressDiv2 to d2Div2
d2Div2.appendChild(div3Div);
d2Div2.appendChild(all_address);

// Append h1Element, d1Div, d2Div, and d2Div2 to lastPartDiv
lastPartDiv.appendChild(h1Element);
lastPartDiv.appendChild(info1Div);
info1Div.appendChild(d1Div);
info1Div.appendChild(d2Div);
lastPartDiv.appendChild(d2Div2);
tab.appendChild(lastPartDiv);
}