echo off
For /f "tokens=1-4 delims=./ " %%a in ('date /t') do (set mydate=%%a%%b%%c)
For /f "tokens=1-4 delims=/:," %%a in ("%time%") do (set mytime=%%a%%b%%c)
@copy .\util\chartgen.js+.\tmp\test_res.js+.\util\out_res.js .\tmp\charts_d.js
@D:\Ins\Prog\JavaScript\node.exe .\tmp\charts_d.js > .\results\charts_%mydate%%mytime: =0%.html