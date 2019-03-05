import Cookies from 'universal-cookie';
import FetchHttpClient, {form, header} from "fetch-http-client/lib/index";

export default class API {

    static cookies = new Cookies();

    static call(service, params={}, responseFunc=(function(response){}), bjson=false) {
        //var  client = new FetchHttpClient('https://api.alideti.com/');
        let  client = new FetchHttpClient('http://127.0.0.1:5000/');
        client.addMiddleware(form());
        client.addMiddleware(request => {
            request.options.headers['X-Access-Token'] = API.cookies.get('token');
        });

        if(bjson){
            params = {data: JSON.stringify(params)};
        }

        client.post(service, {form: params }).then(response => {
            console.log(response);
            return response.json();
        }).then(res => {
            if (res.resp === -99){
                API.logout();
            }
            else{
                responseFunc(res);
            }
        });


    }

    static logout() {
        if (API.cookies.get('token') != null){
            API.call('logoutAdmin',{token: API.cookies.get('token')}, (response) =>{
                API.cookies.remove('token');
                window.location.href = '/login';
            });
        }else{
            API.cookies.remove('token');
            window.location.href = '/login';
        }
    }
}
