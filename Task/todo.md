//CREATING CATEGORY TABLE
create table category(id int,category_name varchar(20),primary key(id));
insert into category(id,category_name)values(1,'Operation');
insert into category(id,category_name)values(2,'IT');
insert into category(id,category_name)values(3,'HR');
insert into category(id,category_name)values(4,'Sourcing');
select *from category;

//CREATING USER TABLE
create table users(id int,user_name varchar(20),primary key(id));
insert into users(id,user_name)values(1,'Vasanth');
insert into users(id,user_name)values(2,'Jay');
insert into users(id,user_name)values(3,'Satish');
select *from users;

//CREATING STATUS TABLE
CREATE table status(id int,status_name varchar(20),primary key(id));
insert into status(id,status_name)values(1,'In-Progress');
insert into status(id,status_name)values(2,'Completed');
insert into status(id,status_name)values(3,'Not-Yet-Started');
select * from status;

//CRETING TODO TABLE
create table todo(id int,user_id int,task varchar(50),category_id int,status_id int,deadline date,primary key(id),foreign key(user_id) references users(id),foreign key(category_id) references category(id),foreign key(status_id) references status(id));
insert into todo(id,user_id,task,category_id,status_id,deadline) values (1,1,'Need to achieve 800 orders',1,1,'2021-09-30');
insert into todo(id,user_id,task,category_id,status_id,deadline) values (2,2,'Train 5 interns',2,1,'2021-09-30');
insert into todo(id,user_id,task,category_id,status_id,deadline) values (3,3,'Get trained in devops',2,1,'2021-09-30');
insert into todo(id,user_id,task,category_id,status_id,deadline) values (4,3,'Get trained in hasura',2,1,'2021-09-30');
insert into todo(id,user_id,task,category_id,status_id,deadline) values (5,3,'Get trained in hardware',2,1,'2021-09-30');
select * from todo;

//RESULT QUERY
SELECT todo.id, users.user_name, todo.task, category.category_name, status.status_name, todo.deadline FROM todo 
LEFT JOIN users ON todo.user_id = users.id 
LEFT JOIN category ON todo.category_id = category.id 	
LEFT JOIN status ON todo.status_id = status.id;

//COUNT QUERY
SELECT users.user_name,COUNT(users.user_name) FROM todo 
LEFT JOIN users ON users.id = todo.user_id GROUP BY users.user_name;


SELECT users.user_name,COUNT(users.id) FROM todo 
LEFT JOIN users ON users.id = todo.user_id GROUP BY users.user_name;