<?php
add_image_size('article-size', 380, 240);

function get_about($params)
{
  $data = get_page_by_path('sobre');
  $data_eng = get_page_by_path('sobre_eng');
  $result = get_post_plain_object($data, $data_eng);
  $response = new WP_REST_Response($result);
  $response->set_status(200);
  return $response;
}

function get_office($params)
{
  $data = get_page_by_path('escritorio');
  $data_eng = get_page_by_path('escritorio_eng');
  $result = get_post_plain_object($data, $data_eng);
  $result->gallery = array_map('filter_gallery', get_field("field_gallery", $data->ID));
  $response = new WP_REST_Response($result);
  $response->set_status(200);
  return $response;
}

function get_contact($params)
{
  $data = get_page_by_path('contato');
  $data_eng = get_page_by_path('contato_eng');
  $result = get_post_plain_object($data, $data_eng);
  $result->phones = [];
  $address = get_posts(
    [
      'post_type' => 'address',
      'posts_per_page' => 30,
      'orderby' => 'post_date',
      'order' => 'ASC'
    ]
  );
  foreach ($address as $a) {
    $result->phones[] = [
      "number" => get_field("field_address_phone", $a->ID),
      "state" => get_field("field_estado", $a->ID),
    ];
  }
  $response = new WP_REST_Response($result);
  $response->set_status(200);
  return $response;
}

function get_team($params)
{
  $data = get_page_by_path('time');
  $data_eng = get_page_by_path('time_eng');
  $result = get_post_plain_object($data, $data_eng);
  $result->team = [];
  $team = get_posts(
    [
      'post_type' => 'team',
      'posts_per_page' => 30,
      'orderby' => 'post_date',
      'order' => 'ASC'
    ]
  );
  foreach ($team as $t) {
    $tipo = get_field("socio_tipo", $t->ID);
    $result->team[$tipo][] = [
      "picture" => get_the_post_thumbnail_url($t->ID),
      "content" => [
        "ptBR" => [
          "title" => $t->post_title,
          "text" => $t->post_content,
        ],
        "eng" => [
          "title" => $t->post_title,
          "text" => $t->post_content,
        ],
      ]
    ];
  }
  $response = new WP_REST_Response($result);
  $response->set_status(200);
  return $response;
}

function get_actions($params)
{
  $data = get_page_by_path('acoes');
  $data_eng = get_page_by_path('acoes_eng');
  $result = get_post_plain_object($data, $data_eng);
  $result->actions = [];
  $team = get_posts(
    [
      'post_type' => 'acting',
      'posts_per_page' => 30,
      'orderby' => 'post_date',
      'order' => 'ASC'
    ]
  );
  foreach ($team as $t) {
    $tipo = get_field("tipo", $t->ID);
    $result->actions[$tipo][] = [
      "content" => [
        "ptBR" => [
          "title" => $t->post_title,
          "text" => $t->post_content,
        ],
        "eng" => [
          "title" => $t->post_title,
          "text" => $t->post_content,
        ],
      ]
    ];
  }
  $response = new WP_REST_Response($result);
  $response->set_status(200);
  return $response;
}


function set_subscription(WP_REST_Request $request)
{
  global $wpdb;

  $table_name = $wpdb->prefix . 'cte';

  $return = $wpdb->insert($table_name, [
    "name" => $request["name"],
    "lastName" => $request["lastName"],
    "email" => $request["email"],
    // "consent" => $request["consent"],
  ]);

  $response = new WP_REST_Response($return);
  $response->set_status(200);
  return $response;
}

function get_social_options()
{
  $data = get_option('social_settings');
  $response = new WP_REST_Response($data);
  $response->set_status(200);
  return $response;
}

add_action('rest_api_init', function () {
  register_rest_route('options/v1', '/contact', [
    'methods' => 'GET',
    'callback' => 'get_contact',
  ]);

  register_rest_route('options/v1', '/about', [
    'methods' => 'GET',
    'callback' => 'get_about',
  ]);

  register_rest_route('options/v1', '/office', [
    'methods' => 'GET',
    'callback' => 'get_office',
  ]);

  register_rest_route('options/v1', '/team', [
    'methods' => 'GET',
    'callback' => 'get_team',
  ]);

  register_rest_route('options/v1', '/actions', [
    'methods' => 'GET',
    'callback' => 'get_actions',
  ]);

  register_rest_route('options/v1', '/social-links', [
    'methods' => 'GET',
    'callback' => 'get_social_options',
  ]);

  register_rest_route('options/v1', '/contact', [
    'methods' => 'POST',
    'callback' => 'set_subscription',
  ]);
});



function get_images($post_content)
{
  $search_pattern = '/src=\\"([^"]*)\\"/';
  $embedded_images = [];
  preg_match_all($search_pattern, $post_content, $embedded_images);
  if (count($embedded_images[0]) > 0) {
    return $embedded_images[1];
  }
  return [];
}
