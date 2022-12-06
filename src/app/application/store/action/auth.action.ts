import { createAction, props } from "@ngrx/store";
import { User } from "../../model/user.model";

const saveAccount = createAction(
    '[Save Account] saved',
    props<{user: User}>()
)

export default { saveAccount }