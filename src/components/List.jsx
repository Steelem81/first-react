

const List = (props) => {
const {list, myName} = props;
    return (
        <>
            <ul>
                <li>Blue Eyes White Dragon</li>
                <li>Dark Magician Girl</li>
                <li>Kuriboh</li>
                <li>Red Eyes Balck Dragon</li>
                <li>Stardust Dragon</li>
                <li>Left Leg of the Forbidden One</li>
            </ul>

            <ul>
                
            </ul>{list && list.map((item, i) => (<li key={i}> {item}</li>))}
            <h2 style={{backgroundColor: "blue"}}>{myName}</h2>
        </>
    )
};

export default List;