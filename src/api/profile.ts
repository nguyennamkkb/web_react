import {service} from '../plugin/axios'
const resource = '/share';

export default {
    getProfile(id: string) {
        return  service.get(`${resource}/bio/`+id)
    },
    getAll() {
        return  service.get(`${resource}`)
    }
}
