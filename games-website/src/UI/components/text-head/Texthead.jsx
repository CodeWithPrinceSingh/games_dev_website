import './texthead.css'

const Texthead = (props) => {
 return(
 <div className="contect-head">
  <p>Home ><span>{props.text} </span></p>
  <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
</div>
 	)
}
export default Texthead