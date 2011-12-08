var console = {
  log: function(a){
     WScript.Echo(a);
  }
};

var SEversion = "Microsoft JScript "+ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion() + "." + ScriptEngineBuildVersion();
//console.log(SEversion);
var SEtag = 'wsh';
var SEcolor = ({
     "5.6": '#00FF00',
     "5.7": '#00FFAA',
     "5.8": '#AAFF00',
     "9.0": '#AAFFFF'
   })[ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion()];

