var markersData = [
  {
      lat: 40.6386333,
      lng: -8.745,
      name: "Camping Praia da Barra",
      address1:"Rua Diogo Cão, 125",
      address2: "Praia da Barra",
      postalCode: "3830-772 Gafanha da Nazaré" // don’t insert comma in the last item of each marker
   },
   {
      lat: 40.59955,
      lng: -8.7498167,
      name: "Camping Costa Nova",
      address1:"Quinta dos Patos, n.º 2",
      address2: "Praia da Costa Nova",
      postalCode: "3830-453 Gafanha da Encarnação" // don’t insert comma in the last item of each marker
   },
   {
      lat: 40.6247167,
      lng: -8.7129167,
      name: "Camping Gafanha da Nazaré",
      address1:"Rua dos Balneários do Complexo Desportivo",
      address2: "Gafanha da Nazaré",
      postalCode: "3830-225 Gafanha da Nazaré" // don’t insert comma in the last item of each marker
   } // don’t insert comma in last item
];

function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(40.601203,-8.668173),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the InfoWindow with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);

// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds and zoom level according to markers position
   var bounds = new google.maps.LatLngBounds();

   // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postalCode = markersData[i].postalCode;

      createMarker(latlng, name, address1, address2, postalCode);

      // Marker’s Lat. and Lng. values are added to bounds variable
      bounds.extend(latlng); 
   }

   // Finally the bounds variable is used to set the map bounds
   // with API’s fitBounds() function
   map.fitBounds(bounds);
}
// This function creates each marker and sets their Info Window content
function createMarker(latlng, name, address1, address2, postalCode){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the infowindow content is created
   // and the infowindow is opened
   google.maps.event.addListener(marker, 'click', function() {
      
      // Variable to define the HTML content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
      '<div class="iw_title">' + name + '</div>' +
      '<div class="iw_content">' + address1 + '<br />' +
      address2 + '<br />' +
      postalCode + '</div></div>';
      
      // including content to the infowindow
      infoWindow.setContent(iwContent);

      // opening the infowindow in the current map and at the current marker location
      infoWindow.open(map, marker);
   });
}