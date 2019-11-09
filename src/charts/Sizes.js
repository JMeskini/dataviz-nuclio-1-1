import React from "react";
import NVD3Chart from "react-nvd3";
import {Typography} from "@material-ui/core";


export const SizesChart = ({data, gap = 100}) => {
  const d = {};
  data.filter(d => {
    return d.estimated_diameter !== undefined;
  }).map(d => d.estimated_diameter.meters.estimated_diameter_max)
    .forEach(value => {
    const category = Math.floor(value / gap);
    if (!d[category]) {
      d[category] =  0;
    }
    d[category] = d[category] + 1;
  });
  const datum = [];
  Object.keys(d).forEach(key => {
    datum.push({label: key * gap, value: d[key] });
  });
  return (<div>
    <Typography>Sizes</Typography>
      <NVD3Chart id="sizesChart" type="discreteBarChart" staggerLabels datum={[{
          key: "Sizes",
          values: datum
        }
        ]} x="label" y="value"/>
  </div>);
};