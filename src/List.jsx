
function List({category = "Category", address = []}) {

    // sort by name: (reversed) fruits.sort((b, a) => a.name.localeCompare(b.name));
    // fruits.sort((b, a) => a.calories - b.calories);
    
    // filter for anythig less than 100 cal
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = items.map(address => <li key={address.id}>
                                                {address.name}: &nbsp;
                                               <b>{address.rent}</b></li>);

    return (<>
              <h3 className = "list-category">{category}</h3>
              <ol className = "list-items">{listItems}</ol>
           </>);

}

export default List
