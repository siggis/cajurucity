<!DOCTYPE html>
<html lang="pt-br">
<head>
  <title>A sua cidade e você na internet: contribua, participe!</title>
  <meta charset="utf-8">
 
  <!-- Isso é necessário para funcionar a versão mobile -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
 
  <!-- CSS -->
	<?php
		echo $this->Html->meta('icon');
		echo $this->Html->css('bootstrap');
		echo $this->Html->css('locastyle');	
        echo $this->Html->script('jquery-2.0.3.min');	
        echo $this->Html->script('locastyle');
        echo $this->Html->script('bootstrap');
		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
</head>
<body>
 
 
  <!-- Header principal -->
  <header class="header" role="banner">
    <div class="container">
      <span class="control-menu visible-xs ico-menu-2"></span>
      <span class="control-sidebar visible-xs ico-list"></span>
      <h1 class="project-name"><a href="#">CajuruCity.com.br</a></h1>
      <a href="criticasesugestoes.php" class="help-suggestions ico-question hidden-xs">Críticas e Sugestões</a>
 
      <div class="dropdown hidden-xs">
        <a href="#" data-toggle="dropdown" class="title-dropdown">Categorias</a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
          <li><a href="#" role="menuitem">1Farmácia</a></li>
          <li><a href="#" role="menuitem">2Tintas</a></li>
          <li><a href="#" role="menuitem">3Médicos</a></li>
          <li><a href="#" role="menuitem">4Farmácia</a></li>
          <li><a href="#" role="menuitem">5Tintas</a></li>
          <li><a href="#" role="menuitem">6Médicos</a></li>
          <li><a href="#" role="menuitem">7Farmácia</a></li>
          <li><a href="#" role="menuitem">8Tintas</a></li>
          <li><a href="#" role="menuitem">9Médicos</a></li>
          <li><a href="#" role="menuitem">0Farmácia</a></li>
          <li><a href="#" role="menuitem">1Tintas</a></li>
          <li><a href="#" role="menuitem">2Médicos</a></li>
          <li><a href="#" role="menuitem">1Farmácia</a></li>
          <li><a href="#" role="menuitem">2Tintas</a></li>
          <li><a href="#" role="menuitem">3Médicos</a></li>
          <li><a href="#" role="menuitem">4Farmácia</a></li>
          <li><a href="#" role="menuitem">5Tintas</a></li>
          <li><a href="#" role="menuitem">6Médicos</a></li>
          <li><a href="#" role="menuitem">7Farmácia</a></li>
          <li><a href="#" role="menuitem">8Tintas</a></li>
          <li><a href="#" role="menuitem">9Médicos</a></li>
          <li><a href="#" role="menuitem">0Farmácia</a></li>
          <li><a href="#" role="menuitem">1Tintas</a></li>
          <li><a href="#" role="menuitem">2Médicos</a></li>
        </ul>
      </div>
      <div>
        &nbsp; &nbsp;
        <a href="#" data-toggle="dropdown" class="title-dropdown">Ruas</a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
          <li><a href="#" role="menuitem">José Bonifácio</a></li>
          <li><a href="#" role="menuitem">Dr Mata</a></li>
          <li><a href="#" role="menuitem">Sete Setembro</a></li>
        </ul>
      </div>
    </div>
  </header>
 
  <!-- Menu -->
  <div class="nav-content">
    <menu class="menu">
      <ul class="container">
        <li><a href="index.php" class="active ico-home" role="menuitem">Home</a></li>
        <li><a href="perfildacidade.php" role="menuitem">Perfil da Cidade</a></li>
        <li><a href="turismo.php" role="menuitem">Turismo</a></li>
        <li><a href="comochegar.php" role="menuitem">Como Chegar</a></li>
        <li><a href="#" role="menuitem">Procura-se</a>
          <ul>
            <li><a href="procurase.php?q=empregos">Empregos</a></li>
            <li><a href="procurase.php?q=produtos">Produtos</a></li>
            <li><a href="procurase.php?q=pessoas">Pessoas</a></li>
            <li><a href="procurase.php?q=animais">Animais</a></li>
          </ul>
        </li>
        <li><a href="classificados.php" role="menuitem">Classificados</a></li>
        <li><a href="arealojista.php" role="menuitem">Área do Lojista</a></li>
        <li><a role="menuitem">
            <form action="pesquisar.php" method="get">
                <fieldset>
                    <label><input type="text" name="q" placeholder="Digite sua pesquisa aqui"></label>
                    <label><input type="image" src="/ckcajuru/images/locastyle/btn-search-locaweb.png"></label>
                </fieldset>
            </form></a>
        </li>

      </ul>
    </menu>
    <h2 class="title-sep visible-xs">Mais</h2>
    <ul class="nav-mob-list visible-xs">
      <li><a href="ajudaesugestoes.php" class="ico-help-circle">Ajuda e sugestões</a></li>
    </ul>
  </div>
 
  <!-- Aqui começa a parte de conteúdo dividido por colunas -->
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col-md-9 content" role="main">
			<?php echo $this->Session->flash(); ?>
			<?php echo $this->fetch('content'); ?>
        </div>
        <aside class="col-md-3 sidebar" role="complementary">
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar 
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar 
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar 
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar
           Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar Sidebar 
        </aside>
      </div>
    </div>
  </main>
 
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-menu">
      <nav class="container">
        <h2 class="title-footer">suporte e ajuda</h2>
        <ul class="no-liststyle">
          <li><a href="atendimento.php" class="bg-customer-support"><span class="visible-lg">Atendimento</span></a></li>
          <li><a href="contato.php" class="bg-my-tickets"><span class="visible-lg">Contato</span></a></li>
          <li><a href="centralajuda.php" class="bg-help-desk"><span class="visible-lg">Central de Ajuda</span></a></li>
          <li><a href="blog.php" class="bg-statusblog"><span class="visible-lg">Blog</span></a></li>
        </ul>
      </nav>
    </div>
    <div class="container footer-info">
      <span class="last-access ico-screen"><strong>Usuários on-line: </strong>87</span>
      <div class="set-ip"><span class="set-ip"><strong>IP:</strong><?php echo $_SERVER['REMOTE_ADDR']; ?></span></div>
      <p class="copy-right">Copyright © 2014 webCentre. Todo o conteúdo deste site é de uso exclusivo da webCentre.</p>
    </div>
  </footer>
</body>
</html>