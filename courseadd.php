<?php
include "backend/header.php";
include "backend/slider.php";
include "class/course.php";
?>
<?php
//----Add
$course = new course;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ma_lop = $_POST["ma_lop"];
    $ma_hoc_phan = $_POST["ma_hoc_phan"];
    $ten_hoc_phan = $_POST["ten_hoc_phan"];
    $loai_lop = $_POST["loai_lop"];
    $khoa_vien = $_POST["khoa_vien"];
    $cartegory_id = $_POST["cartegory_id"];

    if ($course->insert_course($ma_lop, $ma_hoc_phan, $ten_hoc_phan, $loai_lop, $khoa_vien, $cartegory_id)) {
        echo "<script>alert('Thêm khóa học thành công!')</script>";
        echo "<script>window.location.href = 'courselist.php';</script>";
    } else {
        echo "<script>alert('Lỗi khi thêm khóa học!')</script>";
        echo "<script>window.history.back();</script>";
    }
}
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $ma_lop = $_POST['ma_lop'];
//     $ma_hoc_phan = $_POST['ma_hoc_phan'];
//     $ten_hoc_phan = $_POST['ten_hoc_phan'];
//     $loai_lop = $_POST['loai_lop'];
//     $khoa_vien = $_POST['khoa_vien'];
//     $cartegory_id = isset($_POST['cartegory_id']) ? $_POST['cartegory_id'] : null;

//     if ($cartegory_id !== null) {
//         $course = new course();
//         $course->insert_course($ma_lop, $ma_hoc_phan, $ten_hoc_phan, $loai_lop, $khoa_vien, $cartegory_id);
//     }
// }

?>
<style>
    select {
        height: 30px;
        width: 200px;

    }
</style>

<div class="admin-content-right">
    <div class="admin-content-right-course_add">
        <h1>Thêm thông tin khóa học</h1>
        <form action="" method="post">
        <label for="">Chọn danh mục <span style="color: red;">*</span></label>
            <select name="cartegory_id" id="cartegory_id" required>
                <option value="#">--Chọn--</option>
                <?php
                // Hiển thị danh mục từ bảng 'brand'
                $show_cartegory = $course->show_cartegory();
                if($show_cartegory) {
                    while($result = $show_cartegory->fetch_assoc()){
                ?>
                    <option value="<?php echo $result['cartegory_id'] ?>"><?php echo $result['cartegory'] ?></option>
                <?php
                    }
                }
                ?>
            </select>
            <label for="ma_lop">Mã lớp:</label>
            <input type="text" name="ma_lop" required><br><br>

            <label for="ma_hoc_phan">Mã học phần:</label>
            <input type="text" name="ma_hoc_phan" required><br><br>

            <label for="ten_hoc_phan">Tên học phần:</label>
            <input type="text" name="ten_hoc_phan" required><br><br>

            <label for="loai_lop">Loại lớp:</label>
            <input type="text" name="loai_lop"><br><br>

            <label for="khoa_vien">Khoa/Viện:</label>
            <input type="text" name="khoa_vien"><br><br>

            <button type="submit">THÊM KHÓA HỌC</button>
        </form>
    </div>
</div>
</section>

<body>

</body>

</html>