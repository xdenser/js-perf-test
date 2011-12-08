@copy /b .\tests\V8_bm\richards.js+.\tests\V8_bm\crypto.js+.\tests\V8_bm\regexp.js .\tmp\v8.js
rem @copy .\V8_bm\richards.js+.\V8_bm\crypto.js+.\V8_bm\regexp.js+.\V8_bm\splay.js v8.js
rem @copy .\V8_bm\richards.js+.\V8_bm\deltablue.js v8.js
@copy /b .\util\test_base.js+.\tests\*.js+.\tmp\v8.js+.\util\test_exec.js .\tmp\test_b.js
@copy /b .\util\test_s.js .\tmp\test_res.js
