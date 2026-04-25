/**
 * HƯỚNG DẪN CÀI ĐẶT TỰ ĐỘNG GỬI EMAIL & LƯU GOOGLE SHEETS
 * 
 * 1. Mở một Google Sheet mới.
 * 2. Vào Tiện ích mở rộng > Apps Script.
 * 3. Xóa hết mã hiện tại và dán mã bên dưới vào.
 * 4. Nhấn "Triển khai" > "Lần triển khai mới".
 * 5. Chọn loại là "Ứng dụng Web".
 * 6. "Người có quyền truy cập" hãy chọn là "Bất kỳ ai".
 * 7. Copy URL nhận được và dán vào file RegistrationModal.tsx chỗ SCRIPT_URL.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // 1. Lưu vào Google Sheet
  sheet.appendRow([
    new Date(), 
    data.fullName, 
    data.phone, 
    data.email, 
    data.course, 
    data.message
  ]);
  
  // 2. Gửi Email thông báo cho Admin
  var adminEmail = "dinvoo1982@gmail.com";
  var subject = "YÊU CẦU MỚI TỪ WEBSITE: " + data.fullName;
  var body = "Bạn có một yêu cầu mới từ AVA Media VN:\n\n" +
             "Họ tên: " + data.fullName + "\n" +
             "Số điện thoại: " + data.phone + "\n" +
             "Email: " + data.email + "\n" +
             "Dịch vụ/Khóa học: " + data.course + "\n" +
             "Lời nhắn: " + data.message + "\n\n" +
             "Hãy liên hệ qua Zalo " + data.phone + " ngay!";
             
  MailApp.sendEmail(adminEmail, subject, body);
  
  return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
