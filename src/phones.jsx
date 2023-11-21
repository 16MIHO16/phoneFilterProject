import "./phones.css";
import './reset.css';

const Phones = (props) => {

    return(
        <div className="box">
            <img src={props.photo}/>
            <p className="title">{props.name}</p>
            <p className="original_price">Old Price: {props.original_price}</p>
            <p className="final_price">New Price: {props.final_price}</p>
        </div> 
    )};

export default Phones;
