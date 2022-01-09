// Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove (string) {
    if (string[string.length-1]==="!"){
        return string.slice(0,-1)
    }else{
      return string
    }
}