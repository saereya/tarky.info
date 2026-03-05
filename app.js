var AMMO_DATA = [{"caliber":"Caliber556x45NATO","damage":54,"penetrationPower":31,"armorDamage":37,"fragmentationChance":0.5,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":922,"name":"5.56x45mm M855","shortName":"M855"},{"caliber":"Caliber556x45NATO","damage":49,"penetrationPower":44,"armorDamage":47,"fragmentationChance":0.44,"recoilModifier":0.05,"accuracyModifier":-0.05,"initialSpeed":945,"name":"5.56x45mm M855A1","shortName":"M855A1"},{"caliber":"Caliber12g","damage":39,"penetrationPower":3,"armorDamage":26,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":415,"name":"12/70 7mm buckshot","shortName":"7mm"},{"caliber":"Caliber762x54R","damage":75,"penetrationPower":62,"armorDamage":87,"fragmentationChance":0.08,"recoilModifier":0.1,"accuracyModifier":0,"initialSpeed":875,"name":"7.62x54mm R SNB gzh","shortName":"SNB"},{"caliber":"Caliber762x39","damage":61,"penetrationPower":35,"armorDamage":52,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":717,"name":"7.62x39mm PS gzh","shortName":"PS"},{"caliber":"Caliber40mmRU","damage":199,"penetrationPower":0,"armorDamage":68,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":76,"name":"40mm VOG-25 grenade","shortName":"VOG-25"},{"caliber":"Caliber9x19PARA","damage":54,"penetrationPower":20,"armorDamage":33,"fragmentationChance":0.15,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":457,"name":"9x19mm Pst gzh","shortName":"Pst"},{"caliber":"Caliber545x39","damage":48,"penetrationPower":45,"armorDamage":46,"fragmentationChance":0.16,"recoilModifier":0.07,"accuracyModifier":-0.03,"initialSpeed":890,"name":"5.45x39mm BP gs","shortName":"BP"},{"caliber":"Caliber545x39","damage":45,"penetrationPower":54,"armorDamage":57,"fragmentationChance":0.17,"recoilModifier":0.1,"accuracyModifier":-0.04,"initialSpeed":830,"name":"5.45x39mm BS gs","shortName":"BS"},{"caliber":"Caliber545x39","damage":54,"penetrationPower":37,"armorDamage":44,"fragmentationChance":0.164,"recoilModifier":0.05,"accuracyModifier":-0.04,"initialSpeed":880,"name":"5.45x39mm BT gs","shortName":"BT"},{"caliber":"Caliber545x39","damage":55,"penetrationPower":24,"armorDamage":38,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":884,"name":"5.45x39mm FMJ","shortName":"FMJ"},{"caliber":"Caliber545x39","damage":76,"penetrationPower":9,"armorDamage":15,"fragmentationChance":0.35,"recoilModifier":-0.03,"accuracyModifier":0.03,"initialSpeed":884,"name":"5.45x39mm HP","shortName":"HP"},{"caliber":"Caliber545x39","damage":51,"penetrationPower":34,"armorDamage":42,"fragmentationChance":0.17,"recoilModifier":0.03,"accuracyModifier":-0.02,"initialSpeed":886,"name":"5.45x39mm PP gs","shortName":"PP"},{"caliber":"Caliber545x39","damage":70,"penetrationPower":13,"armorDamage":24,"fragmentationChance":0.3,"recoilModifier":-0.05,"accuracyModifier":0,"initialSpeed":866,"name":"5.45x39mm PRS gs","shortName":"PRS"},{"caliber":"Caliber545x39","damage":56,"penetrationPower":28,"armorDamage":40,"fragmentationChance":0.4,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":890,"name":"5.45x39mm PS gs","shortName":"PS"},{"caliber":"Caliber545x39","damage":67,"penetrationPower":15,"armorDamage":31,"fragmentationChance":0.45,"recoilModifier":-0.05,"accuracyModifier":0.05,"initialSpeed":873,"name":"5.45x39mm SP","shortName":"SP"},{"caliber":"Caliber545x39","damage":59,"penetrationPower":20,"armorDamage":36,"fragmentationChance":0.16,"recoilModifier":0,"accuracyModifier":-0.03,"initialSpeed":883,"name":"5.45x39mm T gs","shortName":"T"},{"caliber":"Caliber545x39","damage":65,"penetrationPower":17,"armorDamage":33,"fragmentationChance":0.1,"recoilModifier":-0.15,"accuracyModifier":0,"initialSpeed":303,"name":"5.45x39mm US gs","shortName":"US"},{"caliber":"Caliber762x25TT","damage":58,"penetrationPower":12,"armorDamage":32,"fragmentationChance":0.25,"recoilModifier":-0.15,"accuracyModifier":0.15,"initialSpeed":425,"name":"7.62x25mm TT AKBS","shortName":"AKBS"},{"caliber":"Caliber762x25TT","damage":60,"penetrationPower":11,"armorDamage":29,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":427,"name":"7.62x25mm TT FMJ43","shortName":"FMJ43"},{"caliber":"Caliber762x25TT","damage":64,"penetrationPower":8,"armorDamage":28,"fragmentationChance":0.35,"recoilModifier":-0.05,"accuracyModifier":0.05,"initialSpeed":375,"name":"7.62x25mm TT LRN","shortName":"LRN"},{"caliber":"Caliber762x25TT","damage":66,"penetrationPower":7,"armorDamage":27,"fragmentationChance":0.35,"recoilModifier":-0.1,"accuracyModifier":0.1,"initialSpeed":385,"name":"7.62x25mm TT LRNPC","shortName":"LRNPC"},{"caliber":"Caliber762x25TT","damage":58,"penetrationPower":14,"armorDamage":32,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":430,"name":"7.62x25mm TT P gl","shortName":"P"},{"caliber":"Caliber762x25TT","damage":50,"penetrationPower":25,"armorDamage":36,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":430,"name":"7.62x25mm TT Pst gzh","shortName":"Pst"},{"caliber":"Caliber762x25TT","damage":55,"penetrationPower":18,"armorDamage":34,"fragmentationChance":0.166,"recoilModifier":0,"accuracyModifier":-0.1,"initialSpeed":415,"name":"7.62x25mm TT PT gzh","shortName":"PT"},{"caliber":"Caliber9x18PM","damage":53,"penetrationPower":18,"armorDamage":28,"fragmentationChance":0.17,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":325,"name":"9x18mm PM BZhT gzh","shortName":"BZhT"},{"caliber":"Caliber9x18PM","damage":50,"penetrationPower":5,"armorDamage":16,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":302,"name":"9x18mm PM P gzh","shortName":"P"},{"caliber":"Caliber9x18PM","damage":40,"penetrationPower":28,"armorDamage":30,"fragmentationChance":0.16,"recoilModifier":0.04,"accuracyModifier":0,"initialSpeed":519,"name":"9x18mm PM PBM gzh","shortName":"PBM"},{"caliber":"Caliber9x18PM","damage":58,"penetrationPower":24,"armorDamage":33,"fragmentationChance":0.17,"recoilModifier":0.05,"accuracyModifier":0,"initialSpeed":420,"name":"9x18mm PMM PstM gzh","shortName":"PstM"},{"caliber":"Caliber9x18PM","damage":61,"penetrationPower":7,"armorDamage":15,"fragmentationChance":0.35,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":297,"name":"9x18mm PM PPe gzh","shortName":"PPe"},{"caliber":"Caliber9x18PM","damage":59,"penetrationPower":8,"armorDamage":22,"fragmentationChance":0.166,"recoilModifier":-0.07,"accuracyModifier":-0.05,"initialSpeed":301,"name":"9x18mm PM PPT gzh","shortName":"PPT"},{"caliber":"Caliber9x18PM","damage":58,"penetrationPower":6,"armorDamage":16,"fragmentationChance":0.3,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":302,"name":"9x18mm PM PRS gs","shortName":"PRS"},{"caliber":"Caliber9x18PM","damage":55,"penetrationPower":6,"armorDamage":16,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":330,"name":"9x18mm PM PS gs PPO","shortName":"PS PPO"},{"caliber":"Caliber9x18PM","damage":54,"penetrationPower":5,"armorDamage":13,"fragmentationChance":0.35,"recoilModifier":0,"accuracyModifier":0.1,"initialSpeed":315,"name":"9x18mm PM PSO gzh","shortName":"PSO"},{"caliber":"Caliber9x18PM","damage":50,"penetrationPower":12,"armorDamage":26,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":298,"name":"9x18mm PM Pst gzh","shortName":"Pst"},{"caliber":"Caliber9x18PM","damage":69,"penetrationPower":3,"armorDamage":5,"fragmentationChance":0.4,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":280,"name":"9x18mm PM PSV","shortName":"PSV"},{"caliber":"Caliber9x18PM","damage":65,"penetrationPower":13,"armorDamage":26,"fragmentationChance":0.02,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":330,"name":"9x18mm PM RG028 gzh","shortName":"RG028"},{"caliber":"Caliber9x18PM","damage":77,"penetrationPower":2,"armorDamage":5,"fragmentationChance":0.02,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":420,"name":"9x18mm PM SP7 gzh","shortName":"SP7"},{"caliber":"Caliber9x18PM","damage":67,"penetrationPower":1,"armorDamage":2,"fragmentationChance":0.6,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":250,"name":"9x18mm PM SP8 gzh","shortName":"SP8"},{"caliber":"Caliber9x39","damage":71,"penetrationPower":28,"armorDamage":39,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":290,"name":"9x39mm SP-5 gs","shortName":"SP-5"},{"caliber":"Caliber9x39","damage":60,"penetrationPower":48,"armorDamage":64,"fragmentationChance":0.1,"recoilModifier":0.05,"accuracyModifier":0,"initialSpeed":305,"name":"9x39mm SP-6 gs","shortName":"SP-6"},{"caliber":"Caliber12g","damage":167,"penetrationPower":15,"armorDamage":55,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":1.2,"initialSpeed":370,"name":"12/70 lead slug","shortName":"Slug"},{"caliber":"Caliber9x19PARA","damage":59,"penetrationPower":10,"armorDamage":32,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":340,"name":"9x19mm PSO gzh","shortName":"PSO"},{"caliber":"Caliber762x54R","damage":81,"penetrationPower":42,"armorDamage":78,"fragmentationChance":0.18,"recoilModifier":0,"accuracyModifier":-0.05,"initialSpeed":865,"name":"7.62x54mm R LPS gzh","shortName":"LPS"},{"caliber":"Caliber762x51","damage":80,"penetrationPower":43,"armorDamage":67,"fragmentationChance":0.17,"recoilModifier":0.01,"accuracyModifier":-0.13,"initialSpeed":820,"name":"7.62x51mm M80","shortName":"M80"},{"caliber":"Caliber762x39","damage":58,"penetrationPower":47,"armorDamage":63,"fragmentationChance":0.12,"recoilModifier":0.07,"accuracyModifier":-0.03,"initialSpeed":730,"name":"7.62x39mm BP gzh","shortName":"BP"},{"caliber":"Caliber762x39","damage":65,"penetrationPower":30,"armorDamage":46,"fragmentationChance":0.12,"recoilModifier":-0.06,"accuracyModifier":-0.04,"initialSpeed":720,"name":"7.62x39mm T-45M1 gzh","shortName":"T-45M1"},{"caliber":"Caliber762x39","damage":56,"penetrationPower":29,"armorDamage":42,"fragmentationChance":0.075,"recoilModifier":-0.3,"accuracyModifier":0.05,"initialSpeed":301,"name":"7.62x39mm US gzh","shortName":"US"},{"caliber":"Caliber762x39","damage":80,"penetrationPower":15,"armorDamage":20,"fragmentationChance":0.4,"recoilModifier":0.05,"accuracyModifier":-0.05,"initialSpeed":754,"name":"7.62x39mm HP","shortName":"HP"},{"caliber":"Caliber366TKM","damage":98,"penetrationPower":23,"armorDamage":48,"fragmentationChance":0.25,"recoilModifier":0.1,"accuracyModifier":0,"initialSpeed":580,"name":".366 TKM FMJ","shortName":"FMJ"},{"caliber":"Caliber366TKM","damage":73,"penetrationPower":30,"armorDamage":40,"fragmentationChance":0.2,"recoilModifier":-0.15,"accuracyModifier":-0.1,"initialSpeed":770,"name":".366 TKM EKO","shortName":"EKO"},{"caliber":"Caliber366TKM","damage":110,"penetrationPower":14,"armorDamage":38,"fragmentationChance":0.45,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":550,"name":".366 TKM Geksa","shortName":"Geksa"},{"caliber":"Caliber556x45NATO","damage":60,"penetrationPower":18,"armorDamage":26,"fragmentationChance":0.328,"recoilModifier":-0.02,"accuracyModifier":-0.02,"initialSpeed":874,"name":"5.56x45mm M856","shortName":"M856"},{"caliber":"Caliber556x45NATO","damage":52,"penetrationPower":38,"armorDamage":44,"fragmentationChance":0.428,"recoilModifier":0.04,"accuracyModifier":-0.04,"initialSpeed":940,"name":"5.56x45mm M856A1","shortName":"M856A1"},{"caliber":"Caliber556x45NATO","damage":42,"penetrationPower":53,"armorDamage":52,"fragmentationChance":0.42,"recoilModifier":0.08,"accuracyModifier":-0.07,"initialSpeed":1013,"name":"5.56x45mm M995","shortName":"M995"},{"caliber":"Caliber556x45NATO","damage":72,"penetrationPower":11,"armorDamage":24,"fragmentationChance":0.03,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":936,"name":"5.56x45mm MK 255 Mod 0 (RRLP)","shortName":"RRLP"},{"caliber":"Caliber556x45NATO","damage":57,"penetrationPower":23,"armorDamage":33,"fragmentationChance":0.5,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":957,"name":"5.56x45mm FMJ","shortName":"FMJ"},{"caliber":"Caliber556x45NATO","damage":79,"penetrationPower":7,"armorDamage":22,"fragmentationChance":0.7,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":947,"name":"5.56x45mm HP","shortName":"HP"},{"caliber":"Caliber762x54R","damage":84,"penetrationPower":45,"armorDamage":84,"fragmentationChance":0.083,"recoilModifier":0.08,"accuracyModifier":0.1,"initialSpeed":875,"name":"7.62x54mm R PS gzh","shortName":"PS"},{"caliber":"Caliber9x21","damage":59,"penetrationPower":22,"armorDamage":39,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":410,"name":"9x21mm PS gzh","shortName":"PS"},{"caliber":"Caliber9x21","damage":65,"penetrationPower":18,"armorDamage":44,"fragmentationChance":0.3,"recoilModifier":-0.03,"accuracyModifier":0.01,"initialSpeed":413,"name":"9x21mm P gzh","shortName":"P"},{"caliber":"Caliber9x21","damage":80,"penetrationPower":15,"armorDamage":63,"fragmentationChance":0.35,"recoilModifier":-0.05,"accuracyModifier":0.03,"initialSpeed":415,"name":"9x21mm PE gzh","shortName":"PE"},{"caliber":"Caliber9x21","damage":52,"penetrationPower":32,"armorDamage":42,"fragmentationChance":0.2,"recoilModifier":0.05,"accuracyModifier":-0.05,"initialSpeed":410,"name":"9x21mm BT gzh","shortName":"BT"},{"caliber":"Caliber20g","damage":25,"penetrationPower":3,"armorDamage":14,"fragmentationChance":0,"recoilModifier":0.1,"accuracyModifier":-0.1,"initialSpeed":340,"name":"20/70 5.6mm buckshot","shortName":"5.6mm"},{"caliber":"Caliber9x19PARA","damage":70,"penetrationPower":10,"armorDamage":38,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":420,"name":"9x19mm Luger CCI","shortName":"Luger CCI"},{"caliber":"Caliber762x51","damage":73,"penetrationPower":60,"armorDamage":79,"fragmentationChance":0.14,"recoilModifier":0.03,"accuracyModifier":0.05,"initialSpeed":833,"name":"7.62x51mm M61","shortName":"M61"},{"caliber":"Caliber762x51","damage":82,"penetrationPower":42,"armorDamage":65,"fragmentationChance":0.14,"recoilModifier":0.01,"accuracyModifier":-0.1,"initialSpeed":820,"name":"7.62x51mm M62 Tracer","shortName":"M62"},{"caliber":"Caliber46x30","damage":43,"penetrationPower":40,"armorDamage":41,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":620,"name":"4.6x30mm FMJ SX","shortName":"FMJ SX"},{"caliber":"Caliber46x30","damage":65,"penetrationPower":18,"armorDamage":28,"fragmentationChance":0.5,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":690,"name":"4.6x30mm Action SX","shortName":"Action SX"},{"caliber":"Caliber46x30","damage":35,"penetrationPower":53,"armorDamage":46,"fragmentationChance":0.1,"recoilModifier":0.1,"accuracyModifier":0,"initialSpeed":680,"name":"4.6x30mm AP SX","shortName":"AP SX"},{"caliber":"Caliber46x30","damage":52,"penetrationPower":23,"armorDamage":33,"fragmentationChance":0.2,"recoilModifier":-0.22,"accuracyModifier":0.1,"initialSpeed":290,"name":"4.6x30mm Subsonic SX","shortName":"Subsonic SX"},{"caliber":"Caliber9x19PARA","damage":102,"penetrationPower":2,"armorDamage":11,"fragmentationChance":1,"recoilModifier":0.05,"accuracyModifier":0,"initialSpeed":381,"name":"9x19mm RIP","shortName":"RIP"},{"caliber":"Caliber12g","damage":265,"penetrationPower":2,"armorDamage":11,"fragmentationChance":1,"recoilModifier":0.35,"accuracyModifier":0.8,"initialSpeed":410,"name":"12/70 RIP","shortName":"RIP"},{"caliber":"Caliber556x45NATO","damage":88,"penetrationPower":3,"armorDamage":11,"fragmentationChance":0.9,"recoilModifier":0.1,"accuracyModifier":0.1,"initialSpeed":936,"name":"5.56x45mm Warmageddon","shortName":"Warmage"},{"caliber":"Caliber545x39","damage":37,"penetrationPower":62,"armorDamage":59,"fragmentationChance":0.02,"recoilModifier":0.15,"accuracyModifier":-0.05,"initialSpeed":905,"name":"5.45x39mm PPBS gs Igolnik","shortName":"PPBS"},{"caliber":"Caliber9x39","damage":68,"penetrationPower":35,"armorDamage":48,"fragmentationChance":0.2,"recoilModifier":0.07,"accuracyModifier":0.1,"initialSpeed":310,"name":"9x39mm SPP gs","shortName":"SPP"},{"caliber":"Caliber9x39","damage":58,"penetrationPower":54,"armorDamage":69,"fragmentationChance":0.1,"recoilModifier":0.15,"accuracyModifier":0.1,"initialSpeed":295,"name":"9x39mm BP gs","shortName":"BP"},{"caliber":"Caliber9x19PARA","damage":58,"penetrationPower":14,"armorDamage":33,"fragmentationChance":0.15,"recoilModifier":-0.06,"accuracyModifier":-0.05,"initialSpeed":365,"name":"9x19mm Green Tracer","shortName":"GT"},{"caliber":"Caliber9x19PARA","damage":52,"penetrationPower":30,"armorDamage":48,"fragmentationChance":0.05,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":392,"name":"9x19mm AP 6.3","shortName":"AP 6.3"},{"caliber":"Caliber127x55","damage":115,"penetrationPower":28,"armorDamage":60,"fragmentationChance":0.3,"recoilModifier":0,"accuracyModifier":0.1,"initialSpeed":300,"name":"12.7x55mm PS12","shortName":"PS12"},{"caliber":"Caliber127x55","damage":165,"penetrationPower":10,"armorDamage":22,"fragmentationChance":0.7,"recoilModifier":-0.12,"accuracyModifier":-0.15,"initialSpeed":870,"name":"12.7x55mm PS12A","shortName":"PS12A"},{"caliber":"Caliber127x55","damage":102,"penetrationPower":46,"armorDamage":57,"fragmentationChance":0.3,"recoilModifier":0.15,"accuracyModifier":0,"initialSpeed":570,"name":"12.7x55mm PS12B","shortName":"PS12B"},{"caliber":"Caliber57x28","damage":49,"penetrationPower":37,"armorDamage":43,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":715,"name":"5.7x28mm SS190","shortName":"SS190"},{"caliber":"Caliber57x28","damage":53,"penetrationPower":33,"armorDamage":41,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":-0.04,"initialSpeed":715,"name":"5.7x28mm L191","shortName":"L191"},{"caliber":"Caliber57x28","damage":59,"penetrationPower":27,"armorDamage":37,"fragmentationChance":0.35,"recoilModifier":-0.15,"accuracyModifier":0.05,"initialSpeed":299,"name":"5.7x28mm SB193","shortName":"SB193"},{"caliber":"Caliber57x28","damage":70,"penetrationPower":17,"armorDamage":19,"fragmentationChance":0.8,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":792,"name":"5.7x28mm SS198LF","shortName":"SS198LF"},{"caliber":"Caliber57x28","damage":62,"penetrationPower":25,"armorDamage":22,"fragmentationChance":0.5,"recoilModifier":0,"accuracyModifier":0.1,"initialSpeed":594,"name":"5.7x28mm SS197SR","shortName":"SS197SR"},{"caliber":"Caliber57x28","damage":98,"penetrationPower":8,"armorDamage":7,"fragmentationChance":1,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":729,"name":"5.7x28mm R37.F","shortName":"R37.F"},{"caliber":"Caliber57x28","damage":81,"penetrationPower":11,"armorDamage":9,"fragmentationChance":0.7,"recoilModifier":0,"accuracyModifier":-0.05,"initialSpeed":724,"name":"5.7x28mm R37.X","shortName":"R37.X"},{"caliber":"Caliber12g","damage":37,"penetrationPower":1,"armorDamage":15,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":330,"name":"12/70 5.25mm buckshot","shortName":"5.25mm"},{"caliber":"Caliber12g","damage":35,"penetrationPower":3,"armorDamage":26,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0.15,"initialSpeed":430,"name":"12/70 6.5mm Express buckshot","shortName":"Express"},{"caliber":"Caliber12g","damage":50,"penetrationPower":2,"armorDamage":26,"fragmentationChance":0,"recoilModifier":1.15,"accuracyModifier":-0.15,"initialSpeed":385,"name":"12/70 8.5mm Magnum buckshot","shortName":"Magnum"},{"caliber":"Caliber12g","damage":190,"penetrationPower":12,"armorDamage":48,"fragmentationChance":0.12,"recoilModifier":0.2,"accuracyModifier":0.8,"initialSpeed":390,"name":"12/70 Grizzly 40 slug","shortName":"Grizzly 40"},{"caliber":"Caliber12g","damage":140,"penetrationPower":17,"armorDamage":40,"fragmentationChance":0.2,"recoilModifier":-0.15,"accuracyModifier":1.1,"initialSpeed":410,"name":"12/70 Poleva-3 slug","shortName":"Poleva-3"},{"caliber":"Caliber12g","damage":150,"penetrationPower":20,"armorDamage":50,"fragmentationChance":0.15,"recoilModifier":-0.1,"accuracyModifier":1.15,"initialSpeed":430,"name":"12/70 Poleva-6u slug","shortName":"Poleva-6u"},{"caliber":"Caliber12g","damage":164,"penetrationPower":37,"armorDamage":65,"fragmentationChance":0.03,"recoilModifier":0.5,"accuracyModifier":0.8,"initialSpeed":510,"name":"12/70 AP-20 armor-piercing slug","shortName":"AP-20"},{"caliber":"Caliber12g","damage":206,"penetrationPower":14,"armorDamage":46,"fragmentationChance":0.38,"recoilModifier":0.1,"accuracyModifier":1.5,"initialSpeed":442,"name":"12/70 Copper Sabot Premier HP slug","shortName":"CSP"},{"caliber":"Caliber12g","damage":197,"penetrationPower":26,"armorDamage":57,"fragmentationChance":0.05,"recoilModifier":0.25,"accuracyModifier":0.9,"initialSpeed":410,"name":"12/70 makeshift .50 BMG slug","shortName":".50 BMG"},{"caliber":"Caliber12g","damage":220,"penetrationPower":5,"armorDamage":12,"fragmentationChance":0.39,"recoilModifier":-0.15,"accuracyModifier":1.7,"initialSpeed":594,"name":"12/70 SuperFormance HP slug","shortName":"SFormance"},{"caliber":"Caliber12g","damage":85,"penetrationPower":17,"armorDamage":65,"fragmentationChance":0.1,"recoilModifier":0.15,"accuracyModifier":1,"initialSpeed":415,"name":"12/70 Dual Sabot slug","shortName":"DualSabot"},{"caliber":"Caliber12g","damage":183,"penetrationPower":20,"armorDamage":50,"fragmentationChance":0.1,"recoilModifier":-0.25,"accuracyModifier":1.35,"initialSpeed":480,"name":"12/70 FTX Custom Lite slug","shortName":"FTX"},{"caliber":"Caliber12g","damage":25,"penetrationPower":31,"armorDamage":26,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":-0.1,"initialSpeed":320,"name":"12/70 flechette","shortName":"Flechette"},{"caliber":"Caliber20g","damage":26,"penetrationPower":1,"armorDamage":12,"fragmentationChance":0,"recoilModifier":0.1,"accuracyModifier":-0.1,"initialSpeed":340,"name":"20/70 5.6mm buckshot","shortName":"5.6mm"},{"caliber":"Caliber20g","damage":22,"penetrationPower":2,"armorDamage":13,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":410,"name":"20/70 6.2mm buckshot","shortName":"6.2mm"},{"caliber":"Caliber20g","damage":23,"penetrationPower":3,"armorDamage":13,"fragmentationChance":0,"recoilModifier":0.15,"accuracyModifier":0,"initialSpeed":475,"name":"20/70 7.3mm buckshot","shortName":"7.3mm"},{"caliber":"Caliber20g","damage":154,"penetrationPower":16,"armorDamage":42,"fragmentationChance":0.1,"recoilModifier":0.05,"accuracyModifier":1.3,"initialSpeed":415,"name":"20/70 Star slug","shortName":"Star"},{"caliber":"Caliber20g","damage":135,"penetrationPower":17,"armorDamage":40,"fragmentationChance":0.15,"recoilModifier":-0.1,"accuracyModifier":1.1,"initialSpeed":445,"name":"20/70 Poleva-6u slug","shortName":"Poleva-6u"},{"caliber":"Caliber20g","damage":120,"penetrationPower":14,"armorDamage":35,"fragmentationChance":0.2,"recoilModifier":-0.15,"accuracyModifier":1.1,"initialSpeed":425,"name":"20/70 Poleva-3 slug","shortName":"Poleva-3"},{"caliber":"Caliber20g","damage":198,"penetrationPower":5,"armorDamage":13,"fragmentationChance":1,"recoilModifier":0.3,"accuracyModifier":1.25,"initialSpeed":405,"name":"20/70 Devastator slug","shortName":"Devastator"},{"caliber":"Caliber762x54R","damage":82,"penetrationPower":41,"armorDamage":83,"fragmentationChance":0.18,"recoilModifier":-0.05,"accuracyModifier":-0.01,"initialSpeed":800,"name":"7.62x54mm R T-46M gzh","shortName":"T-46M"},{"caliber":"Caliber762x54R","damage":78,"penetrationPower":55,"armorDamage":87,"fragmentationChance":0.081,"recoilModifier":-0.04,"accuracyModifier":-0.02,"initialSpeed":875,"name":"7.62x54mm R BT gzh","shortName":"BT"},{"caliber":"Caliber762x54R","damage":72,"penetrationPower":70,"armorDamage":88,"fragmentationChance":0.083,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":785,"name":"7.62x54mm R BS gs","shortName":"BS"},{"caliber":"Caliber762x51","damage":83,"penetrationPower":37,"armorDamage":56,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":840,"name":"7.62x51mm BCP FMJ","shortName":"BCP FMJ"},{"caliber":"Caliber762x51","damage":85,"penetrationPower":30,"armorDamage":25,"fragmentationChance":0.35,"recoilModifier":-0.03,"accuracyModifier":0.2,"initialSpeed":800,"name":"7.62x51mm TCW SP","shortName":"TCW SP"},{"caliber":"Caliber762x51","damage":105,"penetrationPower":15,"armorDamage":40,"fragmentationChance":0.7,"recoilModifier":-0.05,"accuracyModifier":0.35,"initialSpeed":800,"name":"7.62x51mm Ultra Nosler","shortName":"Ultra Nosler"},{"caliber":"Caliber1143x23ACP","damage":72,"penetrationPower":25,"armorDamage":36,"fragmentationChance":0.01,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":340,"name":".45 ACP Match FMJ","shortName":"FMJ"},{"caliber":"Caliber23x75","damage":87,"penetrationPower":11,"armorDamage":20,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":270,"name":"23x75mm Shrapnel-10 buckshot","shortName":"Shrap-10"},{"caliber":"Caliber23x75","damage":0,"penetrationPower":0,"armorDamage":0,"fragmentationChance":0.3,"recoilModifier":0.2,"accuracyModifier":0,"initialSpeed":80,"name":"23x75mm Zvezda flashbang round","shortName":"Zvezda"},{"caliber":"Caliber23x75","damage":192,"penetrationPower":39,"armorDamage":75,"fragmentationChance":0.2,"recoilModifier":0.25,"accuracyModifier":-0.05,"initialSpeed":420,"name":"23x75mm Barrikada slug","shortName":"Barrikada"},{"caliber":"Caliber1143x23ACP","damage":130,"penetrationPower":3,"armorDamage":12,"fragmentationChance":1,"recoilModifier":0,"accuracyModifier":-0.05,"initialSpeed":293,"name":".45 ACP RIP","shortName":"RIP"},{"caliber":"Caliber40x46","damage":199,"penetrationPower":1,"armorDamage":95,"fragmentationChance":0,"recoilModifier":-0.1,"accuracyModifier":0.15,"initialSpeed":76,"name":"40x46mm M406 (HE) grenade","shortName":"M406"},{"caliber":"Caliber40x46","damage":199,"penetrationPower":1,"armorDamage":95,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":76,"name":"40x46mm M441 (HE) grenade","shortName":"M441"},{"caliber":"Caliber40x46","damage":199,"penetrationPower":1,"armorDamage":95,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":76,"name":"40x46mm M381 (HE) grenade","shortName":"M381"},{"caliber":"Caliber40x46","damage":160,"penetrationPower":5,"armorDamage":95,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":1,"initialSpeed":269,"name":"40x46mm M576 (MP-APERS) grenade","shortName":"M576"},{"caliber":"Caliber40x46","damage":199,"penetrationPower":1,"armorDamage":95,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":76,"name":"40x46mm M386 (HE) grenade","shortName":"M386"},{"caliber":"Caliber762x51","damage":70,"penetrationPower":65,"armorDamage":85,"fragmentationChance":0.13,"recoilModifier":0.06,"accuracyModifier":0.15,"initialSpeed":930,"name":"7.62x51mm M993","shortName":"M993"},{"caliber":"Caliber1143x23ACP","damage":66,"penetrationPower":38,"armorDamage":48,"fragmentationChance":0.01,"recoilModifier":0.07,"accuracyModifier":-0.05,"initialSpeed":299,"name":".45 ACP AP","shortName":"AP"},{"caliber":"Caliber1143x23ACP","damage":76,"penetrationPower":19,"armorDamage":37,"fragmentationChance":0.01,"recoilModifier":0,"accuracyModifier":0.1,"initialSpeed":290,"name":".45 ACP Lasermatch FMJ","shortName":"Lasermatch"},{"caliber":"Caliber9x19PARA","damage":44,"penetrationPower":39,"armorDamage":55,"fragmentationChance":0.05,"recoilModifier":0.05,"accuracyModifier":0.05,"initialSpeed":560,"name":"9x19mm PBP gzh","shortName":"PBP"},{"caliber":"Caliber9x19PARA","damage":85,"penetrationPower":8,"armorDamage":22,"fragmentationChance":0.1,"recoilModifier":0.1,"accuracyModifier":0.1,"initialSpeed":290,"name":"9x19mm QuakeMaker","shortName":"QuakeMaker"},{"caliber":"Caliber1143x23ACP","damage":100,"penetrationPower":13,"armorDamage":30,"fragmentationChance":0.5,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":274,"name":".45 ACP Hydra-Shok","shortName":"HydraShok"},{"caliber":"Caliber366TKM","damage":90,"penetrationPower":42,"armorDamage":60,"fragmentationChance":0.01,"recoilModifier":0.35,"accuracyModifier":-0.22,"initialSpeed":602,"name":".366 TKM AP-M","shortName":"AP-M"},{"caliber":"Caliber40x46","damage":199,"penetrationPower":1,"armorDamage":95,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":76,"name":"40x46mm M433 (HEDP) grenade","shortName":"M433"},{"caliber":"Caliber23x75","damage":78,"penetrationPower":10,"armorDamage":20,"fragmentationChance":0,"recoilModifier":0.1,"accuracyModifier":0.2,"initialSpeed":375,"name":"23x75mm Shrapnel-25 buckshot","shortName":"Shrap-25"},{"caliber":"Caliber762x35","damage":60,"penetrationPower":30,"armorDamage":36,"fragmentationChance":0.3,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":605,"name":".300 Blackout BCP FMJ","shortName":"BCP FMJ"},{"caliber":"Caliber86x70","damage":122,"penetrationPower":47,"armorDamage":83,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":900,"name":".338 Lapua Magnum FMJ","shortName":"FMJ"},{"caliber":"Caliber86x70","damage":115,"penetrationPower":79,"armorDamage":89,"fragmentationChance":0.13,"recoilModifier":0.1,"accuracyModifier":0,"initialSpeed":849,"name":".338 Lapua Magnum AP","shortName":"AP"},{"caliber":"Caliber86x70","damage":196,"penetrationPower":18,"armorDamage":55,"fragmentationChance":0.5,"recoilModifier":-0.05,"accuracyModifier":0.1,"initialSpeed":880,"name":".338 Lapua Magnum TAC-X","shortName":"TAC-X"},{"caliber":"Caliber86x70","damage":142,"penetrationPower":32,"armorDamage":70,"fragmentationChance":0.6,"recoilModifier":0,"accuracyModifier":-0.05,"initialSpeed":849,"name":".338 Lapua Magnum UCW","shortName":"UCW"},{"caliber":"Caliber762x35","damage":51,"penetrationPower":48,"armorDamage":65,"fragmentationChance":0.1,"recoilModifier":0.03,"accuracyModifier":0,"initialSpeed":635,"name":".300 Blackout AP","shortName":"AP"},{"caliber":"Caliber556x45NATO","damage":53,"penetrationPower":33,"armorDamage":39,"fragmentationChance":0.35,"recoilModifier":0.03,"accuracyModifier":0.02,"initialSpeed":902,"name":"5.56x45mm MK 318 Mod 0 (SOST)","shortName":"SOST"},{"caliber":"Caliber556x45NATO","damage":38,"penetrationPower":57,"armorDamage":58,"fragmentationChance":0.3,"recoilModifier":0.06,"accuracyModifier":-0.09,"initialSpeed":1013,"name":"5.56x45mm SSA AP","shortName":"SSA AP"},{"caliber":"Caliber762x39","damage":53,"penetrationPower":58,"armorDamage":76,"fragmentationChance":0.05,"recoilModifier":0.1,"accuracyModifier":-0.05,"initialSpeed":875,"name":"7.62x39mm MAI AP","shortName":"MAI AP"},{"caliber":"Caliber545x39","damage":55,"penetrationPower":42,"armorDamage":45,"fragmentationChance":0.02,"recoilModifier":-0.1,"accuracyModifier":0.5,"initialSpeed":915,"name":"5.45x39mm 7N40","shortName":"7N40"},{"caliber":"Caliber9x39","damage":62,"penetrationPower":43,"armorDamage":57,"fragmentationChance":0.1,"recoilModifier":0.1,"accuracyModifier":-0.15,"initialSpeed":320,"name":"9x39mm PAB-9 gs","shortName":"PAB-9"},{"caliber":"Caliber762x35","damage":72,"penetrationPower":20,"armorDamage":25,"fragmentationChance":0.25,"recoilModifier":-0.1,"accuracyModifier":0.3,"initialSpeed":723,"name":".300 Blackout V-Max","shortName":"V-Max"},{"caliber":"Caliber762x35","damage":90,"penetrationPower":14,"armorDamage":18,"fragmentationChance":0.35,"recoilModifier":-0.05,"accuracyModifier":0.05,"initialSpeed":853,"name":".300 Whisper","shortName":"Whisper"},{"caliber":"Caliber762x35","damage":54,"penetrationPower":36,"armorDamage":40,"fragmentationChance":0.2,"recoilModifier":0.01,"accuracyModifier":0,"initialSpeed":442,"name":".300 Blackout M62 Tracer","shortName":"M62"},{"caliber":"Caliber9x33R","damage":70,"penetrationPower":35,"armorDamage":43,"fragmentationChance":0.01,"recoilModifier":0.12,"accuracyModifier":0,"initialSpeed":385,"name":".357 Magnum FMJ","shortName":"FMJ"},{"caliber":"Caliber9x33R","damage":99,"penetrationPower":18,"armorDamage":20,"fragmentationChance":0.6,"recoilModifier":0.15,"accuracyModifier":0.15,"initialSpeed":481,"name":".357 Magnum HP","shortName":"HP"},{"caliber":"Caliber9x33R","damage":88,"penetrationPower":24,"armorDamage":28,"fragmentationChance":0.6,"recoilModifier":0.08,"accuracyModifier":0.15,"initialSpeed":425,"name":".357 Magnum JHP","shortName":"JHP"},{"caliber":"Caliber9x33R","damage":108,"penetrationPower":12,"armorDamage":15,"fragmentationChance":0.2,"recoilModifier":-0.29,"accuracyModifier":0.27,"initialSpeed":455,"name":".357 Magnum SP","shortName":"SP"},{"caliber":"Caliber46x30","damage":46,"penetrationPower":32,"armorDamage":37,"fragmentationChance":0.3,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":579,"name":"4.6x30mm JSP SX","shortName":"JSP SX"},{"caliber":"Caliber762x39","damage":59,"penetrationPower":41,"armorDamage":57,"fragmentationChance":0.15,"recoilModifier":0.05,"accuracyModifier":-0.01,"initialSpeed":732,"name":"7.62x39mm PP gzh","shortName":"PP"},{"caliber":"Caliber762x39","damage":63,"penetrationPower":26,"armorDamage":33,"fragmentationChance":0.3,"recoilModifier":-0.02,"accuracyModifier":0.02,"initialSpeed":775,"name":"7.62x39mm FMJ","shortName":"FMJ"},{"caliber":"Caliber762x39","damage":68,"penetrationPower":20,"armorDamage":27,"fragmentationChance":0.35,"recoilModifier":-0.05,"accuracyModifier":0.05,"initialSpeed":772,"name":"7.62x39mm SP","shortName":"SP"},{"caliber":"Caliber9x19PARA","damage":56,"penetrationPower":18,"armorDamage":35,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":385,"name":"9x19mm FMJ M882","shortName":"M882"},{"caliber":"Caliber762x35","damage":58,"penetrationPower":43,"armorDamage":57,"fragmentationChance":0.15,"recoilModifier":0.05,"accuracyModifier":0,"initialSpeed":725,"name":".300 Blackout CBJ","shortName":"CBJ"},{"caliber":"Caliber12g","damage":25,"penetrationPower":24,"armorDamage":22,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":-0.05,"initialSpeed":310,"name":"12/70 Piranha","shortName":"Piranha"},{"caliber":"Caliber762x54R","damage":84,"penetrationPower":36,"armorDamage":63,"fragmentationChance":0.2,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":760,"name":"7.62x54mm R FMJ","shortName":"FMJ"},{"caliber":"Caliber762x54R","damage":92,"penetrationPower":31,"armorDamage":56,"fragmentationChance":0.24,"recoilModifier":0,"accuracyModifier":0.07,"initialSpeed":703,"name":"7.62x54mm R SP BT","shortName":"SP BT"},{"caliber":"Caliber762x54R","damage":102,"penetrationPower":26,"armorDamage":37,"fragmentationChance":0.4,"recoilModifier":0,"accuracyModifier":0.1,"initialSpeed":807,"name":"7.62x54mm R HP BT","shortName":"HP BT"},{"caliber":"Caliber68x51","damage":72,"penetrationPower":47,"armorDamage":58,"fragmentationChance":0.12,"recoilModifier":0.1,"accuracyModifier":0.03,"initialSpeed":914,"name":"6.8x51mm SIG Hybrid","shortName":"Hybrid"},{"caliber":"Caliber68x51","damage":80,"penetrationPower":36,"armorDamage":49,"fragmentationChance":0.18,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":899,"name":"6.8x51mm SIG FMJ","shortName":"FMJ"},{"caliber":"Caliber9x21","damage":49,"penetrationPower":38,"armorDamage":47,"fragmentationChance":0.1,"recoilModifier":0.1,"accuracyModifier":-0.03,"initialSpeed":400,"name":"9x21mm 7N42 Zubilo","shortName":"7N42"},{"caliber":"Caliber9x21","damage":53,"penetrationPower":27,"armorDamage":44,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":300,"name":"9x21mm 7U4","shortName":"7U4"},{"caliber":"Caliber9x39","damage":75,"penetrationPower":17,"armorDamage":28,"fragmentationChance":0.3,"recoilModifier":-0.05,"accuracyModifier":0.05,"initialSpeed":330,"name":"9x39mm FMJ","shortName":"FMJ"},{"caliber":"Caliber20g","damage":155,"penetrationPower":30,"armorDamage":54,"fragmentationChance":0.02,"recoilModifier":0.48,"accuracyModifier":0.64,"initialSpeed":482,"name":"20/70 TSS Armor Piercing Slug","shortName":"TSS AP"},{"caliber":"Caliber20g","damage":143,"penetrationPower":25,"armorDamage":47,"fragmentationChance":0.03,"recoilModifier":0.4,"accuracyModifier":0.6,"initialSpeed":476,"name":"20/70 Dangerous Game Slug","shortName":"DGS"},{"caliber":"Caliber20g","damage":20,"penetrationPower":24,"armorDamage":24,"fragmentationChance":0,"recoilModifier":0,"accuracyModifier":-0.1,"initialSpeed":400,"name":"20/70 flechette","shortName":"Flechette"},{"caliber":"Caliber127x33","damage":85,"penetrationPower":40,"armorDamage":50,"fragmentationChance":0.01,"recoilModifier":0.1,"accuracyModifier":0,"initialSpeed":440,"name":".50 AE FMJ","shortName":"FMJ"},{"caliber":"Caliber127x33","damage":147,"penetrationPower":12,"armorDamage":23,"fragmentationChance":0.7,"recoilModifier":0.05,"accuracyModifier":-0.1,"initialSpeed":440,"name":".50 AE JHP","shortName":"JHP"},{"caliber":"Caliber127x33","damage":94,"penetrationPower":33,"armorDamage":56,"fragmentationChance":0.3,"recoilModifier":0.08,"accuracyModifier":0.05,"initialSpeed":460,"name":".50 AE Copper Solid","shortName":"Copper"},{"caliber":"Caliber127x33","damage":122,"penetrationPower":26,"armorDamage":28,"fragmentationChance":0.3,"recoilModifier":0.02,"accuracyModifier":-0.05,"initialSpeed":465,"name":".50 AE Hawk JSP","shortName":"Hawk JSP"},{"caliber":"Caliber762x51","damage":75,"penetrationPower":55,"armorDamage":74,"fragmentationChance":0.13,"recoilModifier":0.04,"accuracyModifier":-0.05,"initialSpeed":929,"name":"7.62x51mm M80A1","shortName":"M80A1"},{"caliber":"Caliber784x49","damage":80,"penetrationPower":42,"armorDamage":78,"fragmentationChance":0.1,"recoilModifier":0.03,"accuracyModifier":-0.02,"initialSpeed":838,"name":".308 ME","shortName":"ME"},{"caliber":"Caliber784x49","damage":96,"penetrationPower":24,"armorDamage":55,"fragmentationChance":0.35,"recoilModifier":-0.03,"accuracyModifier":-0.02,"initialSpeed":838,"name":".308 ME LOKT","shortName":"LOKT"},{"caliber":"Caliber127x99","damage":260,"penetrationPower":34,"armorDamage":22,"fragmentationChance":0.12,"recoilModifier":0.15,"accuracyModifier":0.15,"initialSpeed":880,"name":".50 BMG HP","shortName":"HP"},{"caliber":"Caliber127x99","damage":220,"penetrationPower":45,"armorDamage":55,"fragmentationChance":0.07,"recoilModifier":0.2,"accuracyModifier":0,"initialSpeed":867,"name":".50 BMG M21","shortName":"M21"},{"caliber":"Caliber127x99","damage":190,"penetrationPower":56,"armorDamage":85,"fragmentationChance":0.05,"recoilModifier":0.25,"accuracyModifier":-0.05,"initialSpeed":887,"name":".50 BMG M33","shortName":"M33"},{"caliber":"Caliber127x99","damage":160,"penetrationPower":115,"armorDamage":90,"fragmentationChance":0.01,"recoilModifier":0.28,"accuracyModifier":-0.1,"initialSpeed":1220,"name":".50 BMG M903 SLAP","shortName":"M903"},{"caliber":"Caliber93x64","damage":129,"penetrationPower":37,"armorDamage":55,"fragmentationChance":0.5,"recoilModifier":-0.2,"accuracyModifier":0,"initialSpeed":697,"name":"9.3x64mm SP","shortName":"SP"},{"caliber":"Caliber93x64","damage":115,"penetrationPower":44,"armorDamage":55,"fragmentationChance":0.5,"recoilModifier":0,"accuracyModifier":0.15,"initialSpeed":793,"name":"9.3x64mm FMJ","shortName":"FMJ"},{"caliber":"Caliber93x64","damage":108,"penetrationPower":56,"armorDamage":55,"fragmentationChance":0.5,"recoilModifier":0.2,"accuracyModifier":-0.05,"initialSpeed":790,"name":"9.3x64mm 7N33","shortName":"7N33"},{"caliber":"Caliber762x25TT","damage":34,"penetrationPower":31,"armorDamage":33,"fragmentationChance":0.02,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":900,"name":"7.62x25mm TT M855A1","shortName":"TT 855A1"},{"caliber":"Caliber762x25TT","damage":36,"penetrationPower":27,"armorDamage":31,"fragmentationChance":0.08,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":900,"name":"7.62x25mm TT M856A1","shortName":"TT 856A1"},{"caliber":"Caliber762x25TT","damage":32,"penetrationPower":37,"armorDamage":36,"fragmentationChance":0.25,"recoilModifier":0,"accuracyModifier":0,"initialSpeed":940,"name":"7.62x25mm TT M995","shortName":"TT 995"}];

// Clean caliber names
var CALIBER_MAP = {
  "Caliber556x45NATO": "5.56x45mm",
  "Caliber545x39": "5.45x39mm",
  "Caliber762x39": "7.62x39mm",
  "Caliber762x51": "7.62x51mm",
  "Caliber762x54R": "7.62x54mm R",
  "Caliber762x25TT": "7.62x25mm TT",
  "Caliber762x35": ".300 Blackout",
  "Caliber9x18PM": "9x18mm PM",
  "Caliber9x19PARA": "9x19mm",
  "Caliber9x21": "9x21mm",
  "Caliber9x39": "9x39mm",
  "Caliber9x33R": ".357 Magnum",
  "Caliber12g": "12 Gauge",
  "Caliber20g": "20 Gauge",
  "Caliber23x75": "23x75mm",
  "Caliber366TKM": ".366 TKM",
  "Caliber46x30": "4.6x30mm",
  "Caliber57x28": "5.7x28mm",
  "Caliber86x70": ".338 Lapua",
  "Caliber127x55": "12.7x55mm",
  "Caliber127x33": ".50 AE",
  "Caliber127x99": ".50 BMG",
  "Caliber1143x23ACP": ".45 ACP",
  "Caliber40x46": "40x46mm GL",
  "Caliber40mmRU": "40mm GL (RU)",
  "Caliber26x75": "26x75mm Flare",
  "Caliber20x1mm": "20x1mm",
  "Caliber68x51": "6.8x51mm",
  "Caliber784x49": ".308 ME",
  "Caliber93x64": "9.3x64mm"
};

// Filter out flares, disks
AMMO_DATA = AMMO_DATA.filter(function(a) {
  return a.caliber !== "Caliber26x75" && a.caliber !== "Caliber20x1mm";
});

// Add display caliber
AMMO_DATA.forEach(function(a) {
  a.displayCaliber = CALIBER_MAP[a.caliber] || a.caliber.replace("Caliber", "");
});

// Populate caliber filter
var calibers = [];
AMMO_DATA.forEach(function(a) {
  if (calibers.indexOf(a.displayCaliber) === -1) calibers.push(a.displayCaliber);
});
calibers.sort();
var sel = document.getElementById("caliber-filter");
calibers.forEach(function(c) {
  var o = document.createElement("option");
  o.value = c;
  o.textContent = c;
  sel.appendChild(o);
});

var sortField = "penetrationPower";
var sortDir = -1; // -1 = desc

// Armor class thresholds (approximate durability per class)
var ARMOR_CLASS_PEN = [10, 20, 30, 40, 50, 60];

// Calculate effectiveness rating (0-6) for ammo pen vs armor class
function calcEffectiveness(pen, armorClass) {
  var threshold = ARMOR_CLASS_PEN[armorClass - 1];
  var ratio = pen / threshold;

  if (ratio >= 1.3) return 6;    // Basically Ignores
  if (ratio >= 1.1) return 5;    // Very Effective
  if (ratio >= 0.9) return 4;    // Effective
  if (ratio >= 0.7) return 3;    // Slightly Effective
  if (ratio >= 0.5) return 2;    // Magdump Only
  if (ratio >= 0.3) return 1;    // It's Possible, But...
  return 0;                       // Pointless
}

var EFF_COLORS = {
  0: "#cf0b04",
  1: "#dc3b07",
  2: "#ea6b0a",
  3: "#f99d10",
  4: "#c0b825",
  5: "#87d43d",
  6: "#4cf057"
};

function fmtMod(v) {
  if (v === 0) return "-";
  var s = v > 0 ? "+" : "";
  return s + Math.round(v * 100) + "%";
}

// Max values for bar scaling
var MAX_DMG = 0, MAX_PEN = 0;
AMMO_DATA.forEach(function(a) {
  if (a.damage > MAX_DMG) MAX_DMG = a.damage;
  if (a.penetrationPower > MAX_PEN) MAX_PEN = a.penetrationPower;
});

function renderTable() {
  var search = document.getElementById("ammo-search").value.toLowerCase();
  var calFilter = document.getElementById("caliber-filter").value;

  var filtered = AMMO_DATA.filter(function(a) {
    if (calFilter && a.displayCaliber !== calFilter) return false;
    if (search) {
      var hay = (a.name + " " + a.shortName + " " + a.displayCaliber).toLowerCase();
      return hay.indexOf(search) !== -1;
    }
    return true;
  });

  filtered.sort(function(a, b) {
    // Group by caliber first, then sort within groups
    var calCmp = a.displayCaliber.localeCompare(b.displayCaliber);
    if (calCmp !== 0) return calCmp;
    var va = sortField === "name" ? a.name : a[sortField];
    var vb = sortField === "name" ? b.name : b[sortField];
    if (typeof va === "string") return sortDir * va.localeCompare(vb);
    return sortDir * (va - vb);
  });

  var tbody = document.getElementById("ammo-body");
  var html = "";
  var lastCal = "";

  filtered.forEach(function(a) {
    if (a.displayCaliber !== lastCal) {
      lastCal = a.displayCaliber;
      html += '<tr class="caliber-header"><td colspan="13">' + lastCal + '</td></tr>';
    }

    var dmgPct = Math.min(100, Math.round((a.damage / MAX_DMG) * 100));
    var penPct = Math.min(100, Math.round((a.penetrationPower / MAX_PEN) * 100));

    html += "<tr>" +
      "<td><strong>" + a.shortName + "</strong> <span style='color:var(--text2);font-size:.7rem'>" + a.name + "</span></td>" +
      '<td><div class="stat-cell">' + a.damage + ' <div class="stat-bar"><div class="stat-bar-fill dmg" style="width:' + dmgPct + '%"></div></div></div></td>' +
      '<td><div class="stat-cell">' + a.penetrationPower + ' <div class="stat-bar"><div class="stat-bar-fill pen" style="width:' + penPct + '%"></div></div></div></td>' +
      "<td>" + a.armorDamage + "%</td>" +
      "<td>" + Math.round(a.fragmentationChance * 100) + "%</td>" +
      "<td>" + fmtMod(a.recoilModifier) + "</td>" +
      "<td>" + a.initialSpeed + "</td>";

    // Armor class effectiveness cells
    for (var c = 1; c <= 6; c++) {
      var eff = calcEffectiveness(a.penetrationPower, c);
      var color = EFF_COLORS[eff];
      html += '<td class="eff-cell"><span class="eff-val" style="background:' + color + '">' + eff + '</span></td>';
    }

    html += "</tr>";
  });

  tbody.innerHTML = html;

  // Update header sort indicators
  document.querySelectorAll("th[data-col]").forEach(function(th) {
    th.classList.remove("sorted-asc", "sorted-desc");
    var col = th.getAttribute("data-col");
    if (col === sortField) {
      th.classList.add(sortDir === 1 ? "sorted-asc" : "sorted-desc");
    }
  });
}

function toggleSortDir() {
  sortDir = sortDir === -1 ? 1 : -1;
  document.getElementById("sort-dir").textContent = sortDir === -1 ? "DESC" : "ASC";
  renderTable();
}

// Column header click sorting
document.querySelectorAll("th[data-col]").forEach(function(th) {
  th.addEventListener("click", function() {
    var col = th.getAttribute("data-col");
    if (col === sortField) {
      sortDir = sortDir === -1 ? 1 : -1;
      document.getElementById("sort-dir").textContent = sortDir === -1 ? "DESC" : "ASC";
    } else {
      sortField = col;
      document.getElementById("sort-field").value = col;
      sortDir = col === "name" || col === "caliber" ? 1 : -1;
      document.getElementById("sort-dir").textContent = sortDir === -1 ? "DESC" : "ASC";
    }
    renderTable();
  });
});

document.getElementById("ammo-search").addEventListener("input", renderTable);
document.getElementById("caliber-filter").addEventListener("change", renderTable);
document.getElementById("sort-field").addEventListener("change", function() {
  sortField = this.value;
  renderTable();
});

// Tarkov Time - runs at 7x real-time, based on Moscow (UTC+3)
function getTarkovTime(left) {
  var now = Date.now();
  var moscowOffset = 3 * 3600 * 1000;
  var utcMs = now + (new Date().getTimezoneOffset() * 60 * 1000);
  var tarkovMs = (utcMs * 7 + moscowOffset) % (24 * 3600 * 1000);
  if (!left) tarkovMs = (tarkovMs + 12 * 3600 * 1000) % (24 * 3600 * 1000);
  var totalSec = Math.floor(tarkovMs / 1000);
  var h = Math.floor(totalSec / 3600);
  var m = Math.floor((totalSec % 3600) / 60);
  var s = totalSec % 60;
  return { h: h, m: m, s: s, hours: h + m / 60 + s / 3600, ms: tarkovMs };
}

function pad2(n) { return n < 10 ? "0" + n : "" + n; }

function getDaylightLabel(hours) {
  if (hours >= 5 && hours < 6) return "Dawn";
  if (hours >= 6 && hours < 20) return "Daytime";
  if (hours >= 20 && hours < 21) return "Dusk";
  return "Nighttime";
}

function updateTarkovClock() {
  var left = getTarkovTime(true);
  var right = getTarkovTime(false);
  var leftEl = document.getElementById("tarkov-left");
  var rightEl = document.getElementById("tarkov-right");
  if (leftEl) leftEl.textContent = pad2(left.h) + ":" + pad2(left.m) + ":" + pad2(left.s);
  if (rightEl) rightEl.textContent = pad2(right.h) + ":" + pad2(right.m) + ":" + pad2(right.s);

  // Update daylight bar markers
  var markerLeft = document.getElementById("daylight-marker-left");
  var markerRight = document.getElementById("daylight-marker-right");
  if (markerLeft) markerLeft.style.left = (left.hours / 24 * 100) + "%";
  if (markerRight) markerRight.style.left = (right.hours / 24 * 100) + "%";

  // Update status text
  var statusEl = document.getElementById("daylight-status");
  if (statusEl) {
    var leftLabel = getDaylightLabel(left.hours);
    var rightLabel = getDaylightLabel(right.hours);
    statusEl.textContent = "Left: " + leftLabel + "  //  Right: " + rightLabel;
  }
}

updateTarkovClock();
setInterval(updateTarkovClock, 1000);

// Section navigation
function showSection(id) {
  document.querySelectorAll("section").forEach(function(s) { s.classList.remove("active"); });
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav a").forEach(function(a) { a.classList.remove("active"); });
  document.querySelector('nav a[href="#' + id + '"]').classList.add("active");
}

// Handle hash navigation
if (location.hash === "#ammo") showSection("ammo");

renderTable();
