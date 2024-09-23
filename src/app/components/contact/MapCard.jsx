"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing icon
import "leaflet/dist/leaflet.css";

const MapCard = () => {
  const position = [21.233851505046704, 72.86425873793388]; // Your desired location

  useEffect(() => {
    if (typeof window !== "undefined") {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/images/icons/google_map_icon.png",
        iconUrl: "/images/icons/google_map_icon.png",
        shadowUrl: "/images/icons/google_map_icon.png",
      });
    }
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaMapMarkerAlt
              style={{ marginRight: "8px", fontSize: "20px", color: "#FF6347" }}
            />
            Native Infotech
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapCard;
