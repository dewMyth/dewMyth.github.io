
//Loader
$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

// Tooltip
$(function () {
    $('[data-tt="tooltip"]').tooltip()
});

//Back to Top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

//Contact Us button show
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('#contact-us').css({
            'right': '80px'
        });
    } else {
        $('#contact-us').css({
            'right': '40px'
        });
    }
});

//Common method for Creating Cookie
function createCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

//Common method for Getting Cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Register for trial input click email word animation
$('#trial-register-email-input-1').keyup(function () {
    $('#free-trial-register-section__email-1').addClass('section-filled');
    $('#trial-register-email-input-1').css({
        "padding-top": "20px"
    });
});

$('#trial-register-email-input-2').keyup(function () {
    $('#free-trial-register-section__email-2').addClass('section-filled');
    $('#trial-register-email-input-2').css({
        "padding-top": "20px"
    });
});

$('#trial-register-email-input-3').keyup(function () {
    $('#free-trial-register-section__email-3').addClass('section-filled');
    $('#trial-register-email-input-3').css({
        "padding-top": "20px"
    });
});


//User guide page left menu fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > 624) {
        $('#user-guide-left-menu').addClass('fixed');
    } else {
        $('#user-guide-left-menu').removeClass('fixed');
    }
});

//Get-Started GA Event Tracking
var trackGetStartedLink = function (elem) {
    var page = elem.getAttribute("data-page-ref");
    var userEmailInputId = elem.getAttribute("data-target");
    var userEmail = $("#" + userEmailInputId).val();
    var url = "https://merchant.applova.io/cas/onboard?email=" + userEmail + "&ref=" + page;

    ga('send', 'event', 'Merchant Pre Sign-Up', page, url, {
        'transport': 'beacon',
        'hitCallback': function () {
            document.location = url;
        }
    });
};

//GA Outbound Event Tracking
var trackLink = function (eventCategory, eventAction, eventLabel) {
    ga('send', 'event', eventCategory, eventAction, eventLabel);
};

//Request a Demo Tracking
var requestDemoLink = function (elem) {
    var page = elem.getAttribute("data-page-ref");
    var userEmailInputId = elem.getAttribute("data-target");
    var userEmail = $("#" + userEmailInputId).val();
    var url = "https://merchant.applova.io/applova/request-demo-init.htm?email=" + userEmail + "&ref=" + page;

    ga('send', 'event', 'Request Demo Link', page, url, {
        'transport': 'beacon',
        'hitCallback': function () {
            document.location = url;
        }
    });
};

//Request a Quote Tracking
var requestQuoteLink = function (elem) {
    var page = elem.getAttribute("data-page-ref");
    var userEmailInputId = elem.getAttribute("data-target");
    var userEmail = $("#" + userEmailInputId).val();
    var url = "https://partner.applova.io/iso-admin/request-clover-kiosk-bundle?email=" + userEmail + "&ref=" + page;

    ga('send', 'event', 'Clover Kiosk Bundle Request', page, url, {
        'transport': 'beacon',
        'hitCallback': function () {
            document.location = url;
        }
    });
};

//Client comments full view
$('#client-comments-1__reveal').click(function () {
    $('#client-comments-1').removeClass('hide');
    $(this).addClass('hide');
});

//Apriva Applova webinar header register now button click scroll
$(".apriva-website-webinar__header-video-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".apriva-applova-webinar__video-area").offset().top
    }, 1000);
});

// Applova Partner Email Submit
var submitPartner = function (elem) {
    var page = elem.getAttribute("data-page-ref");
    var userEmailInputId = elem.getAttribute("data-target");
    var userEmail = $("#" + userEmailInputId).val();

    var url = "https://applovajp.com/partners/reseller-partners?email=" + userEmail + "&ref=" + page + "#sign-up-section";

    ga('send', 'event', 'Partner Email Submit', page, url, {
        'transport': 'beacon',
        'hitCallback': function () {
            document.location = url;
        }
    });
};

