import PropertyCard from './PropertyCard.jsx'

function App() {
  return(
    <>
      <PropertyCard address="12 Garfield Avenue, M19 3LF" rent={1200} bedrooms={3} ></PropertyCard>
      <PropertyCard address="42 Victoria Road, Leeds, LS6 1AN" rent={1500} bedrooms={4} ></PropertyCard>
      <PropertyCard address="14 High Street, Guildford, GU1 3HJ" rent={1100} bedrooms={2} ></PropertyCard>
    </>
  );
}

export default App

