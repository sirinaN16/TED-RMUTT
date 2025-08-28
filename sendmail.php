<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "nailscherry@gmaol.com";  // ใส่อีเมลที่จะรับข้อความ
    $subject = "ข้อความจากเว็บไซต์";
    $headers = "From: $email";

    $body = "ชื่อ: $name\nอีเมล: $email\nข้อความ:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "ส่งข้อความเรียบร้อยแล้ว!";
    } else {
        echo "ส่งไม่สำเร็จ กรุณาลองใหม่";
    }
}
?>
