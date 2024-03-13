import { useEffect, useState } from "react";

import styles from "@/components/graph.module.scss";
import variables from "@/app/variables.module.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {data} from "@/constant/data";
import { useAppSelector } from "@/store/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const options = {
  maintainAspectRatio : false
};

export default function Graph() {
  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<number[]>([]);
  const { dataSetState } = useAppSelector(state => state.controllerReducer);

  useEffect(() => {
    initGraphData(dataSetState)
  }, [dataSetState])

  const initGraphData = (dataset: string) => {
    let tempLabel: string[] = [];
    let tempDataset: number[] = []
    for (const key in data.weekly) {
      tempLabel.push(key)
      tempDataset.push(data.weekly[key as keyof object][dataset])
    }
    setLabels(tempLabel)
    setDataset(tempDataset)
  }

  const graphData = {
    labels,
    datasets: [
      {
        data: dataset,
        borderColor: variables.primaryColor,
        backgroundColor: variables.primaryColor,
      },
    ],
  };
  return (
    <div className={styles.graph}>
      <Line options={options} data={graphData} />
    </div>
  );
}
