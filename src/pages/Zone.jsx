import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

import Grid from "@mui/material/Unstable_Grid2"; // Import Grid from MUI
import { green } from "@mui/material/colors";
function BasicCard() {
  return (
    <Grid xs={12} md={4} sm={6} lg={3}>
      <Card
        sx={{
          minWidth: 275,
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box sx={{ backgroundColor: "red", paddingY: "0.75rem" }}>
          <Typography
            fontWeight="bold"
            color="white"
            align="center"
            variant="h6"
          >
            Sewer 1
          </Typography>
        </Box>
        <Divider />
        <CardContent sx={{ padding: "1.5rem", textAlign: "center" }}>
          <Typography variant="body1" mb={1}>
            <strong>Level:</strong> 80%
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={1}>
            <strong>Coordinates:</strong> lat 67.243, long 32.434
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={1}>
            <strong>Temp:</strong> 36°
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Humidity:</strong> 5%
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
          <Button size="medium" variant="contained" color="primary">
            View More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Zone() {
  return (
    <div>
      <Grid2 padding={{ xs: "0.5rem" }} spacing={2} container>
        <BasicCard />
        <></>

        <Grid xs={12} md={4} sm={6} lg={3}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: green[500], paddingY: "0.75rem" }}>
              <Typography
                fontWeight="bold"
                color="white"
                align="center"
                variant="h6"
              >
                Sewer 2
              </Typography>
            </Box>
            <Divider />
            <CardContent sx={{ padding: "1.5rem", textAlign: "center" }}>
              <Typography variant="body1" mb={1}>
                <strong>Level:</strong> 30%
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={1}>
                <strong>Coordinates:</strong> lat 23.243, long 26.434
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={1}>
                <strong>Temp:</strong> 30°
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Humidity:</strong> 10%
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
              <Button size="medium" variant="contained" color="primary">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <></>
        <Grid xs={12} md={4} sm={6} lg={3}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: "orange", paddingY: "0.75rem" }}>
              <Typography
                fontWeight="bold"
                color="white"
                align="center"
                variant="h6"
              >
                Sewer 3
              </Typography>
            </Box>
            <Divider />
            <CardContent sx={{ padding: "1.5rem", textAlign: "center" }}>
              <Typography variant="body1" mb={1}>
                <strong>Level:</strong> 60%
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={1}>
                <strong>Coordinates:</strong> lat 71.243, long 46.434
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={1}>
                <strong>Temp:</strong> 37°
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Humidity:</strong> 4%
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
              <Button size="medium" variant="contained" color="primary">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid2>
    </div>
  );
}
