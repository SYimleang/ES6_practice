(() =>{
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAYS = HOUR * 24;

    function setElementInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countdown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2023 23:59:59').getTime();
        const unixTimerLeft = newYear - now;

        // const daysElem = document.getElementById('days');
        // daysElem.innerText = Math.floor(unixTimerLeft / DAYS);
        setElementInnerText('days', Math.floor(unixTimerLeft / DAYS));
        setElementInnerText('hours', Math.floor(unixTimerLeft % DAYS / HOUR));
        setElementInnerText('minutes', Math.floor(unixTimerLeft % HOUR / MINUTE));
        setElementInnerText('seconds', Math.floor(unixTimerLeft % MINUTE / SECOND));
    }

    function run() {
        countdown();
        setInterval(countdown, SECOND);
    } 
    run();
})();