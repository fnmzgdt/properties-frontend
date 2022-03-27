import { useState, useEffect, useRef } from "react";
import SearchResultSidebar from "../../Components/SearchResultSidebar/SearchResultSidebar";
import { Map as LeafletMap, TileLayer, latLng } from "leaflet";
import { findDOMNode } from "react-dom";
import { AnimatePresence } from "framer-motion";
import {
  SearchMapButton,
  SearchMapContainer,
  SearchResultsContainer,
  SearchPageWrapper,
} from "./Search.elements";
import SearchMapNavbar from "../../Components/SearchMapNavbar/SearchMapNavbar";

const Search = () => {
  const map = useRef();
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(null);
  const [visible, setVisible] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  console.log(center);

  const dragendHandler = () => {
    setCenter(map.current.getCenter());
    setVisible(true);
  };

  const zoomHandler = () => {
    const currentZoom = map.current.getZoom();
    setZoom(currentZoom);
    if (currentZoom > 14) {
      setVisible(true);
    }
  };

  useEffect(() => {
    const mapNode = findDOMNode(document.getElementById("mapId"));

    if (!mapNode || map.current) {
      return;
    }

    map.current = new LeafletMap(mapNode)
      .setZoom(13)
      .setView(latLng(43.2, 27.91));

    const layer = new TileLayer(
      "https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
      }
    );

    layer.addTo(map.current);

    setCenter(map.current.getCenter());
    setZoom(map.current.getZoom());

    map.current.on("dragend", dragendHandler);
    map.current.on("dragstart", () => setVisible(false));
    map.current.on("zoom", zoomHandler);

    console.log(map.current.getBounds());
  }, []);

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
