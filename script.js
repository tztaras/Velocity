const tabButtons = document.querySelectorAll('.tabs-nav button');
console.log(tabButtons);

const tabItems = document.querySelectorAll('.tabs-item');
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

// const anchors = document.querySelectorAll('.header-nav a');
// console.log(anchors);
// anchors.forEach(anchrs => {
//     anchrs.addEventListener('click', function (event) {
//         event.preventDefault(); //блокування дії за замовчуванням
//     })
// })