
const q = document.querySelectorAll('.q');
console.log(q.children);
q.forEach((ele)=>{
    ele.children[0].onclick = ()=>{
        // q.forEach((elehide)=>{
        //     elehide.children[1].style.height = '0px';
        //     elehide.classList.remove('color');
        // });
        ele.classList.toggle('color');
        ele.classList.contains('color')?ele.children[1].style.height = `${ele.children[1].scrollHeight}px`:ele.children[1].style.height = `0px`;
    }
})