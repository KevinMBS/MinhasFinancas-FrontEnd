google.charts.load('current', { packages: [ 'corechart' ] })
google.charts.setOnLoadCallback(desenharGraficoGastosUltimoMes)

function desenharGraficoGastosUltimoMes() {
    const container = document.querySelector('#slot1')
    const data = new google.visualization.arrayToDataTable([
        [ 'Categoria', 'Valor'],
        [ 'Combustível', 10000],
        [ 'Alimentação', 9000],
        [ 'Hobbies', 8000],
        [ 'Médico', 5000],
        [ 'Ensino', 2000]
    ])
    const options = {
        title: 'Gastos Ultimo Mês',
        prefix: 'R$',
        width: '100%',
    }
    const chart = new google.visualization.PieChart(container)
    chart.draw(data, options)
}