@echo off
for /F "tokens=*" %%A in (dependencies.txt) do npm install %%A