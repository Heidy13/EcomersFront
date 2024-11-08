import axios from "axios";

export function enviarsolicitud(metodo,parametros,url,mensaje){
    axios({
        method:metodo, url:url, data:parametros}).then(function(res){
            var estado = res.status;
            if(estado == 200){
                console.log(mensaje);
            }
        });
}