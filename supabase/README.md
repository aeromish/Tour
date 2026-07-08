# SQL của Dọc Bờ

Chạy trong Supabase → SQL Editor, theo thứ tự.

| File | Trạng thái | Việc |
|---|---|---|
| `01_schema.sql` | ✅ đã chạy | bảng places / provinces / types + RLS |
| `02_seed.sql` | ✅ đã chạy | nạp 464 điểm |
| `03_suggestions.sql` | ✅ đã chạy | bảng góp ý cộng đồng |
| `04_storage.sql` | ⬜ **cần chạy** | tạo kho ảnh `places` (không có thì upload ảnh báo "Bucket not found") |
| `05_recolor.sql` | ⬜ **cần chạy** | đổi màu 3 loại điểm cho khớp nhận diện mới |
| `07_admin_lockdown.sql` | ⬜ **nên chạy** | siết quyền: chỉ user trong bảng `admins` mới ghi được (nhớ đổi email trong file) |
| `08_money_sync.sql` | 🔒 **để dành** | đồng bộ Chia tiền lên máy chủ. Hiện Chia tiền chạy offline hoàn toàn — chỉ chạy file này khi muốn bật đồng bộ |

## Muốn bật đồng bộ Chia tiền sau này
1. Chạy `07_admin_lockdown.sql` (bắt buộc, nếu chưa).
2. Chạy `08_money_sync.sql`.
3. Supabase → Authentication → bật Google (hoặc Email), bật "Allow new users to sign up" nếu muốn người khác cũng lưu được.
4. Trong `app/chia-tien/index.html`: nạp lại `supabase-js`, gắn khối đăng nhập, và gọi hàm đẩy dữ liệu trong `save()` (đã ghi chú sẵn chỗ móc).

Dữ liệu Chia tiền là một cục JSON `{name, members, treasurer, contribs, expenses}` — cất nguyên vào cột `jsonb`, không cần chuyển đổi gì.
