import React from "react";
import NVD3Chart from "react-nvd3";
import {Typography} from "@material-ui/core";


export const NumberChart = ({data, gap = 100, aggregate = data => data.length }) => {
  return (<div>
    <Typography>Count</Typography>
    <Typography variant="h1">{aggregate(data)}</Typography>
  </div>);
};