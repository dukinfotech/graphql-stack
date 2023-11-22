# 1. Hướng dẫn triển khai môi trường Development
## 1.1 Cài đặt phần mềm
### 1.1.1  Docker deskop (bản Window)
https://docs.docker.com/desktop/install/windows-install/
### 1.1.2 Nodejs Version: 20.9.0 (includes npm 10.1.0)
https://nodejs.org/en/download/
### 1.2.3 Hasura CLI (bản Window)
https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/
## 1.2 Config project
### 1.2.1 Tạo file .env từ file .env.example
```
cp .env.example .env
```
## 1.3 Khởi động dự án
### 1.3.1 Khởi động docker-desktop
### 1.3.2. Khởi động docker container
```
docker-compose -f docker-compose.dev.yml up --build -d
```
### 1.3.3 Cài đặt node_modules (thư mục frontend, backend)
```
yarn install
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