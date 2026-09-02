# 🌸 Ghé Bên Ngài Blog (Sanity.io + Vercel)

Dự án Blog cá nhân/cộng đồng mang phong cách Comic / Hoạt hình nhẹ nhàng, kết hợp với Headless CMS **Sanity.io** để Admin quản lý nội dung qua giao diện đồ họa (GUI) và **Vercel** để vận hành website tốc độ cao.

---

## 🌟 Tính Năng Chính

* **Quản Lý Nội Dung Trực Quan (GUI):** Admin đăng, sửa, xóa bài viết và upload hình ảnh trực tiếp qua giao diện Sanity Studio mà không cần can thiệp mã nguồn.
* **Giao Diện Tiện Ích:** Hộp quà Lời Chúa tương tác ngẫu nhiên, trình phát Podcast & Nhạc nền, bộ lọc bài viết theo chủ đề và tìm kiếm từ khóa.
* **Tương Tác Độc Giả:** Form đóng góp tâm tình và bài viết từ người đọc.

---

## 🛠️ Yêu Cầu Chuẩn Bị

* **Node.js:** Phiên bản 16 trở lên (đã cài đặt trên máy tính).
* **Tài khoản Sanity.io:** Đăng ký miễn phí tại sanity.io.
* **Tài khoản GitHub & Vercel:** Đăng ký miễn phí tại github.com và vercel.com.

---

## 🚀 Hướng Dẫn Cấu Hình Và Khởi Chạy Dự Án

### Bước 1: Tạo và cấu hình Sanity CMS (Trang Quản Trị GUI)

1. Mở Terminal / Command Prompt trên máy tính và cài đặt Sanity CLI:
   `npm install -g @sanity/cli`

2. Khởi tạo dự án Sanity Studio mới:
   `sanity init`
   * Chọn **Create new project**.
   * Nhập tên dự án (VD: `ghe-ben-ngai-cms`).
   * Chọn dataset mặc định là `production`.

3. Định nghĩa Schema bài viết:
   * Trong thư mục dự án Sanity vừa tạo, mở thư mục `schemas`.
   * Tạo file `post.js` chứa các trường thông tin: Tiêu đề (title), Slug, Chủ đề (tag), Ngày đăng (publishedAt), Ảnh đại diện (mainImage), Tóm tắt (summary) và Nội dung (content).

4. Đưa trang quản trị Admin lên Internet:
   Chạy lệnh `sanity deploy` trong thư mục Sanity.
   Nhập tên miền mong muốn (VD: `ghe-ben-ngai.sanity.studio`). Sau khi hoàn tất, bạn đã có một trang quản trị Admin riêng tại đường dẫn này.

---

### Bước 2: Cấu hình API và Phân quyền CORS trên Sanity

1. Truy cập trang quản lý dự án tại **manage.sanity.io** và chọn dự án của bạn.
2. Sao chép **Project ID** xuất hiện tại mục *General*.
3. Thêm quyền truy cập API (CORS Origin):
   * Vào mục **API** -> chọn **CORS Origins** -> nhấn **Add CORS Origin**.
   * Nhập `*` (để chấp nhận mọi nguồn khi phát triển) hoặc nhập URL trang web Vercel của bạn.
   * Tích chọn mục **Allow credentials** và nhấn **Save**.

---

### Bước 3: Cấu hình file `index.html` của Website

1. Đổi tên file giao diện thành `index.html`.
2. Mở file `index.html` bằng trình chỉnh sửa mã nguồn (VS Code, Notepad++...).
3. Tìm đến đoạn cấu hình Sanity trong thẻ `<script>` ở cuối file.
4. Thay thế giá trị `SANITY_PROJECT_ID` bằng **Project ID** thực tế bạn đã lấy tại Bước 2.

---

### Bước 4: Upload mã nguồn lên GitHub và Deploy Vercel

1. **Đưa mã nguồn lên GitHub:**
   * Tạo một Repository mới trên GitHub.
   * Push toàn bộ các file giao diện (file `index.html`, thư mục hình ảnh, âm thanh...) lên Repository đó.

2. **Khởi chạy trang web trên Vercel:**
   * Truy cập **Vercel.com** và đăng nhập bằng tài khoản GitHub.
   * Chọn **Add New Project** -> nhấn **Import** tại Repository bạn vừa tạo.
   * Giữ nguyên các thiết lập mặc định và chọn **Deploy**.
   * Sau 1 - 2 phút, Vercel sẽ cấp cho bạn đường dẫn truy cập công khai (VD: `ghe-ben-ngai.vercel.app`).

---

## 📝 Hướng Dẫn Sử Dụng Dành Cho Admin

1. Truy cập vào đường dẫn trang Studio quản trị đã tạo ở Bước 1 (VD: `https://ghe-ben-ngai.sanity.studio`).
2. Đăng nhập bằng tài khoản Sanity.
3. Chọn mục **Bài Viết (Posts)** -> Nhấn nút **Create (+)** để tạo bài viết mới hoặc click chọn bài viết có sẵn để chỉnh sửa.
4. Nhập tiêu đề, tải ảnh đại diện, chọn chủ đề và soạn thảo nội dung bài viết.
5. Nhấn nút **Publish** màu xanh ở góc dưới bên phải. Trang web chính trên Vercel sẽ tự động cập nhật bài viết mới ngay lập tức!