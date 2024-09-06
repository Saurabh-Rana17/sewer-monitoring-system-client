import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  BarChart,
  LineChart,
  pieArcLabelClasses,
  PieChart,
} from "@mui/x-charts";

function SimpleCharts() {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: [
            "monday",
            "tuesday",
            "W'day",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [2, 4, 3, 1, 3.5, 3, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
}

function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
}

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const size = {
  width: 400,
  height: 200,
};

function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
        },
      }}
      {...size}
    />
  );
}

export default function Graph() {
  return (
    <>
      <Typography variant="h5" align="center">
        Sewer's Data
      </Typography>
      <Grid padding={{ xs: "0.5rem" }} container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleCharts />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <BasicLineChart />
        </Grid>
        {/* <Grid size={{ xs: 12, md: 6 }}> */}
        <PieArcLabel />
        {/* </Grid> */}
      </Grid>
    </>
  );
}
