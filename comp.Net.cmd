@%1\jsc.exe /out:".\tmp\test.exe" ".\util\adapters\NET_sys.js" ".\tmp\test_b.js"
@.\tmp\test.exe >> .\tmp\test_res.js
@del .\tmp\test.exe