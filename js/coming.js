
function fn_countdown(month,day,year,h,m,s){
    // countdown time
    const countdown = new Date(`${month} ${day}, ${year} ${h}:${m}:${s}`);
    let counter = setInterval(() => {
        let timeNow = new Date().getTime();
        let diffTime = countdown - timeNow;
        if (diffTime < 0) {
            clearInterval(counter);
        }
        else{
                    // days
                    let days = diffTime / 1000 / 60 / 60 / 24;
                    // hours
                    let hours = diffTime % (1000 * 60 * 60 * 24) / 1000 / 60 / 60
                    // minute
                    let minute = diffTime % (1000 * 60 * 60) / 1000 / 60;
                    // second
                    let second = diffTime % (1000 * 60) / 1000;
                    document.querySelector('.d').innerText = Math.floor(days)<10?"0"+Math.floor(days):Math.floor(days);
                    document.querySelector('.h').innerText = Math.floor(hours)<10?"0"+Math.floor(hours):Math.floor(hours);
                    document.querySelector('.m').innerText = Math.floor(minute)<10?"0"+Math.floor(minute):Math.floor(minute);
                    document.querySelector('.s').innerText = Math.floor(second)<10?"0"+Math.floor(second):Math.floor(second);
        }
    }, 1000);
    }
    fn_countdown(5,21,2023,00,00,00);