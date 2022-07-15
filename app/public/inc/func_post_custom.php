<?php

$theme_pages = [
	["title" => "Sobre", "slug" => "sobre", "description" => ""],
	["title" => "About", "slug" => "sobre_eng", "description" => ""],
	["title" => "Escritorio", "slug" => "escritorio", "description" => ""],
	["title" => "Escritorio", "slug" => "escritorio_eng", "description" => ""],
	["title" => "Equipe", "slug" => "time", "description" => ""],
	["title" => "Team", "slug" => "time_eng", "description" => ""],
	["title" => "Ações", "slug" => "acoes", "description" => ""],
	["title" => "Team", "slug" => "acoes_eng", "description" => ""],
	["title" => "Contato", "slug" => "contato", "description" => ""],
	["title" => "Contact", "slug" => "contato_eng", "description" => ""],
];

add_theme_support('post-thumbnails');
add_action('init', 'init_theme');

function theme_excerpt_length($length)
{
	return 40;
}
add_filter('excerpt_length', 'theme_excerpt_length', 999);

function init_theme()
{
	custom_fields();
}


if (isset($_GET['activated']) && is_admin()) {
	foreach ($theme_pages as $page) {
		$page_title = $page["title"];
		$page_content = $page["description"];
		$page_check = get_page_by_title($page_title);
		$page = array(
			'post_type' => 'page',
			'post_title' => $page_title,
			'post_content' => $page_content,
			'post_status' => 'publish',
			'post_author' => 1,
			'post_slug' => $page["slug"]
		);
		if (!isset($page_check->ID)) {
			$page_id = wp_insert_post($page);
		}
	}
}

function custom_fields()
{

	//Time
	$labels = array(
		'name' => _x('Equipe', 'post type general name'),
		'singular_name' => _x('Equipe', 'post type singular name'),
		'add_new' => _x('Adicionar novo', 'Equipe'),
		'add_new_item' => __('Adicionar novo Equipe'),
		'edit_item' => __('Editar Video'),
		'new_item' => __('Novo Equipe'),
		'view_item' => __('Ver Equipe'),
		'search_items' => __('Buscar Portfolio'),
		'not_found' =>  __('Nothing found'),
		'not_found_in_trash' => __('Nothing found in Trash'),
		'parent_item_colon' => ''
	);

	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => array('title', 'thumbnail', 'editor')
	);

	register_post_type('team', $args);

	//Acting
	$labels = array(
		'name' => _x('Atuação', 'post type general name'),
		'singular_name' => _x('Atuação', 'post type singular name'),
		'add_new' => _x('Adicionar novo', 'Atuação'),
		'add_new_item' => __('Adicionar novo Atuação'),
		'edit_item' => __('Editar Atuação'),
		'new_item' => __('Novo Atuação'),
		'view_item' => __('Ver Atuação'),
		'search_items' => __('Buscar Atuação'),
		'not_found' =>  __('Nothing found'),
		'not_found_in_trash' => __('Nothing found in Trash'),
		'parent_item_colon' => ''
	);


	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => array('title', 'editor')
	);

	register_post_type('acting', $args);

	//Address
	$labels = array(
		'name' => _x('Endereço', 'post type general name'),
		'singular_name' => _x('Endereço', 'post type singular name'),
		'add_new' => _x('Adicionar novo', 'Endereço'),
		'add_new_item' => __('Adicionar novo Endereço'),
		'edit_item' => __('Editar Endereço'),
		'new_item' => __('Novo Endereço'),
		'view_item' => __('Ver Endereço'),
		'search_items' => __('Buscar Endereço'),
		'not_found' =>  __('Nothing found'),
		'not_found_in_trash' => __('Nothing found in Trash'),
		'parent_item_colon' => ''
	);


	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => array('title', 'editor')
	);

	register_post_type('address', $args);
}

//======================== admin

