create table student(id int,name varchar(20),primary key(id));
insert into student(id,name)values(1,'jay');
insert into student(id,name)values(2,'vasanth');
insert into student(id,name)values(3,'satish');



create table book(id int,name varchar(70),primary key(id));
insert into book(id,name)values(1,'wings of fire');
insert into book(id,name)values(2,'fear not be strong');
insert into book(id,name)values(3,'the blue umbrella');




create table book_rented(id int,student_id int,book_id int,rented_date date,due_date date,primary key(id),foreign key(student_id) references student(id),foreign key(book_id) references book(id) );

insert into book_rented(id,student_id,book_id,rented_date,due_date)values(1,1,1,CURRENT_DATE,'2022-01-30');
insert into book_rented(id,student_id,book_id,rented_date,due_date)values(2,2,2,CURRENT_DATE,'2022-01-30');
insert into book_rented(id,student_id,book_id,rented_date,due_date)values(3,3,1,CURRENT_DATE,'2022-01-30');
insert into book_rented(id,student_id,book_id,rented_date,due_date)values(4,3,2,CURRENT_DATE,'2022-01-30');
insert into book_rented(id,student_id,book_id,rented_date,due_date)values(5,3,3,CURRENT_DATE,'2022-01-30');





SELECT book_rented.id, student.name AS student_Name, book.name, book_rented.rented_date, book_rented.due_date FROM book_rented 
LEFT JOIN student ON book_rented.student_id = student.id 
LEFT JOIN book ON book_rented.book_id = book.id;









CREATE VIEW  rentedcount AS
SELECT student.name,COUNT(student.name) FROM book_rented 
LEFT JOIN student ON student.id = book_rented.student_id GROUP BY student.name;