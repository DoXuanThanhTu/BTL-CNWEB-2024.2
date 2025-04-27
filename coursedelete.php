<?php
//-----Delete
include "class/course.php";
$brand = new brand;
$brand_id = $_GET['brand_id'];
$delete_brand = $brand->delete_brand($brand_id);

?>