$('#navbar').load('../pages/share/navbar.html', function (data) {
    $('#navbar').replaceWith(data);

    const burger = document.querySelector('.burger')
    const navLinks = document.querySelector('ul.nav-links')
    const nav = document.querySelector('.nav')
    burger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        $('body').toggleClass('overflow-hidden');
    })

    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 200) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        }
    })
});


$('#footer').load('../pages/share/footer.html', function (data) {
    $('#footer').replaceWith(data);

    const scrollTop = document.querySelector('.scrollTop');
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        window.addEventListener('load', togglescrollTop);
        document.addEventListener('scroll', togglescrollTop);
        scrollTop.addEventListener('click', window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }));
    }
});