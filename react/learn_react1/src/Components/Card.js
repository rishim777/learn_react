
function Card({name,title}){
    return (
        <div style={{background:"yellow",padding:50,width:400}}>
            <h1>{name}</h1>
            <p>
                {title}
            </p>
            <hr/>
        </div>
    );
}

export default Card;
