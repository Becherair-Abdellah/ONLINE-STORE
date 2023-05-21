const myInputs = document.querySelectorAll('.inputs input');
for(let i=0;i<myInputs.length;i++){
    myInputs[i].addEventListener('keydown',(e)=>{
        setTimeout(()=>{
            if(e.keyCode==8 && i>0){
                myInputs[i-1].focus();
                myInputs[i-1].value ='';
            }
            if(myInputs[i].value.trim() && i!== myInputs.length-1){
                myInputs[i+1].focus();
            }
        },0);
    })}