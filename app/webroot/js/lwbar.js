var lwbarConfig = {
    header: {},
    footer: {
        title: "Suporte e Ajuda",
        links: [{
            label: "Atendimento",
            title: "Atendimento",
            url: "https://centraldocliente.locaweb.com.br/treatment",
            icon: "bg-customer-support "
        }, {
            label: "Meus Chamados",
            title: "Meus Chamados",
            url: "https://centraldocliente.locaweb.com.br/tickets",
            icon: "bg-my-tickets "
        }, {
            label: "Central de Ajuda (Wiki)",
            title: "Central de Ajuda (Wiki)",
            url: "http://wiki.locaweb.com.br/pt-br/Página_principal",
            icon: "bg-help-desk "
        }, {
            label: "Statusblog",
            title: "Statusblog",
            url: "http://statusblog.locaweb.com.br",
            icon: "bg-statusblog"
        }
        ]
    },
    bar: "both"
};
!function() {
    this.JST || (this.JST = {}), this.JST["lwbar/_style"] = function(n) {
        n || (n = {});
        var e, o = [], t = n.safe, a = n.escape;
        return e = n.safe = function(n) {
            if (n && n.ecoSafe)
                return n;
            ("undefined" == typeof n || null == n) && (n = "");
            var e = new String(n);
            return e.ecoSafe=!0, e
        }, a || (a = n.escape = function(n) {
            return ("" + n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function() {
            !function() {
                o.push('<style>\n@font-face {\n  font-family: lwbar_locaicons;\n  src: url(http://locaweb.github.io/locawebstyle/assets/fonts/locaicons/locaicons.woff);\n}\n@font-face {\n  font-family: lwbar_opensans_regular;\n  src: url(http://locaweb.github.io/locawebstyle/assets/fonts/opensans/opensans-regular-webfont.woff);\n}\n\n#lwbar-header {\n    background: url(https://assets.locaweb.com.br/locastyle/1.2.8/images/bgToolbar.png) repeat-X center center;\n    position: relative;\n    font: 300 12px verdana,tahoma,arial,helvetica,sans-serif;\n    z-index: 2;\n    border-bottom: 1px solid #ffffff;\n}\n\n#lwbar-header .limit-toolbar {\n    position: relative;\n    max-width: 1180px;\n    margin: 0 auto;\n    height: 33px;\n}\n\n#lwbar-header h1.logo-toolbar {\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 80px;\n    height: 18px;\n    margin: -9px 0 0 0;\n    position: absolute;\n    top: 15px;\n    background: url(https://assets.locaweb.com.br/locastyle/1.2.8/images/tit-toolBar.png) no-repeat;\n    font: 30px arial,verdana,tahoma,sans-serif;\n    color: #000;\n}\n\n#lwbar-header .log-out {\n    font-size: 13px;\n    color: #D1D1D1;\n    background: url(https://assets.locaweb.com.br/locastyle/1.2.8/images/btSair.png) no-repeat center center;\n    padding: 2px 8px 2px 30px;\n    margin: 5px 0 0;\n    float: right;\n}\n\n#lwbar-header .user-name {\n    background: url(https://assets.locaweb.com.br/locastyle/1.2.8/images/bgUsuario.png) no-repeat left center;\n    font-size: 13px;\n    height: 17px;\n    color: #D1D1D1;\n    padding: 0 15px 3px 32px;\n    border-right: 1px solid #616161;\n    margin: 7px 15px 0 0;\n}\n\n#lwbar-header .user-name, #lwbar-header .log-out {\n    float: right;\n}\n\n#lwbar-header .user-name {\n    font-size: 13px;\n    color: #D1D1D1;\n}\n\n#lwbar-footer * {\n  font-family: lwbar_opensans_regular;\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);\n  box-sizing: border-box;\n}\n\n#lwbar-footer nav {\n  display: block;\n}\n\n#lwbar-footer .container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n#lwbar-footer [class*="ico-"].ico-pos-right:after,\n#lwbar-footer [class*="ico-"]:before {\n  position: relative;\n  top: -2px;\n  margin-right: 4px;\n  display: inline-block;\n  speak: none;\n  vertical-align: middle;\n  font-family: "lwbar_locaicons";\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n}\n\n#lwbar-footer .ico-screen:before{\n  content: "\\e014";\n}\n\n#lwbar-footer .visible-lg {\n  display: none !important;\n}\n\n#lwbar-footer.footer {\n  position: relative;\n  z-index: 0;\n  width: 100%;\n  background-color: white;\n  color: #555;\n  z-index: 5;\n}\n\n#lwbar-footer.footer .footer-menu {\n  background-color: #131313;\n}\n\n#lwbar-footer.footer .footer-menu nav .title-footer {\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 15px 0;\n  margin: 0 auto;\n  color: white;\n  font-weight: bolder;\n  font-size: 0.875em;\n  background: url(https://assets.locaweb.com.br/locastyle/2.0.0-b7/images/locastyle/footer/arrow-down.png) no-repeat center bottom;\n  font-family: lwbar_opensans_regular;\n  display: block;\n  line-height: 1.1;\n}\n\n#lwbar-footer.footer .footer-menu nav a {\n  color: white;\n  line-height: 54px;\n  text-decoration: none;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul {\n  margin: 0;\n  text-align: center;\n  position: relative;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul > li {\n  display: inline-block;\n  padding: 0;\n  margin: 0 10px;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul > li > a {\n  padding: 5px 0 5px 30px;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul > li > a:hover,\n#lwbar-footer.footer .footer-menu nav > ul > li > a:focus {\n  text-decoration: none;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul > li > a.bg-customer-support {\n  background: url(https://assets.locaweb.com.br/locastyle/2.0.0-b7/images/locastyle/footer/customer-support.png) no-repeat left;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul > li > a.bg-my-tickets {\n  background: url(https://assets.locaweb.com.br/locastyle/2.0.0-b7/images/locastyle/footer/my-tickets.png) no-repeat left;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul > li > a.bg-help-desk {\n  background: url(https://assets.locaweb.com.br/locastyle/2.0.0-b7/images/locastyle/footer/help-desk.png) no-repeat left;\n}\n\n#lwbar-footer.footer .footer-menu nav > ul > li > a.bg-statusblog {\n  background: url(https://assets.locaweb.com.br/locastyle/2.0.0-b7/images/locastyle/footer/statusblog.png) no-repeat left;\n}\n\n#lwbar-footer.footer .footer-info {\n  font-size: 0.687em;\n  text-align: center;\n  padding: 5px 15px 10px 0;\n  line-height: 14px;\n  display: block;\n}\n\n#lwbar-footer.footer .footer-info p {\n  border-top: solid 1px #d9d9d9;\n  margin-top: 5px;\n  padding-top: 5px;\n  font-size: 11px;\n}\n\n@media (min-width: 768px){\n  #lwbar-footer .container {\n    max-width: 750px;\n  }\n}\n\n@media (min-width: 992px){\n  #lwbar-footer .container {\n    max-width: 970px;\n  }\n  #lwbar-footer.footer {\n\n  }\n  #lwbar-footer.footer .footer-menu nav {\n    position: relative;\n    padding: 0;\n  }\n  #lwbar-footer.footer .footer-menu nav .title-footer {\n    float: left;\n    line-height: 25px;\n    padding: 15px 35px 15px 0;\n    background: url(https://assets.locaweb.com.br/locastyle/2.0.0-b7/images/locastyle/footer/arrow-left.png) no-repeat right;\n  }\n  #lwbar-footer.footer .footer-menu nav ul {\n    margin: 0;\n  }\n  #lwbar-footer.footer .footer-menu nav ul li {\n    margin-left: 20px;\n    margin-right: 0;\n    font-size: 0.812em;\n    width: 18%;\n  }\n  #lwbar-footer.footer .footer-menu nav ul li a .visible-lg {\n    display: inline-block !important;\n    opacity: 1;\n  }\n  #lwbar-footer.footer .footer-menu nav ul li:hover,\n  #lwbar-footer.footer .footer-menu nav ul li:focus,\n  #lwbar-footer.footer .footer-menu nav ul li:active {\n    opacity: 0.8;\n  }\n  #lwbar-footer.footer .footer-info {\n    padding-bottom: 10px;\n    padding: 5px 0;\n  }\n  #lwbar-footer.footer .footer-info span {\n    float: left;\n    margin-right: 10px;\n  }\n  #lwbar-footer.footer .footer-info .copy-right {\n    float: right;\n    border: none;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  #lwbar-footer .container {\n    max-width: 1170px;\n  }\n}\n</style>\n')
            }.call(this)
        }.call(n), n.safe = t, n.escape = a, o.join("")
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["lwbar/_header"] = function(n) {
        n || (n = {});
        var e, o = [], t = function(n) {
            return n && n.ecoSafe ? n : "undefined" != typeof n && null != n ? r(n) : ""
        }, a = n.safe, r = n.escape;
        return e = n.safe = function(n) {
            if (n && n.ecoSafe)
                return n;
            ("undefined" == typeof n || null == n) && (n = "");
            var e = new String(n);
            return e.ecoSafe=!0, e
        }, r || (r = n.escape = function(n) {
            return ("" + n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function() {
            !function() {
                o.push('<div id="lwbar-header">\n  <div class="limit-toolbar">\n    <h1 class="logo-toolbar">Central do Cliente</h1>\n    '), this.logoutUrl && (o.push('\n      <a href="'), o.push(t(this.logoutUrl)), o.push('" accesskey="q" data-method="delete" class="log-out" title="Para sair, pressione CONTROL + ALT + Q">Sair</a>\n    ')), o.push("\n    "), this.userName && (o.push('\n      <span class="user-name"><strong>'), o.push(t(this.userName)), o.push("</strong></span>\n    ")), o.push("\n  </div>\n</div>\n")
            }.call(this)
        }.call(n), n.safe = a, n.escape = r, o.join("")
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["lwbar/_footer"] = function(n) {
        n || (n = {});
        var e, o = [], t = function(n) {
            return n && n.ecoSafe ? n : "undefined" != typeof n && null != n ? r(n) : ""
        }, a = n.safe, r = n.escape;
        return e = n.safe = function(n) {
            if (n && n.ecoSafe)
                return n;
            ("undefined" == typeof n || null == n) && (n = "");
            var e = new String(n);
            return e.ecoSafe=!0, e
        }, r || (r = n.escape = function(n) {
            return ("" + n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function() {
            !function() {
                var n, e, a, r;
                for (o.push(' <footer class="footer" id="lwbar-footer">\n    <div class="footer-menu">\n      <nav class="container">\n        <h2 class="title-footer">suporte e ajuda</h2>\n        <ul class="no-liststyle">\n          '), r = this.footer.links, e = 0, a = r.length; a > e; e++)
                    n = r[e], o.push('\n            <li class="lwbar-footer-nav-item">\n              <a href="'), o.push(t(n.url)), o.push('" title="'), o.push(t(n.title)), o.push('" class="'), o.push(t(n.icon)), o.push('" target="_blank">\n                <span class="visible-lg">\n                  '), o.push(t(n.label)), o.push("\n                </span>\n              </a>\n            </li>\n          ");
                o.push('\n        </ul>\n      </nav>\n    </div>\n    <div class="container footer-info">\n      '), this.infoLastacess && (o.push('\n      <span class="last-access ico-screen"><strong>Último acesso:</strong> '), o.push(t(this.infoLastacess)), o.push("</span>\n      ")), o.push("\n      "), this.infoIp && (o.push('\n      <div class="set-ip"><span class="set-ip"><strong>IP:</strong> '), o.push(t(this.infoIp)), o.push("</span></div>\n      ")), o.push('\n      <p class="copy-right">Copyright © 1997-2014 Locaweb Serviços de Internet S/A.</p>\n    </div>\n  </footer>\n')
            }.call(this)
        }.call(n), n.safe = a, n.escape = r, o.join("")
    }
}.call(this), function() {
    var n = n || {};
    n.lwbar = function() {
        "use strict";
        function n(n) {
            o(), e(n)
        }
        function e(n) {
            var e = document.getElementsByTagName("script"), o = e[e.length-1];
            for (var r in o.dataset)
                o.dataset.hasOwnProperty(r) && (n[r] = o.dataset[r] || n[r]);
            n.bar = o.dataset.bar || n.bar, ("both" === n.bar || "header" === n.bar) && a(n), ("both" === n.bar || "footer" === n.bar) && t(n), document.getElementsByTagName("html")[0].className += " with-lwbar-" + n.bar
        }
        function o() {
            r._appendHtml(document.head, JST["lwbar/_style"]())
        }
        function t(n) {
            r._appendHtml(document.body, JST["lwbar/_footer"](n))
        }
        function a(n) {
            r._prependHtml(document.body, JST["lwbar/_header"](n))
        }
        var r = function() {
            function n(n, e) {
                var o = document.createElement("div");
                for (o.innerHTML = e; o.children.length > 0;)
                    n.appendChild(o.children[0])
            }
            function e(n, e) {
                var o = document.createElement("div");
                o.innerHTML = e, document.body.insertBefore(o.children[0], document.body.firstChild)
            }
            return {
                _appendHtml: n,
                _prependHtml: e
            }
        }();
        return {
            init: n
        }
    }(), n.lwbar.init(lwbarConfig)
}();
