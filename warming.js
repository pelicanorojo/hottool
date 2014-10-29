/*
(function ( js ) {
  var
    h = document.getElementsByTagName('head')[0],
    s = document.createElement('script');  

  s.src = js;
  
  document.getElementsByTagName('head')[0].appendChild(s);
}('http://myscrip.js'));
*/
(function(){
  var
    global = this,
    tools = {};
    
    tools.objectSnapshot = {
      reg: /.*/,
      snapshot: null,
      setReg: function ( reg ) {
        this.reg = reg;
        return this;
      },
      testReg: function ( str ) {
        return this.reg.test( str );
      },
      takeSnapshot: function ( obj ) {
        var
          reg = this.reg,
          key,
          snapshot = [];
        
        for ( key in obj ) {
          if ( reg.test( key ) ) {
            snapshot.push( { key: obj[ key ] });
          }
        }
        
        this.snapshot = snapshot;
        return this;
      }
    };
  
    tools.injector = function ( scriptPath, multi ) {
	  if ( multi || !window[ scriptPath ] ) {
		var
			h = document.getElementsByTagName("head")[0],
			s = document.createElement("script");

		window[ scriptPath ] = true; console.log( '*****  hottol.injector mult, path  ****', multi, scriptPath );

		s.type = "text/javascript";
		s.src = scriptPath;
		h.appendChild(s);
	}
};  
  
  global.hottool = tools;
}());
