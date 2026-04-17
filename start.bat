@echo off
cd /d "%~dp0"
echo Starting AI Presentation...
echo.
echo Opening http://localhost:5173 in your browser.
echo To stop: close this window.
echo.
call npm run dev
pause
