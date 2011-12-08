@echo off
@copy /b .\util\adapters\wsh_sys.js+.\tmp\test_b.js .\tmp\test.js
@cscript.exe //NoLogo .\tmp\test.js >> .\tmp\test_res.js
@del .\tmp\test.js