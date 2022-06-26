import './Main.scss';
import { data } from '../../helpers/data';

// eger bir datayi default olarak degilde export olarak aldiysak yani dosyanin icine data.js dosyası, icinde export edilmisse ; bız bu datayı main.jsx dosyası icinde cagrilirken {} icinde yani import {data} from './esdsf' olarak ımport ederiz


import Card from './Card';
const Main = () =>{
    console.log(data);
    return(
        <div className="card-container">
            {data.map((item, index)=>  <Card {...item} key={index} /> )}
        </div>
    )
}


export default Main;