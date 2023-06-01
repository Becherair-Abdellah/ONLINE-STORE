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
edits.forEach((ele)=>{
    ele.onclick = ()=>{
        contnet_show.classList.add('bl-imp');
        my_body.classList.add('overflow-hidden');
        pesudo.classList.add('myoverlay');
    };
});
// close buttons at forms
const all_close = document.querySelectorAll('#close');
console.log(all_close);
all_close.forEach((ele)=>{
    ele.onclick = ()=>{
        contnet_show.classList.remove('bl-imp');
        my_body.classList.remove('overflow-hidden');
        
    }
});

