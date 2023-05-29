const lis = document.querySelectorAll('.tools li');
lis.forEach((ele) => {
    ele.onclick = () => {
        lis.forEach((ele) => {
            ele.classList.remove('active');
        })
        ele.classList.add('active');
    }
});
// buttons save and close
const close = document.querySelectorAll('#close');
const save_chnages = document.querySelector('#save');
const body = document.querySelector('body');
console.log(close)
console.log(save_chnages);
// all butons in dashboard page
let all_buttons = document.querySelectorAll('#edit');
all_buttons.forEach((btn) => {
    btn.onclick = () => {
        body.classList.add('overlay');
        document.querySelector(".myforms").classList.add('tr-lt');
        document.querySelector(".myforms").classList.add('zindex-11');
    };
});
// save changes when click at save
save_chnages.onclick = () => {
    // save changes
    body.classList.remove('overlay');
    document.querySelector(".myforms").classList.remove('tr-lt');
    document.querySelector(".myforms").classList.remove('zindex-11');
}
// close this page when click at close button
close.forEach((btnclose) => {
    btnclose.onclick = () => {
        // no save any changes
        body.classList.remove('overlay');
        document.querySelector(".myforms").classList.remove('tr-lt');
        document.querySelector(".myforms").classList.remove('zindex-11');
        // when add call back function to create elements using JS
        // setTimeout(()=>{
        //     document.querySelector(".myforms").remove();
        // },500);
    }
});
// when click at send password create div of change password page using js 
document.querySelector("#ch-password").onclick = () => {
    console.log('create page password here using JS');
}