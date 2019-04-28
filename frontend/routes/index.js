var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
  let accounts = await web3.eth.getAccounts();
  res.render('index')
});

router.post('/',async (req,res,next)=>{
  
  console.log(req.body);
  
  let ownerAddress = req.body.data;
  
  console.log(ownerAddress)
  if(!web3.utils.isAddress(ownerAddress)){
    res.status(400).send({error:'The address you have entered is invalid'})    
  }
  else{
    try {
      let contractAddress = await newCarInstance.methods.getOwnerInfo(ownerAddress).call();
      
      console.log(contractAddress)
      res.send(contractAddress)
    }catch(e){
      res.send({error:'No address registered'})
    }
  }


})

module.exports = router;
