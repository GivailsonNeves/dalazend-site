<?php
function get_id_by_slug($page_slug)
{
    $page = get_page_by_path($page_slug);
    if ($page) {
        return $page->ID;
    } else {
        return null;
    }
}
function filter_gallery($item)
{
    return ["id" => $item['id'], "path" => $item['full_image_url']];
}
function get_post_plain_object($data, $data_eng)
{
    $plain_object = new stdClass();
    $plain_object->ID = $data->ID;
    $plain_object->updated_at = $data->post_modified;
    $plain_object->content = [
        "ptBR" => [
            "title" => $data->post_title,
            "text" => $data->post_content,
            "short" => $data->post_excerpt
        ],
        "eng" => [
            "title" => $data_eng->post_title,
            "text" => $data_eng->post_content,
            "short" => $data_eng->post_excerpt
        ]
    ];
    return $plain_object;
}
?>
<?php include get_template_directory() . '/inc/func_social_menu.php'; ?>
<?php include get_template_directory() . '/inc/func_rest_api.php'; ?>
<?php include get_template_directory() . '/inc/func_post_custom.php'; ?>
<?php
/**
 * Twenty Nineteen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since Twenty Nineteen 1.0
 */
