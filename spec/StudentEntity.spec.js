const StudentEntity = require("../src/StudentEntity");

describe('Classe StudentEntity', () => {
    let mockStudent;
    beforeEach(() => {
        studentEntity = new StudentEntity();
        mockStudent = { registrationId: 1, name: 'João', age: 20, gender: 'M', college: 'UFMG', course: 'Engenharia de Software'};
    });

    describe('Teste de Criação: ', () => {
        it('Adicionar um novo estudante com um ID único', () => {
            studentEntity.createStudent(mockStudent);
            expect(studentEntity.students[0]).toEqual(mockStudent);
        });
        it('Tentar adicionar um estudante com um ID de registro que já existe', () => {
            studentEntity.createStudent(mockStudent);
            expect(() => {
                studentEntity.createStudent(mockStudent);
            }).toThrowError("Record ID already exists");
        });
        it('Adicionar vários estudantes com IDs únicos', () => {
            for (const iterator in [5, 6, 7, 8, 9, 10, 11]) {
                const mockStudentClone = { ...mockStudent };
                mockStudentClone.registrationId = iterator;
                studentEntity.createStudent(mockStudentClone);
        
                expect(studentEntity.students[iterator]).toEqual(mockStudentClone);
            }
            expect(studentEntity.students).toHaveSize(7);
        });
        it('Tentar adicionar um estudante com um objeto inválido', () => {
            expect(() => {
                studentEntity.createStudent ({});
            }).toThrowError("Invalid object");
            expect(() => {
                studentEntity.createStudent (null);
            }).toThrowError("Cannot convert undefined or null to object");
            expect(() => {
                studentEntity.createStudent (undefined);
            }).toThrowError("Cannot convert undefined or null to object");
        });
    });
    describe('Teste de Leitura:', () => {
        it('Ler um estudante existente com um registrationId válido', () => {
            studentEntity.createStudent(mockStudent);
            expect(studentEntity.readStudent(mockStudent.registrationId)).toEqual(mockStudent);
        });        
        it('Tentar ler um estudante com um registrationId inválido', () => {
            studentEntity.createStudent(mockStudent);
            expect(()=> {studentEntity.readStudent(null)}).toThrowError("Invalid registration ID");
            expect(()=> {studentEntity.readStudent(undefined)}).toThrowError("Invalid registration ID");
        });        
        it('Ler um estudante após adicionar vários estudantes', () => {
            for (const iterator in [5, 6, 7, 8, 9, 10, 11]) {
                const mockStudentClone = { ...mockStudent };
                mockStudentClone.registrationId = iterator;
                studentEntity.createStudent(mockStudentClone);
        
                expect(studentEntity.readStudent(iterator)).toEqual(mockStudentClone);
            }
            expect(studentEntity.students).toHaveSize(7);
        });
        it('Tentar ler um estudante com um registrationId que não existe após adicionar vários estudantes', () => {
            for (const iterator in [5, 6, 7, 8, 9, 10, 11]) {
                const mockStudentClone = { ...mockStudent };
                mockStudentClone.registrationId = iterator;
                studentEntity.createStudent(mockStudentClone);
            }
            expect(studentEntity.readStudent(16)).toEqual("Id isn't registered");
            expect(studentEntity.students).toHaveSize(7);
        });
    });
    describe('Teste de Atualização', () => {
        it('Atualizar um estudante existente com novos dados',  () => {
            studentEntity.createStudent(mockStudent);
            mockStudent.name = "João da Silva";
            mockStudent.course = "Ciência da Computação";
            expect(studentEntity.updateStudent(mockStudent.registrationId, mockStudent)).toEqual(mockStudent);
        }); 
        it('Tentar atualizar um estudante com um registrationId inválido',  () => {
            studentEntity.createStudent(mockStudent);
            mockStudent.name = "João da Silva";
            mockStudent.course = "Ciência da Computação";
            expect(()=> {studentEntity.updateStudent(undefined,mockStudent)}).toThrowError("Invalid registration ID");
            expect(()=> {studentEntity.updateStudent(null,mockStudent)}).toThrowError("Invalid registration ID");
        }); 
        it('Atualizar um estudante após adicionar vários estudantes',  () => {
            for (const iterator of [1, 2, 3, 4, 5, 6, 7]) {
                const mockStudentClone = { ...mockStudent };
                mockStudentClone.registrationId = iterator;
                studentEntity.createStudent(mockStudentClone);
                expect(studentEntity.readStudent(iterator)).toEqual(mockStudentClone);
            }
            const id =+(Math.random() * (6) + 1).toFixed();
            let mockUpdate = studentEntity.readStudent(id);
            mockUpdate.name = "Pereira da Silva";
            expect(studentEntity.updateStudent(id, mockUpdate)).toEqual(mockUpdate);
            expect(studentEntity.students).toHaveSize(7);
        }); 
        it('Tentar atualizar um estudante com dados inválidos',  () => {
            studentEntity.createStudent(mockStudent);
            mockStudent.name = null;
            mockStudent.course = "Ciência da Computação";
            expect(()=>{studentEntity.updateStudent(mockStudent.registrationId,mockStudent)}).toThrowError("Contains invalid data");
            mockStudent.name = "João da Silva";
            mockStudent.course = undefined;
            expect(()=>{studentEntity.updateStudent(mockStudent.registrationId,mockStudent)}).toThrowError("Contains invalid data");
        });        
    });
    describe('Teste de Exclusão', () => {
        it('Excluir um estudante existente com um registrationId válido',  () => {
            studentEntity.createStudent(mockStudent);
            expect(()=> {studentEntity.deleteStudent(null)}).toThrowError("Invalid registration ID");
            expect(()=> {studentEntity.deleteStudent(undefined)}).toThrowError("Invalid registration ID");
        }); 
        it('Excluir um estudante após adicionar vários estudantes', () => {
            for (const iterator of [1, 2, 3, 4, 5, 6, 7]) {
                const mockStudentClone = { ...mockStudent };
                mockStudentClone.registrationId = iterator;
                studentEntity.createStudent(mockStudentClone);
            }
            const id =+(Math.random() * (5) + 1).toFixed();
            const deleteMock = studentEntity.readStudent(id);
            expect(studentEntity.students).toHaveSize(7);
            expect(studentEntity.deleteStudent(id)).toEqual(deleteMock);

        }); 
        it('Tentar excluir um estudante, mas cancelar a operação de exclusão...',  () => {
            studentEntity.createStudent(mockStudent);
            expect(studentEntity.students).toHaveSize(1);
            expect(studentEntity.deleteStudent(mockStudent.registrationId, true)).toMatch("Operation canceled");        });                
     });
});