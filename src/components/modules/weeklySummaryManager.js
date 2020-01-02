const remoteURL = "http://localhost:5002"

export default {
    get(id) {
      return fetch(`${remoteURL}/weeklySummaries/${id}?_expand=car&_expand=maintenanceType&_expand=user`).then(result => result.json())
    },
    getAll() {
      return fetch(`${remoteURL}/weeklySummaries?_expand=car&_expand=maintenanceType&_expand=user`).then(result => result.json())
    },
    getAllUserWeeklySummary(id) {
      return fetch(`${remoteURL}/weeklySummaries?userId=${id}`).then(result => result.json())
    },
    post(newWeeklySummary) {
      return fetch(`${remoteURL}/weeklySummaries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newWeeklySummary)
      }).then(data => data.json())
    },
    delete(id) {
      return fetch(`${remoteURL}/weeklySummaries/${id}`, {
          method: "DELETE"
      })
      .then(result => result.json())
    },
    update(editedWeeklySummary) {  // whole ticket
      return fetch(`${remoteURL}/weeklySummaries/${editedWeeklySummary.id}`, {  //targeted
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedWeeklySummary)
      }).then(data => data.json());
    }
  }