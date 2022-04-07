import { useState, useEffect, useRef } from "react";
import SearchResultSidebar from "../../Components/SearchResultSidebar/SearchResultSidebar";
import * as L from "leaflet";

import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { findDOMNode } from "react-dom";
import { AnimatePresence } from "framer-motion";
import {
  SearchMapButton,
  SearchMapContainer,
  SearchResultsContainer,
  SearchPageWrapper,
} from "./Search.elements";
import SearchMapNavbar from "../../Components/SearchMapNavbar/SearchMapNavbar";

const housess = [
  { name: "house", lat: "43.209495", long: "27.927295" },
  { name: "house1", lat: "43.207495", long: "27.917295" },
  { name: "house2", lat: "43.209495", long: "27.919295" },
];
const Search = () => {
  const map = useRef();
  const clusterLayer = useRef();

  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(null);
  const [visible, setVisible] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [houses, setHouses] = useState([]);

  console.log(center);

  const dragendHandler = () => {
    setCenter(map.current.getCenter());
    setVisible(true);
  };

  const zoomHandler = () => {
    const currentZoom = map.current.getZoom();
    setZoom(currentZoom);
  };

  useEffect(() => {
    const mapNode = findDOMNode(document.getElementById("mapId"));

    if (!mapNode || map.current) {
      return;
    }

    map.current = new L.map(mapNode).setZoom(13).setView(L.latLng(43.2, 27.91));

    L.tileLayer("https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map.current);

    setCenter(map.current.getCenter());
    setZoom(map.current.getZoom());

    map.current.on("dragend", dragendHandler);
    map.current.on("dragstart", () => setVisible(false));
    map.current.on("zoom", zoomHandler);

    console.log(map.current.getBounds());
  }, []);

  useEffect(() => {
    clusterLayer.current?.remove();

    if (!map.current) {
      return;
    }

    if (clusterLayer && clusterLayer.current) {
      map.current.removeLayer(clusterLayer.current);
      clusterLayer.current?.remove();
    }

    clusterLayer.current = L.markerClusterGroup();

    houses.forEach((house) => {
      L.circleMarker(L.latLng(house.lat, house.long)).addTo(
        clusterLayer.current
      );
    });

    map.current.addLayer(clusterLayer.current);
  }, [houses]);

  return (
    <SearchPageWrapper
      key={"searchpagekey"}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <SearchMapNavbar />
      <div style={{ height: "calc(100vh - 8rem)", display: "flex" }}>
        <SearchResultsContainer>
          {searchShow && <SearchResultSidebar />}
        </SearchResultsContainer>
        <SearchMapContainer>
          {
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
              id="mapId"
            />
          }
          <AnimatePresence>
            {visible && zoom > 14 && (
              <SearchMapButton
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                onClick={() => {
                  setVisible(false);
                  setSearchShow(true);
                  setHouses(housess);
                }}
                key={"searchmapbutton"}
              >
                Търсене в района
              </SearchMapButton>
            )}
          </AnimatePresence>
        </SearchMapContainer>
      </div>
    </SearchPageWrapper>
  );
};

export default Search;
