const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/maintenanceTypes/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/maintenanceTypes`).then(result => result.json())
  },
}


