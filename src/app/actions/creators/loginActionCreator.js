import * as Actions from "../"


export default function loginActionCreator(credentials) {
    return {
        type: Actions.TRY_LOGIN,
        credentials
    }
}
