<?php
App::uses('AppController', 'Controller');
/**
 * Comercios Controller
 *
 * @property Comercio $Comercio
 * @property PaginatorComponent $Paginator
 */
class ComerciosController extends AppController {

/**
 * Components
 *
 * @var array
 */
	public $components = array('Paginator');

/**
 * index method
 *
 * @return void
 */
	public function index() {
		$this->Comercio->recursive = 0;
		$this->set('comercios', $this->Paginator->paginate());
	}

/**
 * view method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function view($id = null) {
		if (!$this->Comercio->exists($id)) {
			throw new NotFoundException(__('Invalid comercio'));
		}
		$options = array('conditions' => array('Comercio.' . $this->Comercio->primaryKey => $id));
		$this->set('comercio', $this->Comercio->find('first', $options));
	}

/**
 * add method
 *
 * @return void
 */
	public function add() {
		if ($this->request->is('post')) {
			$this->Comercio->create();
			if ($this->Comercio->save($this->request->data)) {
				$this->Session->setFlash(__('The comercio has been saved.'));
				return $this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The comercio could not be saved. Please, try again.'));
			}
		}
		$users = $this->Comercio->User->find('list');
		$categorias = $this->Comercio->Categorium->find('list');
		$this->set(compact('users', 'categorias'));
	}

/**
 * edit method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function edit($id = null) {
		if (!$this->Comercio->exists($id)) {
			throw new NotFoundException(__('Invalid comercio'));
		}
		if ($this->request->is(array('post', 'put'))) {
			if ($this->Comercio->save($this->request->data)) {
				$this->Session->setFlash(__('The comercio has been saved.'));
				return $this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The comercio could not be saved. Please, try again.'));
			}
		} else {
			$options = array('conditions' => array('Comercio.' . $this->Comercio->primaryKey => $id));
			$this->request->data = $this->Comercio->find('first', $options);
		}
		$users = $this->Comercio->User->find('list');
		$categorias = $this->Comercio->Categorium->find('list');
		$this->set(compact('users', 'categorias'));
	}

/**
 * delete method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function delete($id = null) {
		$this->Comercio->id = $id;
		if (!$this->Comercio->exists()) {
			throw new NotFoundException(__('Invalid comercio'));
		}
		$this->request->onlyAllow('post', 'delete');
		if ($this->Comercio->delete()) {
			$this->Session->setFlash(__('The comercio has been deleted.'));
		} else {
			$this->Session->setFlash(__('The comercio could not be deleted. Please, try again.'));
		}
		return $this->redirect(array('action' => 'index'));
	}}
