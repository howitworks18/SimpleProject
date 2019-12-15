import { observable, decorate } from "mobx"

class UserStore {
    user = 'hello'
    interest = []
}
decorate(UserStore, {
    user: observable,
    interest: observable
})

export default new UserStore()