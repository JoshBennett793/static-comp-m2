import "../stylesheets/main.scss"

import { ProgressBar, BarChart } from './charts';
import { data } from './data';

window.onload = () => {
  ProgressBar(3154, 'applicants', '#49b8bf');
  ProgressBar(1546, 'interviews', '#16a3f9');
  ProgressBar(912, 'forwards', '#b172ac');
  BarChart(data);
}
