var map;

function initMap() {
    var posMark = {
        lat: 59.9391903,
        lng: 30.3272874
    }
    var pos = {
            lat: 59.937685,
            lng: 30.3475007
        },
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 15
        });
    var marker = new google.maps.Marker({
        map: map,
        position: posMark,
        title: 'GllacyShop!',
        icon: 'img/glacy-icon.svg'
    });
};

var link = document.querySelector('.link-callback');
var popup = document.querySelector('.location');
var close = document.querySelector('.close-button');

link.addEventListener('click', function(evt) {
    evt.preventDefault()
    popup.classList.add('popup-show')
});

close.addEventListener('click', function(evt) {
    evt.preventDefault()
    popup.classList.remove('popup-show')
});