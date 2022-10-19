$('#navbar').load('/pages/share/navbar.html', function (data) {
    $('#navbar').replaceWith(data);

    const burger = document.querySelector('.burger')
    const navLinks = document.querySelector('ul.nav-links')
    const nav = document.querySelector('.nav')
    const navOverlay = document.querySelector('.navOverlay')
    burger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        $('body').toggleClass('overflow-hidden');
        $(navOverlay).toggleClass('show');
    })

    navOverlay.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        $('body').toggleClass('overflow-hidden');
        $(navOverlay).toggleClass('show');
    })

    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 200) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        }
    })
});


$('#footer').load('/pages/share/footer.html', function (data) {
    $('#footer').replaceWith(data);

    const scrollTop = document.querySelector('.scrollTop');
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        document.addEventListener('scroll', togglescrollTop);
    }

    $('a.scrollTop').on('click', function (e) {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});