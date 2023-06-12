import maplibregl from "maplibre-gl";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AttributionControl,
  Layer,
  LayerProps,
  Map as MapGL,
  MapLayerMouseEvent,
  Marker,
  NavigationControl,
  Popup,
  Source,
} from "react-map-gl";
import { PageContainer } from "../../components/page-container";
import { fieldData } from "./field-test";
import { ControlPanel } from "../../components/map/control-panel";

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
  const [cursor, setCursor] = useState<string>("auto");

  const [clickInfo, setClickInfo] = useState<{
    longitude: number;
    latitude: number;
  } | null>(null);

  const onClick = useCallback((event: MapLayerMouseEvent) => {
    setClickInfo({ longitude: event.lngLat.lng, latitude: event.lngLat.lat });
  }, []);

  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("auto"), []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.offsetWidth);
  });

  return (
    <PageContainer>
      <div ref={ref}>
        <MapGL
          interactiveLayerIds={["fields"]}
          mapLib={maplibregl}
          initialViewState={{
            longitude: 9.914400733409513,
            latitude: 55.818065069402195,
            zoom: 13,
          }}
          style={{ width: width, height: 400 }}
          mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=P5R8144Hukr6UEEJm5NV`}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          cursor={cursor}
        >
          <NavigationControl />
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
          {clickInfo && (
            <Popup
              longitude={clickInfo.longitude}
              latitude={clickInfo.latitude}
              offset={[0, -10]}
              closeButton={false}
              onClose={() => setClickInfo(null)}
            >
              {clickInfo.longitude} - {clickInfo.latitude}
            </Popup>
          )}
        </MapGL>
      </div>
    </PageContainer>
  );
};
