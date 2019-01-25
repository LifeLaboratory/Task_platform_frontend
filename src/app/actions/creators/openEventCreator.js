import * as Actions from "../"


export default function openEventCreator(id) {
  return {
    type: Actions.OPEN_EVENT,
    id
  }
}
