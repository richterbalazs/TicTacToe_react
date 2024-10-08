import Elem from "./Elem.js"

export function Jatekter(props){
    return (
        <div className = "jatekter">
            {
                props.sor.map((elem, index)=>{
                    return <Elem jel={elem} key={index}/>;
                })
            }
        </div>
    );
}