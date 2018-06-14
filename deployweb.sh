#!/bin/bash

MFP_PATH=$1
WAR_FILE=$2

cd www/
jar -cMf $WAR_FILE .
rm -rf $MFP_PATH/$WAR_FILE
cp $WAR_FILE $MFP_PATH
ls $MFP_PATH
chmod 755 $MFP_PATH/$WAR_FILE
rm -rf $WAR_FILE
echo "War deployed successfully"
