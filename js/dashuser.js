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
        pesudo.onclick = ()=>{
            contnet_show.classList.remove('animate');
            pesudo.classList.remove('myoverlay');
            setTimeout(()=>{
            contnet_show.classList.remove('bl-imp');
            my_body.classList.remove('overflow-hidden');

            },300);
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
    let eles = [creat_btn,pesudo];
    eles.forEach((ele)=>{
        ele.onclick = ()=>{
            my_body.classList.remove('overflow-hidden');
            pesudo.classList.remove('myoverlay');
            profile_contnet.classList.remove('l-0');
        }
    });
    //setting some changes about screen height 
if(window.innerHeight<=628){
      
    document.querySelector('.tools').classList.add('h-[350px]','overflow-hidden','overflow-y-visible');
    console.log('run time');
}
};
// function create tab  content 
const content = document.querySelector('.content');
console.log(content);
dashboard();
function dashboard(){
    
}