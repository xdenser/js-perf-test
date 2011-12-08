function dom2html(obj){
  if( typeof obj == 'string') return obj;
  var tag = 'div';
  if('tag' in obj) tag = obj.tag;
  var res = '<'+tag;
  for(var i in obj){
    if(!(i in {tag:0,children:0,style:0})) res+=' '+i+'="'+obj[i]+'"';
  }
  if('style' in obj){
   res+=' style="';
   for(var i in obj.style){
     res+=i+':'+obj.style[i]+'; ';
   }
   res+='"';
  }
  res+='>';
  if('children' in obj) for(var i in obj.children){ res+=dom2html(obj.children[i]);};
  return res+'</'+tag+'>';
}

var tmpl = {
 tag: 'html',
 children:[
  {tag:'head',
   children:[
    {tag:'title',children:'Test Page'}
   ]
  },
  {tag:'body',
   children:[
    {tag:'p',children:'Test of generating html'},
    {style: {position: 'relative',
                width: '400px',
               height: '300px',
   "background-color": '#0000FF'},
     children: 'some text'
    }
   ]
  }
 ]
}

function getmax(arr){
	  var max = -Infinity;
	  for(var i in arr) max = Math.max(max,arr[i].val);
	  max = max!=0?max:params.height;
	  var lmax = Math.log(max)/Math.LN10;
	  var c = Math.pow(10,Math.floor(lmax));
	  return Math.ceil(max/c)*c;
}

function vchart(params){

 var res = {};
 

 function bar(x,y,w,h,col){
   return {
      style:{
       position:'absolute',
        width: w+'px',
        height: h+'px',
        left: x+'px',
       bottom:y+'px',
       "background-color": col,
      }
   }
 }

 var bars = [];
 var xx = 0;
 var gap = 10;
 var bw = Math.round(params.width/params.charts.length)-gap;
 var max = getmax(params.charts);
 var hk = max!=0?params.height/max:params.height;
 console.log(max);

 for(var i in params.charts){
     bars.push(bar(xx,0,bw,Math.round(params.charts[i].val*hk),params.charts[i].col));
     xx+=bw+gap;
 }


 res = { 
             style: {
                position: 'relative',
                width: params.width+'px',
                height: params.height+'px',
                margin: 0,
                padding: 0
             },
             children: bars 
       };

 return res;
}

function hchart(params){
	
  function bar(w,h,cy,col){
	  return {
	      style:{
	       position:'absolute',
	       width: w+'px',
	       height: h+'px',
	       left: 0+'px',
	       top:cy+'px',
	       "background-color": col,
	      }
	   }  
  }
  
  function bval(x,y,val){
	  return {
		  style:{
		  position:'absolute',
		  width: '2px',
		  height: '2px',
		  top: y+'px',
		  left: x+'px'
	      },
	      children: val+' '
	  };	  
  }	  
  function lbar(h,cy,text){
	 return {
		 style:{
		  position:'absolute',
		  width:'100%',
		  height: h,
		  right: 5,
		  top: cy+'px',
		  "text-align":'right'
	     },
	     children: text
	 } 
  }
  
  function axis(y,w,max_v,lstyle){
	  var mark_h = 6;
	  function mark(x){
		  return {
			  style:{
			   position:'absolute',
			   width:'2px',
			   height:mark_h+'px',
			   top: Math.floor(y - mark_h/2)+'px',
			   left:x,
			   'border-left':lstyle
		      }
		  };  
	  }
	  function mark_lab(x,l){
		  return {
			  style:{
			     position:'absolute',
			     'text-align': 'center',
			     width: '1px',
			     height: '10px',
			     left:(x+2)+'px',
			     top: '-6px',
			  },
			  children: ''+l
		  };	   
	  }	  
	  var cv = 0, cx = 0, vv;
	  
	  var marks = [{
		  style:{
		    position:'absolute',
		    width:w+'px',
		    left:0,
		    top: y+'px',
		    height: '1px',
	        'border-top':lstyle
	      }
	  }];
	  for(var i=0; i<5; i++){
                 vv = max_v*i/4
		 cv = (vv).toPrecision(4);
                 if(cv.length>8) cv = vv.toExponential(3);
                 
		 cx = Math.floor(w*cv/max_v);
		 marks.push(mark(cx));
		 marks.push(mark_lab(cx,cv));
	  }	  
	  
	  return marks;
	  
  }	  
  
  var chw = Math.round(params.width*(1-params.legend_part));  
  var max = getmax(params.charts);	   
  var wk = max!=0?chw/max:chw;
  var axis_border = '1px solid blue';
  var bars = [{
	  style:{
	   position:'absolute',
	   width:'100%',
	   height: (params.bar_w+params.bar_gap)+'px',
	   left:0,
	   top:0
      },
      children: axis((params.bar_w+params.bar_gap)/2,chw,max,axis_border)
  }];
  var lbars = [lbar(params.bar_w,0,'Time per cycle, ms')];
  var cy = params.bar_w+params.bar_gap;
  var cbw = 0;
  for(var i in params.charts){
	     cbw = Math.round(params.charts[i].val*wk);
	     bars.push(bar(cbw,params.bar_w,cy,params.charts[i].col));
	     bars.push(bval(cbw+5,cy,params.charts[i].val));
	     lbars.push(lbar(params.bar_w,cy,params.charts[i].name));
	     cy+=params.bar_w+params.bar_gap;
  }
  
  return {
	 style:{
	   position: 'relative',
	   width:params.width+'px',
	   height:cy+'px',
	   margin: 0,
	   padding: 0
     },
     children:[
         { 
        	style:{
        	 position: 'absolute',
        	 width: Math.round(params.width*params.legend_part)+'px',
             height:cy+'px',
             top:0,
             left:0
            },
            children: lbars         
         },
         {
        	 style:{
        	  position: 'absolute',
        	  width: chw+'px',
        	  height:cy+'px',
        	  top:0,
              left:Math.round(params.width*params.legend_part)+'px'
             },
             children: bars
         }
     ]
  }	
}


//console.log(dom2html(tmpl));
var ch = {
      width: 400,
      height: 300,
      legend_part: 0.3,
      bar_w: 20,
      bar_gap:5,
      charts:[
         { name: 'test 1',
           val : 3045,
           col : '#FF0000'
         },
         { name: 'test 2',
           val : 30,
           col : '#00FF00'
         },
         { name: 'test 3',
           val : 517,
           col : '#0000FF'
         }

      ]
};
//console.log(dom2html(hchart(ch)));

