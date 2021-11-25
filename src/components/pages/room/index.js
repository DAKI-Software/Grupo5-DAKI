import React from "react";

// UI Elements
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AppTasks from "../../layouts/DefaultInternal/ToDo";
import Temporizador from "../../layouts/DefaultInternal/Temporizador";
// Layout
import InternalLayout from "../../layouts/DefaultInternal";

import ReactAudioPlayer from "react-audio-player";

function Room() {
  return (
    <InternalLayout>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            To-Do
            <AppTasks />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            Herramientas
            <ReactAudioPlayer src="Canon.mp3" autoPlay controls />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            Pomodoro
            <Temporizador />
          </Paper>
        </Grid>
      </Grid>
    </InternalLayout>
  );
}

export default Room;
