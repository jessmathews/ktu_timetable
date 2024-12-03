const tableBody = document.getElementById("table-body");
const examsDetails = {
  S5: {
    EE: {
      2019: [
        {
          code: "EET301",
          date: "November 25, 2024 9:30:00",
          name: "Power Systems I",
          id: 1,
        },
        {
          code: "EET303",
          date: "November 28, 2024 9:30:00",
          name: "Microprocessors And Microcontrollers",
          id: 2,
        },
        {
          code: "EET305",
          date: "December 2, 2024 9:30:00",
          name: "Signals And Systems",
          id: 3,
        },
        {
          code: "EET307",
          date: "December 5, 2024 9:30:00",
          name: "Synchronous And Induction Machines",
          id: 4,
        },
        {
          code: "HUT300/HUT310",
          date: "December 7, 2024 9:30:00",
          name: "Industrial Economics And Foreign Trade / Management For Engineers",
          id: 5,
        },
        {
          code: "MCN301",
          date: "December 12, 2024 9:30:00",
          name: "Disaster Management",
          id: 6,
        },
      ],
    },
  },
};

let defaultBranch = "EE";
let defaultSem = localStorage.getItem("sem") || "S5";
let defaultYear = "2019";

function updateTable(sem, branch, year) {
  tableBody.innerHTML = "";

  examsDetails[sem][branch][year].forEach((exam) => {
    var row = document.createElement("tr");
    row.innerHTML = `
            <td>${exam.id}</td>
            <td>${exam.name}</td>
            <td>${exam.code}</td>
            <td>${exam.date}</td>
            <td id="countdown${exam.id}"></td>
        `;
    tableBody.appendChild(row);
    countdown(
      new Date(exam.date).getTime(),
      document.getElementById(`countdown${exam.id}`)
    );
  });
}

function countdown(cdate, dest) {
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = cdate - now;

    if (distance < 0) {
      clearInterval(x);
      dest.innerHTML = "done.";
      return;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dest.innerHTML =
    //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    days + "d " + hours + "h " + minutes + "m ";
  }, 1000);
}

updateTable(defaultSem, defaultBranch, defaultYear);