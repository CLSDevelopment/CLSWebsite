import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { WaveSvg } from "../WaveSvg/WaveSvg";

import "./Wave.scss";

type WaveType = {
  colorFirstWave?: string;
  colorSecoundWave?: string;
  direction?: string;
};

export const Wave: React.FC<WaveType> = ({
  colorFirstWave,
  colorSecoundWave,
  direction
}) => {
  const waveFirst = encodeURIComponent(
    renderToStaticMarkup(
      <WaveSvg color={colorFirstWave} />
    )
  );

  const waveSecound = encodeURIComponent(
    renderToStaticMarkup(
      <WaveSvg color={colorSecoundWave} />
    )
  );

  return (
    <div className="container--ocean" style={{transform: `rotate(${direction}deg)`}}>
      {colorFirstWave && (
        <div
          className="wave"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${waveFirst}")`,
          }}
        ></div>
      )}

      {colorSecoundWave && (
        <div
          className="wave"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${waveSecound}")`,
          }}
        ></div>
      )}
    </div>
  );
};
