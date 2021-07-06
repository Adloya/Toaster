@echo off
:prepare
echo .LOG>latest.log
echo ==================================>latest.log
cd src
mode 15,1
color 7F
cls
:running
title MultiJS -- Running
color 2f
node .>>latest.log
:crashed
color 4f
title MultiJS -- Crashed
echo [!] ERROR: Verrifiez src/Latest.log
ping localhost >nul
goto running
echo Si vous voyez ce texte, une erreur est survenue (meme avec une erreur de bot, ce texte ne devrait pas apparaitre)
pause >nul
exit