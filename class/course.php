<?php
include "backend/database.php";
?>

<?php

class course {
    private $db;

    public function __construct() {
        $this->db = new Database();
    }

    // Hiển thị danh mục từ bảng brand
    public function show_cartegory() {
        $query = "SELECT * FROM brand ORDER BY cartegory_id DESC";
        return $this->db->select($query);
    }

    // Thêm học phần mới vào bảng course
    public function insert_course($ma_lop, $ma_hoc_phan, $ten_hoc_phan, $loai_lop, $khoa_vien, $cartegory_id) {
        $query = "INSERT INTO course (ma_lop, ma_hoc_phan, ten_hoc_phan, loai_lop, khoa_vien, cartegory_id) 
                  VALUES ('$ma_lop', '$ma_hoc_phan', '$ten_hoc_phan', '$loai_lop', '$khoa_vien', '$cartegory_id')";
        return $this->db->insert($query);
    }

    // Hiển thị danh sách các khóa học
    public function show_course() {
        $query = "SELECT * FROM course ORDER BY course_id DESC";
        return $this->db->select($query);
    }

    // Lấy thông tin khóa học theo course_id
    public function get_course($course_id) {
        $query = "SELECT * FROM course WHERE course_id = '$course_id'";
        return $this->db->select($query);
    }

    // Cập nhật thông tin khóa học theo course_id
    public function update_course($course_id, $ma_lop, $ma_hoc_phan, $ten_hoc_phan, $loai_lop, $khoa_vien, $cartegory_id) {
        $query = "UPDATE course SET 
                    ma_lop = '$ma_lop', 
                    ma_hoc_phan = '$ma_hoc_phan', 
                    ten_hoc_phan = '$ten_hoc_phan', 
                    loai_lop = '$loai_lop', 
                    khoa_vien = '$khoa_vien', 
                    cartegory_id = '$cartegory_id'
                  WHERE course_id = '$course_id'";
        return $this->db->update($query);
    }

    // Xóa khóa học theo course_id
    public function delete_course($course_id) {
        $query = "DELETE FROM course WHERE course_id = '$course_id'";
        return $this->db->delete($query);
    }
}
?>