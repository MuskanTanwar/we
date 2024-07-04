
import React ,{useState} from 'react'



export default function TextForm1(props) {
	
	const [text , setText] = useState('Enter text here');
	const [btn , setBtn] = useState('Dark Mode');
	const [btnFont , setBtnFont] = useState('Cursive');
	
	const [fontStyle , setMyFont] = useState({
		fontFamily:'italic'
	});
	
	const [myStyle , setMyStyle] = useState({
		color:'black',
		backgroundColor:'white'
	});

	const handleUpClick=()=>{
		// console.log("uppercase was clicked");
		let newText = text.toUpperCase();
		props.showAlertMsg("Converted to UpperCase","success");
		setText(newText);
		
	}
	const handleLoClick=()=>{
		// console.log("lowecase was clicked");
		let newText = text.toLowerCase();
		props.showAlertMsg("Converted to LowerCase","success");
		setText(newText);
	}
	const FontStyle =()=>{
		if (fontStyle.fontFamily === 'italic' ){
			setMyFont({fontFamily:'cursive'})
			setBtnFont("Normal");
		}
		else{
			setMyFont({fontFamily:'italic'})
			setBtnFont("Cursive");
		}
	}
	const ModeChange=()=>{
		if (myStyle.color === 'white' ){
			setMyStyle({
				color:'black',
				backgroundColor:'white'
			})
			setBtn("Dark Mode");
		}
		else{
			setMyStyle({
				color:'white',
				backgroundColor:'black'
			})
			setBtn("Light Mode");
		}
	}
	const handleClear=()=>{
		
		let newText = "";
		setText(newText);
	}
	const handleOnChange=(event)=>{
		// console.log("uppercase was onchangeclicked");
		setText(event.target.value);
	}
	 const wordCount=(text)=>{
		let regex = /\s+\S+/;
      	let numOfWords = text.split(regex);
      	return numOfWords.length;
	}

// setText('hello');
  return (
	<>

		<div className="container" style={myStyle} >
			<h1>{props.title}</h1>
			<div className="mb-3" >
			<textarea className="form-control "   style={{...myStyle, ...fontStyle}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
			</div>
			<button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>convert to uppercase</button>
			<button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>convert to lowercase</button>
			<button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear text</button>
			<button className='btn btn-primary mx-2 my-2' onClick={ModeChange}>{btn}</button>
			<button className='btn btn-primary mx-2 my-2' onClick={FontStyle}>{btnFont}</button>
		</div>

		<div className="container"  style= {{color:props.mode==='light'?'black':'white'}} >
			<h2>Summary</h2>
			<p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
			<p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>

			<h2>Preview</h2>
			<p>{text}</p>
		</div>
    </>
  )
}
