import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainNode() {
  const navigate = useNavigate();
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
            Total Sewers: 1
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Box
              sx={{
                backgroundColor: "red",
                paddingX: "1rem",
                paddingY: "0.5rem",
                borderRadius: 2,
              }}
            >
              <Typography color="white" fontWeight="bold">
                Critical: 0
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
  );
}
