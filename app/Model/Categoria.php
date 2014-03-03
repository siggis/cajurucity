<?php
App::uses('AppModel', 'Model');
/**
 * Categoria Model
 *
 * @property Comercio $Comercio
 */
class Categoria extends AppModel {

/**
 * Display field
 *
 * @var string
 */
	public $displayField = 'categoria';


	//The Associations below have been created with all possible keys, those that are not needed can be removed

/**
 * hasMany associations
 *
 * @var array
 */
	public $hasMany = array(
		'Comercio' => array(
			'className' => 'Comercio',
			'foreignKey' => 'categoria_id',
			'dependent' => false,
			'conditions' => '',
			'fields' => '',
			'order' => '',
			'limit' => '',
			'offset' => '',
			'exclusive' => '',
			'finderQuery' => '',
			'counterQuery' => ''
		)
	);

}
