 window.onload = function() {
    var container = document.getElementById('map');
    //불러올 지도를 담는 박스의 아이디명
    var options = {
        center: new daum.maps.LatLng(37.424530268271674, 126.42540935499818), //위도, 경도값
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.424530268271674, 126.42540935499818); //위도, 경도값
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
}