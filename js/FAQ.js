
const q = document.querySelectorAll('.q');
console.log(q.children);
q.forEach((ele)=>{
    ele.children[0].onclick = ()=>{
        q.forEach((e)=>{
            if(ele!== e){
                e.classList.remove('color');
                e.children[1].style.height = `0`
            }
        });
        ele.classList.toggle('color');
        ele.classList.contains('color')?ele.children[1].style.height = `${ele.children[1].scrollHeight}px`:ele.children[1].style.height = `0px`;
    }
});
const askQues = document.querySelector('.ask-que');
console.log(askQues.getBoundingClientRect());