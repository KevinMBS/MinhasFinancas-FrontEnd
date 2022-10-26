google.charts.load('current', { packages: [ 'corechart' ] })
google.charts.setOnLoadCallback(drawAllIndexGrapshcs)
//window.addEventListener("resize", drawAllIndexGrapshcs)
//Linha acima funciona só para aumento de tela e não para dimnuição


function drawAllIndexGrapshcs(){
    drawLastMonthPercentageGraphc()
    drawBalanceGraphcs()
}

function drawLastMonthPercentageGraphc() {
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
        width: '100%',
    }
    const chart = new google.visualization.PieChart(container)
    chart.draw(data, options)
}

function drawBalanceGraphcs() {
    const container = document.querySelector('#slot3')
    const data = new google.visualization.arrayToDataTable([
        [ 'Mes', 'Conta 1', 'Conta 2' ],
        [ 'Janeiro', 10000, 3000],
        [ 'Fevereiro', 9000, 2000 ],
        [ 'Março', 8000, 4000 ],
        [ 'Abril', 5000, 3500 ],
        [ 'Maio', 2000, 5000 ]
    ])
    const options = {
        title: 'Evolução saldos',
        prefix: 'R$'
    }
    const chart = new google.visualization.LineChart(container)
    chart.draw(data, options)
}