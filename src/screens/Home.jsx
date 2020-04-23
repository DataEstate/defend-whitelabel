// @flow

import React, { useState } from "react";
import classnames from "classnames";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { SmartFilter } from "src/components/Common";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));
export const Home = () => {
  const classes = useStyles();
  const [filter1, setfilter1] = useState('');
  const [filter2, setfilter2] = useState('');
  const [filter3, setfilter3] = useState([]);

  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" }
  ]

  return (
    <div id="HomeScreen">
      <Typography variant="h3">{"This is Home page"}</Typography>

      <SmartFilter
        name="filter1"
        label="Smart Filter"
        placeholder="Make your selection"
        type="text"
        // value={filter1}
        onChange={(x) => console.log(x)}
      />

      <SmartFilter
        name="filter2"
        label="Smart Filter"
        // value={filter2}
        placeholder="Make your selection"
        type="select"
        options={options}
        onChange={(x) => console.log(x)}
      />

      <SmartFilter
        name="filter3"
        label="Smart Filter"
        // value={filter3}
        placeholder="Make your selection"
        type="select"
        options={options}
        onChange={(x) => console.log(x)}
        multiple
      />

    </div>
  );
};

export default Home;
