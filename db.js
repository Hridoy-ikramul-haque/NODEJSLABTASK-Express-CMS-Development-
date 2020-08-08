var emps=[];

module.exports=function(){
    return{
        getAllEmp: function () {
            return emps;
        },
        getEmp: function (id) {
            for(let i=0;i<emps.length; i++){
                if(emps[i].id==id){
                    return emps[i];
                }
            }
        },
        createEmp: function (emp) {
            let id=emps.length+1;
            emp.id=id;
            emps.push(emp);
        },
        updateEmp: function (emp) {
            for(let i=0;i<emps.length; i++){
                if(emps[i].id==emp.id){
                    return emps[i]=emp;
                }
            }

        },
        deleteEmp:function (id) {
            for(let i=0;i<emps.length; i++){
                if(emps[i].id==id){
                    emps.splice(i,1);
                }
            }
        }

    }
};

