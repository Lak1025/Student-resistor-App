name_of_student_Array=[];

function submit()
{
var display_student_Array=[];

for (var j = 1; j<= 4; j++ ) {
    var name_of_student = document.getElementsById("name_of_student_"+j).value;
    console.log(name_of_student);
    name_of_student_Array.push(name_of_student);
    console.log(name_of_student_Array);
    var length_of_name_of_student_Array=name_of_student_Array.lenght;
    console.log(length_of_name_of_student_Array);
}

for (var k =0; k< length_of_name_of_student_Array; k++ ){
    display_student_Array.push("<h4> name - "+ name_of_student_Array[k] + "</h4>" );
    console.log(display_student_Array);
    document.getElementById("dispaly_name_with_commas").innerHTML=display_student_Array;
    var remove_commas=display_student_Array.join("");
    console.log (remove_commas);
    document.getElementById("diplay_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
}