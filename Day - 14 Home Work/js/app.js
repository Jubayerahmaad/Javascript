// Dom Manupulate
let studentList = document.querySelector('.students-list');


let students = [
    {
        roll: 1,
        name: 'jubayer',
        age: 24,
    },
    {
        roll: 2,
        name: 'Habib',
        age: 27,
    },
    {
        roll: 3,
        name: 'Helal',
        age: 25,
    },
    {
        roll: 4,
        name: 'Abdullah',
        age: 19
    },
    {
        roll: 5,
        name: 'Nasir Jamshed',
        age: 26,
    },
    {
        roll: 6,
        name: 'Siam',
        age: 25,
    }
];

// Loop For Students informarion

students.forEach(function(student){
    renderHtml(student)  
});

// Render html 
function renderHtml(studentObject){
    let html = ` <div class="students">
            <h3>Roll Number : ${studentObject.roll}</h3>
            <h3>Name : ${studentObject.name}</h3>
            <h3>Age : ${studentObject.age}</h3>
        </div>`;
    studentList.innerHTML += html;
}