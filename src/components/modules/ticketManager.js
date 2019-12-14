const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/tickets/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tickets`).then(result => result.json())
  },
  post(newMessage) {
    return fetch(`${remoteURL}/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/tickets/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  update(editedMessage) {
    return fetch(`${remoteURL}/tickets/${editedMessage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessage)
    }).then(data => data.json());
  }
}