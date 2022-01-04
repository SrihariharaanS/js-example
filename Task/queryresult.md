OLD//
SELECT bs.id,bs.branchid,b.name,bs.studentid,s.name FROM branchstudent as bs
JOIN 
branch as b 
JOIN
student as s 
ON
bs.branchid=b.id and bs.studentid=s.id
UPDATED//
SELECT branchstudent.*, branch.name as branch_Name, student.name as student_Name
FROM branchstudent 
	LEFT JOIN branch ON branchstudent.branchId = branch.id 
	LEFT JOIN student ON branchstudent.studentId = student.id;