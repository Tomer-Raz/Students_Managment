// Creating the function for getting the studends

async function getStudents() {

    const resp = await fetch("http://localhost:8000/students")
    if (resp.ok === true) {
        const students = await resp.json();

        students.forEach(student => {

            const tableEl = document.getElementById("table")
            const tbodyEl = document.getElementById("tbody")

            const newTr = document.createElement("tr");
            newTr.id = student._id

            const studentNameTd = document.createElement("td");
            studentNameTd.id = student._id

            const studentNameA = document.createElement("a");
            studentNameA.addEventListener("click", () => {
                sessionStorage.setItem("id", newTr.id)
            })
            const studentFacultyTd = document.createElement("td");
            const GradesTd = document.createElement("td");

            const GradesEl = document.createElement("input");
            GradesEl.addEventListener("click", () => {
                sessionStorage.setItem("id", newTr.id);
            })
            const editTd = document.createElement("td");
            const editEl = document.createElement("input");
            const deleteTd = document.createElement("td");
            const deleteEl = document.createElement("input");

            // add attributes to created elements

            const studentId = student._id;

            studentNameA.innerText = student.fullName
            studentNameA.href = "studentData.html"
            studentFacultyTd.innerText = student.faculty

            GradesEl.setAttribute("type", "button")
            GradesEl.setAttribute("value", "View Grades")
            GradesEl.setAttribute("onclick", "moveToGrades()")

            editEl.setAttribute("type", "button")
            editEl.setAttribute("value", "Edit")
            editEl.addEventListener("click", () => {
                sessionStorage.setItem("id", newTr.id)
                location.href = "updateStudent.html";
            })

            deleteEl.setAttribute("type", "button")
            deleteEl.setAttribute("id", `${studentId}`)
            deleteEl.setAttribute("value", "Delete")
            deleteEl.addEventListener("click", async () => {
                if (confirm("Are you sure you want to delete this person?")) {
                    tbodyEl.removeChild(newTr)
                    let resp = await fetch(`http://localhost:8000/students/${studentId}`, {
                        method: `delete`
                    })
                } else {
                }

            })

            // append

            studentNameTd.appendChild(studentNameA)
            tableEl.appendChild(tbodyEl)
            tbodyEl.appendChild(newTr)
            newTr.appendChild(studentNameTd)
            newTr.appendChild(studentFacultyTd)
            newTr.appendChild(GradesTd)
            GradesTd.appendChild(GradesEl)
            newTr.appendChild(editTd)
            newTr.appendChild(deleteTd)
            editTd.appendChild(editEl)
            deleteTd.appendChild(deleteEl)

        })

    } else {
        console.log("Error");
    }
}

// the function of the "Add student" button

function moveToAddStudent() {
    location.href = "addStudent.html"
}

// the function of the "View Grades" buttons

function moveToGrades() {
    location.href = "studentGrades.html"
}







