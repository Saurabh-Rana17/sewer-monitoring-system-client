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
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Import Grid from MUI
import { green } from "@mui/material/colors";
import GaugeComponent from "react-gauge-component";
import { useNavigate } from "react-router-dom";

const getColor = (data) => {
  if (data > 75) return "#EA4228";
  if (data > 50) return "#F58B19";
  if (data > 25) return "#b7eb34";
  if (data > 0) return "#5BE12C";
};

function BasicCard() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/graph");
  }
  const [data, setData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/events");

    eventSource.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      const arr = Object.values(updatedData);
      // console.log(arr[arr.length - 1]);
      const val = Math.floor(arr[arr.length - 1] * 100);
      const random = Math.random() * 10;
      if (random > 4) {
        setData(Math.floor(Math.random() * 5 + 4));
      } else if (random < 4) {
        setData(Math.floor(Math.random() * 15 + 45));
      } else {
        setData(val);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  console.log(data, "rendering", getColor(data));

  return (
    <Grid xs={12} md={4} sm={6} lg={3}>
      <Card
        sx={{
          height: "100%",
          minWidth: 275,
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box sx={{ backgroundColor: getColor(data), paddingY: "0.75rem" }}>
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
          <div>
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 25,
                    color: "#5BE12C",
                    showTick: true,
                  },
                  {
                    limit: 50,
                    color: "#b7eb34",
                    showTick: true,
                  },
                  {
                    limit: 75,
                    color: "#F58B19",
                    showTick: true,
                  },
                  {
                    limit: 100,
                    color: "#EA4228",
                    showTick: true,
                  },
                ],
              }}
              value={data}
            />
          </div>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
          <Button
            onClick={handleClick}
            size="medium"
            variant="contained"
            color="primary"
          >
            View More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Zone() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/graph");
  }
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
            <Box sx={{ backgroundColor: "#5BE12C", paddingY: "0.75rem" }}>
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
              <div>
                <GaugeComponent
                  arc={{
                    subArcs: [
                      {
                        limit: 25,
                        color: "#5BE12C",
                        showTick: true,
                      },
                      {
                        limit: 50,
                        color: "#F5CD19",
                        showTick: true,
                      },
                      {
                        limit: 75,
                        color: "#F58B19",
                        showTick: true,
                      },
                      {
                        limit: 100,
                        color: "#EA4228",
                        showTick: true,
                      },
                    ],
                  }}
                  value={15}
                />
              </div>
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
              <Button
                onClick={handleClick}
                size="medium"
                variant="contained"
                color="primary"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* new */}
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
                Sewer 3
              </Typography>
            </Box>
            <Divider />
            <CardContent sx={{ padding: "1.5rem", textAlign: "center" }}>
              <div>
                <GaugeComponent
                  arc={{
                    subArcs: [
                      {
                        limit: 25,
                        color: "#5BE12C",
                        showTick: true,
                      },
                      {
                        limit: 50,
                        color: "#F5CD19",
                        showTick: true,
                      },
                      {
                        limit: 75,
                        color: "#F58B19",
                        showTick: true,
                      },
                      {
                        limit: 100,
                        color: "#EA4228",
                        showTick: true,
                      },
                    ],
                  }}
                  value={85}
                />
              </div>
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
              <Button
                onClick={handleClick}
                size="medium"
                variant="contained"
                color="primary"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid2>
    </div>
  );
}
