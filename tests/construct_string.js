//

!function(){
	
	var str1 = 'Hello ',
	    str2 = 'world ',
	    str3 = 'test ',
	    i = 0; 
 	
	
	tests.push({
		name: 'String Concat',
		func: function(){
		 i++;
		 return str1+str2+str3+' '+i;
		},
	    reduce: function(r,x){ return r+x.length;},
	    start: 0,
	    loops: 100000
	});
	
}();

//