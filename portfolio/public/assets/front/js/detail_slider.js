


// details sliders
const smallImages = document.querySelectorAll('.smallImage');
const largeImage = document.getElementById('largeImage');

let index = 0;

function showImage(index) {
    largeImage.src = smallImages[index].src;
    smallImages.forEach((img,i) =>{
        if (i == index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });

    index = index;
}

smallImages.forEach((img,index) =>{
    img.addEventListener('click', () =>{
        showImage(index);
    })
});

function diaporama() {
    index = (index + 1) % smallImages.length;
    showImage(index);
}

setInterval(diaporama, 3000);