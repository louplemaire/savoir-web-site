<?php
/**
 * Settings
 */
$node_url = 'http://213.202.230.42:8888/v1/';

$abiJsonToBin_url = $node_url.'chain/abi_json_to_bin';
$pushTransaction_url = $node_url.'chain/push_transaction';

echo "<pre>";

/**
 * 
 */
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

// $data = '{
//   "signatures": [
//     "SIG_K1_Kg8eUVeGbi5w3hR6vhmxhSbh2HLi7MWKpiEEeoQvbbab9W64Cq3VN6BvNdz6J8fEdeNkQRLnxD6v6Agy6vcXzqAfovJ4pR"
//   ],
//   "compression": "none",
//   "packed_context_free_data": "",
//   "packed_trx": "'.bin2hex($transactionJsonModel).'"
// }';

$data = [
  'signatures' => [
    'SIG_K1_Kg8eUVeGbi5w3hR6vhmxhSbh2HLi7MWKpiEEeoQvbbab9W64Cq3VN6BvNdz6J8fEdeNkQRLnxD6v6Agy6vcXzqAfovJ4pR'
  ],
  'compression' => false,
  'packed_context_free_data' => '',
  'packed_trx' => bin2hex($transactionJsonModel),
];

/**
 * Get packed transaction
 */
$jsonRequest = '{"code":"projetsavoir", "action":"transfer", "args":{"from":"projetsavoir", "to":"hugoleroy123", "quantity":"0.0001 SOR", "memo":"hetic__fra__94160__Nom"}}';
$abiJsonToBinOptions = array(
    'http' => array(
        'header'  => "Content-type: application/json\r\nAccept: application/json\r\n",
        'method'  => 'POST',
        'content' => $jsonRequest
    )
);
$abiJsonToBinContext  = stream_context_create($abiJsonToBinOptions);
$abiJsonToBinResult = json_decode(file_get_contents($abiJsonToBin_url, false, $abiJsonToBinContext),true);
if ($abiJsonToBinResult === FALSE) { echo "error"; }
$packedTransaction = $abiJsonToBinResult['binargs'];
var_dump($packedTransaction);

/**
 * Set the transaction
 */
$transactionData = [
    'signatures' => [
      'SIG_K1_Kg8eUVeGbi5w3hR6vhmxhSbh2HLi7MWKpiEEeoQvbbab9W64Cq3VN6BvNdz6J8fEdeNkQRLnxD6v6Agy6vcXzqAfovJ4pR'
    ],
    "compression" => false,
    "packed_context_free_data" => "",
    "packed_trx" => $packedTransaction,
];

var_dump(json_encode($transactionData));

/**
 * Push the transaction
 */
$ch = curl_init();
//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $pushTransaction_url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Content-type' => 'application/json',
  'Accept' => 'application/json'
]);
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($transactionData));
//So that curl_exec returns the contents of the cURL; rather than echoing it
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
//execute post
$transactionResult = json_decode(curl_exec($ch),true);
var_dump($transactionResult);

echo "---</pre>";
echo "hey";