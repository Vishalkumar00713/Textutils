import React ,{useState}from "react"
export default function Textform(props){

    const[text,setText]=useState('');

    function handelupClick(){
    //  console.log("thtughgjtg");
      let newText=text.toUpperCase();
      setText(newText);
      props.alert("changed to upper case","success");
    }

    
    function handellowClick(){
        //  console.log("thtughgjtg");
          let newText=text.toLowerCase();

          setText(newText);
          props.alert("changed to lower case","success");
        }

        function handelclearClick(){
            //  console.log("thtughgjtg");
          
              setText('');
              props.alert("text deleted","success");
            }
    

    function handleOnChange(event){

        setText(event.target.value);
  // console.log("fjdbfk");
   

    }

    return (
<>
        <div className="conatiner">

   <h1  style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control"   value={text} onChange={handleOnChange} id="myBox" rows="8"  style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}/>
  </div>
  <button  onClick={handelupClick} className="btn btn-primary mx-1">convert to upper case</button>
  <button onClick={handellowClick} className="btn btn-primary mx-1">convert to lowercase</button>
  <button onClick={handelclearClick} className="btn btn-primary mx-1">clear text</button>
  
        </div>
        <div className="container my-3"  style={{color: props.mode==='light'?'black':'white'}}>
            <h2>your text summary</h2>
            <p>{text.split(" ").length-1} words {text.length}charachters</p>
            <p> {(text.split(" ").length-1)*0.008} minutes to read</p>
            <h1>preReview</h1>
            <p>{text}</p>

        </div>
        </>
    )
}