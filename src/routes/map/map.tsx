import maplibregl from "maplibre-gl";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Layer, LayerProps, Map as MapGL, Marker, Source } from "react-map-gl";
import { PageContainer } from "../../components/page-container";
import { fieldData } from "./field-test";

const polygonStyle: LayerProps = {
  id: "maine",
  type: "fill",
  source: "maine",
  layout: {},
  paint: {
    "fill-color": "#088",
    "fill-opacity": 0.3,
  },
};

const borderStyle: LayerProps = {
  id: "state-borders",
  type: "line",
  source: "states",
  layout: {},
  paint: {
    "line-color": "#627BC1",
    "line-width": 2,
  },
};

export const Map = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.offsetWidth);
  });

  return (
    <PageContainer>
      <div ref={ref}>
        <MapGL
          mapLib={maplibregl}
          initialViewState={{
            longitude: 9.914400733409513,
            latitude: 55.818065069402195,
            zoom: 13,
          }}
          style={{ width: width, height: 400 }}
          mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=P5R8144Hukr6UEEJm5NV`}
        >
          <Source id="my-data" type="geojson" data={fieldData as any}>
            <Layer {...polygonStyle} />
            <Layer {...borderStyle} />
          </Source>
          <Marker
            offset={[0, 0]}
            longitude={9.924400733409513}
            latitude={55.818065069402195}
          >
            <FaMapMarkerAlt width={25} className="text-blue-600" />
          </Marker>
        </MapGL>
      </div>
    </PageContainer>
  );
};
