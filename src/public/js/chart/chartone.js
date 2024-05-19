const charts = document.querySelectorAll('.chart');
    const percentages = [90, 70, 40];
    const colors = [['#6C9BCF', '#E2E8F0'], ['#F7D060', '#FEEBC8'], ['#FF0060', '#EDF2F7']];
    charts.forEach((chart, index) => {
      const ctx = chart.getContext('2d');
      const progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [percentages[index], 100 - percentages[index]],
            backgroundColor: colors[index],
            borderWidth: 0,
            cutout: '80%'
          }]
        },
        options: {
          circumference: 360,
          rotation: 550,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        }
      });
    });