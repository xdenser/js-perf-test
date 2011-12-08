@echo off
@copy /b .\util\adapters\wsh_sys.js+.\tmp\test_b.js .\tmp\test.js
@regedit /s jse_56.reg
@cscript.exe //NoLogo .\tmp\test.js >> .\tmp\test_res.js
@regedit /s jse_reset.reg
@del .\tmp\test.js