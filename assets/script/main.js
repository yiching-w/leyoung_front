console.log('navbar');

$('#navbar').load('../../pages/share/navbar.html', function (data) {
    console.log('Enter Navbar');
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
    console.log('Enter Footer');

    $('#footer').replaceWith(data);
    const scrollTop = $(".scroll-top");
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100
                ? scrollTop.addClass("active")
                : scrollTop.removeClass("active");
        };
        $(document).on("scroll", togglescrollTop);
        scrollTop.on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 800);
        });
    }
});