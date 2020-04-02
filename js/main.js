function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.437472, lng: 30.394101},
        zoom: 17,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: {lat: 50.436985, lng: 30.393559},
        map: map,
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        icon: './img/Group 15.png'
    });
}
$(function () {
    $('a.agr_head_nav__link, .agr_nav__btn').each(function () {
        let th = this;
        // alert($(th).attr('href'));
        $(th).on('click', function (e) {
            e.preventDefault();
            let id = $(th).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
            return false;
        });

    });

});