// Verifone Email Submit
var submitVerifonePartner = function (elem) {
    var page = elem.getAttribute("data-page-ref");
    var userEmailInputId = elem.getAttribute("data-target");
    var userEmail = $("#" + userEmailInputId).val();
    var url = "https://partner.applova.io/iso-admin/verifone-carbon-early-access?email=" + userEmail + "&ref=" + page;

    ga('send', 'event', 'Verifone Email Submit', page, url, {
        'transport': 'beacon',
        'hitCallback': function () {
            document.location = url;
        }
    });
};

// WSAA, Money20/20 Reserve Main pages book now success message
function campaignsDetailsSubmit() {
    $('.campaigns__details-area').addClass('hide');
    $('.campaigns__success-message').removeClass('hide');
    $('.campaigns__success-message--icon').addClass('animated tada');
}

// manage-your-sales-with-website-video-page video button click
$(".manage-your-sales-with-website-video-page__watch-video-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".manage-your-sales-with-website-video-page__video-area").offset().top
    }, 1000);
});

$(".webinar-single-page__watch-video-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".webinar-single-page__video-area").offset().top
    }, 1000);
});

//News page left menu fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > 264) {
        $('#news-left-menu').addClass('fixed');
    } else {
        $('#news-left-menu').removeClass('fixed');
    }
});

// Company team individual page back to team button
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('#back-to-team').addClass('show');
    } else {
        $('#back-to-team').removeClass('show');
    }
});

// Import HTML Snippets
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("applova-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("applova-include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}
includeHTML();

//home header color change
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('.navbar-default').addClass('navbar-fill');
    } else {
        $('.navbar-default').removeClass('navbar-fill');
    }
});

//home scroll to sections
$(".order-ahead-apps").click(function () {
    $('html, body').animate({
        scrollTop: $(".order-ahead-apps__area").offset().top - 76
    }, 1000);
});

$(".mobile-store-apps").click(function () {
    $('html, body').animate({
        scrollTop: $(".mobile-store-apps__area").offset().top - 76
    }, 1000);
});

$(".self-ordering-kiosk").click(function () {
    $('html, body').animate({
        scrollTop: $(".self-ordering-kiosk__area").offset().top - 76
    }, 1000);
});

// Home page Header Notification load
$(document).ready(function () {
    $('.header__notification').delay(5000).slideDown(500);
});

setTimeout(function () {
    $('.navbar__with-header-notification').css({
        'padding-top': '0'
    });
}, 5000);

setTimeout(function () {
    $('.free-trial-register-section__with-header-notification').css({
        'padding-top': '200px'
    });
}, 5000);

function closeHeaderNotification() {
    if (window.matchMedia('(max-width: 480px)').matches) {
        $('.header__notification').slideUp(500);
        $('.navbar__with-header-notification').css({
            'padding-top': '35px'
        });
        $('.free-trial-register-section__with-header-notification').css({
            'padding-top': '75px'
        });
    } else {
        $('.header__notification').slideUp(500);
        $('.navbar__with-header-notification').css({
            'padding-top': '35px'
        });
        $('.free-trial-register-section__with-header-notification').css({
            'padding-top': '150px'
        });
    }
}

// Blog eBook download left popup
setTimeout(function () {
    $('.page-card__left-popup').addClass('show'); // or fade, css display however you'd like.
}, 50000);

// Blog eBook download left popup close
function closeLeftPopup() {
    $('.page-card__left-popup').css({
        "opacity": "0",
        "left": "-430px"
    });
}

// Set cookie for blog subscribe
setTimeout(function () {
    if ($("#subscribe-modal").length) {
        var blogSubscription = getCookie("APT_BLG_SUB");
        if (blogSubscription == "") {
            $('#subscribe-modal').modal();
            createCookie("APT_BLG_SUB", "true", 15)
        }
    }
}, 25000);

// Set cookie for accept cookie for entire site
function setAllowCookies() {
    createCookie("APT_ALLOW_COOKIES", "true", 1000);
    $('.footer-popup__cookies-content').removeClass('show');
}

setTimeout(function () {
    var WebCookie = getCookie("APT_ALLOW_COOKIES");
    if (WebCookie == "") {
        $('.footer-popup__cookies-content').addClass('show');
    }
}, 3000);

