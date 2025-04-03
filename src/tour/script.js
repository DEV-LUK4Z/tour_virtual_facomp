AFRAME.registerComponent('cursor-listener', {init: function(){
    let last_index = -1;
    let COLORS = ["red", "blue", "green", "yellow"];

    this.el.addEventListener('click', function(event){
      last_index = (last_index + 1) % COLORS.lenght;
      event.target.setAttribute('color', COLORS[last_index]);
      console.log("Foi clicado em: ", event.detail.intersection.point);
    });
  }
});

document.querySelectorAll('.clickable').forEach(function(item) {
      item.setAttribute('cursor-listener', '');
});