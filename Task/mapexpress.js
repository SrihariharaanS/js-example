const express=require('express');

const sampapp=express();

sampapp.use(express.json())
sampapp.use(express.urlencoded({extended:false}))

sampapp.listen(4006);
sampapp.post('/student',function(req,res){
    branchstudentData = req.body;
    const branchStudentExercise = function(branchStudent) {

        return {
            id:branchStudent.id,
            branchId:branchStudent.branchId,
            branchName: branchstudentData.branch.find(branch => branch.id === branchStudent.branchId)?.name,
            studentId:branchStudent.studentId,
            studentName: branchstudentData.student.find(student => student.id === branchStudent.studentId)?.name
        }
    }
Result = branchstudentData.branchStudent.map(branchStudentExercise) ;
res.json(Result)


    
})
