// functions to ability to export the page as Pdf And ability to download it
const printBtn = document.querySelector('#print');
printBtn.onclick = ()=>{
    document.querySelector('.tabels').style = 'overflow:visible;';
    window.print();
}
// both print or export as Pdf
window.addEventListener('afterprint',(e)=>{
    console.log(e)
    document.querySelector('.tabels').style =`    overflow: hidden;
    overflow-x: visible;`;
});