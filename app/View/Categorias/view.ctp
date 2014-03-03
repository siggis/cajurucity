<div class="categorias view">
<h2><?php echo __('Categoria'); ?></h2>
	<dl>
		<dt><?php echo __('Id'); ?></dt>
		<dd>
			<?php echo h($categoria['Categoria']['id']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Categoria'); ?></dt>
		<dd>
			<?php echo h($categoria['Categoria']['categoria']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Alias Name'); ?></dt>
		<dd>
			<?php echo h($categoria['Categoria']['alias_name']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('AllowRegistration'); ?></dt>
		<dd>
			<?php echo h($categoria['Categoria']['allowRegistration']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Created'); ?></dt>
		<dd>
			<?php echo h($categoria['Categoria']['created']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Modified'); ?></dt>
		<dd>
			<?php echo h($categoria['Categoria']['modified']); ?>
			&nbsp;
		</dd>
	</dl>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('Edit Categoria'), array('action' => 'edit', $categoria['Categoria']['id'])); ?> </li>
		<li><?php echo $this->Form->postLink(__('Delete Categoria'), array('action' => 'delete', $categoria['Categoria']['id']), null, __('Are you sure you want to delete # %s?', $categoria['Categoria']['id'])); ?> </li>
		<li><?php echo $this->Html->link(__('List Categorias'), array('action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Categoria'), array('action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Comercios'), array('controller' => 'comercios', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Comercio'), array('controller' => 'comercios', 'action' => 'add')); ?> </li>
	</ul>
</div>
<div class="related">
	<h3><?php echo __('Related Comercios'); ?></h3>
	<?php if (!empty($categoria['Comercio'])): ?>
	<table cellpadding = "0" cellspacing = "0">
	<tr>
		<th><?php echo __('Id'); ?></th>
		<th><?php echo __('User Id'); ?></th>
		<th><?php echo __('Categoria Id'); ?></th>
		<th><?php echo __('Name'); ?></th>
		<th><?php echo __('Endereco'); ?></th>
		<th><?php echo __('Cidade'); ?></th>
		<th><?php echo __('Estado'); ?></th>
		<th><?php echo __('Cep'); ?></th>
		<th><?php echo __('Localizacao'); ?></th>
		<th><?php echo __('Horarios'); ?></th>
		<th><?php echo __('Palavras'); ?></th>
		<th><?php echo __('Email'); ?></th>
		<th><?php echo __('Contato'); ?></th>
		<th><?php echo __('Telefones'); ?></th>
		<th><?php echo __('Pagamentos'); ?></th>
		<th><?php echo __('Site'); ?></th>
		<th><?php echo __('Created'); ?></th>
		<th><?php echo __('Modified'); ?></th>
		<th class="actions"><?php echo __('Actions'); ?></th>
	</tr>
	<?php foreach ($categoria['Comercio'] as $comercio): ?>
		<tr>
			<td><?php echo $comercio['id']; ?></td>
			<td><?php echo $comercio['user_id']; ?></td>
			<td><?php echo $comercio['categoria_id']; ?></td>
			<td><?php echo $comercio['name']; ?></td>
			<td><?php echo $comercio['endereco']; ?></td>
			<td><?php echo $comercio['cidade']; ?></td>
			<td><?php echo $comercio['estado']; ?></td>
			<td><?php echo $comercio['cep']; ?></td>
			<td><?php echo $comercio['localizacao']; ?></td>
			<td><?php echo $comercio['horarios']; ?></td>
			<td><?php echo $comercio['palavras']; ?></td>
			<td><?php echo $comercio['email']; ?></td>
			<td><?php echo $comercio['contato']; ?></td>
			<td><?php echo $comercio['telefones']; ?></td>
			<td><?php echo $comercio['pagamentos']; ?></td>
			<td><?php echo $comercio['site']; ?></td>
			<td><?php echo $comercio['created']; ?></td>
			<td><?php echo $comercio['modified']; ?></td>
			<td class="actions">
				<?php echo $this->Html->link(__('View'), array('controller' => 'comercios', 'action' => 'view', $comercio['id'])); ?>
				<?php echo $this->Html->link(__('Edit'), array('controller' => 'comercios', 'action' => 'edit', $comercio['id'])); ?>
				<?php echo $this->Form->postLink(__('Delete'), array('controller' => 'comercios', 'action' => 'delete', $comercio['id']), null, __('Are you sure you want to delete # %s?', $comercio['id'])); ?>
			</td>
		</tr>
	<?php endforeach; ?>
	</table>
<?php endif; ?>

	<div class="actions">
		<ul>
			<li><?php echo $this->Html->link(__('New Comercio'), array('controller' => 'comercios', 'action' => 'add')); ?> </li>
		</ul>
	</div>
</div>
