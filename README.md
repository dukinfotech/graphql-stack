# 1. Hướng dẫn triển khai môi trường Development
## 1.1 Cài đặt phần mềm
### 1.1.1  Docker deskop (bản Window)
https://docs.docker.com/desktop/install/windows-install/
### 1.1.2 Bộ công cụ phát triển Java JDK-21 (bản window)
https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.exe
### 1.1.3 Nodejs Version: 20.9.0 (includes npm 10.1.0)
https://nodejs.org/en/download/
## 1.2 Config project
### 1.2.1 Kiểm tra đường dẫn thư mục JDK vừa cài bước 1.2  trong file .vscode/settings.json
```
"java.jdt.ls.java.home": "C:\\Program Files\\Java\\jdk-21"
```
### 1.2.2 Tạo file .env từ file .env.example
```
cp .env.example .env
```
## 1.3 Khởi động dự án
### 1.3.1 Khởi động docker-desktop
### 1.3.2. Khởi động docker container
```
docker-compose -f docker-compose.dev.yml up --build -d
```
### 1.3.3 Cài đặt node_modules (cả thư mục frontend và thư mục graphql-engine)
```
npm install
```
### 1.3.4 Khởi động Frontend, Backend
> Sử dụng chức năng "Run and Debug" trên VSCode
# 2. Hướng dẫn triển khai môi trường Production
## 2.1 Cài đặt phần mềm
### Docker engine (bản Linux)
https://docs.docker.com/engine/install/ubuntu/
## 2.2 Config project
### Tạo file .env từ file .env.example
```
cp .env.example .env
```
> Kiểm tra nội dung file .env
## 2.3 Khởi động dự án
```
docker-compose -f docker-compose.prod.yml up --build -d
```