const tabButtons = document.querySelectorAll('.tabs_nav button');
console.log(tabButtons);

const tabItems = document.querySelectorAll('.tabs_item');
console.log(tabItems);


function hideTabs() {
    tabButtons.forEach(item => item.classList.remove('active'));

    tabItems.forEach(item => item.classList.add('hide'));
};

function showTab(index) {

    tabButtons[index].classList.add('active');
    tabItems[index].classList.remove('hide');
};

hideTabs();
showTab(0);



// tabButtons.forEach(
//     (button, index) => button.addEventListener('click', () => {
//         hideTabs();
//         showTab(index);
//     }));
tabButtons.forEach(
    (button, index) => button.onclick = () => {
        hideTabs();
        showTab(index);
    });

// anchors
// anchors
// anchors

const anchors = document.querySelectorAll('.header_nav a');
console.log(anchors);
anchors.forEach(anchrs => {
    anchrs.addEventListener('click', function (event) {
        event.preventDefault(); //блокування дії за замовчуванням

        const id = anchrs.getAttribute('href');
        console.log(id);
        console.dir(id);

        const elem = document.querySelector(id);
        console.log(elem);

        window.scroll({
            top: elem.offsetTop - 65, // -65 px зверху щоб шапка не перекривала about velocity
            behavior: 'smooth'
        });
    });
});