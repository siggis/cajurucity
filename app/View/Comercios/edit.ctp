<div class="comercios form">
<?php echo $this->Form->create('Comercio'); ?>
	<fieldset>
		<legend><?php echo __('Edit Comercio'); ?></legend>
	<?php
		echo $this->Form->input('id');
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
		echo $this->Form->input('logo');
		echo $this->Form->input('banner');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $this->Form->value('Comercio.id')), null, __('Are you sure you want to delete # %s?', $this->Form->value('Comercio.id'))); ?></li>
		<li><?php echo $this->Html->link(__('List Comercios'), array('action' => 'index')); ?></li>
		<li><?php echo $this->Html->link(__('List Users'), array('controller' => 'users', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New User'), array('controller' => 'users', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Categorias'), array('controller' => 'categorias', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Categoria'), array('controller' => 'categorias', 'action' => 'add')); ?> </li>
	</ul>
</div>
