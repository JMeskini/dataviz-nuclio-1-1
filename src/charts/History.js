import React from "react";
import NVD3Chart from "react-nvd3";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
});

export const HistoryChart = ({data, onClick }) => {
  const classes = useStyles();
  const d = {};
  data.filter(d => {
    return d.orbital_data && d.orbital_data.first_observation_date;
  }).map(d => d.orbital_data.first_observation_date)
    .forEach(value => {
    const category = value.split('-')[0];
    if (!d[category]) {
      d[category] =  0;
    }
    d[category] = d[category] + 1;
  });
  const datum = [];
  Object.keys(d).forEach(key => {
    datum.push({x: key, y: d[key] });
  });
  datum.sort((a,b) => a.x.localeCompare(b.x));
  const onRender = args => {
    args.discretebar.dispatch.on('elementClick', (e) => {
      if (onClick) {
        console.log(e.data.x);
        onClick(e.data.x);
      }
    });
  };
  return (<div className={classes.root}>
      <NVD3Chart id="historyChart" type="discreteBarChart" width={800}
                 ready={onRender}
                 showXAxis={false} datum={[{
          key: "History",
          values: datum
        }
        ]}/>
  </div>);
};