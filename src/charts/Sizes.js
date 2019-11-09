import React, {useEffect, useState} from "react";
import NVD3Chart from "react-nvd3";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

export const SizesChart = ({data, gap = 100}) => {
  const d = {};
  const [state, setState] = useState(true);

  function DiameterMeters(){
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
  }
  function DiameterKilometers(){
    data.filter(d => {
      return d.estimated_diameter !== undefined;
    }).map(d => d.estimated_diameter.kilometers.estimated_diameter_max)
        .forEach(value => {
          const category = Math.floor(value / gap);
          if (!d[category]) {
            d[category] =  0;
          }
          d[category] = d[category] + 1;
        });
  }
  const datum = [];
  Object.keys(d).forEach(key => {
    datum.push({label: key * gap, value: d[key] });
  });

  const AntSwitch = withStyles(theme => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);
  useEffect(() => {
    if( !state ) {
      DiameterMeters();
    }
    else{
      DiameterKilometers();
    }
  },[state]);
  return (<div>
    <div className="Grafico">
      <Typography>Sizes</Typography>
      <NVD3Chart id="sizesChart" type="discreteBarChart" staggerLabels datum={[{
        key: "Sizes",
        values: datum
      }
      ]} x="label" y="value"/>
    </div>
    <div className="Selector">
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>meters</Grid>
          <Grid item>
            <AntSwitch
                checked={state}
                onChange={event => setState(event.target.checked)}
                value={state}
            />
          </Grid>
          <Grid item>kilometers</Grid>
        </Grid>
      </Typography>
    </div>
  </div>);
};