const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/maintenanceType/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/maintenanceType`).then(result => result.json())
  },
}


