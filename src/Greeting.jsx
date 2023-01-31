import React from "react";
function Greeting(){

let time=new Date()
time=time.getHours()
let greeting=''
var cssStyle={}



if(time>=1 && time<=12){
  greeting='Good Morning';
  cssStyle.color="green"
}
else if(time>=12 && time<19){
  greeting='Good Afternoon';
  cssStyle.color="orange"


}
else {
  greeting="Good Night"
  cssStyle.color="black"


}
return(
    <>
    <h1>Hello Sir <span style={cssStyle}> {greeting}</span></h1>
    
    </>
)
}
export default Greeting
