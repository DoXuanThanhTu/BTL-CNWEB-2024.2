<?php
include "backend/header.php";
include "backend/slider.php";
include "class/course.php";

if (isset($_GET['course_id'])) {
    $course_id = $_GET['course_id'];

    $course = new course;

    // Call delete method in the Course class
    $delete_success = $course->delete_course($course_id);

    if ($delete_success) {
        // Chuyển hướng về danh sách khóa học và hiển thị thông báo thành công
        header("Location: courselist.php?status=success");
        exit();
    } else {
        // Chuyển hướng về danh sách khóa học mà không có thông báo (thất bại)
        header("Location: courselist.php");
        exit();
    }
} else {
    // Nếu không tìm thấy khóa học để xóa, chuyển hướng về danh sách khóa học
    header("Location: courselist.php");
    exit();
}
?>