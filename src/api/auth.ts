import {authRepository} from '../plugin/axios'

export default {
    login(username: string, password: string){
        return authRepository.login(username,password);
    }
}
