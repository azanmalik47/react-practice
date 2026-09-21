import PropertyCard from './PropertyCard.jsx'

function App() {

  const properties = [{id: 1, address: "12 Garfield Avenue, M19 3LF", rent: 1200, bedrooms: 3},
                      {id: 2, address: "42 Victoria Road, Leeds, LS6 1AN", rent: 1500, bedrooms: 4},
                      {id: 3, address: "14 High Street, Guildford, GU1 3HJ", rent: 1100, bedrooms: 2}
  ]

  
  return(
      <>
          {properties.map(property => (
            <PropertyCard key={property.id} address={property.address} rent={property.rent}></PropertyCard>
          ))}
      </>
  );
}

export default App
 