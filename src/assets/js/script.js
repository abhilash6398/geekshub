$(function() {
    $('#bannerslider').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    $('#brandslogo').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 4
            },
            768: {
                items: 5
            },
            1024: {
                items: 8
            }
        }
    });
    $('#shopintrest').owlCarousel({
        loop: true,
        margin: 8,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1025: {
                items: 5
            }
        }
    });
    $('#shopbyvendor').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });
    $('#latestproducts').owlCarousel({
        loop: true,
        margin: 3,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });
    $('.colectionSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
        mouseDrag:false,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    $('#prolistban').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn();
            }
            reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });

        $('.imvend').click(function(){
            $('.imvendwrap').slideDown();
        });
        $('.imcust').click(function(){
            $('.imvendwrap').slideUp();
        });
        $('.cartnotes').click(function(){
            $('.cartnotification').fadeIn();
            $('.cartoverlay').fadeIn();
            $('html').addClass('overflowview')
        });
        $('.closewin').click(function(){
            $('.cartnotification').fadeOut();
            $('.cartoverlay').fadeOut();
            $('html').removeClass('overflowview')
        });
        $('.delrw').click(function(){
            $(this).parents('.ordersviewrowdetails').remove();
        });

    //     var total = 0;
    //     $(".ordersviewrowdetails  .ordersinfos .orderpriz").each(function(){
    //         total += +$(this).text();
    //     });
    //   document.getElementById("totalvalue").innerHTML = total
});

 