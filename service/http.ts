import LocalService from '../service/store'

const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
class HttpService {
    
    author = async ()=>{
       
        const apiUrl = `https://bms-api.viatick.com/main/api/oauth2/token`

            const headerConfig :RequestInit = {
                headers: {
                    'grant_type': 'client_credentials',
                    'scope': '7c62db1cfb47550927b11191b7995f6cd482b7481fd0d98f1d8b403937b909f9'
                },
                method: HTTP_METHODS.POST
            }

        const res = await fetch(apiUrl,headerConfig)

        const rs = {
          data: await res.json(),
          headers: await res.headers
        }
        await LocalService.setToken(rs.data.access_token);
        return rs
    }
    create = async ()=>{
       
        const apiUrl = `https://aitjmbzhsbagnbysj2jrinbrsq.appsync-api.ap-northeast-1.amazonaws.com/graphql`
        let apiToken = ''
        LocalService.getToken().then((tk)=>{
            if(tk.data != undefined){
                apiToken = tk.data.access_token
            }
        })
        const headerConfig :RequestInit = {
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                'X-Api-Key': 'da2-zlk3xmy44fg4jpj73vlwlfi7sq',
            },
            method: HTTP_METHODS.POST
        }

        const res = await fetch(apiUrl,headerConfig)

        const rs = {
          data: await res.json(),
          headers: await res.headers
        }
        await LocalService.setToken(rs.data.access_token);
        return rs
    }
}

const httpService = new HttpService()
export default httpService
