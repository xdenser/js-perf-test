@echo off
@copy v8_sys.js+test_b.js test.js
@D:\Ins\Prog\JavaScript\node.exe test.js >> test_res.js
@del test.js