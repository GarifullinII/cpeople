const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const XHR = new XMLHTTPRequest ()
function sendMail (f) {
const str = [] 
    for (var el = f.elements, j = 0; j < el.length - 1; j++)
        {
        str [j] = el[j]. name + '=' + encodeURIComponent (el[j].value);
        }
    XHR.open ('get', 'smart.php?' + str.join ('&'), true);
    XHR.send (null);
    }