// start work
const pay_radio = document.querySelectorAll('.pay-option .target');
console.log(pay_radio);
pay_radio.forEach((ele)=>{
    ele.parentNode.parentNode.parentNode.onclick =()=>{
        pay_radio.forEach((ele)=>{
            ele.checked = false;
            ele.parentNode.parentNode.parentNode.classList.remove('rotate');
        });
        ele.checked = true;
        ele.parentNode.parentNode.parentNode.classList.add('rotate');
    }
})