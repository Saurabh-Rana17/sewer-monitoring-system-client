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

function BasicCard() {
  return (
    <Grid2 xs={12} md={4} sm={6} lg={3}>
      <Card sx={{ minWidth: 275 }}>
        <Box sx={{ backgroundColor: "Red" }} paddingY={"0.5rem"}>
          <Typography fontWeight={"bold"} color={"white"} align="center">
            Sewer 1
          </Typography>
        </Box>
        <Divider />
        <CardContent>
          <Typography>Level - 80%</Typography>
          <Typography> lat - 67.243 , long - 32.434 </Typography>
          <Typography> Temp - 36° </Typography>
          <Typography> Humidity - 5%</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View More</Button>
        </CardActions>
      </Card>
    </Grid2>
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
