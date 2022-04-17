function checkOnlyOne(element) {
  
    const checkboxes 
        = document.getElementsByName("one");
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }