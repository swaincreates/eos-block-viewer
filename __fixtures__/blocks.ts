import { GetBlockResult } from "../src/interfaces";
const blocks: GetBlockResult[] = [
  {
    timestamp: "2019-09-27T14:46:31.000",
    producer: "eosflytomars",
    confirmed: 0,
    previous:
      "04dcd923316a1778b1c3a209025c6b461cc3c585935f8e1a17c7b82e5ff2f9e1",
    transaction_mroot:
      "6f4b3073c858060d3df414f64c7dce29c7c17052629b888fc4bdba385e5ea031",
    action_mroot:
      "c1c03088d13dadb6532aef6129010a3dd12a8554769009703b4045d7d6c9296a",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_KfWRAfn4uQXuQpF4xouPdZDsL4XRxmGkr47VZHDDcTShNZMFCWXirGnN4kca7KpXYzMJXrVEFmjURrxbKo763MUVNxaMur",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 401,
        net_usage_words: 21,
        trx: {
          id:
            "829761d985dd86983939147b61bb4d91b6958d3d537a16eb78059b5219bc613d",
          signatures: [
            "SIG_K1_KhXj91rHmuyoF6CJcCMrPUaiPhRgzDmM7NBSisWaBZwo8fGTGXreucLv8GRf3NDj3fTd233f8mQZc1vmN93KpnVG6R3wCs"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d21d9b01dba400000000001d0b0b9086315d3540000000044a3b6ba01a0b0a60d6315d35400000000a8ed3232496b3e0b0000000000403031663933313031383033393634306365633665373466326131323232643038343665646134626534643331343932316534346661663234653763303036366600",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "endlesscrash",
                name: "reveal",
                authorization: [
                  {
                    actor: "endlesshouse",
                    permission: "active"
                  }
                ],
                data: {
                  crash_id: 736875,
                  seed:
                    "01f931018039640cec6e74f2a1222d0846eda4be4d314921e44faf24e7c0066f"
                },
                hex_data:
                  "6b3e0b00000000004030316639333130313830333936343063656336653734663261313232326430383436656461346265346433313439323165343466616632346537633030363666"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 221,
        net_usage_words: 75,
        trx: {
          id:
            "4a53e1c3245ede2f1e2a294c31f113c05312dc307be398c45448cc38f7200424",
          signatures: [
            "SIG_K1_Kaq8hd2AyAie7PmLW1FPaoLpxjgQdhEP2szQubHKxmEVsRK187GpQEmQRJUmeDwbsLZVXy8mXDSF5YHGM3BSFVMsr8uNWd"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "00218e5d1ed9112ce8270000000001401da4f1f83c353d000000006293198d01401da4f1f83c353d00000000a8ed3232f4032463623962646436392d366532362d343237392d613239322d356661333330633137383233a4037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a22425348532e49766b6f766963682e537461636579222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c22464c5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c223530305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d14425348532e49766b6f766963682e53746163657913323031392d30392d32375431343a34363a333000",
          transaction: {
            expiration: "2019-09-27T14:47:28",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bountyblokio",
                name: "logtask",
                authorization: [
                  {
                    actor: "bountyblokio",
                    permission: "active"
                  }
                ],
                data: {
                  task_guid: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                  task_data: {
                    app_name: "HOWTHEMARKETWORKS",
                    account_name: "BSHS.Ivkovich.Stacey",
                    task_name: "Buy US stocks 50 times",
                    qty_logged: 1,
                    qty_required: 50,
                    param: {
                      symbol: "FL",
                      orderside: "Buy",
                      ordertype: "Market",
                      exchange: "US",
                      orderqty: "500",
                      securitytype: "Equities"
                    },
                    task_id: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                    challenge_id: "b0daa55c-d444-4375-8465-9b3d00af237e",
                    task_type: "Regular"
                  },
                  account_name: "BSHS.Ivkovich.Stacey",
                  create_date: "2019-09-27T14:46:30"
                },
                hex_data:
                  "2463623962646436392d366532362d343237392d613239322d356661333330633137383233a4037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a22425348532e49766b6f766963682e537461636579222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c22464c5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c223530305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d14425348532e49766b6f766963682e53746163657913323031392d30392d32375431343a34363a3330"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 175,
        net_usage_words: 25,
        trx: {
          id:
            "767c7414121c1a9319d5175f457fcaeecf9fce6ff67c946abafd44264f9a2bf6",
          signatures: [
            "SIG_K1_KdAQE7vPVeYvs218nEDsNkmLhntk6RbZnHMtyrs4dLvLyYbrHWjM2fNq5PjbwDi2r7RNGs5qLbRQaEPAnbkvo2SNfejMPH"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01104408818830ee3c00000000a8ed32326b104408818830ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a61515758615063426350474c7a5047446150636e6c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr312411121",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr312411121",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWXaPcBcPGLzPGDaPcnliT=="
                },
                hex_data:
                  "104408818830ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a61515758615063426350474c7a5047446150636e6c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 221,
        net_usage_words: 76,
        trx: {
          id:
            "8646a21e3eb0ff6a260b1e81d5c97ff1cbc20a2319c17b9a291b82946540a68e",
          signatures: [
            "SIG_K1_K4wuFaa1M34DfHEzW791YAZXDRCZDNv6vfkXZD5gmbCX8BqDCqKNARzfbPfMAaQYccBVxfD93YEUBaF8YNGRU3h8HxURYY"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "00218e5d1ed9112ce8270000000001401da4f1f83c353d000000006293198d01401da4f1f83c353d00000000a8ed3232fd032463623962646436392d366532362d343237392d613239322d356661333330633137383233a9037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a2242616e676f72205261696e65732044616d6f6e5374696c6c222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c224e4f4b5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c223130305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d1842616e676f72205261696e65732044616d6f6e5374696c6c13323031392d30392d32375431343a34363a333000",
          transaction: {
            expiration: "2019-09-27T14:47:28",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bountyblokio",
                name: "logtask",
                authorization: [
                  {
                    actor: "bountyblokio",
                    permission: "active"
                  }
                ],
                data: {
                  task_guid: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                  task_data: {
                    app_name: "HOWTHEMARKETWORKS",
                    account_name: "Bangor Raines DamonStill",
                    task_name: "Buy US stocks 50 times",
                    qty_logged: 1,
                    qty_required: 50,
                    param: {
                      symbol: "NOK",
                      orderside: "Buy",
                      ordertype: "Market",
                      exchange: "US",
                      orderqty: "100",
                      securitytype: "Equities"
                    },
                    task_id: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                    challenge_id: "b0daa55c-d444-4375-8465-9b3d00af237e",
                    task_type: "Regular"
                  },
                  account_name: "Bangor Raines DamonStill",
                  create_date: "2019-09-27T14:46:30"
                },
                hex_data:
                  "2463623962646436392d366532362d343237392d613239322d356661333330633137383233a9037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a2242616e676f72205261696e65732044616d6f6e5374696c6c222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c224e4f4b5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c223130305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d1842616e676f72205261696e65732044616d6f6e5374696c6c13323031392d30392d32375431343a34363a3330"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 5131,
        net_usage_words: 102,
        trx: {
          id:
            "3a05db72244645bea18188bf847180b55eec0dc6a0e7e34a1e98a5e416b27175",
          signatures: [
            "SIG_K1_JweD3iL9Hc3SjKjFA1TCVDqUjwGNPuDSNwBvLbg6SV9y4nyNGfDFs8YdzNVBJTc5qCJKBPkg1hTmss38Px5fBhgVrW416Z"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "01218e5d1fd9d35bcb15000000000580a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373531222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a264c00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373636222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373530222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a2a4600000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373637222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a2f089d08000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373439222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:47:29",
            ref_block_num: 55583,
            ref_block_prefix: 365648851,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.751",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373531222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.9494 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.766",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a264c00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373636222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.750",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373530222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.7962 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.767",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a2a4600000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373637222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.44508975 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.749",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a2f089d08000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373439222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 271,
        net_usage_words: 13,
        trx: {
          id:
            "dcb468c5a80241789df379f8c946b56f2078c2b9610429f1299c64c1ad5b1e59",
          signatures: [
            "SIG_K1_Kck51T3nYWrhVjJuArCcwqVPKDPx53Z9bSfM3uPhH5Rmwqu4ePxqvYSkBL33qdiRStYzznkDLtzyQ5KphrLJremZJAjhSn"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "d52e8e5dd1d7b03c5a970000000001a02ecd38ab9a55ed000000000046a3bc0110a693c9509755ed000000ead28cb3aa08833406000000000000",
          transaction: {
            expiration: "2019-09-27T15:46:29",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "xpetpetstore",
                name: "rmlog",
                authorization: [
                  {
                    actor: "xpetioadmin1",
                    permission: "petstore"
                  }
                ],
                data: {
                  id: 406659
                },
                hex_data: "8334060000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 323,
        net_usage_words: 16,
        trx: {
          id:
            "14a42dcb9257c8e700a80322c5fe04d1547b92883ddbcfb7a13d7813db19d748",
          signatures: [
            "SIG_K1_KmEWyDNn4kkVMEo1wWvXzUJQehxiZyusNeUCDGASmz4uh4jBu7hdJoLAFBaHxH3jPNr44ypeHzhickX3uyyixmNeuRfrpo"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1dd9a3e5755d0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c92079903d21845a39892af41b6815dc664df812bb48acead6e7f28c81373498eed200",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55581,
            ref_block_prefix: 1568007587,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "79903d21845a39892af41b6815dc664df812bb48acead6e7f28c81373498eed2"
                },
                hex_data:
                  "79903d21845a39892af41b6815dc664df812bb48acead6e7f28c81373498eed2"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 283,
        net_usage_words: 16,
        trx: {
          id:
            "7c309cdad73bc55978b8f921487bbe9359c63f61ff7c6547e7e71f22643fc4fa",
          signatures: [
            "SIG_K1_Kjes5ANBr2tvV4zSrJnTXLSMkbAzJT6rG5DAnhF38goK5FQTJG1QebYZyUjMe5cA41jTm2oxZ9F2pY63MNRyW8AKT9S8Pg"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1dd9a3e5755d0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c9203f55bb52505013b51403b645afb26cc16ff4b24e60ca8dc8eb2080014009b88300",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55581,
            ref_block_prefix: 1568007587,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "3f55bb52505013b51403b645afb26cc16ff4b24e60ca8dc8eb2080014009b883"
                },
                hex_data:
                  "3f55bb52505013b51403b645afb26cc16ff4b24e60ca8dc8eb2080014009b883"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 720,
        net_usage_words: 147,
        trx: {
          id:
            "f7aeacfdd8cd36c95d44893303a9f96b5434980fc5ebdd1463df28de86defd61",
          signatures: [
            "SIG_K1_Jy63UfaQYLrW6BRpRs44vfYUBaDyE7q97HRsMJvfibWobwoRtgJs4ZMv8667cEa9Kkcpz9cpKdewQTePftUy8dysBh6LYD"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9ba089f64dd2d139c93e1308e450e82eaebf53b0c19f9595642a5cafa814ea21d9a0e304480c83c884c3c90087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3534335a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d312e3136343520454f53222c227761676572223a22322e3439363320454f53222c227061796f7574223a22312e3333313820454f53222c2263757272656e74416d6f756e74223a2231363235392e3230373220454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "9f64dd2d139c93e1308e450e82eaebf53b0c19f9595642a5cafa814ea21d9a0e",
                  username: "blackjack123",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.543Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-1.1645 EOS",
                    wager: "2.4963 EOS",
                    payout: "1.3318 EOS",
                    currentAmount: "16259.2072 EOS"
                  }
                },
                hex_data:
                  "9f64dd2d139c93e1308e450e82eaebf53b0c19f9595642a5cafa814ea21d9a0e304480c83c884c3c90087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3534335a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d312e3136343520454f53222c227761676572223a22322e3439363320454f53222c227061796f7574223a22312e3333313820454f53222c2263757272656e74416d6f756e74223a2231363235392e3230373220454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 869,
        net_usage_words: 147,
        trx: {
          id:
            "802d9049cf5a13e97e8db19823bdc3dc0dc29817b54e36877cf6e2ae08537776",
          signatures: [
            "SIG_K1_KaAKt5x1esqzoRoj1i4zWK4RaGuQfR5FPgSxKvx5ZTDQ52sg4ntZkoYPhJDhd3d9xNdeqbGRNjAvzzkPk39HiCMLcjWWxm"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b9085daf6012017311c522fd16a242c6da65fa499bb3f2b5c43ae82f995b510d6294a09864f74f9b08618f087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3533335a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3637323920454f53222c227761676572223a22312e3434313920454f53222c227061796f7574223a22302e3736393020454f53222c2263757272656e74416d6f756e74223a22393338352e3635303920454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "5daf6012017311c522fd16a242c6da65fa499bb3f2b5c43ae82f995b510d6294",
                  username: "g44dqnzrgmge",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.533Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.6729 EOS",
                    wager: "1.4419 EOS",
                    payout: "0.7690 EOS",
                    currentAmount: "9385.6509 EOS"
                  }
                },
                hex_data:
                  "5daf6012017311c522fd16a242c6da65fa499bb3f2b5c43ae82f995b510d6294a09864f74f9b08618f087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3533335a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3637323920454f53222c227761676572223a22312e3434313920454f53222c227061796f7574223a22302e3736393020454f53222c2263757272656e74416d6f756e74223a22393338352e3635303920454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 248,
        net_usage_words: 12,
        trx: {
          id:
            "494a8d62cd4d1bb8826f990aef760f7267b20fddddf3667be7a468dbb402bb0e",
          signatures: [
            "SIG_K1_JuKr4jtYvvnZm51oE29XbzES65exhjmZbcY6yZva3MYmLcR9tCoJciM7Cq3nWgcBkJ6NkvUMhNYQ5ZbMJbdFtRXYqyohBV"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "3d218e5dd1d7b03c5a9700000000013044b8aa6aece53500000060ba95b1ca011044b8aa6aece53500000000a8ed32320000",
          transaction: {
            expiration: "2019-09-27T14:48:29",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "armysuper123",
                name: "testfin",
                authorization: [
                  {
                    actor: "armysuper121",
                    permission: "active"
                  }
                ],
                data: ""
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 492,
        net_usage_words: 16,
        trx: {
          id:
            "e3ccdb51688376f710444aa287ecd574847f3689f9fbd5ca04ccedfeb84bb568",
          signatures: [
            "SIG_K1_KWMzpjhd26PX8dhnmj2Tq7VU1wGPRDjwhbbEQoL2xnLh4M5E5XAUmSwJeJyxiZNMTLqZkzhpkMJoLKLpR1sfFRPsYKF2GQ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5dddd768f83c79000000000180a9c2ab3a4d7175000000572d3ccdcd0110c255d3494d717500000000a8ed32322210c255d3494d7175308453dcb5cfa6e12e12520000000000084950534f000000013500",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55261,
            ref_block_prefix: 2034038888,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "ipsouipfseos",
                name: "transfer",
                authorization: [
                  {
                    actor: "ipsouminer11",
                    permission: "active"
                  }
                ],
                data: {
                  from: "ipsouminer11",
                  to: "wangzhiwei23",
                  quantity: "0.05378606 IPSO",
                  memo: "5"
                },
                hex_data:
                  "10c255d3494d7175308453dcb5cfa6e12e12520000000000084950534f0000000135"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 148,
        net_usage_words: 23,
        trx: {
          id:
            "3d03586999e5149f44576d6ed86c11bb650366d6dad38ead59974656dd8cc590",
          signatures: [
            "SIG_K1_Khvkc8Jc4XEkGAKtsQLsSibMCaeR3QMaLxnkbudu2PR8FJQwXeUtTdgpRvxcBUvRBTBYemHBXbTfMg1ppoLSAizdZv7gw4"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d21d9b01dba40000000000190348dc69b583155000000000010a3f20190348dc69b58315500000000a8ed32325a90348dc69b58315551454f53506c6179204e65772047616d65204f6e6c696e65202d20534c4f5453212057494e205448452042494720424f4e5553212068747470733a2f2f656f73706c61792e636f6d2f3f336639383164343600",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplayaloud",
                name: "yell",
                authorization: [
                  {
                    actor: "eosplayaloud",
                    permission: "active"
                  }
                ],
                data: {
                  u: "eosplayaloud",
                  memo:
                    "EOSPlay New Game Online - SLOTS! WIN THE BIG BONUS! https://eosplay.com/?3f981d46"
                },
                hex_data:
                  "90348dc69b58315551454f53506c6179204e65772047616d65204f6e6c696e65202d20534c4f5453212057494e205448452042494720424f4e5553212068747470733a2f2f656f73706c61792e636f6d2f3f3366393831643436"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4042,
        net_usage_words: 47,
        trx: {
          id:
            "4bfb6179ad814518650533faaee15b3a8b3a8a1ebc97b0c164d2b9279bc40d1b",
          signatures: [
            "SIG_K1_KdJcGBig9WELLYGMQrJHdbquKn617pYzzQQ7hvZx4X67oCFEmxJK8ygtMfFHiCZdYjosMKbvvdku4apNYEvpgnn7AazPKw"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d21d9b01dba400000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570168f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d316631663535633536386134633063363265636436656138333761303030623862653664643365303963633961313466356232646134636634663764653731632d47463031627a4c6251516f5a413931656f7464662d313536393539373435342d5349475f4b315f4b3175434b4d42676d444546356565726b533743555250396b5147473571346366784a386e384a647456685131534a70636d3378646431744d7a785034413763314c61544d59394a6b5758714144796f62596f486958705265554d484e6900",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "h",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-1f1f55c568a4c0c62ecd6ea837a000b8be6dd3e09cc9a14f5b2da4cf4f7de71c-GF01bzLbQQoZA91eotdf-1569597454-SIG_K1_K1uCKMBgmDEF5eerkS7CURP9kQGG5q4cfxJ8n8JdtVhQ1SJpcm3xdd1tMzxP4A7c1LaTMY9JkWXqADyobYoHiXpReUMHNi"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570168f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d316631663535633536386134633063363265636436656138333761303030623862653664643365303963633961313466356232646134636634663764653731632d47463031627a4c6251516f5a413931656f7464662d313536393539373435342d5349475f4b315f4b3175434b4d42676d444546356565726b533743555250396b5147473571346366784a386e384a647456685131534a70636d3378646431744d7a785034413763314c61544d59394a6b5758714144796f62596f486958705265554d484e69"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 207,
        net_usage_words: 15,
        trx: {
          id:
            "51b05293d5eb4d4bb1226592c40c7693aeedbd612d56bda6af82a03086361c60",
          signatures: [
            "SIG_K1_KBgtCZUf8Bnx4GXUJ5BaEqytuaXJuRehzoH3gehBiRkzQaheE4KhD7iNZPjJnPva9iEr2J8TAWYafdhgDFaKKBj1gnTiqr"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d22d99794e5540000000001001480c83c884c3c30a9cbc85ce54dac01703542db2157af6e00000000a8ed323218703542db2157af6ecd661a0000000000040000000000000000",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55586,
            ref_block_prefix: 1424331927,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "blackjack.e",
                name: "playeraction",
                authorization: [
                  {
                    actor: "hurpicivccur",
                    permission: "active"
                  }
                ],
                data: {
                  player: "hurpicivccur",
                  game_id: 1730253,
                  action: 4
                },
                hex_data: "703542db2157af6ecd661a00000000000400000000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 240,
        net_usage_words: 17,
        trx: {
          id:
            "146629ff736d48e0b0d651b74614591275ceddb6e7bddcf0035bcacfefb070ec",
          signatures: [
            "SIG_K1_KA4TiXPQ56YAf7zu6xVaN7jJaf2H7VQ5Q3MfUNtKhDuPcCbboT5y5JKKQ5aHYt8daAZ1qPKWXVHTAN4U5YVaCkjSpmCMoZ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "3d218e5d22d99794e554000000000100a6823403ea3055000000572d3ccdcd01a09869fd4f9abd690000000080ab26a727a09869fd4f9abd69302995aa659a0fa46b9400000000000004454f53000000000639343135353400",
          transaction: {
            expiration: "2019-09-27T14:48:29",
            ref_block_num: 55586,
            ref_block_prefix: 1424331927,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "haytonzxhage",
                    permission: "owner"
                  }
                ],
                data: {
                  from: "haytonzxhage",
                  to: "okbtothemoon",
                  quantity: "3.7995 EOS",
                  memo: "941554"
                },
                hex_data:
                  "a09869fd4f9abd69302995aa659a0fa46b9400000000000004454f530000000006393431353534"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 567,
        net_usage_words: 18,
        trx: {
          id:
            "cd417d058f361606c16497faaaed23f64ce880fd82c47512703d3ac773c36999",
          signatures: [
            "SIG_K1_KcQWYYfwFcZVtzCuXpkGELriX7HP5x469CUx7T3iQ8TJwRr8uQg1udsG69UndZfcTJtHFAdGQrLiCrCb3D4PBoLuquT9RA",
            "SIG_K1_KbCcEsj5uWwfnLj7WnJTFFfoMWs1PxELN1yKgNC7svJDyMjPZgeE5mCQ1Z2U6AqnCPQystJcXkJ4k5SfHrpGbFhKHaDimX"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5d1bd99c46613a000000000180f0a519a98ae9ad000000e0aa74294d0260d2340d912727bc00000000a8ed323270f0a519a98ae9ad00000000a8ed32321456d202000000000075270000000000002c01000000",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "prospectorsc",
                name: "doorder",
                authorization: [
                  {
                    actor: "rknmj4chanda",
                    permission: "active"
                  },
                  {
                    actor: "prospectorsb",
                    permission: "active"
                  }
                ],
                data: {
                  order_id: 184918,
                  worker_id: 10101,
                  amount: 300
                },
                hex_data: "56d202000000000075270000000000002c010000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 701,
        net_usage_words: 23,
        trx: {
          id:
            "92241e943431e9f9bafa930607fc6ac4da0a4b6a38fbde96b22dce2c705b6719",
          signatures: [
            "SIG_K1_K9zJZnoqn3x973KGDz9MckUycph5vzuFe1B4jqFcsqmpSmjVhL6AcXiZipy3RA1ZZGNGdxRRaqcVmz3kMXVCyvDARCHnrk"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d21d9b01dba400000000001a026a59a4d8331550000004044a3b6ba0170d5be0a53cda6c100000000a8ed32325b80a9d29e4dda5443fb03150000000000086d616b656974656d002051e4a7c389ab4054c8243e0ff6ef47e81899415eecba396ccc24ae9e34eea4565d5991838ab081beec1bc212516f697a0670c11c192f292782956d234f07345b00",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "reveal2",
                authorization: [
                  {
                    actor: "sanguoserver",
                    permission: "active"
                  }
                ],
                data: {
                  from: "chehongyueos",
                  opid: 1377275,
                  op: "makeitem",
                  sig:
                    "SIG_K1_KfTj8gE2BnKC2LV7cj25FyWx5SaETz1PXpnNkt4aZeCSqRL4wQrvXhFabMLRQqF9wgprgiXECNqBNv3nAHDpJV7f53YT2k"
                },
                hex_data:
                  "80a9d29e4dda5443fb03150000000000086d616b656974656d002051e4a7c389ab4054c8243e0ff6ef47e81899415eecba396ccc24ae9e34eea4565d5991838ab081beec1bc212516f697a0670c11c192f292782956d234f07345b"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 5024,
        net_usage_words: 102,
        trx: {
          id:
            "b1470ba4813b7ceb320022e61366b684449332e2967edd351295b256718644da",
          signatures: [
            "SIG_K1_Kkjd3QYDEGwhiPd4nbCQvHkfQcmbiPfvWfaycTp5cLQuCy2CxueBBkJz1AbVdWEdhfprUrN1wZM3DTz7TL6S33mBoJc8J4"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "01218e5d1fd9d35bcb15000000000500a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a572700000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373638222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373438222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89adc0500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373639222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373437222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a563200000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373730222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:47:29",
            ref_block_num: 55583,
            ref_block_prefix: 365648851,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.0071 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.768",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a572700000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373638222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.748",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373438222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "0.1500 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.769",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89adc0500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373639222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.747",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373437222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.2886 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.770",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a563200000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373730222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 196,
        net_usage_words: 15,
        trx: {
          id:
            "be7f69690614a7fde1ff5fa526ac449de49a8a6cd89014e2548ceae1ada28aed",
          signatures: [
            "SIG_K1_K6FmDxjChcH4SwgLxD4EHyBzz9LDiype7XevN47Z2x9Ca1omZbyuKEbTZwfHckM2WqyaPWJWF13jAqkbmitywpPsU22CeZ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce827000000000190a7ca4865338d540000000000e04dac0190316d4c65338d5400000000a8ed32321890316d4c65338d54ac01000000000000055e5f000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "emanatectent",
                name: "play",
                authorization: [
                  {
                    actor: "emanateghost",
                    permission: "active"
                  }
                ],
                data: {
                  owner: "emanateghost",
                  id: 428,
                  microseconds: 6249989
                },
                hex_data: "90316d4c65338d54ac01000000000000055e5f0000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 270,
        net_usage_words: 16,
        trx: {
          id:
            "a983a3106fbed81192457f7095fa3ccc789453ceba467c7029efda1c1ac35969",
          signatures: [
            "SIG_K1_KgJFkBYLipwV1FBFGLAFpbvX9cKWRrFj2FceMGjjpvSy9zv1yHCP7K1bniXUL4sidcauthNgwKk6z4eoYBrtDHWeUQ6oGs"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c920329eec41619937baf040b81053da7ed80e9ff4c9408f50f1727cdf1805ce355a00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "329eec41619937baf040b81053da7ed80e9ff4c9408f50f1727cdf1805ce355a"
                },
                hex_data:
                  "329eec41619937baf040b81053da7ed80e9ff4c9408f50f1727cdf1805ce355a"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 240,
        net_usage_words: 16,
        trx: {
          id:
            "64451aa360689df265931e846cfe149d84b906f9dd701513909532b17e8f2511",
          signatures: [
            "SIG_K1_KWv4VrSnqc1pzRoL4z5j6s6xjG789r3rDv2LbZQtwP827nteXggyMLqRPie11RzdfcaaQ5YpQmz3Jaa1wVqhfxGDFJwCjU"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c9208f1a39bbcffeb15ffb83e851bdfc3379feb81e78645faf0a08ad5d862762454200",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "8f1a39bbcffeb15ffb83e851bdfc3379feb81e78645faf0a08ad5d8627624542"
                },
                hex_data:
                  "8f1a39bbcffeb15ffb83e851bdfc3379feb81e78645faf0a08ad5d8627624542"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 217,
        net_usage_words: 16,
        trx: {
          id:
            "a6caf70e2453a81db880d76e77de51c1987ae0b9c91b3e8abc45db4e40bfb13b",
          signatures: [
            "SIG_K1_Kh1arBdvXHNH9hxvgqYpZ3MKL1dtEN4CfxSdEWqHMe4DVCtoptzAt2fqFGX4XL8Btdoy5RJbwbSb5mZFGLFL9aX3xMXx49"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c9206f9c17036661ff11d8a4dd54649621af855b2af621e1c22eec1ab9a17ee3017f00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "6f9c17036661ff11d8a4dd54649621af855b2af621e1c22eec1ab9a17ee3017f"
                },
                hex_data:
                  "6f9c17036661ff11d8a4dd54649621af855b2af621e1c22eec1ab9a17ee3017f"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 160,
        net_usage_words: 25,
        trx: {
          id:
            "11b115ab06e478cf1f67adf533adc5c2f27cd87eb6daa2958ecf04c36b5b7809",
          signatures: [
            "SIG_K1_KiVPTTftHWy2PHy9PpqraxXYLPTiK6QXm6Y9HNptCdHhMbCiWdmdLZjWyeMRf9yyubV4M9XdUEDjuUp1DgDX15vDwZjatY"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba0150092184104208b100000000a8ed32326b50092184104208b162317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a615157663051635833504748325047446150574c6c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "q4444444444p",
                    permission: "active"
                  }
                ],
                data: {
                  account: "q4444444444p",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWf0QcX3PGH2PGDaPWLliT=="
                },
                hex_data:
                  "50092184104208b162317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a615157663051635833504748325047446150574c6c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd924838b06076bca7dc2fd6422b2ff9cf548c757658056aad57fd03df49d",
    block_num: 81582372,
    ref_block_prefix: 3263023723
  },
  {
    timestamp: "2019-09-27T14:46:30.500",
    producer: "eosflytomars",
    confirmed: 0,
    previous:
      "04dcd9221f657aad9794e5545f11d0dd95261be25f548baef83c6eec4ffb3cf0",
    transaction_mroot:
      "ac59cb3827f282f4a98285d8f424ae48d5dd7b2ec0f3d626d0e6f0a456f594a8",
    action_mroot:
      "dd9ccfef60ff234368fe04621401ae9f3b775432a1ac57b159fe7a1445676e5e",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_K6NjXs1ZmcK7Um4YvyUH5FH6soEUfmBYVLTsKKsFqXSWhoEMamBFqc6KwpeJU3eTcQaqLoSmUZNotDjHqofQhnoVDtKbBC",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 266,
        net_usage_words: 6,
        trx: "f981caf52e6da6ad4231f563219952a87f3056436076361b1a8ed799db754510"
      },
      {
        status: "executed",
        cpu_usage_us: 3478,
        net_usage_words: 22,
        trx: {
          id:
            "a55ab599fd735626d5a6d09355dde3ad98d576839dc3147975bde8e130c590a0",
          signatures: [
            "SIG_K1_KX2xMG99koXRhy4iFAVEGAkPPGNJZUfZvjPWndcDc1FTir5vM4rzFXn1zjKW4izff55RfMDTVQsuH7YNYWU5tWhdRLmgjE"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fd208e5dd1d7b03c5a97000000000100a6823403ea3055000000572d3ccdcd01a01861f74a96bc6500000000a8ed323250a01861f74a96bc65309d4c462197b23a881300000000000004454f53000000002f616374696f6e3a6265742c736565643a495158486b6c48646735487a7146316464352c726f6c6c556e6465723a393400",
          transaction: {
            expiration: "2019-09-27T14:47:25",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "gqydgmrrg4ge",
                    permission: "active"
                  }
                ],
                data: {
                  from: "gqydgmrrg4ge",
                  to: "betdiceadmin",
                  quantity: "0.5000 EOS",
                  memo: "action:bet,seed:IQXHklHdg5HzqF1dd5,rollUnder:94"
                },
                hex_data:
                  "a01861f74a96bc65309d4c462197b23a881300000000000004454f53000000002f616374696f6e3a6265742c736565643a495158486b6c48646735487a7146316464352c726f6c6c556e6465723a3934"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 225,
        net_usage_words: 13,
        trx: {
          id:
            "c0e9cc106ee419e0925b199dc5eabdf10cbc06f4874c400b662a66e974a7683b",
          signatures: [
            "SIG_K1_JvsAAkRs82pLc473j97opaRRNDrmYBsA7pkH5xRV4opgE1fWxbpttPKf1KpHi47do8hTBU8y1J5YKL6EReByFWPjnRA5mp"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "01218e5dd1d7b03c5a9700000000011012bdd5649a3055008037b14685a641011012bdd5649a305500000000a8ed32320820c2d46f1af7a6b300",
          transaction: {
            expiration: "2019-09-27T14:47:29",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosdotaprod1",
                name: "cancelplay",
                authorization: [
                  {
                    actor: "eosdotaprod1",
                    permission: "active"
                  }
                ],
                data: {
                  account: "qinjianjun12"
                },
                hex_data: "20c2d46f1af7a6b3"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4057,
        net_usage_words: 47,
        trx: {
          id:
            "12e106309e74c2382125c94648e37d39902ae68b158fd848ce1a764e233cfcc7",
          signatures: [
            "SIG_K1_Kg6QHL1v3Z2JjU6thBJj426zNncsf8xyqzz95nRCJHBAaM4TjKJGzgcKsf5tJosWQnB96riRVjcSnviyPqhgpEZEqdZLdV"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d21d9b01dba400000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570167f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d663730646632636237316231323762626164356433323339336337313263393462633738636235373837636130323031323136383536313931343164303431322d47463031627a4c6251516f5a413931656f7464662d313536393539373438342d5349475f4b315f4b6779376e584b435447486b44785065746a616d4b4844785a5a6e48695864484d454e313941503457537a5262633732766565776d53364e65686b467062486d62374c51665066335563416b48425934355534784e70736d6f416551485700",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "g",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-f70df2cb71b127bbad5d32393c712c94bc78cb5787ca020121685619141d0412-GF01bzLbQQoZA91eotdf-1569597484-SIG_K1_Kgy7nXKCTGHkDxPetjamKHDxZZnHiXdHMEN19AP4WSzRbc72veewmS6NehkFpbHmb7LQfPf3UcAkHBY45U4xNpsmoAeQHW"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570167f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d663730646632636237316231323762626164356433323339336337313263393462633738636235373837636130323031323136383536313931343164303431322d47463031627a4c6251516f5a413931656f7464662d313536393539373438342d5349475f4b315f4b6779376e584b435447486b44785065746a616d4b4844785a5a6e48695864484d454e313941503457537a5262633732766565776d53364e65686b467062486d62374c51665066335563416b48425934355534784e70736d6f4165514857"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 5060,
        net_usage_words: 102,
        trx: {
          id:
            "bed738b6df970b6b367ce6e276a6643b55594e7801a82fe463e5f4ffa34728c7",
          signatures: [
            "SIG_K1_KXtxuXrn8Sc7NdsP1WgR4XXDEj8VYnjevyvSmKezZqGvsPcY5D1BrosUqYhNznNc8W5CnsDfB2NJshQa9VUQK5F3twp97J"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "00218e5d1ed9112ce827000000000580a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89aa1e8e906000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373536222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89adc0500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373631222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373535222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89adc0500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373632222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373534222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:47:28",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.15992737 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.756",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89aa1e8e906000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373536222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "0.1500 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.761",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89adc0500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373631222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.755",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373535222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "0.1500 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.762",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89adc0500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373632222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.754",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373534222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 166,
        net_usage_words: 33,
        trx: {
          id:
            "1982180549d3a67ac8e1bfa1d309b5e051b63dd51133b73ed84f86681b063416",
          signatures: [
            "SIG_K1_JvULscp2Dd9i95xEksmpNYwqzSRc7ungP6cnwGZssgrGJERkRHDtMDRb4jPa1JguHtBT2TWmHKv5N8pbuaDD72JCA3XK5M"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d21d9b01dba40000000000190348dc69b583155000000000010a3f20190348dc69b58315500000000a8ed3232a70190348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f616661633666306300",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplayaloud",
                name: "yell",
                authorization: [
                  {
                    actor: "eosplayaloud",
                    permission: "active"
                  }
                ],
                data: {
                  u: "eosplayaloud",
                  memo:
                    "区块链 Hash 值开奖平台 EOSPlay 新游戏 HASH 牛牛上线! 另有乐透,骰子,老虎机等着您赢得奖池回报!!! https://eosplay.com/?afac6f0c"
                },
                hex_data:
                  "90348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f6166616336663063"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 252,
        net_usage_words: 13,
        trx: {
          id:
            "ea60acc3dc1eb45ade0ff210ec54e82c000b5d9c5ad613efa62161d5f79a5306",
          signatures: [
            "SIG_K1_KVuk7BrQK9TppEesB4yCrMoZ2zKfNV6tNUJwsR97odKcNKu5LFc2XuejSm45zsu6mAqRmX5ZYSZGjwqqTWWBNWk7YxBuSo"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d20d9f14215070000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a5080c5690020000000000",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55584,
            ref_block_prefix: 118833905,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 43013644
                },
                hex_data: "0c56900200000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 660,
        net_usage_words: 147,
        trx: {
          id:
            "8af73056bda146fe7cb6bcd375a831807df16e047cbfa259e18f7e371e3c637f",
          signatures: [
            "SIG_K1_JvJKw78R7mrcbUMM5g5iyCxUbY9JkTkbth5ezvkrs9Mufbmx6oYwrrZG8mYwLnG8NxprmVbMxW5TNRHdvBcWWwG3UVpsRe"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b8081f200a69275d410eefd9b5c4c790e3ffc1421a062997c3a2ba8b2dea42838e12706936ee567a6b358e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3530355a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3033383020454f53222c227761676572223a22302e3038313420454f53222c227061796f7574223a22302e3034333420454f53222c2263757272656e74416d6f756e74223a223532392e3536303520454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "1f200a69275d410eefd9b5c4c790e3ffc1421a062997c3a2ba8b2dea42838e12",
                  username: "appropriator",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.505Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0380 EOS",
                    wager: "0.0814 EOS",
                    payout: "0.0434 EOS",
                    currentAmount: "529.5605 EOS"
                  }
                },
                hex_data:
                  "1f200a69275d410eefd9b5c4c790e3ffc1421a062997c3a2ba8b2dea42838e12706936ee567a6b358e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3530355a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3033383020454f53222c227761676572223a22302e3038313420454f53222c227061796f7574223a22302e3034333420454f53222c2263757272656e74416d6f756e74223a223532392e3536303520454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 778,
        net_usage_words: 21,
        trx: {
          id:
            "85cca42838967e7b2f763867488b354adfbbc246027bd646a6f1417eb564089a",
          signatures: [
            "SIG_K1_KXTr4yZ64BDfyPFXbaTiPr9Kr6RwmHzg63iDZUwo7Q1zX6Z9R2KzvQRcpbF8GEx92ZMG1ewiu1A6uriBWEBRXrkkd7LDQF"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9489f1ea785ff3d0a64756a3451e9cae9a2e0820f01c2c9882b691fad13e5281b000000c88db915a33e10420801a19a315500a6823403ea30554a0000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "9f1ea785ff3d0a64756a3451e9cae9a2e0820f01c2c9882b691fad13e5281b00",
                  gameName: "bullfight",
                  username: "eostpcc11111",
                  contract: "eosio.token",
                  payoutAsset: "0.0074 EOS"
                },
                hex_data:
                  "9f1ea785ff3d0a64756a3451e9cae9a2e0820f01c2c9882b691fad13e5281b000000c88db915a33e10420801a19a315500a6823403ea30554a0000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 767,
        net_usage_words: 21,
        trx: {
          id:
            "37e14f40c3a50315fbaa693992916f82344da5d00c6adc33f9c558b1c0c9a7b2",
          signatures: [
            "SIG_K1_K2kEaX2WdMkd4vWXgJjTgJSp7FF42NnaBuDbzQYBNyDphVC7MMyeNFpERcLaWeP6xQBRB4SVi2HasTgr3j6Sj3QGFwcn2w"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94845c0fa8c84fada0e84572f957469959672be712ec68db7c04f0e0870de951d830000c88db915a33e706936ee567a6b3500a6823403ea3055b20100000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "45c0fa8c84fada0e84572f957469959672be712ec68db7c04f0e0870de951d83",
                  gameName: "bullfight",
                  username: "appropriator",
                  contract: "eosio.token",
                  payoutAsset: "0.0434 EOS"
                },
                hex_data:
                  "45c0fa8c84fada0e84572f957469959672be712ec68db7c04f0e0870de951d830000c88db915a33e706936ee567a6b3500a6823403ea3055b20100000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 632,
        net_usage_words: 147,
        trx: {
          id:
            "ff647f401bdc461fc6a1da655831bda2c59581924a2289ebb1f4b7ebfe01a8c4",
          signatures: [
            "SIG_K1_KheBGGzRfN2vgqCh3gaWZSFJiCgcFhAVFaYirURtZNYmHnB55PJbfNE2jBbT1qFSzctWW7u6tFn8ezGT1A33ZJ7GGStZBa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b908168179417cc44db59a15bc698ed54d681dbce6aaeb0c76b937bf332f7bcfadf550c810414933bb328f087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3532345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3038333620454f53222c227761676572223a22302e3137393220454f53222c227061796f7574223a22302e3039353620454f53222c2263757272656e74416d6f756e74223a22313136352e3933353620454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "168179417cc44db59a15bc698ed54d681dbce6aaeb0c76b937bf332f7bcfadf5",
                  username: "aexname12345",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.524Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0836 EOS",
                    wager: "0.1792 EOS",
                    payout: "0.0956 EOS",
                    currentAmount: "1165.9356 EOS"
                  }
                },
                hex_data:
                  "168179417cc44db59a15bc698ed54d681dbce6aaeb0c76b937bf332f7bcfadf550c810414933bb328f087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3532345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3038333620454f53222c227761676572223a22302e3137393220454f53222c227061796f7574223a22302e3039353620454f53222c2263757272656e74416d6f756e74223a22313136352e3933353620454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 261,
        net_usage_words: 72,
        trx: {
          id:
            "889bd9b80c1dfe7b0edb0a1ebed879b23b3a4a4b98731a3126133a7ca058df16",
          signatures: [
            "SIG_K1_KX5A9ouoJxyPVXSfP6izRvDZWS2E2UnrtckohDZPtEAGjJPVEyGASxZgx3XMnZNrxKR6892okD7e2VyxJDSKTj7uMhuxpL"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fe208e5d1ad92904ff680000000001401da4f1f83c353d000000006293198d01401da4f1f83c353d00000000a8ed3232e2032434656133363764372d623962382d343733362d623931372d3238623064323963656364349c037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a2245726963525469676865222c227461736b5f6e616d65223a2253656c6c2055532073746f636b732033302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a33302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c22414d5a4e5c222c5c226f72646572736964655c223a5c2253656c6c5c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c22315c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2234656133363764372d623962382d343733362d623931372d323862306432396365636434222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d0a4572696352546967686513323031392d30392d32375431343a34363a323900",
          transaction: {
            expiration: "2019-09-27T14:47:26",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bountyblokio",
                name: "logtask",
                authorization: [
                  {
                    actor: "bountyblokio",
                    permission: "active"
                  }
                ],
                data: {
                  task_guid: "4ea367d7-b9b8-4736-b917-28b0d29cecd4",
                  task_data: {
                    app_name: "HOWTHEMARKETWORKS",
                    account_name: "EricRTighe",
                    task_name: "Sell US stocks 30 times",
                    qty_logged: 1,
                    qty_required: 30,
                    param: {
                      symbol: "AMZN",
                      orderside: "Sell",
                      ordertype: "Market",
                      exchange: "US",
                      orderqty: "1",
                      securitytype: "Equities"
                    },
                    task_id: "4ea367d7-b9b8-4736-b917-28b0d29cecd4",
                    challenge_id: "b0daa55c-d444-4375-8465-9b3d00af237e",
                    task_type: "Regular"
                  },
                  account_name: "EricRTighe",
                  create_date: "2019-09-27T14:46:29"
                },
                hex_data:
                  "2434656133363764372d623962382d343733362d623931372d3238623064323963656364349c037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a2245726963525469676865222c227461736b5f6e616d65223a2253656c6c2055532073746f636b732033302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a33302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c22414d5a4e5c222c5c226f72646572736964655c223a5c2253656c6c5c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c22315c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2234656133363764372d623962382d343733362d623931372d323862306432396365636434222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d0a4572696352546967686513323031392d30392d32375431343a34363a3239"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 763,
        net_usage_words: 21,
        trx: {
          id:
            "727e4ed1ece2388781b13bd2e892e88a8039308eb3a93f6540c3ebbd96a6664e",
          signatures: [
            "SIG_K1_KjLKHCBaU858SuE7UYuyXTo76tXnuzGQGec2z3jT4Rc5KNXeyG6DxoiYZkChfP1k5xjLjsT84dzbKYejrPSKceEzmzkBBz"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948b108fa3d94340f1237a191f947f38d877323a25aee464c1c32144af526cc81530000c88db915a33e60aa8b9c4233bf0800a6823403ea3055380200000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "b108fa3d94340f1237a191f947f38d877323a25aee464c1c32144af526cc8153",
                  gameName: "bullfight",
                  username: "12znakowlipa",
                  contract: "eosio.token",
                  payoutAsset: "0.0568 EOS"
                },
                hex_data:
                  "b108fa3d94340f1237a191f947f38d877323a25aee464c1c32144af526cc81530000c88db915a33e60aa8b9c4233bf0800a6823403ea3055380200000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 640,
        net_usage_words: 21,
        trx: {
          id:
            "0323fe39260e9f537f2f3be4b330280969208ab9a5898a6ff227165f174561bd",
          signatures: [
            "SIG_K1_KczYRuTfaExwvXfUfdWP6htVFnpSpnr7J9yfMhK2tFTF3ycd2FMtPLTHLr3phxgS3jjm4ymAsKijzKwDmb5opmJvXGxPK2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9485dd04d478a0499934b71dbbed7d1d86fc85997f7884b521d30fe20581a8e5f170000c88db915a33e100235ee68498deb00a6823403ea30558d0100000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "5dd04d478a0499934b71dbbed7d1d86fc85997f7884b521d30fe20581a8e5f17",
                  gameName: "bullfight",
                  username: "xiaomubiao11",
                  contract: "eosio.token",
                  payoutAsset: "0.0397 EOS"
                },
                hex_data:
                  "5dd04d478a0499934b71dbbed7d1d86fc85997f7884b521d30fe20581a8e5f170000c88db915a33e100235ee68498deb00a6823403ea30558d0100000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 277,
        net_usage_words: 12,
        trx: {
          id:
            "d0a470ba87ef6a03b0301980f4ac8e784384d45c04a963ed9696b61b2804ee0b",
          signatures: [
            "SIG_K1_Jxixh1hUYChF1aNKmc2eMWRReeqUTNzYM4fE8XUWWBFgXiSh2fciLJYnc82nxAez1zx1nSTdQ5cVvruuv8XzVKiGCAddnC"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d21d9b01dba400000000001805c3cba7695b89a004043d91c95cccd0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "tradebatch",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 260,
        net_usage_words: 16,
        trx: {
          id:
            "d4e087d7ffa33196d3ee0aec03bb6784ebf110df956367754e06ffaec9249354",
          signatures: [
            "SIG_K1_KmKAFWqaaMijgDrmW1526SKhMt4nkpjzezBfmrJqmyNbdQiuuvMV7AV9iUGnjTtPdWqfbttNS55M3pSaVABY64wBntr1za"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c92014c9ef2a576676fc238e9aba576802630e3cf97ef8da2bc792476b4dde6d875900",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "14c9ef2a576676fc238e9aba576802630e3cf97ef8da2bc792476b4dde6d8759"
                },
                hex_data:
                  "14c9ef2a576676fc238e9aba576802630e3cf97ef8da2bc792476b4dde6d8759"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 281,
        net_usage_words: 16,
        trx: {
          id:
            "8daeb3709f0fba6c7fcc6d3dfc2ed69c6528129630038bf9d6a7e1a842a3232a",
          signatures: [
            "SIG_K1_Kkjp3WgtmmRGL3UrJ8eXZVS8Ybpr9gB9egNVfX1JBPKGTxNuKvopXqet8TybWH4eCemuGtspQCTmFpf5AgVb5bW2NbMc6q"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c9201f30d12bc22f535adb01c23f7aa97815d2d8859a71de4435737c2d3e4c65b36000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "1f30d12bc22f535adb01c23f7aa97815d2d8859a71de4435737c2d3e4c65b360"
                },
                hex_data:
                  "1f30d12bc22f535adb01c23f7aa97815d2d8859a71de4435737c2d3e4c65b360"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 466,
        net_usage_words: 13,
        trx: {
          id:
            "ebf4c87b7b3f5a498ab587a0b1d1dde95f9c8011f5b5953ee1f618827ea9130e",
          signatures: [
            "SIG_K1_JxsSkmaA3qZJEn8BxKFYNo5njdKbMLchZSm61QRupwWqGCPDNCk32nMfcDRuUsV3MYkXAddjVKXozm6D6FNCk5PZDG24kU"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5dd1d7b03c5a97000000000180d335a8a16c2ec2000000603a8854430110d834874d175d0c00000000a8ed32320810d834874d175d0c00",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "scratchcards",
                name: "checkin",
                authorization: [
                  {
                    actor: "1lilingbang1",
                    permission: "active"
                  }
                ],
                data: {
                  user: "1lilingbang1"
                },
                hex_data: "10d834874d175d0c"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 265,
        net_usage_words: 12,
        trx: {
          id:
            "976a93339e1709dda83fa91702900725c2b92d8bed51a594e2786664736a209c",
          signatures: [
            "SIG_K1_KfjRArLr1HvkiXrgnnUmKaFoLUVnyhvLaCMxcBWqLPzTWhakfbq9oqhXJHLvjX3Z1RznAbqBijU7LRBxrETMD8bLfYvQM5"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d22d99794e5540000000001805c3cba7695b89a00000000a4a997ba0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55586,
            ref_block_prefix: 1424331927,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "refund",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 592,
        net_usage_words: 17,
        trx: {
          id:
            "4a88a438779944729c2893f8e287a3100d4a46ed825d06893b8ee5b3bd661cc0",
          signatures: [
            "SIG_K1_JxsWusy5Z7FinHkfUHoVSYz8f4gVk7FdTiyHp3pP6o3DNsDLScXmELLqzFfWH1kRPP4HwP5YC7i8J3TNWgYsM2zLQP7dSJ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a970000000001401dce8db9093155000000221b19a3c2010094340c2455abc900000000a8ed3232280094340c2455abc98126000000000000640000000000000004454f530000000015cfbba2a8960c3e00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosknightsio",
                name: "sellmat2",
                authorization: [
                  {
                    actor: "tapped.game",
                    permission: "active"
                  }
                ],
                data: {
                  from: "tapped.game",
                  id: 9857,
                  price: "0.0100 EOS",
                  block: 2730217237,
                  checksum: 1041012392
                },
                hex_data:
                  "0094340c2455abc98126000000000000640000000000000004454f530000000015cfbba2a8960c3e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 227,
        net_usage_words: 16,
        trx: {
          id:
            "daceb560c7d1dc24088f906eaf97e8c32256ae90173e1a253f67b5eda337af57",
          signatures: [
            "SIG_K1_KVuvYmCQV2eFbWrEvNhHdnC9vGVbWsccMkmipk7w9aPxhpBmXhggG3cht9jmaN83Z6tkB2J59F87hVXP1w8Cff3k744cLU"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5dd1d7b03c5a970000000001d0fd5539d3d82fc40040520a5fb5afc201d0fd5539d3d82fc400000000a8ed3232208c4cc11410a2a3ba47499d2ba27e7df945df0585ecc513de762b8274097809aa00",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "skrxlotteryx",
                name: "serverseed",
                authorization: [
                  {
                    actor: "skrxlotteryx",
                    permission: "active"
                  }
                ],
                data: {
                  seed:
                    "8c4cc11410a2a3ba47499d2ba27e7df945df0585ecc513de762b8274097809aa"
                },
                hex_data:
                  "8c4cc11410a2a3ba47499d2ba27e7df945df0585ecc513de762b8274097809aa"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 831,
        net_usage_words: 23,
        trx: {
          id:
            "ed715c4b71c820ddcd44461bcae6bba2087161504940d1b9129126758705da41",
          signatures: [
            "SIG_K1_KkkxvjsqwddTUGsJ992GwR96DsGtfvX3RrUs13GcB5Pt4SU8StJB7Y1ge1ktvgqLb3Y4yJzX3P2UrTefgAYz5hohz4s6dn"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5dddd768f83c79000000000100a6823403ea3055000000572d3ccdcd0170784f63e8108f6000000000a8ed32322d70784f63e8108f6070554a2662aa2ec4e80300000000000004454f53000000000c322c32363135393932372c2c00",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55261,
            ref_block_prefix: 2034038888,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "g2bl1u33dxwb",
                    permission: "active"
                  }
                ],
                data: {
                  from: "g2bl1u33dxwb",
                  to: "skreosladder",
                  quantity: "0.1000 EOS",
                  memo: "2,26159927,,"
                },
                hex_data:
                  "70784f63e8108f6070554a2662aa2ec4e80300000000000004454f53000000000c322c32363135393932372c2c"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 181,
        net_usage_words: 16,
        trx: {
          id:
            "7f61347262090bdf6ecde804cb1ad8657c757a129011c65f0930f2d2d4e3082d",
          signatures: [
            "SIG_K1_K126JFYPVSqsntHPtQ1o4jr88j7g35kzYH7CXtPWZvtCJgdRZTMikxfgc6M3PdPoYx1KeUMW8K3ikShutvXnySij8r7cQn"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5dddd768f83c7900000000010091791099782ec40040520a5fb5afc2010091791099782ec400000000a8ed32322050cfb304dd6abb794cfca280bf331ae28d70016c5ab24eb324e1d446234a60a800",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55261,
            ref_block_prefix: 2034038888,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "skrblackjack",
                name: "serverseed",
                authorization: [
                  {
                    actor: "skrblackjack",
                    permission: "active"
                  }
                ],
                data: {
                  seed:
                    "50cfb304dd6abb794cfca280bf331ae28d70016c5ab24eb324e1d446234a60a8"
                },
                hex_data:
                  "50cfb304dd6abb794cfca280bf331ae28d70016c5ab24eb324e1d446234a60a8"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 215,
        net_usage_words: 16,
        trx: {
          id:
            "0e062fd07cff74958354a25fc4584ccfc87711268757d8f179394e6d920b9f50",
          signatures: [
            "SIG_K1_KaBZ3KhX734MHoDx2DUsiUUbD8cc8vNXYgxu2bW9UjKUPKn7eRKcgFMpkPb6TkJixPYHd4nV3N8WAUm9uyHbtX8fz2srSP"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5dddd768f83c790000000001a0904b1d53d52fc40040520a5fb5afc201a0904b1d53d52fc400000000a8ed3232204037a8e79dd3ca0e87bc85e895d90d9f19d4a6dd87d46ab34babe3061e4e62b600",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55261,
            ref_block_prefix: 2034038888,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "skrxeosxdice",
                name: "serverseed",
                authorization: [
                  {
                    actor: "skrxeosxdice",
                    permission: "active"
                  }
                ],
                data: {
                  seed:
                    "4037a8e79dd3ca0e87bc85e895d90d9f19d4a6dd87d46ab34babe3061e4e62b6"
                },
                hex_data:
                  "4037a8e79dd3ca0e87bc85e895d90d9f19d4a6dd87d46ab34babe3061e4e62b6"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 540,
        net_usage_words: 17,
        trx: {
          id:
            "a2f61bbf7a6a239fbad98c4e28ce7dc48aa6feb55c10cda41e4cd18c5fdf57c5",
          signatures: [
            "SIG_K1_K9fwUSXRjEQuGKUkbECHGERESgYiCxBKXpdF9spsEJ5aJz8ZzHn7mrizb8692PAEXzzvYXnzbEHFe1uG6YRAbEkV2eBZHb"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce82700000000010080422e01305dc5000000572d3ccdcd011042086c1a3ea98b00000000a8ed32322c1042086c1a3ea98b00147209000f918e1027000000000000045350494e0000000b616374696f6e3a7370696e00",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "spin..dice",
                name: "transfer",
                authorization: [
                  {
                    actor: "lionwang1111",
                    permission: "active"
                  }
                ],
                data: {
                  from: "lionwang1111",
                  to: "lucky..dice",
                  quantity: "1.0000 SPIN",
                  memo: "action:spin"
                },
                hex_data:
                  "1042086c1a3ea98b00147209000f918e1027000000000000045350494e0000000b616374696f6e3a7370696e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 274,
        net_usage_words: 13,
        trx: {
          id:
            "555ec46c5a1f833cb974e6aa726ff2696eae53d8ab605e53ebd388d7f275cbe6",
          signatures: [
            "SIG_K1_KacgyDugXSuqnNta8g1haXkH5bjUSbpVVVm4k4xZne3KmU1nAZ3qp6C4j1iE4fsvWinNWzJGmkxJKw9wKHmdEaD6uUuRrb"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e4208e5d20d9f14215070000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a50804125d030000000000",
          transaction: {
            expiration: "2019-09-27T14:47:00",
            ref_block_num: 55584,
            ref_block_prefix: 118833905,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 56431108
                },
                hex_data: "04125d0300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 5002,
        net_usage_words: 102,
        trx: {
          id:
            "9a8eb48173be184c3c5ebf85a0011427d9f82282285ad0e2daf359b5285609f6",
          signatures: [
            "SIG_K1_KkyC7daD3AiqRESfLTG1rsVtKMwqDv2CrpasFMcLyavi22j8BK1KMLNhCjw9y4e3twx7LjYf2hfbCMGgjJMRuTH3YXJhmo"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "00218e5d1ed9112ce827000000000500a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a752b00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373633222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373533222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a204e00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373634222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a4b70970b000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373532222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a602a00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373635222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:47:28",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.1125 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.763",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a752b00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373633222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.753",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373533222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "2.0000 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.764",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a204e00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373634222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.94474059 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.752",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a4b70970b000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373532222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.0848 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.765",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a602a00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373635222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd923316a1778b1c3a209025c6b461cc3c585935f8e1a17c7b82e5ff2f9e1",
    block_num: 81582371,
    ref_block_prefix: 161661873
  },
  {
    timestamp: "2019-09-27T14:46:30.000",
    producer: "eosflytomars",
    confirmed: 240,
    previous:
      "04dcd921c53fdc68b01dba407c56ee943c7ff17006cfc205a3e8a1aad66fe0df",
    transaction_mroot:
      "ce23603d98dea730a5e44678c1f8f6d968c65bbe458459969d33c1e79268f547",
    action_mroot:
      "0e6c97677c419a07feff8922fde81028ddb4f22c64bc011f89e1d5d43f6a29c8",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_K2CoffBffVdRo5AK7RpXJkRk6HCo1iavF4BmpFCm11oTem18aAoGdLk8iEuT4GasLaNoh8YJwDegRGqTDoT4CLt7WCZTzn",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 297,
        net_usage_words: 12,
        trx: {
          id:
            "901b236c0de18aefce063775bd601942605d5880b0fa3243c6f7bccd9202f2af",
          signatures: [
            "SIG_K1_KW41tqnxtq5wDoDRfcMHprE17XhjSuaZ72QcPzkhqEF7M1GjQvyGXBohdT38FdEqekXXrfMoACueCVhFRiRvMEKrTLjFJL"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f9208e5d10d91d70b1c2000000000100147209000f918e00149a66aa3c9d91015035bd4c2197b23a00aeda57610f918e0000",
          transaction: {
            expiration: "2019-09-27T14:47:21",
            ref_block_num: 55568,
            ref_block_prefix: 3266408477,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "lucky..dice",
                name: "maintenance",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "luckyserver"
                  }
                ],
                data: ""
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 206,
        net_usage_words: 0,
        trx: "259e0399abc2a98dd7843c95ebbc986f15936eb0b4f3a3c4f58bde99f474bfaf"
      },
      {
        status: "executed",
        cpu_usage_us: 100,
        net_usage_words: 0,
        trx: "eb7cffd22718d41fbb6ef517cfa981cf754d6db0b6e0764847158424ee41ed71"
      },
      {
        status: "executed",
        cpu_usage_us: 224,
        net_usage_words: 6,
        trx: "cdc78ff8ce179b79ff59da736f1db4b75f26302beb6daa85bd8d7af0dccfc96b"
      },
      {
        status: "executed",
        cpu_usage_us: 740,
        net_usage_words: 0,
        trx: "b9a3417dcb11fca5839b65a2e3e648109da1dab667191ccb9f3cf3381c66dfe0"
      },
      {
        status: "executed",
        cpu_usage_us: 302,
        net_usage_words: 16,
        trx: {
          id:
            "2b76f3cf72ef215ae8b711b1ff2b3c3d7ffe482f8e8fc3a9a9c40afb8b34e3a9",
          signatures: [
            "SIG_K1_K79rTbsDMNCiF2c5nBiDmrYRERpJKnRGUgGsekQvY6em66zs5ZeaD1m6pKjZRyZWEPG4cxi9Do7LU1ecgtfV4j7mwXPupu"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c92098b677f3460deee9afe1f1462ca0ced608d05f93bce01b6ae0507564e54e11e400",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "98b677f3460deee9afe1f1462ca0ced608d05f93bce01b6ae0507564e54e11e4"
                },
                hex_data:
                  "98b677f3460deee9afe1f1462ca0ced608d05f93bce01b6ae0507564e54e11e4"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 287,
        net_usage_words: 16,
        trx: {
          id:
            "ab44e49a274b5d9fea85963e8ea8c635a72be2b0bb663759a79a0f5b3756da7d",
          signatures: [
            "SIG_K1_K9UnY4TLBGKLYsrT2fdMqac5T9qFpqoCzygrNUnQtfdLcoP6AUVjp1mwFk4XwRFuijmqsVumjdvFc652rZJnuwMiUnVym2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c920a3c47156879ca62269e6ea8ff580320e7e0ec739d2fdbc884eff43b5458aeafd00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "a3c47156879ca62269e6ea8ff580320e7e0ec739d2fdbc884eff43b5458aeafd"
                },
                hex_data:
                  "a3c47156879ca62269e6ea8ff580320e7e0ec739d2fdbc884eff43b5458aeafd"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3435,
        net_usage_words: 46,
        trx: {
          id:
            "86602d238582abb6355ed3c8e16f1e53ddda301abe38f287068356119b819142",
          signatures: [
            "SIG_K1_K6FHQUEwCsJf7XovTujjfcNqjUCiunwcN7QYr8jV1nP79qD8XsTHxG8y44UxgwFAY5PedFJ52PAUodaHhPtSw7ZG2bjagR"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a97000000000100a6823403ea3055000000572d3ccdcd01a01861f64a98bd6900000000a8ed32329302a01861f64a98bd69000000801da0904b881300000000000004454f5300000000f10170726f746f636f6c313a686179746b6d7271673467652d68617a746b6e7a78686567652d656f732d34392d376639623333313235323565313264653132323561323730373762363761363930393664393462633632323432633961616565613139306236326335353736622d4d78787167783072417863486a3845556d5134482d313536393539373339342d5349475f4b315f4b6567784e626f6a6e35544d515a42445a7038395848675a5663655843446879373154664e5152764d316a38576f57653934794c39544c6a556e46646157424d5644464178374e4a6342744a337571367035573141676a5250733171787100",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "haytkmrqg4ge",
                    permission: "active"
                  }
                ],
                data: {
                  from: "haytkmrqg4ge",
                  to: "dice.bg",
                  quantity: "0.5000 EOS",
                  memo:
                    "protocol1:haytkmrqg4ge-haztknzxhege-eos-49-7f9b3312525e12de1225a27077b67a69096d94bc62242c9aaeea190b62c5576b-Mxxqgx0rAxcHj8EUmQ4H-1569597394-SIG_K1_KegxNbojn5TMQZBDZp89XHgZVceXCDhy71TfNQRvM1j8WoWe94yL9TLjUnFdaWBMVDFAx7NJcBtJ3uq6p5W1AgjRPs1qxq"
                },
                hex_data:
                  "a01861f64a98bd69000000801da0904b881300000000000004454f5300000000f10170726f746f636f6c313a686179746b6d7271673467652d68617a746b6e7a78686567652d656f732d34392d376639623333313235323565313264653132323561323730373762363761363930393664393462633632323432633961616565613139306236326335353736622d4d78787167783072417863486a3845556d5134482d313536393539373339342d5349475f4b315f4b6567784e626f6a6e35544d515a42445a7038395848675a5663655843446879373154664e5152764d316a38576f57653934794c39544c6a556e46646157424d5644464178374e4a6342744a337571367035573141676a52507331717871"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 179,
        net_usage_words: 22,
        trx: {
          id:
            "7c7cfa8fde34ea5a5647d3a56f779c54c468f2377531ff64a20ed915598b86ca",
          signatures: [
            "SIG_K1_JzCMikrrhCo72NvM8mdtKAVZbuzgsaTbcusRm9tknbhnDqQcGqaFPiUjKrEDScUg3HZpDSaLZ29jvBLcAzmeJX4b8D2eKr"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a00000000014051ad265d2daf9690a7ca93a28c8cba018071cb4e620aa3a900000000a8ed3232518071cb4e620aa3a90200000040396438326436333530626133643037363635646663383938666330616437653234383734616364333166313962346334313364343066346633323136383939660100000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "murmurdappco",
                name: "reactcontent",
                authorization: [
                  {
                    actor: "palkosmithss",
                    permission: "active"
                  }
                ],
                data: {
                  from: "palkosmithss",
                  content_type: 2,
                  content_id:
                    "9d82d6350ba3d07665dfc898fc0ad7e24874acd31f19b4c413d40f4f3216899f",
                  react_type: 1
                },
                hex_data:
                  "8071cb4e620aa3a902000000403964383264363335306261336430373636356466633839386663306164376532343837346163643331663139623463343133643430663466333231363839396601000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 742,
        net_usage_words: 14,
        trx: {
          id:
            "316275594fae973fe485c38340ed2a93fbfed5b2bd5c95002b7d3e011e1190ee",
          signatures: [
            "SIG_K1_K5XzYhLYfcxJHjDiVArfgjYJ3JKBk1cVZA5xdXcaFTCJcmjzUQZ52yHuWdiZiUtnrg9x2tmxeyWKfactphjjEfj28kTESv"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f0218e5dd1d7b03c5a970000000001a026a59a4d8331550000005265a7a0910180a9d29e4dda54430000000050cda6c11280a9d29e4dda544366021fd9dc045945f32400",
          transaction: {
            expiration: "2019-09-27T14:51:28",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "makeitem",
                authorization: [
                  {
                    actor: "chehongyueos",
                    permission: "sanguo"
                  }
                ],
                data: {
                  from: "chehongyueos",
                  code: 614,
                  block: 81582367,
                  checksum: 619922777
                },
                hex_data: "80a9d29e4dda544366021fd9dc045945f324"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 199,
        net_usage_words: 30,
        trx: {
          id:
            "2aea0c389e78e0398d074465ba92d5b40afc1b6b576f925e7dacb51d7d594139",
          signatures: [
            "SIG_K1_Ki8kuk1LTsntbN8EbtcmB2n743yZJ6rRyxQSUpExC5mruUPoCtNd7UhiZFi1o69om6ccQ2cAPRnR4zNmaTYVKzhGezW6dr"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fa208e5d12d9695c965b0000000001401da4f1f83c353d000088c6218a533201401da4f1f83c353d00000000a8ed323290010972616f73616464616d0c776562686f6f6b67726f7570647b22736f6369616c5f6d656469615f616374696f6e223a2254656c656772616d53656e644d657373616765222c226f626a6563745f6964223a6e756c6c2c226d6573736167655f6964223a22313836222c2269735f656469746564223a2254727565227d13323031392d30392d32375431343a34363a323400",
          transaction: {
            expiration: "2019-09-27T14:47:22",
            ref_block_num: 55570,
            ref_block_prefix: 1536580713,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bountyblokio",
                name: "addsocial",
                authorization: [
                  {
                    actor: "bountyblokio",
                    permission: "active"
                  }
                ],
                data: {
                  from: "raosaddam",
                  to: "webhookgroup",
                  social_data: {
                    social_media_action: "TelegramSendMessage",
                    object_id: null,
                    message_id: "186",
                    is_edited: "True"
                  },
                  create_date: "2019-09-27T14:46:24"
                },
                hex_data:
                  "0972616f73616464616d0c776562686f6f6b67726f7570647b22736f6369616c5f6d656469615f616374696f6e223a2254656c656772616d53656e644d657373616765222c226f626a6563745f6964223a6e756c6c2c226d6573736167655f6964223a22313836222c2269735f656469746564223a2254727565227d13323031392d30392d32375431343a34363a3234"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 657,
        net_usage_words: 21,
        trx: {
          id:
            "f1f0cc63c2852c02cdad6710dee3481198e202e2ebad59a2d85c138c85c461e0",
          signatures: [
            "SIG_K1_JwaHKmdkjkC5Hrizt3FA81V9zUnFGrxLusAWjqmhHuzzkDVjagMLHzZ7eDeU8V7XAqKaGViwrXbPQayvFVoPC9TQmeqa3v"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948019398cd27974bf8c7e3526437a6ed2e5addb5b4a114136f2d716601ccc9053b0000c88db915a33ea09864f74f9b086100a6823403ea30550a1e00000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "019398cd27974bf8c7e3526437a6ed2e5addb5b4a114136f2d716601ccc9053b",
                  gameName: "bullfight",
                  username: "g44dqnzrgmge",
                  contract: "eosio.token",
                  payoutAsset: "0.7690 EOS"
                },
                hex_data:
                  "019398cd27974bf8c7e3526437a6ed2e5addb5b4a114136f2d716601ccc9053b0000c88db915a33ea09864f74f9b086100a6823403ea30550a1e00000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 229,
        net_usage_words: 16,
        trx: {
          id:
            "627e463dcd07296d8e71e8b9e7a9469b67e456034fa217fdd885baa1abe5fcfd",
          signatures: [
            "SIG_K1_K8PEyzWsxsxUmSXZ5yhho5oLJaux7SaSFWXtETZRQvNXf2ZC2LgT6ysYpbirG5DyvkUurn3GXDrPD9zEnqBHKkJHAGJVah"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c92042aaebde749fe32a8825cffd4e251c644b260287e422d6d7aa635c1941ae871a00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "42aaebde749fe32a8825cffd4e251c644b260287e422d6d7aa635c1941ae871a"
                },
                hex_data:
                  "42aaebde749fe32a8825cffd4e251c644b260287e422d6d7aa635c1941ae871a"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 243,
        net_usage_words: 16,
        trx: {
          id:
            "dd434ff6cd7a93ddb3e402e5f22fe6e1bb9b25c78bafa1354ee427db0b863a3e",
          signatures: [
            "SIG_K1_Kc63BmM7t959sydLpweVJtc3QV6XP9w1QhPqTHYCyFpEGcHjLHXiMNfLk9X4cmgs7SNuztLbYnaD5NvHMEc5TwbP1BMHkP"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c920da6c6ff0dda6690014dc142531289161591ad85f4bfba5fd4578e4e77d20634100",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "da6c6ff0dda6690014dc142531289161591ad85f4bfba5fd4578e4e77d206341"
                },
                hex_data:
                  "da6c6ff0dda6690014dc142531289161591ad85f4bfba5fd4578e4e77d206341"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 560,
        net_usage_words: 52,
        trx: {
          id:
            "38d25d728287e1d58af4805eec2076cb0e50362aa300641eef553450ce26925e",
          signatures: [
            "SIG_K1_KdbsNXSfbwujfLm15xSeqHV9Kes5E5SfpAFaoZHLt6V4AYcn1w28mj6AoQvpwGr6DBN6d3V6ycnQ8Ks2rBy6M2HwsJYGRz"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f1208e5dffd819b57be3000000000180903957cde9384e000000c05f95338d0180903957cde9384e000000004cea3232bd02000000d95c83903963ea000000000000010000000000000012d9dc0400000000403934326239613138303735636663636662646631653365303938613463363332386532393935376137323131626335616263666561303231313665373862313517d9dc040000000040306461343633623637643539343361646263643165316465306362383630313432346239666437663935346237613138373335356162636563636133336162345162616e6b657228e5ba8429203320706f696e7428e9bb9e2928e299a3322ce299a5382ce299a333292c706c6179657228e9969229203720706f696e7428e9bb9e2928e299a0412ce299a64a2ce299a036299c208e5d0000000014706c617965723b6269673b28e996922ce5a4a729d3208e5d000000001e0000000000000013323031392d30392d32372032323a34363a323400",
          transaction: {
            expiration: "2019-09-27T14:47:13",
            ref_block_num: 55551,
            ref_block_prefix: 3816535321,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "dswinnerbacc",
                name: "lottery",
                authorization: [
                  {
                    actor: "dswinnerbacc",
                    permission: "action"
                  }
                ],
                data: {
                  game_name: "baccarat",
                  home_id: 60003,
                  desk_id: 1,
                  start_hash_height: 81582354,
                  start_hash:
                    "942b9a18075cfccfbdf1e3e098a4c6328e29957a7211bc5abcfea02116e78b15",
                  end_hash_height: 81582359,
                  end_hash:
                    "0da463b67d5943adbcd1e1de0cb8601424b9fd7f954b7a187355abcecca33ab4",
                  poker:
                    "banker(庄) 3 point(點)(♣2,♥8,♣3),player(閒) 7 point(點)(♠A,♦J,♠6)",
                  count: 1569595548,
                  win: "player;big;(閒,大)",
                  next_start_timestamp: 1569595603,
                  duration: 30,
                  desc: "2019-09-27 22:46:24"
                },
                hex_data:
                  "000000d95c83903963ea000000000000010000000000000012d9dc0400000000403934326239613138303735636663636662646631653365303938613463363332386532393935376137323131626335616263666561303231313665373862313517d9dc040000000040306461343633623637643539343361646263643165316465306362383630313432346239666437663935346237613138373335356162636563636133336162345162616e6b657228e5ba8429203320706f696e7428e9bb9e2928e299a3322ce299a5382ce299a333292c706c6179657228e9969229203720706f696e7428e9bb9e2928e299a0412ce299a64a2ce299a036299c208e5d0000000014706c617965723b6269673b28e996922ce5a4a729d3208e5d000000001e0000000000000013323031392d30392d32372032323a34363a3234"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 173,
        net_usage_words: 24,
        trx: {
          id:
            "7c3f4bffd1526be5b1cbbc4ba79394246e5be2c635e0f76c9b9a1201c5d52e4a",
          signatures: [
            "SIG_K1_K8d2KBBVg1zMuJTZzUdNFssE2qVtuSR9A4uQxDrM5PNecJX2DPAMzpbopyvPUhKk22cfbWGmxfEd84vmfDtdX9JTGtsJxL"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fe208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba0130a7d351b53c55a600000000a8ed32326330a7d351b53c55a65a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a517643563834504750335063667a50574432506d4461505744344c71303d00",
          transaction: {
            expiration: "2019-09-27T14:47:26",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "otentheluinn",
                    permission: "active"
                  }
                ],
                data: {
                  account: "otentheluinn",
                  content:
                    "1|hbM2CAMcdZ9xLmrlPlLvLqU5fJXlRlMPdZwoLlzle2MtCZQ0LmrlTAM0dZQvCV84PGP3PcfzPWD2PmDaPWD4Lq0="
                },
                hex_data:
                  "30a7d351b53c55a65a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a517643563834504750335063667a50574432506d4461505744344c71303d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1329,
        net_usage_words: 22,
        trx: {
          id:
            "a311bec879e1efc658d420a44e9169cab3e5e8fb65b05c47ceb548d4979f8f55",
          signatures: [
            "SIG_K1_K66Cf7WEGX6VfCxRTypcpMQCkyxEZ7eLn4Q1Cs74UcK8AxRxUNv5edv5BwWeRGtb212G1Q6XJv3dwUVtXZ4CL38NFVsqjX"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1dd9a3e5755d0000000002805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000df2a9106000000009015bc46b249a1e601805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000ea2a9106000000009015bc46b249a1e60200",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55581,
            ref_block_prefix: 1568007587,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176991,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000df2a9106000000009015bc46b249a1e601"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110177002,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000ea2a9106000000009015bc46b249a1e602"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 2485,
        net_usage_words: 25,
        trx: {
          id:
            "7a24568f8e9fe49bfdc7336f83ed0a72330354342b3cd284a0d3f699c173c04e",
          signatures: [
            "SIG_K1_K3aYfnEJDA4sHVb5hWdDeCcxbh3DvjeoP4YvskDFU7wvn7C3YzQgnAtcyiG2YcgvFkWk1qJcz3sQ2mrCEWDxrkmNE6J1C9"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ad248e5d21d9b01dba4088270000000110a33e98aaab20ad00405647ed48b1ba01208dca98aaab20ad00000000a8ed32326ab944c70000000000f23869caad7910f4272ac97c698d4548df2094ab46bb4c223fb112dbd43800130020504359686acf433b8256fa6a634030bb1c5463a794d770b02775a4bfdac1dbba0f6a3212fc8d8f4c36cdc9cb3886633b99bc1b9e98f1e320985f3be4c856dc2f00",
          transaction: {
            expiration: "2019-09-27T15:03:09",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 5000,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pokereosbull",
                name: "resolvebet",
                authorization: [
                  {
                    actor: "pokereosteam",
                    permission: "active"
                  }
                ],
                data: {
                  gameid: 13059257,
                  hashseed:
                    "f23869caad7910f4272ac97c698d4548df2094ab46bb4c223fb112dbd4380013",
                  signature:
                    "SIG_K1_KfFMiN1a8GjSvDVascfCdoJT9eDpLZcCK4mh7mEWN7w4HWhwwzaYc2Uh2LiSwGkaZeQ7RcsMo9if8GnWF2e9wZsEqGxkfd"
                },
                hex_data:
                  "b944c70000000000f23869caad7910f4272ac97c698d4548df2094ab46bb4c223fb112dbd43800130020504359686acf433b8256fa6a634030bb1c5463a794d770b02775a4bfdac1dbba0f6a3212fc8d8f4c36cdc9cb3886633b99bc1b9e98f1e320985f3be4c856dc2f"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3965,
        net_usage_words: 24,
        trx: {
          id:
            "23950830b02d987bc0a8d8e3caf4b1a34ee6eadf787702881b2ca2a0c955a2d8",
          signatures: [
            "SIG_K1_K2wRycALCUW9nJ1gdjp7JcGQLjM5xYwy356Jkc8xtkEh2W38o9WuWssoG63wrEGmjtsj4caoQ3SpoYJDZFWg4Da1sN3fs1"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a97000000000100a6823403ea3055000000572d3ccdcd01a09867f6509cbf6700000000a8ed323261a09867f6509cbf67309d4c462197b23ad00700000000000004454f530000000040616374696f6e3a6265742c736565643a4f524f6347536779613466454d78336443462c726f6c6c556e6465723a32372c7265663a656f736d616e3234796f6e6700",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "gyztsobqgyge",
                    permission: "active"
                  }
                ],
                data: {
                  from: "gyztsobqgyge",
                  to: "betdiceadmin",
                  quantity: "0.2000 EOS",
                  memo:
                    "action:bet,seed:OROcGSgya4fEMx3dCF,rollUnder:27,ref:eosman24yong"
                },
                hex_data:
                  "a09867f6509cbf67309d4c462197b23ad00700000000000004454f530000000040616374696f6e3a6265742c736565643a4f524f6347536779613466454d78336443462c726f6c6c556e6465723a32372c7265663a656f736d616e3234796f6e67"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 269,
        net_usage_words: 13,
        trx: {
          id:
            "58ceb6bad55553c7e379d406e2cbf252e938331e93a45c23ee908eddd274918c",
          signatures: [
            "SIG_K1_K1avCTSijjXBmG1jYmUNDG4f7C9REgbpMK1KdCCNrjtkg58cvDhwR8ZsSAC3CnmjrGxkhn5rXtdtUHjFVhhqaXvQChu3XX"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d20d9f14215070000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a508b6242e000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55584,
            ref_block_prefix: 118833905,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 3024054
                },
                hex_data: "b6242e0000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 381,
        net_usage_words: 21,
        trx: {
          id:
            "30befd7f02ba293927c9a14abd4f571fdcdd1b949d60b9e000d425f23e52ab6c",
          signatures: [
            "SIG_K1_KbzoShhzGbCgN8WYqjHXpye4bwm3w7xvHgXz9acZwjrqkn8Cug764CTBnU1Ufvp9mUb5DAicXHNz83iFH2HJJbTx368hto"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5ddfd86ef0ca6a0000000001001480c83c884c3c00000040ed48b1ba01302645531d3669fb00000000a8ed32324a06671a0000000000001f31ecf4f000954226c41ac4e739e9ece312f7f21639507c1eadc8aa8b55bea9104a340273fe99e11f471c965a8b7ddd23f453793b3bca6c4a0c63be4c0c36397200",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55519,
            ref_block_prefix: 1791684718,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "blackjack.e",
                name: "resolve",
                authorization: [
                  {
                    actor: "zhongbencon3",
                    permission: "active"
                  }
                ],
                data: {
                  id: 1730310,
                  sig:
                    "SIG_K1_K1ncbTRykNsxFh49Gi1vj8i3QgRoap7ZzWRXwsVim29b96N6Qx4DS7AS5xm9FcK6Sj1omy12hVjQUWuvJ5URYrn8Jh9MPC"
                },
                hex_data:
                  "06671a0000000000001f31ecf4f000954226c41ac4e739e9ece312f7f21639507c1eadc8aa8b55bea9104a340273fe99e11f471c965a8b7ddd23f453793b3bca6c4a0c63be4c0c363972"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 705,
        net_usage_words: 21,
        trx: {
          id:
            "5562f2e6720111eecbe8ec16def79e35599335673034c27217f4f50b50d8c854",
          signatures: [
            "SIG_K1_JxuRwrSTAF7LzgtunNpbiwCjVCZNzkG3DouQRye5MnXD4kCAyh4mAv28PDZg23zQVGUpQq4zLUCuGJ5ZVKgRajXhFk7YvS"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948d417552dbf06241152f9b36a5f9522cd21290e59482a70ed8a61101ef8ae6e690000c88db915a33e304480c83c884c3c00a6823403ea3055063400000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "d417552dbf06241152f9b36a5f9522cd21290e59482a70ed8a61101ef8ae6e69",
                  gameName: "bullfight",
                  username: "blackjack123",
                  contract: "eosio.token",
                  payoutAsset: "1.3318 EOS"
                },
                hex_data:
                  "d417552dbf06241152f9b36a5f9522cd21290e59482a70ed8a61101ef8ae6e690000c88db915a33e304480c83c884c3c00a6823403ea3055063400000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 655,
        net_usage_words: 147,
        trx: {
          id:
            "a7327f1a00bc703138d4849512b04ca033c655012cad07c61e273dc46741417e",
          signatures: [
            "SIG_K1_KUttyZdu5o1CugKMwT76fM2NXdo5tNzCtsr69UY4VTiffrrFVd6HDWgBSttBW4TNmDQQQm2HwNaGdXGNgFj42HDGpkpc1D"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b80864a681a8f286d9ce9396602ed57462b73d1212134a183b71c5d20213a05d3b2860aa8b9c4233bf088e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3531345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3034393720454f53222c227761676572223a22302e3130363520454f53222c227061796f7574223a22302e3035363820454f53222c2263757272656e74416d6f756e74223a223639322e3735373420454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "64a681a8f286d9ce9396602ed57462b73d1212134a183b71c5d20213a05d3b28",
                  username: "12znakowlipa",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.514Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0497 EOS",
                    wager: "0.1065 EOS",
                    payout: "0.0568 EOS",
                    currentAmount: "692.7574 EOS"
                  }
                },
                hex_data:
                  "64a681a8f286d9ce9396602ed57462b73d1212134a183b71c5d20213a05d3b2860aa8b9c4233bf088e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3531345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3034393720454f53222c227761676572223a22302e3130363520454f53222c227061796f7574223a22302e3035363820454f53222c2263757272656e74416d6f756e74223a223639322e3735373420454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 391,
        net_usage_words: 14,
        trx: {
          id:
            "4cb5515917e638b6cd6747f9afb17f4bd041e8cd5d7445dd948cff532405496b",
          signatures: [
            "SIG_K1_KedaQXxT6ScRiVXRfmcrobPErgSjJogVRn7rAzX1cadKdezqWt5Q1a867ptw2KwjPzDwBHZFnzwmY3xQCKbUxjUZGurNyk"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce82700000000011030634a49c314320000000044a3b6ba017055d55849c3143200000000a8ed323212ad03000000000000851c0000000000000d0100",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "acegameeggs1",
                name: "reveal",
                authorization: [
                  {
                    actor: "acegamesuper",
                    permission: "active"
                  }
                ],
                data: {
                  game_id: 941,
                  bet_id: 7301,
                  play_pos: 13,
                  is_win: 1
                },
                hex_data: "ad03000000000000851c0000000000000d01"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 485,
        net_usage_words: 15,
        trx: {
          id:
            "937eb119820a12a16997bd881f50d8cde879f404f06df28922698acd9a5b2919",
          signatures: [
            "SIG_K1_Jy1nmbKSrGRrN394Qek1kM15FFosUWyRYeCWpC82HEFtenehu1edR8T9JP2k1VyNaWbATNDaXkxBD8wEsrW8SeiJA2rFvK"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d21d9b01dba4000000000019091b97952a412d6001472b7aa6c52d50190d14449a9a512d600000000a8ed3232159091b97952a412d603454f531f6c0000c5208e5d0000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55585,
            ref_block_prefix: 1085939120,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "usdecontract",
                name: "updateprice",
                authorization: [
                  {
                    actor: "usdefeedcnct",
                    permission: "active"
                  }
                ],
                data: {
                  contract: "usdecontract",
                  sym: "EOS",
                  price: 27679,
                  time: 1569595589,
                  vid: []
                },
                hex_data: "9091b97952a412d603454f531f6c0000c5208e5d00"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 777,
        net_usage_words: 21,
        trx: {
          id:
            "11cfb7b1f95a0f511883b9309ea1bdc6b3f38f353a867c6b4e003c48422963d6",
          signatures: [
            "SIG_K1_KYkJ6UEMvCkLQvaKzaBgh1YXKLahzTmCU4jR1Lt7zRMtDYpeGCArWHuREXu4LbDfqkkDwQk8dtCrjyXgpJ2CKQ1seSLF3L"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94855ed9944968417625a22eea5c06dcf8b147e9ff8637ccff8915d5baf020b889b0000c88db915a33e40c2086cd23b8d3300a6823403ea3055140100000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "55ed9944968417625a22eea5c06dcf8b147e9ff8637ccff8915d5baf020b889b",
                  gameName: "bullfight",
                  username: "aianrong1314",
                  contract: "eosio.token",
                  payoutAsset: "0.0276 EOS"
                },
                hex_data:
                  "55ed9944968417625a22eea5c06dcf8b147e9ff8637ccff8915d5baf020b889b0000c88db915a33e40c2086cd23b8d3300a6823403ea3055140100000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 290,
        net_usage_words: 16,
        trx: {
          id:
            "84a2cacdc08f990eb63a19c36f64a23be28f6091564c1d1cde340c8faa2583bb",
          signatures: [
            "SIG_K1_K11M66XNeXxiq3Sf2fWzGTm9bpKzyJpxvWN6isr9vCgJim7JNjVBMPVnePctbE8EYrVnqyTaVqHngWDRES8heYcLrgWxb2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c9200d362ccb1e0ce7bf1db9ec097f57ca1ebce4dee804f6c24c5e94fb505ac6d05300",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "0d362ccb1e0ce7bf1db9ec097f57ca1ebce4dee804f6c24c5e94fb505ac6d053"
                },
                hex_data:
                  "0d362ccb1e0ce7bf1db9ec097f57ca1ebce4dee804f6c24c5e94fb505ac6d053"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 253,
        net_usage_words: 16,
        trx: {
          id:
            "f4947d62f006b52e9d921d3b8f5a4c0755540a9d8adf8f60255fa09d984a8e52",
          signatures: [
            "SIG_K1_Kgi3FJX6svrY2RCkthXrSecwsdEdMkCTLypFrFPns5W7T9aDfWAEE8U9jXHgsLnt3Mho5fX8LpfKBbhjexFAUwBhVFf7xa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c920ee6b3697843ed6482f988d13674eeee5e0072c32689c66fb16b2a4ef53e7d49900",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "ee6b3697843ed6482f988d13674eeee5e0072c32689c66fb16b2a4ef53e7d499"
                },
                hex_data:
                  "ee6b3697843ed6482f988d13674eeee5e0072c32689c66fb16b2a4ef53e7d499"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 538,
        net_usage_words: 14,
        trx: {
          id:
            "6db2ac4a41426fa535963ddebf3ce5261387f0757a201825deaf4ceb218ec218",
          signatures: [
            "SIG_K1_KdBSMnonWQTUMPFUybnYa6H1ryKcT4mcHbCLE1xKF2MpkcRmV6P5YwRNTydAjMsfr2f3VuocZrfAW9SyAyhVug8rThimdM"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "01218e5dd1d7b03c5a9700000000011012bdd5649a30550000c0f4aae64dac011012bdd5649a305500000000a8ed32321470b6e726d113fda403010101080101150101010100",
          transaction: {
            expiration: "2019-09-27T14:47:29",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosdotaprod1",
                name: "playheros",
                authorization: [
                  {
                    actor: "eosdotaprod1",
                    permission: "active"
                  }
                ],
                data: {
                  account: "onylbodawyvb",
                  play_hero_infos: [
                    {
                      hero_id: 1,
                      hero_grade: 1,
                      count: 1
                    },
                    {
                      hero_id: 8,
                      hero_grade: 1,
                      count: 1
                    },
                    {
                      hero_id: 21,
                      hero_grade: 1,
                      count: 1
                    }
                  ],
                  play: 1,
                  game_type: 1
                },
                hex_data: "70b6e726d113fda4030101010801011501010101"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1005,
        net_usage_words: 23,
        trx: {
          id:
            "067fb0630febe22fbb2664871edc9f6366446605b5df5772284a8ce8963d01f7",
          signatures: [
            "SIG_K1_K2n5G75EPpxaxtAsqsRuPrYoVxwiSS6mmd6QBEBmvTiHHoKLWMd1PszXNCpZtxizKTffKoxhp3SSinpYRfkzeqa2G1Uv1Q"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a9700000000013015a4592197b23a000000572d3ccdcd01a09867fb4894876600000000a8ed323257a09867fb48948766601032472197b23a00c2eb0b00000000044449434500000036616374696f6e3a6265742c67616d6549643a393332393732352c6974656d3a706c617965722c7265663a656f73666f72656e6369613500",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetoken",
                name: "transfer",
                authorization: [
                  {
                    actor: "gu3tcmbvgyge",
                    permission: "active"
                  }
                ],
                data: {
                  from: "gu3tcmbvgyge",
                  to: "betdicebacca",
                  quantity: "20000.0000 DICE",
                  memo: "action:bet,gameId:9329725,item:player,ref:eosforencia5"
                },
                hex_data:
                  "a09867fb48948766601032472197b23a00c2eb0b00000000044449434500000036616374696f6e3a6265742c67616d6549643a393332393732352c6974656d3a706c617965722c7265663a656f73666f72656e63696135"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1095,
        net_usage_words: 17,
        trx: {
          id:
            "60c5574497b71581dd86ab078f9cf92f7a6d8771ae6f232e088bb649e3028542",
          signatures: [
            "SIG_K1_KVu4aS2eyMSM6D61VHatiKw9xMWtcmvZ7VSdZajLj4wmBYfHyagKnXqvWQwerZoq8gd5wqgPs3GTb2HUSA31xS5UoShDuq"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "d7208e5d08d99f2dfe61000000000100a6823403ea3055000000572d3ccdcd01c0a671d6453655fb00000000a8ed323229c0a671d6453655fb90a6b9c79b583155e80300000000000004454f5300000000086e69756e69753a3000",
          transaction: {
            expiration: "2019-09-27T14:46:47",
            ref_block_num: 55560,
            ref_block_prefix: 1644047775,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "zhengliqiang",
                    permission: "active"
                  }
                ],
                data: {
                  from: "zhengliqiang",
                  to: "eosplaybrand",
                  quantity: "0.1000 EOS",
                  memo: "niuniu:0"
                },
                hex_data:
                  "c0a671d6453655fb90a6b9c79b583155e80300000000000004454f5300000000086e69756e69753a30"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd9221f657aad9794e5545f11d0dd95261be25f548baef83c6eec4ffb3cf0",
    block_num: 81582370,
    ref_block_prefix: 1424331927
  },
  {
    timestamp: "2019-09-27T14:46:29.500",
    producer: "eoseouldotio",
    confirmed: 0,
    previous:
      "04dcd92038c2b3b8f1421507b131d4071434be429825216fd3cadfeb780d6d4a",
    transaction_mroot:
      "0f893ccad373cede1ce4457acb1f49182a4fd06fc2feaa5aa08ea48738171d69",
    action_mroot:
      "a50869ab19e04440f6fadc093ef6d743f117b57b9902c1d04345effa92a364d8",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_JvMw1gqKPTjjEwuYYoWxFZFQNHLaKcMLcWaKYowYNQuyynD4KdvRVG89eqTnUtbwdg14KynAnHVabV87gxrBWN5HaWm7Re",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 674,
        net_usage_words: 21,
        trx: {
          id:
            "248f1478beed1f89047dfbc724b0e231638fbc032f90cb9bbc5fab1a9ff03675",
          signatures: [
            "SIG_K1_KW8PAJSEdvELTh4gHN146Z8rU4xVZD7qbjrViLqKNw1ptKw6mmTfaVp1mEuM1dRPhnGJ2g4m8EoXUrwhFS8k55uAPuNT3q"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d1ad92904ff680000000001704ca44865338d54000000000080545701704ca44865338d54000000000080545720e0c4a666ddfb30be90316d4c65338d54f915000000000000044d4e580000000000",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "emanatecolab",
                name: "exec",
                authorization: [
                  {
                    actor: "emanatecolab",
                    permission: "exec"
                  }
                ],
                data: {
                  proposal_name: "rssjrrfaov2i",
                  owner: "emanateghost",
                  value: "0.5625 MNX"
                },
                hex_data:
                  "e0c4a666ddfb30be90316d4c65338d54f915000000000000044d4e5800000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 300,
        net_usage_words: 25,
        trx: {
          id:
            "61bf35196cc44e3935c9a7ab03e8a8d2641fdc8e63ee606686d1228211accd91",
          signatures: [
            "SIG_K1_JxoWKH4rQ2omLgafEvUTKgGbaHbEs6uT35mkKD9tW43jpr6n5uWdc8dNydeEiPj81xkbByhZ18672BBcCnSms2E8kvDGFJ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba0150c818a29412ee3c00000000a8ed32326b50c818a29412ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a6151575863504758355047483550474c7a5247666c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr155523345",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr155523345",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWXcPGX5PGH5PGLzRGfliT=="
                },
                hex_data:
                  "50c818a29412ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a6151575863504758355047483550474c7a5247666c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1286,
        net_usage_words: 13,
        trx: {
          id:
            "b75ceb3b0c86813da94722bb1c9c3b9fcb74ed1e69ac709ad99e650759a16e7b",
          signatures: [
            "SIG_K1_KhHR9VJfmb58pcSyFNKdunr2EKbNxFnwToBpFa2TPrE5Jqe1ZXcdMuBriLz6rXR7paPTJ9saRkEfSZhCwyHWZoavxFeavz"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a970000000001000000ec001ca33e000060476da790ba0120a59452524a29a500000000a8ed32320820a59452524a29a500",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "receivebg",
                authorization: [
                  {
                    actor: "oooooommmmmm",
                    permission: "active"
                  }
                ],
                data: {
                  account: "oooooommmmmm"
                },
                hex_data: "20a59452524a29a5"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 533,
        net_usage_words: 16,
        trx: {
          id:
            "a9c4ebe52d9f3b5993400c8a0288db4eb4f8191010b6cb1643e0add01ae7048b",
          signatures: [
            "SIG_K1_KYZ4ojBJv5jMqCeoScp2GjrruHNSi9PfdAt8cmV1TjnXRHYcqeegjr2T3xM8pRd35QWFf9xEn2in9qGzJ2etB9XZTC5hy2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5dd1d7b03c5a97000000000110c255d3494d717500000000e0740d370110c255d3494d717500000000a8ed32321e504a29651a175dfb54972e040000000008495043000000000141b400000000",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "ipsouminer11",
                name: "awards",
                authorization: [
                  {
                    actor: "ipsouminer11",
                    permission: "active"
                  }
                ],
                data: {
                  user: "zhilian55555",
                  quantity: "0.70162260 IPC",
                  memo: "A",
                  xx: 180
                },
                hex_data:
                  "504a29651a175dfb54972e040000000008495043000000000141b4000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 181,
        net_usage_words: 25,
        trx: {
          id:
            "1001d5e14bf10ceaa1b7ce7c133fbffc20decc1e8b85b9b8f386ad72a7ed9054",
          signatures: [
            "SIG_K1_Jvw2PDPEe2pPEXDeXLnogxRsg52eEM7HjZuc9DHhNuTZbK2CPXgoQm1yQq2zCL9qy3Nb1cgfVQZ7vzSJy9Lowi5QdZ4kDa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01208a08651022ee3c00000000a8ed32326b208a08651022ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a615157587a5163586150474c7a504744615063486c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr244351252",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr244351252",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWXzQcXaPGLzPGDaPcHliT=="
                },
                hex_data:
                  "208a08651022ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a615157587a5163586150474c7a504744615063486c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 276,
        net_usage_words: 12,
        trx: {
          id:
            "a812bc31e85108d0466247a1d08776f5ff13c6f5d63847feda3d10f3a59fb6e5",
          signatures: [
            "SIG_K1_JzvAiEW6aq6eB6sGzopUJ1Nxcp7rtRRwrUmQ3vHokRvLoh1fbnoZjDs9Wjd43ez8VvRe2CdkwZK1vUfDdhvzbvrTrfNhEP"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1fd9d35bcb150000000001805c3cba7695b89a00000000a4a997ba0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55583,
            ref_block_prefix: 365648851,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "refund",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 271,
        net_usage_words: 12,
        trx: {
          id:
            "5b7f21561154c0386b238d0c8e6f5bb4121a50e97561b1d0327ac6a689b7c666",
          signatures: [
            "SIG_K1_KdRjyGeQJHfLspMALHGHXbKpVveCw1zQqvKVsaJThdnBMcCQLnfjujarkvmNZCqLFZVyKLAb5WFtcHwQ1TtGw36doDGTRW"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1fd9d35bcb150000000001805c3cba7695b89a004043d91c95cccd0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55583,
            ref_block_prefix: 365648851,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "tradebatch",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 355,
        net_usage_words: 19,
        trx: {
          id:
            "bf00acdd6fb187f39d53115597c961167cfe6570787f31a9c4e2c4ea6f77127c",
          signatures: [
            "SIG_K1_Kb5phqv41wWRNtWStNYbwkispkNvrSieZc1SxEbGtovdS4VWJeSyYsMUCL6GMTdBrsRkHyNWhBxzHESCLAMY8kkyKHtWe1"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a9700000000013015a4199ba95a36000000572d3ccdcd011042a6875e254d5c00000000a8ed3232361042a6875e254d5c304498463f17353e80841e000000000004415448454e410015466c616d65205363686564756c65204f726465722e00",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "athenastoken",
                name: "transfer",
                authorization: [
                  {
                    actor: "flamerobot11",
                    permission: "active"
                  }
                ],
                data: {
                  from: "flamerobot11",
                  to: "bsulijuan123",
                  quantity: "200.0000 ATHENA",
                  memo: "Flame Schedule Order."
                },
                hex_data:
                  "1042a6875e254d5c304498463f17353e80841e000000000004415448454e410015466c616d65205363686564756c65204f726465722e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 569,
        net_usage_words: 13,
        trx: {
          id:
            "19e72e9f9ac74b1f8ab95e1500931a56086c540ac4d7454d08800a4d659cbb46",
          signatures: [
            "SIG_K1_KdnxraUkRBrsNY5RxfwJUUhTK4xipAySZcbpvU22eqmdSnAXYM2AHMcLAMqnxHgna6uxEWpF1KcvPVc3CEUeVjA6bXPqfW"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d1ed9112ce8270000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a508871e75020000000000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 41229959
                },
                hex_data: "871e750200000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 559,
        net_usage_words: 14,
        trx: {
          id:
            "38766fed02047aae2134ce3f172beaba9dd6314b492a5b4d3f434a6c3d018836",
          signatures: [
            "SIG_K1_JvQVaA1awQPFfRE8AfdCT86CKu8KnjTcAdiuCv3KpXjfLAwVr1Ckz5C6rwVPGHzazkx2J3wZDq8iWbsjmDLUxdUDJB7F9s"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5dd1d7b03c5a97000000000190b1beb92b154de380d5cd59e16b544401706936c945b3a3e100000000a8ed323210c0a669a82b154de3f08eb0000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "whaleextrust",
                name: "clearsettres",
                authorization: [
                  {
                    actor: "walvalidator",
                    permission: "active"
                  }
                ],
                data: {
                  exchange: "whaleexchang",
                  settlement_nonce: 11570928
                },
                hex_data: "c0a669a82b154de3f08eb00000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 546,
        net_usage_words: 14,
        trx: {
          id:
            "fe87eb7cb577090dabefa03ae67349c86a0e082497c6983cb61016026c58767e",
          signatures: [
            "SIG_K1_K1JXz5gqPyoUn5UPf3QENEuQNE8aj9pMYyQqfD6bM6AviG4zXi7R1MmMkdGJq2NPhgBsmpXf7Ng8gXY5nwthmUJ7UDddHm"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5dd1d7b03c5a97000000000190b1beb92b154de380d5cd59e16b544401706936c945b3a3e100000000a8ed323210c0a669a82b154de3f38eb0000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "whaleextrust",
                name: "clearsettres",
                authorization: [
                  {
                    actor: "walvalidator",
                    permission: "active"
                  }
                ],
                data: {
                  exchange: "whaleexchang",
                  settlement_nonce: 11570931
                },
                hex_data: "c0a669a82b154de3f38eb00000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 218,
        net_usage_words: 23,
        trx: {
          id:
            "19fda3da886b3278cff7b594e55c19b6fece6e8a486a7a84bb94addf1b7f2f57",
          signatures: [
            "SIG_K1_K9k6XZxFKAV3UKuv3yT5pMwGNTNnujRibdBR6F5qfXDW9Z1g9Ax6XDW4oyFbW4gqLZJuXSZKbMLKAQBnmCRQCLaS3n4sNz"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d1ed9112ce827000000000190348dc69b583155000000000010a3f20190348dc69b58315500000000a8ed32325a90348dc69b58315551454f53506c6179204e65772047616d65204f6e6c696e65202d20534c4f5453212057494e205448452042494720424f4e5553212068747470733a2f2f656f73706c61792e636f6d2f3f306661373039353100",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplayaloud",
                name: "yell",
                authorization: [
                  {
                    actor: "eosplayaloud",
                    permission: "active"
                  }
                ],
                data: {
                  u: "eosplayaloud",
                  memo:
                    "EOSPlay New Game Online - SLOTS! WIN THE BIG BONUS! https://eosplay.com/?0fa70951"
                },
                hex_data:
                  "90348dc69b58315551454f53506c6179204e65772047616d65204f6e6c696e65202d20534c4f5453212057494e205448452042494720424f4e5553212068747470733a2f2f656f73706c61792e636f6d2f3f3066613730393531"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 618,
        net_usage_words: 14,
        trx: {
          id:
            "b04b94fa88bf7e6b8c2353ad8c953495be2d9fad19dae8501a27a21eef016240",
          signatures: [
            "SIG_K1_KWz7jLd92ouwRaagcqUaRcvqs4tMbxkTsD2tKh7eFCZ7qW4NSg2TNPtfa9bYeKQWi4UFT4ztRihHWXztG1P7n97Upx3X8U"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5dd1d7b03c5a97000000000190b1beb92b154de380d5cd59e16b544401706936c945b3a3e100000000a8ed323210c0a669a82b154de3f48eb0000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "whaleextrust",
                name: "clearsettres",
                authorization: [
                  {
                    actor: "walvalidator",
                    permission: "active"
                  }
                ],
                data: {
                  exchange: "whaleexchang",
                  settlement_nonce: 11570932
                },
                hex_data: "c0a669a82b154de3f48eb00000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1014,
        net_usage_words: 23,
        trx: {
          id:
            "438a3cdc17e0e503272a4fddd95b1fdf7e7bac215fbb739b58fb6f42efdc1cb6",
          signatures: [
            "SIG_K1_JyWmwbzPDdAyS5w4Wc1G48DWibS99NxaoMHFCt3Bbz4KKe5aa5SRHxfymjGLidYJi31CBw73aN898Cxu7kvUpRoAFvhs7A"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e6208e5da1d7832cf483000000000100a6823403ea3055000000572d3ccdcd0180a9aa781aefe28e00000000a8ed32325580a9aa781aefe28e10a33e98aaab20ad803801000000000004454f5300000000346265743a32303030302c736565643a65346964775364453651337063795342526461472c7265663a6f6d6e696d61787370656f7300",
          transaction: {
            expiration: "2019-09-27T14:47:02",
            ref_block_num: 55201,
            ref_block_prefix: 2213817475,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "lvliyanspeos",
                    permission: "active"
                  }
                ],
                data: {
                  from: "lvliyanspeos",
                  to: "pokereosbull",
                  quantity: "8.0000 EOS",
                  memo: "bet:20000,seed:e4idwSdE6Q3pcySBRdaG,ref:omnimaxspeos"
                },
                hex_data:
                  "80a9aa781aefe28e10a33e98aaab20ad803801000000000004454f5300000000346265743a32303030302c736565643a65346964775364453651337063795342526461472c7265663a6f6d6e696d61787370656f73"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1673,
        net_usage_words: 21,
        trx: {
          id:
            "efb61c35660402623f80ca87ffad6fd901145c37fc9d77a3a00ddac5ba0ac5c2",
          signatures: [
            "SIG_K1_KWo95gRG4MFVq12rjbeyvJJyyjTR1hzfvRoB4iUWKi1eyNjijuJLKaTekXFAAUUyDeBVAY7RkAx2uyHoCjAAz6RyGsXkr9"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94881cd5b547e5520f0be18f0afb484c2bc0e917fd6f98aa806dd33b2484459ce670000c88db915a33e50c810414933bb3200a6823403ea3055bc0300000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "81cd5b547e5520f0be18f0afb484c2bc0e917fd6f98aa806dd33b2484459ce67",
                  gameName: "bullfight",
                  username: "aexname12345",
                  contract: "eosio.token",
                  payoutAsset: "0.0956 EOS"
                },
                hex_data:
                  "81cd5b547e5520f0be18f0afb484c2bc0e917fd6f98aa806dd33b2484459ce670000c88db915a33e50c810414933bb3200a6823403ea3055bc0300000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 660,
        net_usage_words: 14,
        trx: {
          id:
            "fcc0ec8542dfb7910e32e8d61e57be112f5d55d264763bce70e993ba0c798ba3",
          signatures: [
            "SIG_K1_KcB7tP9thDjnDpj6abU22nEMGhbp8VrwVAusgg3s7W1UwaGpE4R5m6QSwSCgGwB5qWDjaAAkgA5rAMxHuK3KqGSvjAbcxB"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5dd1d7b03c5a97000000000190b1beb92b154de380d5cd59e16b544401706936c945b3a3e100000000a8ed323210c0a669a82b154de3ed8eb0000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "whaleextrust",
                name: "clearsettres",
                authorization: [
                  {
                    actor: "walvalidator",
                    permission: "active"
                  }
                ],
                data: {
                  exchange: "whaleexchang",
                  settlement_nonce: 11570925
                },
                hex_data: "c0a669a82b154de3ed8eb00000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1039,
        net_usage_words: 27,
        trx: {
          id:
            "3e62010cae5211a0a1de386001686ca534d815dda970d03d351a1eb85687a30f",
          signatures: [
            "SIG_K1_K5511D5sZ2RfPV3HKP1f3ceNooUGsWu61NXPwHdHD1YhHS1GiePJp1qAsaVLhFeUSppTzGATmBRPmoNfsbjiH3rKtUkeRC"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5ddfd86ef0ca6a00000000010014b826e345afe10000000044a3b6ba01302645531d3669fb00000000a8ed32324ad5fb050000000000002029de97196288bf33086f8e986be75eb4f38784f5da49dd624b677de06a36935f047b81135dafc2175e051d883bce890cf2a360098e65d796957340b22d6b4b1700",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55519,
            ref_block_prefix: 1791684718,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "warofstar.e",
                name: "reveal",
                authorization: [
                  {
                    actor: "zhongbencon3",
                    permission: "active"
                  }
                ],
                data: {
                  game_id: 392149,
                  signature:
                    "SIG_K1_KaE2Rj1H95Kn4MvC2a3n43qa6Jn6SwHAzgdKdAnU1ztNkPW6JwJHrtTG6iwGttqZbxuxjvmbHKBzoSd2PuVzAt3WZdgWzb"
                },
                hex_data:
                  "d5fb050000000000002029de97196288bf33086f8e986be75eb4f38784f5da49dd624b677de06a36935f047b81135dafc2175e051d883bce890cf2a360098e65d796957340b22d6b4b17"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1230,
        net_usage_words: 25,
        trx: {
          id:
            "c84cd95099f5bf399fa99fcd2ed8223c18e04a46ac7fb5606d4224c72edf2e53",
          signatures: [
            "SIG_K1_KbMG6H31wVYFKFftD9rwXMpdcF3rCdr9vXP4gUin6bXE91WMQaJy3JfQLmeJFwUPNipE1gfeEE7gyKzumd3t2bYV14Umti"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "00218e5dd1d7b03c5a97000000000100147209000f918e0040346aabcbcd4d015035bd4c2197b23a00aeda57610f918e6a1042086c1a3ea98bf4693384851beda450639a9187a477250babc90ddc5131e609a773adf3a276e100203c261859e9cbf399668867217a9265bd06fd8493651259236f9ef77da32299eb0a0958c815952a30cbfb9b44b515ef6f179879600e12f406b61bdd085885b09000",
          transaction: {
            expiration: "2019-09-27T14:47:28",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "lucky..dice",
                name: "drawreveal",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "luckyserver"
                  }
                ],
                data: {
                  username: "lionwang1111",
                  seed:
                    "f4693384851beda450639a9187a477250babc90ddc5131e609a773adf3a276e1",
                  signature:
                    "SIG_K1_KccjHHeMvp8UJj17dUDYeJorAfdy7QiMJaoZpi9jWcCuSEdTrevwhHDVMj7ZLNC7FsRb4x8sZed4RcceRgtuzpWny9S4Ji"
                },
                hex_data:
                  "1042086c1a3ea98bf4693384851beda450639a9187a477250babc90ddc5131e609a773adf3a276e100203c261859e9cbf399668867217a9265bd06fd8493651259236f9ef77da32299eb0a0958c815952a30cbfb9b44b515ef6f179879600e12f406b61bdd085885b090"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4109,
        net_usage_words: 47,
        trx: {
          id:
            "b43c90bec22ea315df021624aa78b9c6463dc7544b75b5e5ea4ea0523670a81c",
          signatures: [
            "SIG_K1_K7oYsjvsEgWnxtyHryqQXCWRjmj8kkcVEgQHyir9b4MNfsBeRzU5AZ92WrZ9kSpETuWAASfcTRaNfBCfiQH2FR4MsyguUR"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d1fd9d35bcb150000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570166f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d396636663764656365316663376164373037356431363639653137643665623732353932333330656330323438323566663566643134363839303639656134632d47463031627a4c6251516f5a413931656f7464662d313536393539373435372d5349475f4b315f4b6767636d71355743597275666b475a5767674e43415064346561766f734e6b43324d3263325031525068566969787a527a687473464b79467a734e51675055776766744e3737543970734c6d7a6e653974316b4231635a41474b57707000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55583,
            ref_block_prefix: 365648851,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "f",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-9f6f7dece1fc7ad7075d1669e17d6eb72592330ec024825ff5fd14689069ea4c-GF01bzLbQQoZA91eotdf-1569597457-SIG_K1_Kggcmq5WCYrufkGZWggNCAPd4eavosNkC2M2c2P1RPhViixzRzhtsFKyFzsNQgPUwgftN77T9psLmzne9t1kB1cZAGKWpp"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570166f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d396636663764656365316663376164373037356431363639653137643665623732353932333330656330323438323566663566643134363839303639656134632d47463031627a4c6251516f5a413931656f7464662d313536393539373435372d5349475f4b315f4b6767636d71355743597275666b475a5767674e43415064346561766f734e6b43324d3263325031525068566969787a527a687473464b79467a734e51675055776766744e3737543970734c6d7a6e653974316b4231635a41474b577070"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1204,
        net_usage_words: 22,
        trx: {
          id:
            "9680270a125713f6eb31efe313f9b508d9009f73e8c45c6a4e7e60643fc8d152",
          signatures: [
            "SIG_K1_KczJCJpQDz8QeXeXyGQztX8UgNNxTCBHWRSvRJqoFmonzg1SVBMpJMoDkU5p5oLSnJArfzcJaH6SZ3YouaqB6D8g9XHTM1"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d1fd9d35bcb150000000001000000801da0904b0000000044a3b6ba01000000801da0904b00000097667355a528cc4fd2b5a0f41d402f19fb4c6114c9c3e07318b7d537ca064357499f05164a77898e793198a6e6e800",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55583,
            ref_block_prefix: 365648851,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "dice.bg",
                name: "reveal",
                authorization: [
                  {
                    actor: "dice.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  bet_id: "4620117763834400716",
                  seed:
                    "2f19fb4c6114c9c3e07318b7d537ca064357499f05164a77898e793198a6e6e8"
                },
                hex_data:
                  "cc4fd2b5a0f41d402f19fb4c6114c9c3e07318b7d537ca064357499f05164a77898e793198a6e6e8"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 379,
        net_usage_words: 13,
        trx: {
          id:
            "54d504364208b951a10f1893d38bd820208d213896dcd9562d1dd9074ef3f089",
          signatures: [
            "SIG_K1_KAkoy6tx2T8dz1p48Lg4Joq4JiEQ7vnsaNxQGhXMCv51oTsJRN2C8LFhfXhNYajkY4hn76kBBA1nm8B7yvs8s8jCQ5g792"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e3208e5d20d9f14215070000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a508e7a2e9040000000000",
          transaction: {
            expiration: "2019-09-27T14:46:59",
            ref_block_num: 55584,
            ref_block_prefix: 118833905,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 82420455
                },
                hex_data: "e7a2e90400000000"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd921c53fdc68b01dba407c56ee943c7ff17006cfc205a3e8a1aad66fe0df",
    block_num: 81582369,
    ref_block_prefix: 1085939120
  },
  {
    timestamp: "2019-09-27T14:46:29.000",
    producer: "eoseouldotio",
    confirmed: 0,
    previous:
      "04dcd91fd8eebf36d35bcb15d73bf60b936c442804e25637097146b315c0a4cc",
    transaction_mroot:
      "9a644a2cb983741baa125e81f3f5f1f0391d724bf1243c62ecb5e6dae5619610",
    action_mroot:
      "c0b325eeaeca8c0b692b7e68f34eec9433b6979538b751d246d6e0e5b1eb2abe",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_KYmUdTeWDUaFNFMNBJKnv5wSCcUNn55qVMEf1V1hJNSTuATaJbBGtQuJPUPMKYAmDA92WNCVNLaTRZ1drswNv9vMrrbsJi",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 225,
        net_usage_words: 0,
        trx: "a3c8a63fb7fe86da21dafe5ebd9c8433ccde5547377d547f52a2bda872d93fb4"
      },
      {
        status: "executed",
        cpu_usage_us: 3157,
        net_usage_words: 19,
        trx: {
          id:
            "37a280c8f08fda8edbaeb9ba2c457ea0e4ab732df0f31ef7a747977c23c7c111",
          signatures: [
            "SIG_K1_K1XWvbaiXqq3Rb3N7dfhWbBoJKu4JuSUaRh5nCqnpjorFoG2L7heqTB2A2UYJ2P2TqP8LTaYNG6ha9rptxhfheRAe3fXuj"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001a0223297ba56a34a000000000095dde50110dd37f75077315500000000a888cca53910dd37f75077315503f16b0000000000000000000024ac3155098700000000000000000000a07c3055a854c404000000000000000024ac513e00",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "delphioracle",
                name: "write",
                authorization: [
                  {
                    actor: "eosriobrazil",
                    permission: "oracle"
                  }
                ],
                data: {
                  owner: "eosriobrazil",
                  quotes: [
                    {
                      value: 27633,
                      pair: "eosusd"
                    },
                    {
                      value: 34569,
                      pair: "eosbtc"
                    },
                    {
                      value: 79975592,
                      pair: "btcusd"
                    }
                  ]
                },
                hex_data:
                  "10dd37f75077315503f16b0000000000000000000024ac3155098700000000000000000000a07c3055a854c404000000000000000024ac513e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 116,
        net_usage_words: 0,
        trx: "5980df656960c9b8b2fd3243de804eb18c147fd9faf5aee70d02590333f6dfd7"
      },
      {
        status: "executed",
        cpu_usage_us: 861,
        net_usage_words: 16,
        trx: {
          id:
            "c911cac0b5512d4fd03fc7801c87309e72da360bfc1ce4c34418e76e201722ba",
          signatures: [
            "SIG_K1_JwR3ve4wUNxhtiN3v8bhbXZ5HLgAgbmT1eFh6sMGhxmJJvnhHr3REfpErayqG66tdo4Sk66TtQxqz28Ed5Nuf4D5v5WMxo"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce827000000000100a6823403ea3055000000572d3ccdcd0150a7517f1a6cb0d200000000a8ed32322450a7517f1a6cb0d2001480c83c884c3c983a00000000000004454f530000000003302c2c00",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "uesasanzeanp",
                    permission: "active"
                  }
                ],
                data: {
                  from: "uesasanzeanp",
                  to: "blackjack.e",
                  quantity: "1.5000 EOS",
                  memo: "0,,"
                },
                hex_data:
                  "50a7517f1a6cb0d2001480c83c884c3c983a00000000000004454f530000000003302c2c"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 715,
        net_usage_words: 147,
        trx: {
          id:
            "de6fb2a753011a99d686a605ecb51ee7210486e61addb4dd7d665c857e9272a7",
          signatures: [
            "SIG_K1_KgexEdLqZT22mX1gTjvMKuCFNeX7gXDcDJ897BgrUzizM7SGfovvqxWqhcDoELhyRYKmd1Jr2kvQ6ZaHzSyQ6UFSHRHrC3"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d17d9d0e8a51f0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b70848d39db763270efa6a1c105b3e3c0a3c1f010b9d463fea0a6202dd6745febfcd80d554cc5199be678d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3434395a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333320454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333820454f53222c2263757272656e74416d6f756e74223a2234352e3732333120454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "48d39db763270efa6a1c105b3e3c0a3c1f010b9d463fea0a6202dd6745febfcd",
                  username: "gyzdmoigenes",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.449Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0033 EOS",
                    wager: "0.0071 EOS",
                    payout: "0.0038 EOS",
                    currentAmount: "45.7231 EOS"
                  }
                },
                hex_data:
                  "48d39db763270efa6a1c105b3e3c0a3c1f010b9d463fea0a6202dd6745febfcd80d554cc5199be678d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3434395a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333320454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333820454f53222c2263757272656e74416d6f756e74223a2234352e3732333120454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 420,
        net_usage_words: 13,
        trx: {
          id:
            "6ac688da6788096853413d2e93347734580fe4e06fe57e01290704086559c2fa",
          signatures: [
            "SIG_K1_KeMmLCdn2QB1r8TEf3ZAgfi9hXHLKiESvb8Kzs3jxgcy5NcjReHQVHXQoYescBsvXy9T8uJLpXykXTjftSMCDPyb5iNc4R"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "d32e8e5dd1d7b03c5a970000000001a02ecd38ab9a55ed000000000046a3bc0110a693c9509755ed000000ead28cb3aa08823406000000000000",
          transaction: {
            expiration: "2019-09-27T15:46:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "xpetpetstore",
                name: "rmlog",
                authorization: [
                  {
                    actor: "xpetioadmin1",
                    permission: "petstore"
                  }
                ],
                data: {
                  id: 406658
                },
                hex_data: "8234060000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 424,
        net_usage_words: 15,
        trx: {
          id:
            "83512a983e396c60b08b86270d2455cada5419117e129738f9ddba2b80b29310",
          signatures: [
            "SIG_K1_Kb2n6fq89aVc9dqGSqPtCFV26bRgmSqVmpZneqeFqcW8ADwY6wQPLErbMLwoe9W1znnye51A1y34fJTL58KxgEzwCHSMMv"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1dd9a3e5755d000000000190a6b9c79b5831550040346aab8b903901309d4cc69b58315500000000a8ed3232191a7c7c00000000000c37353737633936356664343504d9dc0400",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55581,
            ref_block_prefix: 1568007587,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplaybrand",
                name: "baccreveal",
                authorization: [
                  {
                    actor: "eosplayadmin",
                    permission: "active"
                  }
                ],
                data: {
                  gameid: 8158234,
                  result: "7577c965fd45",
                  blocknum: 81582340
                },
                hex_data: "1a7c7c00000000000c37353737633936356664343504d9dc04"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 800,
        net_usage_words: 107,
        trx: {
          id:
            "a6ae7b8e0fd7a6647f415137a3c2501833c70fb89ba37e7e497e03f107b404ba",
          signatures: [
            "SIG_K1_Kb9RJLagKceRBsgVCYfpLhVb9WeVmzJMQzbyM7agjYXY25rUzrcUur8DSaZAMirUXHHLJ9mAGF1rzWb5uUgpGs2hGpyE52"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9f9057aad742506a0c9030debdfa2ef004503b2bf4f9d25eba9de379f886c91e83986104228458440e9efcf057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3135325a222c227a6f6e65223a322c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20312028e7899b3129222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3239373820454f53222c227761676572223a22302e3930303020454f53222c227061796f7574223a22312e3139373820454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "7aad742506a0c9030debdfa2ef004503b2bf4f9d25eba9de379f886c91e83986",
                  username: "xzoo11255111",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.152Z",
                    zone: 2,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zoneDeckType: "Bull 1 (牛1)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.2978 EOS",
                    wager: "0.9000 EOS",
                    payout: "1.1978 EOS"
                  }
                },
                hex_data:
                  "7aad742506a0c9030debdfa2ef004503b2bf4f9d25eba9de379f886c91e83986104228458440e9efcf057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3135325a222c227a6f6e65223a322c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20312028e7899b3129222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3239373820454f53222c227761676572223a22302e3930303020454f53222c227061796f7574223a22312e3139373820454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 956,
        net_usage_words: 21,
        trx: {
          id:
            "f93a7ecd77dc3f02efe7b3f710bd4fee631680f3adb0dbce438734578d29053e",
          signatures: [
            "SIG_K1_K3VduA6XrLuhGdeuWz2h53jH4uDV91tkmKGtYjazSeuNfpVsaXoaEDwwgysFcCsAzQoMNoJ8dQw24Z4WVDCd13fcDPzE5T"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94823406d03cee6182a25e8d80c5ec58e23105b8dccd533c9588a9538067cac0e110000c88db915a33ec0e9545767bd829700a6823403ea3055990f00000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "23406d03cee6182a25e8d80c5ec58e23105b8dccd533c9588a9538067cac0e11",
                  gameName: "bullfight",
                  username: "my1futurenow",
                  contract: "eosio.token",
                  payoutAsset: "0.3993 EOS"
                },
                hex_data:
                  "23406d03cee6182a25e8d80c5ec58e23105b8dccd533c9588a9538067cac0e110000c88db915a33ec0e9545767bd829700a6823403ea3055990f00000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 478,
        net_usage_words: 107,
        trx: {
          id:
            "022e5f6a77a1de77acbcd2449c570cde87bbf0d9d7ad265460ff5c61d523cd81",
          signatures: [
            "SIG_K1_KZWs2FRhXGCNFBxXgVcLCL9jLZyh4douVWnhkFBRgSTsXZh3hLvGH28BgMGihgZG53c26wTFQBZcgysnTgJdXm8givE6vk"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9f90501ff18a691bb9473f63416f6e9954ec2d01de16e8e20a3c36d720a87d255e268a09862fd4c9b8766cf057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3138325a222c227a6f6e65223a322c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20312028e7899b3129222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3139383520454f53222c227761676572223a22302e3630303020454f53222c227061796f7574223a22302e3739383520454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "01ff18a691bb9473f63416f6e9954ec2d01de16e8e20a3c36d720a87d255e268",
                  username: "gu3tqnbxgege",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.182Z",
                    zone: 2,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zoneDeckType: "Bull 1 (牛1)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.1985 EOS",
                    wager: "0.6000 EOS",
                    payout: "0.7985 EOS"
                  }
                },
                hex_data:
                  "01ff18a691bb9473f63416f6e9954ec2d01de16e8e20a3c36d720a87d255e268a09862fd4c9b8766cf057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3138325a222c227a6f6e65223a322c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20312028e7899b3129222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3139383520454f53222c227761676572223a22302e3630303020454f53222c227061796f7574223a22302e3739383520454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 262,
        net_usage_words: 13,
        trx: {
          id:
            "e9489bf5b5a7e07637545f27b9f266c9e820a6480e701e3d0877c0ce684e49fe",
          signatures: [
            "SIG_K1_KZhons2fsJv32WMGw44TLckU4nayBSG25deyMXHgdSHocWBXK89ZQUoyn3KoNGsA1wjCoLzURJ3Lx5srbXfHD6YiZcDz1V"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce8270000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a508a1fd18040000000000",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 68746657
                },
                hex_data: "a1fd180400000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1012,
        net_usage_words: 17,
        trx: {
          id:
            "a5e6015fff3a55ffa18ae888c3d228efe240002e27d469231dcb912c71568092",
          signatures: [
            "SIG_K1_KAg7YaT5mdFJ3qrFCSA2SffuDNN3rNW3AnegkuUrzqANpxr8Sc5VmThrpWZYErMkqDsooQ7ijtouar2XfDCSEk4TFJtVmA"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a97000000000100a6823403ea3055000000572d3ccdcd01e00d37d72cca305500000000a8ed323227e00d37d72cca305590a6b9c79b583155204e00000000000004454f530000000006646963653a7300",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "eosgofaraway",
                    permission: "active"
                  }
                ],
                data: {
                  from: "eosgofaraway",
                  to: "eosplaybrand",
                  quantity: "2.0000 EOS",
                  memo: "dice:s"
                },
                hex_data:
                  "e00d37d72cca305590a6b9c79b583155204e00000000000004454f530000000006646963653a73"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 787,
        net_usage_words: 21,
        trx: {
          id:
            "5c23afafc7999367f9748231c2394c3312a854bdc016f290ad97d12118b300ea",
          signatures: [
            "SIG_K1_KXtQjXTuKZaHxYWVqjqBxQaqaYChGYB912mTrrHCZtKwgR4j36AsSAhDg3dZtbkzJeK7BvooWmEeoTCmZbmJFWNhCtXC1L"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9482f71444c3a437fccb9ff059d70cc81d019dffae9dbd8afc186a5165b7b3fd3510000c88db915a33ec0e9545767bd829700a6823403ea3055990f00000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "2f71444c3a437fccb9ff059d70cc81d019dffae9dbd8afc186a5165b7b3fd351",
                  gameName: "bullfight",
                  username: "my1futurenow",
                  contract: "eosio.token",
                  payoutAsset: "0.3993 EOS"
                },
                hex_data:
                  "2f71444c3a437fccb9ff059d70cc81d019dffae9dbd8afc186a5165b7b3fd3510000c88db915a33ec0e9545767bd829700a6823403ea3055990f00000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 697,
        net_usage_words: 21,
        trx: {
          id:
            "178a376824865b20af4dc6131391b71eacc734b61f1b34ed6f82e48d4825ff1f",
          signatures: [
            "SIG_K1_KWN3wQuqNWDSJcJ1qRXNcdX5m7qypiemZe7EgdJESagRdTCVH821SNTAeCmtdd9viistBF4n8nAkeLSJJfULonwFRYweLV"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94845abfc89d31183f87351b07b3822a392b251feb8c335dcbe2ea324961409915b0000c88db915a33e104228458440e9ef00a6823403ea3055ca2e00000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "45abfc89d31183f87351b07b3822a392b251feb8c335dcbe2ea324961409915b",
                  gameName: "bullfight",
                  username: "xzoo11255111",
                  contract: "eosio.token",
                  payoutAsset: "1.1978 EOS"
                },
                hex_data:
                  "45abfc89d31183f87351b07b3822a392b251feb8c335dcbe2ea324961409915b0000c88db915a33e104228458440e9ef00a6823403ea3055ca2e00000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 466,
        net_usage_words: 107,
        trx: {
          id:
            "ff1bf6c07372b905ce43bb4ca27867cb0f1c98fd94c05ccc767b0ca2ca6d5969",
          signatures: [
            "SIG_K1_KZifBKhUSqiz7t4uQfnKR1jcuVpGVb8UyxPxLnfaWB3zdXy94noEVBCeJq6pBepCWicihD4L4UZ17SEutNkjN8ddv35dqT"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9f405cfa1ee924715514378bba5c82b0343e4ef540afddb1c71baacab7a8129685b9f104228458440e9efca057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3038335a222c227a6f6e65223a312c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20362028e7899b3629222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3239373820454f53222c227761676572223a22302e3930303020454f53222c227061796f7574223a22312e3139373820454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "cfa1ee924715514378bba5c82b0343e4ef540afddb1c71baacab7a8129685b9f",
                  username: "xzoo11255111",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.083Z",
                    zone: 1,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zoneDeckType: "Bull 6 (牛6)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.2978 EOS",
                    wager: "0.9000 EOS",
                    payout: "1.1978 EOS"
                  }
                },
                hex_data:
                  "cfa1ee924715514378bba5c82b0343e4ef540afddb1c71baacab7a8129685b9f104228458440e9efca057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3038335a222c227a6f6e65223a312c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20362028e7899b3629222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3239373820454f53222c227761676572223a22302e3930303020454f53222c227061796f7574223a22312e3139373820454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 755,
        net_usage_words: 21,
        trx: {
          id:
            "9261a07d17824bdd602f482af446d2c3d863a04cee35dd1ded79a30aa769a515",
          signatures: [
            "SIG_K1_KVJJgnZbgy3i4ptFR3UPMMBZupoLMgk4Btu3iEZpDd8xAPKCTDosuvhvBzpyHto3FPfB9BRV96x84nWpEV8eZ7H7pEkV44"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9487ed4c37b73070eaab503c972458444e22f830f2da2193a6236827388cf6d755d0000c88db915a33e104228458440e9ef00a6823403ea3055ca2e00000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "7ed4c37b73070eaab503c972458444e22f830f2da2193a6236827388cf6d755d",
                  gameName: "bullfight",
                  username: "xzoo11255111",
                  contract: "eosio.token",
                  payoutAsset: "1.1978 EOS"
                },
                hex_data:
                  "7ed4c37b73070eaab503c972458444e22f830f2da2193a6236827388cf6d755d0000c88db915a33e104228458440e9ef00a6823403ea3055ca2e00000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 465,
        net_usage_words: 107,
        trx: {
          id:
            "5d7bfd44e5e7e70f30202af6afe772bf773286e1ee1fc76e87397addbadd6600",
          signatures: [
            "SIG_K1_JwfzezeefKp9pE2nHLvU5UT8m9fi4KVwoRQuYhcfwagdG9nPrRaYgANsZnUqtoZUig49NjjsFwCJg9vhreVroSWEScAUQe"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9f9052e30ec2ab57760fb77fa1712f5f844e293fd1e370214c354066960e88701f706c0e9545767bd8297cf057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3231365a222c227a6f6e65223a322c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20312028e7899b3129222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3039393320454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3339393320454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "2e30ec2ab57760fb77fa1712f5f844e293fd1e370214c354066960e88701f706",
                  username: "my1futurenow",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.216Z",
                    zone: 2,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zoneDeckType: "Bull 1 (牛1)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.0993 EOS",
                    wager: "0.3000 EOS",
                    payout: "0.3993 EOS"
                  }
                },
                hex_data:
                  "2e30ec2ab57760fb77fa1712f5f844e293fd1e370214c354066960e88701f706c0e9545767bd8297cf057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3231365a222c227a6f6e65223a322c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20312028e7899b3129222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3039393320454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3339393320454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 277,
        net_usage_words: 49,
        trx: {
          id:
            "b1ffe3f7c94ab780d6b69c3164feac5bb683c9311e330f5b360042ac2fe2f7ef",
          signatures: [
            "SIG_K1_JxD2seZA6faSwoFu1oY7pCR7cmxfmvmUXfSnpW3W3BQGT6i8Gpr56gP3b6bW6XQELLogCTEAKzQQp3rvo37nf1HhT8XGNH"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ce278e5d1cd91abc956c000000000170dc3528aba3743c0080a4f4aa6c52d50170dc3528aba3743c00000000a8ed3232ab02000200000000000015111400010018302c31303830323235393033383132333337383232342c3005302c302c30bc01654a776c6a556b4f777a414952652f7931313767416176344b6c45586365783055746f7171307052376c3543574477426e7963326a436a7367384f45346832714d6e6f6d695135646538374377706e45595559686877664b734230536c76587a376573596a344c355a483477552f746d76426c564871356d362f4179506f324c386133634e622b665a376f55535265696345594f5033303474726d6d54463234566559614a456f376a71626b4b584f64735038424776347764773d3d3f3435303538363436323134323331393435383d3e7b73656564686173683a61646662343630653935646235356232393339643438303063343130363562637d00",
          transaction: {
            expiration: "2019-09-27T15:16:30",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bluebetcarib",
                name: "updateroom",
                authorization: [
                  {
                    actor: "bluebetcarib",
                    permission: "active"
                  }
                ],
                data: {
                  room_id: 512,
                  action_id: 1315093,
                  status: 1,
                  cur_ask: 0,
                  player_list: "0,10802259038123378224,0",
                  player_status: "0,0,0",
                  room_data:
                    "eJwljUkOwzAIRe/y117gAav4KlEXcex0Utoqq0pR7l5CWDwBnyc2jCjsg8OE4h2qMnomiQ5de87CwpnEYUYhhwfKsB0SlvXz7esYj4L5ZH4wU/tmvBlVHq5m6/AyPo2L8a3cNb+fZ7oUSReicEYOP304trmmTF24VeYaJEo7jqbkKXOdsP8BGv4wdw==",
                  memo:
                    "450586462142319458=>{seedhash:adfb460e95db55b2939d4800c41065bc}"
                },
                hex_data:
                  "000200000000000015111400010018302c31303830323235393033383132333337383232342c3005302c302c30bc01654a776c6a556b4f777a414952652f7931313767416176344b6c45586365783055746f7171307052376c3543574477426e7963326a436a7367384f45346832714d6e6f6d695135646538374377706e45595559686877664b734230536c76587a376573596a344c355a483477552f746d76426c564871356d362f4179506f324c386133634e622b665a376f55535265696345594f5033303474726d6d54463234566559614a456f376a71626b4b584f64735038424776347764773d3d3f3435303538363436323134323331393435383d3e7b73656564686173683a61646662343630653935646235356232393339643438303063343130363562637d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 683,
        net_usage_words: 107,
        trx: {
          id:
            "e7ffdecead69dedaa17e8e52ed5845ce7489fc755e5fa2f39921f9fb29db0dd8",
          signatures: [
            "SIG_K1_K3ocqPJgSUciqavQv19yWYcPEssdoPM6ooFttC5YsyVg8M4uUJPLozfZJVwhrcCbL4WefjGmb3VWgKfyNbSSoqgyhsUrnS"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9f40556a63962025099bb669f727fb3a0ac6d3014f44bf20cde84677c881098ce825cc0e9545767bd8297ca057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3131395a222c227a6f6e65223a312c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20362028e7899b3629222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3039393320454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3339393320454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "56a63962025099bb669f727fb3a0ac6d3014f44bf20cde84677c881098ce825c",
                  username: "my1futurenow",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.119Z",
                    zone: 1,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zoneDeckType: "Bull 6 (牛6)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.0993 EOS",
                    wager: "0.3000 EOS",
                    payout: "0.3993 EOS"
                  }
                },
                hex_data:
                  "56a63962025099bb669f727fb3a0ac6d3014f44bf20cde84677c881098ce825cc0e9545767bd8297ca057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3131395a222c227a6f6e65223a312c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20362028e7899b3629222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3039393320454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3339393320454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 424,
        net_usage_words: 20,
        trx: {
          id:
            "4df8518f4ecf094846cdc1869a2f7b9cdc46206e6e748b7cb1d597747433384e",
          signatures: [
            "SIG_K1_KgvrvwNUn67igdaYm298yu5on1i1uYVvPjaiGDbuTHk2JyRTZAQYwsPyv5BgcK3J3AWmiGEq5ghMHaR84vwtiR5JLaqaxs"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1dd9a3e5755d000000000190a6b9c79b58315570d5c2d3dcac96c101309d4cc69b58315500000000a8ed32323e000000000000000000e00d37d72cca30558ea802000000000004454f53000000001c646963653a77696e7c38313538323333352c34352c736d616c6c2c3000",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55581,
            ref_block_prefix: 1568007587,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplaybrand",
                name: "safetransfer",
                authorization: [
                  {
                    actor: "eosplayadmin",
                    permission: "active"
                  }
                ],
                data: {
                  bookid: 0,
                  status: 0,
                  to: "eosgofaraway",
                  amount: "17.4222 EOS",
                  memo: "dice:win|81582335,45,small,0"
                },
                hex_data:
                  "000000000000000000e00d37d72cca30558ea802000000000004454f53000000001c646963653a77696e7c38313538323333352c34352c736d616c6c2c30"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 479,
        net_usage_words: 32,
        trx: {
          id:
            "499af8b7d105f5b0a27fd2e47888da2c10cad05388b83c75c9f2a444e7872927",
          signatures: [
            "SIG_K1_KXFdP2qHdq9A76irp1PM4tCP8ZgD3Y2ZCofRkGPBHZ7Ch1xKk1j1M381KLXnW3584wziQmkqva3Pn3HKApE47V2TrFFeSQ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "cf208e5de3d8b114b8140000000001c0268d0d99e92ace000000c05f95338d01c0268d0d99e92ace000000004cea32329e01000000004ccacc4d60d8dc0400000000403835346463373665373830393830346266646535393861363964353234646130356539313262303932326466316661663365396639636638323734393463383023647261676f6e28e9be8d2928e299a63130292c746967657228e8998e2928e299a53629342b8f01000000000c647261676f6e3b28e9be8d2913323031392d30392d32375432323a34343a303000",
          transaction: {
            expiration: "2019-09-27T14:46:39",
            ref_block_num: 55523,
            ref_block_prefix: 347608241,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "tspinachlong",
                name: "lottery",
                authorization: [
                  {
                    actor: "tspinachlong",
                    permission: "action"
                  }
                ],
                data: {
                  game_name: "dragon",
                  height: 81582176,
                  hash:
                    "854dc76e7809804bfde598a69d524da05e912b0922df1faf3e9f9cf827494c80",
                  poker: "dragon(龍)(♦10),tiger(虎)(♥6)",
                  count: 26159924,
                  win: "dragon;(龍)",
                  desc: "2019-09-27T22:44:00"
                },
                hex_data:
                  "000000004ccacc4d60d8dc0400000000403835346463373665373830393830346266646535393861363964353234646130356539313262303932326466316661663365396639636638323734393463383023647261676f6e28e9be8d2928e299a63130292c746967657228e8998e2928e299a53629342b8f01000000000c647261676f6e3b28e9be8d2913323031392d30392d32375432323a34343a3030"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 201,
        net_usage_words: 23,
        trx: {
          id:
            "f92cb519dd4607fa088698b97a53f27f024e0cc1e76f5b54d5cbe58fb37b0cfd",
          signatures: [
            "SIG_K1_KBo7i6quD7wr4H9GSDbqwDerQMNfi92rDURswYSjqA3pzpPki629UhD5QrcPjZmsHeaokL93CSYXSKtW7xgfB3wENSJ6aG"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce827000000000190348dc69b583155000000000010a3f20190348dc69b58315500000000a8ed32325a90348dc69b58315551454f53506c6179204e65772047616d65204f6e6c696e65202d20534c4f5453212057494e205448452042494720424f4e5553212068747470733a2f2f656f73706c61792e636f6d2f3f623566356433623300",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplayaloud",
                name: "yell",
                authorization: [
                  {
                    actor: "eosplayaloud",
                    permission: "active"
                  }
                ],
                data: {
                  u: "eosplayaloud",
                  memo:
                    "EOSPlay New Game Online - SLOTS! WIN THE BIG BONUS! https://eosplay.com/?b5f5d3b3"
                },
                hex_data:
                  "90348dc69b58315551454f53506c6179204e65772047616d65204f6e6c696e65202d20534c4f5453212057494e205448452042494720424f4e5553212068747470733a2f2f656f73706c61792e636f6d2f3f6235663564336233"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 833,
        net_usage_words: 147,
        trx: {
          id:
            "4281409dcecb78773b929a333834d68c4878a71395cbf05a01fc0d46fab7b188",
          signatures: [
            "SIG_K1_KgVT7SuZghmeMgCZEDpPmyhow3Sy5XFC3v1fGkEtkEyUCG4wnxbo8G6MDebdSijBxMZZPzdZktCL93wKocBJpnywPsyraa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d17d9d0e8a51f0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b708be1b4992755f891b7c87b12b9cdfda171aca8edc807164c1cc896496e3f48fb9104d8ed520ffcd458d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3435375a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333420454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333720454f53222c2263757272656e74416d6f756e74223a2234362e3135383720454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "be1b4992755f891b7c87b12b9cdfda171aca8edc807164c1cc896496e3f48fb9",
                  username: "crazycapltal",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.457Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0034 EOS",
                    wager: "0.0071 EOS",
                    payout: "0.0037 EOS",
                    currentAmount: "46.1587 EOS"
                  }
                },
                hex_data:
                  "be1b4992755f891b7c87b12b9cdfda171aca8edc807164c1cc896496e3f48fb9104d8ed520ffcd458d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3435375a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333420454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333720454f53222c2263757272656e74416d6f756e74223a2234362e3135383720454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4266,
        net_usage_words: 47,
        trx: {
          id:
            "2ae729b80b73709e18584d1c9b36cde4acbae3c41704b54e3c4d30d387f7f53f",
          signatures: [
            "SIG_K1_KX5VnTxTCbBgbVGSytLgCTmiVB5VW448K4U4mKG2PYCKLjkRfnDXRyW3cPkzhjj1RdT6UTbJSgPLaTrLYJ4MiD2fin9KLL"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1fd9d35bcb150000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570165f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d623561613662316266323537626436623061313065323231346161333065623630303263613631396662646363323239633439383661356635656134363635382d47463031627a4c6251516f5a413931656f7464662d313536393539373433322d5349475f4b315f4a763356394e7a39626d554b71685443544a6743694b744e334c76744773447a7066614e4d4834665873586732536b503270356a526a6f39384767476954734571334d337851726f78636e716b614366486568357333577a4678566d486e00",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55583,
            ref_block_prefix: 365648851,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "e",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-b5aa6b1bf257bd6b0a10e2214aa30eb6002ca619fbdcc229c4986a5f5ea46658-GF01bzLbQQoZA91eotdf-1569597432-SIG_K1_Jv3V9Nz9bmUKqhTCTJgCiKtN3LvtGsDzpfaNMH4fXsXg2SkP2p5jRjo98GgGiTsEq3M3xQroxcnqkaCfHeh5s3WzFxVmHn"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570165f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d623561613662316266323537626436623061313065323231346161333065623630303263613631396662646363323239633439383661356635656134363635382d47463031627a4c6251516f5a413931656f7464662d313536393539373433322d5349475f4b315f4a763356394e7a39626d554b71685443544a6743694b744e334c76744773447a7066614e4d4834665873586732536b503270356a526a6f39384767476954734571334d337851726f78636e716b614366486568357333577a4678566d486e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 809,
        net_usage_words: 147,
        trx: {
          id:
            "a1414d25a68f49a520c6c9c9a507dfa5d48d48d443b84369745475d616de12b1",
          signatures: [
            "SIG_K1_K47tx8ZA7wmL9nfhKosA8zqbpLw3XtfikABVvvUEMgVptcgREWRpJk8h9TAmCiMmpeHuouvLLCaS8LarNWYuQj5CU25cRh"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d18d998b5aebc0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b808fa3dcd1155e09232a43f766bf8c2c085d4550ace82a9a1836f8e469cd18bc42b100235ee68498deb8e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3439355a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3033343820454f53222c227761676572223a22302e3037343520454f53222c227061796f7574223a22302e3033393720454f53222c2263757272656e74416d6f756e74223a223438342e3431373420454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55576,
            ref_block_prefix: 3165566360,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "fa3dcd1155e09232a43f766bf8c2c085d4550ace82a9a1836f8e469cd18bc42b",
                  username: "xiaomubiao11",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.495Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0348 EOS",
                    wager: "0.0745 EOS",
                    payout: "0.0397 EOS",
                    currentAmount: "484.4174 EOS"
                  }
                },
                hex_data:
                  "fa3dcd1155e09232a43f766bf8c2c085d4550ace82a9a1836f8e469cd18bc42b100235ee68498deb8e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3439355a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3033343820454f53222c227761676572223a22302e3037343520454f53222c227061796f7574223a22302e3033393720454f53222c2263757272656e74416d6f756e74223a223438342e3431373420454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 855,
        net_usage_words: 27,
        trx: {
          id:
            "ceaa786f3ec9aefb072792d2aa629d431f98665ab6b9c00cf2826a08d83758d5",
          signatures: [
            "SIG_K1_KdQMjSTngfDDsnGGq2PaJNRsXCsfH3mM79WH4SYE7xNpctiBSuzwFqX9HRb3CftF3LyuAC2eEunaBHh6qpuHtd1KAWJium"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a97000000000200a6823403ea3055000000572d3ccdcd0130c6182594e08f3900000000a8ed32322130c6182594e08f39d0559a6e7595a65ba00c25000000000004454f530000000000d0559a6e7595a65b00000057a54bbd3e0130c6182594e08f3900000000a8ed32323530c6182594e08f39ca00000000000000f68bd5020000000004415448454e410078c70000000000000c66696e64657874786665657300",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "baby15153333",
                    permission: "active"
                  }
                ],
                data: {
                  from: "baby15153333",
                  to: "findexfindex",
                  quantity: "242.8064 EOS",
                  memo: ""
                },
                hex_data:
                  "30c6182594e08f39d0559a6e7595a65ba00c25000000000004454f530000000000"
              },
              {
                account: "findexfindex",
                name: "buyorder",
                authorization: [
                  {
                    actor: "baby15153333",
                    permission: "active"
                  }
                ],
                data: {
                  r_buy_order: {
                    buyer: "baby15153333",
                    pair_id: 202,
                    quote_quantity: "4754.9430 ATHENA",
                    maximum_price: 51064,
                    remark: "findextxfees"
                  }
                },
                hex_data:
                  "30c6182594e08f39ca00000000000000f68bd5020000000004415448454e410078c70000000000000c66696e646578747866656573"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 627,
        net_usage_words: 20,
        trx: {
          id:
            "eed743df56a51b1583459dfa8f9a728143b9b9b146a3260a3503cff02211b78a",
          signatures: [
            "SIG_K1_JvvudbSsC6eDvoC626SFFgi1iQkwX4N1EX72BXGGWUT11t7JChjvibxxG6yUnahbjf4JLMzCsvjAia7EHLvkY3iJjbyJi2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce8270000000001401dce8db9093155000000a3e5eb8eba01a0986afe4a96876600000000a8ed323214a0986afe4a96876600000000cbc3e5502468f76600",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosknightsio",
                name: "rebirth3",
                authorization: [
                  {
                    actor: "gu3tgmryhege",
                    permission: "active"
                  }
                ],
                data: {
                  from: "gu3tgmryhege",
                  season: 0,
                  block: 1357235147,
                  checksum: 1727490084
                },
                hex_data: "a0986afe4a96876600000000cbc3e5502468f766"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 461,
        net_usage_words: 13,
        trx: {
          id:
            "e523e5d11d7fe1db93a09bf6de1862a7da51e25d53b4c9f5b56b752019e7463f",
          signatures: [
            "SIG_K1_KmTtNwwhc5Zwhc6xuzx55to6GW6QzmhtEp9ZDqjxmvWvjKLiDoqgrNKoFR4AxPLUMo81Kr5ra2X9xJmJVcNhVMHqycJgV4"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce8270000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a50804f1ec020000000000",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 49082628
                },
                hex_data: "04f1ec0200000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 284,
        net_usage_words: 13,
        trx: {
          id:
            "6d25e01c8acd6b9fab52cb55a4196ee91692ae36c87f244808d02eabbef7a630",
          signatures: [
            "SIG_K1_K8ae8Kdkik6voYRSwvFtT3u74qqoeZorLvpuER5XqsVhKNWLrM4KF2gRkPcVjZQkWwXMsyFLiQkw6AU5s6iNzBR1Lv5YRP"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "00218e5dd1d7b03c5a9700000000011012bdd5649a3055008037b14685a641011012bdd5649a305500000000a8ed323208408b57a1e5da073a00",
          transaction: {
            expiration: "2019-09-27T14:47:28",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosdotaprod1",
                name: "cancelplay",
                authorization: [
                  {
                    actor: "eosdotaprod1",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bc3xpth1ey5o"
                },
                hex_data: "408b57a1e5da073a"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4530,
        net_usage_words: 21,
        trx: {
          id:
            "454d49cf78d7604e7bad8093b3d28ab03f1ad9348a6b0ec5ed89c0325b0f1dda",
          signatures: [
            "SIG_K1_Kem6YmDcDq6oEnFdmWLLEY2gXvP2cPX5ZMunSoEqjbhc4QhCxSRqBrbKjRFcVQQtT9tDP2cZuwTn6SDWWydqUWfbYsnY3B"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d1ad92904ff680000000001a0223297ba56a34a000000000095dde50180b1915e5d268dca00000000a888cca54980b1915e5d268dca04de6b0000000000000000000024ac3155ea8600000000000000000000a07c30551f4dc404000000000000000024ac513edd3909220000000000000000f889503e00",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "delphioracle",
                name: "write",
                authorization: [
                  {
                    actor: "teamgreymass",
                    permission: "oracle"
                  }
                ],
                data: {
                  owner: "teamgreymass",
                  quotes: [
                    {
                      value: 27614,
                      pair: "eosusd"
                    },
                    {
                      value: 34538,
                      pair: "eosbtc"
                    },
                    {
                      value: 79973663,
                      pair: "btcusd"
                    },
                    {
                      value: 571029981,
                      pair: "btccny"
                    }
                  ]
                },
                hex_data:
                  "80b1915e5d268dca04de6b0000000000000000000024ac3155ea8600000000000000000000a07c30551f4dc404000000000000000024ac513edd3909220000000000000000f889503e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1880,
        net_usage_words: 38,
        trx: {
          id:
            "61a8a16f05e559ff0cd8140f48a5813a0e6119c7e5f0aaa4b6ac91f5b2fd8b3b",
          signatures: [
            "SIG_K1_Jvi9q81ntiXF87XGSbXCK3BM8PJX8vkYcMbfjmnTiXz6NUzeGeu5Fejyy91aVveFtb2fc2SdqXTRrTQcjQNXTwoNsrtY6i"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f2208e5db9d75abb570f0000000001301d57c8a58cf5cd000000a0d3331d4501908c94a669398dbf00000000a8ed3232d201d0017279616e6d7568616d6d61642d7279616e6d7568616d6d61642d4c594e582d646263653834623939336265333539306465313561623162623435623066626433376638353731356661636264363037363238613439373334373461303839662d313536393539353837352d5349475f4b315f4b6b556736616e736270775435724633364b34366a70554a6a52374445416b6466564a57636d684e3158576a34385678476455314e54617061326836626137514d70386867446335714a6844686e3855767067654d46636737743632535700",
          transaction: {
            expiration: "2019-09-27T14:47:14",
            ref_block_num: 55225,
            ref_block_prefix: 257407834,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "trustdicewin",
                name: "coinbox",
                authorization: [
                  {
                    actor: "ryanmuhammad",
                    permission: "active"
                  }
                ],
                data: {
                  memo:
                    "ryanmuhammad-ryanmuhammad-LYNX-dbce84b993be3590de15ab1bb45b0fbd37f85715facbd607628a4973474a089f-1569595875-SIG_K1_KkUg6ansbpwT5rF36K46jpUJjR7DEAkdfVJWcmhN1XWj48VxGdU1NTapa2h6ba7QMp8hgDc5qJhDhn8UvpgeMFcg7t62SW"
                },
                hex_data:
                  "d0017279616e6d7568616d6d61642d7279616e6d7568616d6d61642d4c594e582d646263653834623939336265333539306465313561623162623435623066626433376638353731356661636264363037363238613439373334373461303839662d313536393539353837352d5349475f4b315f4b6b556736616e736270775435724633364b34366a70554a6a52374445416b6466564a57636d684e3158576a34385678476455314e54617061326836626137514d70386867446335714a6844686e3855767067654d466367377436325357"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 195,
        net_usage_words: 25,
        trx: {
          id:
            "60f30c8cdbb44de7dd02981f6601845acc4c9659fefe50bd98dd9b6f992746f4",
          signatures: [
            "SIG_K1_KYxSCfszycdWdYneDZiZ9qznVBKFr1HvyqexL3nxqrzShirC5evu8VV1bHYgBKaefVxdHL8SpEwFZRL7vLqxPEAcfrV7Gq"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01308810241041ee3c00000000a8ed32326b308810241041ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a6151575432506d423250474830504748615147506c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr424142243",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr424142243",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWT2PmB2PGH0PGHaQGPliT=="
                },
                hex_data:
                  "308810241041ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a6151575432506d423250474830504748615147506c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1351,
        net_usage_words: 147,
        trx: {
          id:
            "968fd9b4da8846323c886c0a0a6362b9156362a8f4d28b719362f6ab2aeb9096",
          signatures: [
            "SIG_K1_KBbTwPxvHLBZJFvb4tFStBS3LLCX9cSfPjYcRbrFbQ8e77ftJKAbiptvUjpryTNzs7VoTEXs6jZSYnJThPTQvreGbEBBfk"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d18d998b5aebc0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b80819eb05ea6eaa2990258ebea62630fc38af4816c3b23f1748a744235772b12b9b40c2086cd23b8d338e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3438365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3032343220454f53222c227761676572223a22302e3035313820454f53222c227061796f7574223a22302e3032373620454f53222c2263757272656e74416d6f756e74223a223333362e3534303420454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55576,
            ref_block_prefix: 3165566360,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "19eb05ea6eaa2990258ebea62630fc38af4816c3b23f1748a744235772b12b9b",
                  username: "aianrong1314",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.486Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0242 EOS",
                    wager: "0.0518 EOS",
                    payout: "0.0276 EOS",
                    currentAmount: "336.5404 EOS"
                  }
                },
                hex_data:
                  "19eb05ea6eaa2990258ebea62630fc38af4816c3b23f1748a744235772b12b9b40c2086cd23b8d338e087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3438365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3032343220454f53222c227761676572223a22302e3035313820454f53222c227061796f7574223a22302e3032373620454f53222c2263757272656e74416d6f756e74223a223333362e3534303420454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd92038c2b3b8f1421507b131d4071434be429825216fd3cadfeb780d6d4a",
    block_num: 81582368,
    ref_block_prefix: 118833905
  },
  {
    timestamp: "2019-09-27T14:46:28.500",
    producer: "eoseouldotio",
    confirmed: 0,
    previous:
      "04dcd91ecd144ba2112ce827bc3aa3ec6acfecce2dcbf499a65fd31a754ba786",
    transaction_mroot:
      "4fda80397900f02e72109dcbdbcf246ec3680bad89fe62818ff6f4d2f22e05db",
    action_mroot:
      "7ce88c2205809bba83b89f26c2762f121a5269ccd010c45cb1421b0e4f5c9e36",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_Kg9B2i9ttfSpd8goRQcSZHUpNXXM2FXkTDJw9QUaRWbp3gAwCLYRWaYLnUhCG1JRfikhKKLVCimQRwkKphi6h3RMx8pPUH",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 233,
        net_usage_words: 6,
        trx: "59cc9a8f5910e02db01bd295bcdbd7ab1255ac47e8ba412646c916a28a3c213d"
      },
      {
        status: "executed",
        cpu_usage_us: 106,
        net_usage_words: 0,
        trx: "5ca71b4a2a9816f54914430428ea31d92511468ced05bfb892ea963675cb6b85"
      },
      {
        status: "executed",
        cpu_usage_us: 271,
        net_usage_words: 0,
        trx: "0177f9dc08f11e1c495478e5dbe042cb095fbbc157a0ceac125a8dc22609dc16"
      },
      {
        status: "executed",
        cpu_usage_us: 1301,
        net_usage_words: 25,
        trx: {
          id:
            "cdd79c5348c206f69f7c1d6799037102d230866613a4a45c0aa0c75565897b16",
          signatures: [
            "SIG_K1_KdT8Z6BxtrTGVFQ11o16d3s4PL6vprmWxCe7ZLbgkp2aSAVaFfwkfHMGqRYAfaH1sV2uhexqAWTHL4rtACCkoqYs29GBQm"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c96858d97a778f8c371bb9c1f3637f1b8e3fc6287d424b9876cab19c4bfb659e716c0000c88db915a33e10420801a19a315500a6823403ea30558b0000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "58d97a778f8c371bb9c1f3637f1b8e3fc6287d424b9876cab19c4bfb659e716c",
                  gameName: "bullfight",
                  username: "eostpcc11111",
                  contract: "eosio.token",
                  betAsset: "0.0139 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "58d97a778f8c371bb9c1f3637f1b8e3fc6287d424b9876cab19c4bfb659e716c0000c88db915a33e10420801a19a315500a6823403ea30558b0000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 284,
        net_usage_words: 16,
        trx: {
          id:
            "a372d3423184c3b586cce442bf604353d834206c8f4b5576329830006ee92fd9",
          signatures: [
            "SIG_K1_K7CuFRWHory4W4d2TyfKYqCv96kFcGcmezJ67u41uNj7K39tMavTbxUi5CSzvK82YCwAo5chaxepagVfbZDbFXg7YCzLmB"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d18d998b5aebc0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c9208dae8e25c95e53c3b1881dbe8fd10fd04c7d49e24a76267f625f04b293dbbda500",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55576,
            ref_block_prefix: 3165566360,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "8dae8e25c95e53c3b1881dbe8fd10fd04c7d49e24a76267f625f04b293dbbda5"
                },
                hex_data:
                  "8dae8e25c95e53c3b1881dbe8fd10fd04c7d49e24a76267f625f04b293dbbda5"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 278,
        net_usage_words: 15,
        trx: {
          id:
            "cee71c7a86f633e9ed1f421050453cccf567b04599dfff3c5336bb3dd6008a6e",
          signatures: [
            "SIG_K1_Kk6iAhkxKtyK7ey1PVaTRfNPFBSL8udDWexyn2LvnLxEJF5zTfbV9uC3EMM2hkvWPwibHpk2SfMgUd8fQzvYsKQUHifTqL"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001001480c83c884c3c30a9cbc85ce54dac01f06ba36b59edfbbd00000000a8ed323218f06ba36b59edfbbdcc661a0000000000040000000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "blackjack.e",
                name: "playeraction",
                authorization: [
                  {
                    actor: "rrxyuqffohpz",
                    permission: "active"
                  }
                ],
                data: {
                  player: "rrxyuqffohpz",
                  game_id: 1730252,
                  action: 4
                },
                hex_data: "f06ba36b59edfbbdcc661a00000000000400000000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1172,
        net_usage_words: 22,
        trx: {
          id:
            "94ef8c2cdfca08e5a9a93245ea105becbe37e78c30dad18172030ea2048a083c",
          signatures: [
            "SIG_K1_KkXjHgCNKWSN3BYAkk4BEETm7xH9MVhgAbUoKwhzCPrvSzmMLWRtQxL6jR8J7gdG11GJMb3sRT29c4VVs8NbFZAsZQDUYR"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001000000801da0904b0000000044a3b6ba01000000801da0904b00000097667355a5281af8365bef3f98a17f18bb1e49f2290a25f56732617c9ab23a19711b85388e1029ee75b9462ce50e00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "dice.bg",
                name: "reveal",
                authorization: [
                  {
                    actor: "dice.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  bet_id: "11644127133826480154",
                  seed:
                    "7f18bb1e49f2290a25f56732617c9ab23a19711b85388e1029ee75b9462ce50e"
                },
                hex_data:
                  "1af8365bef3f98a17f18bb1e49f2290a25f56732617c9ab23a19711b85388e1029ee75b9462ce50e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 700,
        net_usage_words: 147,
        trx: {
          id:
            "0d2200276db6041504f9f89c6b9b27222737f46672e0585f60ae3547b0c83a60",
          signatures: [
            "SIG_K1_KWYZaNwxHk2YNwCfSA7vCf558sdaHsb9eNgemDFpZEoszEkTgPb83J1VFt6K3sjgkG91h4vLAewTBFN124NKWt3rukW1MY"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d17d9d0e8a51f0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b7087ef0c429830a7263d822ae4c45f01e3a994db12086181c54a0132c680af03f02a09861ff4d9b87658d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3436375a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333620454f53222c227761676572223a22302e3030373720454f53222c227061796f7574223a22302e3030343120454f53222c2263757272656e74416d6f756e74223a2234392e3937393220454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "7ef0c429830a7263d822ae4c45f01e3a994db12086181c54a0132c680af03f02",
                  username: "gq3tqnjzgage",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.467Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0036 EOS",
                    wager: "0.0077 EOS",
                    payout: "0.0041 EOS",
                    currentAmount: "49.9792 EOS"
                  }
                },
                hex_data:
                  "7ef0c429830a7263d822ae4c45f01e3a994db12086181c54a0132c680af03f02a09861ff4d9b87658d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3436375a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333620454f53222c227761676572223a22302e3030373720454f53222c227061796f7574223a22302e3030343120454f53222c2263757272656e74416d6f756e74223a2234392e3937393220454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3957,
        net_usage_words: 47,
        trx: {
          id:
            "12d3ef2790a82d5261d1566c5cdb3afbc6d5e5dbfe479fb587971b4266361d8f",
          signatures: [
            "SIG_K1_Kd2odRv1YFWQVHHssG6n7qcH58cbnPb8hw1GaE51faqNUbCTzeoeKzKyCe4oTCKSST73qzPdcRuHn5KQkbDxStUsPBqNFf"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1cd91abc956c0000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570164f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d346262353730623239333362326633353466353733313435393961633166393062373934626263376166643636323238323331373038616334363339313463612d47463031627a4c6251516f5a413931656f7464662d313536393539373433392d5349475f4b315f4a767554333956624a35456b426e6e344854316479444b42766868716568795943717045354479427348546b6d796b616b41554b6153777351554a6e5a507463547a3561664c637847395a4e6b434b6478577448566d4e4e6d476e53435700",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "d",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-4bb570b2933b2f354f57314599ac1f90b794bbc7afd66228231708ac463914ca-GF01bzLbQQoZA91eotdf-1569597439-SIG_K1_JvuT39VbJ5EkBnn4HT1dyDKBvhhqehyYCqpE5DyBsHTkmykakAUKaSwsQUJnZPtcTz5afLcxG9ZNkCKdxWtHVmNNmGnSCW"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570164f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d346262353730623239333362326633353466353733313435393961633166393062373934626263376166643636323238323331373038616334363339313463612d47463031627a4c6251516f5a413931656f7464662d313536393539373433392d5349475f4b315f4a767554333956624a35456b426e6e344854316479444b42766868716568795943717045354479427348546b6d796b616b41554b6153777351554a6e5a507463547a3561664c637847395a4e6b434b6478577448566d4e4e6d476e534357"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 799,
        net_usage_words: 147,
        trx: {
          id:
            "ce1ad1508d8f16c13421e5f142b01a0536e94ae4c25ddf19fe6174fea3bb5b6d",
          signatures: [
            "SIG_K1_KYheySZRk5iuW9gk2MVV4Uyqdd9CSEqiPQotvG8Naoj3wPyySzXxY8oWkmP39Z7XtmSpfkZtQoNtRnEw4LjvkmZg7g2Z4g"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b7088c96f19c0cfab41fd9c03d2160540ac7e94c8c28d17b1a102d46778263bea65690dd75155f95b1918d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3433315a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333320454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333820454f53222c2263757272656e74416d6f756e74223a2234352e3539363020454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "8c96f19c0cfab41fd9c03d2160540ac7e94c8c28d17b1a102d46778263bea656",
                  username: "masterspirit",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.431Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0033 EOS",
                    wager: "0.0071 EOS",
                    payout: "0.0038 EOS",
                    currentAmount: "45.5960 EOS"
                  }
                },
                hex_data:
                  "8c96f19c0cfab41fd9c03d2160540ac7e94c8c28d17b1a102d46778263bea65690dd75155f95b1918d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3433315a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333320454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333820454f53222c2263757272656e74416d6f756e74223a2234352e3539363020454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1450,
        net_usage_words: 23,
        trx: {
          id:
            "946081faf1b294a7307c6964fe213c39a8eec4333ddb506f0ed7d034d0ff6c4f",
          signatures: [
            "SIG_K1_K2CbHjRDtkihVsNq2NHT7zc4VgMvSgdvx79jvZEPk3KWS4Jri3PbPJKAspGeerZjTedqczba5KWL2dN7Q9Arxs67MbPeht"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001a026a59a4d8331550000004044a3b6ba0170d5be0a53cda6c100000000a8ed323259709c20cb4a6643f8fa0315000000000006636f6d626174002016b15cb3a064248fa46dd57087e351a82c121e7a393940dec7cca4d0e9d57f0b5115f7e89b7283e9c0acfc4075dae75a4876ea92478f5e85d7a90f2db2c4113f00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "reveal2",
                authorization: [
                  {
                    actor: "sanguoserver",
                    permission: "active"
                  }
                ],
                data: {
                  from: "z11qgmqf42ib",
                  opid: 1377274,
                  op: "combat",
                  sig:
                    "SIG_K1_KXiWe4Th2jwXCSaseZmJG6Waz3BfrTXNUcpGNQJSQZEGxU6EEeE16cvr5NZJeHiTsGJ76S4QfJFvVBnT6GaN53dKqvRxAf"
                },
                hex_data:
                  "709c20cb4a6643f8fa0315000000000006636f6d626174002016b15cb3a064248fa46dd57087e351a82c121e7a393940dec7cca4d0e9d57f0b5115f7e89b7283e9c0acfc4075dae75a4876ea92478f5e85d7a90f2db2c4113f"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 968,
        net_usage_words: 49,
        trx: {
          id:
            "f2b6a068089ded766169bb359acdda50e893a1e54342d9dc7e0c1c9c7b4ebe2b",
          signatures: [
            "SIG_K1_K7iyYHTjaNGHs839ugr1sgrgXMs3Gw6FrXYdGzch7WiK5hL1FuTHf3TzNZeECoXuAR3hqsfRKudsRSnW9aFK7zk5aSXngL"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "cc278e5d1cd91abc956c000000000170dc3528aba3743c0080a4f4aa6c52d50170dc3528aba3743c00000000a8ed3232ab02000200000000000015111400010018302c31303830323235393033383132333337383232342c3005302c302c30bc01654a776c6a556b4f777a414952652f7931313767416176344b6c45586365783055746f7171307052376c3543574477426e7963326a436a7367384f45346832714d6e6f6d695135646538374377706e45595559686877664b734230536c76587a376573596a344c355a483477552f746d76426c564871356d362f4179506f324c386133634e622b665a376f55535265696345594f5033303474726d6d54463234566559614a456f376a71626b4b584f64735038424776347764773d3d3f3435303538363436323134323331393435383d3e7b73656564686173683a61646662343630653935646235356232393339643438303063343130363562637d00",
          transaction: {
            expiration: "2019-09-27T15:16:28",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bluebetcarib",
                name: "updateroom",
                authorization: [
                  {
                    actor: "bluebetcarib",
                    permission: "active"
                  }
                ],
                data: {
                  room_id: 512,
                  action_id: 1315093,
                  status: 1,
                  cur_ask: 0,
                  player_list: "0,10802259038123378224,0",
                  player_status: "0,0,0",
                  room_data:
                    "eJwljUkOwzAIRe/y117gAav4KlEXcex0Utoqq0pR7l5CWDwBnyc2jCjsg8OE4h2qMnomiQ5de87CwpnEYUYhhwfKsB0SlvXz7esYj4L5ZH4wU/tmvBlVHq5m6/AyPo2L8a3cNb+fZ7oUSReicEYOP304trmmTF24VeYaJEo7jqbkKXOdsP8BGv4wdw==",
                  memo:
                    "450586462142319458=>{seedhash:adfb460e95db55b2939d4800c41065bc}"
                },
                hex_data:
                  "000200000000000015111400010018302c31303830323235393033383132333337383232342c3005302c302c30bc01654a776c6a556b4f777a414952652f7931313767416176344b6c45586365783055746f7171307052376c3543574477426e7963326a436a7367384f45346832714d6e6f6d695135646538374377706e45595559686877664b734230536c76587a376573596a344c355a483477552f746d76426c564871356d362f4179506f324c386133634e622b665a376f55535265696345594f5033303474726d6d54463234566559614a456f376a71626b4b584f64735038424776347764773d3d3f3435303538363436323134323331393435383d3e7b73656564686173683a61646662343630653935646235356232393339643438303063343130363562637d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 211,
        net_usage_words: 24,
        trx: {
          id:
            "f3b3cd696fc5fe2b7aabdfccce759e0e077f8c2615e281a469b0211cfa202f3d",
          signatures: [
            "SIG_K1_JyE8YTRrU8TzmAC46hCMTmpTXUS9tR9nXWmjx9my2i7Aohfo4YhkXUQ3v96HY73UDcykuVvTUfSWydFytTimr6WKP6LHE1"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fd208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01404409250811ee3c00000000a8ed323263404409250811ee3c5a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a51764356383450574c6352575434505744625147447a50576e334c71303d00",
          transaction: {
            expiration: "2019-09-27T14:47:25",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr122151524",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr122151524",
                  content:
                    "1|hbM2CAMcdZ9xLmrlPlLvLqU5fJXlRlMPdZwoLlzle2MtCZQ0LmrlTAM0dZQvCV84PWLcRWT4PWDbQGDzPWn3Lq0="
                },
                hex_data:
                  "404409250811ee3c5a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a51764356383450574c6352575434505744625147447a50576e334c71303d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 286,
        net_usage_words: 12,
        trx: {
          id:
            "77b17e34b842ee2d5d546d2b7396dbc9bb33a5a17eef8b905b487cb6ffc73701",
          signatures: [
            "SIG_K1_KYMCwEW2r1nbbGAM238UecwABR2P6ipyx8JudDRGKL6fGVy2nFE5cEJ5ETeDyqUySP54hukmsw2xXJay9vbUwo4Dk1MY4C"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1dd9a3e5755d0000000001805c3cba7695b89a00000000a4a997ba0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55581,
            ref_block_prefix: 1568007587,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "refund",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 223,
        net_usage_words: 12,
        trx: {
          id:
            "805aa011a11fe8f2553b7eb10a913c9437e2cdb29fc246b8a45fa30e8ee93f9c",
          signatures: [
            "SIG_K1_KZ8bm2eCiNocnzFt5xnoFJCE2M28fpVjk9Ey9nYV3bDpA6p6L9SoSkZMUmtemwEtnELyyserrAh7ko7xdN3inatSfMfxt2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1dd9a3e5755d0000000001805c3cba7695b89a004043d91c95cccd0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55581,
            ref_block_prefix: 1568007587,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "tradebatch",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 334,
        net_usage_words: 26,
        trx: {
          id:
            "516b581e5b2f9afdedf82dd29ba0d2672490bf9ce412fb63bdbea98419fa89a8",
          signatures: [
            "SIG_K1_K4py2H9iiNnFmruznEdEPNbFXLFXyC8TBAuYmwdPnpbbtiFEhfm8gpZVK83ZXcgX52Z7QxxjoYak7W9Eshnre8pnTCMExC"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "00218e5dd1d7b03c5a970000000100408c7a02ea3055000000000085269d0004033535340110ae8a46256c98da00d2d4f446a3b6ba0110ae8a46256c98da00000000a8ed32325bc54f000000000000087461626c652d303503d9dc0420c495d3e78e299a2a38bdb9c6bb6f721d848a18394002a2db4c82362c3044ccf8532d1d2d3b0007000204e299a23304e299a33404000304e299a14a04e299a23404e299a04b00",
          transaction: {
            expiration: "2019-09-27T14:47:28",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [
              {
                account: "eosio.null",
                name: "nonce",
                authorization: [],
                data: "03353534"
              }
            ],
            actions: [
              {
                account: "vegasdealer1",
                name: "revealround",
                authorization: [
                  {
                    actor: "vegasdealer1",
                    permission: "active"
                  }
                ],
                data: {
                  game_id: 20421,
                  dealer_name: "table-05",
                  block_num: 81582339,
                  block_id_complex:
                    "c495d3e78e299a2a38bdb9c6bb6f721d848a18394002a2db4c82362c3044ccf8",
                  hash_result: 756886867,
                  round_num: 59,
                  player: {
                    score: 7,
                    pair: 0,
                    cards: ["♢3", "♣4"]
                  },
                  banker: {
                    score: 4,
                    pair: 0,
                    cards: ["♡J", "♢4", "♠K"]
                  }
                },
                hex_data:
                  "c54f000000000000087461626c652d303503d9dc0420c495d3e78e299a2a38bdb9c6bb6f721d848a18394002a2db4c82362c3044ccf8532d1d2d3b0007000204e299a23304e299a33404000304e299a14a04e299a23404e299a04b"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 941,
        net_usage_words: 24,
        trx: {
          id:
            "9ebb12789e84967be9f654ce19daf4b45a3619dfa23f82dd6abc043da8ffddd3",
          signatures: [
            "SIG_K1_JutWWUnB7u7F1xTprNsQznBMTg87toUjdoZsfDUYxAWb7gU1oMU1gbhpd6CzR6HuCJDVsK92pwgYJGzdaYfjA5amNYDAK7"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ce208e5dd1d7b03c5a970000000001100c728c46afa09710cdbc2a7795a6c201308dcc9856afa09700000000a8ed323264001f19ba54684350b1e026386f8505a6af5d5a23ef85e0fa3204673a1e80496aa64173b7f9a4de5d539faf4447094f71796b1cef329292130fedcb079de936e97793212042a7c7a76910940000000000e94c441042286488c0a6f1081042286488c0a6f100",
          transaction: {
            expiration: "2019-09-27T14:46:38",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "mykeylogica1",
                name: "sendexternal",
                authorization: [
                  {
                    actor: "mykeypostman",
                    permission: "active"
                  }
                ],
                data: {
                  sig:
                    "SIG_K1_JxczzRppc7zNmEjVSQYmG3v58KuLYNCQZhrTUVcageg6Pm4zHETfqme3quQgEU18k21VMyaAZXcRJS3N4NyJR1mBfdPRLc",
                  data:
                    "2042a7c7a76910940000000000e94c441042286488c0a6f1081042286488c0a6f1"
                },
                hex_data:
                  "001f19ba54684350b1e026386f8505a6af5d5a23ef85e0fa3204673a1e80496aa64173b7f9a4de5d539faf4447094f71796b1cef329292130fedcb079de936e97793212042a7c7a76910940000000000e94c441042286488c0a6f1081042286488c0a6f1"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1364,
        net_usage_words: 147,
        trx: {
          id:
            "0f6a64a3640364b50835c713a3195e38aa2c35cc26fef724e685a2266e6f9bb0",
          signatures: [
            "SIG_K1_JwDyscC4HMaUDVJPfPiRvfBT5yijtsJ3rVhh6VBUG3ibcDns7BFRKdVWPpBy2HLiFHyyGnNYfqrhN28ufT34fyrM4aPSsV"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d17d9d0e8a51f0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b708e0fb5533713b0eba02588f0112a909c27aa2227873de16977dd668020bf677d410420801a19a31558d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3437365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030363520454f53222c227761676572223a22302e3031333920454f53222c227061796f7574223a22302e3030373420454f53222c2263757272656e74416d6f756e74223a2239302e3232303320454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "e0fb5533713b0eba02588f0112a909c27aa2227873de16977dd668020bf677d4",
                  username: "eostpcc11111",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.476Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0065 EOS",
                    wager: "0.0139 EOS",
                    payout: "0.0074 EOS",
                    currentAmount: "90.2203 EOS"
                  }
                },
                hex_data:
                  "e0fb5533713b0eba02588f0112a909c27aa2227873de16977dd668020bf677d410420801a19a31558d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3437365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030363520454f53222c227761676572223a22302e3031333920454f53222c227061796f7574223a22302e3030373420454f53222c2263757272656e74416d6f756e74223a2239302e3232303320454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 576,
        net_usage_words: 18,
        trx: {
          id:
            "2684b644a4c7c06e4669ea54d73c6ad3037976cf5455cf7365408249d997e64f",
          signatures: [
            "SIG_K1_K3AWAQrVA7XZdJrymNhNT97sSr3BEWp4XjMhQusazqfbEM64k5c7FrjeqE23RzcLEF8hQkzWv3d4tcmhNSCbvhkFMcsB7Z"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ed218e5dd1d7b03c5a9700000000010000000000ea305500003f2a1ba6a24a01a0aad9793a19294500000000a8ed323231a0aad9793a192945a0aad9793a192945d00700000000000004454f5300000000881300000000000004454f53000000000000",
          transaction: {
            expiration: "2019-09-27T14:51:25",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio",
                name: "delegatebw",
                authorization: [
                  {
                    actor: "coolmintvape",
                    permission: "active"
                  }
                ],
                data: {
                  from: "coolmintvape",
                  receiver: "coolmintvape",
                  stake_net_quantity: "0.2000 EOS",
                  stake_cpu_quantity: "0.5000 EOS",
                  transfer: 0
                },
                hex_data:
                  "a0aad9793a192945a0aad9793a192945d00700000000000004454f5300000000881300000000000004454f530000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 340,
        net_usage_words: 15,
        trx: {
          id:
            "263840d6ef448ed433adb02349194a6f9dc63e5ba7d23acbb90d378ef131512a",
          signatures: [
            "SIG_K1_JyCmJ545rezms7EBLyNFx5EqQe8W85SLrSyqVTKgUqgYUH3791bYfCGoUXSYK49ehCDmzC1QQc1UfYDA65svzpNEzrxsSX"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f9208e5dc5d77f14d5aa000000000100d80169aae4b64b0000000000054dc6015033a0a621d7be8b00000000a8ed3232185033a0a621d7be8b45ae010000000000044247000000000000",
          transaction: {
            expiration: "2019-09-27T14:47:21",
            ref_block_num: 55237,
            ref_block_prefix: 2866091135,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "dividend.bg",
                name: "stake",
                authorization: [
                  {
                    actor: "lizhichao.tp",
                    permission: "active"
                  }
                ],
                data: {
                  player: "lizhichao.tp",
                  quantity: "11.0149 BG"
                },
                hex_data: "5033a0a621d7be8b45ae0100000000000442470000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 338,
        net_usage_words: 69,
        trx: {
          id:
            "eed8e4d28faa1f95e26d66142059936cf5462d8ee33b8d33837cb96b26692219",
          signatures: [
            "SIG_K1_K9278XXF4vwtkdQPq8N69rkMSNMP4EqXqA2zNFpxi9ouDGjZpPZsjSxZhZukpbnkWSTejPVWt9VUm3pVm8ys7qC1bRiRbZ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "cd278e5d1cd91abc956c000000000190cd4527aba3743c0080a4f4aa6c52d50190cd4527aba3743c00000000a8ed3232cb030200000000000000043b2c00c3ea28990100f002654a7831554e7475677a414d2f52667631512b596b44546856366f2b63456b4244636a57774470573764396e7a4a696d6153694b485a2b4c6b2f67424265517051675535495a523874733461783469485045476f476466476161634e5759514f38764e6a74554254444c345030667351435242615562502f66506e45546648557a6b3049523177336c63734235325076753662396e79316e37352b584f595a376a41662b6f727656683733484d425948725a753057595a5168317448365947394c385a702b734e647044787a476e6838323743305053474d496e71562b4d494b516f304b435231764a5976774a4a566a687043534e54436b4a4a4e6b3956316245653734696b677a6b6750743274336c666937596c76376c5736506d31305a35574d726634672f4e556b7753372b7559722b5a6157364e56346c575a4747557a5a3179744b6c636c4e724f3159737562694a664e2f7736354a5733544c445549487875577958692b414573676b314d3d46323536393539353538373d3e7b626c6f636b3a38313538323432362c73656564686173683a62663666643836353330653362303633383439363964336339633038343864337d00",
          transaction: {
            expiration: "2019-09-27T15:16:29",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bluebetbcrat",
                name: "updateroom",
                authorization: [
                  {
                    actor: "bluebetbcrat",
                    permission: "active"
                  }
                ],
                data: {
                  room_id: 2,
                  action_id: 2898692,
                  round_id: 2569595587,
                  status: 1,
                  cid_list: "",
                  room_data:
                    "eJx1UNtugzAM/Rfv1Q+YkDThV6o+cEkBDcjWwDpW7d9nzJimaSiKHZ+Lk/gBBeQpQgU5IZR8ts4ax4iHPEGoGdfGaacNWYQO8vNjtUBTDL4P0fsQCRBaUbP/fPnETfHUzk0IR1w3lcsB52Pvu6b9ny1n75+XOYZ7jAf+orvVh73HMBYHrZu0WYZQh1tH6YG9L8Zp+sNdpDxzGnh827C0PSGMInqV+MIKQo0KCR1vJYvwJJVjhpCSNTCkJJNk9V1bEe74ikgzkgPt2t3lfi7Ylv7lW6Pm10Z5WMrf4g/NUkwS7+uYr+ZaW6NV4lWZGGUzZ1ytKlclNrO1YsubiJfN/w65JW3TLDUIHxuWyXi+AEsgk1M=",
                  memo:
                    "2569595587=>{block:81582426,seedhash:bf6fd86530e3b06384969d3c9c0848d3}"
                },
                hex_data:
                  "0200000000000000043b2c00c3ea28990100f002654a7831554e7475677a414d2f52667631512b596b44546856366f2b63456b4244636a57774470573764396e7a4a696d6153694b485a2b4c6b2f67424265517051675535495a523874733461783469485045476f476466476161634e5759514f38764e6a74554254444c345030667351435242615562502f66506e45546648557a6b3049523177336c63734235325076753662396e79316e37352b584f595a376a41662b6f727656683733484d425948725a753057595a5168317448365947394c385a702b734e647044787a476e6838323743305053474d496e71562b4d494b516f304b435231764a5976774a4a566a687043534e54436b4a4a4e6b3956316245653734696b677a6b6750743274336c666937596c76376c5736506d31305a35574d726634672f4e556b7753372b7559722b5a6157364e56346c575a4747557a5a3179744b6c636c4e724f3159737562694a664e2f7736354a5733544c445549487875577958692b414573676b314d3d46323536393539353538373d3e7b626c6f636b3a38313538323432362c73656564686173683a62663666643836353330653362303633383439363964336339633038343864337d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 990,
        net_usage_words: 21,
        trx: {
          id:
            "8635a63f2aee06e9cfc8196342be04dce98aab97aa69788cca90e1e00824e851",
          signatures: [
            "SIG_K1_K18K2zu1xjzvAy9kdjJCbe1UXGqsKWf6LwNBesmbqjY6FWkS3dTc9kjohgNXV8LRg7QaFrEbhLpftsRPS7xhNCkcgsTfM4"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d16d921efb9b00000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94880d2c4de1843efb5d6c3476c1040d1ace31bdd87992c1a1d7e1979e7710c44b70000c88db915a33e405da6894d07b33a00a6823403ea3055170000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55574,
            ref_block_prefix: 2964975393,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "80d2c4de1843efb5d6c3476c1040d1ace31bdd87992c1a1d7e1979e7710c44b7",
                  gameName: "bullfight",
                  username: "betkingdotio",
                  contract: "eosio.token",
                  payoutAsset: "0.0023 EOS"
                },
                hex_data:
                  "80d2c4de1843efb5d6c3476c1040d1ace31bdd87992c1a1d7e1979e7710c44b70000c88db915a33e405da6894d07b33a00a6823403ea3055170000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 651,
        net_usage_words: 13,
        trx: {
          id:
            "5deeac5c8f01e4d3a76bda4ad07fa4bd886d7fe6c98fa72b4591e2f0bf66d42a",
          signatures: [
            "SIG_K1_JwXzv28tYKK4n3rFiPe6a7c5bzgA1DnXPn2Nb1Wtwd8tQEYBYTmpJoFESbuAgBCjiyHEPQR5fMge8tCMhkeFLRJkmKTPLm"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e2208e5d1ed9112ce8270000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a508137210040000000000",
          transaction: {
            expiration: "2019-09-27T14:46:58",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 68186643
                },
                hex_data: "1372100400000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 608,
        net_usage_words: 36,
        trx: {
          id:
            "3b90be8965df70955c2bc5b43b40094830fd3348389703287aebcf1bc8de2849",
          signatures: [
            "SIG_K1_KayHXBkfSV5wjJYAxWJW6tYBffqibq6PKeVckFqvtNPUMN8uCoWBRqVTPTZUowu6XbpgYUk9bq2N2L5oyT8c195uiBTohM"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "5d2c8e5d1bd99c46613a000000000100a6823403ea3055000000572d3ccdcd0190e9a137aba3743c00000000a8ed3232c20190e9a137aba3743c3035a463ecec95d2010000000000000004454f5300000000a001e6af8fe4b887e882a1e58886e7baa2e4bf9de5ba95203e32454f53efbc8ce4bd8ee4bbb7e4b9b0e585a5efbc8ce99a8fe697b6e58d96e587baefbc8ce69c80e9ab98e58886e7baa2efbc815065722031302c2030303020424c5545207368617265206f66206469766964656e6473203e2032454f53efbc8c476f20746f20e380904f5443e380912d2d2d3e202068747470733a2f2f626c75656265742e6f6e6500",
          transaction: {
            expiration: "2019-09-27T15:35:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "bluebetrobot",
                    permission: "active"
                  }
                ],
                data: {
                  from: "bluebetrobot",
                  to: "ueeytv33okun",
                  quantity: "0.0001 EOS",
                  memo:
                    "每万股分红保底 >2EOS，低价买入，随时卖出，最高分红！Per 10, 000 BLUE share of dividends > 2EOS，Go to 【OTC】--->  https://bluebet.one"
                },
                hex_data:
                  "90e9a137aba3743c3035a463ecec95d2010000000000000004454f5300000000a001e6af8fe4b887e882a1e58886e7baa2e4bf9de5ba95203e32454f53efbc8ce4bd8ee4bbb7e4b9b0e585a5efbc8ce99a8fe697b6e58d96e587baefbc8ce69c80e9ab98e58886e7baa2efbc815065722031302c2030303020424c5545207368617265206f66206469766964656e6473203e2032454f53efbc8c476f20746f20e380904f5443e380912d2d2d3e202068747470733a2f2f626c75656265742e6f6e65"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 612,
        net_usage_words: 23,
        trx: {
          id:
            "cbe914378e814fb13b7e60a5f6e07dcc58a50d10b05eedf82a90a6ce5146ad20",
          signatures: [
            "SIG_K1_K72fAzNsMGpkmhfdbif7bN58JKMGDhV2CVtxfYz9PBBncWzDx8kEZ3yzEB59x36ABmz1agxj1yMUGGvMkGZVS9FE3BGfzv"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f0218e5d1ed9112ce82700000000013015a4f9e8887263000000572d3ccdcd0110e034e7e888726300000000a8ed32325510e034e7e8887263309d4ce6e888726390940d00000000000447485400000000347472616e736665723a2030783931326163613738336364633630626566346535613339373337316432643964346263383034663500",
          transaction: {
            expiration: "2019-09-27T14:51:28",
            ref_block_num: 55582,
            ref_block_prefix: 669527057,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "ghtclubtoken",
                name: "transfer",
                authorization: [
                  {
                    actor: "ghtclubbank1",
                    permission: "active"
                  }
                ],
                data: {
                  from: "ghtclubbank1",
                  to: "ghtclubadmin",
                  quantity: "89.0000 GHT",
                  memo: "transfer: 0x912aca783cdc60bef4e5a397371d2d9d4bc804f5"
                },
                hex_data:
                  "10e034e7e8887263309d4ce6e888726390940d00000000000447485400000000347472616e736665723a20307839313261636137383363646336306265663465356133393733373164326439643462633830346635"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1499,
        net_usage_words: 29,
        trx: {
          id:
            "53b30e412803457cba5299b349eb73d1c9ace04eeba845a26a6ca2374e94f4c9",
          signatures: [
            "SIG_K1_JykbL3qhgbjeq6poxDFzj2LvYNfrBQ9UCNXPkYDMVxzn1wDW1XoqStmocc3i5vqP2A1RS5s2TB6koUV6WVtZyWcwrUY8Wn"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ce208e5dd1d7b03c5a970000000001100c728c46afa09710cdbc2a7795a6c201308dcc9856afa09700000000a8ed32328401001f43e83eb5be87d64acb6746c549d4d7c4ab4e03e087e8a1625a4aae432e94a8895291c21bf9abea8366a0c55a675f72699e5b3c92b9fb677a11f9c676b24e488741a026a59a4d833155000000201b19a3c21086084384e4b649281086084384e4b649ba150000000000006c0500000000000004454f53000000000cd9dc043ecda18400",
          transaction: {
            expiration: "2019-09-27T14:46:38",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "mykeylogica1",
                name: "sendexternal",
                authorization: [
                  {
                    actor: "mykeypostman",
                    permission: "active"
                  }
                ],
                data: {
                  sig:
                    "SIG_K1_K494RKPtC5ZwiYtTfT6xhxCZbrFDBh42m28d8FnzvJSPV5ZuKySZaJheRHMA48g1pxBT1Vqav4U171GBe4sfenMCYoZefH",
                  data:
                    "a026a59a4d833155000000201b19a3c21086084384e4b649281086084384e4b649ba150000000000006c0500000000000004454f53000000000cd9dc043ecda184"
                },
                hex_data:
                  "001f43e83eb5be87d64acb6746c549d4d7c4ab4e03e087e8a1625a4aae432e94a8895291c21bf9abea8366a0c55a675f72699e5b3c92b9fb677a11f9c676b24e488741a026a59a4d833155000000201b19a3c21086084384e4b649281086084384e4b649ba150000000000006c0500000000000004454f53000000000cd9dc043ecda184"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd91fd8eebf36d35bcb15d73bf60b936c442804e25637097146b315c0a4cc",
    block_num: 81582367,
    ref_block_prefix: 365648851
  },
  {
    timestamp: "2019-09-27T14:46:28.000",
    producer: "eoseouldotio",
    confirmed: 0,
    previous:
      "04dcd91de8b3442fa3e5755dcf9e601ba9b7aece012fd6dce1c5fb142dab9e14",
    transaction_mroot:
      "04ff593656e6730d29e3681bff977964ec12a23d5b1a7d32b06b066540edeb8e",
    action_mroot:
      "d4ecf7007fef9d4364a7594ba05f928cd430b16e2ba1022866d170f14a5f4594",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_Jv6VgfTtm5AUMdQnvnTnCEGNsB2bRhQxDn73T2Z8PWKNHaj8h9V8XrcNF2ZpnspSNLuYa1bC6WZPqXuByVgJXoQuiqW6SB",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 100,
        net_usage_words: 0,
        trx: "6d80feb87e774fadf2924a12e54463b61ca75204f4b84c7950c5cce68e3f834b"
      },
      {
        status: "executed",
        cpu_usage_us: 183,
        net_usage_words: 0,
        trx: "fe3b81c9c7d1db5ce4dd0296a5b89b8bc32f59099079c7c4fbc05f2c025fb5a5"
      },
      {
        status: "executed",
        cpu_usage_us: 274,
        net_usage_words: 6,
        trx: "cc43dd25d02838d5f5f8b8b369fc120fd0718987e98bf5478c70bc35a15147de"
      },
      {
        status: "executed",
        cpu_usage_us: 180,
        net_usage_words: 6,
        trx: "392b0493b7d0bb54dfee614627406784351b0eb39a705296376871123ad30e66"
      },
      {
        status: "executed",
        cpu_usage_us: 184,
        net_usage_words: 6,
        trx: "0973f95735e0a79a933c0ea8cdee0e8f842a9ece436fb01a0ab01d186917f1a2"
      },
      {
        status: "executed",
        cpu_usage_us: 100,
        net_usage_words: 0,
        trx: "8853e5ee49d15905f9e382a96727520a9f1116d6802590fbfdfd25b6bffa35ad"
      },
      {
        status: "executed",
        cpu_usage_us: 270,
        net_usage_words: 0,
        trx: "c34f8afcf1466948f67a28d60c1e78cdbc99a58b08334a8dcf12299ae8b5c170"
      },
      {
        status: "executed",
        cpu_usage_us: 597,
        net_usage_words: 17,
        trx: {
          id:
            "1a0598d970e0aaf027e0ed5bdfccac77de42253ef959137a9aee0fbc9efd69d9",
          signatures: [
            "SIG_K1_KUqdcf7dfTMQwH9m63QH4JHpA5tctthe6CGLQsyCpDyRNi2ZHJXRMkSqjoNnCjget6i21ZJfhBmJijpXTr2Bn7BrmuRRuE"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d18d998b5aebc00000000010080422e01305dc5000000572d3ccdcd011042086c1a3ea98b00000000a8ed32322c1042086c1a3ea98b00147209000f918e1027000000000000045350494e0000000b616374696f6e3a7370696e00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55576,
            ref_block_prefix: 3165566360,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "spin..dice",
                name: "transfer",
                authorization: [
                  {
                    actor: "lionwang1111",
                    permission: "active"
                  }
                ],
                data: {
                  from: "lionwang1111",
                  to: "lucky..dice",
                  quantity: "1.0000 SPIN",
                  memo: "action:spin"
                },
                hex_data:
                  "1042086c1a3ea98b00147209000f918e1027000000000000045350494e0000000b616374696f6e3a7370696e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1885,
        net_usage_words: 25,
        trx: {
          id:
            "9e41d336b30ca31bcb8a9609df5fd80945de5b3b9941477b0a178bf6618e8fba",
          signatures: [
            "SIG_K1_KYL8dvSZv7ZQqWRy556y8iGeNm7L4BP7TXRrz8cmf8Aw4sanDNiP4w3LHpAV9oZWEGwNHHHjCsbkQe3Czp4242DBHN12J6"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d14d982979efb0000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9686e5cab1577ee9640f99d187e4972cfd9fd950099293d8c96e8230a4a9862ea920000c88db915a33eb0ca7d086f48e36f00a6823403ea30550e0000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55572,
            ref_block_prefix: 4221474690,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "6e5cab1577ee9640f99d187e4972cfd9fd950099293d8c96e8230a4a9862ea92",
                  gameName: "bullfight",
                  username: "hzlokvscjr5f",
                  contract: "eosio.token",
                  betAsset: "0.0014 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "6e5cab1577ee9640f99d187e4972cfd9fd950099293d8c96e8230a4a9862ea920000c88db915a33eb0ca7d086f48e36f00a6823403ea30550e0000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3445,
        net_usage_words: 25,
        trx: {
          id:
            "2579f1dd298e460f2e4e20e97c35c854b8071b2c2ad34bc8b86fea234a18c4e9",
          signatures: [
            "SIG_K1_KhC43LLEjWU7GWwKZ85WRKpN2BMUr2CBXmPKZtuVnKpVGCu84cEyCwe8Z1kWGxtHnHDXWkPUwnaTsMRRqW7YzZC5wyL9nN"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c96829a28b149089b632bfcec7ca07ff6902b8d7c969af78bf1eecc605a4a9af163f0000c88db915a33ec0e9545767bd829700a6823403ea3055b80b00000000000004454f5300000000160000000000000004454f5300000000a09861fe48938569073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "29a28b149089b632bfcec7ca07ff6902b8d7c969af78bf1eecc605a4a9af163f",
                  gameName: "bullfight",
                  username: "my1futurenow",
                  contract: "eosio.token",
                  betAsset: "0.3000 EOS",
                  houseEdgeAsset: "0.0022 EOS",
                  referer: "ha2tambygage",
                  memo: "1767816"
                },
                hex_data:
                  "29a28b149089b632bfcec7ca07ff6902b8d7c969af78bf1eecc605a4a9af163f0000c88db915a33ec0e9545767bd829700a6823403ea3055b80b00000000000004454f5300000000160000000000000004454f5300000000a09861fe489385690731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3390,
        net_usage_words: 25,
        trx: {
          id:
            "71381056a8c14fc32b675439fa1a9fd9da6f0b8e4c4f299c913d5078e4358aba",
          signatures: [
            "SIG_K1_JyXZvzZNwvZffUTndM57CxAeVXs5MEogEyffgGjjruJ6SvN9CiHzB9d5fNNP7yoKAXK5LLR8Rx7MvcD9Ju414X6MRnLPZ4"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968d2e1fb7835230f56ba3f66990e8f49eb67eab01cc8953ceba561e482619cd28d0000c88db915a33e104228458440e9ef00a6823403ea3055282300000000000004454f5300000000160000000000000004454f5300000000408608648840e9ef073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "d2e1fb7835230f56ba3f66990e8f49eb67eab01cc8953ceba561e482619cd28d",
                  gameName: "bullfight",
                  username: "xzoo11255111",
                  contract: "eosio.token",
                  betAsset: "0.9000 EOS",
                  houseEdgeAsset: "0.0022 EOS",
                  referer: "xzoo12341234",
                  memo: "1767816"
                },
                hex_data:
                  "d2e1fb7835230f56ba3f66990e8f49eb67eab01cc8953ceba561e482619cd28d0000c88db915a33e104228458440e9ef00a6823403ea3055282300000000000004454f5300000000160000000000000004454f5300000000408608648840e9ef0731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 671,
        net_usage_words: 21,
        trx: {
          id:
            "dc83eaee73af2cddd96c03c83b67e15edef2287780207b1f2ea3c580c25dde24",
          signatures: [
            "SIG_K1_KeJDEC95TSLfjKpr1iFwB3aAo1C8dJHb7kHYCUbVdWoUEJujCSNReDKMupGLKsZwVN61gSA8BgkhFzBazo7Qzc2hfgdrQ3"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d14d982979efb0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9487bfefda9cb87abef087d53d9d38d5cb4d926863ae64e6e80939649edc73f4e480000c88db915a33e70efbdf75295b19700a6823403ea3055130000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55572,
            ref_block_prefix: 4221474690,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "7bfefda9cb87abef087d53d9d38d5cb4d926863ae64e6e80939649edc73f4e48",
                  gameName: "bullfight",
                  username: "mysteorrrrrr",
                  contract: "eosio.token",
                  payoutAsset: "0.0019 EOS"
                },
                hex_data:
                  "7bfefda9cb87abef087d53d9d38d5cb4d926863ae64e6e80939649edc73f4e480000c88db915a33e70efbdf75295b19700a6823403ea3055130000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 195,
        net_usage_words: 24,
        trx: {
          id:
            "c41e72be9df22f99a2320ae9e34ca8b06f2a0e1b029097ec332e7cc715479846",
          signatures: [
            "SIG_K1_KahCZMvpsYv6FhQq5sKreJHGBd2zVU11B2wnGYToCEZLpYw9nhMHMWnfweQPa3H4yrAVNydPabQW89WvWoMTAhcGaFXXBD"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fc208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba0110c410840441ee3c00000000a8ed32326310c410840441ee3c5a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a5176435638345057547a516348355147446150474461506d48314c71303d00",
          transaction: {
            expiration: "2019-09-27T14:47:24",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr421442321",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr421442321",
                  content:
                    "1|hbM2CAMcdZ9xLmrlPlLvLqU5fJXlRlMPdZwoLlzle2MtCZQ0LmrlTAM0dZQvCV84PWTzQcH5QGDaPGDaPmH1Lq0="
                },
                hex_data:
                  "10c410840441ee3c5a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a5176435638345057547a516348355147446150474461506d48314c71303d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 444,
        net_usage_words: 14,
        trx: {
          id:
            "4e0c04839b3ffdfa01344900df1bdd2f05e78b349c0a173bce20650cd11fc291",
          signatures: [
            "SIG_K1_KcsNkdHM6rwEVvCqczQGFbAZS6QbjQDxPMWo3CmY1sDWD5fTq9GbN8Xhd1W2RDKNKZesqggnqVFX1BdidUDSPE4FMHj8pC"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f9208e5d0fd9e82abd80000000000180f0a519a98ae9ad0000002045a70f4d01e02172dbec4b693500000000a8ed323214f7ff0a00000000000269000000000000c800000000",
          transaction: {
            expiration: "2019-09-27T14:47:21",
            ref_block_num: 55567,
            ref_block_prefix: 2159880936,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "prospectorsc",
                name: "dobuild",
                authorization: [
                  {
                    actor: "apoorvavicky",
                    permission: "active"
                  }
                ],
                data: {
                  loc_id: 720887,
                  worker_id: 26882,
                  duration: 200
                },
                hex_data: "f7ff0a00000000000269000000000000c8000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 2853,
        net_usage_words: 45,
        trx: {
          id:
            "3adf3bf3b67d78c6ef83e1fec4886d81cb748311b011192db6c5d80cffcec30b",
          signatures: [
            "SIG_K1_KAAv5n9f7TeSBuTm1TBmFqB4giBhJjbvxGkp6Fdm8Lyo1ZQeSNZHgtXibsoFBBemEsqvP7zpe9sQetYyTQ9z9KKFoWqiwK"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000005805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000d72a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000ee2a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000d92a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000b12a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000f22a9106000000009015bc46b249a1e60200",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176983,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000d72a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110177006,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000ee2a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176985,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000d92a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176945,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000b12a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110177010,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000f22a9106000000009015bc46b249a1e602"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 562,
        net_usage_words: 16,
        trx: {
          id:
            "97ffbdf9c46fa8ab2eb5f372b1a08909f88d6df82e379f51f7ad54deb57b9d88",
          signatures: [
            "SIG_K1_Kjk3Ze5vARwJ5X1SgLfTtyJsFxs6ztaNp7EmcdPzPRvfKLTFFo41c81DkkD9TKFfdCyZ6nsBH5fZUVzNunQYJNHiw1A9XR"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a97000000000180a9c2ab3a4d7175000000572d3ccdcd0110c255d3494d717500000000a8ed32322210c255d3494d7175308453dcb5cfa6e16da97e0100000000084950534f000000013500",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "ipsouipfseos",
                name: "transfer",
                authorization: [
                  {
                    actor: "ipsouminer11",
                    permission: "active"
                  }
                ],
                data: {
                  from: "ipsouminer11",
                  to: "wangzhiwei23",
                  quantity: "0.25078125 IPSO",
                  memo: "5"
                },
                hex_data:
                  "10c255d3494d7175308453dcb5cfa6e16da97e0100000000084950534f0000000135"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 297,
        net_usage_words: 13,
        trx: {
          id:
            "bca49fcae237fb6dabdd4f5db188d36317010fb69d1f79b65e0c343956b1b22c",
          signatures: [
            "SIG_K1_K54MBipy26irRv3znRhYKY1FA4ZsNadNDd4DZ7cHPVx5Wes4a8cu8V9QZuMvb1jZKr4ptT4wYhmon53gFY6sHuFPSVjXHa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a5081d2ada030000000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 64629277
                },
                hex_data: "1d2ada0300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 714,
        net_usage_words: 147,
        trx: {
          id:
            "98509e7e08448e75920efe877679677546e72a688e489f5fea93d5433e21ec59",
          signatures: [
            "SIG_K1_JzB3SuxCMXevzeGNKmeD8ge4PkF79sVPx4zG6ubVMR6odHRhFgt65CVCyZxMe3uHp128nYP9RXsNkmVU8TZYjBK2PVixbQ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b7083aed5ceb9a684898b5d50a3ae250c17695746b82333373afc80768dab282c2b610d8669b6db6d90e8d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3434305a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333320454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333820454f53222c2263757272656e74416d6f756e74223a2234352e3730393120454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "3aed5ceb9a684898b5d50a3ae250c17695746b82333373afc80768dab282c2b6",
                  username: "1vgvgvgvgvg1",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.440Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0033 EOS",
                    wager: "0.0071 EOS",
                    payout: "0.0038 EOS",
                    currentAmount: "45.7091 EOS"
                  }
                },
                hex_data:
                  "3aed5ceb9a684898b5d50a3ae250c17695746b82333373afc80768dab282c2b610d8669b6db6d90e8d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3434305a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030333320454f53222c227761676572223a22302e3030373120454f53222c227061796f7574223a22302e3030333820454f53222c2263757272656e74416d6f756e74223a2234352e3730393120454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 814,
        net_usage_words: 21,
        trx: {
          id:
            "7378a0872c77011403d3050d389a1d15ef67b959bc4343c46d5f2251f36382a6",
          signatures: [
            "SIG_K1_K9s29KqgVvpVkEocDhosAyFPA5C6P8R4D5eixyEtncmAW1PqMJrY1Y2kg3GfgrzZfyE549KLpQAoKMkvT6QMHgERCaW7qD"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94891e83227313baaac560f60862084010f08dc84fb61dcff23a61e8ed45cbae9da0000c88db915a33ea09861ff4d9b876500a6823403ea3055290000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "91e83227313baaac560f60862084010f08dc84fb61dcff23a61e8ed45cbae9da",
                  gameName: "bullfight",
                  username: "gq3tqnjzgage",
                  contract: "eosio.token",
                  payoutAsset: "0.0041 EOS"
                },
                hex_data:
                  "91e83227313baaac560f60862084010f08dc84fb61dcff23a61e8ed45cbae9da0000c88db915a33ea09861ff4d9b876500a6823403ea3055290000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 684,
        net_usage_words: 147,
        trx: {
          id:
            "ef63951d701f2253d6034e5299b3e81208a7cb151f5deff35d021d0c7c72e4ca",
          signatures: [
            "SIG_K1_JwPPty8U67Ay9myYoeN1wAx7d41bKn8nZK1jQmnqcjmnLLvMbaTQYcma5L2tW21j2yrmCafNavCbkpmbVZ9vJ3NmkS7Zon"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b708962976d35a61899d84015c53756e88a22755ac001683cbbbccef8407373989f770efbdf75295b1978d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3431345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030313720454f53222c227761676572223a22302e3030333620454f53222c227061796f7574223a22302e3030313920454f53222c2263757272656e74416d6f756e74223a2232332e3237333120454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "962976d35a61899d84015c53756e88a22755ac001683cbbbccef8407373989f7",
                  username: "mysteorrrrrr",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.414Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0017 EOS",
                    wager: "0.0036 EOS",
                    payout: "0.0019 EOS",
                    currentAmount: "23.2731 EOS"
                  }
                },
                hex_data:
                  "962976d35a61899d84015c53756e88a22755ac001683cbbbccef8407373989f770efbdf75295b1978d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3431345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030313720454f53222c227761676572223a22302e3030333620454f53222c227061796f7574223a22302e3030313920454f53222c2263757272656e74416d6f756e74223a2232332e3237333120454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1278,
        net_usage_words: 147,
        trx: {
          id:
            "bfad27e6c50b3060fd40d417c55a7548f5d9c1635f935ccf7413369f137c77b1",
          signatures: [
            "SIG_K1_Jwp8z8chdB1Z8Dp2KZuC5pgVoKKSXCGtqRhtxjzPbMSKFUqVaNcvG6dLrHVPnQpHaCZPR1ssr1c9skbJp4FSVLqZJdnERW"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b708ad9f788faf901554d5e7cd3c4e8f96cac9de23306763c49963168086045e4aab405da6894d07b33a8d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3432325a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030323120454f53222c227761676572223a22302e3030343420454f53222c227061796f7574223a22302e3030323320454f53222c2263757272656e74416d6f756e74223a2232382e3137383120454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "ad9f788faf901554d5e7cd3c4e8f96cac9de23306763c49963168086045e4aab",
                  username: "betkingdotio",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.422Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0021 EOS",
                    wager: "0.0044 EOS",
                    payout: "0.0023 EOS",
                    currentAmount: "28.1781 EOS"
                  }
                },
                hex_data:
                  "ad9f788faf901554d5e7cd3c4e8f96cac9de23306763c49963168086045e4aab405da6894d07b33a8d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3432325a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030323120454f53222c227761676572223a22302e3030343420454f53222c227061796f7574223a22302e3030323320454f53222c2263757272656e74416d6f756e74223a2232382e3137383120454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 365,
        net_usage_words: 22,
        trx: {
          id:
            "d6d9a79955f8ca7ddeccf9a156ee1a011b482efab763d2614877efc58aec76d8",
          signatures: [
            "SIG_K1_KikgqTBzoPZ7aDihstFQHRDur8wHHDKWFWJZ9CzyiT3LzuPZDD93Q2iD8UfGpuDPEUn9odoEPijYxToN1V3zrBQBo4SMHm"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d17d9d0e8a51f00000000014051ad265d2daf9690a7ca93a28c8cba018071cb4e620aa3a900000000a8ed3232518071cb4e620aa3a90200000040373532623065663565383139643730643233646163623838313031653135336666343836643731333462636361303638616130346337633631373465626435330100000000",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "murmurdappco",
                name: "reactcontent",
                authorization: [
                  {
                    actor: "palkosmithss",
                    permission: "active"
                  }
                ],
                data: {
                  from: "palkosmithss",
                  content_type: 2,
                  content_id:
                    "752b0ef5e819d70d23dacb88101e153ff486d7134bcca068aa04c7c6174ebd53",
                  react_type: 1
                },
                hex_data:
                  "8071cb4e620aa3a902000000403735326230656635653831396437306432336461636238383130316531353366663438366437313334626363613036386161303463376336313734656264353301000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 342,
        net_usage_words: 16,
        trx: {
          id:
            "8d901fa2d71b7472344421db37e542630692ee55da799c3626c141f9c55d6058",
          signatures: [
            "SIG_K1_KktNtK7fCapcLVBkmR3iKhQkpGnTKnT1deFmtyeNBFbQYhAwMo9e3L4q3F2vatHYDgt9UCfcHeYbaPZRc95mYLKaGGAzbM"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d18d998b5aebc0000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c9206c9f4230d8a9b427201ca5df2f9709c88af98313eded75bee7a22487ecf0ccf900",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55576,
            ref_block_prefix: 3165566360,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "6c9f4230d8a9b427201ca5df2f9709c88af98313eded75bee7a22487ecf0ccf9"
                },
                hex_data:
                  "6c9f4230d8a9b427201ca5df2f9709c88af98313eded75bee7a22487ecf0ccf9"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 2968,
        net_usage_words: 45,
        trx: {
          id:
            "bea5edd690f565ac24b4b5ff6085b7cdab675e474adb727a6a5f55d5b55905a0",
          signatures: [
            "SIG_K1_K1dK6UpHfS3Hz9eY2bWDAhXTSYfj8qXyPhJsxVBSgavv2Bpu4ZoaBMBXKbrRTsPS4hPGpHkVzkocpfsL9ev4krLCXPEE6y"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d1ad92904ff680000000005805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce000000000000009f2a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000dd2a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000462a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000ce2a9106000000009015bc46b249a1e601805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000e32a9106000000009015bc46b249a1e60100",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176927,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce000000000000009f2a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176989,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000dd2a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176838,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000462a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176974,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000ce2a9106000000009015bc46b249a1e601"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176995,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000e32a9106000000009015bc46b249a1e601"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1554,
        net_usage_words: 23,
        trx: {
          id:
            "a2b44f87dcc72fd822a4ba0cc744a035f24c6ca6e73abb710198e7c1c0171af9",
          signatures: [
            "SIG_K1_KANZ14YyFHZgNaQ9dFzJpNx9TMeBfuLX2tBCE2JbopR5cYtR7bknoNRdKbUZG3Lvp7nUjZT87or3ZViK7uVi6ZpXvtdmns"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001a026a59a4d8331550000004044a3b6ba0170d5be0a53cda6c100000000a8ed3232594075a23a19dda8c9f90315000000000006636f6d626174001f49160048ac022a10d295e14058b39f4b755609384b56f1506fbed4145f668ece07a613a86e2599fc2d43bca13e6f2da0398ea84b8b7dde1e3f5c1b2ed00b072e00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "reveal2",
                authorization: [
                  {
                    actor: "sanguoserver",
                    permission: "active"
                  }
                ],
                data: {
                  from: "taohuaduoduo",
                  opid: 1377273,
                  op: "combat",
                  sig:
                    "SIG_K1_K4pMcmRuh9VYVuvLSi7w7uQd4d3dLXD4XJyLXchkh4FrniePoSQdzhU1uQKwBrpCARQhy8QTQVaEKAHvzBZPfDQDtg3rE7"
                },
                hex_data:
                  "4075a23a19dda8c9f90315000000000006636f6d626174001f49160048ac022a10d295e14058b39f4b755609384b56f1506fbed4145f668ece07a613a86e2599fc2d43bca13e6f2da0398ea84b8b7dde1e3f5c1b2ed00b072e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 640,
        net_usage_words: 14,
        trx: {
          id:
            "0bbaf935b53df5f734bc6cf259a91cccb83766b138d18402c859fc868bfdd3b9",
          signatures: [
            "SIG_K1_KkWyfPTDKvqoioMCrmZh7RaSRjgDzxC9H1KDsXPrhehUcfLYtqvRkVxcJrG8qGYQqjS1wbizHVezuTdV98oZdmvaeX3RBP"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fe208e5d19d940254b49000000000180f0a519a98ae9ad00000057c14bf9960130e79ce64527339d00000000a8ed323210a67f00000000000004000000f0ffffff00",
          transaction: {
            expiration: "2019-09-27T14:47:26",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "prospectorsc",
                name: "mvworker",
                authorization: [
                  {
                    actor: "notmiljannnn",
                    permission: "active"
                  }
                ],
                data: {
                  worker_id: 32678,
                  x: 4,
                  y: -16
                },
                hex_data: "a67f00000000000004000000f0ffffff"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1006,
        net_usage_words: 69,
        trx: {
          id:
            "a5c8b1167b6e7a6873fb00f37bcadea65d36e486bc35b6f9f420274cf7ea9a7f",
          signatures: [
            "SIG_K1_KgJCsLvJXn97ifGhTKG5eguRmtdtWddzJVz4a813XacYAYP6SMVNVsNhyCV1JshHbbBmcfUv74cwc3GxRwtYxpxR3JMV4b"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "cb278e5d1cd91abc956c000000000190cd4527aba3743c0080a4f4aa6c52d50190cd4527aba3743c00000000a8ed3232cb030200000000000000043b2c00c3ea28990100f002654a7831554e7475677a414d2f52667631512b596b44546856366f2b63456b4244636a57774470573764396e7a4a696d6153694b485a2b4c6b2f67424265517051675535495a523874733461783469485045476f476466476161634e5759514f38764e6a74554254444c345030667351435242615562502f66506e45546648557a6b3049523177336c63734235325076753662396e79316e37352b584f595a376a41662b6f727656683733484d425948725a753057595a5168317448365947394c385a702b734e647044787a476e6838323743305053474d496e71562b4d494b516f304b435231764a5976774a4a566a687043534e54436b4a4a4e6b3956316245653734696b677a6b6750743274336c666937596c76376c5736506d31305a35574d726634672f4e556b7753372b7559722b5a6157364e56346c575a4747557a5a3179744b6c636c4e724f3159737562694a664e2f7736354a5733544c445549487875577958692b414573676b314d3d46323536393539353538373d3e7b626c6f636b3a38313538323432362c73656564686173683a62663666643836353330653362303633383439363964336339633038343864337d00",
          transaction: {
            expiration: "2019-09-27T15:16:27",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bluebetbcrat",
                name: "updateroom",
                authorization: [
                  {
                    actor: "bluebetbcrat",
                    permission: "active"
                  }
                ],
                data: {
                  room_id: 2,
                  action_id: 2898692,
                  round_id: 2569595587,
                  status: 1,
                  cid_list: "",
                  room_data:
                    "eJx1UNtugzAM/Rfv1Q+YkDThV6o+cEkBDcjWwDpW7d9nzJimaSiKHZ+Lk/gBBeQpQgU5IZR8ts4ax4iHPEGoGdfGaacNWYQO8vNjtUBTDL4P0fsQCRBaUbP/fPnETfHUzk0IR1w3lcsB52Pvu6b9ny1n75+XOYZ7jAf+orvVh73HMBYHrZu0WYZQh1tH6YG9L8Zp+sNdpDxzGnh827C0PSGMInqV+MIKQo0KCR1vJYvwJJVjhpCSNTCkJJNk9V1bEe74ikgzkgPt2t3lfi7Ylv7lW6Pm10Z5WMrf4g/NUkwS7+uYr+ZaW6NV4lWZGGUzZ1ytKlclNrO1YsubiJfN/w65JW3TLDUIHxuWyXi+AEsgk1M=",
                  memo:
                    "2569595587=>{block:81582426,seedhash:bf6fd86530e3b06384969d3c9c0848d3}"
                },
                hex_data:
                  "0200000000000000043b2c00c3ea28990100f002654a7831554e7475677a414d2f52667631512b596b44546856366f2b63456b4244636a57774470573764396e7a4a696d6153694b485a2b4c6b2f67424265517051675535495a523874733461783469485045476f476466476161634e5759514f38764e6a74554254444c345030667351435242615562502f66506e45546648557a6b3049523177336c63734235325076753662396e79316e37352b584f595a376a41662b6f727656683733484d425948725a753057595a5168317448365947394c385a702b734e647044787a476e6838323743305053474d496e71562b4d494b516f304b435231764a5976774a4a566a687043534e54436b4a4a4e6b3956316245653734696b677a6b6750743274336c666937596c76376c5736506d31305a35574d726634672f4e556b7753372b7559722b5a6157364e56346c575a4747557a5a3179744b6c636c4e724f3159737562694a664e2f7736354a5733544c445549487875577958692b414573676b314d3d46323536393539353538373d3e7b626c6f636b3a38313538323432362c73656564686173683a62663666643836353330653362303633383439363964336339633038343864337d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 617,
        net_usage_words: 24,
        trx: {
          id:
            "13f4508b6bd3c23b9ea59038e9a335bb7be38db8c5b5b3838541c1d7d0140bd2",
          signatures: [
            "SIG_K1_KfWayeQrGGEtZ3JdqNZW27UPrXuBdp1RQoctsifo2tuVNFLfsFYzJjov1LN89eXkXW37D3LSB44ZPrKqwfPp7M8okVesyM"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ff208e5dd1d7b03c5a9700000000013015a45941933194000000572d3ccdcd01a0d8340d75e5159400000000a8ed32325fa0d8340d75e51594e0f38fdffafce3b7e093040000000000044b4559000000003ee4bda0e79a84e6af8fe697a5e6b3a8e5868ce5a596e58ab1202f20596f7572206461696c792072657761726420666f72206265696e6720696e766974656400",
          transaction: {
            expiration: "2019-09-27T14:47:27",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "mkstaketoken",
                name: "transfer",
                authorization: [
                  {
                    actor: "mkeyexchange",
                    permission: "active"
                  }
                ],
                data: {
                  from: "mkeyexchange",
                  to: "qzlztyqzlzty",
                  quantity: "30.0000 KEY",
                  memo: "你的每日注册奖励 / Your daily reward for being invited"
                },
                hex_data:
                  "a0d8340d75e51594e0f38fdffafce3b7e093040000000000044b4559000000003ee4bda0e79a84e6af8fe697a5e6b3a8e5868ce5a596e58ab1202f20596f7572206461696c792072657761726420666f72206265696e6720696e7669746564"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 198,
        net_usage_words: 24,
        trx: {
          id:
            "375b63d66ecb59297abd240b6cb21880c5ced38b4053820d00c38f60688e4d5e",
          signatures: [
            "SIG_K1_K2sgkmsAHLnNGmmeJkaepVHjWr6ujPphyfk93kx24PD44PmGWtw7dXZt1Q57Q2GdUnnuHEjqt4BuKZfx7k4Z9opiuQRZrj"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fc208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01905c74edaa63a4ba00000000a8ed323263905c74edaa63a4ba5a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a51764356383450574c6352575434505744625147447a50576e334c71303d00",
          transaction: {
            expiration: "2019-09-27T14:47:24",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "remaberhilid",
                    permission: "active"
                  }
                ],
                data: {
                  account: "remaberhilid",
                  content:
                    "1|hbM2CAMcdZ9xLmrlPlLvLqU5fJXlRlMPdZwoLlzle2MtCZQ0LmrlTAM0dZQvCV84PWLcRWT4PWDbQGDzPWn3Lq0="
                },
                hex_data:
                  "905c74edaa63a4ba5a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a51764356383450574c6352575434505744625147447a50576e334c71303d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 883,
        net_usage_words: 21,
        trx: {
          id:
            "dc08335bc50492002106033f64e95e63a707b5673ff6ceaabfa6dbdd4ab458ec",
          signatures: [
            "SIG_K1_K6fcn5uADX8wjqjEZU1EF1o8YCCs5VMNGG3JjoL2ge9ATftZ9NtB2JAxUoF3m7oBy14t2BQRC9aoD4Embk2jPvisLUGYPd"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948c0d9d440daa542779532d976f5eb0eddae7e7797c4b68259f565d1eb8af4bfed0000c88db915a33ea09862fd4c9b876600a6823403ea3055311f00000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "c0d9d440daa542779532d976f5eb0eddae7e7797c4b68259f565d1eb8af4bfed",
                  gameName: "bullfight",
                  username: "gu3tqnbxgege",
                  contract: "eosio.token",
                  payoutAsset: "0.7985 EOS"
                },
                hex_data:
                  "c0d9d440daa542779532d976f5eb0eddae7e7797c4b68259f565d1eb8af4bfed0000c88db915a33ea09862fd4c9b876600a6823403ea3055311f00000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 847,
        net_usage_words: 17,
        trx: {
          id:
            "0e805cc9ee3c6f3eaad0cfd2a4269ac67dab31cd694ea749654e7b9102c190c0",
          signatures: [
            "SIG_K1_KaxuMWgbYE35T9Gu5RZ43HYw8imPGJokBumPD1HRchNg8yMECaLi5LrTgTtHW4rauNogyxpforU3U4R6K2DG2VJ834C2uu"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fe208e5dd1d7b03c5a97000000000100a6823403ea3055000000572d3ccdcd0140041952df44919b00000000a8ed32322740041952df44919b1030634a49c31432850400000000000004454f5300000000063934312d313300",
          transaction: {
            expiration: "2019-09-27T14:47:26",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "nicodrum3424",
                    permission: "active"
                  }
                ],
                data: {
                  from: "nicodrum3424",
                  to: "acegameeggs1",
                  quantity: "0.1157 EOS",
                  memo: "941-13"
                },
                hex_data:
                  "40041952df44919b1030634a49c31432850400000000000004454f5300000000063934312d3133"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 364,
        net_usage_words: 33,
        trx: {
          id:
            "163430a75e07612ac4b90d3f407735b12ed36660b61b3c9b220f96b06fda1dfc",
          signatures: [
            "SIG_K1_KiNZkDas5ubaVJEdDJiZT68Rj9VkM33WvErNnZyrimtSZPP5d9SrX6xhrgHt9SYqcJj9T25eXcWyndHbUrm5BKAbL1Ey1N"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a000000000190348dc69b583155000000000010a3f20190348dc69b58315500000000a8ed3232a70190348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f333565363032326100",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplayaloud",
                name: "yell",
                authorization: [
                  {
                    actor: "eosplayaloud",
                    permission: "active"
                  }
                ],
                data: {
                  u: "eosplayaloud",
                  memo:
                    "区块链 Hash 值开奖平台 EOSPlay 新游戏 HASH 牛牛上线! 另有乐透,骰子,老虎机等着您赢得奖池回报!!! https://eosplay.com/?35e6022a"
                },
                hex_data:
                  "90348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f3335653630323261"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3181,
        net_usage_words: 45,
        trx: {
          id:
            "286c5104e8a2b9cad2751e27900ebe7ca558bc1cb9e7c5c283eedd8b6c4df11d",
          signatures: [
            "SIG_K1_JvKbepJ5af5wJ9EgdkTWfvWCEhzgoB82MFSNCXiHFtUtfsV2nAYAm8h4fcVnqrGK4tD1PEe17r3DDeMy18M1aQs3jFMLfD"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d1ad92904ff680000000005805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000e52a9106000000009015bc46b249a1e601805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000e72a9106000000009015bc46b249a1e601805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000832a9106000000009015bc46b249a1e601805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000eb2a9106000000009015bc46b249a1e601805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000ef2a9106000000009015bc46b249a1e60100",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176997,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000e52a9106000000009015bc46b249a1e601"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176999,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000e72a9106000000009015bc46b249a1e601"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176899,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000832a9106000000009015bc46b249a1e601"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110177003,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000eb2a9106000000009015bc46b249a1e601"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110177007,
                  owner: "wukongmarket",
                  direction: 1
                },
                hex_data: "ce00000000000000ef2a9106000000009015bc46b249a1e601"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 292,
        net_usage_words: 13,
        trx: {
          id:
            "e3e0cba31cdb30ef99e6021ded8b03c9a292fe803623fa300844f2111d8c01f3",
          signatures: [
            "SIG_K1_K73yhPKG65f38eC5FnBH3hyrz5oq6KA1cGmDKKCybdEkWZFvokjb1fM8rLwhqmZh8UHG5nb35parSfwPBMGM2rk6jH7crK"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001000000ec001ca33e000000000090a6b901000000ec001ca33e00000097667355a508316d73050000000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "rand",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  r: 91450673
                },
                hex_data: "316d730500000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 681,
        net_usage_words: 21,
        trx: {
          id:
            "a19f6d6034617cf55ce9bd4a8e22aca28863c96dfe0956a12240cc7f55a16f47",
          signatures: [
            "SIG_K1_KjVtDdRb7pdFue6y97XTzypTny1bvraXYCHfKovgTkVn9aMLu1igw69CFZGs1k1y5JmEoftZpL3xQfJSKGwdJ5AgRJjHrG"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9485f7994ec53ba78024beda36765e3fbf4613e87fc63a32b87aeb49b3dcef904930000c88db915a33ec0e9545767bd829700a6823403ea3055791300000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "5f7994ec53ba78024beda36765e3fbf4613e87fc63a32b87aeb49b3dcef90493",
                  gameName: "bullfight",
                  username: "my1futurenow",
                  contract: "eosio.token",
                  payoutAsset: "0.4985 EOS"
                },
                hex_data:
                  "5f7994ec53ba78024beda36765e3fbf4613e87fc63a32b87aeb49b3dcef904930000c88db915a33ec0e9545767bd829700a6823403ea3055791300000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 665,
        net_usage_words: 21,
        trx: {
          id:
            "545274d4bdbb7a53c45e699630e620d7ff218b7916e0c16ac58b05549f7c1b03",
          signatures: [
            "SIG_K1_KBNaVjRojvKxU5Q6WRy6EbbGpd2uAeAVtTiCJ12n9DwUuGFLPpxGRhdCmwkvZwSqAJdS2NUggtKofuDqmEuKYrmAyRCuR8"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94842b5f990d2af32e785801d4d3bfbc8c22e396f806dc0a875f4ec25919097c2ac0000c88db915a33ea09862f64f993f6100a6823403ea3055080000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "42b5f990d2af32e785801d4d3bfbc8c22e396f806dc0a875f4ec25919097c2ac",
                  gameName: "bullfight",
                  username: "g4ztmnzqgege",
                  contract: "eosio.token",
                  payoutAsset: "0.0008 EOS"
                },
                hex_data:
                  "42b5f990d2af32e785801d4d3bfbc8c22e396f806dc0a875f4ec25919097c2ac0000c88db915a33ea09862f64f993f6100a6823403ea3055080000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 495,
        net_usage_words: 107,
        trx: {
          id:
            "abf68d184988e041e8578c0eebcad504df4e121faec013515cde620ec41a0951",
          signatures: [
            "SIG_K1_KjRDhwcmJUh4KXqSLGR2zYmvjL2g5cmQL6uqTAFuEfAxK8FAZZzhyBnhjyWMzw1nzmE2daEVFrFv8vbcXEgUAjHUoRUK9y"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9f605ea9361174971790e88a557d6edbe2a2456acc7d4cc60eb867d6f4e28a4864623c0e9545767bd8297cc057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3235305a222c227a6f6e65223a332c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c2028e7899be7899b29222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3239373820454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3539373820454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "ea9361174971790e88a557d6edbe2a2456acc7d4cc60eb867d6f4e28a4864623",
                  username: "my1futurenow",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.250Z",
                    zone: 3,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zoneDeckType: "Bull (牛牛)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.2978 EOS",
                    wager: "0.3000 EOS",
                    payout: "0.5978 EOS"
                  }
                },
                hex_data:
                  "ea9361174971790e88a557d6edbe2a2456acc7d4cc60eb867d6f4e28a4864623c0e9545767bd8297cc057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3235305a222c227a6f6e65223a332c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c2028e7899be7899b29222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3239373820454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3539373820454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 763,
        net_usage_words: 21,
        trx: {
          id:
            "75c37495e9cd70afc3438d400b17288bf7253d02106e41aec03c071f0f8ba751",
          signatures: [
            "SIG_K1_KAdXh5SNyPnZXiLqSRR4v5aLijmxMZePoBsUybxzwFvYK7pH9w6PrDjj7KUU5mRJTKwJ6fTfHT7jaHqWUAoduDDVbaS4Fk"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9485f2ce3582b62907ec0162a4b15a9c0b8abd5708414bd2868dfd067fd94256fb60000c88db915a33ea01861f94b97bf6700a6823403ea3055040000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "5f2ce3582b62907ec0162a4b15a9c0b8abd5708414bd2868dfd067fd94256fb6",
                  gameName: "bullfight",
                  username: "gyztimztg4ge",
                  contract: "eosio.token",
                  payoutAsset: "0.0004 EOS"
                },
                hex_data:
                  "5f2ce3582b62907ec0162a4b15a9c0b8abd5708414bd2868dfd067fd94256fb60000c88db915a33ea01861f94b97bf6700a6823403ea3055040000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 708,
        net_usage_words: 21,
        trx: {
          id:
            "80cde763dfa1ccd7f8a6a6f7e8208aa8d1975207f278435002854c451b356ff9",
          signatures: [
            "SIG_K1_KXeoUVtR5srYahRZt9i9MijuAYxeSuFe4DMqXHrqAa11Wa1pkVEe8jkLt1bFkoMsbhgFugQNWzaPWNHq2BN52W1LAQ4PzX"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94859524572e894afad0589963231ad6f87f8b340f9aa4a822ce2e9af1a8650a4fd0000c88db915a33e104230e76ea8ae9100a6823403ea3055010000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "59524572e894afad0589963231ad6f87f8b340f9aa4a822ce2e9af1a8650a4fd",
                  gameName: "bullfight",
                  username: "marekvrba111",
                  contract: "eosio.token",
                  payoutAsset: "0.0001 EOS"
                },
                hex_data:
                  "59524572e894afad0589963231ad6f87f8b340f9aa4a822ce2e9af1a8650a4fd0000c88db915a33e104230e76ea8ae9100a6823403ea3055010000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd91ecd144ba2112ce827bc3aa3ec6acfecce2dcbf499a65fd31a754ba786",
    block_num: 81582366,
    ref_block_prefix: 669527057
  },
  {
    timestamp: "2019-09-27T14:46:27.500",
    producer: "eoseouldotio",
    confirmed: 0,
    previous:
      "04dcd91cd0befbbc1abc956cce6d935abb58337f59dfb4f50588440d5aa2550d",
    transaction_mroot:
      "2acbb3bc4728b2d3481405b8ca05915d3a8f734ceb07f1b264b4c80de7caee2b",
    action_mroot:
      "a9ddb67f65c533e28ca1b624fe1eed8bdd060b6e22fb6a735072a7ba0fc415f5",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_K4AQ8YEYGzJUgJRDFBDeBQzN7afqbQw6BPrqW9nNeiKbLQ3hWzTrYi4uDtBYixNYXzCXvCdCEJjxuc889Gka3o86aPDVkf",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 196,
        net_usage_words: 0,
        trx: "d25e1247038c6205bfeefd398d06f00db74b34d839beaccd128db2bc2a2ef60c"
      },
      {
        status: "executed",
        cpu_usage_us: 207,
        net_usage_words: 0,
        trx: "72f207d727d2c481ae69356a063f2f09dd268b2d7a0440993b02196b83783e2d"
      },
      {
        status: "executed",
        cpu_usage_us: 102,
        net_usage_words: 0,
        trx: "b9f35f7aceb0253ddc9ee484f48e72c8e1f7379402940156be4c32f5b39dcd89"
      },
      {
        status: "executed",
        cpu_usage_us: 100,
        net_usage_words: 0,
        trx: "5eabc47074b937e6c3afc371e5c6136079b91ac007352973bff7e02ce14c48fc"
      },
      {
        status: "executed",
        cpu_usage_us: 418,
        net_usage_words: 0,
        trx: "a79168ca8a780e886eee37518b0b8a64d689e95781e194d3b7d6d3250bf78c55"
      },
      {
        status: "executed",
        cpu_usage_us: 361,
        net_usage_words: 0,
        trx: "18624916bd476790033ea7d191022ea3a0cbd32769c0ff9bc2a53e9cdbe968ff"
      },
      {
        status: "executed",
        cpu_usage_us: 576,
        net_usage_words: 13,
        trx: {
          id:
            "e95ec26231191bace430bf86e24d5061e5632f4e8031c029d8826f5e076e2aa7",
          signatures: [
            "SIG_K1_KZXw168ut6bZ5M9CZrrCPqaFTF5GjUNa3vBzSd6rNT6XFynUW7acy2egXnHAZFjyHcdJ8SNgWuhcxyhrcQLHQ1tKzPXW9p"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f0208e5db9d75abb570f0000000001301d45304f4711cc00000020298553350140c208ce52e3a48e00000000a8ed32320840c208ce52e3a48e00",
          transaction: {
            expiration: "2019-09-27T14:47:12",
            ref_block_num: 55225,
            ref_block_prefix: 257407834,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "tkcointkcoin",
                name: "apdseed",
                authorization: [
                  {
                    actor: "lumiaoqi1314",
                    permission: "active"
                  }
                ],
                data: {
                  who: "lumiaoqi1314"
                },
                hex_data: "40c208ce52e3a48e"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1260,
        net_usage_words: 27,
        trx: {
          id:
            "7530c46a1b7879944cb61cc177c4e2eea25a53e0417673a41d6aa2f5a273d9c2",
          signatures: [
            "SIG_K1_K9LCiB3dTp8pi2mpWEkXSuPxhSSBVYStwddYgfAeMAkbfFwzMJfXt9ULBh2Xe6md4N9Y6TvG4pTJsMyFzNKDiADwtQy3xS"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "d7208e5d1ad92904ff6800000000010080422e01305dc5000000572d3ccdcd01a026bd2a999bb34100000000a8ed323277a026bd2a999bb341805c3cba7695b89a28c80e0000000000045350494e000000567b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a227370696e2e2e646963652d7370696e2d656f73222c227072696365223a22302e3032333435222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:46:47",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "spin..dice",
                name: "transfer",
                authorization: [
                  {
                    actor: "cattraderone",
                    permission: "active"
                  }
                ],
                data: {
                  from: "cattraderone",
                  to: "newdexpublic",
                  quantity: "96.8744 SPIN",
                  memo: {
                    type: "sell-limit",
                    symbol: "spin..dice-spin-eos",
                    price: "0.02345",
                    channel: "API"
                  }
                },
                hex_data:
                  "a026bd2a999bb341805c3cba7695b89a28c80e0000000000045350494e000000567b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a227370696e2e2e646963652d7370696e2d656f73222c227072696365223a22302e3032333435222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 164,
        net_usage_words: 13,
        trx: {
          id:
            "759f3414ac57de5ea63f6cf521cb525058eb9bf0e80e849943427038eb8d74ff",
          signatures: [
            "SIG_K1_KBLAaTUYpSVbxjvnLr1VY6GNCTJHQpsxFdfqwb3iP6zcQjoLzarwXArbKLCxLjdG5HGPECDuMLFVban7fycdkfsL6BLfcM"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f2208e5db9d75abb570f000000000180277519995a4dea0000000080e9188d015028a594524a9f6c00000000a8ed323208560c24d69f00000000",
          transaction: {
            expiration: "2019-09-27T14:47:14",
            ref_block_num: 55225,
            ref_block_prefix: 257407834,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "xdappactions",
                name: "login",
                authorization: [
                  {
                    actor: "hmjoooooooo5",
                    permission: "active"
                  }
                ],
                data: {
                  verification_code: "686492486742"
                },
                hex_data: "560c24d69f000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 197,
        net_usage_words: 25,
        trx: {
          id:
            "4be6f37e91972b36e38564615ad3deaa864b88f45b016462b7a575c1679d6dda",
          signatures: [
            "SIG_K1_KhgqRHkYcePTkSMBWMFv7rtFYBFnC9iP5qyURBW9BLm6rYDHRh6CrSbJosVMpREE74AbrZRR7fhGcNSHVoeGNZrWHvKZVw"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01100629a58851ee3c00000000a8ed32326b100629a58851ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a615157423350635430504754635047507a52576e6c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr532555431",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr532555431",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWB3PcT0PGTcPGPzRWnliT=="
                },
                hex_data:
                  "100629a58851ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a615157423350635430504754635047507a52576e6c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 424,
        net_usage_words: 12,
        trx: {
          id:
            "6d0e4d9864c522fc5af6a0ed9900c71b120f0d222947f0434ea7472711b28993",
          signatures: [
            "SIG_K1_K7BWvy2fg2NMn185PRAg7z6Bj5Y5USPBfMpLVK54U2tvF6eo9APdJps8Vy6vXnX3CoKtsSzwmU3oB8D4LfYDWWbSxwyYR2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fd208e5d17d9d0e8a51f000000000100147209000f918e00149a66aa3c9d91015035bd4c2197b23a00aeda57610f918e0000",
          transaction: {
            expiration: "2019-09-27T14:47:25",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "lucky..dice",
                name: "maintenance",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "luckyserver"
                  }
                ],
                data: ""
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 276,
        net_usage_words: 13,
        trx: {
          id:
            "b5bb9ae800d0ebd6793ba85b83da74eeaf91c3756f0e7eb0d7e40dc80d57e6a9",
          signatures: [
            "SIG_K1_KjiiqMmCTAshf3bCsJFPUeLaFBsaVgW1haKxLLkk7kCTwKfASi2K6gwmLE4i2EoVyMbZQmBxf4rQnugyLvzTLJtXxaMTJq"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f9208e5dc5d77f14d5aa000000000180277519995a4dea0000000080e9188d013044505125d74dfb00000000a8ed323208bd2316faad00000000",
          transaction: {
            expiration: "2019-09-27T14:47:21",
            ref_block_num: 55237,
            ref_block_prefix: 2866091135,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "xdappactions",
                name: "login",
                authorization: [
                  {
                    actor: "zhaxidele123",
                    permission: "active"
                  }
                ],
                data: {
                  verification_code: "747225097149"
                },
                hex_data: "bd2316faad000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 295,
        net_usage_words: 76,
        trx: {
          id:
            "d717a82ad9522638fc930d411df2f44c13487e11ef7aec907969435be8b9d84e",
          signatures: [
            "SIG_K1_K4QnqJHTbnjxQ914uS7bpw7GvpL3JRtJq6jFbKDektHtAAGpLDknGN7qBVwDCiB9f6p8voCNVD9M8WPJ2MSp5F6Ubo5oeA"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fc208e5d16d921efb9b00000000001401da4f1f83c353d000000006293198d01401da4f1f83c353d00000000a8ed3232fd032463623962646436392d366532362d343237392d613239322d356661333330633137383233a9037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a2242616e676f725261696e6573417368746f6e4b6c75736b61222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c224141504c5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c2238305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d1842616e676f725261696e6573417368746f6e4b6c75736b6113323031392d30392d32375431343a34363a323600",
          transaction: {
            expiration: "2019-09-27T14:47:24",
            ref_block_num: 55574,
            ref_block_prefix: 2964975393,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bountyblokio",
                name: "logtask",
                authorization: [
                  {
                    actor: "bountyblokio",
                    permission: "active"
                  }
                ],
                data: {
                  task_guid: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                  task_data: {
                    app_name: "HOWTHEMARKETWORKS",
                    account_name: "BangorRainesAshtonKluska",
                    task_name: "Buy US stocks 50 times",
                    qty_logged: 1,
                    qty_required: 50,
                    param: {
                      symbol: "AAPL",
                      orderside: "Buy",
                      ordertype: "Market",
                      exchange: "US",
                      orderqty: "80",
                      securitytype: "Equities"
                    },
                    task_id: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                    challenge_id: "b0daa55c-d444-4375-8465-9b3d00af237e",
                    task_type: "Regular"
                  },
                  account_name: "BangorRainesAshtonKluska",
                  create_date: "2019-09-27T14:46:26"
                },
                hex_data:
                  "2463623962646436392d366532362d343237392d613239322d356661333330633137383233a9037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a2242616e676f725261696e6573417368746f6e4b6c75736b61222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c224141504c5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c2238305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d1842616e676f725261696e6573417368746f6e4b6c75736b6113323031392d30392d32375431343a34363a3236"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1891,
        net_usage_words: 32,
        trx: {
          id:
            "bd9ee8bbf9fbda77d3cc36be7bded35316ffc0daa0c6dea2c3f4216650eeac4a",
          signatures: [
            "SIG_K1_KYbspt9LhnRZ3D4XEFZWt9wmQ2hRpq252s3iLnoxAfRLZBYsiCGMrJBLd8BmHhAYQDwVP5Ym6kDp7XKSDJ25tvkdChtPU6"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fe208e5dd1d7b03c5a97000000000110b2b9062173305500405647ed48b1ba0140a7c3066575305500000000489aa6b94aedf115caae98a8a300203b4d9c9d79bb91a7aa93e0942ea95c337b1d9c733f562b2bcf1f86d38595f9226b0ba6fb3bd933fd106ba0190968c7e459704e46b42483c2cfb265bbc329ccc300",
          transaction: {
            expiration: "2019-09-27T14:47:26",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosbaccarat1",
                name: "resolvebet",
                authorization: [
                  {
                    actor: "eosbetcasino",
                    permission: "random"
                  }
                ],
                data: {
                  bet_id: "11792843500751811053",
                  sig:
                    "SIG_K1_KcWK7Mgf3NFRNJv52TuP9fu7S2xykazcLn6FeC9kuRGfJuuP2CsjZ3vGPd7fqd5VtUU13rbbPDQmhGUkL3LThDidiL7iNu"
                },
                hex_data:
                  "edf115caae98a8a300203b4d9c9d79bb91a7aa93e0942ea95c337b1d9c733f562b2bcf1f86d38595f9226b0ba6fb3bd933fd106ba0190968c7e459704e46b42483c2cfb265bbc329ccc3"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 242,
        net_usage_words: 12,
        trx: {
          id:
            "d92ae61bde422c7066c2daf8119a65202d78af063547f60e7ecda748082ba06d",
          signatures: [
            "SIG_K1_KfhfcRb4u6nba4HHvVbYYB2mKFmsdwyyYnrTgALviBSKrgtmNRP9UjNXB2sahYnEwRPF5RSic5aSy2NTEEGQcVgAZ7hfNa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d1bd99c46613a0000000001805c3cba7695b89a004043d91c95cccd0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "tradebatch",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 307,
        net_usage_words: 12,
        trx: {
          id:
            "500e673eb178e58c43b43958498646ce541adae36c36f54c5caeb2dbeb311b07",
          signatures: [
            "SIG_K1_K3SUkhomnF3zXbaGr184S2dYHEsbam3xCHisruDttKv92ob6zojk2NaggjybLpnLTJd9m18JeAZmyFvQZKxmTzMLUt7TkP"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d1bd99c46613a0000000001805c3cba7695b89a00000000a4a997ba0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "refund",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1435,
        net_usage_words: 47,
        trx: {
          id:
            "8cb94ec0bb0557bb48ae36e43b1f7bbddf7d1572b11aa032dcc294d0ff2b8cee",
          signatures: [
            "SIG_K1_Jx8RtSUL6L9KXvbpn5AK14F75nrb31MtzRLmfoWjdkeSa6tSranJzXwzerSbkMM2k8J3aAaKifrz1ReUARUmbcdETtFSp5"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001000060076415a3e10000b86ae1696eae01000060076415a3e100000097667355a5c101a0dc53eeb169968bd6c0240000000000307500000000000004454f530000000092013236373439382d6c6966616e676a69656a69652d747064617070696e636f6d652d31303030302d302d302d302d5349475f4b315f4b31436b58514650526f5753695a5870566a61563437664d58614d746550554e787959594d3447516854344541664b3157414c346f646f6579353274567431515351795668726d4538526a665a416b77706666513352526b4c67757573580c62756c6c732d62616e6b657200",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "wallet.bg",
                name: "ptransfer",
                authorization: [
                  {
                    actor: "wallet.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  player: "lifangjiejie",
                  bet_id: 2408662,
                  quantity: "3.0000 EOS",
                  memo:
                    "267498-lifangjiejie-tpdappincome-10000-0-0-0-SIG_K1_K1CkXQFPRoWSiZXpVjaV47fMXaMtePUNxyYYM4GQhT4EAfK1WAL4odoey52tVt1QSQyVhrmE8RjfZAkwpffQ3RRkLguusX",
                  gamecode: "bulls-banker"
                },
                hex_data:
                  "a0dc53eeb169968bd6c0240000000000307500000000000004454f530000000092013236373439382d6c6966616e676a69656a69652d747064617070696e636f6d652d31303030302d302d302d302d5349475f4b315f4b31436b58514650526f5753695a5870566a61563437664d58614d746550554e787959594d3447516854344541664b3157414c346f646f6579353274567431515351795668726d4538526a665a416b77706666513352526b4c67757573580c62756c6c732d62616e6b6572"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 879,
        net_usage_words: 23,
        trx: {
          id:
            "5e7a247ed7387792d46e65c368e9ae259c7dd58ca126f54ea1531cec9fa3a17f",
          signatures: [
            "SIG_K1_K89KFxCpqiGYX3Y347SQM3UnW6i2mveViLnZvk4hnmMUpKfsEt58uGpkV7UD14NQzXY4Suaqsv91kEMQqobuX3X8B1sMUz"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a97000000000100a6823403ea3055000000572d3ccdcd010099254d122d93d300000000a8ed32322d0099254d122d93d370554a2662aa2ec4e80300000000000004454f53000000000c322c32363135393932372c2c00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "uidmu4mh4qgk",
                    permission: "active"
                  }
                ],
                data: {
                  from: "uidmu4mh4qgk",
                  to: "skreosladder",
                  quantity: "0.1000 EOS",
                  memo: "2,26159927,,"
                },
                hex_data:
                  "0099254d122d93d370554a2662aa2ec4e80300000000000004454f53000000000c322c32363135393932372c2c"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 235,
        net_usage_words: 16,
        trx: {
          id:
            "a3e6ec642b7307032e1a2cd3b2a53764930fe77d5a9d734ab85a977769a9c2b2",
          signatures: [
            "SIG_K1_KeBa3n85y9NkbgpeTfX3iB3zT4QpY4jJJr1n79Rh2b74sXGoGM8A426EtZpGCHhFnN6tFUW5RaLhk6nsWeM56MBsGzXdQH"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a970000000001a0904b1d53d52fc40040520a5fb5afc201a0904b1d53d52fc400000000a8ed32322069e499260b9fe156aeb2351e976e6ae2bbcab7d2d418558d5594fde935811a9900",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "skrxeosxdice",
                name: "serverseed",
                authorization: [
                  {
                    actor: "skrxeosxdice",
                    permission: "active"
                  }
                ],
                data: {
                  seed:
                    "69e499260b9fe156aeb2351e976e6ae2bbcab7d2d418558d5594fde935811a99"
                },
                hex_data:
                  "69e499260b9fe156aeb2351e976e6ae2bbcab7d2d418558d5594fde935811a99"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 199,
        net_usage_words: 16,
        trx: {
          id:
            "cb116ed5abe62b3668f989623385a557c729a3406d98ddffa78e27c313bde4f3",
          signatures: [
            "SIG_K1_Kgwrske9csTBR6aKpziKvx7snny2LtaUJc3jUyvcGbHXBLZbJE9UdCf29p4er1bNevzD8HPzo4dc3cmNcPwpiTvfKYGNCF"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a9700000000010091791099782ec40040520a5fb5afc2010091791099782ec400000000a8ed323220a154f328509d58acc315179f46111ceea079687e59b0cfaf592a813a62ba0ad800",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "skrblackjack",
                name: "serverseed",
                authorization: [
                  {
                    actor: "skrblackjack",
                    permission: "active"
                  }
                ],
                data: {
                  seed:
                    "a154f328509d58acc315179f46111ceea079687e59b0cfaf592a813a62ba0ad8"
                },
                hex_data:
                  "a154f328509d58acc315179f46111ceea079687e59b0cfaf592a813a62ba0ad8"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1061,
        net_usage_words: 21,
        trx: {
          id:
            "e853a0494c8c984b5b2b6ef1a25e6d432caca8a0657172708bc321f81f6c6f1d",
          signatures: [
            "SIG_K1_K6DNLzT1zFHQJKatLBkm8NHJibwRkMtmUxTFb6hjhBBFnP1QpR2VAGHrABY3uwR2kgtHLkJ6t71au59vynZJreJPfdyk5H"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948532b0e8d13fd50b8ce39bec4b61e3355491c2fae0f563662aede47465ebb09ab0000c88db915a33e10420821848aeb3300a6823403ea3055010000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "532b0e8d13fd50b8ce39bec4b61e3355491c2fae0f563662aede47465ebb09ab",
                  gameName: "bullfight",
                  username: "ajpsp1111111",
                  contract: "eosio.token",
                  payoutAsset: "0.0001 EOS"
                },
                hex_data:
                  "532b0e8d13fd50b8ce39bec4b61e3355491c2fae0f563662aede47465ebb09ab0000c88db915a33e10420821848aeb3300a6823403ea3055010000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 214,
        net_usage_words: 16,
        trx: {
          id:
            "5e822d59b8b463e410cc0bcd3e79eef9347141ad7a0a69f4f6649376d4d3aa68",
          signatures: [
            "SIG_K1_KbXAATSYq3RteMNpKPmqBREjA1NYFfvuvcLNDPiFa2BmPXBcGMP8cikCpeFW9XcuGbXMLaAHTp5YZdGcqSuiXTdseebv3N"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5dd1d7b03c5a970000000001d0fd5539d3d82fc40040520a5fb5afc201d0fd5539d3d82fc400000000a8ed3232204b7809eb750bd7eb0f17b07a2b256ca200cf7735bc6a7aa882712968e074c9db00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "skrxlotteryx",
                name: "serverseed",
                authorization: [
                  {
                    actor: "skrxlotteryx",
                    permission: "active"
                  }
                ],
                data: {
                  seed:
                    "4b7809eb750bd7eb0f17b07a2b256ca200cf7735bc6a7aa882712968e074c9db"
                },
                hex_data:
                  "4b7809eb750bd7eb0f17b07a2b256ca200cf7735bc6a7aa882712968e074c9db"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 836,
        net_usage_words: 147,
        trx: {
          id:
            "43aee29db1b5988aeb70e07758b22b92ff83828a85dc3127aa4cd26917123eaa",
          signatures: [
            "SIG_K1_K8eKrAfXUHDRpp5stYanBuyfA2uZ9pq9zhAywfnX1og8Mipa1RKai7P5qpnsYvJYC2bY4cyU3xCyKqEc9cwApQFqkBXD5H"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b608037a71672956d1c93c59b6c33719d76f8bfd2c6218e1d3d2811c5772064d402710420821848aeb338c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3335325a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303220454f53222c227761676572223a22302e3030303320454f53222c227061796f7574223a22302e3030303120454f53222c2263757272656e74416d6f756e74223a22312e3835383420454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "037a71672956d1c93c59b6c33719d76f8bfd2c6218e1d3d2811c5772064d4027",
                  username: "ajpsp1111111",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.352Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0002 EOS",
                    wager: "0.0003 EOS",
                    payout: "0.0001 EOS",
                    currentAmount: "1.8584 EOS"
                  }
                },
                hex_data:
                  "037a71672956d1c93c59b6c33719d76f8bfd2c6218e1d3d2811c5772064d402710420821848aeb338c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3335325a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303220454f53222c227761676572223a22302e3030303320454f53222c227061796f7574223a22302e3030303120454f53222c2263757272656e74416d6f756e74223a22312e3835383420454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 997,
        net_usage_words: 147,
        trx: {
          id:
            "474a3e2165a30d6ead4704f8ad16a298f3f9ad2b32e9f44c1ccf1a418a601c7d",
          signatures: [
            "SIG_K1_K5fJv8ujoNrbvA18Z42FdTPTh7SHFYQEKCasyNnK1ampJJs9smQij95iykC2nUCGjM63NyKVY5W18ZMGBmEmYhZ5Aa5QGC"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b608422b6f62ea0a490dd556036229597d78793a20820646cc55ed9ff171a8bf39baa01861f94b97bf678c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3336305a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303420454f53222c227761676572223a22302e3030303820454f53222c227061796f7574223a22302e3030303420454f53222c2263757272656e74416d6f756e74223a22342e3833303420454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "422b6f62ea0a490dd556036229597d78793a20820646cc55ed9ff171a8bf39ba",
                  username: "gyztimztg4ge",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.360Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0004 EOS",
                    wager: "0.0008 EOS",
                    payout: "0.0004 EOS",
                    currentAmount: "4.8304 EOS"
                  }
                },
                hex_data:
                  "422b6f62ea0a490dd556036229597d78793a20820646cc55ed9ff171a8bf39baa01861f94b97bf678c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3336305a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303420454f53222c227761676572223a22302e3030303820454f53222c227061796f7574223a22302e3030303420454f53222c2263757272656e74416d6f756e74223a22342e3833303420454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1469,
        net_usage_words: 25,
        trx: {
          id:
            "6f3b0281e151a8b85639f9303f7c0e4c7caddbc2cfc82635221eafd1e26c17bc",
          signatures: [
            "SIG_K1_KhrjSqD1wPAJFpYTBGD5kQ4fn39CH3HYKp33ctUf45WvcLXXPAcpA9nZY6sFXTsG4545gGLBAh2Q7sAm1XYnCPbCKZRcKq"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9684455963570cf4c35f6a090b2917ac9d4a59eb520872b6b354167dea3cce514160000c88db915a33e50c810414933bb3200a6823403ea3055000700000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "4455963570cf4c35f6a090b2917ac9d4a59eb520872b6b354167dea3cce51416",
                  gameName: "bullfight",
                  username: "aexname12345",
                  contract: "eosio.token",
                  betAsset: "0.1792 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "4455963570cf4c35f6a090b2917ac9d4a59eb520872b6b354167dea3cce514160000c88db915a33e50c810414933bb3200a6823403ea3055000700000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1285,
        net_usage_words: 25,
        trx: {
          id:
            "da03991620b49b420b9c6fbafeb600c88d010d70144059851f1b70e0e78b60ea",
          signatures: [
            "SIG_K1_KgbqyGfZ7gqCGD1om8JETMwdNQUmqteciWdhq4ThhJeuKhiaptKBkXqorgHr9WMXs6BAs9eM9Mq5kKjTatNyLWfUdLcAA3"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c96819e0c4720d3d97de43d85587c9fd552bb6d597b04a621833b8cb4f5ee2252ad80000c88db915a33ea09862f84c9a096100a6823403ea3055020000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "19e0c4720d3d97de43d85587c9fd552bb6d597b04a621833b8cb4f5ee2252ad8",
                  gameName: "bullfight",
                  username: "g44tonbsgege",
                  contract: "eosio.token",
                  betAsset: "0.0002 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "19e0c4720d3d97de43d85587c9fd552bb6d597b04a621833b8cb4f5ee2252ad80000c88db915a33ea09862f84c9a096100a6823403ea3055020000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 348,
        net_usage_words: 13,
        trx: {
          id:
            "ef3aa4caf1103bd21d2c09f614359e2518b15dacddd882c539029d80753d089f",
          signatures: [
            "SIG_K1_JyfqNsTeF9FMArJqPdLN6QropKkGjVAhC2G3X6gWVix6DaythB23MsvmHGYciGei3xuVURdioZuXSqWh2hZwLaZ1XH9Xfv"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001000000ec001ca33e00000020ab5369c601000000ec001ca33e00000097667355a508ea1404000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bulls.bg",
                name: "stopbet",
                authorization: [
                  {
                    actor: "bulls.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  game_id: 267498
                },
                hex_data: "ea14040000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 316,
        net_usage_words: 14,
        trx: {
          id:
            "cc11981b158968c5a9aad4a1a56afcb6991e3883b9c570bd81985e189ff7fbfa",
          signatures: [
            "SIG_K1_K5irxfD2Qb9Ehwi91V6Krtg4yvYvy2gRzzrFJzyasVQN3y4Knbg2dtfhhqZYVUiN1AiTJyeiMoeMFKRQjyhLK5ut1Wr22v"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fb208e5d13d984101501000000000180f0a519a98ae9ad00000057c14bf99601d07b9fea5cfa7aef00000000a8ed323210f778000000000000f6fffffffbffffff00",
          transaction: {
            expiration: "2019-09-27T14:47:23",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "prospectorsc",
                name: "mvworker",
                authorization: [
                  {
                    actor: "xxxjorbenxxx",
                    permission: "active"
                  }
                ],
                data: {
                  worker_id: 30967,
                  x: -10,
                  y: -5
                },
                hex_data: "f778000000000000f6fffffffbffffff"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 321,
        net_usage_words: 25,
        trx: {
          id:
            "44b2fddf25cba97b9cb23fd5dbf2f5dc52a4ce8e905366d28acd524dc4133211",
          signatures: [
            "SIG_K1_K8WKHgWM6a6fLsWYwHmuakRd8VSYho9P7zrACDNAnSu5V1PXQ9ZiH5kanj99MdcGUoVwjdkDyQDKyXXpbSU9EcA1GYsrBA"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01208810259452ee3c00000000a8ed32326b208810259452ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a61515742325257423150474c615047447a5257546c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr555152242",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr555152242",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWB2RWB1PGLaPGDzRWTliT=="
                },
                hex_data:
                  "208810259452ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a61515742325257423150474c615047447a5257546c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 2875,
        net_usage_words: 45,
        trx: {
          id:
            "80ac23e5b283e2617a59349874eb74c7662ce7d120e23a2ba5eeac04ea874d7c",
          signatures: [
            "SIG_K1_K8Dpz9zjtpynx1qYJLExgM1PWbEj8cqYYezL8GBsRAFoENJDo7xnD74N3ua24ukpuWQq7zQTvh2mFikn3oZVTsCcpXYm8M"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000005805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000e22a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000a72a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000d12a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000d52a9106000000009015bc46b249a1e602805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed323219ce00000000000000ec2a9106000000009015bc46b249a1e60200",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176994,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000e22a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176935,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000a72a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176977,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000d12a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110176981,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000d52a9106000000009015bc46b249a1e602"
              },
              {
                account: "newdexpublic",
                name: "silentcancel",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  pair_id: 206,
                  order_id: 110177004,
                  owner: "wukongmarket",
                  direction: 2
                },
                hex_data: "ce00000000000000ec2a9106000000009015bc46b249a1e602"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 201,
        net_usage_words: 13,
        trx: {
          id:
            "6cef2c7918d5340c761b1e90e10866980fec6289ffb4acb96650a9e5c4688053",
          signatures: [
            "SIG_K1_Kjsb3gtXwn7TLKZ8j7XeFAsAaSbZLyDApBDjiTt7inwgMe2qmLUBoFH2YDbjSKrN7MNfmQcM2LwfPgqWnTvpc3RSVJMwDG"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001908c8a1822f330550000000000c0a6ab01908c8a1822f3305500000000a8ed3232050470696e6700",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosjackslead",
                name: "ping",
                authorization: [
                  {
                    actor: "eosjackslead",
                    permission: "active"
                  }
                ],
                data: {
                  memo: "ping"
                },
                hex_data: "0470696e67"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4087,
        net_usage_words: 47,
        trx: {
          id:
            "d9dc25f490caf29acff07878e1335826dbbc46e4466c54e73d44711499f69ba0",
          signatures: [
            "SIG_K1_K8U7wmDLXLp8xbQqkkh1aeLEuXrQdhHLj9KPaHZjffUg3KVrqm8TJcVBZGHb8Vsk6GkNDABpKuP6aAMLxSxfFqDU2eFj6i"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1cd91abc956c0000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570163f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d653530383432343064363435383266346161646132316165633731656435396438343564316534353939323066653439303736366633373631623231636635352d47463031627a4c6251516f5a413931656f7464662d313536393539373431332d5349475f4b315f4b5750654251576e7a547738344a3438436b4e346e41746e6f6f48703561756d776f70526277633979426657755057437237504164526569716a64707976457455436f37416f4252326a4c614c4d7463616b69674d59594235466631696a00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55580,
            ref_block_prefix: 1821752346,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "c",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-e5084240d64582f4aada21aec71ed59d845d1e459920fe490766f3761b21cf55-GF01bzLbQQoZA91eotdf-1569597413-SIG_K1_KWPeBQWnzTw84J48CkN4nAtnooHp5aumwopRbwc9yBfWuPWCr7PAdReiqjdpyvEtUCo7AoBR2jLaLMtcakigMYYB5Ff1ij"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570163f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d653530383432343064363435383266346161646132316165633731656435396438343564316534353939323066653439303736366633373631623231636635352d47463031627a4c6251516f5a413931656f7464662d313536393539373431332d5349475f4b315f4b5750654251576e7a547738344a3438436b4e346e41746e6f6f48703561756d776f70526277633979426657755057437237504164526569716a64707976457455436f37416f4252326a4c614c4d7463616b69674d59594235466631696a"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 914,
        net_usage_words: 23,
        trx: {
          id:
            "7104825bb0dcdf0a58461779b16046a80d0802ee58e2459163c49e77857da661",
          signatures: [
            "SIG_K1_KeNkKZFp7bpTmPBjQD9MVSLeQE1QsGJvZLjJ3hji78RzryYB2jv3dvNNMaTGY8onxMeJtnyCyPEwcGpU3roZ3f4xM3wZ8g"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e1208e5d1bd99c46613a0000000001a026a59a4d8331550000004044a3b6ba0170d5be0a53cda6c100000000a8ed32325b908a36a15cb6a2caf803150000000000086d616b656974656d001f4f4131fb27f91574c231593bdc4b2e284142247e359c572636a4da5cba4459cc483bba572c4e0efe4c20213e6ff5ad0f983d634f6f2d9e8b0242c18862d99dca00",
          transaction: {
            expiration: "2019-09-27T14:46:57",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "reveal2",
                authorization: [
                  {
                    actor: "sanguoserver",
                    permission: "active"
                  }
                ],
                data: {
                  from: "telfgr51au5d",
                  opid: 1377272,
                  op: "makeitem",
                  sig:
                    "SIG_K1_K5dAWxUBxZMifePo2GVXTg5n7YY6vD9MmnF6MXxBDugAsybTsjqnfzXzsoR92vY6k19Qgg5SpZzPjjaq9tems1JJvLSDRE"
                },
                hex_data:
                  "908a36a15cb6a2caf803150000000000086d616b656974656d001f4f4131fb27f91574c231593bdc4b2e284142247e359c572636a4da5cba4459cc483bba572c4e0efe4c20213e6ff5ad0f983d634f6f2d9e8b0242c18862d99dca"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd91de8b3442fa3e5755dcf9e601ba9b7aece012fd6dce1c5fb142dab9e14",
    block_num: 81582365,
    ref_block_prefix: 1568007587
  },
  {
    timestamp: "2019-09-27T14:46:27.000",
    producer: "eoseouldotio",
    confirmed: 0,
    previous:
      "04dcd91b1760599a9c46613ad3395599c3b0deea495ba561f05e98a21ebc5a07",
    transaction_mroot:
      "f846f8887765ed3bdfd27ce087e39630dd1e0ef8928518fc208fd14db68382db",
    action_mroot:
      "cde6e0fa0e3a989443ee898bb09fd5b25f356b937ec0c2f9214e138dcdfc6229",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_Kf6RFL8HuLqzX35aWbMrxSJ4gSuGffPSHR4kRNCC5Pbged6PSDB8SMsezbLbiC1bEZTJUkLgCKYx4iJgErMhFcnLR1pAqt",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 384,
        net_usage_words: 0,
        trx: "ddb22281e45b16fc062d1e0c64eb0771bf6db3ee3898b58f3b9432eb9e0079bb"
      },
      {
        status: "executed",
        cpu_usage_us: 1536,
        net_usage_words: 47,
        trx: {
          id:
            "f7a2b98c29ecadb570c305507011bdd46bb3151f2ca3524736ff51c01a5dae40",
          signatures: [
            "SIG_K1_Kgu213uV5oNvjcqfPy1Bw3hCa8s7AZ9qpfppsucvLpvPiyfRnYDzDfECxrmA1W2Ck9agzzVb3PZBNX2KsfpckoPQLdbKVq"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001000060076415a3e10000b86ae1696eae01000060076415a3e100000097667355a5c10130d874d679364dfbd5c0240000000000307500000000000004454f530000000092013236373439382d7a68616e67796971696e67332d73757065726f6e65696f61612d302d302d302d31303030302d5349475f4b315f4b31436b58514650526f5753695a5870566a61563437664d58614d746550554e787959594d3447516854344541664b3157414c346f646f6579353274567431515351795668726d4538526a665a416b77706666513352526b4c67757573580c62756c6c732d62616e6b657200",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "wallet.bg",
                name: "ptransfer",
                authorization: [
                  {
                    actor: "wallet.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  player: "zhangyiqing3",
                  bet_id: 2408661,
                  quantity: "3.0000 EOS",
                  memo:
                    "267498-zhangyiqing3-superoneioaa-0-0-0-10000-SIG_K1_K1CkXQFPRoWSiZXpVjaV47fMXaMtePUNxyYYM4GQhT4EAfK1WAL4odoey52tVt1QSQyVhrmE8RjfZAkwpffQ3RRkLguusX",
                  gamecode: "bulls-banker"
                },
                hex_data:
                  "30d874d679364dfbd5c0240000000000307500000000000004454f530000000092013236373439382d7a68616e67796971696e67332d73757065726f6e65696f61612d302d302d302d31303030302d5349475f4b315f4b31436b58514650526f5753695a5870566a61563437664d58614d746550554e787959594d3447516854344541664b3157414c346f646f6579353274567431515351795668726d4538526a665a416b77706666513352526b4c67757573580c62756c6c732d62616e6b6572"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 478,
        net_usage_words: 73,
        trx: {
          id:
            "e02a1bae8b24de49adf59f1233166adbc84f030d83f689b6cfde1bb9ec2a0641",
          signatures: [
            "SIG_K1_K7YZbeeiJa3CXSEFtxfPRFDapFkKuN9dAysmwuv7zw6oWJ2mdiVKzMsRHtmAGtappq2RCejCWjPPeqaBXM6Ns4KYV7aTEM"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fc208e5d16d921efb9b00000000001401da4f1f83c353d000000006293198d01401da4f1f83c353d00000000a8ed3232e6032463623962646436392d366532362d343237392d613239322d3566613333306331373832339d037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a226a6164656e2e666965646c6572222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c224a504d5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c2231305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d0d6a6164656e2e666965646c657213323031392d30392d32375431343a34363a323600",
          transaction: {
            expiration: "2019-09-27T14:47:24",
            ref_block_num: 55574,
            ref_block_prefix: 2964975393,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bountyblokio",
                name: "logtask",
                authorization: [
                  {
                    actor: "bountyblokio",
                    permission: "active"
                  }
                ],
                data: {
                  task_guid: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                  task_data: {
                    app_name: "HOWTHEMARKETWORKS",
                    account_name: "jaden.fiedler",
                    task_name: "Buy US stocks 50 times",
                    qty_logged: 1,
                    qty_required: 50,
                    param: {
                      symbol: "JPM",
                      orderside: "Buy",
                      ordertype: "Market",
                      exchange: "US",
                      orderqty: "10",
                      securitytype: "Equities"
                    },
                    task_id: "cb9bdd69-6e26-4279-a292-5fa330c17823",
                    challenge_id: "b0daa55c-d444-4375-8465-9b3d00af237e",
                    task_type: "Regular"
                  },
                  account_name: "jaden.fiedler",
                  create_date: "2019-09-27T14:46:26"
                },
                hex_data:
                  "2463623962646436392d366532362d343237392d613239322d3566613333306331373832339d037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a226a6164656e2e666965646c6572222c227461736b5f6e616d65223a224275792055532073746f636b732035302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a35302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c224a504d5c222c5c226f72646572736964655c223a5c224275795c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c2231305c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2263623962646436392d366532362d343237392d613239322d356661333330633137383233222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d0d6a6164656e2e666965646c657213323031392d30392d32375431343a34363a3236"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3452,
        net_usage_words: 25,
        trx: {
          id:
            "4b5e2211d39b440570a3a9ce28d53f78dfe9135a5f643c4e02307e2fc38e8dd8",
          signatures: [
            "SIG_K1_KWAEwjT9g7oFHmbMfWtr7NyXwwNMDGdNUALvw7FLy5fbXAaGVFNsxAtUykpSetbPVcfj6kFcEQxtK6W4sq6LJfDAcRbtLw"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968dfb6bf081309e29425883bc2d113225f509fca010b2c742132174dcfaf4fb2b20000c88db915a33e104228458440e9ef00a6823403ea3055282300000000000004454f53000000002d0000000000000004454f5300000000408608648840e9ef073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "dfb6bf081309e29425883bc2d113225f509fca010b2c742132174dcfaf4fb2b2",
                  gameName: "bullfight",
                  username: "xzoo11255111",
                  contract: "eosio.token",
                  betAsset: "0.9000 EOS",
                  houseEdgeAsset: "0.0045 EOS",
                  referer: "xzoo12341234",
                  memo: "1767816"
                },
                hex_data:
                  "dfb6bf081309e29425883bc2d113225f509fca010b2c742132174dcfaf4fb2b20000c88db915a33e104228458440e9ef00a6823403ea3055282300000000000004454f53000000002d0000000000000004454f5300000000408608648840e9ef0731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1243,
        net_usage_words: 25,
        trx: {
          id:
            "63fcc7cb5965694e7d200c7a761f833d68f0dd2023e36ea8c8b2913a7a90425f",
          signatures: [
            "SIG_K1_KBYmD7wxoSRkNr5P4DFfcYFfxifxCRzgAjJoHW8s1GKsMeJqdXkyEdxUiGMFxLZGfj1UbZx2yfsD7rXpX3ysXRgczAEGFs"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9680e570f799a021a38d215ad430c5056beea1723d2cfe47fc5d632343ac63fe0860000c88db915a33e10c420c5dd65368500a6823403ea3055100000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "0e570f799a021a38d215ad430c5056beea1723d2cfe47fc5d632343ac63fe086",
                  gameName: "bullfight",
                  username: "kovafri54321",
                  contract: "eosio.token",
                  betAsset: "0.0016 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "0e570f799a021a38d215ad430c5056beea1723d2cfe47fc5d632343ac63fe0860000c88db915a33e10c420c5dd65368500a6823403ea3055100000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3707,
        net_usage_words: 25,
        trx: {
          id:
            "3df948adff2b0d2bc0db39a7ee83c43f282ce71da50c6be875d16b1272162ac5",
          signatures: [
            "SIG_K1_KaBRJ39ZYxMtJm5Fqe1cryMD4ifVSQNgZZaFvipbP7D1REi62W1eJE6XCrgwU1thzdcnxTJgRUfZQbz6JKZ7KR2eURjYYP"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968d30b74d3d7a5bf0ea0e4ec4b96bd06836a5bd7a13525af491168988b24d797100000c88db915a33ec0e9545767bd829700a6823403ea3055b80b00000000000004454f53000000000f0000000000000004454f5300000000a09861fe48938569073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "d30b74d3d7a5bf0ea0e4ec4b96bd06836a5bd7a13525af491168988b24d79710",
                  gameName: "bullfight",
                  username: "my1futurenow",
                  contract: "eosio.token",
                  betAsset: "0.3000 EOS",
                  houseEdgeAsset: "0.0015 EOS",
                  referer: "ha2tambygage",
                  memo: "1767816"
                },
                hex_data:
                  "d30b74d3d7a5bf0ea0e4ec4b96bd06836a5bd7a13525af491168988b24d797100000c88db915a33ec0e9545767bd829700a6823403ea3055b80b00000000000004454f53000000000f0000000000000004454f5300000000a09861fe489385690731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 784,
        net_usage_words: 14,
        trx: {
          id:
            "1eece26e1eb0d2f891ec5f979cd23718b4bdcbf4eff0fe76ba547345f94d0530",
          signatures: [
            "SIG_K1_KaLFPR3ZZPtByeYq2zoai3kGZqPVWFUcbpFgeDpHwduJSETjPmf3RMfm51XA6sfYSuzzEFroQVvDwo86UA5fbvts1twoxW"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ed218e5dd1d7b03c5a970000000001a026a59a4d8331550000005265a7a09101908a36a15cb6a2ca0000000050cda6c112908a36a15cb6a2ca430318d9dc042a4ee8da00",
          transaction: {
            expiration: "2019-09-27T14:51:25",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "makeitem",
                authorization: [
                  {
                    actor: "telfgr51au5d",
                    permission: "sanguo"
                  }
                ],
                data: {
                  from: "telfgr51au5d",
                  code: 835,
                  block: 81582360,
                  checksum: 3672657450
                },
                hex_data: "908a36a15cb6a2ca430318d9dc042a4ee8da"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 637,
        net_usage_words: 21,
        trx: {
          id:
            "ea8798078a5d2d4e234e9b6d53d3f3343496158bfe882844e3116f9a3b5bf45c",
          signatures: [
            "SIG_K1_KAFAobTJV8YZ1KJmd8n96629at2BA5i7YMwZHocwq4Vm2CUzJqgXaZMKSLkoJvom1qKsmTcQRs12Mwn1j4JTTKWHyC6C7p"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5ddfd86ef0ca6a0000000001001480c83c884c3c00000040ed48b1ba01302645531d3669fb00000000a8ed32324a05671a0000000000001f32f7a5fcd0fb0f8ad5c507ce9805b737d0d7bf65b425cb1e937f51a78a15b74f6db4ff0d93f4a16801ecc8dda0e6eb528bfc4f50f1e3c088dcbd6713a6e69d1c00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55519,
            ref_block_prefix: 1791684718,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "blackjack.e",
                name: "resolve",
                authorization: [
                  {
                    actor: "zhongbencon3",
                    permission: "active"
                  }
                ],
                data: {
                  id: 1730309,
                  sig:
                    "SIG_K1_K1vX5jqrDfzFL98zJBDktiK4SLR2EJSKLz1LBHETdDZQ8qj6ZnZye3LckMheH9aCbC2gd8Tp95pGiQrvwHeZ9AFM274E9J"
                },
                hex_data:
                  "05671a0000000000001f32f7a5fcd0fb0f8ad5c507ce9805b737d0d7bf65b425cb1e937f51a78a15b74f6db4ff0d93f4a16801ecc8dda0e6eb528bfc4f50f1e3c088dcbd6713a6e69d1c"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 550,
        net_usage_words: 13,
        trx: {
          id:
            "0db3e5fe9588875be827975428324ee7cd861739bceef3a0c172bbe91b0c496e",
          signatures: [
            "SIG_K1_K2MXS7eepjBZ35cNz89WtQzC3bpCTVdp761AihUnf9Qd8A7eeJUW6is1ATtHJMevp5sAVv6Geg9p7sEm5kvL7VKZo1RQQT"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5dd1d7b03c5a97000000000190a79c944ad532cd0000c03366946e4d010024a08c32d36a3400000000a8ed32320c0024a08c32d36a340000010100",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "tothemoonmnt",
                name: "dprdctlns",
                authorization: [
                  {
                    actor: "alphagogo.m",
                    permission: "active"
                  }
                ],
                data: {
                  user: "alphagogo.m",
                  product_category: 0,
                  productlines: [1]
                },
                hex_data: "0024a08c32d36a3400000101"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 791,
        net_usage_words: 147,
        trx: {
          id:
            "185feafcfde9c79949309afc926e5c0a58e06038ec6b56ad71bafd27fc06c229",
          signatures: [
            "SIG_K1_KBLvzcGzk4oj9WHJwnYMjCTTfJBFrtMQ6E7P4wfC2Smc3MEexMdaZsKgN8XEvZTWz6S1haJTmeLfPRoa4tGzBgp1GZkgyh"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b6088d524f9634269a8fc62958eaaf8629b642d4abb85ff30aa824b381418dcacb1010c420c5dd6536858c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3339365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303820454f53222c227761676572223a22302e3030313620454f53222c227061796f7574223a22302e3030303820454f53222c2263757272656e74416d6f756e74223a22392e3936373320454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "8d524f9634269a8fc62958eaaf8629b642d4abb85ff30aa824b381418dcacb10",
                  username: "kovafri54321",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.396Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0008 EOS",
                    wager: "0.0016 EOS",
                    payout: "0.0008 EOS",
                    currentAmount: "9.9673 EOS"
                  }
                },
                hex_data:
                  "8d524f9634269a8fc62958eaaf8629b642d4abb85ff30aa824b381418dcacb1010c420c5dd6536858c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3339365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303820454f53222c227761676572223a22302e3030313620454f53222c227061796f7574223a22302e3030303820454f53222c2263757272656e74416d6f756e74223a22392e3936373320454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 804,
        net_usage_words: 147,
        trx: {
          id:
            "7e87b9e83010fc29d05334cb1baa0338714f3c93d938c4b6223ed42b8ec7c5ce",
          signatures: [
            "SIG_K1_KmSdornNe6KTXhtWjvGnm2k2mUZeg7vbsgey4zFYy7XQVXANtQYV7S8GtoZW4hY8Yma41qvAouuz1tBE4YCejLdwc1A98W"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b708ebe7ca135776ee49eb4dda19c920c979cd1d949041bb4615404b8f4f2cb3ce85204450ea5cb5a3c38d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3430365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030313420454f53222c227761676572223a22302e3030323920454f53222c227061796f7574223a22302e3030313520454f53222c2263757272656e74416d6f756e74223a2231382e3337383920454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "ebe7ca135776ee49eb4dda19c920c979cd1d949041bb4615404b8f4f2cb3ce85",
                  username: "silverbee122",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.406Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0014 EOS",
                    wager: "0.0029 EOS",
                    payout: "0.0015 EOS",
                    currentAmount: "18.3789 EOS"
                  }
                },
                hex_data:
                  "ebe7ca135776ee49eb4dda19c920c979cd1d949041bb4615404b8f4f2cb3ce85204450ea5cb5a3c38d087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3430365a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030313420454f53222c227761676572223a22302e3030323920454f53222c227061796f7574223a22302e3030313520454f53222c2263757272656e74416d6f756e74223a2231382e3337383920454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1834,
        net_usage_words: 32,
        trx: {
          id:
            "540c9cb4f4569c6e17fd4a5ba2dd8cc1830e23391874eda5f1237b0585dc5571",
          signatures: [
            "SIG_K1_KXvuP4Q3GmZFaBt731D87gWqYekWUY7GquL2D3452ggw4awNbDRFXgT3DeEaXskXf6Hiz57ZwFeNofGvTbunoJWLg5bjot"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fe208e5dd1d7b03c5a9700000000011082422e6575305500405647ed48b1ba0140a7c3066575305500000000489aa6b94a9fa02a8c5456812a001f605c88a682f864b56f7f6b1fc6ffa5ca21044c7ddf320deb9f101d60387d23383c225aa7bcfd9796923fff80f8b964c0b6a8f58f34b50668a1cfdfb4500ebf7300",
          transaction: {
            expiration: "2019-09-27T14:47:26",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosbetdice11",
                name: "resolvebet",
                authorization: [
                  {
                    actor: "eosbetcasino",
                    permission: "random"
                  }
                ],
                data: {
                  bet_id: "3062824142717493407",
                  sig:
                    "SIG_K1_K7ryLQtsWFhWV8w6aLJBt4qsrt2wWxrgZ7RjnF7Pg7HV8dBrw3JzevYN3yHJ9qxhMkfmrB4jmgDenqsT4zUK121vAduFRH"
                },
                hex_data:
                  "9fa02a8c5456812a001f605c88a682f864b56f7f6b1fc6ffa5ca21044c7ddf320deb9f101d60387d23383c225aa7bcfd9796923fff80f8b964c0b6a8f58f34b50668a1cfdfb4500ebf73"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 810,
        net_usage_words: 21,
        trx: {
          id:
            "4859f9d1090e7e7a90a50c83dd70ae2cdbd547bdc082ff5e5aa012c9dc9c2f1a",
          signatures: [
            "SIG_K1_KYAFGvFZsj3CTJFAAN4uB1BLhpiDWBicCEqs7sBTcS5KVheSKS1neQsVctowHFDXPtSWbB5jRTDAdHeCmkWFyNiZzV7xio"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9482d1d3f16fb9d4d44750af5c9494f3617a14c6642d6b8aef487028db2cd069ba80000c88db915a33e204450ea5cb5a3c300a6823403ea30550f0000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "2d1d3f16fb9d4d44750af5c9494f3617a14c6642d6b8aef487028db2cd069ba8",
                  gameName: "bullfight",
                  username: "silverbee122",
                  contract: "eosio.token",
                  payoutAsset: "0.0015 EOS"
                },
                hex_data:
                  "2d1d3f16fb9d4d44750af5c9494f3617a14c6642d6b8aef487028db2cd069ba80000c88db915a33e204450ea5cb5a3c300a6823403ea30550f0000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 670,
        net_usage_words: 147,
        trx: {
          id:
            "0b17ab2620e72da92bb24942ece09cc4d885f1249e2782104fb797adf9cb8098",
          signatures: [
            "SIG_K1_KgwiMLUxab8bdWFUGA37Q2coVwKyA2HXPxeE1pwEF5iwUTKkepuHE79oFvMcCfhsg2Nv6rRqt2kmJzMyGbchCf9mQb8fyE"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b6083e61eaed0336dbfb9079b3f2ad99f66bd141253ce25c2b998e8745628a27ffa29015bc46fa6ea2618c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3337375a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303720454f53222c227761676572223a22302e3030313520454f53222c227061796f7574223a22302e3030303820454f53222c2263757272656e74416d6f756e74223a22392e3134333320454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "3e61eaed0336dbfb9079b3f2ad99f66bd141253ce25c2b998e8745628a27ffa2",
                  username: "galaxymarket",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.377Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0007 EOS",
                    wager: "0.0015 EOS",
                    payout: "0.0008 EOS",
                    currentAmount: "9.1433 EOS"
                  }
                },
                hex_data:
                  "3e61eaed0336dbfb9079b3f2ad99f66bd141253ce25c2b998e8745628a27ffa29015bc46fa6ea2618c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3337375a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303720454f53222c227761676572223a22302e3030313520454f53222c227061796f7574223a22302e3030303820454f53222c2263757272656e74416d6f756e74223a22392e3134333320454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 875,
        net_usage_words: 27,
        trx: {
          id:
            "ad8f41a342c40089f99d1b65d39231926bb4b5ba1390362d2b1dafb633424693",
          signatures: [
            "SIG_K1_K1Df7veXBW93TGctiFkvVa6ZCGiNUPFEYjcEVBc85PeYE5421fjws7G3hm19KgWr2kC1NEcaoVkFaEejJxsuPBcsQ1mbAB"
          ],
          compression: "none",
          packed_context_free_data: "00",
          context_free_data: [],
          packed_trx:
            "e0208e5dd1d7b03c5a970000000001301d57c8a58cf5cd0000000044a3b6ba01b0d555c8a58cf5cd00000000a8ed323250d239d40baa66fff870ba74ae037565cb29e85672188ac7ea99e5d721646a9f67f5f6180639441cba1937d913d2e526c0a2ae02cc95e398ec627d0d598bd81a75000000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "trustdicewin",
                name: "reveal",
                authorization: [
                  {
                    actor: "trustdicerev",
                    permission: "active"
                  }
                ],
                data: {
                  seed:
                    "d239d40baa66fff870ba74ae037565cb29e85672188ac7ea99e5d721646a9f67",
                  seed_hash:
                    "f5f6180639441cba1937d913d2e526c0a2ae02cc95e398ec627d0d598bd81a75",
                  jackpot: "0.0000 EOS"
                },
                hex_data:
                  "d239d40baa66fff870ba74ae037565cb29e85672188ac7ea99e5d721646a9f67f5f6180639441cba1937d913d2e526c0a2ae02cc95e398ec627d0d598bd81a75000000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4786,
        net_usage_words: 102,
        trx: {
          id:
            "7aba6c60a037bf53c433cd37a11ae43228788a2dc9556e193660765e4167c1ea",
          signatures: [
            "SIG_K1_KiChq1g3zBENc2Z2VzkYc6iwAJxmjhqbiHakXCa3VT25CiwUQGPdAxbdPe9zYgbKgJqBo7kkYjbZzCTeibFKgjdGww8hux"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fd208e5d17d9d0e8a51f000000000500a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a314500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373638222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373438222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a980800000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373639222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89ad41fc81b000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373437222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89af04700000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373730222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:47:25",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.7713 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.768",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a314500000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373638222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.748",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373438222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "0.2200 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.769",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a980800000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373639222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "4.66100180 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.747",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89ad41fc81b000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373437222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.8416 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.770",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89af04700000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373730222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 315,
        net_usage_words: 16,
        trx: {
          id:
            "5a1e3aedd78cd2c3d2f5ae3121b592660f07c9d14b812dd925aff0c5b23c9964",
          signatures: [
            "SIG_K1_KfaEaP9k3zpSeu4bP1MBLwvm6CqVam7jhuahC3FyBArxy3g9pjWmMvqpdqt74LZC9GUTqhphT9k9bJqzFfycC3RmdSPdzp"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d16d921efb9b00000000001802136592197b23a0000c426ab4da5ba015035bd4c2197b23a00aeda57610cb1c92094c41e64017fd08efc9edc60941caab70b62bf4796febe3299edce13eac9219d00",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55574,
            ref_block_prefix: 2964975393,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "removetask",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "94c41e64017fd08efc9edc60941caab70b62bf4796febe3299edce13eac9219d"
                },
                hex_data:
                  "94c41e64017fd08efc9edc60941caab70b62bf4796febe3299edce13eac9219d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1359,
        net_usage_words: 14,
        trx: {
          id:
            "64c2d861e364d87240e50edc17caac929e765c09edf10c05d2096e29d2ed9914",
          signatures: [
            "SIG_K1_K9nWpD2yLKrG96S9urE9NuoUnEWiN2wS3tS8SQg5TEKLX2ePnWqjg7r3L3CJA5WxFETjkxEHat4KcN6s1kQnkbvsLihHww"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "1a238e5d1ad92904ff680000000001a026a59a4d8331550000000064732445014075a23a19dda8c900000000a8ed3232104075a23a19dda8c918d9dc044285bd2800",
          transaction: {
            expiration: "2019-09-27T14:56:26",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "combat",
                authorization: [
                  {
                    actor: "taohuaduoduo",
                    permission: "active"
                  }
                ],
                data: {
                  from: "taohuaduoduo",
                  block: 81582360,
                  checksum: 683509058
                },
                hex_data: "4075a23a19dda8c918d9dc044285bd28"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3971,
        net_usage_words: 47,
        trx: {
          id:
            "ab11c95d45295b2f93f775a582d70db34007169a9b51b9e326d9bfe4de98096b",
          signatures: [
            "SIG_K1_Jznwz5fkBJUVyFAs8eg5Xc8QAH8U9o7ozoPBMSRTsXfTSTuwK7Nu6cdvwi7CHgdYHLqAaYjpapGS4e5r2u8bWH1MRCZGJp"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570162f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d353034393464633739363833626237306163616463646138653438343938393938356338383335356163636231343066316435386133626637306336353866302d47463031627a4c6251516f5a413931656f7464662d313536393539373437392d5349475f4b315f4b5967784670334a64394b684e426e797546626e326e5679416a45464b5a4e5934727a474b6b6e31523734775044634e4444386e656b4c44347363784e46313235565a4b6f365970744a625a483934766d38664e5a56773739704d504e4100",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "b",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-50494dc79683bb70acadcda8e484989985c88355accb140f1d58a3bf70c658f0-GF01bzLbQQoZA91eotdf-1569597479-SIG_K1_KYgxFp3Jd9KhNBnyuFbn2nVyAjEFKZNY4rzGKkn1R74wPDcNDD8nekLD4scxNF125VZKo6YptJbZH94vm8fNZVw79pMPNA"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570162f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d353034393464633739363833626237306163616463646138653438343938393938356338383335356163636231343066316435386133626637306336353866302d47463031627a4c6251516f5a413931656f7464662d313536393539373437392d5349475f4b315f4b5967784670334a64394b684e426e797546626e326e5679416a45464b5a4e5934727a474b6b6e31523734775044634e4444386e656b4c44347363784e46313235565a4b6f365970744a625a483934766d38664e5a56773739704d504e41"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1788,
        net_usage_words: 25,
        trx: {
          id:
            "f8c62c84fdec4e39ec096124c0fdba0984ca44285e0eb5fcc03904bfdbc23fc8",
          signatures: [
            "SIG_K1_KBUgXSMG5zLn6cj5MqzVztGKrZ58mF2yB5DbdWBxiwrp3SxXmVnEXoXSf8AfMqMyWXaJR42k5dd24hPb44E8TxFGWRDEwR"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968f531c74b634c62707400b28162058dfccce25b6d0e7a5bdcc4c55feb9d89f8bf0000c88db915a33e9015bc46fa6ea26100a6823403ea30550f0000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "f531c74b634c62707400b28162058dfccce25b6d0e7a5bdcc4c55feb9d89f8bf",
                  gameName: "bullfight",
                  username: "galaxymarket",
                  contract: "eosio.token",
                  betAsset: "0.0015 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "f531c74b634c62707400b28162058dfccce25b6d0e7a5bdcc4c55feb9d89f8bf0000c88db915a33e9015bc46fa6ea26100a6823403ea30550f0000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1266,
        net_usage_words: 25,
        trx: {
          id:
            "ed5c52847c4403d974b1ea63bf52861f14ac9f204f29c90065727a96cd77ceef",
          signatures: [
            "SIG_K1_Jx7vwQFrDKgUuoiX52Wp3oou4v83YTVCyyTfWcmuHWPrPw5Qj3LKSkoTpgKBVqXuxZYSyHru9h7MYkvdvTbDHHLhFdSuNU"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968a5a7b118eca616f304108ea9a870cd9556a7d3d120712d62d0f0db9ad637c0c00000c88db915a33e204450ea5cb5a3c300a6823403ea30551d0000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "a5a7b118eca616f304108ea9a870cd9556a7d3d120712d62d0f0db9ad637c0c0",
                  gameName: "bullfight",
                  username: "silverbee122",
                  contract: "eosio.token",
                  betAsset: "0.0029 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "a5a7b118eca616f304108ea9a870cd9556a7d3d120712d62d0f0db9ad637c0c00000c88db915a33e204450ea5cb5a3c300a6823403ea30551d0000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 859,
        net_usage_words: 14,
        trx: {
          id:
            "ace75843d538e2a052f45ee475282890555e303ff2f810306fedfad91164677c",
          signatures: [
            "SIG_K1_Kia9zcy6rN35iMnWMkzJtD7LbNFSyi742qLKFbsFRr91mhkQd7wZUPkjmnqJkovBPyBfmWzhEtytZkAPQpncw1Tc7vAP63"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "1a238e5d1bd99c46613a0000000001a026a59a4d833155000000006473244501709c20cb4a6643f800000000a8ed323210709c20cb4a6643f819d9dc04907115a300",
          transaction: {
            expiration: "2019-09-27T14:56:26",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eossanguoone",
                name: "combat",
                authorization: [
                  {
                    actor: "z11qgmqf42ib",
                    permission: "active"
                  }
                ],
                data: {
                  from: "z11qgmqf42ib",
                  block: 81582361,
                  checksum: 2736091536
                },
                hex_data: "709c20cb4a6643f819d9dc04907115a3"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 983,
        net_usage_words: 25,
        trx: {
          id:
            "2e2a8fe6eb0583418b3d8dea75059f0f3a103b309f50fe590379f65a9142b4a9",
          signatures: [
            "SIG_K1_KZJ3MKXpWZNztAy76oxgDu9j8jYNhKJYphHoEyJRui7feBuud8aZo6NTZsNdSQtka4xsXiPn3W7bVw4UHPm2K5t7ohZnd8"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "f8208e5dc5d77f14d5aa000000000100a6823403ea3055000000572d3ccdcd01504ac10fe207f18300000000a8ed323239504ac10fe207f18370554a2662aa2ec4803e00000000000004454f530000000018322c32363135393932372c747064617070696e636f6d652c00",
          transaction: {
            expiration: "2019-09-27T14:47:20",
            ref_block_num: 55237,
            ref_block_prefix: 2866091135,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "kjskjskjs555",
                    permission: "active"
                  }
                ],
                data: {
                  from: "kjskjskjs555",
                  to: "skreosladder",
                  quantity: "1.6000 EOS",
                  memo: "2,26159927,tpdappincome,"
                },
                hex_data:
                  "504ac10fe207f18370554a2662aa2ec4803e00000000000004454f530000000018322c32363135393932372c747064617070696e636f6d652c"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 724,
        net_usage_words: 21,
        trx: {
          id:
            "0c9d662f09370c37ce3525a9635cf2da69365ef748601dea37bf30a65b7b4c9d",
          signatures: [
            "SIG_K1_K6gabuGovhBJeP4fGyzWCAi93tbt68uHQ2NuCJGjBKd6dGSzHMu3j7SV8nnxJN4jAhd4oTR7JqqDodarbUxXzyFWYodW8R"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948e7a396f0fa666d877f3de685276783a954ae097fa25bb3f39081b57fd02bbf8e0000c88db915a33e10d8669b6db6d90e00a6823403ea3055260000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "e7a396f0fa666d877f3de685276783a954ae097fa25bb3f39081b57fd02bbf8e",
                  gameName: "bullfight",
                  username: "1vgvgvgvgvg1",
                  contract: "eosio.token",
                  payoutAsset: "0.0038 EOS"
                },
                hex_data:
                  "e7a396f0fa666d877f3de685276783a954ae097fa25bb3f39081b57fd02bbf8e0000c88db915a33e10d8669b6db6d90e00a6823403ea3055260000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 681,
        net_usage_words: 21,
        trx: {
          id:
            "d3f013d40997fdc479b1136c55e009bef536e955091e2e2cb4ded2e5aef77c53",
          signatures: [
            "SIG_K1_KYdDgiFDcFMgFbbLSAgDvnN25bJovyLADMjzx5wR1Bko93kXrjsybNasY7G44eJ4YbnE4YJna3feTYaknCYGLPtHqhTmGy"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c9487a65e7fc126f44a71624c586d45b85671c878923e7bcb97be7f908d65cecc1b40000c88db915a33e80d554cc5199be6700a6823403ea3055260000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "7a65e7fc126f44a71624c586d45b85671c878923e7bcb97be7f908d65cecc1b4",
                  gameName: "bullfight",
                  username: "gyzdmoigenes",
                  contract: "eosio.token",
                  payoutAsset: "0.0038 EOS"
                },
                hex_data:
                  "7a65e7fc126f44a71624c586d45b85671c878923e7bcb97be7f908d65cecc1b40000c88db915a33e80d554cc5199be6700a6823403ea3055260000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 653,
        net_usage_words: 21,
        trx: {
          id:
            "8b55d2bc10f5f3f16e13b454ec92b6213193bca34ae83f4f634bb43c69d53b0b",
          signatures: [
            "SIG_K1_K2142oG3jkco12siQcj8fhpV5gG4GUNKwfpQqpTbDF7yAEvLgqkD8VEcNmikWy32PZXzz5JfaVNMHKBu3vKRY7NB1Q8UV2"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948aff1ee68446dacc3f3a94dc8f80153c909a0f91cdc87763eb89202454b13f29d0000c88db915a33e90dd75155f95b19100a6823403ea3055260000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "aff1ee68446dacc3f3a94dc8f80153c909a0f91cdc87763eb89202454b13f29d",
                  gameName: "bullfight",
                  username: "masterspirit",
                  contract: "eosio.token",
                  payoutAsset: "0.0038 EOS"
                },
                hex_data:
                  "aff1ee68446dacc3f3a94dc8f80153c909a0f91cdc87763eb89202454b13f29d0000c88db915a33e90dd75155f95b19100a6823403ea3055260000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 172,
        net_usage_words: 25,
        trx: {
          id:
            "ead523e0c888cda6c8cea585923ef515258e9c7c92bef9ef7dbebe37488c0649",
          signatures: [
            "SIG_K1_Kj9LjCbmVZKDFMvo3dE71Yj9iY1zerHejSgQCHrhTEtH83gdyEGn77sxLGcg1h8A1EELaFv8JsJiFD1CFVX4six9qVBwyi"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5dd1d7b03c5a970000000001e08f390d9b362fad00000000a44b91ba01104619231421ee3c00000000a8ed32326b104619231421ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a61515758345257546250474432504744615047486c69543d3d00",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "bnr225133531",
                    permission: "active"
                  }
                ],
                data: {
                  account: "bnr225133531",
                  content:
                    "1|hbM2CAMcdZ9xLmrjLmLlOFDlgKozCVL6LFMPdZwoLlzjLp9ldpYmgFL6LFMEfqUsB2aoOcjaQWX4RWTbPGD2PGDaPGHliT=="
                },
                hex_data:
                  "104619231421ee3c62317c68624d3243414d63645a39784c6d726a4c6d4c6c4f46446c674b6f7a43564c364c464d50645a776f4c6c7a6a4c70396c6470596d67464c364c464d45667155734232616f4f636a61515758345257546250474432504744615047486c69543d3d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 695,
        net_usage_words: 21,
        trx: {
          id:
            "410f9226712dd4bc8ccc57cc315a8c678055929bfbd81beaabb995c871d2ff29",
          signatures: [
            "SIG_K1_KiFnNiMDy4dYDkfVfZ4GWxd6WB4RqszpqpovhoPQ7aTYPtWCCcSBoNRyeLoXHeh7VGQSeyvPL9D5rMTWUix93xygu4GgfV"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae0000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94828a21c837e101cc60b2ba0c89d2038d70591a7b078a8265bc3797b1f05872fd20000c88db915a33e104d8ed520ffcd4500a6823403ea3055250000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "28a21c837e101cc60b2ba0c89d2038d70591a7b078a8265bc3797b1f05872fd2",
                  gameName: "bullfight",
                  username: "crazycapltal",
                  contract: "eosio.token",
                  payoutAsset: "0.0037 EOS"
                },
                hex_data:
                  "28a21c837e101cc60b2ba0c89d2038d70591a7b078a8265bc3797b1f05872fd20000c88db915a33e104d8ed520ffcd4500a6823403ea3055250000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1280,
        net_usage_words: 25,
        trx: {
          id:
            "531fe83b95df56ed6a689b9ed6267e17a707a505fac8749479bc6cfceb323cde",
          signatures: [
            "SIG_K1_Khx5bj8rFCnPQLX4wziFa3AcBS9EnzQy4sjbW2zQ8DhQw8xUkoRt4pn4v5PU6XGDqdEGePgrxDsuCnUQbHSbP8dgy5AHMc"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9684e1bdb3bf17d25ce4c5dbdf85e26fb2f5069bd961fdbba4bbb934cb0345a7c760000c88db915a33e60aa8b9c4233bf0800a6823403ea3055290400000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "4e1bdb3bf17d25ce4c5dbdf85e26fb2f5069bd961fdbba4bbb934cb0345a7c76",
                  gameName: "bullfight",
                  username: "12znakowlipa",
                  contract: "eosio.token",
                  betAsset: "0.1065 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "4e1bdb3bf17d25ce4c5dbdf85e26fb2f5069bd961fdbba4bbb934cb0345a7c760000c88db915a33e60aa8b9c4233bf0800a6823403ea3055290400000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1415,
        net_usage_words: 25,
        trx: {
          id:
            "f913610f467a67124a7a018709fed4003623dedfc640c2c008fcdffc6c676f19",
          signatures: [
            "SIG_K1_KVqnwkHmzqJEqbMPASKEEWDPnRDAscgQmBQ1rjXbUymQ8X1VvTBPhARsx5cnEc1WEFUeD4WNEN7U54qy3UfDHTK7YkVmRb"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968cddb8be81ed7764ba89f318b09a3e88ef9fbd2583fbb1178761fff66d77a02370000c88db915a33e80d554cc5199be6700a6823403ea3055470000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "cddb8be81ed7764ba89f318b09a3e88ef9fbd2583fbb1178761fff66d77a0237",
                  gameName: "bullfight",
                  username: "gyzdmoigenes",
                  contract: "eosio.token",
                  betAsset: "0.0071 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "cddb8be81ed7764ba89f318b09a3e88ef9fbd2583fbb1178761fff66d77a02370000c88db915a33e80d554cc5199be6700a6823403ea3055470000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1268,
        net_usage_words: 25,
        trx: {
          id:
            "8de3547262c68f4a32581635df2ff401151e77fa244126c91d7fc333595d0166",
          signatures: [
            "SIG_K1_KW48i5526o4oQQgqKJgHhEhcEug8TdxKnSQRDRq1ehgS5pUKjzdyQea3tXzTzFxw3bbDjq6dsQ6rb34KpsV616sAc5jcN3"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9684466f750c347f8ef9cc84fe79786bdcfb41d17164d357f67c22f5f0cf3605a710000c88db915a33e104d8ed520ffcd4500a6823403ea3055470000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "4466f750c347f8ef9cc84fe79786bdcfb41d17164d357f67c22f5f0cf3605a71",
                  gameName: "bullfight",
                  username: "crazycapltal",
                  contract: "eosio.token",
                  betAsset: "0.0071 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "4466f750c347f8ef9cc84fe79786bdcfb41d17164d357f67c22f5f0cf3605a710000c88db915a33e104d8ed520ffcd4500a6823403ea3055470000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1293,
        net_usage_words: 25,
        trx: {
          id:
            "188c3bce23f02f105bc58958fe5ca8b97900de5e6f61369e747ad607f4d68486",
          signatures: [
            "SIG_K1_KBbzTqceBWvz31bGyfhPLqU2iKUMYDSPknJ7rjJ84s7c7hfk4cCip3C6qRF4cCt95bhmddcJwN5niGobezVb1frkSfhDnK"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9682dbcfae2a2274906bcea2ae59834553aeb1151dd26afdbc1c8405998cfecd1680000c88db915a33ea09861ff4d9b876500a6823403ea30554d0000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "2dbcfae2a2274906bcea2ae59834553aeb1151dd26afdbc1c8405998cfecd168",
                  gameName: "bullfight",
                  username: "gq3tqnjzgage",
                  contract: "eosio.token",
                  betAsset: "0.0077 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "2dbcfae2a2274906bcea2ae59834553aeb1151dd26afdbc1c8405998cfecd1680000c88db915a33ea09861ff4d9b876500a6823403ea30554d0000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1372,
        net_usage_words: 25,
        trx: {
          id:
            "52b7235e2cc8d8be2bfcc7bdf540b3322935d37e8f62fab0d5d80bb0616b53dd",
          signatures: [
            "SIG_K1_KcS8nRFq3DnNEfxPrpnBEBG8SemJqBwtuswdefYb17N2nnm4NLg1xddnXuXCjmD8r12QD5r6NVJfqnxWZqME12Z6goZJSB"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968526ca2f3566170f0d2f572cb8f412598006f36e3260e00083eca7bdb8a81a0f10000c88db915a33e706936ee567a6b3500a6823403ea30552e0300000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "526ca2f3566170f0d2f572cb8f412598006f36e3260e00083eca7bdb8a81a0f1",
                  gameName: "bullfight",
                  username: "appropriator",
                  contract: "eosio.token",
                  betAsset: "0.0814 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "526ca2f3566170f0d2f572cb8f412598006f36e3260e00083eca7bdb8a81a0f10000c88db915a33e706936ee567a6b3500a6823403ea30552e0300000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 714,
        net_usage_words: 147,
        trx: {
          id:
            "37e41f10578e3b2c52c08051ff6da339ba3d5b26293af57653b4f74b34668b80",
          signatures: [
            "SIG_K1_KWQMjsKhizWLhzTJ271TcLdSc8sSrYyghXgFxsv6wLGWsskgWbTArYBqGEdFPg7EQawZ2MuPUmJg7SxSoHRfVu6xoGBnC1"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b608087602f5a2eb794033bfbe733f9e6cffb32c0118df3f50e7be98fb65d00c547e104230e76ea8ae918c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3334335a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303120454f53222c227761676572223a22302e3030303220454f53222c227061796f7574223a22302e3030303120454f53222c2263757272656e74416d6f756e74223a22302e3931343220454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "087602f5a2eb794033bfbe733f9e6cffb32c0118df3f50e7be98fb65d00c547e",
                  username: "marekvrba111",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.343Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0001 EOS",
                    wager: "0.0002 EOS",
                    payout: "0.0001 EOS",
                    currentAmount: "0.9142 EOS"
                  }
                },
                hex_data:
                  "087602f5a2eb794033bfbe733f9e6cffb32c0118df3f50e7be98fb65d00c547e104230e76ea8ae918c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3334335a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303120454f53222c227761676572223a22302e3030303220454f53222c227061796f7574223a22302e3030303120454f53222c2263757272656e74416d6f756e74223a22302e3931343220454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1079,
        net_usage_words: 108,
        trx: {
          id:
            "129456efaee59aaaba960eefb0c298268bd66119cbfca40e67a46253e3bc3ed7",
          signatures: [
            "SIG_K1_K3v2kxQUS12hLFS3zJ8UQby4tcmzrAvaruhzdZhLHHTm6ZNRT8c6164JQx7NW388ci8utdRKaVdroBvPPw3xouffjcft9M"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9fc050227eb44245fcf0c6ae4da83bcc955a845f4835a4eefad89f137ae8b6dc6cb69c0e9545767bd8297d2057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3332355a222c227a6f6e65223a342c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3139383520454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3439383520454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "0227eb44245fcf0c6ae4da83bcc955a845f4835a4eefad89f137ae8b6dc6cb69",
                  username: "my1futurenow",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.325Z",
                    zone: 4,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zoneDeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.1985 EOS",
                    wager: "0.3000 EOS",
                    payout: "0.4985 EOS"
                  }
                },
                hex_data:
                  "0227eb44245fcf0c6ae4da83bcc955a845f4835a4eefad89f137ae8b6dc6cb69c0e9545767bd8297d2057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3332355a222c227a6f6e65223a342c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3139383520454f53222c227761676572223a22302e3330303020454f53222c227061796f7574223a22302e3439383520454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 762,
        net_usage_words: 21,
        trx: {
          id:
            "e4bcec7367fe524490b0f2920d14dd2fa5c7015d0ddaffda0e9dba668d55cf5f",
          signatures: [
            "SIG_K1_KXeqyxtrxTttLgSfW98nZ1ycv7qYht4vUHau5nddF6mVD2vcqYdVwpQTVemT8BRxmZChWMMvTxtRcJ3VeiV1DqqWyDmH8r"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c948e4bbb282b56c134216f20afcb9c12b479ab27faa7eceadaba1c545d7be2dcf630000c88db915a33ec0e9545767bd829700a6823403ea30555a1700000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "e4bbb282b56c134216f20afcb9c12b479ab27faa7eceadaba1c545d7be2dcf63",
                  gameName: "bullfight",
                  username: "my1futurenow",
                  contract: "eosio.token",
                  payoutAsset: "0.5978 EOS"
                },
                hex_data:
                  "e4bbb282b56c134216f20afcb9c12b479ab27faa7eceadaba1c545d7be2dcf630000c88db915a33ec0e9545767bd829700a6823403ea30555a1700000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 208,
        net_usage_words: 33,
        trx: {
          id:
            "7755b12068c9a4655aa3a29bfbd60dad03f6fe7e41f82e93750dbadea695ad1e",
          signatures: [
            "SIG_K1_KbpPxJ2iyqKVJuK8hnipjBhfx5yhUpBqfeo6LPWYoFyw1LdEGeQV1PQ3m1zMuziYAJt4r2bGCASX7UHAa43a16kzKxMLWt"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d1bd99c46613a000000000190348dc69b583155000000000010a3f20190348dc69b58315500000000a8ed3232a70190348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f353837616435373600",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55579,
            ref_block_prefix: 979453596,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplayaloud",
                name: "yell",
                authorization: [
                  {
                    actor: "eosplayaloud",
                    permission: "active"
                  }
                ],
                data: {
                  u: "eosplayaloud",
                  memo:
                    "区块链 Hash 值开奖平台 EOSPlay 新游戏 HASH 牛牛上线! 另有乐透,骰子,老虎机等着您赢得奖池回报!!! https://eosplay.com/?587ad576"
                },
                hex_data:
                  "90348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f3538376164353736"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd91cd0befbbc1abc956cce6d935abb58337f59dfb4f50588440d5aa2550d",
    block_num: 81582364,
    ref_block_prefix: 1821752346
  },
  {
    timestamp: "2019-09-27T14:46:26.500",
    producer: "eoseouldotio",
    confirmed: 0,
    previous:
      "04dcd91aa1fa4c232904ff680c1fcbe92b104b04de60d8d454e534df03d37b43",
    transaction_mroot:
      "9fc443f5555770990fe5a121315f86e71af831579fc9d4baa89bc374d41e5a21",
    action_mroot:
      "2f501a0862887990b03eb5600fddd94c5c2844d75b0de3f3a8f2eddd2b2ba3ed",
    schedule_version: 1375,
    producer_signature:
      "SIG_K1_K21WFeBXvsPGT34A35isAPcwUjKizStZPSpdcG7nTadgTbAHJU1HqE87A7uGDWd38pKocBxxynWsvG7Zr6HRAdJZXCby5J",
    transactions: [
      {
        status: "executed",
        cpu_usage_us: 129,
        net_usage_words: 0,
        trx: "4ae83a2d4ceab62d5a0ab3e573f13055c0aea9fef96d73c6486c2a559ba5f75c"
      },
      {
        status: "executed",
        cpu_usage_us: 100,
        net_usage_words: 0,
        trx: "54046b9ac95231d8edb5bc0be7e7d1972365efd971210f5372385f39728cf253"
      },
      {
        status: "executed",
        cpu_usage_us: 216,
        net_usage_words: 0,
        trx: "4c7160752bd3439fd2f242a6f08778cf803ed0c70f19bc0053467a3d9850ed8f"
      },
      {
        status: "executed",
        cpu_usage_us: 332,
        net_usage_words: 72,
        trx: {
          id:
            "555fba5a7fa78eea4f4f8e2c294e1e3cdfad2170e3110bc6644ac29e07de388d",
          signatures: [
            "SIG_K1_KcyFbtQVVd9myav9XDDig1AiSrWssB44S7WiS1jLpuHNKmQJV1Fg1H6kcLCuv2n7aA8xxyxXHPmgLsDkCyn846qQx4nWCG"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fa208e5d12d9695c965b0000000001401da4f1f83c353d000000006293198d01401da4f1f83c353d00000000a8ed3232e2032434656133363764372d623962382d343733362d623931372d3238623064323963656364349c037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a226a6f6579737472617562222c227461736b5f6e616d65223a2253656c6c2055532073746f636b732033302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a33302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c22574d545c222c5c226f72646572736964655c223a5c2253656c6c5c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c2231375c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2234656133363764372d623962382d343733362d623931372d323862306432396365636434222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d0a6a6f657973747261756213323031392d30392d32375431343a34363a323500",
          transaction: {
            expiration: "2019-09-27T14:47:22",
            ref_block_num: 55570,
            ref_block_prefix: 1536580713,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bountyblokio",
                name: "logtask",
                authorization: [
                  {
                    actor: "bountyblokio",
                    permission: "active"
                  }
                ],
                data: {
                  task_guid: "4ea367d7-b9b8-4736-b917-28b0d29cecd4",
                  task_data: {
                    app_name: "HOWTHEMARKETWORKS",
                    account_name: "joeystraub",
                    task_name: "Sell US stocks 30 times",
                    qty_logged: 1,
                    qty_required: 30,
                    param: {
                      symbol: "WMT",
                      orderside: "Sell",
                      ordertype: "Market",
                      exchange: "US",
                      orderqty: "17",
                      securitytype: "Equities"
                    },
                    task_id: "4ea367d7-b9b8-4736-b917-28b0d29cecd4",
                    challenge_id: "b0daa55c-d444-4375-8465-9b3d00af237e",
                    task_type: "Regular"
                  },
                  account_name: "joeystraub",
                  create_date: "2019-09-27T14:46:25"
                },
                hex_data:
                  "2434656133363764372d623962382d343733362d623931372d3238623064323963656364349c037b226170705f6e616d65223a22484f575448454d41524b4554574f524b53222c226163636f756e745f6e616d65223a226a6f6579737472617562222c227461736b5f6e616d65223a2253656c6c2055532073746f636b732033302074696d6573222c227174795f6c6f67676564223a312e302c227174795f7265717569726564223a33302e303030302c22706172616d223a227b5c2273796d626f6c5c223a5c22574d545c222c5c226f72646572736964655c223a5c2253656c6c5c222c5c226f72646572747970655c223a5c224d61726b65745c222c5c2265786368616e67655c223a5c2255535c222c5c226f726465727174795c223a5c2231375c222c5c227365637572697479747970655c223a5c2245717569746965735c227d222c227461736b5f6964223a2234656133363764372d623962382d343733362d623931372d323862306432396365636434222c226368616c6c656e67655f6964223a2262306461613535632d643434342d343337352d383436352d396233643030616632333765222c227461736b5f74797065223a22526567756c6172227d0a6a6f657973747261756213323031392d30392d32375431343a34363a3235"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 554,
        net_usage_words: 108,
        trx: {
          id:
            "f476b9666fdbde558c9df5a21056a8cd771e9460d15a59241cdb7d3025c492a8",
          signatures: [
            "SIG_K1_K2Xta7rZTtvrnSt1BZSNYmaqjoT615c5ZH6VKbfUrZKUWEKYTRzQvWEEnE9FNB4PDRgeV4eLCdLog4WWXnwFhWxEb4kXmF"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9fc05496a04dbea8bd76faf75b940decf5436fc0932d57580b001e9aebdf76b9c43f8104228458440e9efd2057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3239315a222c227a6f6e65223a342c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3539353520454f53222c227761676572223a22302e3930303020454f53222c227061796f7574223a22312e3439353520454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "496a04dbea8bd76faf75b940decf5436fc0932d57580b001e9aebdf76b9c43f8",
                  username: "xzoo11255111",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.291Z",
                    zone: 4,
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zoneDeck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zoneDeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "0.5955 EOS",
                    wager: "0.9000 EOS",
                    payout: "1.4955 EOS"
                  }
                },
                hex_data:
                  "496a04dbea8bd76faf75b940decf5436fc0932d57580b001e9aebdf76b9c43f8104228458440e9efd2057b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3239315a222c227a6f6e65223a342c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e654465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e654465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a037222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a22302e3539353520454f53222c227761676572223a22302e3930303020454f53222c227061796f7574223a22312e3439353520454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1195,
        net_usage_words: 147,
        trx: {
          id:
            "6e5ce06842cda84d59db5f1d5a2fd65dfa230d0c25cea32b412774e307cdb39d",
          signatures: [
            "SIG_K1_KmS3xESyNrJierUdora1a65Ts7CHi6ofv5rv6cTiPAmoqU3daE35wAhGn59jZSdgPEyzGym5dgg5i7aXKg1aqLBErNUCed"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b6088f67a0591317c8b3ed6e24b475e120186b69ecaabac26117b13ed29d0fc88140a09862f84c9a09618c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3333345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303120454f53222c227761676572223a22302e3030303220454f53222c227061796f7574223a22302e3030303120454f53222c2263757272656e74416d6f756e74223a22302e3838343120454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "8f67a0591317c8b3ed6e24b475e120186b69ecaabac26117b13ed29d0fc88140",
                  username: "g44tonbsgege",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.334Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0001 EOS",
                    wager: "0.0002 EOS",
                    payout: "0.0001 EOS",
                    currentAmount: "0.8841 EOS"
                  }
                },
                hex_data:
                  "8f67a0591317c8b3ed6e24b475e120186b69ecaabac26117b13ed29d0fc88140a09862f84c9a09618c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3333345a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303120454f53222c227761676572223a22302e3030303220454f53222c227061796f7574223a22302e3030303120454f53222c2263757272656e74416d6f756e74223a22302e3838343120454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 889,
        net_usage_words: 21,
        trx: {
          id:
            "b6cc6c885be0099573bc6da0dae95d77e277c517c301e7ec5f02c8fe55ec656b",
          signatures: [
            "SIG_K1_KZ6jh5UBFQxJ7SMnc2moHx9aX5YufCL1fJnvhhUqNn7ZF3YF1nVzbwd5rXBBfiaZhqEXsY7kFKAN5J24cb7qpaMNz96rsN"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94894d8e431af7a5c9dbfc0a8f6ae235d94ecfb3c2199582a248029d62800d303450000c88db915a33ea09862f84c9a096100a6823403ea3055010000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "94d8e431af7a5c9dbfc0a8f6ae235d94ecfb3c2199582a248029d62800d30345",
                  gameName: "bullfight",
                  username: "g44tonbsgege",
                  contract: "eosio.token",
                  payoutAsset: "0.0001 EOS"
                },
                hex_data:
                  "94d8e431af7a5c9dbfc0a8f6ae235d94ecfb3c2199582a248029d62800d303450000c88db915a33ea09862f84c9a096100a6823403ea3055010000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 2629,
        net_usage_words: 89,
        trx: {
          id:
            "34fa5c80b597611935863494a6bbb0131199bae4e5ba2243ef2de6826d4fa0cc",
          signatures: [
            "SIG_K1_Jwsr8YY4MrjDEX4ojXwMKeH9dXp5CMTghVtv2rn99L19gXHzrYBQwSCqYEXPr8bU3YD6PWrvMugY18Fo5YSgLJo8ZDmgDz"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5dd1d7b03c5a9700000000069091b97952a47075000000511d135332019091b97952a4707500000000a8ed32324b0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536e407054894a13b1ca04a3f40300000000009091b97952a47075000000511d135332019091b97952a4707500000000a8ed32324b0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536e30481091d2ca268d04aa3b0100000000009091b97952a47075000000511d135332019091b97952a4707500000000a8ed32324b0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536e1029ad6a3aa970750450171300000000009091b97952a47075000000511d135332019091b97952a4707500000000a8ed32324b0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ec05c555165d799ab0494d40000000000009091b97952a47075000000511d135332019091b97952a4707500000000a8ed32324b0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ef0e8ad9326a730ad04dabe0700000000009091b97952a47075000000511d135332019091b97952a4707500000000a8ed32324b0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ee099c5357c5f1fae0476b700000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "ipsecontract",
                name: "addlabel",
                authorization: [
                  {
                    actor: "ipsecontract",
                    permission: "active"
                  }
                ],
                data: {
                  label_: "post miner",
                  hash: "QmbX6pbWGz87TZfnp5aQ6yDz93foL5vKEEr3CcVwnea7Sn",
                  address: "teslamodels4",
                  category: 4,
                  size: 259235
                },
                hex_data:
                  "0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536e407054894a13b1ca04a3f4030000000000"
              },
              {
                account: "ipsecontract",
                name: "addlabel",
                authorization: [
                  {
                    actor: "ipsecontract",
                    permission: "active"
                  }
                ],
                data: {
                  label_: "post miner",
                  hash: "QmbX6pbWGz87TZfnp5aQ6yDz93foL5vKEEr3CcVwnea7Sn",
                  address: "longpool2143",
                  category: 4,
                  size: 80810
                },
                hex_data:
                  "0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536e30481091d2ca268d04aa3b010000000000"
              },
              {
                account: "ipsecontract",
                name: "addlabel",
                authorization: [
                  {
                    actor: "ipsecontract",
                    permission: "active"
                  }
                ],
                data: {
                  label_: "post miner",
                  hash: "QmbX6pbWGz87TZfnp5aQ6yDz93foL5vKEEr3CcVwnea7Sn",
                  address: "ipseminepool",
                  category: 4,
                  size: 1251152
                },
                hex_data:
                  "0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536e1029ad6a3aa97075045017130000000000"
              },
              {
                account: "ipsecontract",
                name: "addlabel",
                authorization: [
                  {
                    actor: "ipsecontract",
                    permission: "active"
                  }
                ],
                data: {
                  label_: "post miner",
                  hash: "QmbX6pbWGz87TZfnp5aQ6yDz93foL5vKEEr3CcVwnea7Sn",
                  address: "pigxitelepig",
                  category: 4,
                  size: 54420
                },
                hex_data:
                  "0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ec05c555165d799ab0494d4000000000000"
              },
              {
                account: "ipsecontract",
                name: "addlabel",
                authorization: [
                  {
                    actor: "ipsecontract",
                    permission: "active"
                  }
                ],
                data: {
                  label_: "post miner",
                  hash: "QmbX6pbWGz87TZfnp5aQ6yDz93foL5vKEEr3CcVwnea7Sn",
                  address: "poseidonproj",
                  category: 4,
                  size: 507610
                },
                hex_data:
                  "0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ef0e8ad9326a730ad04dabe070000000000"
              },
              {
                account: "ipsecontract",
                name: "addlabel",
                authorization: [
                  {
                    actor: "ipsecontract",
                    permission: "active"
                  }
                ],
                data: {
                  label_: "post miner",
                  hash: "QmbX6pbWGz87TZfnp5aQ6yDz93foL5vKEEr3CcVwnea7Sn",
                  address: "psjpyz1psqgy",
                  category: 4,
                  size: 46966
                },
                hex_data:
                  "0a706f7374206d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ee099c5357c5f1fae0476b7000000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 556,
        net_usage_words: 16,
        trx: {
          id:
            "1c69f205186edf2899fedf2ef19e53fdbe45d29bcced87c7a5764ce26c56403a",
          signatures: [
            "SIG_K1_KeCLNFDHr2DgFgX7LD9xXbVbmpF8Yi8J1nuRHtGcmuhwbmRxNrf5HKNwk6ij5Gt4koD1F44CGpVCpDWqjuY1zi8K18rKSD"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5dd1d7b03c5a97000000000110c255d3494d717500000000e0740d370110c255d3494d717500000000a8ed32321e504a29651a175dfb7f82aa090000000008495043000000000141b400000000",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "ipsouminer11",
                name: "awards",
                authorization: [
                  {
                    actor: "ipsouminer11",
                    permission: "active"
                  }
                ],
                data: {
                  user: "zhilian55555",
                  quantity: "1.62169471 IPC",
                  memo: "A",
                  xx: 180
                },
                hex_data:
                  "504a29651a175dfb7f82aa090000000008495043000000000141b4000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 4747,
        net_usage_words: 47,
        trx: {
          id:
            "1dccbd3829e8376a063daef6ed231d2e6aa2cc0357688e87d1b943bb0b562618",
          signatures: [
            "SIG_K1_K5sgpdfvZSRKY7oaQF3qUPRD6kJ3CNiopEbzb5WyAyd8dGf5nSd5yykR8bkygB6RM6kRmd9ovZFY2gg4rpT2rTo1sMtqso"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "e0208e5d19d940254b490000000001c00ef09ddeaa904b000000000000b23a01c00ef09ddeaa904b00000097667355a59702a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570161f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d363333303435383764316330353236666166663166393966366635343737306238623762313439366563663538376635633435653136323962636530616464352d47463031627a4c6251516f5a413931656f7464662d313536393539373433352d5349475f4b315f4b3368504e64666246486d7165544d356a7a6a3462553179534b77756835774e775347314858756b6f724666747661595964374e59413745375633374c6b78474d39635458546b714a616579396a325045566f41754c514e3453456b777100",
          transaction: {
            expiration: "2019-09-27T14:46:56",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "diceproxy.bg",
                name: "bet",
                authorization: [
                  {
                    actor: "diceproxy.bg",
                    permission: "operator"
                  }
                ],
                data: {
                  tx_id:
                    "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a6857",
                  bet_index: "a",
                  memo:
                    "protocol1:vasilizaytze-tpdappincome-wallet-9-63304587d1c0526faff1f99f6f54770b8b7b1496ecf587f5c45e1629bce0add5-GF01bzLbQQoZA91eotdf-1569597435-SIG_K1_K3hPNdfbFHmqeTM5jzj4bU1ySKwuh5wNwSG1HXukorFftvaYYd7NYA7E7V37LkxGM9cTXTkqJaey9j2PEVoAuLQN4SEkwq"
                },
                hex_data:
                  "a52b25628958bf683a8e035261efad76c674ed8e100d87a1f5ea1b5f8e9a68570161f30170726f746f636f6c313a766173696c697a6179747a652d747064617070696e636f6d652d77616c6c65742d392d363333303435383764316330353236666166663166393966366635343737306238623762313439366563663538376635633435653136323962636530616464352d47463031627a4c6251516f5a413931656f7464662d313536393539373433352d5349475f4b315f4b3368504e64666246486d7165544d356a7a6a3462553179534b77756835774e775347314858756b6f724666747661595964374e59413745375633374c6b78474d39635458546b714a616579396a325045566f41754c514e3453456b7771"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 268,
        net_usage_words: 12,
        trx: {
          id:
            "1b205b2f6d632415cee31fa2a81d775af6ff1b2a436c623a2d938d9ba5fe2ec5",
          signatures: [
            "SIG_K1_KioLmfhyeicFRKesKP6yrPJBQTBbyqM6QLVrSWVCrtXQwyFLMAkc5vsWJeZXzj4ppSKDv7ZG9LTSZzTx5PaAbUqJap24A5"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d19d940254b490000000001805c3cba7695b89a004043d91c95cccd0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "tradebatch",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 287,
        net_usage_words: 12,
        trx: {
          id:
            "f2f8c80846ae7e7b75fdf5679bf7dffa25f838f8c6b59affc79a2d291c777236",
          signatures: [
            "SIG_K1_KiJ2WXRBkG6u7qN4Vjbp9PgzWd2cww4GNbAN9k3z7bTe3pZigGUsGGqScHn5wCyPiGWkkn8CL5AU7PuRwRWaArN76MYEAB"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d19d940254b490000000001805c3cba7695b89a00000000a4a997ba0110a693c97495b89a00000000a8ed3232010200",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55577,
            ref_block_prefix: 1229661504,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "newdexpublic",
                name: "refund",
                authorization: [
                  {
                    actor: "newdexadmin1",
                    permission: "active"
                  }
                ],
                data: {
                  auth_type: 2
                },
                hex_data: "02"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 223,
        net_usage_words: 33,
        trx: {
          id:
            "7215c6b012d1c6c390f69989f51a55f5dbec478f07fe62a07ec3e5add94072da",
          signatures: [
            "SIG_K1_KfbBxNTjNNZR87AnLymGezKobVsS79e6Mcu77ih7r4NeD9ShTtx88n4r64Pm9N1vybNxD6GLGBYu22tGYVgrSddYUKjPeu"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5d18d998b5aebc000000000190348dc69b583155000000000010a3f20190348dc69b58315500000000a8ed3232a70190348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f306266336332373400",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55576,
            ref_block_prefix: 3165566360,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosplayaloud",
                name: "yell",
                authorization: [
                  {
                    actor: "eosplayaloud",
                    permission: "active"
                  }
                ],
                data: {
                  u: "eosplayaloud",
                  memo:
                    "区块链 Hash 值开奖平台 EOSPlay 新游戏 HASH 牛牛上线! 另有乐透,骰子,老虎机等着您赢得奖池回报!!! https://eosplay.com/?0bf3c274"
                },
                hex_data:
                  "90348dc69b5831559d01e58cbae59d97e993be204861736820e580bce5bc80e5a596e5b9b3e58fb020454f53506c617920e696b0e6b8b8e6888f204841534820e7899be7899be4b88ae7babf2120e58fa6e69c89e4b990e9808f2ce9aab0e5ad902ce88081e8998ee69cbae7ad89e79d80e682a8e8b5a2e5be97e5a596e6b1a0e59b9ee68aa52121212068747470733a2f2f656f73706c61792e636f6d2f3f3062663363323734"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 2448,
        net_usage_words: 32,
        trx: {
          id:
            "ecf2a35a4a880977bce9988a35c49b758ce9bb6e5b79f63f909f0d23950be65d",
          signatures: [
            "SIG_K1_KX9h6KQfT5yqGnVkW3QVysNPpAKZzbKCmQyX9Uzhxz2DLby8CvvZviHTS14veAQe5VSWkZXLWiQyH1XShhdtWQLQybvD8F"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fd208e5dd1d7b03c5a9700000000011082422e6575305500405647ed48b1ba0140a7c3066575305500000000489aa6b94aa8ff45b514bc212b001f115970d84064de283ea7d40e6b9e6e52fa7b1d0a1ae5b83bf28c0e5f55b003163fecdc95318a7623a8faff881bab8256d6c4bd35c2a7d89e964168356b49ca7c00",
          transaction: {
            expiration: "2019-09-27T14:47:25",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosbetdice11",
                name: "resolvebet",
                authorization: [
                  {
                    actor: "eosbetcasino",
                    permission: "random"
                  }
                ],
                data: {
                  bet_id: "3107972014988984232",
                  sig:
                    "SIG_K1_JwXRZq1Lt4RNzVnfFBFaavoD8LttXZwiRPg6aRa15AeMKpoZGHv2GZZkCPqZex8C1hhFs1wfZRApfRRLNwpAxwWMjMtzmb"
                },
                hex_data:
                  "a8ff45b514bc212b001f115970d84064de283ea7d40e6b9e6e52fa7b1d0a1ae5b83bf28c0e5f55b003163fecdc95318a7623a8faff881bab8256d6c4bd35c2a7d89e964168356b49ca7c"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 5200,
        net_usage_words: 102,
        trx: {
          id:
            "852e3eec45d57b1950f916603d64e5c8a4271eb708fdd76cf99878e797f219cc",
          signatures: [
            "SIG_K1_KeA9ihrzJ1mL9iZuuXP3C224pGyWiBGLxSR6Yfk98ARiFudHZGgM423w2YJHVmABMLir7RfWm2wJNcPgpV3Se4xNkS1m9L"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fc208e5d16d921efb9b0000000000500a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a883100000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373633222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373533222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a204e00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373634222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89aaff6220b000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373532222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a204e00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373635222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:47:24",
            ref_block_num: 55574,
            ref_block_prefix: 2964975393,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.2680 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.763",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a883100000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373633222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.753",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373533222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "2.0000 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.764",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a204e00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373634222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.86840751 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.752",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89aaff6220b000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373532222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "2.0000 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.765",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a204e00000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373635222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 207,
        net_usage_words: 24,
        trx: {
          id:
            "a0a7d76dab4e54be36ad4457e092bbe054d3f2f016134f96a7d6c99d808b6d88",
          signatures: [
            "SIG_K1_Kds6FYYL3ja93LSG3wty4wsu6on2QrdwDnUm2o6deZSYAzq6LRTVC2wkh6rjDcRQkgFAGSfHdH4Wj15HQweCmaWjeyiXjQ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fa208e5dc5d77f14d5aa0000000001e08f390d9b362fad00000000a44b91ba01308d6b9932ba135300000000a8ed323263308d6b9932ba13535a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a5176435638345057547a516d6a305147446351634461506d50324c71303d00",
          transaction: {
            expiration: "2019-09-27T14:47:22",
            ref_block_num: 55237,
            ref_block_prefix: 2866091135,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "pornhashbaby",
                name: "record",
                authorization: [
                  {
                    actor: "egdvogothian",
                    permission: "active"
                  }
                ],
                data: {
                  account: "egdvogothian",
                  content:
                    "1|hbM2CAMcdZ9xLmrlPlLvLqU5fJXlRlMPdZwoLlzle2MtCZQ0LmrlTAM0dZQvCV84PWTzQmj0QGDcQcDaPmP2Lq0="
                },
                hex_data:
                  "308d6b9932ba13535a317c68624d3243414d63645a39784c6d726c506c4c764c715535664a586c526c4d50645a776f4c6c7a6c65324d74435a51304c6d726c54414d30645a5176435638345057547a516d6a305147446351634461506d50324c71303d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 387,
        net_usage_words: 19,
        trx: {
          id:
            "331d169efbc578d8e8bf6c16153a9156102989b38a651d9b7ae45dc29016c1ac",
          signatures: [
            "SIG_K1_KVbbvFibmi5reE82a5QyiCxPXuWkGtC3EyYKWVNYuJ8gwcdb4ZADWceYJdCrqoEs91EyvyoNroZJuqQniYe1eVy7oqAvr4"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fd208e5dd1d7b03c5a970000000001305dc52a671535bd0000000000305dc501305dc52a671535bd00000000a8ed3232100518d9dc04000000000632333934313000",
          transaction: {
            expiration: "2019-09-27T14:47:25",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "roulettespin",
                name: "spin",
                authorization: [
                  {
                    actor: "roulettespin",
                    permission: "active"
                  }
                ],
                data: {
                  num: 5,
                  block: 81582360,
                  gameid: "239410"
                },
                hex_data: "0518d9dc040000000006323339343130"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 817,
        net_usage_words: 12,
        trx: {
          id:
            "18f2f34991bcfea3dad968f90ab378526b2b8dfb500d611178eb740cb7fe1d4a",
          signatures: [
            "SIG_K1_K5sHVHo4S2AeNLRQAtBakBnRtGkwnKuZr38qLJ8hP6uZW72EiagYg6w4mrsXePo2iwsVtwoT2HPFRmu9T7SwffB6TCw6hT"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fc208e5d15d9631e2cae000000000100147209000f918e00149a66aa3c9d91015035bd4c2197b23a00aeda57610f918e0000",
          transaction: {
            expiration: "2019-09-27T14:47:24",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "lucky..dice",
                name: "maintenance",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "luckyserver"
                  }
                ],
                data: ""
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1085,
        net_usage_words: 21,
        trx: {
          id:
            "0238a7ffb45ba528285e64f9af22c0295492db26e1bf00835b77404a6e4d783d",
          signatures: [
            "SIG_K1_Kj7rpg8berPakRjFHH3aqatrLEhsV73yUWHpcQjsaNJrCD18YRZEpaDnCWMkxjTNAs7Aj7s4hqWXuoMAa7BG6WcUVm7ykN"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a902e45ea7a53b33a015035bd4c2197b23a00aeda57610cb1c94854824092c7a5de171905168322e5cc462f91ddd7fcb41d23746a5c5fd889fc120000c88db915a33eb0ca7d086f48e36f00a6823403ea3055070000000000000004454f530000000000",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betpayrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "54824092c7a5de171905168322e5cc462f91ddd7fcb41d23746a5c5fd889fc12",
                  gameName: "bullfight",
                  username: "hzlokvscjr5f",
                  contract: "eosio.token",
                  payoutAsset: "0.0007 EOS"
                },
                hex_data:
                  "54824092c7a5de171905168322e5cc462f91ddd7fcb41d23746a5c5fd889fc120000c88db915a33eb0ca7d086f48e36f00a6823403ea3055070000000000000004454f5300000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 745,
        net_usage_words: 147,
        trx: {
          id:
            "a78059cdbea6c8a8de52c07ce14f39339e7fc41747a022a74fcb463d24fd47ae",
          signatures: [
            "SIG_K1_Kh5KScZRb16H5VHZXSyMB4Wzoc2mkWGsYwH38MycwKpzfxJsgKFUY1Vt6f1W29ESmFNRCwWsfJSPF3vdpsFzV2K5K7TVcc"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b6083a380c349c169541df5a559519ac78a61e7851c17c87fc3ca5f8fb97b9ebdadea09862f64f993f618c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3338355a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303720454f53222c227761676572223a22302e3030313520454f53222c227061796f7574223a22302e3030303820454f53222c2263757272656e74416d6f756e74223a22392e3231323120454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "3a380c349c169541df5a559519ac78a61e7851c17c87fc3ca5f8fb97b9ebdade",
                  username: "g4ztmnzqgege",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.385Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0007 EOS",
                    wager: "0.0015 EOS",
                    payout: "0.0008 EOS",
                    currentAmount: "9.2121 EOS"
                  }
                },
                hex_data:
                  "3a380c349c169541df5a559519ac78a61e7851c17c87fc3ca5f8fb97b9ebdadea09862f64f993f618c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3338355a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303720454f53222c227761676572223a22302e3030313520454f53222c227061796f7574223a22302e3030303820454f53222c2263757272656e74416d6f756e74223a22392e3231323120454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1930,
        net_usage_words: 25,
        trx: {
          id:
            "9e245d61b3ddca1085a91d312d1959c974a78571a0b1cde23f8eb13cbc10c35b",
          signatures: [
            "SIG_K1_KiPNMy4wCsDBL9dSTDTCSt1KkQGQ9ULinZxP7d5HbMXAqHxuFhABAaYPh1cMASJb6QjzzKhjbxBBPVU3t1gZsNy7ZGTuwT"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dc208e5d12d9695c965b0000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c96850e8054ebbc517aec966d9b14877aee608e04b55c7f4af228ee11d28a631e60c0000c88db915a33e40c2086cd23b8d3300a6823403ea3055060200000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:52",
            ref_block_num: 55570,
            ref_block_prefix: 1536580713,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "50e8054ebbc517aec966d9b14877aee608e04b55c7f4af228ee11d28a631e60c",
                  gameName: "bullfight",
                  username: "aianrong1314",
                  contract: "eosio.token",
                  betAsset: "0.0518 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "50e8054ebbc517aec966d9b14877aee608e04b55c7f4af228ee11d28a631e60c0000c88db915a33e40c2086cd23b8d3300a6823403ea3055060200000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1325,
        net_usage_words: 25,
        trx: {
          id:
            "22d505226a9b1d6f13621662149f77c41e79adfd09187fcfd39a5c810c3dda45",
          signatures: [
            "SIG_K1_KiW6EesRTV7DagxBJ3UKBcYtTuKqPxmCGWtBe95ieKdrFfCB4Jg1SupkP6dqqkRMeLpS6znMf64ePUgCgQnKp19ATsUnuN"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dc208e5d12d9695c965b0000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968376848b27a709cb83ecb7fa52aadad0c91966e3c54aad3465153803a26f3afba0000c88db915a33e104230e76ea8ae9100a6823403ea3055020000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:52",
            ref_block_num: 55570,
            ref_block_prefix: 1536580713,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "376848b27a709cb83ecb7fa52aadad0c91966e3c54aad3465153803a26f3afba",
                  gameName: "bullfight",
                  username: "marekvrba111",
                  contract: "eosio.token",
                  betAsset: "0.0002 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "376848b27a709cb83ecb7fa52aadad0c91966e3c54aad3465153803a26f3afba0000c88db915a33e104230e76ea8ae9100a6823403ea3055020000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 653,
        net_usage_words: 147,
        trx: {
          id:
            "da284a122f861c5eb8a05c6ac90ff08f8082a0ac69b9a67f166438f40137ed34",
          signatures: [
            "SIG_K1_K1e59m1wnFqyJoBADadU8ZXyWYGyMaK9EDP3JoaFd3XdH7zCU5MKTrZ7BEjBX7XWzL99SKqhJDniqbFzn8YCy2EiwkW4Le"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000000000000188d015035bd4c2197b23a00aeda57610cb1c9b6082066fd9e20a7599b880d95fa6c6a2d1c916b62329eb20faa8e2a0ef3d2516873b0ca7d086f48e36f8c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3336395a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303720454f53222c227761676572223a22302e3030313420454f53222c227061796f7574223a22302e3030303720454f53222c2263757272656e74416d6f756e74223a22382e3537343020454f53227d00",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "log",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "2066fd9e20a7599b880d95fa6c6a2d1c916b62329eb20faa8e2a0ef3d2516873",
                  username: "hzlokvscjr5f",
                  log: {
                    gameName: "bullfight",
                    gameId: 1767816,
                    action: "reveal",
                    time: "2019-09-27T14:46:23.369Z",
                    zone: "0",
                    deck: [
                      52,
                      48,
                      44,
                      18,
                      14,
                      21,
                      51,
                      5,
                      10,
                      31,
                      34,
                      30,
                      20,
                      2,
                      36,
                      4,
                      37,
                      23,
                      41,
                      6,
                      25,
                      39,
                      9,
                      29,
                      24,
                      17,
                      19
                    ],
                    selectedBlockId: 81582355,
                    selectedBlockHash:
                      "04dcd913f1b0a06384101501d990f2171d90214053b212579f1e45bb836a13dd",
                    zone1Deck: "♣K, ♦K, ♠10, ♠6, ♠J, Win (贏)",
                    zone1DeckType: "Bull 6 (牛6)",
                    zone2Deck: "♥️1, ♦J, ♥️9, ♣3, ♦8, Win (贏)",
                    zone2DeckType: "Bull 1 (牛1)",
                    zone3Deck: "♦Q, ♦1, ♣9, ♠4, ♥️6, Win (贏)",
                    zone3DeckType: "Bull (牛牛)",
                    zone4Deck: "♠1, ♥️7, ♥️2, ♥️Q, ♠8, Win (贏)",
                    zone4DeckType: "Bull 8 (牛8)",
                    bankDeck: "♦7, ♠3, ♣2, ♦3, ♠7, Lose (輸)",
                    bankDeckType: "None (無牛)",
                    signature:
                      "SIG_K1_KBWCpxbTbzmijriT3JRaurguFSLu9svQ2Bk3vCPabU1FSmGG5Sqm3uVZabBhBoTWCwxbqJ6e9nQbMLZv2d8dehubFDav5d",
                    seed:
                      "08b54ed5aab76a6c06e6872d0eefab74e1bdf0985141c17e0c26611095b89991",
                    profit: "-0.0007 EOS",
                    wager: "0.0014 EOS",
                    payout: "0.0007 EOS",
                    currentAmount: "8.5740 EOS"
                  }
                },
                hex_data:
                  "2066fd9e20a7599b880d95fa6c6a2d1c916b62329eb20faa8e2a0ef3d2516873b0ca7d086f48e36f8c087b2267616d654e616d65223a2262756c6c6669676874222c2267616d654964223a313736373831362c22616374696f6e223a2272657665616c222c2274696d65223a22323031392d30392d32375431343a34363a32332e3336395a222c227a6f6e65223a2230222c226465636b223a5b35322c34382c34342c31382c31342c32312c35312c352c31302c33312c33342c33302c32302c322c33362c342c33372c32332c34312c362c32352c33392c392c32392c32342c31372c31395d2c2273656c6563746564426c6f636b4964223a38313538323335352c2273656c6563746564426c6f636b48617368223a2230346463643931336631623061303633383431303135303164393930663231373164393032313430353362323132353739663165343562623833366131336464222c227a6f6e65314465636b223a22e299a34b2c20e299a64b2c20e299a031302c20e299a0362c20e299a04a2c2057696e2028e8b48f29222c227a6f6e65314465636b54797065223a2242756c6c20362028e7899b3629222c227a6f6e65324465636b223a22e299a5efb88f312c20e299a64a2c20e299a5efb88f392c20e299a3332c20e299a6382c2057696e2028e8b48f29222c227a6f6e65324465636b54797065223a2242756c6c20312028e7899b3129222c227a6f6e65334465636b223a22e299a6512c20e299a6312c20e299a3392c20e299a0342c20e299a5efb88f362c2057696e2028e8b48f29222c227a6f6e65334465636b54797065223a2242756c6c2028e7899be7899b29222c227a6f6e65344465636b223a22e299a0312c20e299a5efb88f372c20e299a5efb88f322c20e299a5efb88f512c20e299a0382c2057696e2028e8b48f29222c227a6f6e65344465636b54797065223a2242756c6c20382028e7899b3829222c2262616e6b4465636b223a22e299a6372c20e299a0332c20e299a3322c20e299a6332c20e299a0372c204c6f73652028e8bcb829222c2262616e6b4465636b54797065223a224e6f6e652028e784a1e7899b29222c227369676e6174757265223a225349475f4b315f4b42574370786254627a6d696a726954334a52617572677546534c753973765132426b337643506162553146536d47473553716d3375565a61624268426f545743777862714a3665396e51624d4c5a763264386465687562464461763564222c2273656564223a2230386235346564356161623736613663303665363837326430656566616237346531626466303938353134316331376530633236363131303935623839393931222c2270726f666974223a222d302e3030303720454f53222c227761676572223a22302e3030313420454f53222c227061796f7574223a22302e3030303720454f53222c2263757272656e74416d6f756e74223a22382e3537343020454f53227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 357,
        net_usage_words: 23,
        trx: {
          id:
            "c7ed93b61cb5ec1e92208b036654007f685cc616dbe61a85779eb436df658b58",
          signatures: [
            "SIG_K1_JxqUe7Y29HMjf3myZkuV2qacEbw5s1wtP1qvL5B8kEGBr3YyRL9nTEPU6AVgH7JACn5pQUmsMw47cYb91MtpW7ygph6isr"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "ee218e5d1ad92904ff6800000000013015a4f9e8887263000000572d3ccdcd0110e034e7e888726300000000a8ed32325510e034e7e8887263309d4ce6e8887263e0220200000000000447485400000000347472616e736665723a2030783632326165363836633463323864616231643130666665616464323238663232643964313632346400",
          transaction: {
            expiration: "2019-09-27T14:51:26",
            ref_block_num: 55578,
            ref_block_prefix: 1761543209,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "ghtclubtoken",
                name: "transfer",
                authorization: [
                  {
                    actor: "ghtclubbank1",
                    permission: "active"
                  }
                ],
                data: {
                  from: "ghtclubbank1",
                  to: "ghtclubadmin",
                  quantity: "14.0000 GHT",
                  memo: "transfer: 0x622ae686c4c28dab1d10ffeadd228f22d9d1624d"
                },
                hex_data:
                  "10e034e7e8887263309d4ce6e8887263e0220200000000000447485400000000347472616e736665723a20307836323261653638366334633238646162316431306666656164643232386632326439643136323464"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 5077,
        net_usage_words: 102,
        trx: {
          id:
            "cd7e9cf8d846d5988b33af12bb1b705203f844cc8dd2640f6a801d6e9b711efd",
          signatures: [
            "SIG_K1_JvrN3oUvKfBK6Jhzfc4S2wkAxbzimB8RbUQbvUYHwzFANYTpqpGmNZHxk7G6aJ1xxrVZTSa2e5JJ7trKMekzZuL4S2sHVG"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "fd208e5d17d9d0e8a51f000000000580a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373531222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a273800000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373636222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373530222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89afb4800000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373637222c226368616e6e656c223a22415049227d80a782342b57b33b000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89ab8bb520e000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373439222c226368616e6e656c223a22415049227d00",
          transaction: {
            expiration: "2019-09-27T14:47:25",
            ref_block_num: 55575,
            ref_block_prefix: 530966736,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.751",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373531222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.4375 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.766",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a273800000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373636222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "5.00000000 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.750",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89a0065cd1d000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373530222c226368616e6e656c223a22415049227d"
              },
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "1.8683 EOS",
                  memo: {
                    type: "sell-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.767",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89afb4800000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373637222c226368616e6e656c223a22415049227d"
              },
              {
                account: "bitpietokens",
                name: "transfer",
                authorization: [
                  {
                    actor: "wukongmarket",
                    permission: "active"
                  }
                ],
                data: {
                  from: "wukongmarket",
                  to: "newdexpublic",
                  quantity: "2.40303032 EUSD",
                  memo: {
                    type: "buy-limit",
                    symbol: "eosio.token-eos-eusd",
                    price: "2.749",
                    channel: "API"
                  }
                },
                hex_data:
                  "9015bc46b249a1e6805c3cba7695b89ab8bb520e000000000845555344000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d65757364222c227072696365223a22322e373439222c226368616e6e656c223a22415049227d"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1035,
        net_usage_words: 14,
        trx: {
          id:
            "98a4785a5d5389c35d3117b3852f83dc1b43023031e39124767f8f75bf243d1b",
          signatures: [
            "SIG_K1_K7cKejgwwhgUvnMaXkSaKWSMSVCT4xWhQ6Z18qgQisJSXJJgpXZc4WsCGYnWbcPgCwqSvkS6eDCYZp4S5CUu8AJEJTwJhG"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "df208e5dd1d7b03c5a97000000000190a79c944ad532cd0000c03366946e4501e0f355dc32c65a6b00000000a8ed32320ee0f355dc32c65a6b0102c800000000",
          transaction: {
            expiration: "2019-09-27T14:46:55",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "tothemoonmnt",
                name: "cprdctlns",
                authorization: [
                  {
                    actor: "hhhgggqwerty",
                    permission: "active"
                  }
                ],
                data: {
                  user: "hhhgggqwerty",
                  productlines: [
                    {
                      key: 2,
                      value: 200
                    }
                  ]
                },
                hex_data: "e0f355dc32c65a6b0102c8000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 405,
        net_usage_words: 15,
        trx: {
          id:
            "63855760349504bfa7e907e15cea3451c434eb1b597ea9154dfd04d258183dd9",
          signatures: [
            "SIG_K1_K3pherVUaHKS9qsK7Bdy66nXDwAhA3FEkb58tJ7jaQGHy4S4kP7X8LjpUxP4LNVVgJHN7Mpq2s5yvurj9WTMv1UMEXjWmQ"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "de208e5d15d9631e2cae000000000190a7ca4865338d540000000000e04dac0190316d4c65338d5400000000a8ed32321890316d4c65338d54ac010000000000007c635e000000000000",
          transaction: {
            expiration: "2019-09-27T14:46:54",
            ref_block_num: 55573,
            ref_block_prefix: 2922126947,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "emanatectent",
                name: "play",
                authorization: [
                  {
                    actor: "emanateghost",
                    permission: "active"
                  }
                ],
                data: {
                  owner: "emanateghost",
                  id: 428,
                  microseconds: 6185852
                },
                hex_data: "90316d4c65338d54ac010000000000007c635e0000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1462,
        net_usage_words: 25,
        trx: {
          id:
            "94e61c4d4cbc638caa40ac167f6a71f3bb566715659670cb4072bf3ef8816a78",
          signatures: [
            "SIG_K1_KasiY9jXhe4MyAMyYdQzv9eawn1vRRca8sGT11TLkH2UTNsHJFhsRSPD8fP1kPbUatibYhubkB6JnmqWPwKnMxZpUFhAMz"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9685ba99802ede7e99b59976a7a1bc288fd02ebd65a797f2c75cb761bd74df654a10000c88db915a33e90dd75155f95b19100a6823403ea3055470000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "5ba99802ede7e99b59976a7a1bc288fd02ebd65a797f2c75cb761bd74df654a1",
                  gameName: "bullfight",
                  username: "masterspirit",
                  contract: "eosio.token",
                  betAsset: "0.0071 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "5ba99802ede7e99b59976a7a1bc288fd02ebd65a797f2c75cb761bd74df654a10000c88db915a33e90dd75155f95b19100a6823403ea3055470000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1320,
        net_usage_words: 25,
        trx: {
          id:
            "75423421e4a35b0dceeb7e29103a978ff111840e820015021a6e2f8ca0156380",
          signatures: [
            "SIG_K1_KYXMrcTPhzykUdhbwYhSiSPrRiQFZzgGLmGFY7jzMVYVTcrZQWcX5TieqQQnT6ad2omGsYKEnLH9YDemen2gQagqxwW5qa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968f42a64d466a86dc4bb3a959c11f4a16ae73262789ee80ac9d3e79d5929c754990000c88db915a33ea09862f64f993f6100a6823403ea30550f0000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "f42a64d466a86dc4bb3a959c11f4a16ae73262789ee80ac9d3e79d5929c75499",
                  gameName: "bullfight",
                  username: "g4ztmnzqgege",
                  contract: "eosio.token",
                  betAsset: "0.0015 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "f42a64d466a86dc4bb3a959c11f4a16ae73262789ee80ac9d3e79d5929c754990000c88db915a33ea09862f64f993f6100a6823403ea30550f0000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1250,
        net_usage_words: 25,
        trx: {
          id:
            "3c2662def551872bd5703b24c3bc543e25b4c512f7c85132c362f7796183ab8f",
          signatures: [
            "SIG_K1_JvMwDp4t1sySymWo34oze4mKSUAL2Ni3N54WYUrp4TmsrG2sutiP7EddU1fUZBMKSqMDm5d5nH25fFMdyLuy88bHYUmSSX"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968a1464727543d6bf72ba4fae8dc36ac212a1d274463230342f40c8e9ad46ba3e10000c88db915a33e405da6894d07b33a00a6823403ea30552c0000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "a1464727543d6bf72ba4fae8dc36ac212a1d274463230342f40c8e9ad46ba3e1",
                  gameName: "bullfight",
                  username: "betkingdotio",
                  contract: "eosio.token",
                  betAsset: "0.0044 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "a1464727543d6bf72ba4fae8dc36ac212a1d274463230342f40c8e9ad46ba3e10000c88db915a33e405da6894d07b33a00a6823403ea30552c0000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1279,
        net_usage_words: 25,
        trx: {
          id:
            "59ef6a5059af5ba0a220f9c152b816dc2c895da0a685d5b5b12d76fad91cc204",
          signatures: [
            "SIG_K1_K1tqtfdhRQDixuyopNKVzVJr2T9JbBSAgsEBtpLnjUjnBKJ8EhAi9S7qqRE6RjiHudq2mCtHYsv1QbC7gqaApTJtSvp5EA"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968e989df6e599ac93ee4c0a8ff5f98b5e621428deaa7d061506c0ee07e3c0148b80000c88db915a33e70efbdf75295b19700a6823403ea3055240000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "e989df6e599ac93ee4c0a8ff5f98b5e621428deaa7d061506c0ee07e3c0148b8",
                  gameName: "bullfight",
                  username: "mysteorrrrrr",
                  contract: "eosio.token",
                  betAsset: "0.0036 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "e989df6e599ac93ee4c0a8ff5f98b5e621428deaa7d061506c0ee07e3c0148b80000c88db915a33e70efbdf75295b19700a6823403ea3055240000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 3452,
        net_usage_words: 25,
        trx: {
          id:
            "1243c7188782c64e27d86e59be3f8db11751cbf735e65dc3e6f4c32f3e3d3a87",
          signatures: [
            "SIG_K1_K4jNF9fiLoW5tcMLukKF6djMhsknvWq3LgGnYJHh1Ekqyhg1bn2L44qLHcghve322QsLFYaixkb8U4wxertf4NvrXBNpyn"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968d204fd9380184a4f50c8644a073967075de8c4ac2dfbf154ed08fead62621ed30000c88db915a33e104228458440e9ef00a6823403ea3055282300000000000004454f5300000000160000000000000004454f5300000000408608648840e9ef073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "d204fd9380184a4f50c8644a073967075de8c4ac2dfbf154ed08fead62621ed3",
                  gameName: "bullfight",
                  username: "xzoo11255111",
                  contract: "eosio.token",
                  betAsset: "0.9000 EOS",
                  houseEdgeAsset: "0.0022 EOS",
                  referer: "xzoo12341234",
                  memo: "1767816"
                },
                hex_data:
                  "d204fd9380184a4f50c8644a073967075de8c4ac2dfbf154ed08fead62621ed30000c88db915a33e104228458440e9ef00a6823403ea3055282300000000000004454f5300000000160000000000000004454f5300000000408608648840e9ef0731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 379,
        net_usage_words: 13,
        trx: {
          id:
            "5a910dc56c68faad2fbc2b8149776ba804f6decf0b775778c959024863b15115",
          signatures: [
            "SIG_K1_K2ybT1fNaL6DUN4Cr8KqNU5SR53F2W3nsdiKGrtHzWA5zd4YaQ1T6qbRMXFEyJKasFoBLgBrM5QxHdXPXKdHAhniYG6gkX"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "d12e8e5dd1d7b03c5a970000000001a02ecd38ab9a55ed000000000046a3bc0110a693c9509755ed000000ead28cb3aa08813406000000000000",
          transaction: {
            expiration: "2019-09-27T15:46:25",
            ref_block_num: 55249,
            ref_block_prefix: 2539273392,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "xpetpetstore",
                name: "rmlog",
                authorization: [
                  {
                    actor: "xpetioadmin1",
                    permission: "petstore"
                  }
                ],
                data: {
                  id: 406657
                },
                hex_data: "8134060000000000"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1281,
        net_usage_words: 25,
        trx: {
          id:
            "a654a6881bcaf38e1e3bdc7c218dd15323d271b305ccd0d29bce9bf43390f8f7",
          signatures: [
            "SIG_K1_JwCDeJYzkQJborTTjxoLiP6kKiFGTopkNSP1NDH7cAxXe9RivN7Dkq4d4iqjuG5vpUACMef9gmTVa5rjJETsTLAHjm9F3T"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c9683a1c0e677d2ae102b8bcbd748303f85389fdb894b3f1a8fd5214a6e1df960bb50000c88db915a33ea09864f74f9b086100a6823403ea3055533800000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "3a1c0e677d2ae102b8bcbd748303f85389fdb894b3f1a8fd5214a6e1df960bb5",
                  gameName: "bullfight",
                  username: "g44dqnzrgmge",
                  contract: "eosio.token",
                  betAsset: "1.4419 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "3a1c0e677d2ae102b8bcbd748303f85389fdb894b3f1a8fd5214a6e1df960bb50000c88db915a33ea09864f74f9b086100a6823403ea3055533800000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1251,
        net_usage_words: 25,
        trx: {
          id:
            "a0dad7a53e24f57a49b34b5852cdc839282ba511822529d27440b9520e662fc9",
          signatures: [
            "SIG_K1_JzeF7v1yfjgT6nEiunggo585nDikyjZfhAyyZH5Zqa7jWRUUoEsFXhSXzCvB3CXfvf5RdYWSQcSyyhxZNhran2xJz6awDa"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c96871f466c6a58e903e97ef0764bf4aef11a04a0d4d70e873a2213c404e081642030000c88db915a33ea01861f94b97bf6700a6823403ea3055080000000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "71f466c6a58e903e97ef0764bf4aef11a04a0d4d70e873a2213c404e08164203",
                  gameName: "bullfight",
                  username: "gyztimztg4ge",
                  contract: "eosio.token",
                  betAsset: "0.0008 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "71f466c6a58e903e97ef0764bf4aef11a04a0d4d70e873a2213c404e081642030000c88db915a33ea01861f94b97bf6700a6823403ea3055080000000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: "executed",
        cpu_usage_us: 1257,
        net_usage_words: 25,
        trx: {
          id:
            "8e2acf089302e4e19b08d6cb4c1b3d8129120462a499561d27df4f0ac25376c4",
          signatures: [
            "SIG_K1_Kda6AhZaKcn4yDCgrFrD4FcQGDhWb8gVBuZs2CnjP65MVT8j2SvnfxrmvFRnzGFfcjJhS9zWyDE9NH1m4mKNPyeohH6a7v"
          ],
          compression: "none",
          packed_context_free_data: "",
          context_free_data: [],
          packed_trx:
            "dd208e5d13d9841015010000000001802136592197b23a000048972275b33a015035bd4c2197b23a00aeda57610cb1c968ea56339ea242e5a2a2e6a5da14e216820f0c47d2cfa9af48cffa72d95c5f45d60000c88db915a33e304480c83c884c3c00a6823403ea3055836100000000000004454f5300000000000000000000000004454f53000000000000000000000000073137363738313600",
          transaction: {
            expiration: "2019-09-27T14:46:53",
            ref_block_num: 55571,
            ref_block_prefix: 18157700,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: "betdicetasks",
                name: "betrecord",
                authorization: [
                  {
                    actor: "betdicegroup",
                    permission: "tasksserver"
                  }
                ],
                data: {
                  taskId:
                    "ea56339ea242e5a2a2e6a5da14e216820f0c47d2cfa9af48cffa72d95c5f45d6",
                  gameName: "bullfight",
                  username: "blackjack123",
                  contract: "eosio.token",
                  betAsset: "2.4963 EOS",
                  houseEdgeAsset: "0.0000 EOS",
                  referer: "",
                  memo: "1767816"
                },
                hex_data:
                  "ea56339ea242e5a2a2e6a5da14e216820f0c47d2cfa9af48cffa72d95c5f45d60000c88db915a33e304480c83c884c3c00a6823403ea3055836100000000000004454f5300000000000000000000000004454f530000000000000000000000000731373637383136"
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    id: "04dcd91b1760599a9c46613ad3395599c3b0deea495ba561f05e98a21ebc5a07",
    block_num: 81582363,
    ref_block_prefix: 979453596
  }
];

export default blocks;