if (function_exists("register_field_group")) {
	register_field_group(array(
		'id' => 'acf_acting',
		'title' => 'Acting',
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'acting',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array(
			'position' => 'side',
			'layout' => 'no_box',
		),
		'menu_order' => 0,
	));
	register_field_group(array(
		'id' => 'acf_acting_texts',
		'title' => 'acf_acting',
		'fields' => array(
			array(
				'key' => 'field_acting_title',
				'label' => 'Titulo inglês',
				'name' => 'field_acting_title',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'formatting' => 'br',
			),
			array(
				'key' => 'field_acting_text',
				'label' => 'Texto em inglês',
				'name' => 'field_acting_text',
				'type' => 'wysiwyg',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'formatting' => 'br',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'acting',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array(
			'position' => 'normal',
			'layout' => 'no_box',
		),
		'menu_order' => 0,
	));

	///team
	register_field_group(array(
		'id' => 'acf_team',
		'title' => 'Team',
		'fields' => array(
			array(
				'key' => 'field_5b7a9445',
				'label' => 'Tipo',
				'name' => 'socio_tipo',
				'type' => 'select',
				'choices' => array(
					0 => 'Tipo',
					'socio' => 'Sócio',
					'associado' => 'Associado',
				),
				'default_value' => '',
				'allow_null' => 0,
				'multiple' => 0,
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'team',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array(
			'position' => 'side',
			'layout' => 'no_box',
		),
		'menu_order' => 0,
	));
	register_field_group(array(
		'id' => 'acf_team_texts',
		'title' => 'acf_team',
		'fields' => array(
			array(
				'key' => 'field_team_title',
				'label' => 'Titulo inglês',
				'name' => 'field_team_title',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'formatting' => 'br',
			),
			array(
				'key' => 'field_team_text',
				'label' => 'Texto em inglês',
				'name' => 'field_team_text',
				'type' => 'wysiwyg',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'formatting' => 'br',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'team',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array(
			'position' => 'normal',
			'layout' => 'no_box',
		),
		'menu_order' => 0,
	));

	///Address
	register_field_group(array(
		'id' => 'acf_addres',
		'title' => 'Address',
		'fields' => array(
			array(
				'key' => 'field_address_phone',
				'label' => 'Telefone',
				'name' => 'field_address_phone',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'formatting' => 'br',
			),
			array(
				'key' => 'field_estado',
				'label' => 'Estado',
				'name' => 'field_estado',
				'type' => 'select',
				'choices' => array(
					0 => 'Estado',
					'AC' => 'Acre',
					'AL' => 'Alagoas',
					'AP' => 'Amapá',
					'AM' => 'Amazonas',
					'BA' => 'Bahia',
					'CE' => 'Ceará',
					'DF' => 'Distrito Federal',
					'ES' => 'Espírito Santo',
					'GO' => 'Goiás',
					'MA' => 'Maranhão',
					'MT' => 'Mato Grosso',
					'MS' => 'Mato Grosso do Sul',
					'MG' => 'Minas Gerais',
					'PA' => 'Pará',
					'PB' => 'Paraíba',
					'PR' => 'Paraná',
					'PE' => 'Pernambuco',
					'PI' => 'Piauí',
					'RJ' => 'Rio de Janeiro',
					'RN' => 'Rio Grande do Norte',
					'RS' => 'Rio Grande do Sul',
					'RO' => 'Rondônia',
					'RR' => 'Roraima',
					'SC' => 'Santa Catarina',
					'SP' => 'São Paulo',
					'SE' => 'Sergipe',
					'TO' => 'Tocantins',
				),
				'default_value' => '',
				'allow_null' => 0,
				'multiple' => 0,
			),
			array(
				'key' => 'field_address_location',
				'label' => 'Google maps link',
				'name' => 'field_address_location',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'formatting' => 'br',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'address',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array(
			'position' => 'side',
			'layout' => 'no_box',
		),
		'menu_order' => 0,
	));
	///Address
	register_field_group(array(
		'id' => 'acf_gallery',
		'title' => 'Gallery',
		'fields' => array(
			array(
				'key' => 'field_gallery',
				'label' => 'Galeria de photos',
				'name' => 'field_gallery',
				'type' => 'photo_gallery',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => '',
				'formatting' => 'br',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'page',
					'operator' => '==',
					'value' => get_id_by_slug('escritorio'),
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array(
			'position' => 'normal',
			'layout' => 'no_box',
		),
		'menu_order' => 0,
	));
}


// function persist_registro($request) {
// 	$parameters = $request->get_params();
// 	$id = wp_insert_post(
// 		array('post_title'=> $parameters['field_5b7a964006c81'], 'post_type'=>'Videos')
// 	);

// 	// update_field('whatever_field_key_for_promotion_name_field', 'Teste', $id);
// 	update_field('field_5b7a964006c81', $parameters['field_5b7a964006c81'], $id);
// 	update_field('field_5b7a962a06c80', $parameters['field_5b7a962a06c80'], $id);
// 	update_field('field_5b7a965906c82', $parameters['field_5b7a965906c82'], $id);
// 	update_field('field_5b7a96da06c83', $parameters['field_5b7a96da06c83'], $id);
// 	update_field('field_5b7a96e906c84', $parameters['field_5b7a96e906c84'], $id);
// 	update_field('field_5b7a970b06c85', $parameters['field_5b7a970b06c85'], $id);

// 	return $id;

	// $permutaReedistribuicao = PermutaReedistribuicao::fromQueryParams($parameters);
	// $mensagem = "";

	// $result = array(
	// 				'sucesso' => true,
	// 				'data' => ''
	// );

	// if(@$parameters['id'])
	// {
	// 		$mensagem = $this->dao->atualizar($permutaReedistribuicao, $parameters['id']);               
			
	// }else{
	// 		$mensagem = $this->dao->inserir($permutaReedistribuicao);                
	// 		$result = array(
	// 				'sucesso' => $mensagem ? true : false,
	// 				'data' => $mensagem ? $mensagem : 'Usuário já possui registro'
	// 		);
	// 		$this->enviarEmailCadastro($permutaReedistribuicao);
	// }

	

	// return $result;
// }  

// add_action('rest_api_init', function($server){
// 	// $server->register_route( "api", '/registro', array(
// 	// 	array(
// 	// 			'methods'         => "GET",
// 	// 			'callback'        => array( $this, 'persist_registro' )                            
// 	// 	),
// 	// ));

// 	register_rest_route( 'api', '/registro', array(
// 		'methods' => 'POST',
// 		'callback' => 'persist_registro'
// 	));
// });

// function get_cat_slug($cat_id) {
// 	$cat_id = (int)$cat_id;
// 	$category = get_category($cat_id);
// 	return $category->slug;
// }
