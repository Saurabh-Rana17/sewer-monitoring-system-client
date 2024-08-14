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
        <Grid2 xs={12} md={4} sm={6} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ backgroundColor: "green" }} paddingY={"0.5rem"}>
              <Typography fontWeight={"bold"} color={"white"} align="center">
                Sewer 2
              </Typography>
            </Box>
            <Divider />
            <CardContent>
              <Typography>Level - 70%</Typography>
              <Typography> lat - 67.243 , long - 32.434 </Typography>
              <Typography> Temp - 36° </Typography>
              <Typography> Humidity - 5%</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
        </Grid2>
        <></>
        <Grid2 xs={12} md={4} sm={6} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ backgroundColor: "orange" }} paddingY={"0.5rem"}>
              <Typography fontWeight={"bold"} color={"white"} align="center">
                Sewer 3
              </Typography>
            </Box>
            <Divider />
            <CardContent>
              <Typography>Level - 60%</Typography>
              <Typography> lat - 67.243 , long - 32.434 </Typography>
              <Typography> Temp - 36° </Typography>
              <Typography> Humidity - 5%</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
}
