const remoteURL = "http://localhost:5002"
// ?_expand=user
export default {
  get(id) {
    return fetch(`${remoteURL}/cars/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/cars?&_expand=user`).then(result => result.json())
  },
  getAllUserCars(id) {
    return fetch(`${remoteURL}/cars?userId=${id}&_expand=user`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/cars/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  update(editedCar) {  // whole ticket
    return fetch(`${remoteURL}/cars/${editedCar.id}`, {  //targeted
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedCar)
    }).then(data => data.json());
  },
  
  post(newCar) {
    return fetch(`${remoteURL}/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCar)
    }).then(data => data.json())
  },
}