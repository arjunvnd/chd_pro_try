var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    let carsForSales = await newCarInstance.getPastEvents('sell',{fromBlock:0,toBlock:'latest'});
    
    
    // carsForSales.forEach(car=>{
    //     car.returnValues['']
    // })

    for(let i = 0 ; i<carsForSales.lenght; i++){
        let timeUpForSales = carsForSales[i].returnValues['time'];
    }

    res.render('sales',{carsForSales});
  
});

module.exports = router;
