@echo off 

choice /t 5 /d y /n > nul  
start Zh\run.exe

del %cd%\Db\data\mongod.lock

set "bd=%cd%"
cd db
cd bin
mongod --dbpath "%bd%\Db\data" --logpath "%bd%\Db\log\MongoDB.log"

pause