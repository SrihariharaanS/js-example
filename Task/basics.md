1-DATABASE:
•	A database is an organized collection of data, so that it can be easily accessed and managed.
•	We can organize data into tables, rows, columns, and index it to make it easier to find relevant information.
•	Database handlers create a database in such a way that only one set of software program provides access of data to all the users.
•	The main purpose of the database is to operate a large amount of information by storing, retrieving, and managing data.
•	There are many dynamic websites on the World Wide Web nowadays which are handled through databases. For example, a model that checks the availability of rooms in a hotel. It is an example of a dynamic website that uses a database.
•	There are many databases available like MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL, SQL Server, etc.

2-ACID PROPERTY:
•	ACID is a concept (and an acronym) that refers to the four properties of a transaction in a database system, which are: Atomicity, Consistency, Isolation and Durability. 
•	These properties ensure the accuracy and integrity of the data in the database, ensuring that the data does not become corrupt as a result of some failure, guaranteeing the validity of the data even when errors or failures occur.
•	The ACID properties allow us to write applications without considering the complexity of the environment where the application is executed. 
•	This is essential for processing transactions in databases. Because of the ACID properties, we can focus on the application logic instead of failures, recovery and sync of the data.

TRANSACTION:
•	Before explaining the four ACID properties, we need to understand what is a transaction. A transaction is a sequence of operations that are executed as a single unit of work, and a transaction may consist of one or many steps. 
•	A transaction access data using read and write operations.
•	Each transaction is a group of operations that acts a single unit, produces consistent results, acts in isolation from other operations and updates that it makes are durably stored.
•	The goal of a transaction is to preserve the integrity and consistency of the data. 
•	If a transaction succeeds, the data that were modified during the transaction will be saved in the database. 
•	If some error occurs and needs to be cancelled or reverted, the changes that were made in the data will not be applied.

ATOMICITY:
•	A transaction must be an atomic unit of work, which means that all the modified data are performed or none of them will be. 
•	The transaction should be completely executed or fails completely, if one part of the transaction fails, all the transaction will fail. 
•	This provides reliability because if there is a failure in the middle of a transaction, none of the changes in that transaction will be committed.

CONSISTENCY:
•	This property ensures that the transaction maintains data integrity constraints, leaving the data consistent. 
•	The transaction creates a new valid state of the data and if some failure happens, return all the data with the state before the transaction being executed.
•	The goal is to ensure that the database before and after the transaction be consistent. If a transaction leaves data in an invalid state, the transaction is aborted and an error is reported.

ISOLATION
•	This property ensures the isolation of each transaction, ensuring that the transaction will not be changed by any other concurrent transaction.
•	It means that each transaction in progress will not be interfered by any other transaction until it is completed.

DURABILITY:
•	Once a transaction is completed and committed, its changes are persisted permanently in the database. 
•	This property ensures that the information that is saved in the database is immutable until another update or deletion transaction affects it.
•	Once the transaction is committed, it will remain in this state even if a serious problem occurs, such as a crash or a power outage. 
•	For this purpose, the completed transactions are recorded on permanent memory devices (non-volatile) such as hard drives, so the data will be always available, even if the DB instance is restarted.
NORMALIZATION:
It is the processes of reducing the redundancy of data in the table and also improving the data integrity. So why is this required? without Normalization in SQL, we may face many issues such as
•	Insertion anomaly: It occurs when we cannot insert data to the table without the presence of another attribute
•	Update anomaly:  It is a data inconsistency that results from data redundancy and a partial update of data.
•	Deletion Anomaly: It occurs when certain attributes are lost because of the deletion of other attributes.
In brief, normalization is a way of organizing the data in the database. Normalization entails organizing the columns and tables of a database to ensure that their dependencies are properly enforced by database integrity constraints.
There are four types:
•	1st Normal Form (1NF)
•	2nd Normal Form (2NF)
•	3rd Normal Form (3NF)
•	Boyce Codd Normal Form (BCNF)


3-DDL:
•	DDL is Data Definition Language which is used to define data structures. 
•	For example: create table, alter table are instructions in SQL.

DML:
•	DML is Data Manipulation Language which is used to manipulate data itself.
•	For example: insert, update, delete are instructions in SQL.

4-JOINs:
A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

THE DIFFERENT TYPES OF THE JOINs IN SQL:
•	(INNER) JOIN: Returns records that have matching values in both tables
•	LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
•	RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
•	FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table
