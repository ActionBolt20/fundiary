document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndRenderChart();
});

function submitData() {
    const budget = document.getElementById('budget').value;
    const expenditure = document.getElementById('expenditure').value;

    // Here, you would send this data to the server (via API call) for storage in a database.

    // For simplicity, let's assume the data is saved successfully and then re-fetch and render the chart.
    fetchDataAndRenderChart();
}

function fetchDataAndRenderChart() {
    // Here, you would make an API call to the server to fetch the user's data from the database.
    // For simplicity, let's assume the data is retrieved successfully.

    // Mock data for demonstration purposes
    const months = ['January', 'February', 'March', 'April', 'May', 'June'];
    const expenditures = [500, 600, 450, 700, 800, 550];

    renderChart(months, expenditures);
}

function renderChart(labels, data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Expenditure',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
