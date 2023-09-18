
module.exports = class StudentEntity {
    constructor() {
    }
    students = [];

    createStudent(StudentEntity) {
        const existingStudent = this.students.find(student => student.registrationId === StudentEntity.registrationId);
        const isEmpty = Object.keys(StudentEntity).length === 0 && StudentEntity.constructor === Object;

        if (StudentEntity === undefined || StudentEntity === null || isEmpty) {
            throw new Error("Invalid object");
        }
        if (existingStudent) {
            throw new Error("Record ID already exists");
        }
        try {
            this.students.push(StudentEntity);
        } catch (error) {
            console.error("An error occurred while adding the student:", error);
        }
    }

    readStudent(registrationId) {
        if (registrationId === undefined || registrationId === null) {
            throw new Error("Invalid registration ID");
        }
        const searching = this.students.find(StudentEntity => StudentEntity.registrationId === registrationId);
        return searching ? searching : "Id isn't registered";
    }

    updateStudent(registrationId, updatedStudent) {
        const isValid = !Object.values(updatedStudent).every((value) => value !== null && value !== undefined);
        if (isValid) {
            throw new Error("Contains invalid data");
        }
        if (registrationId === undefined || registrationId === null) {
            throw new Error("Invalid registration ID");
        }
        const index = this.students.findIndex(StudentEntity => StudentEntity.registrationId === registrationId);
        if (index !== -1) {
            return this.students[index] = updatedStudent;
        }
        return "Id isn't registered";
    }

    deleteStudent(registrationId, cancel) {
        if (registrationId === undefined || registrationId === null) {
            throw new Error("Invalid registration ID");
        }
        if (cancel) {
            return "Operation canceled";
        }
        const index = this.students.findIndex(student => student.registrationId === registrationId);
        return (this.students.splice(index, 1))[0];

    }
}



