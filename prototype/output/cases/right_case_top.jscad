function _case_outer_outline_left_extrude_2_outline_fn(){
    return new CSG.Path2D([[-19.150799,49.1588564],[-14.7945071,-13.1390187]]).appendArc([-10.9521531,-16.479126],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([84.7915865,-9.7840715]).appendPoint([78.5138001,-34.8279001]).appendArc([80.5642428,-39.0020287],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([120.3097194,-56.3701421]).appendArc([124.6261143,-55.2381633],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([144.0705543,-29.4397253]).appendArc([144.7961505,-27.2722836],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([144.7961505,55.9353918]).appendArc([141.1961505,59.5353918],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([90.6461505,59.5353918]).appendPoint([90.6461505,65.5103918]).appendArc([87.0461505,69.1103918],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([28.9815477,69.1103918]).appendArc([25.5001878,66.4269795],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([22.6739183,55.6923164]).appendPoint([-15.8106917,53.0012103]).appendArc([-19.150799,49.1588563],{"radius":3.6,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _case_walls_left_extrude_4_5_outline_fn(){
    return new CSG.Path2D([[-19.150799,49.1588564],[-14.7945071,-13.1390187]]).appendArc([-10.9521531,-16.479126],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([84.7915865,-9.7840715]).appendPoint([78.5138001,-34.8279001]).appendArc([80.5642428,-39.0020287],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([120.3097194,-56.3701421]).appendArc([124.6261143,-55.2381633],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([144.0705543,-29.4397253]).appendArc([144.7961505,-27.2722836],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([144.7961505,55.9353918]).appendArc([141.1961505,59.5353918],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([90.6461505,59.5353918]).appendPoint([90.6461505,65.5103918]).appendArc([87.0461505,69.1103918],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([28.9815477,69.1103918]).appendArc([25.5001878,66.4269795],{"radius":3.6,"clockwise":false,"large":false}).appendPoint([22.6739183,55.6923164]).appendPoint([-15.8106917,53.0012103]).appendArc([-19.150799,49.1588563],{"radius":3.6,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-18.1532349,49.2286129],[-13.7969431,-13.0692622]]).appendArc([-11.0219096,-15.4815619],{"radius":2.6,"clockwise":false,"large":false}).appendPoint([86.0966869,-8.690368]).appendPoint([79.483789,-35.0710492]).appendArc([80.9646643,-38.0856976],{"radius":2.6,"clockwise":false,"large":false}).appendPoint([120.7101409,-55.4538111]).appendArc([123.8273797,-54.6364798],{"radius":2.6,"clockwise":false,"large":false}).appendPoint([143.2724511,-28.8372041]).appendArc([143.7961505,-27.2722836],{"radius":2.6,"clockwise":false,"large":false}).appendPoint([143.7961505,55.9353918]).appendArc([141.1961505,58.5353918],{"radius":2.6,"clockwise":false,"large":false}).appendPoint([89.6461505,58.5353918]).appendPoint([89.6461505,65.5103918]).appendArc([87.0461505,68.1103918],{"radius":2.6,"clockwise":false,"large":false}).appendPoint([28.9815477,68.1103918]).appendArc([26.4672322,66.1723718],{"radius":2.6,"clockwise":false,"large":false}).appendPoint([23.4585146,54.7447388]).appendPoint([-15.7409352,52.0036462]).appendArc([-18.1532349,49.2286128],{"radius":2.6,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 4.5] });
}


function _keys_extrude_2_outline_fn(){
    return new CSG.Path2D([[108.0590335,-41.1451387],[117.7210695,-45.8576285]]).appendArc([120.3953999,-44.9367827],{"radius":2,"clockwise":false,"large":false}).appendPoint([125.1078897,-35.2747467]).appendArc([124.1870439,-32.6004163],{"radius":2,"clockwise":false,"large":false}).appendPoint([114.5250079,-27.8879265]).appendArc([111.8506775,-28.8087723],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.1381877,-38.4708083]).appendArc([108.0590335,-41.1451387],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[172.2712315,-45.8576285],[181.9332675,-41.1451387]]).appendArc([182.8541133,-38.4708083],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.1416235,-28.8087723]).appendArc([175.4672931,-27.8879265],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.8052571,-32.6004163]).appendArc([164.8844113,-35.2747467],{"radius":2,"clockwise":false,"large":false}).appendPoint([169.5969011,-44.9367827]).appendArc([172.2712315,-45.8576285],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.4461504,41.2728918],[257.1961504,41.2728918]]).appendArc([259.1961504,43.2728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([259.1961504,54.0228918]).appendArc([257.1961504,56.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.4461504,56.0228918]).appendArc([244.4461504,54.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([244.4461504,43.2728918]).appendArc([246.4461504,41.2728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.4461504,22.1228918],[257.1961504,22.1228918]]).appendArc([259.1961504,24.1228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([259.1961504,34.8728918]).appendArc([257.1961504,36.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.4461504,36.8728918]).appendArc([244.4461504,34.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([244.4461504,24.1228918]).appendArc([246.4461504,22.1228918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.4461504,2.9728918],[257.1961504,2.9728918]]).appendArc([259.1961504,4.9728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([259.1961504,15.7228918]).appendArc([257.1961504,17.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.4461504,17.7228918]).appendArc([244.4461504,15.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([244.4461504,4.9728918]).appendArc([246.4461504,2.9728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[187.4961505,36.4853918],[198.2461505,36.4853918]]).appendArc([200.2461505,38.4853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([200.2461505,49.2353918]).appendArc([198.2461505,51.2353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.4961505,51.2353918]).appendArc([185.4961505,49.2353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.4961505,38.4853918]).appendArc([187.4961505,36.4853918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[187.4961505,17.3353918],[198.2461505,17.3353918]]).appendArc([200.2461505,19.3353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([200.2461505,30.0853918]).appendArc([198.2461505,32.0853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.4961505,32.0853918]).appendArc([185.4961505,30.0853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.4961505,19.3353918]).appendArc([187.4961505,17.3353918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[187.4961505,-1.8146082],[198.2461505,-1.8146082]]).appendArc([200.2461505,0.1853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([200.2461505,10.9353918]).appendArc([198.2461505,12.9353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.4961505,12.9353918]).appendArc([185.4961505,10.9353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.4961505,0.1853918]).appendArc([187.4961505,-1.8146082],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[206.6461504,41.2728918],[217.3961504,41.2728918]]).appendArc([219.3961504,43.2728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.3961504,54.0228918]).appendArc([217.3961504,56.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.6461504,56.0228918]).appendArc([204.6461504,54.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.6461504,43.2728918]).appendArc([206.6461504,41.2728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[206.6461504,22.1228918],[217.3961504,22.1228918]]).appendArc([219.3961504,24.1228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.3961504,34.8728918]).appendArc([217.3961504,36.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.6461504,36.8728918]).appendArc([204.6461504,34.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.6461504,24.1228918]).appendArc([206.6461504,22.1228918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[206.6461504,2.9728918],[217.3961504,2.9728918]]).appendArc([219.3961504,4.9728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.3961504,15.7228918]).appendArc([217.3961504,17.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.6461504,17.7228918]).appendArc([204.6461504,15.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.6461504,4.9728918]).appendArc([206.6461504,2.9728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[227.2961504,46.0603918],[238.0461504,46.0603918]]).appendArc([240.0461504,48.0603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([240.0461504,58.8103918]).appendArc([238.0461504,60.8103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.2961504,60.8103918]).appendArc([225.2961504,58.8103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([225.2961504,48.0603918]).appendArc([227.2961504,46.0603918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[227.2961504,26.9103918],[238.0461504,26.9103918]]).appendArc([240.0461504,28.9103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([240.0461504,39.6603918]).appendArc([238.0461504,41.6603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.2961504,41.6603918]).appendArc([225.2961504,39.6603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([225.2961504,28.9103918]).appendArc([227.2961504,26.9103918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[91.7461505,36.4853918],[102.4961505,36.4853918]]).appendArc([104.4961505,38.4853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.4961505,49.2353918]).appendArc([102.4961505,51.2353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([91.7461505,51.2353918]).appendArc([89.7461505,49.2353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([89.7461505,38.4853918]).appendArc([91.7461505,36.4853918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[91.7461505,17.3353918],[102.4961505,17.3353918]]).appendArc([104.4961505,19.3353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.4961505,30.0853918]).appendArc([102.4961505,32.0853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([91.7461505,32.0853918]).appendArc([89.7461505,30.0853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([89.7461505,19.3353918]).appendArc([91.7461505,17.3353918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[91.7461505,-1.8146082],[102.4961505,-1.8146082]]).appendArc([104.4961505,0.1853918],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.4961505,10.9353918]).appendArc([102.4961505,12.9353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([91.7461505,12.9353918]).appendArc([89.7461505,10.9353918],{"radius":2,"clockwise":false,"large":false}).appendPoint([89.7461505,0.1853918]).appendArc([91.7461505,-1.8146082],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[72.5961506,41.2728918],[83.3461506,41.2728918]]).appendArc([85.3461506,43.2728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.3461506,54.0228918]).appendArc([83.3461506,56.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.5961506,56.0228918]).appendArc([70.5961506,54.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.5961506,43.2728918]).appendArc([72.5961506,41.2728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[72.5961506,22.1228918],[83.3461506,22.1228918]]).appendArc([85.3461506,24.1228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.3461506,34.8728918]).appendArc([83.3461506,36.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.5961506,36.8728918]).appendArc([70.5961506,34.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.5961506,24.1228918]).appendArc([72.5961506,22.1228918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[72.5961506,2.9728918],[83.3461506,2.9728918]]).appendArc([85.3461506,4.9728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.3461506,15.7228918]).appendArc([83.3461506,17.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.5961506,17.7228918]).appendArc([70.5961506,15.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.5961506,4.9728918]).appendArc([72.5961506,2.9728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51.9461506,46.0603918],[62.6961506,46.0603918]]).appendArc([64.6961506,48.0603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.6961506,58.8103918]).appendArc([62.6961506,60.8103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.9461506,60.8103918]).appendArc([49.9461506,58.8103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.9461506,48.0603918]).appendArc([51.9461506,46.0603918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51.9461506,26.9103918],[62.6961506,26.9103918]]).appendArc([64.6961506,28.9103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.6961506,39.6603918]).appendArc([62.6961506,41.6603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.9461506,41.6603918]).appendArc([49.9461506,39.6603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.9461506,28.9103918]).appendArc([51.9461506,26.9103918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32.7961506,41.2728918],[43.5461506,41.2728918]]).appendArc([45.5461506,43.2728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.5461506,54.0228918]).appendArc([43.5461506,56.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([32.7961506,56.0228918]).appendArc([30.7961506,54.0228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.7961506,43.2728918]).appendArc([32.7961506,41.2728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32.7961506,22.1228918],[43.5461506,22.1228918]]).appendArc([45.5461506,24.1228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.5461506,34.8728918]).appendArc([43.5461506,36.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([32.7961506,36.8728918]).appendArc([30.7961506,34.8728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.7961506,24.1228918]).appendArc([32.7961506,22.1228918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32.7961506,2.9728918],[43.5461506,2.9728918]]).appendArc([45.5461506,4.9728918],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.5461506,15.7228918]).appendArc([43.5461506,17.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([32.7961506,17.7228918]).appendArc([30.7961506,15.7228918],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.7961506,4.9728918]).appendArc([32.7961506,2.9728918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[227.2961504,7.7603918],[238.0461504,7.7603918]]).appendArc([240.0461504,9.7603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([240.0461504,20.5103918]).appendArc([238.0461504,22.5103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.2961504,22.5103918]).appendArc([225.2961504,20.5103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([225.2961504,9.7603918]).appendArc([227.2961504,7.7603918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51.9461506,7.7603918],[62.6961506,7.7603918]]).appendArc([64.6961506,9.7603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.6961506,20.5103918]).appendArc([62.6961506,22.5103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.9461506,22.5103918]).appendArc([49.9461506,20.5103918],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.9461506,9.7603918]).appendArc([51.9461506,7.7603918],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[89.9621954,-33.5681509],[100.0638911,-37.2448674]]).appendArc([102.6273166,-36.0495224],{"radius":2,"clockwise":false,"large":false}).appendPoint([106.304033,-25.9478267]).appendArc([105.108688,-23.3844012],{"radius":2,"clockwise":false,"large":false}).appendPoint([95.0069923,-19.7076848]).appendArc([92.4435668,-20.9030298],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.7668504,-31.0047255]).appendArc([89.9621954,-33.568151],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[189.9284099,-37.2448674],[200.0301056,-33.5681509]]).appendArc([201.2254507,-31.0047255],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.5487341,-20.9030298]).appendArc([194.9853087,-19.7076847],{"radius":2,"clockwise":false,"large":false}).appendPoint([184.883613,-23.3844013]).appendArc([183.6882679,-25.9478267],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.3649845,-36.0495224]).appendArc([189.9284099,-37.2448675],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.1159402,-6.9820938],[294.8397538,-7.7319759]]).appendArc([296.9743949,-5.8763609],{"radius":2,"clockwise":false,"large":false}).appendPoint([297.7242769,4.8474528]).appendArc([295.8686619,6.9820939],{"radius":2,"clockwise":false,"large":false}).appendPoint([285.1448482,7.7319759]).appendArc([283.0102071,5.8763609],{"radius":2,"clockwise":false,"large":false}).appendPoint([282.2603251,-4.8474528]).appendArc([284.1159401,-6.9820939],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[285.4517767,12.1212578],[296.1755903,11.3713757]]).appendArc([298.3102314,13.2269907],{"radius":2,"clockwise":false,"large":false}).appendPoint([299.0601134,23.9508044]).appendArc([297.2044984,26.0854455],{"radius":2,"clockwise":false,"large":false}).appendPoint([286.4806847,26.8353275]).appendArc([284.3460436,24.9797125],{"radius":2,"clockwise":false,"large":false}).appendPoint([283.5961616,14.2558988]).appendArc([285.4517766,12.1212577],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[267.6842616,32.5604459],[278.4080752,31.8105638]]).appendArc([280.5427163,33.6661788],{"radius":2,"clockwise":false,"large":false}).appendPoint([281.2925983,44.3899925]).appendArc([279.4369833,46.5246336],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.7131696,47.2745156]).appendArc([266.5785285,45.4189006],{"radius":2,"clockwise":false,"large":false}).appendPoint([265.8286465,34.6950869]).appendArc([267.6842615,32.5604458],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.0125886,-5.6462573],[275.7364022,-6.3961394]]).appendArc([277.8710433,-4.5405244],{"radius":2,"clockwise":false,"large":false}).appendPoint([278.6209253,6.1832893]).appendArc([276.7653103,8.3179304],{"radius":2,"clockwise":false,"large":false}).appendPoint([266.0414966,9.0678124]).appendArc([263.9068555,7.2121974],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.1569735,-3.5116163]).appendArc([265.0125885,-5.6462574],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[11.5842258,31.8105638],[22.3080394,32.5604459]]).appendArc([24.1636546,34.6950869],{"radius":2,"clockwise":false,"large":false}).appendPoint([23.4137724,45.4189005]).appendArc([21.2791314,47.2745157],{"radius":2,"clockwise":false,"large":false}).appendPoint([10.5553178,46.5246335]).appendArc([8.6997026,44.3899925],{"radius":2,"clockwise":false,"large":false}).appendPoint([9.4495848,33.6661789]).appendArc([11.5842258,31.8105637],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[14.2558988,-6.3961394],[24.9797124,-5.6462573]]).appendArc([26.8353276,-3.5116163],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.0854454,7.2121973]).appendArc([23.9508044,9.0678125],{"radius":2,"clockwise":false,"large":false}).appendPoint([13.2269908,8.3179303]).appendArc([11.3713756,6.1832893],{"radius":2,"clockwise":false,"large":false}).appendPoint([12.1212578,-4.5405243]).appendArc([14.2558988,-6.3961395],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5191258,30.4747273],[3.2046878,31.2246094]]).appendArc([5.060303,33.3592504],{"radius":2,"clockwise":false,"large":false}).appendPoint([4.3104208,44.083064]).appendArc([2.1757798,45.9386792],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.5480338,45.188797]).appendArc([-10.403649,43.054156],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.6537668,32.3303424]).appendArc([-7.5191258,30.4747272],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.1832893,11.3713757],[4.5405243,12.1212578]]).appendArc([6.3961395,14.2558988],{"radius":2,"clockwise":false,"large":false}).appendPoint([5.6462573,24.9797124]).appendArc([3.5116163,26.8353276],{"radius":2,"clockwise":false,"large":false}).appendPoint([-7.2121973,26.0854454]).appendArc([-9.0678125,23.9508044],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.3179303,13.2269908]).appendArc([-6.1832893,11.3713756],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-4.8474528,-7.7319759],[5.8763608,-6.9820938]]).appendArc([7.731976,-4.8474528],{"radius":2,"clockwise":false,"large":false}).appendPoint([6.9820938,5.8763608]).appendArc([4.8474528,7.731976],{"radius":2,"clockwise":false,"large":false}).appendPoint([-5.8763608,6.9820938]).appendArc([-7.731976,4.8474528],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.9820938,-5.8763608]).appendArc([-4.8474528,-7.731976],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12.9200623,12.7072122],[23.6438759,13.4570943]]).appendArc([25.4994911,15.5917353],{"radius":2,"clockwise":false,"large":false}).appendPoint([24.7496089,26.3155489]).appendArc([22.6149679,28.1711641],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.8911543,27.4212819]).appendArc([10.0355391,25.2866409],{"radius":2,"clockwise":false,"large":false}).appendPoint([10.7854213,14.5628273]).appendArc([12.9200623,12.7072121],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[266.3484251,13.4570943],[277.0722387,12.7072122]]).appendArc([279.2068798,14.5628272],{"radius":2,"clockwise":false,"large":false}).appendPoint([279.9567618,25.2866409]).appendArc([278.1011468,27.421282],{"radius":2,"clockwise":false,"large":false}).appendPoint([267.3773331,28.171164]).appendArc([265.242692,26.315549],{"radius":2,"clockwise":false,"large":false}).appendPoint([264.49281,15.5917353]).appendArc([266.348425,13.4570942],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[286.7876132,31.2246094],[297.5114268,30.4747273]]).appendArc([299.6460679,32.3303423],{"radius":2,"clockwise":false,"large":false}).appendPoint([300.3959499,43.054156]).appendArc([298.5403349,45.1887971],{"radius":2,"clockwise":false,"large":false}).appendPoint([287.8165212,45.9386791]).appendArc([285.6818801,44.0830641],{"radius":2,"clockwise":false,"large":false}).appendPoint([284.9319981,33.3592504]).appendArc([286.7876131,31.2246093],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 2] });
}


function _case_top_snap_left_extrude_4_outline_fn(){
    return new CSG.Path2D([[-17.3551837,49.2844181],[-12.9988918,-13.013457]]).appendArc([-11.0777148,-14.6835107],{"radius":1.8,"clockwise":false,"large":false}).appendPoint([87.1407673,-7.8154053]).appendPoint([80.2597802,-35.2655684]).appendArc([81.2850015,-37.3526327],{"radius":1.8,"clockwise":false,"large":false}).appendPoint([121.0304781,-54.7207462]).appendArc([123.1886755,-54.1547568],{"radius":1.8,"clockwise":false,"large":false}).appendPoint([142.6335894,-28.3556901]).appendArc([142.9961505,-27.2722836],{"radius":1.8,"clockwise":false,"large":false}).appendPoint([142.9961505,55.9353918]).appendArc([141.1961505,57.7353918],{"radius":1.8,"clockwise":false,"large":false}).appendPoint([88.8461505,57.7353918]).appendPoint([88.8461505,65.5103918]).appendArc([87.0461505,67.3103918],{"radius":1.8,"clockwise":false,"large":false}).appendPoint([28.9815477,67.3103918]).appendArc([27.2408677,65.9686857],{"radius":1.8,"clockwise":false,"large":false}).appendPoint([24.0861916,53.9866768]).appendPoint([-15.68513,51.205595]).appendArc([-17.3551837,49.284418],{"radius":1.8,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-16.5571324,49.3402233],[-12.2008406,-12.9576518]]).appendArc([-11.13352,-13.8854594],{"radius":1,"clockwise":false,"large":false}).appendPoint([88.1848476,-6.9404426]).appendPoint([81.0357713,-35.4600877]).appendArc([81.6053387,-36.6195679],{"radius":1,"clockwise":false,"large":false}).appendPoint([121.3508152,-53.9876813]).appendArc([122.5498138,-53.6732428],{"radius":1,"clockwise":false,"large":false}).appendPoint([141.9945373,-27.8744286]).appendArc([142.1961505,-27.2722836],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.1961505,55.9353918]).appendArc([141.1961505,56.9353918],{"radius":1,"clockwise":false,"large":false}).appendPoint([88.0461505,56.9353918]).appendPoint([88.0461505,65.5103918]).appendArc([87.0461505,66.5103918],{"radius":1,"clockwise":false,"large":false}).appendPoint([28.9815477,66.5103918]).appendArc([28.0145033,65.7649995],{"radius":1,"clockwise":false,"large":false}).appendPoint([24.7138686,53.2286147]).appendPoint([-15.6293248,50.4075437]).appendArc([-16.5571324,49.3402232],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}


function _battery_cutout_left_extrude_1_outline_fn(){
    return new CSG.Path2D([[109.6211505,-25.4396082],[137.6211505,-25.4396082]]).appendArc([139.6211505,-23.4396082],{"radius":2,"clockwise":false,"large":false}).appendPoint([139.6211505,15.5603918]).appendArc([137.6211505,17.5603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([109.6211505,17.5603918]).appendArc([107.6211505,15.5603918],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.6211505,-23.4396082]).appendArc([109.6211505,-25.4396082],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _battery_switch_wall_cutout_right_extrude_2_5_outline_fn(){
    return new CSG.Path2D([[141.0461505,21.4603918],[149.0461505,21.4603918]]).appendPoint([149.0461505,30.4603918]).appendPoint([141.0461505,30.4603918]).appendPoint([141.0461505,21.4603918]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.5] });
}


function _mcu_bottom_cutout_left_extrude_1_outline_fn(){
    return new CSG.Path2D([[107.6961505,29.4353918],[127.1961505,29.4353918]]).appendPoint([127.1961505,56.9353918]).appendPoint([107.6961505,56.9353918]).appendPoint([107.6961505,29.4353918]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _usbc_cutout_left_extrude_4_5_outline_fn(){
    return new CSG.Path2D([[112.9461505,49.9353918],[121.9461505,49.9353918]]).appendPoint([121.9461505,59.5353918]).appendPoint([112.9461505,59.5353918]).appendPoint([112.9461505,49.9353918]).close().innerToCAG()
.extrude({ offset: [0, 0, 4.5] });
}


function _jumper_pads_cutout_extrude_1_outline_fn(){
    return new CSG.Path2D([[131.1961505,35.9353918],[141.1961505,35.9353918]]).appendPoint([141.1961505,56.9353918]).appendPoint([131.1961505,56.9353918]).appendPoint([131.1961505,35.9353918]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function right_case_top_case_fn() {
                    

                // creating part 0 of case right_case_top
                let right_case_top__part_0 = _case_outer_outline_left_extrude_2_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_0_bounds = right_case_top__part_0.getBounds();
                let right_case_top__part_0_x = right_case_top__part_0_bounds[0].x + (right_case_top__part_0_bounds[1].x - right_case_top__part_0_bounds[0].x) / 2
                let right_case_top__part_0_y = right_case_top__part_0_bounds[0].y + (right_case_top__part_0_bounds[1].y - right_case_top__part_0_bounds[0].y) / 2
                right_case_top__part_0 = translate([-right_case_top__part_0_x, -right_case_top__part_0_y, 0], right_case_top__part_0);
                right_case_top__part_0 = rotate([0,0,0], right_case_top__part_0);
                right_case_top__part_0 = translate([right_case_top__part_0_x, right_case_top__part_0_y, 0], right_case_top__part_0);

                right_case_top__part_0 = translate([0,0,0], right_case_top__part_0);
                let result = right_case_top__part_0;
                
            

                // creating part 1 of case right_case_top
                let right_case_top__part_1 = _case_walls_left_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_1_bounds = right_case_top__part_1.getBounds();
                let right_case_top__part_1_x = right_case_top__part_1_bounds[0].x + (right_case_top__part_1_bounds[1].x - right_case_top__part_1_bounds[0].x) / 2
                let right_case_top__part_1_y = right_case_top__part_1_bounds[0].y + (right_case_top__part_1_bounds[1].y - right_case_top__part_1_bounds[0].y) / 2
                right_case_top__part_1 = translate([-right_case_top__part_1_x, -right_case_top__part_1_y, 0], right_case_top__part_1);
                right_case_top__part_1 = rotate([0,0,0], right_case_top__part_1);
                right_case_top__part_1 = translate([right_case_top__part_1_x, right_case_top__part_1_y, 0], right_case_top__part_1);

                right_case_top__part_1 = translate([0,0,0], right_case_top__part_1);
                result = result.union(right_case_top__part_1);
                
            

                // creating part 2 of case right_case_top
                let right_case_top__part_2 = _keys_extrude_2_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_2_bounds = right_case_top__part_2.getBounds();
                let right_case_top__part_2_x = right_case_top__part_2_bounds[0].x + (right_case_top__part_2_bounds[1].x - right_case_top__part_2_bounds[0].x) / 2
                let right_case_top__part_2_y = right_case_top__part_2_bounds[0].y + (right_case_top__part_2_bounds[1].y - right_case_top__part_2_bounds[0].y) / 2
                right_case_top__part_2 = translate([-right_case_top__part_2_x, -right_case_top__part_2_y, 0], right_case_top__part_2);
                right_case_top__part_2 = rotate([0,0,0], right_case_top__part_2);
                right_case_top__part_2 = translate([right_case_top__part_2_x, right_case_top__part_2_y, 0], right_case_top__part_2);

                right_case_top__part_2 = translate([0,0,0], right_case_top__part_2);
                result = result.subtract(right_case_top__part_2);
                
            

                // creating part 3 of case right_case_top
                let right_case_top__part_3 = _case_top_snap_left_extrude_4_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_3_bounds = right_case_top__part_3.getBounds();
                let right_case_top__part_3_x = right_case_top__part_3_bounds[0].x + (right_case_top__part_3_bounds[1].x - right_case_top__part_3_bounds[0].x) / 2
                let right_case_top__part_3_y = right_case_top__part_3_bounds[0].y + (right_case_top__part_3_bounds[1].y - right_case_top__part_3_bounds[0].y) / 2
                right_case_top__part_3 = translate([-right_case_top__part_3_x, -right_case_top__part_3_y, 0], right_case_top__part_3);
                right_case_top__part_3 = rotate([0,0,0], right_case_top__part_3);
                right_case_top__part_3 = translate([right_case_top__part_3_x, right_case_top__part_3_y, 0], right_case_top__part_3);

                right_case_top__part_3 = translate([0,0,0], right_case_top__part_3);
                result = result.union(right_case_top__part_3);
                
            

                // creating part 4 of case right_case_top
                let right_case_top__part_4 = _battery_cutout_left_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_4_bounds = right_case_top__part_4.getBounds();
                let right_case_top__part_4_x = right_case_top__part_4_bounds[0].x + (right_case_top__part_4_bounds[1].x - right_case_top__part_4_bounds[0].x) / 2
                let right_case_top__part_4_y = right_case_top__part_4_bounds[0].y + (right_case_top__part_4_bounds[1].y - right_case_top__part_4_bounds[0].y) / 2
                right_case_top__part_4 = translate([-right_case_top__part_4_x, -right_case_top__part_4_y, 0], right_case_top__part_4);
                right_case_top__part_4 = rotate([0,0,0], right_case_top__part_4);
                right_case_top__part_4 = translate([right_case_top__part_4_x, right_case_top__part_4_y, 0], right_case_top__part_4);

                right_case_top__part_4 = translate([0,0,1], right_case_top__part_4);
                result = result.subtract(right_case_top__part_4);
                
            

                // creating part 5 of case right_case_top
                let right_case_top__part_5 = _battery_switch_wall_cutout_right_extrude_2_5_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_5_bounds = right_case_top__part_5.getBounds();
                let right_case_top__part_5_x = right_case_top__part_5_bounds[0].x + (right_case_top__part_5_bounds[1].x - right_case_top__part_5_bounds[0].x) / 2
                let right_case_top__part_5_y = right_case_top__part_5_bounds[0].y + (right_case_top__part_5_bounds[1].y - right_case_top__part_5_bounds[0].y) / 2
                right_case_top__part_5 = translate([-right_case_top__part_5_x, -right_case_top__part_5_y, 0], right_case_top__part_5);
                right_case_top__part_5 = rotate([0,0,0], right_case_top__part_5);
                right_case_top__part_5 = translate([right_case_top__part_5_x, right_case_top__part_5_y, 0], right_case_top__part_5);

                right_case_top__part_5 = translate([0,0,2], right_case_top__part_5);
                result = result.subtract(right_case_top__part_5);
                
            

                // creating part 6 of case right_case_top
                let right_case_top__part_6 = _mcu_bottom_cutout_left_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_6_bounds = right_case_top__part_6.getBounds();
                let right_case_top__part_6_x = right_case_top__part_6_bounds[0].x + (right_case_top__part_6_bounds[1].x - right_case_top__part_6_bounds[0].x) / 2
                let right_case_top__part_6_y = right_case_top__part_6_bounds[0].y + (right_case_top__part_6_bounds[1].y - right_case_top__part_6_bounds[0].y) / 2
                right_case_top__part_6 = translate([-right_case_top__part_6_x, -right_case_top__part_6_y, 0], right_case_top__part_6);
                right_case_top__part_6 = rotate([0,0,0], right_case_top__part_6);
                right_case_top__part_6 = translate([right_case_top__part_6_x, right_case_top__part_6_y, 0], right_case_top__part_6);

                right_case_top__part_6 = translate([0,0,1], right_case_top__part_6);
                result = result.subtract(right_case_top__part_6);
                
            

                // creating part 7 of case right_case_top
                let right_case_top__part_7 = _usbc_cutout_left_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_7_bounds = right_case_top__part_7.getBounds();
                let right_case_top__part_7_x = right_case_top__part_7_bounds[0].x + (right_case_top__part_7_bounds[1].x - right_case_top__part_7_bounds[0].x) / 2
                let right_case_top__part_7_y = right_case_top__part_7_bounds[0].y + (right_case_top__part_7_bounds[1].y - right_case_top__part_7_bounds[0].y) / 2
                right_case_top__part_7 = translate([-right_case_top__part_7_x, -right_case_top__part_7_y, 0], right_case_top__part_7);
                right_case_top__part_7 = rotate([0,0,0], right_case_top__part_7);
                right_case_top__part_7 = translate([right_case_top__part_7_x, right_case_top__part_7_y, 0], right_case_top__part_7);

                right_case_top__part_7 = translate([0,0,0], right_case_top__part_7);
                result = result.subtract(right_case_top__part_7);
                
            

                // creating part 8 of case right_case_top
                let right_case_top__part_8 = _jumper_pads_cutout_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_case_top__part_8_bounds = right_case_top__part_8.getBounds();
                let right_case_top__part_8_x = right_case_top__part_8_bounds[0].x + (right_case_top__part_8_bounds[1].x - right_case_top__part_8_bounds[0].x) / 2
                let right_case_top__part_8_y = right_case_top__part_8_bounds[0].y + (right_case_top__part_8_bounds[1].y - right_case_top__part_8_bounds[0].y) / 2
                right_case_top__part_8 = translate([-right_case_top__part_8_x, -right_case_top__part_8_y, 0], right_case_top__part_8);
                right_case_top__part_8 = rotate([0,0,0], right_case_top__part_8);
                right_case_top__part_8 = translate([right_case_top__part_8_x, right_case_top__part_8_y, 0], right_case_top__part_8);

                right_case_top__part_8 = translate([0,0,1], right_case_top__part_8);
                result = result.subtract(right_case_top__part_8);
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_case_top_case_fn();
            }

        