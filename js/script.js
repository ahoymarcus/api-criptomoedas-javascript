// My api key
var apiKey = {
    key: 'e5d0e9d1-b0c5-49ae-9bde-4cbf427693db'
};


// GET Fetch requisitio
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ', response.status);
    
        return response.json();
    })
    .then((api) => {
        console.log(api);
    
        var texto = "";
        // Get 10 coins and symbols
        for (let i=0; i < 10; i++) {
            
            // Show API information
            texto = texto + `

                <div class="media">
                    <img src="images/coin.jpg" class="" alt="coin" width="100" height="60" />
                    <div class="media-container">
                        <div>
                            <h5 class="">${api.data[i].name}</h5>
                            <p>${api.data[i].symbol}</p>
                        </div>
                        <div>
                           <h5>Rank: ${api.data[i].rank}</h5>  
                        </div>   
                        <div>
                           <h5>Início do Período histórico da moeda na API</h5> <p>${api.data[i].first_historical_data}</p> 
                        </div> 
                    </div>
                    
                </div> `;
             document.getElementById("coins").innerHTML = texto;
        }
    })
    .catch((error) => {
        console.error(error.message);
    });












