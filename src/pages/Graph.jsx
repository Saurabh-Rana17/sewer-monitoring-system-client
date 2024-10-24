import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  BarChart,
  LineChart,
  pieArcLabelClasses,
  PieChart,
  SparkLineChart,
} from "@mui/x-charts";
import { useEffect, useState } from "react";

function SimpleCharts({ data }) {
  return (
    <BarChart
      tooltip={{}}
      xAxis={[
        {
          id: "barCategories",
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [0.5, 0.3, 0.1, 0.1, 0.2, 0, 0, 0, 0, data, 0, 0],
        },
      ]}
      width={1000}
      height={500}
    />
  );
}

function BasicLineChart() {
  return (
    <LineChart
      onAxisClick={() => console.log("first")}
      disableAxisListener
      disableLineItemHighlight
      xAxis={[
        {
          data: [
            3, 5, 4, 6, 3, 4, 2, 5, 3, 6, 4, 7, 3, 6, 7, 4, 3, 6, 7, 4, 5, 3, 6,
            4, 5, 3, 4, 6, 3, 2, 5, 4, 3, 2, 6, 4, 5, 6, 3, 2, 5, 1, 2,
          ],
        },
      ]}
      series={[
        {
          data: [1, 2],
        },
      ]}
      width={500}
      height={300}
      tooltip={{}}
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

// function PieArcLabel() {
//   return (
//     <PieChart
//       tooltip={{}}
//       series={[
//         {
//           arcLabel: (item) => `${item.label} (${item.value})`,
//           arcLabelMinAngle: 45,
//           data,
//         },
//       ]}
//       sx={{
//         [`& .${pieArcLabelClasses.root}`]: {
//           fill: "white",
//           fontWeight: "bold",
//         },
//       }}
//       {...size}
//     />
//   );
// }

export default function Graph() {
  const [data, setData] = useState(null);
  const [hist, setHist] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/events");

    eventSource.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      const arr = Object.values(updatedData);
      const last = arr.slice(-20);
      setHist(last);
      const average = arr.reduce((acc, val) => acc + val, 0) / arr.length;

      setData(average * 10);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  console.log(data);

  return (
    <>
      <Typography variant="h5" align="center">
        Sewer's Data
      </Typography>
      <Grid padding={{ xs: "0.5rem" }} container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleCharts data={data} />
        </Grid>
        <Box border={1} borderColor={"black"}>
          <SparkLineChart
            data={hist}
            yAxis={{
              min: -1,
              max: 2,
            }}
            height={400}
            width={1000}
            showHighlight={true}
            showTooltip={true}
          />
        </Box>
      </Grid>
    </>
  );
}
