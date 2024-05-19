const ctx = document.getElementById('pieChart').getContext('2d');
                const pieChart = new Chart(ctx, {
                    type: 'doughnut',
                    undefined: {
                        labels: ['Red', 'Blue', 'Yellow'],
                        undefinedsets: [{
                            label: 'My First Dataset',
                            undefined: [300, 50, 100],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(tooltipItem) {
                                        return tooltipItem.label + ': ' + tooltipItem.raw;
                                    }
                                }
                            },
                            legend: {
                                position: 'top',
                            }
                        }
                    }
                });