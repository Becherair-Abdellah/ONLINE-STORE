// start work
const payOtion = document.querySelectorAll('.pay-option .target');
const licolumn = document.querySelectorAll(".pay-option li");
const delOtion = document.querySelectorAll('.del-option .target');
const delAddress = document.querySelectorAll('.del-address input[type="radio"]');
const payOptinNb = document.querySelectorAll('.pay-option .nb .net-bank input[type="radio"]');
const payOptinNb2 = document.querySelectorAll('.pay-option .nb2 .net-bank input[type="radio"]');
// class radio
class Radio{
    constructor(allRadio){
        this.allr = allRadio;
    }
    // for delivery options and delivery address
    clickable_radio_normal(){
        this.allr.forEach(element => {
            element.parentNode.parentNode.onclick = ()=>{
                this.allr.forEach((ele)=>{
                    ele.checked = false;
                });
                element.checked = true;
            };
        });
    }
    // for pay options generalllll
    clickable_radio(){
        this.allr.forEach(element => {
            element.parentNode.parentNode.onclick = ()=>{
                licolumn.forEach((ele)=>{
                    ele.classList.remove('rotate');
                });
                element.parentNode.parentNode.parentNode.classList.toggle('rotate');
                document.querySelectorAll('.pay-option input[type="radio"]').forEach((ele)=>{
                    ele.checked = false;
                });
                element.checked = true;
            };
        });
    }
    // for specefic options
    clickable_radio2(){
        this.allr.forEach(element => {
            element.parentNode.onclick = ()=>{
                this.allr.forEach((ele)=>{
                    ele.checked = false;
                });
                element.checked = true;
            };
        });
    }
}
// pay options
new Radio(payOtion).clickable_radio();
// delivery options 
new Radio(delOtion).clickable_radio_normal();
// delivery address
new Radio(delAddress).clickable_radio_normal();
// pay options net banking 1
new Radio(payOptinNb).clickable_radio2();
// pay options net banking 2
new Radio(payOptinNb2).clickable_radio2();