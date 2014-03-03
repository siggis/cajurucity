<?php
App::uses('Comercio', 'Model');

/**
 * Comercio Test Case
 *
 */
class ComercioTest extends CakeTestCase {

/**
 * Fixtures
 *
 * @var array
 */
	public $fixtures = array(
		'app.comercio',
		'app.user',
		'app.categoria'
	);

/**
 * setUp method
 *
 * @return void
 */
	public function setUp() {
		parent::setUp();
		$this->Comercio = ClassRegistry::init('Comercio');
	}

/**
 * tearDown method
 *
 * @return void
 */
	public function tearDown() {
		unset($this->Comercio);

		parent::tearDown();
	}

}
