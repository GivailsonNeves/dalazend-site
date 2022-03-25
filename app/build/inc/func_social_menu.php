<?php
add_action( 'admin_menu', 'social_add_admin_menu' );
add_action( 'admin_init', 'social_settings_init' );


function social_add_admin_menu(  ) { 

	add_options_page( 'Links sociais', 'Links sociais', 'manage_options', 'links_sociais', 'social_options_page' );

}


function social_settings_init(  ) { 

	register_setting( 'pluginPage', 'social_settings' );

	add_settings_section(
		'social_pluginPage_section', 
		__( 'Redes sociais', 'Links sociais' ), 
		'social_settings_section_callback', 
		'pluginPage'
	);

	add_settings_field( 
		'social_text_field_0', 
		__( 'Twitter', 'Links sociais' ), 
		'social_text_field_0_render', 
		'pluginPage', 
		'social_pluginPage_section' 
	);

	add_settings_field( 
		'social_text_field_1', 
		__( 'Instagram', 'Links sociais' ), 
		'social_text_field_1_render', 
		'pluginPage', 
		'social_pluginPage_section' 
	);

	add_settings_field( 
		'social_text_field_2', 
		__( 'Facebook', 'Links sociais' ), 
		'social_text_field_2_render', 
		'pluginPage', 
		'social_pluginPage_section' 
	);

	add_settings_field( 
		'social_text_field_3', 
		__( 'Youtube', 'Links sociais' ), 
		'social_text_field_3_render', 
		'pluginPage', 
		'social_pluginPage_section' 
	);

	add_settings_field( 
		'social_text_field_4', 
		__( 'Linkedin', 'Links sociais' ), 
		'social_text_field_4_render', 
		'pluginPage', 
		'social_pluginPage_section' 
	);

	add_settings_field( 
		'social_text_field_5', 
		__( 'Whatsapp', 'Links sociais' ), 
		'social_text_field_5_render', 
		'pluginPage', 
		'social_pluginPage_section' 
	);
	
	add_settings_field( 
		'social_text_field_6', 
		__( 'Calendly', 'Links sociais' ), 
		'social_text_field_6_render', 
		'pluginPage', 
		'social_pluginPage_section' 
	);


}


function social_text_field_0_render(  ) { 

	$options = get_option( 'social_settings' );
	?>
	<input type='text' name='social_settings[twitter]' value='<?php echo $options['twitter']; ?>'>
	<?php

}


function social_text_field_1_render(  ) { 

	$options = get_option( 'social_settings' );
	?>
	<input type='text' name='social_settings[instagram]' value='<?php echo $options['instagram']; ?>'>
	<?php

}


function social_text_field_2_render(  ) { 

	$options = get_option( 'social_settings' );
	?>
	<input type='text' name='social_settings[facebook]' value='<?php echo $options['facebook']; ?>'>
	<?php

}


function social_text_field_3_render(  ) { 

	$options = get_option( 'social_settings' );
	?>
	<input type='text' name='social_settings[youtube]' value='<?php echo $options['youtube']; ?>'>
	<?php

}


function social_text_field_4_render(  ) { 

	$options = get_option( 'social_settings' );
	?>
	<input type='text' name='social_settings[linkedin]' value='<?php echo $options['linkedin']; ?>'>
	<?php

}


function social_text_field_5_render(  ) { 

	$options = get_option( 'social_settings' );
	?>
	<input type='text' name='social_settings[whatsapp]' value='<?php echo $options['whatsapp']; ?>'>
	<?php

}

function social_text_field_6_render(  ) { 

	$options = get_option( 'social_settings' );
	?>
	<input type='text' name='social_settings[calendly]' value='<?php echo $options['calendly']; ?>'>
	<?php

}


function social_settings_section_callback(  ) { 

	echo __( 'Preencha os dados', 'Links sociais' );

}


function social_options_page(  ) { 

		?>
		<style>
			.general-settings fieldset  {
				border: 1px #ccc solid; 
				padding: 25px;
			}
			.general-settings fieldset > div {
				display: flex;
				width: 100%;
				margin-top: 30px;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
			}
			.general-settings .form-group {
				width: 48%;
				margin-bottom: 20px;
			}
			.general-settings .form-group label{
				font-weight: 700;
				margin-bottom: 5px;
				display: block;
			}
			.general-settings .form-group input{
				display: block;
				width: 100%;

			}
		</style>
		<div class="general-settings">
			<h2>Configurações do Site</h2>
			<form action='options.php' method='post'>			
				<fieldset class="social-links">
					<?php settings_fields( 'pluginPage' ); ?>
					<?php custom_do_settings_sections( 'pluginPage' ); ?>
				</fieldset>
				<?php submit_button(); ?>
			</form>
		</div>
		<?php

}


function custom_do_settings_sections( $page ) {
	global $wp_settings_sections, $wp_settings_fields;

	if ( ! isset( $wp_settings_sections[ $page ] ) ) {
		return;
	}

	foreach ( (array) $wp_settings_sections[ $page ] as $section ) {
		if ( $section['title'] ) {
			echo "<h2>{$section['title']}</h2>\n";
		}

		if ( $section['callback'] ) {
			call_user_func( $section['callback'], $section );
		}

		if ( ! isset( $wp_settings_fields ) || ! isset( $wp_settings_fields[ $page ] ) || ! isset( $wp_settings_fields[ $page ][ $section['id'] ] ) ) {
			continue;
		}
		echo '<div>';
		custom_do_settings_fields( $page, $section['id'] );
		echo '</div>';
	}
}


function custom_do_settings_fields( $page, $section ) {
    global $wp_settings_fields;
 
    if ( ! isset( $wp_settings_fields[ $page ][ $section ] ) ) {
        return;
    }
 
    foreach ( (array) $wp_settings_fields[ $page ][ $section ] as $field ) {
        $class = '';
 
        if ( ! empty( $field['args']['class'] ) ) {
            $class = ' class="form-group ' . esc_attr( $field['args']['class'] ) . '"';
        } else {
			$class = ' class="form-group"';
		}
 
        echo "<div{$class}>";
 
        if ( ! empty( $field['args']['label_for'] ) ) {
            echo '<label for="' . esc_attr( $field['args']['label_for'] ) . '">' . $field['title'] . '</label>';
        } else {
            echo '<label>' . $field['title'] . '</label>';
        }
 
        call_user_func( $field['callback'], $field['args'] );
        echo '</div>';
    }
}