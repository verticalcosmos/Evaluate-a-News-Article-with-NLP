function validURL(url) {
    console.log("validating URL", url);

    const inputElement = document.getElementById('inputURL');
        inputElement.type = 'url';
        inputElement.value = url;
  
        if (!inputElement.checkValidity()) {
          return false;
        } else {
          return true;
        }
    
 }
export { validURL }