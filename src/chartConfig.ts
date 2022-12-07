import { plugins } from 'chart.js';

export const data = {
  labels: ['Draft', 'Upload Sukses', 'Upload Gagal', 'Bupot Terlapor'],
  datasets: [
    {
      backgroundColor: ['#DBDBDB', '#43A047', '#D32F2F', '#11AAE2'],
      data: [3, 12, 6, 12],
    },
  ],
  hoverOffset: 4,
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      align: 'center',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    title: {
      display: true,
      text: 'Status Upload',
    },
  },
};
