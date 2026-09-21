
function PropertyCard({address = "None", rent = 0, bedrooms = 0}) {
    return(
        <div className="propertyCard">
            <p>Address: {address}</p>
            <p>Rent: {rent}</p>
            <p>Bedrooms: {bedrooms}</p>
        </div>
    )
}

export default PropertyCard
