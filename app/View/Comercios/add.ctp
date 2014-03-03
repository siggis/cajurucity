<div class="comercios form">
<?php echo $this->Form->create('Comercio'); ?>
	<fieldset>
		<legend><?php echo __('Add Comercio'); ?></legend>
	<?php
		echo $this->Form->input('user_id');
		echo $this->Form->input('categoria_id');
		echo $this->Form->input('name');
		echo $this->Form->input('endereco');
		echo $this->Form->input('cidade');
		echo $this->Form->input('estado');
		echo $this->Form->input('cep');
		echo $this->Form->input('localizacao');
		echo $this->Form->input('horarios');
		echo $this->Form->input('palavras');
		echo $this->Form->input('email');
		echo $this->Form->input('contato');
		echo $this->Form->input('telefones');
		echo $this->Form->input('pagamentos');
		echo $this->Form->input('site');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('List Comercios'), array('action' => 'index')); ?></li>
		<li><?php echo $this->Html->link(__('List Users'), array('controller' => 'users', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New User'), array('controller' => 'users', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Categorias'), array('controller' => 'categorias', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Categoria'), array('controller' => 'categorias', 'action' => 'add')); ?> </li>
	</ul>
</div>
