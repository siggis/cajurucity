
CREATE TABLE IF NOT EXISTS `comercios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `categoria_id` int(11) unsigned NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `localizacao` varchar(255) DEFAULT NULL,
  `horarios` text,
  `palavras` text,
  `email` varchar(100) DEFAULT NULL,
  `contato` varchar(100) DEFAULT NULL,
  `telefones` varchar(100) DEFAULT NULL,
  `pagamentos` int(1) NOT NULL DEFAULT '0',
  `site` varchar(50) DEFAULT NULL,
  `logo` varchar(50) DEFAULT NULL,
  `banner` varchar(50) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FKIndex1` (`categoria_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;


INSERT INTO `comercios` (`id`, `user_id`, `categoria_id`, `name`, `endereco`, `cidade`, `estado`, `cep`, `localizacao`, `horarios`, `palavras`, `email`, `contato`, `telefones`, `pagamentos`, `site`, `logo`, `banner`, `created`, `modified`) VALUES
(1, 1, 1, 'Loja do Seba', 'Rua do Seba, 71 Fundos S/N', 'Cajuru', 'SP', '14240-000', 'Lat/Lon', 'Horário de Atendimento', 'montagem cabos telefonia', 'email@exemplo.com', 'Fulano de Tal', '3667-1201', 1, 'www.site.com.br', null, null, now(), now());


CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) DEFAULT NULL,
  `alias_name` varchar(100) DEFAULT NULL,
  `allowRegistration` int(1) NOT NULL DEFAULT '1',
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cat` (`categoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

INSERT INTO `categorias` (`id`, `categoria`, `alias_name`, `allowRegistration`, `created`, `modified`) VALUES
(1, 'Supermercado', 'Alimentação', 0, now(), now()),
(2, 'Padaria', 'Alimentação', 1, now(), now()),
(3, 'Empório', 'Secos e Molhados', 0, now(), now());
