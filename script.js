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
   // Xử lý sự kiện click vào nút "Tham gia"
  const joinButtons = document.querySelectorAll('.join-btn');
  joinButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Yêu cầu của bạn đã được chấp thuận');
      this.remove(); // Xoá nút sau khi bấm
    });
  });