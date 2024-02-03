function nikhil(){
    let count=0;
    let buttons=document.querySelectorAll(".btn");
    function handleClick(count) {
        count++;
        console.log(count);
    }
      buttons.forEach(function(button) {
        button.addEventListener('click', handleClick(count));
      });
}
