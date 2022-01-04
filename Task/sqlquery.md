CREATE QUERY:
CREATE TABLE student(id INT ,name VARCHAR(20),CONSTRAINT PRIMARY KEY(id));

CREATE TABLE branch(id INT ,name VARCHAR(20),CONSTRAINT PRIMARY KEY(id));

CREATE TABLE branchStudent(id INT PRIMARY KEY,branchId INT,studentId INT,CONSTRAINT FOREIGN KEY(branchId) REFERENCES branch(id),FOREIGN KEY(studentId) REFERENCES student(id));

INSERT QUERY:
INSERT into student(id,name)values(1,'Jay');

INSERT into student(id,name)values(2,'Sanjay');

INSERT into student(id,name)values(3,'Rajesh');

INSERT INTO branch(id, name) VALUES (1,'CSE');

INSERT INTO branch(id, name) VALUES (2,'IT');

INSERT INTO branchstudent(id, branchId, studentId) VALUES (1,1,1);

INSERT INTO branchstudent(id, branchId, studentId) VALUES (2,2,2);

INSERT INTO branchstudent(id, branchId, studentId) VALUES (3,2,1);

INSERT INTO branchstudent(id, branchId, studentId) VALUES (4,1,3);
