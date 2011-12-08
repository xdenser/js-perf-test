/**
 * @author XDenSer
 */

var tests = [];


function testresult(name, aloops, overall, average, overall_r, average_r, res){
	return {
		testname: name,
		overall_time: overall,
		loops: aloops,
		average_time: average,
		overall_wr_time: overall_r,
		average_wr_time: average_r,
		result: res
	};		
}

function tester(name, func, reduce_func, start_val, loops){
	//console.log(loops+' '+(typeof loops));
	var r = start_val;
	var st = new Date();
	var l = loops;
	if(typeof loops == 'object'){
		if(SEtag in loops) l = loops[SEtag];
		else l = loops.def;
	}	
	for(var i=0; i<l; i++) r = reduce_func(r,func());
	var ft = (new Date()).getTime() - st.getTime();	
	var st = new Date();
	for(var i=0; i<l; i++) func();
	var ft1 = (new Date()).getTime() - st.getTime();
	return testresult(name,l,ft1,ft1/l,ft,ft/l, r);
}

function RunTests(res){
	for(var i in tests){
		res.push(tester(tests[i].name,
                            tests[i].func,
                            tests[i].reduce,
                            tests[i].start,
                            tests[i].loops));
	}	
}

function OutTests(res){
	console.log('<p>Engine:'+SEversion+'</p>');
	console.log('<table>');
	console.log('<tr><th>Name</th><th>Loops</th><th>Time</th><th>Avg</th><th>Time wr</th><th>Avg wr</th><th>Res</th></tr>');
	var f = function(o,p){return '<td>'+o[p]+'</td>';};
	for(var i in res){
		console.log('<tr>');
		console.log(f(res[i],'testname'));
		console.log(f(res[i],'loops'));
		console.log(f(res[i],'overall_time'));
		console.log(f(res[i],'average_time'));
		console.log(f(res[i],'overall_wr_time'));
		console.log(f(res[i],'average_wr_time'));
		console.log(f(res[i],'result'));
		console.log('</tr>');
	}
	console.log('</table>');
}

function OutTestsJSON(res){
	console.log('tests.push({ name:"'+SEversion+'",');
	console.log(' color: "'+SEcolor+'",');
	console.log(' vals: {');
	var f = function(o,p,v){return '"'+p+'":'+o[p] + (v?'':',');};
	for(var i in res){
	  console.log('"'+res[i].testname+'":{');
	  //console.log((+i+1)+' '+res.length+(((1+i)==res.length)));
	  console.log(f(res[i],'loops'));
	  console.log(f(res[i],'overall_time'));
	  console.log(f(res[i],'average_time'));
	  console.log(f(res[i],'overall_wr_time'));
	  console.log(f(res[i],'average_wr_time'));
	  console.log(f(res[i],'result', true));
	  console.log('}'+(((+i+1)===res.length)?' ':','));
	}
	console.log('}});');
}

tests.push({
	name: 'Empty test',
	func: function(){ return 1;},
    reduce: function(r,x){ return r+x;},
    start: 0,
    loops: 1000000
});


