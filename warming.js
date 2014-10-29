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
    
  global.hottool = tools;
}());
