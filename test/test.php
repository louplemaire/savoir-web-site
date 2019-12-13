<?php
// require '../vendor/autoload.php';

$transactionJsonModel = '{
    "expiration": "2018-12-06T03:47:15",
    "ref_block_num": 64484,
    "ref_block_prefix": 2668208063,
    "max_net_usage_words": 0,
    "max_cpu_usage_ms": 0,
    "delay_sec": 0,
    "context_free_actions": [],
    "actions": [
      {
        "account": "eosio.token",
        "name": "transfer",
        "authorization": [
          {
            "actor": "supereospark",
            "permission": "active"
          }
        ],
        "data": "00afa998aaabaac6a0986aff4b9a3c61102700000000000004454f5300000000057465737431"
      }
    ],
    "transaction_extensions": [],
    "signatures": [
      "SIG_K1_JyxaXuABoAuzzaScAfw9evnQozYL17aBSUud4PEz4sRrRsPn2phwWuo9A1B14pRECoGcFKzF1dJHHvnM4YbUyKMaAt2agb"
    ],
    "context_free_data": []
  }';

$data = '{
    "signatures": [
      "SIG_K1_Kg8eUVeGbi5w3hR6vhmxhSbh2HLi7MWKpiEEeoQvbbab9W64Cq3VN6BvNdz6J8fEdeNkQRLnxD6v6Agy6vcXzqAfovJ4pR"
    ],
    "compression": "none",
    "packed_context_free_data": "",
    "packed_trx": "'.bin2hex($transactionJsonModel).'"
  }';

$data = [
    'signatures' => [''],
    'compression' => false,
    'packed_context_free_data' => '',
    'packed_trx' => bin2hex($transactionJsonModel),
];

echo "<pre>";

var_dump($data);

// echo "<pre>---";
// use \BlockMatrix\EosRpc\ChainFactory;
// use \BlockMatrix\EosRpc\WalletFactory;
// use \BlockMatrix\EosRpc\EosRpc;

// $api = (new ChainFactory)->api();
// // $eos->setWalletInfo("savoiradmin", "PW5Khtqw5uicxcVxjs13hhw3qiV9J6XuN6TXcFHcu5P5FCw7Yf4tP");
// $walapi = (new WalletFactory)->api();
// echo $walapi->open("savoiradmin");
// echo "---------";
// echo $walapi->unlock(["savoiradmin", "PW5Khtqw5uicxcVxjs13hhw3qiV9J6XuN6TXcFHcu5P5FCw7Yf4tP"]);
// $eos = (new EosRpc($api, $walapi));

// echo $api->getInfo();
// var_dump($api->getAccount("hugoleroy123"));
// echo $eos->transfer("projetsavoir", "hugoleroy123", "0.0001 SOR", "tinaelhawa__fra__93100_lebouclettespourleplaisirdetous");

// echo $eos->pushAction("projetsavoir", "hi", ["projetsavoir"], ["actor"=>"projetsavoir","permission"=>"active"]);

// $trx_ids = $eos->pushTransactions(
//     [
//         $eos->makeTransaction(
//             [
//                 [
//                     "account" => "projetsavoir",
//                     "name" => "transfer",
//                     "authorization" => [
//                         [
//                             "actor" => "projetsavoir",
//                             "permission" => "active"
//                         ]
//                     ],
//                     "data" => [
//                         "from" => "projetsavoir",
//                         "to" => "hugoleroy123",
//                         "quantity" => "0.0001 EOS",
//                         "memo" => "tinaelhawa__fra__93100_lebouclettespourleplaisirdetous"
//                     ]
//                 ]
//             ]
//         )
//     ]
// );
// var_dump($trx_ids);
// foreach ($trx_ids as $key => $value) {
//     echo $trx_ids[$key]['transaction_id'] . PHP_EOL;
// }

echo "---</pre>";
echo "hey";