<?php

$data = $wpdb->get_results("SELECT * FROM `wp_posts` ORDER BY `wp_posts`.`post_modified` DESC");

echo file_get_contents(__DIR__ . "/index.html");
?>
<script>
    window.VERSION_HASH = "<?php echo preg_replace('/\s+/', '-', $data[0]->post_modified); ?>";
</script>