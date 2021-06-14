window.addEventListener('DOMContentLoaded', () => {
    const slider = () => {
        const result = document.querySelectorAll('.result');
    
    
    
        result.forEach(item => {
            const imageContent = item.querySelectorAll('.main-img-cont img');
            const imageSelector = item.querySelectorAll('.nav-image-limiter img');
            const imageSelectorParent = item.querySelector('.image-nav-block');
    
            const hideImageContent = () => {
                imageContent.forEach(item => {
                     item.classList.add('notDisplay');
                     item.classList.remove('fade');
                });
            }
    
            const showImageContent = (i = 0) => {
                imageContent[i].classList.add('fade');
                imageContent[i].classList.remove('notDisplay');
            }
    
            hideImageContent();
            showImageContent();

            imageSelectorParent.addEventListener('click', (event) => {
                const target = event.target;

           
                if (target && target.classList.contains('image-to-choose') ) {
                    imageSelector.forEach((item, i) =>  {
                     if (target == item) {
                        hideImageContent();
                        showImageContent(i);
                     }
                    });
                }
             })
            })
        };
    
    slider();
})
