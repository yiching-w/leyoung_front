$(document).ready(function () {
    const html = document.documentElement;
    const canvasWrap = document.querySelector(".canvasWrap");
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 207;
    const currentFrame = index => (
        `/assets/image/index/1_00${index < 100 ? index < 10 ? '00' + index : '0' + index : index}.jpg`
    )

    const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
        }
    };

    const img = new Image()
    img.src = currentFrame(0);
    canvas.width = 1158;
    canvas.height = 770;
    img.onload = function () {
        context.drawImage(img, 0, 0);
    }

    const updateImage = index => {
        img.src = currentFrame(index);
        context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop;
        if (scrollTop >= window.innerHeight * 5 - 500) {
            canvas.style.opacity = '0';
        } else {
            canvas.style.opacity = '1';
        }
        const maxScrollTop = (window.innerHeight * 5 - window.innerHeight) - window.innerHeight;
        console.log('scrollTop', scrollTop)
        console.log('maxScrollTop', maxScrollTop)
        console.log('html.scrollHeight', html.scrollHeight)
        console.log('window.innerHeight', window.innerHeight)

        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
            frameCount - 1,
            Math.ceil(scrollFraction * frameCount)
        );

        requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages()
});