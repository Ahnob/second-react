import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"
import New from "./New"


var divStyle = {
  color: 'white',
  // backgroundImage: 'url(' + imgUrl + ')',
  width: '200px',
  border: "1px solid red",
  borderRadius: '70px'



  
};


const name = "Anob Takon"
const image = "https://images.unsplash.com/photo-1708133244413-5f8ef92a6a4b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function App(){
  return(
    <>
    <h1 style={{color:"red"}}>This lady here will do great things</h1>
    <Header/>
    <h1>{name}</h1>
    <Body/>
    <Footer/>
    <img style={divStyle}src={image} alt="justanimage"/>
    <New/>
    </>
  )
  
}

export default App




























