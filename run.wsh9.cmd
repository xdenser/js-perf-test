@echo off
@copy /b .\util\adapters\wsh_sys.js+.\tmp\test_b.js .\tmp\test.js
@rem regedit /s jse_9.reg
@cscript.exe //NoLogo //E:JavaScript9 .\tmp\test.js >> .\tmp\test_res.js
@rem regedit /s jse_reset.reg
@del .\tmp\test.js