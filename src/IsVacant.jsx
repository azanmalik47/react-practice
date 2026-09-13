
function IsVacant({isVacant = false}){
    return(
        isVacant ? <h2 className="vacant">Vacant</h2> :
                   <h2 className="occupied">Occupied</h2>
    )
}

export default IsVacant