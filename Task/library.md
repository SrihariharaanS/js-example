create table students(id int,name varchar(20),primary key(id));
insert into students(id,name)values(1,'jay');
insert into students(id,name)values(2,'vasanth');
insert into students(id,name)values(3,'satish');
select*from students;
create table books(id int,name varchar(70),primary key(id));
insert into books(id,name)values(1,'wings of fire');
insert into books(id,name)values(2,'fear not be strong');
insert into books(id,name)values(3,'the blue umbrella');
select*from books;

create table rented(id int,student_id int,book_id,rented_date date,due_date date,primary key(id),foreign key(student_id) references students(id),foreign key(book_id) references books(id) );
insert into rented(id,student_id,book_id,rented_date,due_date)values(1,1,1,CURRENT_DATE,'2022-01-30');
insert into rented(id,student_id,book_id,rented_date,due_date)values(2,2,2,CURRENT_DATE,'2022-01-30');
insert into rented(id,student_id,book_id,rented_date,due_date)values(3,3,1,CURRENT_DATE,'2022-01-30');
insert into rented(id,student_id,book_id,rented_date,due_date)values(4,3,2,CURRENT_DATE,'2022-01-30');
insert into rented(id,student_id,book_id,rented_date,due_date)values(5,3,3,CURRENT_DATE,'2022-01-30');
select * from rented;

SELECT rented.id, students.name AS student_Name, books.name, rented.rented_date, rented.due_date FROM rented 
LEFT JOIN students ON rented.student_id = students.id 
LEFT JOIN books ON rented.book_id = books.id;

SELECT students.name,COUNT(students.name) FROM rented 
LEFT JOIN students ON students.id = rented.student_id GROUP BY students.name;

CREATE VIEW  rentedcount AS
SELECT students.name,COUNT(students.name) FROM rented 
LEFT JOIN students ON students.id = rented.student_id GROUP BY students.name;