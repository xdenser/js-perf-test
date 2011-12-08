@echo off
@copy /b .\util\adapters\v8_sys.js+.\tmp\test_b.js .\tmp\test.js
@D:\Ins\Prog\JavaScript\node.exe ./tmp/test.js >> .\tmp\test_res.js
@del .\tmp\test.js