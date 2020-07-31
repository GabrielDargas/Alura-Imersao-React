import config from '../config'

const URL_CATEGORIES = `${config.URL}/categorias?_embed=videos`

function getAllWithVideos() {
    return fetch(URL_CATEGORIES)
        .then(async (respostaDoServer) => {
            if(respostaDoServer.ok){const resposta = await respostaDoServer.json();
            return resposta
            }
            throw new Error('Deu ruim!')
        });
}

export default {
    getAllWithVideos,

}