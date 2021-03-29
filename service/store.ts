import AsyncStorage from '@react-native-async-storage/async-storage';

const STORED_KEYS = {
    access_token: 'access_token'
}
class LocalService {
    getToken = async () => {
        const valueStr = await this.getStoreAsync(STORED_KEYS.access_token) || ""
        const value = JSON.parse(valueStr)
		return value || {}
    }
    
	setToken = (value:any) => {
		return this.setStoreAsync(STORED_KEYS.access_token, JSON.stringify(value))
    }
    getStoreAsync = async (key:any) => {
        return AsyncStorage.getItem(key)
    }
    setStoreAsync = async (key:any, value:any) => {
        if (value) {
            return await AsyncStorage.setItem(key, value)
        } else {
            return await AsyncStorage.removeItem(key)
        }
    }

}

const localService = new LocalService()
export default localService
