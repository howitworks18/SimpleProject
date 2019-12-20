import { observable, decorate, action } from "mobx"
import AsyncStorage from '@react-native-community/async-storage';

class UserStore {
    user = 'hello'
    interest = []

    storeData = async (key, data) => {
      try {
        await AsyncStorage.setItem(`${key}`, data)
      } catch (e) {
        // saving error
      }
    }

    getData = async (key) => {
      try {
        const value = await AsyncStorage.getItem(`${key}`)
        if (value !== null) {
          console.log(value)
        }
      } catch (e) {
        console.log(e)
      }
    }

}
decorate(UserStore, {
    user: observable,
    interest: observable,
    storeData: action,
    getData: action
})

export default new UserStore()