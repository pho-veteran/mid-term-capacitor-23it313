# Ứng dụng Mobile với Capacitor + React

## Yêu cầu hệ thống

- Node.js (phiên bản 14 trở lên)
- Android Studio (để chạy trên Android)
- Xcode (để chạy trên iOS - chỉ macOS)
- JDK (Java Development Kit)

## Cài đặt và Chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy ứng dụng trong môi trường development (cho web)

```bash
npm run dev
```

### 3. Thêm nền tảng mobile

```bash
# Thêm Android
npx cap add android

# Thêm iOS (chỉ macOS)
npx cap add ios
```

### 4. Build ứng dụng

```bash
npm run build
```

### 5. Chạy ứng dụng trên thiết bị

```bash
# Build ứng dụng
npm run build

# Đồng bộ các thay đổi với Capacitor
npx cap sync

# Mở Android Studio
npx cap open android

# Sau khi Android Studio mở, bạn có thể:
# 1. Kết nối thiết bị Android qua USB
# 2. Bật chế độ USB Debugging trên thiết bị
# 3. Chọn thiết bị từ danh sách trong Android Studio
# 4. Nhấn nút Run (biểu tượng play) để chạy ứng dụng
```

## Hướng dẫn sử dụng các tính năng

### Camera
- Chụp ảnh: Nhấn nút "Chụp ảnh" trên màn hình
- Chọn ảnh từ thư viện: Nhấn nút "Chọn ảnh"

### Thời gian
- Xem thời gian hiện tại: Nhấn nút "Xem giờ"
- Đặt báo thức: Chọn thời gian và nhấn "Đặt báo thức"
- Đồng hồ đếm ngược: Nhập thời gian và nhấn "Bắt đầu"

### Chia sẻ
- Chia sẻ văn bản: Chọn nội dung và nhấn nút "Chia sẻ" để chia sẻ thời gian hiện tại.

### Thông báo
- Nhận thông báo push: Đăng ký trong phần Cài đặt
- Quản lý thông báo: Vào Cài đặt > Thông báo
- Tắt/bật thông báo: Vào Cài đặt > Thông báo > Tùy chọn
