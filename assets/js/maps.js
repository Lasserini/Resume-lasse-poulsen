function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 55.99436810278571,
            lng: 11.969633027784207
        }
    });

    var labels = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

    var locations = [
        { lat: 55.99709525043145, lgn: 11.970390676145506 },
        { lat: 55.68117682345807, lgn: 12.577199142139685 },
        { lat: 55.66300284834, lgn: 12.589074539941048 },
        { lat: 55.68222589393442, lgn: 12.576619894236746 },
        { lat: 53.29834615774438, lgn: -6.178096102150207 },
        { lat: -17.821700445971388, lgn: 31.04967577367341 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
