(function(){		   //invocando a funcao
		'use strict'; //incluindo string  para o navegador nao ignorar erros de sintaxe na função
	
		angular.module("usuarios").controller("UsuariosController",Controller);
		Controller.$inject = ["lowercaseFilter"];
		
		// injetando um filtro
		
		function Controller(lc){

			var self = this;
			
			self.usuario = {}; 
			self.usuarios=[]; 
			self.pesquisa = "";
			
			self.novoUsuario = function(){
				self.usuario = {};
			}
		
			self.salvarUsuario = function(usuario){
				usuario.nome = lc(usuario.nome);
				if(usuario.id){
					editarUsuario(usuario);
				}else{
					incluirUsuario(usuario);
				}
			}
			
			function incluirUsuario(usuario){
				self.usuarios.push(usuario);
				self.novoUsuario();
			}
			
			function editarUsuario(usuario){
				var pos = -1;
				angular.forEach(this.usuarios,function(item,index){
					if(usuario.id == item.id){
						pos = index;
					}
				});
				if(pos > -1){
					self.usuarios.splice(pos,1,self.usuario);
					self.novoUsuario();
				}
			}
			
			this.removerUsuario = function(usuario){
				var pos = -1;
				angular.forEach(self.usuarios,function(item,index){
					var pos = -1;
					angular.forEach(self.usuarios,function(item,index){
						pos = index;
					});
					if(pos > -1){
						self.usuarios.splice(pos,1);
					}
				});
			}
			self.selecionarUsuario = function(usuario){
				self.usuario = angular.copy(usuario);
			}
		};
})();
		//O angular irá procurar o contexto do Angular angular.module("usuarios") e nisso 
		//registrar no controller no módulo, ou seja o controller usuarios Controller irá estar disponivel no módulo usuarios
		// temos 2 parametros o nome do controller CRTLusuario e uma função contrutora
		// quando está o this diz que a variavel estará disponivel publicamente para todos os outros componentes