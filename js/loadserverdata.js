$(document).ready(function(){

    var URL = "http://giv-oct.uni-muenster.de:8080/api/dataset/getAllParkswithArea?";
    var key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfbmFtZSI6Ik5hdFJlc2VydmVzQ29sdW1iIiwiaWF0IjoxNDgxODcyNjE5fQ.nucCuC-58aT0Opo8GtmL3gonHRYN2Q69R8H8rezQJwQ";
    $.ajax({
          url: URL,
          method: "GET",
          dataType: "json",
          data: { 
        	  "authorization": key  }, 
          success: function(result){
              
              //alert(result);
              parseJSONParks(result);

    		}, 
    		error: function(xhr, textStatus, errorThrown){ 
    			alert("Unable to fetch Server data")               	 	
    	    }
          });


});

function parseJSONParks(obj){

    console.log( obj[1].parkname.value );

}