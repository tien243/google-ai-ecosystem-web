---
name: coding-karpathy-guidelines
description: Bộ quy tắc tư duy lập trình tối giản và cẩn trọng của Andrej Karpathy. Áp dụng để giảm thiểu sai sót, tránh làm phức tạp hóa vấn đề và đảm bảo tính chính xác trong quá trình lập trình.
---

# Karpathy Guidelines (Coding Style & Methodology)

Bộ hướng dẫn hành vi dựa trên quan sát của **Andrej Karpathy** về các sai lầm phổ biến của LLM khi lập trình. Kỹ năng này ưu tiên sự **thận trọng và chính xác** hơn là tốc độ.

## When to Use (Khi nào sử dụng)
- Khi được yêu cầu viết code mới (HTML, JS, Python, v.v.).
- Khi sửa lỗi (debugging) hoặc refactor code hiện có.
- Khi thay đổi cấu trúc hoặc kiến trúc hệ thống.
- **TỰ ĐỘNG KÍCH HOẠT:** Luôn invoke skill này khi nhận thấy yêu cầu liên quan đến lập trình.

## When NOT to Use (Khi nào KHÔNG sử dụng)
- Các tác vụ phi kỹ thuật: viết content marketing, nghiên cứu thị trường, SEO audit, tổng hợp tin tức.
- Khi thảo luận về chiến lược kinh doanh hoặc ý tưởng sáng tạo không liên quan đến thực thi code.

---

## 1. Think Before Coding (Suy nghĩ trước khi viết mã)
**Đừng giả định. Đừng che giấu sự mơ hồ. Hãy làm rõ các lựa chọn.**

Trước khi triển khai:
- Nêu rõ các giả định của bạn. Nếu không chắc chắn, hãy hỏi.
- Nếu có nhiều cách hiểu, hãy trình bày các phương án - đừng âm thầm chọn một cái.
- Nếu có cách tiếp cận đơn giản hơn, hãy đề xuất. Hãy phản biện nếu thấy cần thiết.
- Nếu điều gì đó chưa rõ ràng, hãy dừng lại. Đặt tên chính xác cho sự nhầm lẫn đó và hỏi người dùng.

## 2. Simplicity First (Ưu tiên sự đơn giản)
**Chỉ viết mã tối thiểu để giải quyết vấn đề. Không suy đoán tương lai.**

- Không thêm tính năng vượt quá yêu cầu.
- Không tạo lớp trừu tượng (abstraction) cho mã chỉ dùng một lần.
- Không thêm tính linh hoạt hoặc cấu hình nếu không được yêu cầu.
- Không xử lý lỗi cho các tình huống bất khả thi.
- Nếu bạn viết 200 dòng nhưng có thể viết bằng 50 dòng, hãy viết lại.

**Tự hỏi:** *"Một kỹ sư dày dạn kinh nghiệm có nói rằng cái này quá phức tạp không?"* Nếu có, hãy đơn giản hóa.

## 3. Surgical Changes (Thay đổi mang tính phẫu thuật)
**Chỉ chạm vào những gì cần thiết. Chỉ dọn dẹp phần mình tạo ra.**

Khi chỉnh sửa code sẵn có:
- Không "cải thiện" code lân cận, comment hoặc định dạng không liên quan.
- Không refactor những thứ không bị hỏng.
- Tuân thủ style hiện tại, ngay cả khi bạn có cách làm khác.
- Nếu thấy code chết không liên quan, hãy nhắc đến nó - đừng tự ý xóa.

Khi thay đổi tạo ra các phần dư thừa:
- Xóa các imports/variables/functions mà chính thay đổi của BẠN làm cho nó không còn được sử dụng.
- Đừng xóa code chết có sẵn trừ khi được yêu cầu.

**Tiêu chí:** Mọi dòng code thay đổi đều phải truy xuất được trực tiếp từ yêu cầu của người dùng.

## 4. Goal-Driven Execution (Thực thi theo mục tiêu)
**Xác định tiêu chí thành công. Lặp lại cho đến khi được xác minh.**

Chuyển đổi nhiệm vụ thành các mục tiêu có thể kiểm chứng:
- "Thêm validation" → "Viết test cho input không hợp lệ, sau đó làm cho pass".
- "Sửa lỗi" → "Viết test tái hiện lỗi, sau đó sửa để pass".
- "Refactor X" → "Đảm bảo các test pass cả trước và sau khi sửa".

Đối với các nhiệm vụ nhiều bước, hãy nêu kế hoạch ngắn gọn:
1. [Bước] → xác minh: [kiểm tra]
2. [Bước] → xác minh: [kiểm tra]
3. [Bước] → xác minh: [kiểm tra]

Tiêu chí thành công rõ ràng giúp bạn tự làm việc độc lập. Tiêu chí mơ hồ ("làm cho nó chạy") sẽ làm lãng phí thời gian hỏi lại.
