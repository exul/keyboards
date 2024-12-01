function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[-15.8660073,43.398961],[-12.0573038,-11.0680362]]).appendArc([-9.9226627,-12.9236514],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.9090061,-6.8517895]).appendArc([78.9710423,-9.398193],{"radius":2,"clockwise":true,"large":false}).appendPoint([72.268025,-32.7743649]).appendArc([73.4108099,-35.1673809],{"radius":2,"clockwise":false,"large":false}).appendPoint([113.5410107,-52.1573132]).appendArc([116.203514,-50.9902544],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.0830677,-6.6768176]).appendArc([132.2003026,-6.0021359],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.2003026,52.8503377]).appendArc([130.2003026,54.8503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.4537973,54.8503377]).appendArc([84.4543507,56.8032919],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.4462545,57.1473835]).appendArc([82.4468079,59.1003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([68.3537973,59.1003377]).appendArc([66.3543507,61.0532919],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.3462545,61.3973835]).appendArc([64.3468079,63.3503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.6537973,63.3503377]).appendArc([40.6543507,61.3973835],{"radius":2,"clockwise":false,"large":false}).appendPoint([40.6462545,61.0532919]).appendArc([38.6468079,59.1003377],{"radius":2,"clockwise":true,"large":false}).appendPoint([24.1896793,59.1003377]).appendArc([22.2413521,57.5520249],{"radius":2,"clockwise":false,"large":false}).appendPoint([20.3404529,49.3526035]).appendArc([18.5316387,47.8091626],{"radius":2,"clockwise":true,"large":false}).appendPoint([-14.0103922,45.5336021]).appendArc([-15.8660073,43.398961],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        