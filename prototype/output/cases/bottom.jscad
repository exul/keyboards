function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[-13.7313662,41.5433459],[-10.2016886,-8.9333951]]).appendArc([-8.0670476,-10.7890103],{"radius":2,"clockwise":false,"large":false}).appendPoint([78.7650272,-4.7171201]).appendArc([80.7927484,-7.3715432],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.7755705,-33.1965626]).appendArc([72.9940596,-35.7403937],{"radius":2,"clockwise":false,"large":false}).appendPoint([112.2473708,-49.6900804]).appendArc([114.802571,-48.4725979],{"radius":2,"clockwise":false,"large":false}).appendPoint([130.0857838,-5.2733589]).appendArc([130.2003026,-4.6063053],{"radius":2,"clockwise":false,"large":false}).appendPoint([130.2003026,50.8503377]).appendArc([128.2003026,52.8503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([84.4537973,52.8503377]).appendArc([82.4543507,54.8032919],{"radius":2,"clockwise":true,"large":false}).appendPoint([82.4462545,55.1473835]).appendArc([80.4468079,57.1003377],{"radius":2,"clockwise":false,"large":false}).appendPoint([66.3537973,57.1003377]).appendArc([64.3543507,59.0532919],{"radius":2,"clockwise":true,"large":false}).appendPoint([64.3462545,59.3973835]).appendArc([62.3468079,61.3503377],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.6537973,61.3503377]).appendArc([42.6543507,59.3973835],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.6462545,59.0532919]).appendArc([40.6468079,57.1003377],{"radius":2,"clockwise":true,"large":false}).appendPoint([26.2039406,57.1003377]).appendArc([24.2517529,55.5350365],{"radius":2,"clockwise":false,"large":false}).appendPoint([22.4654726,47.513034]).appendArc([20.6527979,45.9526047],{"radius":2,"clockwise":true,"large":false}).appendPoint([-11.8757511,43.6779869]).appendArc([-13.7313663,41.5433458],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        