$(function(){

    $("#DT").change(function(){
        var dateP=$("#DT").val();
        var datePdr=new Date(dateP).getYear();
        var datePajd=new Date().getYear();
        var res=datePajd-datePdr;
        if(res<=9){
            alert("wlh madkhol");
        }
        else{
            alert("dkhol 3la slmtk ");
        }
    })


    $("#sexeH").click(function(){
        $("#accompagnateur").hide();
    });
    $("#sexeF").click(function(){
        $("#accompagnateur").show();
    });


    $("#clic").click(function(){
        var cin = $("#cin").val();
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    var DT = $("#DT").val();
    var cinC = $("#cinC").val();
    var Lfamilial = $("#Lfamilial").val();
    var canguin = $("#canguin").val();
    var mld = $("#mld").val();

    $.ajax({
        type : 'post',
        dataType : 'html',
        url : 'controleur',
        data : ' CIN='+cin+ '&NOM='+nom+ '&PRENOM='+prenom+ '&DATE='+DT+ '&CINccomp	='+cinC+ '&cinCcomp='+Lfamilial+ '&canguin='+canguin, '&maladie=':mld,
        success: function(msg){
            alert(msg);
        }
    });
});
});