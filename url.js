// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    let split = url.split("")
    if(!split.includes("#")){
        return url
    }else{
        let newURL = split.splice(split.indexOf("#"))
        return split.join("")
    }
  }



  
    console.log(removeUrlAnchor('www.codewars.com#about'))// 'www.codewars.com')
    console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))// 'www.codewars.com/katas/?page=1')
    console.log(removeUrlAnchor('www.codewars.com/katas/'))// 'www.codewars.com/katas/')