
	var student = [{"name":"Pepe", "lastname":"Perez", "age":15, "absent":"Y"},{"name":"Juana", "lastname":"Jaramillo", "age":16, "absent":"N"},
	{"name":"Maria", "lastname":"Mendez", "age":16, "absent":"Y"}];
					
	var table = document.getElementById('students');
	for (var i = 0; i < student.length; i++) {
    var tr = "<tr>";    

    tr += "<td>" + student[i].name + "</td>" +"<td>" + student[i].lastname + "</td>"+ "<td>" + student[i].age.toString() + "</td>"+"<td>" + student[i].absent + "</td></tr>";

    table.innerHTML += tr;	
}

	function countAbsents(){
		var absents = 0;
		for (var absent in student) {
			if(student[absent].absent === "Y"){
				absents++;
			}
		  
		}
		
		alert("Absent students: "+absents);
	}