<?php
/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Config
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
$_pluralIrregular = array(
 'abdomen' => 'abdomens',
 'alemao' => 'alemaes',
 'user' => 'users'
);
 
$_uninflected = array('atlas', 'lapis', 'onibus', 'pires', 'virus', '.*x', 'status');
 
Inflector::rules('plural', array(
'rules' => array(
'/^(.*)ao$/i' => '\1oes',
'/^(.*)(r|s|z)$/i' => '\1\2es',
'/^(.*)(a|e|o|u)l$/i' => '\1\2is',
'/^(.*)il$/i' => '\1is',
'/^(.*)(m|n)$/i' => '\1ns',
'/^(.*)$/i' => '\1s'
),
'uninflected' => $_uninflected,
'irregular' => $_pluralIrregular
), true);