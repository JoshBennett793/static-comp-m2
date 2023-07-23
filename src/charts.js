import Chart from 'chart.js/auto'

export function ProgressBar(data, type, color) {
  new Chart(document.getElementById(`${type}-progress-bar`), {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [
        {
          data: [data, 4000],
          backgroundColor: [`${color}`, '#dbe4eb'],
          cutout: '85%',
          hoverOffset: 4,
        },
      ],
    },
  });
}

export function BarChart(data) {
  const dates = data.map(row => row.date.split('')[0]);
  new Chart(document.getElementById('past-week-bar-chart'), {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Applicants',
          data: data.map(row => row.applicants),
          backgroundColor: ['#49b8bf'],
        },
        {
          label: 'Interviews',
          data: data.map(row => row.interviews),
          backgroundColor: ['#c9c9c9'],
        },
      ],
    },
  });
}