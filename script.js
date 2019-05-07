
const ABIBBS = [{"constant":!1,"inputs":[{"name":"content","type":"string"}],"name":"Post","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"anonymous":!1,"inputs":[{"indexed":!1,"name":"content","type":"string"}],"name":"Posted","type":"event"}]
const ABIBBSExt = [{"constant":!1,"inputs":[{"name":"post","type":"bytes32"}],"name":"upvote","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"content","type":"string"}],"name":"Post","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"origin","type":"bytes32"},{"name":"content","type":"string"}],"name":"Reply","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"post","type":"bytes32"}],"name":"downvote","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"anonymous":!1,"inputs":[{"indexed":!1,"name":"origin","type":"bytes32"},{"indexed":!1,"name":"content","type":"string"}],"name":"Replied","type":"event"}]

const web3js = new Web3('https://mainnet-rpc.dexon.org')

function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function startApp() {
  const BBSContract = "0x663002C4E41E5d04860a76955A7B9B8234475952"
  const BBS = new web3js.eth.Contract(ABIBBS, BBSContract)

  BBS.getPastEvents({fromBlock : '990000'})
  .then(events => {
    const pEmit = events.slice().reverse().map(event => {
      return () => web3js.eth.getBlock(event.blockNumber)
        .then(block => {
          directDisplay(event.returnValues.content, event.transactionHash, event.blockNumber, (''+new Date(block.timestamp)).substr(0,24))
        })
    })

    pEmit.reduce((acc, cur) => acc.then(cur), Promise.resolve())
  });
}

function directDisplay(content, txHash, blockNumber, date) {
  content = htmlEntities(content)
  $('.r-list-container.action-bar-margin.bbs-screen').append(
    '<div class="r-ent">' +
      '<div class="nrec"><span class="hl f1"> 爆 </span></div>' +
      '<div class="title">' +
      '<a>'+
        content +
      '</a>'+
      '</div>' +
      '<div class="meta">' +
        '<div class="author">' +
          '<a target="_blank" href="https://dexonscan.app/transaction/' + txHash + '">'+
             '@'+blockNumber +
          '</a>' +
        '</div>' +
        '<div class="date">'+
        date+
        '</div>' +
      '</div>' +
    '</div>'
  )
}

$(startApp)
