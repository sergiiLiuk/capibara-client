import React from "react";
import { Map as MapGL, NavigationControl } from "react-map-gl";
import { PageContainer } from "../../components/page-container";
import maplibregl from "maplibre-gl";

export const Map = () => {
  return (
    <PageContainer>
      <MapGL
        mapLib={maplibregl}
        initialViewState={{
          longitude: 9.924400733409513,
          latitude: 55.818065069402195,
          zoom: 15,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=P5R8144Hukr6UEEJm5NV`}
      >
        <NavigationControl position="top-left" />
      </MapGL>
    </PageContainer>
  );
};
