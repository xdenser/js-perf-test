var colors = {};

function RebuildRes(t){
	var res = {};
	var c_engine;  
	for(var i in t){
		c_engine = t[i].name;
		colors[c_engine] = t[i].color;
		for(var j in t[i].vals){
			if(!(res[j])) res[j] = {};
			res[j][c_engine] = t[i].vals[j];
		}	
	}
	return res;
}

function OutTable(res){
	console.log('<table>');
	console.log('<tr><th>Engine</th><th>Loops</th><th>Time</th><th>Avg</th><th>Time wr</th><th>Avg wr</th><th>Res</th></tr>');
	var f = function(o,p){return '<td>'+o[p]+'</td>';};
  	for(var i in res){
  		console.log('<tr><td>'+i+'</td>');
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

function std_ch(){
	return {
      width: 500,
      height: 300,
      legend_part: 0.4,
      bar_w: 20,
      bar_gap:5,
      charts:[]
	};  
}

function GetChart(tv, prop){
	var res = [];
	for(var i in tv){
		res.push({
			name: i,
			 val: tv[i][prop],
			 col: colors[i]
		});
	}
	return res;
}

function OutAllRes(t){
	var rt = RebuildRes(t); 
	var ch; 
	for(var i in rt){
		console.log('<br>');
		console.log('<br>');
		console.log('<p>Test: '+i+'</p>');
		ch  = std_ch();
		ch.charts = GetChart(rt[i],'average_time');
		console.log(dom2html(hchart(ch)));
		console.log('<br>');
		console.log('<br>');
		ch.charts = GetChart(rt[i],'average_wr_time');
		console.log(dom2html(hchart(ch)));
		console.log('<br>');
		OutTable(rt[i]);
	}	
}

OutAllRes(tests);


//