'use strict'

// toggling for show main menu
const closeBtn = document.querySelector('.fa-times');
const mainMenuBtn = document.querySelector('.hero-contact-menu');
const mainMenu = document.querySelector('.hero-contact-nav');

function toggleMenu(e) {
  e.preventDefault()
  mainMenu.classList.toggle('active');
}

mainMenuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


// google map
let map;

function initMap() {
  map = new google.maps.Map(document.querySelector('#map'), {
    center: { lat: 33.770050, lng: -118.193741 },
    zoom: 12,
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ]
  });

  let marker = new google.maps.Marker({
    position: { lat: 33.770050, lng: -118.193741 },
    map: map,
    title: 'Наш маркер: З макету авокод'
  });

  google.maps.event.addListener(marker, 'click', function () {
    document.location = 'https://www.google.com/maps/place/%D0%9B%D0%BE%D0%BD%D0%B3-%D0%91%D0%B8%D1%87,+%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D1%8F,+%D0%A1%D0%A8%D0%90/@33.7394818,-118.3536101,12z/data=!4m13!1m7!3m6!1s0x80dd35ae16ed8aa5:0x4147d57f086875f!2z0KHQsNC9INCf0LXQtNGA0L4sINCb0L7RgS3QkNC90LTQttC10LvQtdGBLCDQmtCw0LvQuNGE0L7RgNC90LjRjywg0KHQqNCQ!3b1!8m2!3d33.7360619!4d-118.2922461!3m4!1s0x80c2cae84099d759:0xa1003afac42a8faa!8m2!3d33.7700152!4d-118.1937504';
  });
}
// end google map