// Mobile Pricing page yearly monthly plan switch
$('.switch input:checkbox').change(function () {
    if ($(this).is(":checked")) {
        $('.pricing__mobile-yearly-amount').addClass('hide');
        $('.pricing__mobile-monthly-amount').removeClass('hide');
        $('.pricing__text-active').addClass('inactive');
        $('.pricing__text-inactive').addClass('active');
        $('.pricing__clover-kiosk-card').addClass('active');
        $('.pricing__request-quote-btn').removeClass('disabled');
    } else {
        $('.pricing__mobile-yearly-amount').removeClass('hide');
        $('.pricing__mobile-monthly-amount').addClass('hide');
        $('.pricing__text-active').removeClass('inactive');
        $('.pricing__text-inactive').removeClass('active');
        $('.pricing__clover-kiosk-card').removeClass('active');
        $('.pricing__request-quote-btn').addClass('disabled');
    }
});

$(".pricing__request-quote-btn").on("click", function (event) {
    if ($(this).hasClass("disabled")) {
        event.stopPropagation()
    }
});

// New sub menu background fill
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('.sub-navbar').addClass('fill');
    } else {
        $('.sub-navbar').removeClass('fill');
    }
});

// New Mobile menu open close
function openMobileMenu() {
    $('.mobile-menu__open').addClass('icon-hide');
    $('.mobile-menu__close').addClass('icon-show');
    $('.mobile-menu').addClass('menu-open');
    $('body').addClass('overlay');
}

function closeMobileMenu() {
    $('.mobile-menu__open').removeClass('icon-hide');
    $('.mobile-menu__close').removeClass('icon-show');
    $('.mobile-menu').removeClass('menu-open');
    $('body').removeClass('overlay');
};

 
// New home section get demo button click
function getDemoHomeSectionClick() {

    var user_input = document.forms['form']['SingleLine1'].value;
    if ((user_input.trim()).length < 2) {
        $('#short_text_alert').removeClass('hide');
    }

    if (user_input.trim() === "") {
        $('#empty_bsname_alert').removeClass('hide');
    } else {
        $('#empty_bsname_alert').addClass('hide');
    }

    if ((user_input.trim()).length >= 2 && user_input.trim() !== "") {
        //2 form section hiding and unhiding
        $('.home-page__get-demo-section-1').addClass('hide');
        $('.home-page__get-demo-section-2').removeClass('hide').addClass('animated fadeIn');
    }
}

//get new code demo
function checkGetDemoFormValidity() {
    var user = document.forms['form']['SingleLine'].value;
    var email = document.forms['form']['Email'].value;
    var phone_number = document.forms['form']['PhoneNumber_countrycode'].value;
    if ((user.trim() !== "") && (email.trim() !== "") && (phone_number.trim() !== "")) {
        $("#form-button").prop('disabled', false);
    } else {
        $("#form-button").prop('disabled', 'disabled');
    }
}

// Uses Google Places API for Business Name loading
function initMap() {
    var input = document.getElementById('business-name-input');
    var options = {
        types: ['establishment']
    };

    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['formatted_address', 'formatted_phone_number', 'website', 'name']);

    autocomplete.addListener('place_changed', placechange);

    function placechange() {
        var place = autocomplete.getPlace();
        var photos = place.photos;

        console.log(place);
        $('#business-website-input').val(place.website);
        $('#business-phone-input').val(place.formatted_phone_number);
        $('#business-address-input').val(place.formatted_address);

    }
}

// Smooth scroll to section when click button
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a.scroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

//Blog pages next previous page link show hide
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('.next-page-link').addClass('show');
        $('.previous-page-link').addClass('show');
    } else {
        $('.next-page-link').removeClass('show');
        $('.previous-page-link').removeClass('show');
    }
});



// Fb share button - open sharing window
$(document).ready(function () {

    let url = document.querySelector("meta[property='og:url']").getAttribute('content');
    let size = "right=0,top=20px,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0";
    //classes mapped to call sharing window
    $(".fb-share").click(function () {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '', size);
    });
    $(".twitter-share").click(function () {
        let title = document.querySelector("meta[name='twitter:title']").getAttribute('content');
        let via = 'applova_inc';
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title) + '&via=' + encodeURIComponent(via), '', size);
    });
    $(".linkedin-share").click(function () {
        window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url), '', size);
    });
});

$(function() {
    //lazy load images
    $('.lazy').lazy({
        effect: 'fadeIn',
    });
});

