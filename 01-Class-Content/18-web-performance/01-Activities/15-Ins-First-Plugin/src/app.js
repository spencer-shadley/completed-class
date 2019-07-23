const calculations = require("./calculations");
const Chart = require("chart.js");

const priceEl = document.getElementById("price");
const balanceEl = document.getElementById("balance");
const expenseEl = document.getElementById("expense");
const expensesListEl = document.getElementById("expenses-list");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

var ctx = document.getElementById("myChart").getContext("2d");
const expenseChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [{
      label: "Expense cost in $",
      data: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      text: "Expenses Chart"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

function updateChart(name, price) {
  expenseChart.data.labels.push(name);
  expenseChart.data.datasets.forEach((dataset) => {
    dataset.data.push(price);
  });
  expenseChart.update();
}

function resetChart() {
  expenseChart.data.labels = [];
  expenseChart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  expenseChart.update();
}

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit() {
  const total = calculations.subtract(Number(balanceEl.innerText), priceEl.value);
  balanceEl.innerText = total;
  addToList(expenseEl.value, priceEl.value);
  updateChart(expenseEl.value, priceEl.value);
}

function reset() {
  const total = 2000;
  balanceEl.innerText = total;
  expensesListEl.innerHTML = "";
  resetChart();
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;