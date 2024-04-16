const tabButtons = document.querySelectorAll('.tabs-nav button');
console.log(tabButtons);

const tabItems = document.querySelectorAll('.tabs-item');
console.log(tabItems);

(function hideTabs() {
    tabItems.forEach(item => 
        item.classList.add('hide'));
    
})();

