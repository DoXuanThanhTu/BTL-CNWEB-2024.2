<?php
include "backend/header.php";
include "backend/slider.php";
include "class/course.php";

$course = new course;
$result = $course->show_course();
?>

<div class="admin-content-right">
    <div class="admin-content-right-course_list">
        <h1>Danh sách khóa học</h1>
        <?php
        if ($result && $result->num_rows > 0) {
            echo "<table border='1'>";
            echo "<tr><th>Mã lớp</th><th>Mã học phần</th><th>Tên học phần</th><th>Loại lớp</th><th>Khoa/Viện</th><th>Hành động</th></tr>";
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["ma_lop"] . "</td>";
                echo "<td>" . $row["ma_hoc_phan"] . "</td>";
                echo "<td>" . $row["ten_hoc_phan"] . "</td>";
                echo "<td>" . $row["loai_lop"] . "</td>";
                echo "<td>" . $row["khoa_vien"] . "</td>";
                echo "<td><a href='courseedit.php?course_id=" . $row["course_id"] . "'>Sửa</a> | <a href='coursedelete.php?course_id=" . $row["course_id"] . "' onclick=\"return confirm('Bạn có chắc chắn muốn xóa?')\">Xóa</a></td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "<p style='color:red;'>Chưa có khóa học nào được thêm hoặc có lỗi kết nối CSDL.</p>";
        }
        ?>
    </div>
</div>
