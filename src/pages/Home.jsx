import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

function BasicCard() {
  return (
    <Grid2 xs={12} md={4} sm={6} lg={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {"a benevolent smile"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}

export default function Home() {
  return (
    <div>
      <Grid2 spacing={2} container>
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </Grid2>
    </div>
  );
}
