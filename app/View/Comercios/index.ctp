<div class="comercios index">
	<h2><?php echo __('Comercios'); ?></h2>
	<table cellpadding="0" cellspacing="0">
	<tr>
			<th><?php echo $this->Paginator->sort('id'); ?></th>
			<th><?php echo $this->Paginator->sort('user_id'); ?></th>
			<th><?php echo $this->Paginator->sort('categoria_id'); ?></th>
			<th><?php echo $this->Paginator->sort('name'); ?></th>
			<th><?php echo $this->Paginator->sort('endereco'); ?></th>
			<th><?php echo $this->Paginator->sort('cidade'); ?></th>
			<th><?php echo $this->Paginator->sort('estado'); ?></th>
			<th><?php echo $this->Paginator->sort('cep'); ?></th>
			<th><?php echo $this->Paginator->sort('localizacao'); ?></th>
			<th><?php echo $this->Paginator->sort('horarios'); ?></th>
			<th><?php echo $this->Paginator->sort('palavras'); ?></th>
			<th><?php echo $this->Paginator->sort('email'); ?></th>
			<th><?php echo $this->Paginator->sort('contato'); ?></th>
			<th><?php echo $this->Paginator->sort('telefones'); ?></th>
			<th><?php echo $this->Paginator->sort('pagamentos'); ?></th>
			<th><?php echo $this->Paginator->sort('site'); ?></th>
			<th><?php echo $this->Paginator->sort('created'); ?></th>
			<th><?php echo $this->Paginator->sort('modified'); ?></th>
			<th class="actions"><?php echo __('Actions'); ?></th>
	</tr>
	<?php foreach ($comercios as $comercio): ?>
	<tr>
		<td><?php echo h($comercio['Comercio']['id']); ?>&nbsp;</td>
		<td>
			<?php echo $this->Html->link($comercio['User']['username'], array('controller' => 'users', 'action' => 'view', $comercio['User']['id'])); ?>
		</td>
		<td>
			<?php echo $this->Html->link($comercio['Categoria']['categoria'], array('controller' => 'categorias', 'action' => 'view', $comercio['Categoria']['id'])); ?>
		</td>
		<td><?php echo h($comercio['Comercio']['name']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['endereco']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['cidade']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['estado']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['cep']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['localizacao']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['horarios']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['palavras']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['email']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['contato']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['telefones']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['pagamentos']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['site']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['created']); ?>&nbsp;</td>
		<td><?php echo h($comercio['Comercio']['modified']); ?>&nbsp;</td>
		<td class="actions">
			<?php echo $this->Html->link(__('View'), array('action' => 'view', $comercio['Comercio']['id'])); ?>
			<?php echo $this->Html->link(__('Edit'), array('action' => 'edit', $comercio['Comercio']['id'])); ?>
			<?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $comercio['Comercio']['id']), null, __('Are you sure you want to delete # %s?', $comercio['Comercio']['id'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
	</table>
	<p>
	<?php
	echo $this->Paginator->counter(array(
	'format' => __('Page {:page} of {:pages}, showing {:current} records out of {:count} total, starting on record {:start}, ending on {:end}')
	));
	?>	</p>
	<div class="paging">
	<?php
		echo $this->Paginator->prev('< ' . __('previous'), array(), null, array('class' => 'prev disabled'));
		echo $this->Paginator->numbers(array('separator' => ''));
		echo $this->Paginator->next(__('next') . ' >', array(), null, array('class' => 'next disabled'));
	?>
	</div>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('New Comercio'), array('action' => 'add')); ?></li>
		<li><?php echo $this->Html->link(__('List Users'), array('controller' => 'users', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New User'), array('controller' => 'users', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Categorias'), array('controller' => 'categorias', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Categoria'), array('controller' => 'categorias', 'action' => 'add')); ?> </li>
	</ul>
</div>
