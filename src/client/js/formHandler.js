

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apikey = "e9d317ced0cdba52633ba073aac57a86";
const docURL = "https://www.bbc.com/news/world-asia-china-63785351";


const apiURL = baseURL + apikey + '&url=' + docURL + '&lang=en';


    //API request data
    var request = new XMLHttpRequest()

    request.open('GET', apiURL , true)
    request.onload = function () {
      // JSON data
      var data = JSON.parse(this.response)
    
      if (request.status >= 200 && request.status < 400) {
        document.getElementById("polarity").innerHTML = data.agreement;
        document.getElementById("polarity_confidence").innerHTML = data.confidence+'%';
        document.getElementById("subjectivity").innerHTML = data.irony;
        document.getElementById("subjectivity_confidence").innerHTML = data.score_tag;
        
        
      } else {
        console.log('error')
        var error_section = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "The URL:[" +JSON.stringify(input_url[0].value)+"] is not valide. Please enter a valid url"
        error_section.style.display = "block";
      }
    }
    request.send();





