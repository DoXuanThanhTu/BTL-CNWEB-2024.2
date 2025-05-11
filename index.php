<?php
include "class/course.php";
$course = new course();
$show_course = $course->show_course();
?>
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đăng ký lớp học</title>
  <link rel="stylesheet" href="style-index.css">
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>
<body>
  <div class="admin-content">
    <aside class="admin-content-left">
      <h2 ><a href="" style="color: brown;">Dashboard</a></h2>
      <ul>
        <li><a href="">Programming Student</a>
            <ul>
                <li><a href="">Contest</a></li>
                <li><a href="">Library</a></li>
            </ul>
        </li>
        <li><a href="">Learning</a>
            <ul>
                <li><a href="">Class Registration</a></li>
                <li><a href="">Classes</a></li>
                <li><a href="">Join Quiz Test</a></li>
                <li><a href="">My Quiz Test</a></li>
                <li><a href="">Create Thesis</a></li>
            </ul>
        </li>
        <li><a href="">Exam</a>
            <ul>
                <li><a href="">My Exams</a></li>
            </ul>
        </li>
    </ul>
    </aside>

    <main class="main-content">
      <h1>Đăng ký lớp học - Học kỳ 20252</h1>
      <div class="search-bar">
        <input type="text" id="searchInput" placeholder="Tìm kiếm">
        <button><ion-icon name="search-outline" ></ion-icon></button>
      </div>

      <table id="foodList">
        <thead>
          <tr>
            <th>Mã lớp</th>
            <th>Mã học phần</th>
            <th>Tên học phần</th>
            <th>Loại lớp</th>
            <th>Khoa/Viện</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <?php
          if ($show_course) {
              while ($row = $show_course->fetch_assoc()) {
                  echo "<tr>";
                  echo "<td>{$row['ma_lop']}</td>";
                  echo "<td>{$row['ma_hoc_phan']}</td>";
                  echo "<td>{$row['ten_hoc_phan']}</td>";
                  echo "<td>{$row['loai_lop']}</td>";
                  echo "<td>{$row['khoa_vien']}</td>";
                  echo "<td><button class='join-btn'>Tham gia</button></td>";
                  echo "</tr>";
              }
          } else {
              echo "<tr><td colspan='7'>Không có dữ liệu khóa học.</td></tr>";
          }
          ?>
        </tbody>
      </table>
    </main>
  </div>

<script>
    //search
  const searchInput = document.getElementById('searchInput');
  const table = document.getElementById('foodList');
  const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

  searchInput.addEventListener('input', function () {
    const keyword = this.value.toLowerCase();

    for (let i = 0; i < rows.length; i++) {
      const rowText = rows[i].textContent.toLowerCase();
      if (rowText.includes(keyword)) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  });

  //Click "Tham gia"
  const joinButtons = document.querySelectorAll('.join-btn');
  joinButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Yêu cầu của bạn đã được chấp thuận');
      this.remove(); 
    });
  });
</script>
</body>
</html>
