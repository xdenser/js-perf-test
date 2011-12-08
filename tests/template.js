//

!function(){
	var template = '<html><title>{title}</title><body>{main}</body></html>';
	
	function ApplyTemplate(template, view){
		return template.replace(/{(\w+)}/g,function(p,n){
			if(n in view) return view[n];
			else return '_ERROR_NO_VALUE_'+n;                         
		});	
	}	
	
	var views = [
	             {
	            	 title:'Page One',
	            	 main: 'Lorem ipsum dolor sit amet, mauris libero velit, '+
'vitae pellentesque aliquam, cursus magnis velit, non '+
'viverra sed nibh ac fringilla vel, accumsan quis '+
'elementum fermentum ullamcorper. '+
'Ipsum felis arcu feugiat amet nullam, ipsum duis '+
'eget sapien. Integer ac luctus vitae eleifend aliquam '+
'suspendisse, integer diam ac sem erat in, pellentesque '+
'faucibus mi sem tellus pellentesque, libero lorem diam '+
'vitae rhoncus dui sollicitudin, maecenas platea eu quam '+
'non voluptatibus. Netus erat quis, venenatis tellus nec '+
'adipiscing curabitur, eleifend magna nunc odio sit, orci '+
'integer sed, pellentesque et elit pede. In interdum quis '+
'eget curabitur ac amet, bibendum in. Placerat erat pede velit leo. '+
'Consequat elit mauris sagittis vestibulum. Scelerisque urna'+
'tincidunt, iure quisque risus ornare, metus fringilla urna'+
'vulputate lorem nulla, ante egestas in integer lobortis. '+
'Dapibus egestas elit a amet sed, ut vestibulum ac sed, '+
'dictum donec scelerisque lectus mi. Eius nullam ante '+
'nulla neque quo vitae, vestibulum dui, nunc ipsum id '+
'amet a, expedita elit et facilisi. Nec duis cursus ipsum '+
'dis, id diam at tempor, nullam scelerisque, nunc turpis '+
'velit ipsum consectetuer. Torquent sapien in, feugiat '+
'ante id suspendisse sodales laoreet auctor, massa '+
'posuere nisl tristique, integer orci vitae. Suscipit '+
'erat est gravida eget, at gravida eros, dui ipsum '+
'commodo id, consequat ullamcorper class. '+
'Color nullam faucibus. Vestibulum aliquam suspendisse '+
'augue duis ridiculus, id sapien neque luctus etiam nam, '+
'massa sed diam, dui convallis. Libero sollicitudin velit '+
'mi ipsum, nunc id congue in neque wisi. Ut aliquam eros '+
'a aliquam, quis consectetuer libero, nullam rutrum, vitae '+
'eget amet eget posuere. Mauris dui congue luctus dui consectetuer. '+
'Non eleifend purus, quam sed aliquam fringilla amet ut. '+
'Ante arcu sit vestibulum luctus phasellus in, ridiculus '+
'viverra non risus in per ultricies, vestibulum lobortis '+
'hymenaeos sollicitudin, proin curabitur tellus non, metus '+
'fringilla erat. Ac vehicula et, erat faucibus velit varius, '+
'nisl sed tempor sit laoreet lorem, erat turpis pulvinar '+
'sollicitudin nec, nunc mi quisque et sapien risus. '+
'Orci magna consectetuer sed, bibendum cras, vestibulum '+
'viverra, fermentum non suspendisse mauris orci lacus, '+
'dolor massa non. Ornare enim donec, ut enim integer '+
'iaculis nec cras cupiditate. Ultrices vitae vel augue, '+
'dignissim iaculis impedit ridiculus enim, non pharetra '+
'proin, dictum curabitur nonummy erat, nullam pellentesque. '+
'Massa donec sollicitudin et eget et, fusce ut. Sapien fusce '+
'at sed sed condimentum dignissim, pulvinar placerat, '+
'est quam adipiscing nulla lorem orci sapien, vitae ante '+
'velit morbi sed, massa neque est pulvinar sed. Pede a '+
'tristique tincidunt urna lacus enim. Quis leo, ac '+
'exercitationem aenean turpis nullam sed metus, ut '+
'lectus libero at etiam morbi, et orci eros ut sit et.'
	             },
	             {
	               title: 'Page two',
	               main: 'Short page'
	             }	 
	             ];
 	 
	var counter = 0;
	tests.push({
		name: 'Apply template',
		func: function(){
		 counter++;
		 return ApplyTemplate(template, views[counter%2]); 
		},
	    reduce: function(r,x){ return r+x.length;},
	    start: 0,
	    loops: 10000
	});
 	
}();	

//