import React, { useRef, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./leafletmap.css";

const LeafletMap = () => {
  const markerRef = useRef();
  //const position = [42.698334, 23.319941];
  //42.6500 23.3507
  const position = {
    lat: 42.6500,
    lng: 23.3507,
  };
  
  const [markerPosition, setMarkerPosition] = useState(position);

  const updatePosition = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setMarkerPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <div>
      <MapContainer center={markerPosition} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution=''
          url="https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}"
          accessToken="4zOFBbjnAN5MCIMYtHHrwVhUcRhSRY4sSCeU9zudoqWgv4l1azfGwGkauTCgz4iN"
        />
        <Marker
          position={markerPosition}
          draggable={true}
          eventHandlers={updatePosition}
          ref={markerRef}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
