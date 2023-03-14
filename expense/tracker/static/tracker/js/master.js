const cats = []
const cat_sums = []

const catSumDiv = document.getElementById('cat-sum-table').getElementsByTagName('div')

for (let i = 0; i < catSumDiv.length; i++) {
    if(i%2 == 1){
        cat_sums.push(catSumDiv[i].innerText.replace("$",""))
    }else{
        cats.push(catSumDiv[i].innerText)
    }
}

console.log(cat_sums)

var ctx_cat = document.getElementById('catChart').getContext('2d');
var catChart = new Chart(ctx_cat, {
    type: 'pie',
    data: {
        labels: cats,
        datasets: [{
            label: 'Expense across categories',
            data: cat_sums,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

const dates = []
const sums = []

const dailySumDiv = document.getElementById('30-day-table').getElementsByTagName('div')

for (let i = 0; i < dailySumDiv.length; i++) {
    if(i%2 == 1){
        sums.push(dailySumDiv[i].innerText.replace("$",""))
    }else{
        dates.push(dailySumDiv[i].innerText)
    }
}


var ctx_daily = document.getElementById('dailyChart').getContext('2d');
var dailyChart = new Chart(ctx_daily, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'Sum of daily expenses',
            data: sums,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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