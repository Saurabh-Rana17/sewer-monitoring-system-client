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
import Grid from "@mui/material/Unstable_Grid2"; // Import Grid from MUI
import { blue, teal } from "@mui/material/colors";

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
        <Grid xs={12} md={4} sm={6} lg={3}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: "#3949ab", paddingY: "0.75rem" }}>
              <Typography
                fontWeight="bold"
                color="white"
                align="center"
                variant="h6"
              >
                Zone 1
              </Typography>
            </Box>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography mb={2} fontWeight="medium" variant="body1">
                Total Sewers: 3
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Critical: 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "orange",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Warning: 1
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
              <Button
                onClick={() => navigate("/home/zone1")}
                size="medium"
                variant="contained"
                color="primary"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} md={4} sm={6} lg={3}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: "#f4511e", paddingY: "0.75rem" }}>
              <Typography
                fontWeight="bold"
                color="white"
                align="center"
                variant="h6"
              >
                Zone 2
              </Typography>
            </Box>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography mb={2} fontWeight="medium" variant="body1">
                Total Sewers: 3
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Critical: 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "orange",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Warning: 1
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
              <Button
                onClick={() => navigate("/home/zone1")}
                size="medium"
                variant="contained"
                color="primary"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} md={4} sm={6} lg={3}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: "#43a047", paddingY: "0.75rem" }}>
              <Typography
                fontWeight="bold"
                color="white"
                align="center"
                variant="h6"
              >
                Zone 3
              </Typography>
            </Box>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography mb={2} fontWeight="medium" variant="body1">
                Total Sewers: 3
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Critical: 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "orange",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Warning: 1
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
              <Button
                onClick={() => navigate("/home/zone1")}
                size="medium"
                variant="contained"
                color="primary"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid xs={12} md={4} sm={6} lg={3}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: "#00acc1", paddingY: "0.75rem" }}>
              <Typography
                fontWeight="bold"
                color="white"
                align="center"
                variant="h6"
              >
                Zone 4
              </Typography>
            </Box>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography mb={2} fontWeight="medium" variant="body1">
                Total Sewers: 3
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Critical: 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "orange",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Warning: 1
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
              <Button
                onClick={() => navigate("/home/zone1")}
                size="medium"
                variant="contained"
                color="primary"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* <Grid xs={12} md={4} sm={6} lg={3}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: "#00796b", paddingY: "0.75rem" }}>
              <Typography
                fontWeight="bold"
                color="white"
                align="center"
                variant="h6"
              >
                Zone 1
              </Typography>
            </Box>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography mb={2} fontWeight="medium" variant="body1">
                Total Sewers: 3
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Critical: 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "orange",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="white" fontWeight="bold">
                    Warning: 1
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
              <Button
                onClick={() => navigate("/home/zone1")}
                size="medium"
                variant="contained"
                color="primary"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Grid2>
    </div>
  );
}
