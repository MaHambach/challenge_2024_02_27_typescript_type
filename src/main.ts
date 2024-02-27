type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades : string[];
};

const student: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 16,
    grades: ["A", "", "F", "3", "1", "B", "2", "5"]
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 17,
    grades: ["1", "4", "3", "1", "A", "", "1", "2"]
};

const student3: Student = {
    firstName: 'Bob',
    lastName: 'Doe',
    age: 17,
    grades: ["A", "1", "1", "", "3", "2", "4", "5"]
};

function printStudent(student: Student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
    console.log("=".repeat(30));
    console.log("Grades: " + student.grades.map((grade) => !grade ? "*" : grade).join(","));
}

const studentList: Student[] = [student, student2, student3];

function printStudentList(studentList: Student[]) {
    studentList.forEach((student) => {
        printStudent(student);
        console.log();
    });
}

printStudentList(studentList);

