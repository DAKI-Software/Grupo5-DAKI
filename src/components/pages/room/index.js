import React from "react";

// UI Elements
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AppTasks from "../../layouts/DefaultInternal/ToDo";

// Layout
import InternalLayout from "../../layouts/DefaultInternal";

function Room() {
  return (
    <InternalLayout>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
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
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            Herramientas
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            Pomodoro
          </Paper>
        </Grid>
      </Grid>
    </InternalLayout>
  );
}

export default Room;
