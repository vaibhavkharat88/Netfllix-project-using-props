  import './App.css';
import Greeting from './Greeting';
import {sum,sub,multy,devide} from './Calculator'
import Navbar from './Navbar';
import Cards from './Cards';
import Sdata from './Sdata';
// for checking our sdata is rendering here or not
// console.log(Sdata[0])
// console.log(Sdata[1])
// console.log(Sdata[1].sname)



// creating a functon for set a value 

//*********while we use normal function */
// function ncard(val){
//   return(
//   <Cards 
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//     />
//   )
    

// }



function App() {
  return (
    <>
    <Navbar title="VAIBHAV " About="ABOUT"/>


    <h1 className='Heading'>Top Best Series On Netflix</h1>





    {/*using map methd to map a data from Sdata  */}
        {/* while we return a function from ncard code will like below */}
        {/* {Sdata.map(ndata)} */}





{/*2nd way to perform map simple way to map */}
      {/* {Sdata.map(function ndata(val){
        return (
          <Cards 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />

        )
      })}
     */}
{/* ######### WITH FAT ARROW FUNCTION MOST DEVELOPERS USE THIS CRITERIA */}
      {Sdata.map((val,index)=>{
        console.log(index)
        return(
          <Cards 
          key={val.id}    
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
          />

        )
      })}
      
    
    
{/* this is a first method to pass a data to cards from Sdata */}
    {/* 
    <Cards 
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
    />
    <Cards 
    
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
    
    />
    <Cards
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
    
    />
    <Cards
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
    link={Sdata[4].link}
    
    />
    <Cards
    imgsrc={Sdata[5].imgsrc}
    title={Sdata[5].title}
    sname={Sdata[5].sname}
    link={Sdata[5].link}
    
    />
    <Cards
    imgsrc={Sdata[6].imgsrc}
    title={Sdata[6].title}
    sname={Sdata[6].sname}
    link={Sdata[6].link}
    
    />
    <Cards
    imgsrc={Sdata[7].imgsrc}
    title={Sdata[7].title}
    sname={Sdata[7].sname}
    link={Sdata[7].link} */
     }
    
    
    
    </>
  );
}

export default App;
