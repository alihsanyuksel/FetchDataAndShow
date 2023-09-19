/*async function getTableData() {
    
    const response = await fetch('src/nationData.json');
    const records = await response.json();
    console.log(records);*/
   function fetchNationDataAndShow() { 
       const myObj = {"data":
[{"ID Nation":"01000US","Nation":"United States","ID Year":2020,"Year":"2020","Population":326569308,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2019,"Year":"2019","Population":324697795,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2018,"Year":"2018","Population":322903030,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2017,"Year":"2017","Population":321004407,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2016,"Year":"2016","Population":318558162,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2015,"Year":"2015","Population":316515021,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2014,"Year":"2014","Population":314107084,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2016,"Year":"2016","Population":318558162,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2012,"Year":"2015","Population":316515021,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2011,"Year":"2014","Population":314107084,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2012,"Year":"2015","Population":316515021,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2011,"Year":"2014","Population":314107084,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2020,"Year":"2020","Population":326569308,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2019,"Year":"2019","Population":324697795,"Slug Nation":"united-states"},
 {"ID Nation":"01000US","Nation":"United States","ID Year":2010,"Year":"2013","Population":311536594,"Slug Nation":"united-states"}]
}
    let tab = '';
    var rowColors = ["table-primary","table-secondary","table-success","table-danger", "table-warning", "table-info", "table-light"]
    
    myObj.data.forEach(function(user, index){
    tab += `<tr class= ${rowColors[index%7]}> 
                <td>${user["ID Nation"]}</td> 
                <td>${user.Nation}</td>
                <td>${user["ID Year"]}</td> 
                <td>${user.Year}</td> 
                <td>${user.Population}</td>
                <td>${user["Slug Nation"]}</td> 
            </tr>`
    console.log(index);
        
    })
    
    document.getElementById("data-output").innerHTML = tab;
    }


function fetchWebSocketDataAndShow() {
    let ws= new WebSocket('wss://stream.binance.com/stream?streams=ethusdt@ticker/btcusdt@ticker/xrpusdt@ticker/ltcusdt@ticker/bnbusdt@ticker');
    let ethPrice = document.getElementById('ethP');
    let ethPriceChange = document.getElementById('ethPc');
    let ethPriceChangePercent = document.getElementById('ethPcp');
    let btcPrice = document.getElementById('btcP');
    let btcPriceChange = document.getElementById('btcPc');
    let btcPriceChangePercent = document.getElementById('btcPcp');
    let xrpPrice = document.getElementById('xrpP');
    let xrpPriceChange = document.getElementById('xrpPc');
    let xrpPriceChangePercent = document.getElementById('xrpPcp');
    let ltcPrice = document.getElementById('ltcP');
    let ltcPriceChange = document.getElementById('ltcPc');
    let ltcPriceChangePercent = document.getElementById('ltcPcp');
    let bnbPrice = document.getElementById('bnbP');
    let bnbPriceChange = document.getElementById('bnbPc');
    let bnbPriceChangePercent = document.getElementById('bnbPcp');
    ws.onmessage = (e) => {
        let eventData = JSON.parse(e.data);
    
        if(eventData.stream=="ethusdt@ticker") {
            ethPrice.innerHTML = parseFloat(eventData.data.c).toFixed(5);
            ethPriceChange.innerHTML = parseFloat(eventData.data.p).toFixed(5);
            ethPriceChangePercent.innerHTML = parseFloat(eventData.data.P).toFixed(5); 
            if(parseFloat(eventData.data.P) >= 1 || parseFloat(eventData.data.P) <= -1){
                ethPriceChangePercent.style.color = "red";
            }}
        else if(eventData.stream=="btcusdt@ticker") {
            btcPrice.innerHTML = parseFloat(eventData.data.c).toFixed(5);
            btcPriceChange.innerHTML = parseFloat(eventData.data.p).toFixed(5);
            btcPriceChangePercent.innerHTML = parseFloat(eventData.data.P).toFixed(5);
            if(parseFloat(eventData.data.P) >= 1 || parseFloat(eventData.data.P) <= -1){
                btcPriceChangePercent.style.color = "red";
            }}
        else if(eventData.stream=="xrpusdt@ticker") {
            xrpPrice.innerHTML = parseFloat(eventData.data.c).toFixed(5);
            xrpPriceChange.innerHTML = parseFloat(eventData.data.p).toFixed(5);
            xrpPriceChangePercent.innerHTML = parseFloat(eventData.data.P).toFixed(5);
            if(parseFloat(eventData.data.P) >= 1 || parseFloat(eventData.data.P) <= -1){
                xrpPriceChangePercent.style.color = "red";
            }}
        else if(eventData.stream=="ltcusdt@ticker") {
            ltcPrice.innerHTML = parseFloat(eventData.data.c).toFixed(5);
            ltcPriceChange.innerHTML = parseFloat(eventData.data.p).toFixed(5);
            ltcPriceChangePercent.innerHTML = parseFloat(eventData.data.P).toFixed(5);
            if(parseFloat(eventData.data.P) >= 1 || parseFloat(eventData.data.P) <= -1){
                ltcPriceChangePercent.style.color = "red";
            }}
        else if(eventData.stream=="bnbusdt@ticker") {
            bnbPrice.innerHTML = parseFloat(eventData.data.c).toFixed(5);
            bnbPriceChange.innerHTML = parseFloat(eventData.data.p).toFixed(5);
            bnbPriceChangePercent.innerHTML = parseFloat(eventData.data.P).toFixed(5);
             if(parseFloat(eventData.data.P) >= 1 || parseFloat(eventData.data.P) <= -1){
                bnbPriceChangePercent.style.color = "red";
            }}
        
    }
    }