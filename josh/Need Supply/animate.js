
window.onload = function(){
  anime({
    targets: "path,g",
    translateY:function(element, index) {
      return [0,index * 995]
    },
    complete: function(){
  anime({
    targets: "path,g",
    translateY:function(element, index) {
      return [0]
    },
    // rotate(45 50 50):[0,100],
    delay:function(element, index){
    return index * 110;
  },
    easing:'easeOutElastic'
  });
  }
  });
}
