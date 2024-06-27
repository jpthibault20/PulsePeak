@echo off
for /F "tokens=*" %%A in (dependencies.txt) do (
    if "%%A" == "%%~nA" (
        npm install %%A
    ) else (
        %%A
    )
)