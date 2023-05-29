const lis = document.querySelectorAll('.tools li');
lis.forEach((ele)=>{
    ele.onclick = ()=>{
        lis.forEach((ele)=>{
            ele.classList.remove('active');
        })
        ele.classList.add('active');
    }
});