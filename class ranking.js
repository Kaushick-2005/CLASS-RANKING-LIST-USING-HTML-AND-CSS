document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    if (!name || isNaN(cgpa)) return;

    // Add student to the list
    const student = { name, cgpa };
    addStudent(student);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('cgpa').value = '';
});

const students = [];

function addStudent(student) {
    students.push(student);
    updateRankingList();
}

function updateRankingList() {
    // Sort students by CGPA in descending order
    students.sort((a, b) => b.cgpa - a.cgpa);

    const rankingList = document.getElementById('rankingList');
    rankingList.innerHTML = '';

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${student.name} - CGPA: ${student.cgpa.toFixed(2)}`;
        rankingList.appendChild(li);
    });
}
