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
}

// showTab(1);

tabButtons.forEach((button, index) => button.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}))