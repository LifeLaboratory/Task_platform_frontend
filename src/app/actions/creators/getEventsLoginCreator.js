import * as Actions from "../"


export default function getEventsLoginCreator(credentials) {
    return {
        type: Actions.GET_EVENTS,
        credentials
    }
}
