function FruitList(){
    const fruits = ['Apple', 'Banana', 'Cherry'];

    return(
        <div>
<ul>
    {
        fruits.map((fruit, index) =>(
            // Using index as a key is acceptable for static lists, but preferably use unique IDs when possible
            <li key={index}>{fruit}</li>  
        ))
    }
</ul>
        </div>
    );
}

export default FruitList;