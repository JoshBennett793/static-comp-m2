import Chart from 'chart.js/auto'

export function ProgressBar(data, type, color) {
  new Chart(document.getElementById(`${type}-progress-bar`), {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [
        {
          data: [data, 4000],
          backgroundColor: [`${color}`, '#c9c9c9'],
          color: 'rgb(255,0,152)',
          cutout: '80%',
          hoverOffset: 4,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: '#e9c4e0',
          },
        },
      },
    },
  });
}
