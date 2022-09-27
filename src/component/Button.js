function Button(props){
    return <button onClick={props.func} className= {props.class}>{props.btnValue}</button>

}
export default Button
