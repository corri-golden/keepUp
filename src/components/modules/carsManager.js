const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/cars/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/cars`).then(result => result.json())
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