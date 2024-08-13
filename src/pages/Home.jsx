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
import { useNavigate } from "react-router-dom";

function BasicCard() {
  const navigate = useNavigate();
  return (
    <Grid2 xs={12} md={4} sm={6} lg={3}>
      <Card sx={{ minWidth: 275 }}>
        <Box sx={{ backgroundColor: "#3f50b5" }} paddingY={"0.5rem"}>
          <Typography fontWeight={"bold"} color={"white"} align="center">
            Zone 1
          </Typography>
        </Box>
        <Divider />
        <CardContent>
          <Typography fontWeight="medium">Total Sewers : 3</Typography>
          <Typography
            color={"white"}
            display={"inline-block"}
            paddingX={"1rem"}
            paddingY={"0.1rem"}
            borderRadius={5}
            marginBottom={1}
            sx={{ backgroundColor: "red" }}
          >
            Critical : 1
          </Typography>
          <br />
          <Typography
            color={"white"}
            display={"inline-block"}
            paddingX={"1rem"}
            paddingY={"0.1rem"}
            borderRadius={5}
            sx={{ backgroundColor: "orange" }}
          >
            Warning : 1
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => navigate("/home/zone1")} size="small">
            View More
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Grid2 padding={{ xs: "0.5rem" }} spacing={2} container>
        <Grid2 xs={12} md={4} sm={6} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ backgroundColor: "green" }} paddingY={"0.5rem"}>
              <Typography fontWeight={"bold"} color={"white"} align="center">
                Zone 1
              </Typography>
            </Box>
            <Divider />
            <CardContent>
              <Typography mb={"1rem"} fontWeight="medium">
                Total Sewers : 3
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                marginBottom={1}
                sx={{ backgroundColor: "red" }}
              >
                Critical : 1
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-  block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                sx={{ backgroundColor: "orange" }}
              >
                Warning : 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate("/home/zone1")} size="small">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 xs={12} md={4} sm={6} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ backgroundColor: "green" }} paddingY={"0.5rem"}>
              <Typography fontWeight={"bold"} color={"white"} align="center">
                Zone 1
              </Typography>
            </Box>
            <Divider />
            <CardContent>
              <Typography mb={"1rem"} fontWeight="medium">
                Total Sewers : 3
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                marginBottom={1}
                sx={{ backgroundColor: "red" }}
              >
                Critical : 1
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-  block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                sx={{ backgroundColor: "orange" }}
              >
                Warning : 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate("/home/zone1")} size="small">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 xs={12} md={4} sm={6} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ backgroundColor: "green" }} paddingY={"0.5rem"}>
              <Typography fontWeight={"bold"} color={"white"} align="center">
                Zone 1
              </Typography>
            </Box>
            <Divider />
            <CardContent>
              <Typography mb={"1rem"} fontWeight="medium">
                Total Sewers : 3
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                marginBottom={1}
                sx={{ backgroundColor: "red" }}
              >
                Critical : 1
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-  block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                sx={{ backgroundColor: "orange" }}
              >
                Warning : 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate("/home/zone1")} size="small">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 xs={12} md={4} sm={6} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ backgroundColor: "green" }} paddingY={"0.5rem"}>
              <Typography fontWeight={"bold"} color={"white"} align="center">
                Zone 1
              </Typography>
            </Box>
            <Divider />
            <CardContent>
              <Typography mb={"1rem"} fontWeight="medium">
                Total Sewers : 3
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                marginBottom={1}
                sx={{ backgroundColor: "red" }}
              >
                Critical : 1
              </Typography>
              <Typography
                color={"white"}
                // display={"inline-  block"}
                paddingX={"1rem"}
                paddingY={"0.5rem"}
                borderRadius={5}
                sx={{ backgroundColor: "orange" }}
              >
                Warning : 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate("/home/zone1")} size="small">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
}
