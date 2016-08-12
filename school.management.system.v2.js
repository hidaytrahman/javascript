/*SCHOOL MANAGEMENT SYSTEM V2.0
Created by  Md Hidaytullah Rahmani
Features : Nested Array, Array Calculation, Add New Record, Condition behalf of Salary, Very Short Summary
jQuery, CSS3, JavaScript
*/

$(document).ready(function(){	
// Main Object start here
var school = {
	name : "My System",
	students : [
	
			{name:"Roy", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Won", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Tom", class :"12th", subjects:["Computer","Science","Math"], fees : 15000},
			{name:"Vikas", class :"12th", subjects:["Computer","Science","Math"], fees : 15000},
			{name:"Vijay", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Faheem", class :"9th", subjects:["Computer","Science","Math"], fees : 10000},
			{name:"Hesia", class :"9th", subjects:["Computer","Science","Math"], fees : 10000},
			{name:"Nihsant", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Maren", class :"8th", subjects:["Computer","Science","Math"], fees : 9000},
			{name:"Barwalz", class :"12th", subjects:["Computer","Science","Math"], fees : 15000}			
	],
	
	classes : ["08th","09th","10th","12th"],
	fetchClass : function(){
		//Fetch value to select
		for(var i=0; i<school.classes.length; i++)
		{
			console.log(i);
			$("select[name='addClass']").append('<option>'+school.classes[i]+'</option>');
		}
		
	},
	
	totalStudents : function(){
		return this.students.length;
	},
	
	totalFees : function(total,num){
		return total+num;
	},
	
	//Add New Records of Students
	addNew : function(e){
		e.preventDefault();
		var addName,addClass,addSubjects,addFees;
		addName = $("input[name='addName']").val();
		addClass = $("select[name='addClass']").val();
		addSubjects = $("input[name='addSubject']").val();
		addFees	= $("input[name='addFees']").val();
		
		var convertedFees = parseInt(addFees);
		var errorTxt ="";
		if(addName=="" || addClass=="" || addSubjects=="" || addFees=="")
		{
				$(".error-message").addClass("errTrue").text("Please fill all fields !!");
				$(".error-message").removeClass("errFalse");
				return false;
		}
		
		else
		{
			console.log();
			$(".error-message").addClass("errFalse").text("Data added successfully !!!");
			$(".error-message").removeClass("errTrue");
		}
		
		
		//Add New Data using push 
		school.students.push({name:addName, class : addClass, subjects:addSubjects, fees : addFees});
		
		 sessionStorage.setItem('example', JSON.stringify(name));
		
		//Call Update function
		updateRows();
	}
};


// Main Object end here 
function updateRows (){
	//Print school name on heading
	$(".schoolName").text(school.name);
	
	var totalSTFees = 0, student, rows = '';
	// Itrator for fetch all files one by one
	for(var i =0; i<school.students.length; i++) {
		student = school.students[i];
		stuFees = school.students[i].fees;
		//Add class when value is greater than
		var classNm = stuFees > 10000 ? "seniorTeacher" : "default-teacher";		
		rows += "<tr><td>"+(i+1)+"</td><td>"+student.name+"</td><td>"+student.class+"</td><td>"+student.subjects+"</td><td class='"+ classNm +"'>"+stuFees+"</td></tr>";
		totalSTFees += +stuFees;	
		
	}
	
	//Put rows into table with dynamically data
	$('.body table tbody').html(rows);
	//Get value of total students
	$(".totalStudents").text(school.totalStudents());
	//calculate total fees
	$(".totalFees").text(totalSTFees);
}

//Update New Data
updateRows();
//Fetch data in dropdown
school.fetchClass();

//Add New Data to click button
$('#submit').on('click', school.addNew);


});/*SCHOOL MANAGEMENT SYSTEM V2.0
Created by  Md Hidaytullah Rahmani
Features : Nested Array, Array Calculation, Add New Record, Condition behalf of Salary, Very Short Summary
jQuery, CSS3, JavaScript
*/

$(document).ready(function(){	
// Main Object start here
var school = {
	name : "My System",
	students : [
	
			{name:"Roy", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Won", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Tom", class :"12th", subjects:["Computer","Science","Math"], fees : 15000},
			{name:"Vikas", class :"12th", subjects:["Computer","Science","Math"], fees : 15000},
			{name:"Vijay", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Faheem", class :"9th", subjects:["Computer","Science","Math"], fees : 10000},
			{name:"Hesia", class :"9th", subjects:["Computer","Science","Math"], fees : 10000},
			{name:"Nihsant", class :"10th", subjects:["Computer","Science","Math"], fees : 12000},
			{name:"Maren", class :"8th", subjects:["Computer","Science","Math"], fees : 9000},
			{name:"Barwalz", class :"12th", subjects:["Computer","Science","Math"], fees : 15000}			
	],
	
	classes : ["08th","09th","10th","12th"],
	fetchClass : function(){
		//Fetch value to select
		for(var i=0; i<school.classes.length; i++)
		{
			console.log(i);
			$("select[name='addClass']").append('<option>'+school.classes[i]+'</option>');
		}
		
	},
	
	totalStudents : function(){
		return this.students.length;
	},
	
	totalFees : function(total,num){
		return total+num;
	},
	
	//Add New Records of Students
	addNew : function(e){
		e.preventDefault();
		var addName,addClass,addSubjects,addFees;
		addName = $("input[name='addName']").val();
		addClass = $("select[name='addClass']").val();
		addSubjects = $("input[name='addSubject']").val();
		addFees	= $("input[name='addFees']").val();
		
		var convertedFees = parseInt(addFees);
		var errorTxt ="";
		if(addName=="" || addClass=="" || addSubjects=="" || addFees=="")
		{
				$(".error-message").addClass("errTrue").text("Please fill all fields !!");
				$(".error-message").removeClass("errFalse");
				return false;
		}
		
		else
		{
			console.log();
			$(".error-message").addClass("errFalse").text("Data added successfully !!!");
			$(".error-message").removeClass("errTrue");
		}
		
		
		//Add New Data using push 
		school.students.push({name:addName, class : addClass, subjects:addSubjects, fees : addFees});
		
		 sessionStorage.setItem('example', JSON.stringify(name));
		
		//Call Update function
		updateRows();
	}
};


// Main Object end here 
function updateRows (){
	//Print school name on heading
	$(".schoolName").text(school.name);
	
	var totalSTFees = 0, student, rows = '';
	// Itrator for fetch all files one by one
	for(var i =0; i<school.students.length; i++) {
		student = school.students[i];
		stuFees = school.students[i].fees;
		//Add class when value is greater than
		var classNm = stuFees > 10000 ? "seniorTeacher" : "default-teacher";		
		rows += "<tr><td>"+(i+1)+"</td><td>"+student.name+"</td><td>"+student.class+"</td><td>"+student.subjects+"</td><td class='"+ classNm +"'>"+stuFees+"</td></tr>";
		totalSTFees += +stuFees;	
		
	}
	
	//Put rows into table with dynamically data
	$('.body table tbody').html(rows);
	//Get value of total students
	$(".totalStudents").text(school.totalStudents());
	//calculate total fees
	$(".totalFees").text(totalSTFees);
}

//Update New Data
updateRows();
//Fetch data in dropdown
school.fetchClass();

//Add New Data to click button
$('#submit').on('click', school.addNew);


});