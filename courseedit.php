<?php
include "backend/header.php";
include "backend/slider.php";
include "class/course.php";

if (isset($_GET['course_id'])) {
    $course_id = $_GET['course_id'];

    $course = new course;
   
    $result = $course->get_course($course_id);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
    } else {
        echo "<p>Không tìm thấy khóa học để sửa</p>";
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ma_lop = $_POST['ma_lop'];
    $ma_hoc_phan = $_POST['ma_hoc_phan'];
    $ten_hoc_phan = $_POST['ten_hoc_phan'];
    $loai_lop = $_POST['loai_lop'];
    $khoa_vien = $_POST['khoa_vien'];
    $cartegory_id = $_POST['cartegory_id'];

    $update_success = $course->update_course($course_id, $ma_lop, $ma_hoc_phan, $ten_hoc_phan, $loai_lop, $khoa_vien, $cartegory_id);
    if ($update_success) {
    header("Location: courselist.php");
    exit();
} else {
    header("Location: courselist.php?error=1");
    exit();
}
}
?>

<div class="admin-content-right">
    <div class="admin-content-right-course_edit">
        <h1>Sửa khóa học</h1>
        <form action="courseedit.php?course_id=<?php echo $course_id; ?>" method="POST">
            <label for="ma_lop">Mã lớp:</label>
            <input type="text" name="ma_lop" value="<?php echo $row['ma_lop']; ?>" required><br><br>

            <label for="ma_hoc_phan">Mã học phần:</label>
            <input type="text" name="ma_hoc_phan" value="<?php echo $row['ma_hoc_phan']; ?>" required><br><br>

            <label for="ten_hoc_phan">Tên học phần:</label>
            <input type="text" name="ten_hoc_phan" value="<?php echo $row['ten_hoc_phan']; ?>" required><br><br>

            <label for="loai_lop">Loại lớp:</label>
            <input type="text" name="loai_lop" value="<?php echo $row['loai_lop']; ?>" required><br><br>

            <label for="khoa_vien">Khoa/Viện:</label>
            <input type="text" name="khoa_vien" value="<?php echo $row['khoa_vien']; ?>" required><br><br>

            <label for="cartegory_id">Danh mục:</label>
            <select name="cartegory_id" required>
                <?php
                
                $categories = $course->show_cartegory();
                while ($category = $categories->fetch_assoc()) {
                    $selected = ($category['cartegory_id'] == $row['cartegory_id']) ? 'selected' : '';
                    echo "<option value='" . $category['cartegory_id'] . "' $selected>" . $category['cartegory'] . "</option>";
                }
                ?>
            </select><br><br>

            <input type="submit" value="Cập nhật">
        </form>
    </div>
</div>


