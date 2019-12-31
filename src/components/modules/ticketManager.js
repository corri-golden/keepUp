const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/tickets/${id}?_expand=car&_expand=maintenanceType&_expand=user`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tickets?_expand=car&_expand=maintenanceType&_expand=user`).then(result => result.json())
  },
  getAllUserTickets(id) {
    return fetch(`${remoteURL}/tickets?userId=${id}&_expand=car&_expand=maintenanceType&_expand=user`).then(result => result.json())
  },
  post(newTicket) {
    return fetch(`${remoteURL}/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTicket)
    }).then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/tickets/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  update(editedTicket) {  // whole ticket
    return fetch(`${remoteURL}/tickets/${editedTicket.id}`, {  //targeted
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTicket)
    }).then(data => data.json());
  }
}