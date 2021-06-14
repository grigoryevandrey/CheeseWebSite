window.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const menuParent = document.querySelector('.products-block ul');
    const menuItem = document.querySelectorAll('.products-block ul li');
    const menuBlock = document.querySelector('.products-block');
    const resultsBlock = document.querySelector('.results-block');

    const scrollDocTo = i => {
        if (i === 0) {
            categories[0].scrollIntoView();
            return;
        }

        categories.forEach(item => {


            if (item.classList.contains(`category-${i}`)) {
                item.scrollIntoView();
            }
        })
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 147 && !menuBlock.classList.contains('fixed-pos')) {
            menuBlock.classList.add('fixed-pos')
        }

        if (window.scrollY < 147 && menuBlock.classList.contains('fixed-pos')) {
            menuBlock.classList.remove('fixed-pos')
        }
    })

    menuParent.addEventListener('click', (event) => {
        const target = event.target;

           
        if (target && target.classList.contains('option') ) {
            menuItem.forEach((item, i) =>  {
             if (target == item) {
                menuItem.forEach(menuIt => {
                    menuIt.classList.remove('choosen-option');
                })
                item.classList.add('choosen-option');
                scrollDocTo(i);
             }
            });
        }
    })
});