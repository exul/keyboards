function board_key_cutouts_extrude_1_outline_fn(){
    return new CSG.Path2D([[-15.8660073,43.398961],[-12.0573038,-11.0680362]]).appendArc([-9.9226627,-12.9236514],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.9090061,-6.8517895]).appendArc([78.9710423,-9.398193],{"radius":2,"clockwise":true,"large":false}).appendPoint([72.268025,-32.7743649]).appendArc([73.4108099,-35.1673809],{"radius":2,"clockwise":false,"large":false}).appendPoint([113.5410107,-52.1573132]).appendArc([116.203514,-50.9902544],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.0830677,-6.6768176]).appendArc([132.2003026,-6.0021359],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.2003026,52.8503377]).appendArc([130.2003026,54.8503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.4537973,54.8503377]).appendArc([84.4543507,56.8032919],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.4462545,57.1473835]).appendArc([82.4468079,59.1003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([68.3537973,59.1003377]).appendArc([66.3543507,61.0532919],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.3462545,61.3973835]).appendArc([64.3468079,63.3503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.6537973,63.3503377]).appendArc([40.6543507,61.3973835],{"radius":2,"clockwise":false,"large":false}).appendPoint([40.6462545,61.0532919]).appendArc([38.6468079,59.1003377],{"radius":2,"clockwise":true,"large":false}).appendPoint([24.1896793,59.1003377]).appendArc([22.2413521,57.5520249],{"radius":2,"clockwise":false,"large":false}).appendPoint([20.3404529,49.3526035]).appendArc([18.5316387,47.8091626],{"radius":2,"clockwise":true,"large":false}).appendPoint([-14.0103922,45.5336021]).appendArc([-15.8660073,43.398961],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[11.0350297,27.8375758],[21.3099394,28.5560675]]).appendArc([23.1655545,30.6907086],{"radius":2,"clockwise":false,"large":false}).appendPoint([22.4400872,41.0653747]).appendArc([20.3054461,42.9209898],{"radius":2,"clockwise":false,"large":false}).appendPoint([10.0305364,42.2024981]).appendArc([8.1749213,40.067857],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.9003886,29.6931909]).appendArc([11.0350297,27.8375758],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[-7.0208796,26.5749836],[3.2540301,27.2934753]]).appendArc([5.1096452,29.4281164],{"radius":2,"clockwise":false,"large":false}).appendPoint([4.3841779,39.8027825]).appendArc([2.2495368,41.6583976],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.0253729,40.9399059]).appendArc([-9.880988,38.8052648],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.1555207,28.4305987]).appendArc([-7.0208796,26.5749836],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-5.8280439,9.5166383],[4.4468658,10.23513]]).appendArc([6.3024809,12.3697711],{"radius":2,"clockwise":false,"large":false}).appendPoint([5.5770136,22.7444372]).appendArc([3.4423725,24.6000523],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.8325372,23.8815606]).appendArc([-8.6881523,21.7469195],{"radius":2,"clockwise":false,"large":false}).appendPoint([-7.962685,11.3722534]).appendArc([-5.8280439,9.5166383],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-4.6352082,-7.541707],[5.6397015,-6.8232153]]).appendArc([7.4953166,-4.6885742],{"radius":2,"clockwise":false,"large":false}).appendPoint([6.7698493,5.6860919]).appendArc([4.6352082,7.541707],{"radius":2,"clockwise":false,"large":false}).appendPoint([-5.6397015,6.8232153]).appendArc([-7.4953166,4.6885742],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.7698493,-5.6860919]).appendArc([-4.6352082,-7.541707],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12.2278654,10.7792305],[22.5027751,11.4977222]]).appendArc([24.3583902,13.6323633],{"radius":2,"clockwise":false,"large":false}).appendPoint([23.6329229,24.0070294]).appendArc([21.4982818,25.8626445],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.2233721,25.1441528]).appendArc([9.367757,23.0095117],{"radius":2,"clockwise":false,"large":false}).appendPoint([10.0932243,12.6348456]).appendArc([12.2278654,10.7792305],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13.4207011,-6.2791148],[23.6956108,-5.5606231]]).appendArc([25.5512259,-3.425982],{"radius":2,"clockwise":false,"large":false}).appendPoint([24.8257586,6.9486841]).appendArc([22.6911175,8.8042992],{"radius":2,"clockwise":false,"large":false}).appendPoint([12.4162078,8.0858075]).appendArc([10.5605927,5.9511664],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.28606,-4.4234997]).appendArc([13.4207011,-6.2791148],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[84.5503026,35.4503377],[94.8503026,35.4503377]]).appendArc([96.8503026,37.4503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([96.8503026,47.8503377]).appendArc([94.8503026,49.8503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([84.5503026,49.8503377]).appendArc([82.5503026,47.8503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.5503026,37.4503377]).appendArc([84.5503026,35.4503377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[66.4503026,39.7003377],[76.7503026,39.7003377]]).appendArc([78.7503026,41.7003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([78.7503026,52.1003377]).appendArc([76.7503026,54.1003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([66.4503026,54.1003377]).appendArc([64.4503026,52.1003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.4503026,41.7003377]).appendArc([66.4503026,39.7003377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[48.3503026,43.9503377],[58.6503026,43.9503377]]).appendArc([60.6503026,45.9503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([60.6503026,56.3503377]).appendArc([58.6503026,58.3503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([48.3503026,58.3503377]).appendArc([46.3503026,56.3503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.3503026,45.9503377]).appendArc([48.3503026,43.9503377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[30.2503026,39.7003377],[40.5503026,39.7003377]]).appendArc([42.5503026,41.7003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.5503026,52.1003377]).appendArc([40.5503026,54.1003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.2503026,54.1003377]).appendArc([28.2503026,52.1003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.2503026,41.7003377]).appendArc([30.2503026,39.7003377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[84.5503026,18.3503377],[94.8503026,18.3503377]]).appendArc([96.8503026,20.3503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([96.8503026,30.7503377]).appendArc([94.8503026,32.7503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([84.5503026,32.7503377]).appendArc([82.5503026,30.7503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.5503026,20.3503377]).appendArc([84.5503026,18.3503377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[84.5503026,1.2503377],[94.8503026,1.2503377]]).appendArc([96.8503026,3.2503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([96.8503026,13.6503377]).appendArc([94.8503026,15.6503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([84.5503026,15.6503377]).appendArc([82.5503026,13.6503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.5503026,3.2503377]).appendArc([84.5503026,1.2503377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[66.4503026,22.6003377],[76.7503026,22.6003377]]).appendArc([78.7503026,24.6003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([78.7503026,35.0003377]).appendArc([76.7503026,37.0003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([66.4503026,37.0003377]).appendArc([64.4503026,35.0003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.4503026,24.6003377]).appendArc([66.4503026,22.6003377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[66.4503026,5.5003377],[76.7503026,5.5003377]]).appendArc([78.7503026,7.5003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([78.7503026,17.9003377]).appendArc([76.7503026,19.9003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([66.4503026,19.9003377]).appendArc([64.4503026,17.9003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.4503026,7.5003377]).appendArc([66.4503026,5.5003377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[48.3503026,26.8503377],[58.6503026,26.8503377]]).appendArc([60.6503026,28.8503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([60.6503026,39.2503377]).appendArc([58.6503026,41.2503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([48.3503026,41.2503377]).appendArc([46.3503026,39.2503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.3503026,28.8503377]).appendArc([48.3503026,26.8503377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[48.3503026,9.7503377],[58.6503026,9.7503377]]).appendArc([60.6503026,11.7503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([60.6503026,22.1503377]).appendArc([58.6503026,24.1503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([48.3503026,24.1503377]).appendArc([46.3503026,22.1503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.3503026,11.7503377]).appendArc([48.3503026,9.7503377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[30.2503026,22.6003377],[40.5503026,22.6003377]]).appendArc([42.5503026,24.6003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.5503026,35.0003377]).appendArc([40.5503026,37.0003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.2503026,37.0003377]).appendArc([28.2503026,35.0003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.2503026,24.6003377]).appendArc([30.2503026,22.6003377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[30.2503026,5.5003377],[40.5503026,5.5003377]]).appendArc([42.5503026,7.5003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.5503026,17.9003377]).appendArc([40.5503026,19.9003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.2503026,19.9003377]).appendArc([28.2503026,17.9003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.2503026,7.5003377]).appendArc([30.2503026,5.5003377],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[110.645236,-39.2470876],[114.1680435,-29.5682535]]).appendArc([112.9726985,-27.004828],{"radius":2,"clockwise":false,"large":false}).appendPoint([103.1998952,-23.4478186]).appendArc([100.6364697,-24.6431636],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.1136623,-34.3219977]).appendArc([98.3090073,-36.8854232],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.0818106,-40.4424326]).appendArc([110.6452361,-39.2470876],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[94.1664131,-33.3557043],[97.6892206,-23.6768702]]).appendArc([96.4938756,-21.1134447],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.7210723,-17.5564353]).appendArc([84.1576468,-18.7517803],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.6348394,-28.4306144]).appendArc([81.8301844,-30.9940399],{"radius":2,"clockwise":false,"large":false}).appendPoint([91.6029877,-34.5510493]).appendArc([94.1664132,-33.3557043],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function top_case_fn() {
                    

                // creating part 0 of case top
                let top__part_0 = board_key_cutouts_extrude_1_outline_fn();

                // make sure that rotations are relative
                let top__part_0_bounds = top__part_0.getBounds();
                let top__part_0_x = top__part_0_bounds[0].x + (top__part_0_bounds[1].x - top__part_0_bounds[0].x) / 2
                let top__part_0_y = top__part_0_bounds[0].y + (top__part_0_bounds[1].y - top__part_0_bounds[0].y) / 2
                top__part_0 = translate([-top__part_0_x, -top__part_0_y, 0], top__part_0);
                top__part_0 = rotate([0,0,0], top__part_0);
                top__part_0 = translate([top__part_0_x, top__part_0_y, 0], top__part_0);

                top__part_0 = translate([0,0,0], top__part_0);
                let result = top__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_case_fn();
            }

        