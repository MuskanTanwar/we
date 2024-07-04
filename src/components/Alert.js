import React , {useState} from 'react'


function Alert(props) {
	const [style,setStyle] = useState({
		width: '50%', 
		margin:'auto'
	})
	
	
	const capitalize=(word)=>{
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	}
  return (
	props.alert && <div  style={style}className={`alert alert-${props.alert.type}  alert-dismissible " role="alert`}>
		<strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg} 
		<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
  )
}

export default Alert