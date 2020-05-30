const pics = document.querySelectorAll('.travel-left img, .travel-right img');

pics.forEach(pic => {
    pic.addEventListener('mouseover', () => {
        pic.classList.add('img-darken');
    })

    pic.addEventListener('mouseout', () => {
        pic.classList.remove('img-darken');
    })
})

