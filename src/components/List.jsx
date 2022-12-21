

const List = (props) => {
const {list, myName} = props;
    return (
        <>
            <h3>Things I need to do:</h3>
            <ul>
                <li>Get my stuff together</li>
                <li>Get it all together</li>
                <li>Put it all in a bag</li>
                <li>Take it to the stuff store</li>
                <li>Take it to a stuff museum</li>
                <li>Just get my stuff together</li>
            </ul>

            <ul>
                
            </ul>{list && list.map((item, i) => (<li key={i}> {item}</li>))}
            <h2 style={{backgroundColor: "blue"}}>{myName}</h2>
        </>
    )
};

export default List;