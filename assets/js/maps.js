function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 55.99436810278571, lng: 11.969633027784207 }
    });
    
    const locations = [
        { lat: 55.99709525043145, lng: 11.970390676145506 },
        { lat: 55.68117682345807, lng: 12.577199142139685 },
        { lat: 55.66300284834, lng: 12.589074539941048 },
        { lat: 55.68222589393442, lng: 12.576619894236746 },
        { lat: 53.29834615774438, lng: -6.178096102150207 },
        { lat: -17.821700445971388, lng: 31.04967577367341 },
    ];
  
    const markers = locations.map(function (location, i) {
      const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    const markerCluster = new markerClusterer.MarkerClusterer({map, markers});
  }