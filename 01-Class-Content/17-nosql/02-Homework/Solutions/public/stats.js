// get all workout data from back-end
fetch("/api/workouts")
  .then(response => {
    return response.json();
  })
  .then(data => {
    populateChart(data);
  });

function populateChart(data) {
  const durations = duration(data);
  const pounds = benchPress(data);
  const workouts = workoutNames(data);
  const line = document.querySelector("#canvas").getContext("2d");
  const bar = document.querySelector("#canvas2").getContext("2d");
  const pie = document.querySelector("#canvas3").getContext("2d");
  const pie2 = document.querySelector("#canvas4").getContext("2d");

  const lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      datasets: [
        {
          label: "Workout Duration In Minutes",
          backgroundColor: "red",
          borderColor: "red",
          data: durations,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });
  const barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      datasets: [
        {
          label: "Bench Press",
          data: pounds,
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
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
  const pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: ["Bench Press", "Running", "Dead Lifts", "Squats", "Rowing"],
      datasets: [
        {
          label: "Exercises Performed",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850"
          ],
          data: workouts
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Exercises Performed"
      }
    }
  });
  const donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
      labels: ["Bench Press", "Running", "Dead Lifts", "Squats", "Rowing"],
      datasets: [
        {
          label: "Exercises Performed",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850"
          ],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Exercises Performed"
      }
    }
  });
}

function duration(data) {
  var durations = [];
  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      durations.push(exercise.duration);
    });
  });
  return durations;
}

function benchPress(data) {
  var bench = [];
  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      bench.push(exercise.weight);
    });
  });
  return bench;
}

function workoutNames(data) {
  var workouts = [];
  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      workouts.push(exercise.name);
    });
  });
  return workouts;
}
