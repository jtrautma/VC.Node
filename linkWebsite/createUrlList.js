// construct a function to both do a console output (to test the code) as well as to write into the HTML document
function print() {
  var totalString = ''
  for(j = 0; j < arguments.length; j++) {
    totalString += arguments[j]
    }
  console.log(totalString)
  document.write(totalString)
  document.write('<br>')
  }


urlArray = [
  /*Link 1*/'https://www.check24.de',
  /*Link 2*/'http://www.delta.com'
  ]



for(i = 0; i < urlArray.length; i++) {
  console.log('Link',i+1,'is',urlArray[i]);
  }