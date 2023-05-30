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
        body.classList.add('overflow-hidden');
        document.querySelector('.myoverlay').classList.add('overlay');
        document.querySelector(".myforms").classList.add('tr-lt');
        document.querySelector(".myforms").classList.add('zindex-11');
    
    document.querySelector(".myforms").classList.contains('tr-lt-none')?document.querySelector(".myforms").classList.remove('tr-lt-none'):'';
    };
});
// save changes when click at save
save_chnages.onclick = () => {
    // save changes
    document.querySelector('.myoverlay').classList.remove('overlay');
    document.querySelector(".myforms").classList.remove('tr-lt');
    document.querySelector(".myforms").classList.remove('zindex-11');
}
// close this page when click at close button
close.forEach((btnclose) => {
    btnclose.onclick = () => {
        // no save any changes
        document.querySelector('.myoverlay').classList.remove('overlay');
        document.querySelector(".myforms").classList.remove('tr-lt');
        document.querySelector(".myforms").classList.remove('zindex-11');
        body.classList.remove('overflow-hidden');

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
// button to show menu bar of  links
const btn_menu_bar = document.querySelector('.btn');
btn_menu_bar.onclick = () => {
    document.querySelector('.pro-file').classList.add('toRight');
    document.querySelector('.myoverlay').classList.add('overlay');
    body.classList.add('overflow-hidden');
    let creat_btn = document.createElement('button');
    creat_btn.innerText = 'x';
    creat_btn.classList = 'btnclose';
    document.querySelector('.info').appendChild(creat_btn);
    creat_btn.onclick = () => {
        document.querySelector('.pro-file').classList.remove('toRight');
        document.querySelector('.myoverlay').classList.remove('overlay');
    }
}
// function to create forms
function forms() {

}
document.querySelector('.myoverlay').onclick =()=>{
    document.querySelector('.myoverlay').classList.remove('overlay');
    document.querySelector('.pro-file').classList.contains('toRight')?document.querySelector('.pro-file').classList.remove('toRight'):"";
    // hide the form
    document.querySelector(".myforms").classList.add('tr-lt-none');
    document.querySelector(".myforms").classList.remove('tr-lt');
}