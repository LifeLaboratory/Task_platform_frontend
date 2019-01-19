import * as Actions from '../'

export function registration(credentials){
    return{
        type: Actions.TRY_REGISTRATION,
        credentials
    }
}