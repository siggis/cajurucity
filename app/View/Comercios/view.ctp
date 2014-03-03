<div class="comercios view">
<h2><?php echo __('Comercio'); ?></h2>
	<dl>
		<dt><?php echo __('Id'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['id']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('User'); ?></dt>
		<dd>
			<?php echo $this->Html->link($comercio['User']['username'], array('controller' => 'users', 'action' => 'view', $comercio['User']['id'])); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Categoria'); ?></dt>
		<dd>
			<?php echo $this->Html->link($comercio['Categoria']['categoria'], array('controller' => 'categorias', 'action' => 'view', $comercio['Categoria']['id'])); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Name'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['name']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Endereco'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['endereco']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Cidade'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['cidade']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Estado'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['estado']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Cep'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['cep']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Localizacao'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['localizacao']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Horarios'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['horarios']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Palavras'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['palavras']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Email'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['email']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Contato'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['contato']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Telefones'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['telefones']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Pagamentos'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['pagamentos']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Site'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['site']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Created'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['created']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Modified'); ?></dt>
		<dd>
			<?php echo h($comercio['Comercio']['modified']); ?>
			&nbsp;
		</dd>
	</dl>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('Edit Comercio'), array('action' => 'edit', $comercio['Comercio']['id'])); ?> </li>
		<li><?php echo $this->Form->postLink(__('Delete Comercio'), array('action' => 'delete', $comercio['Comercio']['id']), null, __('Are you sure you want to delete # %s?', $comercio['Comercio']['id'])); ?> </li>
		<li><?php echo $this->Html->link(__('List Comercios'), array('action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Comercio'), array('action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Users'), array('controller' => 'users', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New User'), array('controller' => 'users', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Categorias'), array('controller' => 'categorias', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Categoria'), array('controller' => 'categorias', 'action' => 'add')); ?> </li>
	</ul>
</div>
