import { plugins } from 'chart.js';

export const data = {
  labels: ['Draft', 'Upload Sukses', 'Upload Gagal', 'Bupot Terlapor'],
  datasets: [
    {
      backgroundColor: ['#DBDBDB', '#43A047', '#D32F2F', '#11AAE2'],
      // data: [3, 12, 6, 12],
      data: [0, 0, 0, 0],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'right',
      align: 'center',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        usePointStyle: true,
        pointStyle: 'circle',
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {
              labels: { pointStyle },
            } = chart.legend.options;

            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);

              return {
                text: `${label}: ${data['datasets'][0].data[i]}`,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),

                // Extra data used for toggling the correct item
                index: i,
              };
            });
          }
          return [];
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const totalData = context.dataset.data.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
          return `${context.label} (${Math.floor(
            (context.raw / totalData) * 100
          )}%)`;
        },
      },
    },
  },
  hoverOffset: 10,
};
