export function getevents() {
    fetch("../data/football/etapes-de-developpement.json")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const currentEvent = data.events[0]
            displayTitle(currentEvent.title)
            displayTimeline(currentEvent.timeline)
            displayMarkTable(currentEvent.tableMark)
        })
}