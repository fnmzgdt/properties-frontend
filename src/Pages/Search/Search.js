import { useState, useEffect, useRef } from "react";
import SearchNavbar from "../../Components/SearchNavbar/SearchNavbar";
import {Map as LeafletMap, TileLayer, latLng} from "leaflet";
import {findDOMNode} from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const Search = () => {
  const map = useRef();
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(null);
  const [visible, setVisible] = useState(false);

  console.log(center)

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

    map.current = new LeafletMap(mapNode).setZoom(13).setView(latLng(43.2, 27.91));

    const layer = new TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
    });

    layer.addTo(map.current)

    setCenter(map.current.getCenter());
    setZoom(map.current.getZoom());

    map.current.on("dragend", dragendHandler);
    map.current.on("dragstart", () => setVisible(false));
    map.current.on("zoom", zoomHandler);

    console.log(map.current.getBounds());
  }, []);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 3.5rem)",
        margin: "0 auto",
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <SearchNavbar />
      <div style={{ width: "100%", minHeight: "100%", position: "relative" }}>
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
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              style={{
                position: "absolute",
                left: "45%",
                top: "7%",
                zIndex: "401",
                width: "12rem",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                borderRadius: "1rem",
                height: "3rem",
                padding: "0.5rem 1rem",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
                fontWeight: "500",
              }}
            >
              Търсене в района
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Search;
