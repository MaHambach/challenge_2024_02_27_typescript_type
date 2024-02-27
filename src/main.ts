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

const student4: Student = {
    firstName: 'Juliette',
    lastName: 'Genius',
    age: 9,
    grades: ["A", "1", "1", "", "S", "1", "1", "2"]
};

function printStudent(student: Student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
    console.log("=".repeat(student.firstName.length + student.lastName.length + student.age.toString().length + 4));
    console.log("Grades: " + student.grades.map((grade) => !grade ? "*" : grade).join(","));
}

const studentList: Student[] = [student, student2, student3, student4];

function printStudentList(studentList: Student[]) {
    studentList.forEach((student) => {
        printStudent(student);
        console.log();
    });
}

printStudentList(studentList);

type Cat = {
    id: string;
    name: string;
    color: string;
}

let cat: Cat = {
    id: "1",
    name: "Whiskers",
    color: "black"
}

let updatedCat: Cat = {
    ...cat,
    color: "orange"
}

console.log(cat);
console.log(updatedCat);

cat.id = "2";

console.log(cat);
console.log(updatedCat);

