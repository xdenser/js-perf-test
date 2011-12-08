@echo off
@copy /b .\util\adapters\jsdb_sys.js+.\tmp\test_b.js .\tmp\test.js
@D:\Ins\Prog\JavaScript\JSDBn\jsdb.exe .\tmp\test.js >> .\tmp\test_res.js
@del .\tmp\test.js