import React, {useEffect, useState} from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField";
import {SizesChart} from "./charts/Sizes";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import {NumberChart} from "./charts/Number";

//import data from './datas/small';
import dataP1 from './datas/partial0';
import dataP2 from './datas/partial3000';
import dataP3 from './datas/partial6000';
const data = [...dataP1, ...dataP2, ...dataP3];



const useStyles = makeStyles({
  filters: {
    display: 'flex',
    justifyContent: 'flex-end',
    '&>*:not(:first-child)': {
      marginLeft: 16,
    }
  },
  textFilter:{
    marginTop: 16,
    minWidth: 120,
  },
});

function App() {
  const [filter, setFilter] = useState({year:'2016', hazardous: '-'});
  const [filteredDataset, setFilteredDataset] = useState(data);
  const classes = useStyles();
  useEffect(() => {
    let dataset = data;
    if (filter.year && filter.year.length === 4) { // omit year inputs which do not have 4 digits
      dataset = dataset.filter(x => ((x.orbital_data || {}).first_observation_date || '').startsWith(filter.year));
    }
    if (filter.hazardous === 'Y') {
      dataset = dataset.filter(x => x.is_potentially_hazardous_asteroid === true);
    }
    if (filter.hazardous === 'N') {
      dataset = dataset.filter(x => x.is_potentially_hazardous_asteroid === false);
    }
    setFilteredDataset(dataset);
  }, [filter]);
  return (
    <div className="App">
      <Container>
        <Grid container spacing={3}>
          <Grid lg={12}>
            <div className={classes.filters}>
              <TextField
                id="year-filter"
                label="Year"
                type="number"
                value={filter.year}
                onChange={event => setFilter({...filter, year: event.target.value})}
                margin="normal"
              />
              <FormControl className={classes.textFilter}>
                <InputLabel id="hazardous-filter-label">Hazardous</InputLabel>
                <Select
                  labelId="hazardous-filter-label"
                  id="hazardous-filter"
                  value={filter.hazardous}
                  onChange={event => setFilter({...filter, hazardous: event.target.value})}
                >
                  <MenuItem value="-">&nbsp;</MenuItem>
                  <MenuItem value="Y">Hazardous</MenuItem>
                  <MenuItem value="N">No Hazardous</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <NumberChart data={filteredDataset} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SizesChart data={filteredDataset} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
