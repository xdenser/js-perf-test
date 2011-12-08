import System;

var console = {
  log: function(a){
     Console.WriteLine(a);
  }
};

var SEversion = 'Microsoft .NET v.'+ Environment.Version.ToString();
var SEtag = '.Net';
var SEcolor = ({
		       "1.1": '#AA00FF',
	 	       "2.0": '#00AAFF',
	 	       "4.0": '#0000FF'
              })[Environment.Version.ToString().replace(/^(\d)\.(\d).+/,'$1.$2')];



function alert(a){ return ;}