<?php
include "src/header.php";
include "src/slider.php";
include "class/course.php";
?>
<?php
//----Add
$brand = new brand;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cartegory_id = $_POST['cartegory_id'];
    $brand_name = $_POST['brand_name'];
    $insert_brand = $brand->insert_brand($cartegory_id, $brand_name);
}
?>
<style>
    select {
        height: 30px;
        width: 200px;

    }
</style>

<div class="admin-content-right">
    <div class="admin-content-right-cartegory_add">
        <h1>Thêm khóa học</h1><br>
        <form action="" method="post">

            <select id="" name="cartegory_id">
                <option value="10">IT 3100</option>
                <option value="11">IT 4109</option>
                <option value="12">IT 3090</option>
                <?php
                $show_cartegory = $brand->show_cartegory();
                if ($show_cartegory) {
                    while ($result = $show_cartegory->fetch_assoc()) {

                ?>
                        <option value="<?php echo $result['cartegory_id'] ?>"><?php echo $result['cartegory_name'] ?></option>
                <?php
                    }
                }
                ?>
            </select><br>
            <br><input required name="brand_name" type="text" placeholder="Nhập tên khóa học">
            <button type="submit">THÊM</button>
        </form>
    </div>
</div>
</section>

<body>

</body>

</html>