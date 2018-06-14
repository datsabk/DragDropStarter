

set MFP_PATH=%1
set WAR_FILE=%2


set MFP_PATH=%MFP_PATH:/=\%

del %MFP_PATH%\%WAR_FILE%
cd www

jar -cMf %WAR_FILE% .

copy %WAR_FILE% %MFP_PATH%
del %WAR_FILE%
echo "WAR Deployed!!"

