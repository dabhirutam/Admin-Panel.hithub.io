$(document).ready(function () {
    // chart js
    const upadate = document.getElementById('upadate');

    new Chart(upadate, {
        type: 'bar',
        data: {
            labels: [, , , , , 16, , , , , , 17, , , , , , 18, , , , , 19, , , , , 20, , , , 21, 22],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [, , , , , 1.5, , , , , , 2.7, , , , , , 2.2, , , , , 3.6, , , , , 1.5, , , , , 1.0],
                    fill: true,
                    backgroundColor: "#5d87ff",
                    borderRadius: 30,
                },
                {
                    label: 'Dataset 1',
                    data: [, , , , , -1.8, , , , , , -1.1, , , , , , -2.5, , , , , -1.5, , , , , -0.6, , , , , -1.7],
                    fill: true,
                    backgroundColor: "#49beff",
                    borderRadius: 30,
                },
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Chart.js Bar Chart - Stacked',
                },
                legend: {
                    position: 'none',
                    tooltips: false,
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    stacked: true
                }
            }
        }
    });

    const upadate2 = document.getElementById('upadate2');

    new Chart(upadate2, {
        type: 'bar',
        data: {
            labels: [, , , , , 16, , , , , , 17, , , , , , 18, , , , , 19, , , , , 20, , , , 21, 22],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [, , , , , 1.5, , , , , , 2.7, , , , , , 2.2, , , , , 3.6, , , , , 1.5, , , , , 1.0],
                    fill: true,
                    backgroundColor: "#5d87ff",
                    borderRadius: 30,
                },
                {
                    label: 'Dataset 1',
                    data: [, , , , , -1.8, , , , , , -1.1, , , , , , -2.5, , , , , -1.5, , , , , -0.6, , , , , -1.7],
                    fill: true,
                    backgroundColor: "#49beff",
                    borderRadius: 30,
                },
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Chart.js Bar Chart - Stacked',
                },
                legend: {
                    position: 'none',
                    tooltips: false,
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    stacked: true
                }
            }
        }
    });

    const yearly = document.getElementById('yearly');

    new Chart(yearly, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [30, 26, 27],
                    backgroundColor: ['#5d87ff', '#5d87ff1a', '#f8f8f8b2'],
                },
                {
                    label: 'Dataset 2',
                    data: [30],
                    backgroundColor: "transparent",
                },
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'none',
                    tooltips: false,
                },
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
        },
    });

    const employs = document.getElementById('employs');

    new Chart(employs, {
        type: 'bar',
        data: {
            labels: [, , , , 'Apr', , , 'may', , , 'June', , , 'July', , , 'Aug', , 'Sept', , , ,],
            datasets: [
                {
                    label: 'Fully Rounded',
                    data: [, , , , 20, , , 15, , , 30, , , 25, , , 10, , 15],
                    backgroundColor: [, , , , '#5d87ff1a', , , '#5d87ff1a', , , '#5d87ff', , , '#5d87ff1a', , , '#5d87ff1a', , '#5d87ff1a'],
                    borderRadius: 7,
                    borderSkipped: false,
                },
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'none',
                    tooltips: false,
                },
            },
            scales: {
                x: {
                    // display: false, 
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
        },
    });

    const project = document.getElementById('project');

    new Chart(project, {
        type: 'bar',
        data: {
            labels: [, 2, , , 4, , , 3, , , 2, , , 1, , , 5, , , 5, , , 5, , , 4, , 4, ,],
            datasets: [
                {
                    label: 'Fully Rounded',
                    data: [, 4, , , 10, , , 9, , , 7, , , 9, , , 10, , , 11, , , 8, , , 10, , 9],
                    backgroundColor: "#5d87ff",
                    borderRadius: 7,
                    borderSkipped: false,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'none',
                    tooltips: false,
                },
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
        },
    });

    // ApexCharts js

    var stats = {
        series: [{
            name: 'series1',
            data: [30, 25, 35, 20, 30, 40]
        }],
        chart: {
            height: 100,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ["#49beff"],
        xaxis: {
            // type: 'datetime',
            categories: ["1", "1", "1", "1", "1", "1"],
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
    };

    var custmer = new ApexCharts(document.querySelector("#custmer"), stats);
    custmer.render();

    var stats = {
        series: [{
            name: 'series1',
            data: [25, 66, 20, 40, 12, 58, 20]
        }],
        chart: {
            height: 100,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ["#49beff"],
        xaxis: {
            // type: 'datetime',
            categories: ["1", "1", "1", "1", "1", "1", "1"],
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
    };

    var monthly = new ApexCharts(document.querySelector("#monthly"), stats);
    monthly.render();

    var stats = {
        series: [{
            name: 'series1',
            data: [5, 15, 10, 20]
        }],
        chart: {
            height: 200,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ["#5d87ff"],
        xaxis: {
            // type: 'datetime',
            categories: ["1", "1", "1", "1"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
    };

    var stats = new ApexCharts(document.querySelector("#stats"), stats);
    stats.render();
});