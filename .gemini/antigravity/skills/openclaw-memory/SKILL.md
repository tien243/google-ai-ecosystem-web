---
name: openclaw-memory
description: Hệ thống bộ nhớ hai tầng (Short-term/Long-term) và giao thức Heartbeat bảo trì tri thức. Ép buộc AI ghi chép nhật ký công việc và chắt lọc tinh hoa định kỳ.
---

# AI MEMORY & HEARTBEAT PROTOCOL (OpenClaw)

Kỹ năng này thiết lập một cơ chế tự nhận thức và ghi nhớ sâu cho AI trong suốt vòng đời của dự án.

## 🧠 1. KIẾN TRÚC TRÍ NHỚ HAI TẦNG
Dự án này ép buộc AI sử dụng hệ thống "Trí nhớ Đa Tầng" nhằm tối ưu hoá dải ngữ cảnh (Context Window) và theo sát quá trình làm việc:

- **Trí nhớ Ngắn hạn (`memory/YYYY-MM-DD.md`):** File sổ nháp theo ngày. Trọng tâm lưu Log, bug vừa fix, task đang dở dang của ngày hôm đó.
- **Trí nhớ Dài hạn (`MEMORY.md` hoặc `SOURCE_OF_TRUTH.md` ở root):** Sổ kinh điển. Giữ rường cột dự án như Quy chuẩn code của User, luồng deploy, kiến trúc DB. Không được chứa log rác.

## ⚡ 2. CẬP NHẬT TRÍ NHỚ THEO NGÀY (THỦ CÔNG BỞI AI)
Bất cứ khi nào hoàn thành 1 feature hoặc fix xong bug, AI **BẮT BUỘC** phải tự mở và ghi note thành tựu vào `memory/YYYY-MM-DD.md` (ngày hiện tại). 
- Không được phép chờ User phải lên tiếng nhắc "nhớ lấy lệnh này nhé". 
- Vừa Code xong là tự động ghi Log theo cấu trúc: Giờ giấc, Tên tính năng, File đã sửa.

## 💓 3. LAU DỌN VÀ CHẮT LỌC TỰ ĐỘNG (THÔNG QUA HEARTBEAT)
Trong trường hợp User hoặc hệ thống gửi một prompt mang từ khoá **HEARTBEAT** (hoặc lệnh trigger định kỳ): AI KHÔNG phản hồi xã giao, AI phải lập tức thực thi quy trình Bảo Trì:

1.  **Quét tổng thể:** Tự động mở quét tập các file trong thư mục `memory/`.
2.  **Chắt lọc Tinh Hoa:** Rút trích các quy chuẩn config mới, pattern hay, hoặc quy tắc làm việc User dặn dò rải rác trong file nháp. Tổng hợp và GHI ĐÈ / NÂNG CẤP chuẩn mực vào file dài hạn `MEMORY.md`.
3.  **Dọn rác (Garbage Collector):** Sau khi chắt lọc, nếu các file `YYYY-MM-DD.md` đã có tuổi đời quá 3-5 ngày, sử dụng quyền Bash dọn (Delete) luôn hoặc đẩy vào thư mục `memory/archive/`.
4.  **Báo cáo lại:** Trả về kết quả gọn gàng `HEARTBEAT_DONE_CLEANUP` và chìm vào giấc ngủ.

## 🔍 KIỂM TRA ĐẦU TIÊN KHI NHẬN TASK MỚI
Chỉ cần User chat bắt đầu tính năng mới, AI trước khi đề xuất code phải tự âm thầm `cat` hoặc đọc file `MEMORY.md` và file sửa nháp gần nhất để tái lặp bức tranh hệ thống. Không được hỏi User những thứ đã ghi chép.

---

## 🛠 Lệnh Cài Đặt (Installation Logic)
Khi người dùng yêu cầu "Cài memory cho dự án", AI thực hiện:
1. Tạo thư mục `memory/`.
2. Tạo file `MEMORY.md` tại root nếu chưa có.
3. Copy skill này vào `.gemini/antigravity/skills/openclaw-memory/SKILL.md`.
