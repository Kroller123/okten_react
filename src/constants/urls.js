let baseURL = 'http://owu.linkpc.net/carsAPI/v1'

let cars = '/cars'

let urls ={
    cars:{
        base:cars,
        byId:(id)=>`${cars}/${id}`
    }
}

export {baseURL,urls}