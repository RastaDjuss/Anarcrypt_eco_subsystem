import{_ as i,r as o,o as d,c,a as e,b as n,w as t,F as l,d as a,e as u}from"./app.07ce7a66.js";var p="/assets/account-matrix.c3a79f80.png",m="/assets/pda-curve.7c0b9307.png";const h={},_=e("h1",{id:"direcciones-derivadas-de-programa-pdas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#direcciones-derivadas-de-programa-pdas","aria-hidden":"true"},"#"),a(" Direcciones derivadas de programa (PDAs)")],-1),g=a("Direcciones derivadas de programa (PDAs) son cuentas dise\xF1adas espec\xEDficamente para ser controladas por programas. Con PDAs, los programas puede firmar para ciertas direcciones sin la necesidad de una llave privada. PDAs sirven como la base para la "),f={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},b=a("Invocaci\xF3n entre programas"),v=a(", que permite la composici\xF3n entre apps de Solana."),A=e("h2",{id:"hechos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hechos","aria-hidden":"true"},"#"),a(" Hechos")],-1),P={class:"custom-container tip"},D=e("p",{class:"custom-container-title"},"Hola de hechos",-1),y=e("li",null,"PDAs son cadenas de 32 bytes que lucen como llaves p\xFAblicas pero no tienen una llave privada relacionada",-1),x=e("li",null,[e("code",null,"findProgramAddress"),a(" deriva de forma determinista un PDA de un programId y unas semillas (colecci\xF3n de bytes)")],-1),k=e("li",null,"Un bump (un byte) es usado para empujar a un potencial PDA fuera de la curva el\xEDptica ed25519",-1),q=a("Los programas pueden firmar por sus PDAs usando sus seeds y bump "),w={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-signed-accounts",target:"_blank",rel:"noopener noreferrer"},E=a("invoke_signed"),z=e("li",null,"Un PDA solo puede ser firmado por el programa del cual ha sido derivada",-1),L=a("Adem\xE1s de permitir a los programas firmar diferentes instrucciones, PDAs tambi\xE9n brindan una interfaz tipo hashmap para "),C=a("indexar cuentas"),I=u('<h1 id="un-vistazo-mas-profundo" tabindex="-1"><a class="header-anchor" href="#un-vistazo-mas-profundo" aria-hidden="true">#</a> Un vistazo m\xE1s profundo</h1><p>Los PDA son un componente esencial para desarrollar programas en Solana. Con las PDA, los programas pueden firmar cuentas mientras garantizan que ning\xFAn usuario externo pueda generar una firma v\xE1lida para la misma. Adem\xE1s de firmar cuentas, ciertos programas tambi\xE9n pueden modificar cuentas en sus PDA.</p><p><img src="'+p+'" alt="Accounts matrix"></p><p><small style="text-align:center;display:block;">Image courtesy of <a href="https://twitter.com/pencilflip">Pencilflip</a></small></p><h3 id="generando-pdas" tabindex="-1"><a class="header-anchor" href="#generando-pdas" aria-hidden="true">#</a> Generando PDAs</h3><p>Para entender el concepto detr\xE1s de las PDA, puede ser \xFAtil considerar que las PDA no se crean t\xE9cnicamente, sino que se encuentran. Los PDA se generan a partir de una combinaci\xF3n de semillas (como la cadena <code>\u201Cvote_account\u201D</code>) y un id de programa. Esta combinaci\xF3n de semillas y de un id de programa luego se ejecuta a trav\xE9s de una funci\xF3n hash sha256 para ver si generan o no una clave p\xFAblica que se encuentra en la curva el\xEDptica ed25519.</p><p>Al ejecutar el id del programa y las semillas de nuestro programa a trav\xE9s de una funci\xF3n hash, hay una probabilidad de ~50% de que en realidad terminemos con una clave p\xFAblica v\xE1lida que se encuentre en la curva el\xEDptica. En este caso, simplemente agregamos algo para modificar un poco nuestra entrada y lo intentamos de nuevo. El t\xE9rmino t\xE9cnico para este algo es un bump. En Solana, comenzamos con bump = 255 y simplemente iteramos hacia abajo, bump = 254, bump = 253, etc. hasta que obtengamos una direcci\xF3n que no est\xE9 en la curva el\xEDptica. Esto puede parecer rudimentario, pero una vez encontrado nos da una forma determinista de derivar el mismo PDA una y otra vez.</p><p><img src="'+m+'" alt="PDA en la curva el\xEDptica"></p><h3 id="interactuando-con-pdas" tabindex="-1"><a class="header-anchor" href="#interactuando-con-pdas" aria-hidden="true">#</a> Interactuando con PDAs</h3>',9),j=a("Cuando un PDA es generado, "),N=e("code",null,"findProgramAddress",-1),S=a(" retorna la direcci\xF3n y el bump usado para sacar la direcci\xF3n fuera de la curva el\xEDptica. Con el bump, un programa puede "),V=a("firmar"),B=a(" por cualquier transacci\xF3n que requiera el PDA. Para firmar, los programas deben pasar la instrucci\xF3n, la lista de las cuentas, las semillas y el bump usado para derivar el PDA a la funci\xF3n "),R=e("code",null,"invoke_signed",-1),U=a(". Adem\xE1s de firmar para instrucciones, PDAs tambi\xE9n deben firmar su propia creaci\xF3n con "),F=e("code",null,"invoke_signed",-1),H=a("."),G=a("Cuando se crean PDAs, es com\xFAn "),O={href:"https://github.com/solana-labs/solana-program-library/blob/78e29e9238e555967b9125799d7d420d7d12b959/token-swap/program/src/state.rs#L100",target:"_blank",rel:"noopener noreferrer"},T=a("guardar el bump y los seeds"),J=a(" en los datos de la misma cuenta. Esto permite a los desarrolladores validar f\xE1cilmente un PDA sin tener que enviar el bump como argumento en la instrucci\xF3n."),K=e("h2",{id:"other-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),a(" Other Resources")],-1),M={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses",target:"_blank",rel:"noopener noreferrer"},Q=a("Documentaci\xF3n oficial"),W={href:"https://www.brianfriel.xyz/understanding-program-derived-addresses/",target:"_blank",rel:"noopener noreferrer"},X=a("Entendiendo las direcciones derivadas de programa");function Y(Z,$){const r=o("ExternalLinkIcon"),s=o("RouterLink");return d(),c(l,null,[_,e("p",null,[g,e("a",f,[b,n(r)]),v]),A,e("div",P,[D,e("ul",null,[y,x,k,e("li",null,[q,e("a",w,[E,n(r)])]),z,e("li",null,[L,n(s,{to:"/es/guides/account-maps.html"},{default:t(()=>[C]),_:1})])])]),I,e("p",null,[j,N,S,n(s,{to:"/es/references/accounts.html#sign-with-a-pda"},{default:t(()=>[V]),_:1}),B,R,U,F,H]),e("p",null,[G,e("a",O,[T,n(r)]),J]),K,e("ul",null,[e("li",null,[e("a",M,[Q,n(r)])]),e("li",null,[e("a",W,[X,n(r)])])])],64)}var ae=i(h,[["render",Y]]);export{ae as default};
