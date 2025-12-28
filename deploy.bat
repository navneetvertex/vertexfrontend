@echo off
REM ================================
REM VertexFrontend Deployment Script
REM ================================

SET PEM_KEY_PATH=C:\Users\navne\Downloads\vertexkalyan.pem
SET EC2_HOST=52.65.32.92
SET EC2_USER=ubuntu
SET PROJECT_NAME=vertexfrontend

echo ================================
echo Deploying VertexFrontend to EC2
echo ================================

echo.
echo [1/4] Building Angular project...
call ng build --configuration production

if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Build completed!
    echo.
    echo [2/4] Uploading files to EC2...
    
    scp -i "%PEM_KEY_PATH%" -r dist\%PROJECT_NAME%\* %EC2_USER%@%EC2_HOST%:~/vertexfrontend_build/
    
    if %ERRORLEVEL% EQU 0 (
        echo [SUCCESS] Files uploaded!
        echo.
        echo [3/4] Deploying on server...
        
        ssh -i "%PEM_KEY_PATH%" %EC2_USER%@%EC2_HOST% "sudo rm -rf /var/www/html/* && sudo cp -r ~/vertexfrontend_build/* /var/www/html/ && sudo chown -R www-data:www-data /var/www/html/ && sudo systemctl restart nginx && rm -rf ~/vertexfrontend_build"
        
        echo [SUCCESS] Deployment complete!
        echo.
        echo [4/4] Done!
        echo ================================
        echo Your app is live at: http://%EC2_HOST%
        echo ================================
    ) else (
        echo [ERROR] Upload failed!
    )
) else (
    echo [ERROR] Build failed!
)

echo.
pause