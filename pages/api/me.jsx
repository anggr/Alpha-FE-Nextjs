import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

import React, { useState, useEffect } from "react";
import * as Components from "../../styles/me.module";
import axios from "axios";
import { Button, TextField } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

import { Title } from "../../styles/me.module";

export default function Me() {
  return (
    <React.Fragment>
      <Grid>
        <Title>About me</Title>
      </Grid>
    </React.Fragment>
  );
}
