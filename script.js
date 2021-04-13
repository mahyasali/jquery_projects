
$(document).ready(function(){
    $("#submit_button").click(function(){
        
        let number = $("#serial_number").val();
        let course = $("#course").val();
        let Point = $("#point").val();
        let score = $("#score").val();
        let weight = $("#point").val()*$("#score").val();
        var $myTableBody = $("#content");
       

        
        var myValue = [`${number},${course}, ${Point}, ${score} ${weight}`]
        ;

        var rowElements = myValue.map(function(row){
            // creating row
            var $row = $('<tr></tr>');
            // creating column
            var $number = $(`<td>${number}</td>`).html(row.number);
            var $course = $(`<td>${course}</td>`).html(row.course);
            var $Point = $(`<td>${Point}</td>`).html(row.Point);
            var $score = $(`<td>${score}</td>`).html(row.score);
            var $weight = $(`<td>${weight}</td>`).html(row.weight);
            var $delete = $(`<td><button id="delbtn">DELETE</button></td>`)
            var $Edit = $(`<td><button id="editbtn">Edit</button></td>`)
            
            

            // add columns to row
            $row.append($number, $course, $Point, $score, $weight, $delete, $Edit);

            return $row;
            });


        $myTableBody.append(rowElements);
    
        $("#name, #department, #course, #point, #score, #serial_number").val("");

         $("td #delbtn").click(function() {
            $(this).parents("tr").remove();
        });

         // edit button
        $('td #editbtn').click(function(){
            var par = $(this).parent().parent(); //tr 
            
            var tdcourse = par.children("td:nth-child(2)"); 
            var tdpoint = par.children("td:nth-child(3)");
            var tdscore = par.children("td:nth-child(4)");
            
            tdcourse.html("<input type='text' id='txtPhone' value='"+tdcourse.text()+"'/>"); 

            tdpoint.html("<input type='text' id='txtEmail' value='"+tdpoint.text()+"'/>");
            
            tdscore.html("<input type='text' id='txtEmail' value='"+tdscore.text()+"'/>");
        
        })

       
        // on double click of editbtn save row
        $('td #editbtn').dblclick(function(){
            var par = $(this).parent().parent(); //tr 
            
            var tdcourse = par.children("td:nth-child(2)"); 
            var tdpoint = par.children("td:nth-child(3)");
            var tdscore = par.children("td:nth-child(4)");

            tdcourse.html(tdcourse.children("input[type=text]").val()); 

            tdpoint.html(tdpoint.children("input[type=text]").val());

            tdscore.html(tdscore.children("input[type=text]").val());
        });

        // getting total sum value culumn
        $("table thead th").each(function(i){
            calculateColumn(i);

            function calculateColumn(index){
                var total = 0;
                $("table tr").each(function(){
                    var value = parseInt($('td', this).eq(index).text());
                    if(!isNaN(value)){
                        total += value;
                    }
                });
                $('tfoot td').eq(index).text(total);
            }
        })
});   

    
    $("#GPA_button").click(function(){
        var totalweight = $("#totalweight").text();
        var totalPoint = $("#totalpoint").text();
        var x = totalweight/(totalPoint*100);
        var gpa =  x*5;

        $("#gpa").append("your GPA is" + gpa.toFixed(2));

        let name = $("#name").val();
        let department = $("#department").val();

        $("#para_name").append(`Name: ${name}`);
        $("#para_dept").append(`Department: ${department}`);
    })
   
    $('#add_button').click(function(){
        var newField = $('<tbody id="table_body"><tr><th scope="row"><input type="text" name="" id="serial_number" class="serial_number_input"></th><td><input type="text" name="" id="course"></td><td><input type="text" name="" id="point"></td><td><input type="text" name="" id="score"></td> </tr></tbody> ');
        newField.appendTo($(".table"));
    });

    // styling
    $("#GPA_button").hover(function(){
        $(this).css("background-color", "red")
    }, function(){
  $(this).css("background-color", "white");
});
    
});

