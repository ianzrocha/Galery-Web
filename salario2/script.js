function calculate() {
    var Salário = parseFloat(document.getElementById("Salário").value);
    var outrosSalário = parseFloat(document.getElementById("outrosSalário").value);
    var Despesas = parseFloat(document.getElementById("Despesas").value);
    var investimentos = parseFloat(document.getElementById("investimentos").value);
    
    var totalSalário = Salário + outrosSalário;
    var savings = totalSalário - Despesas - investimentos;
    
    document.getElementById("displaySalário").textContent = totalSalário.toFixed(2);
    document.getElementById("displayoutrosSalário").textContent = outrosSalário.toFixed(2);
    document.getElementById("displayDespesas").textContent = Despesas.toFixed(2);
    document.getElementById("displayinvestimentos").textContent = investimentos.toFixed(2);
    document.getElementById("displaySavings").textContent = savings.toFixed(2);
    
    updateChart(totalSalário, Despesas, investimentos);
}

function updateChart(Salário, Despesas, investimentos) {
    var ctx = document.getElementById('Gráfico').getContext('2d');
    
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Receitas', 'Despesas', 'Investimentos'],
            datasets: [{
                label: 'Valores',
                data: [Salário, Despesas, investimentos],
                backgroundColor: [
                    'rgba(75, 192, 75, 0.6)',
                    'rgba(192, 75, 75, 0.6)',
                    'rgba(75, 75, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 75, 1)',
                    'rgba(192, 75, 75, 1)',
                    'rgba(75, 75, 192, 1)'
                ],
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