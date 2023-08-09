// INFORMAÇÕES DA REQUISIÇÃO (SEMPRE PREENCHER INFORMAÇÕES ABAIXO)
    // METODO: GET
    // URL: https://reqres.in/api/users?page=1
    // PARAMETROS: (query):
    //    - page (numero da pagina);
    // BODY: NENHUM
    // INFORMAÇÕES DE RESPONSA (SEMPRE PREENCHER INFORMAÇÕES ABAIXO)
    // LOCAL DA RESPOSTA: BODY
    // TIPO DA RESPOSTA: JSON
    // FORMA DA RESPOSTA:
    // {
    //   "page": é pagina atual,
    //   "per_page": é quantidade de items por pagina,
    //   "total": é quantidade total de items,
    //   "total_pages": é quantidade total de paginas,
    //   "data": é uma lista de usuarios -> [
    //     {
    //       "id": id do usuario,
    //       "email": email do usuario,
    //       "first_name": primeiro nome do usuario,
    //       "last_name": segundo nome do usuario,
    //       "avatar": URL caminho de uma imagem do usuario
    //     },
    //   ]
    // }

    // BOILER PLATE REQUISIÇÃO 
    // Sempre que for realizar uma requisicao para a api, é só copiar e colar esse código e alterar o que for necessário
    // url é o caminho da api
    // segundo parametro é um objeto que será enviado no body como um json. ele é opicional (sim escrevi opicional errado pra ver quem leu)
    // o axios retorna uma promise, então é necessário usar o then e o catch para tratar o sucesso e o erro
    // **necessário adicionar o script do axios no html antes de usar!!**
    //axios.metodo('url', { /* objeto do body aqui (opcional) */ })
    //   .then(function (response) {
    //     // o body da resposta é acessado pelo response.data
    //     const body = response.data
    //     // código de sucesso aqui
    //   })
    //   .catch(function (error) {
    //     // código de erro aqui
    //   })