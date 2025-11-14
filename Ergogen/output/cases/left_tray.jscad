function _left_standoff_extrude_4_5_outline_fn(){
    return CAG.circle({"center":[183.83741,-123.2934978],"radius":2.5})
.union(
    CAG.circle({"center":[101.8216807,-132.5979887],"radius":2.5})
).union(
    CAG.circle({"center":[116.9998799,-169.0279526],"radius":2.5})
).union(
    CAG.circle({"center":[196.97741,-177.5934978],"radius":2.5})
).union(
    CAG.circle({"center":[141.17741,-138.4934978],"radius":2.5})
).union(
    CAG.circle({"center":[76.1339773,-142.75788],"radius":2.5})
).union(
    CAG.circle({"center":[92.5601743,-181.0941833],"radius":2.5})
).union(
    CAG.circle({"center":[172.917867,-197.2257902],"radius":2.5})
).extrude({ offset: [0, 0, 4.5] });
}


function _left_mounting_extrude_4_5_outline_fn(){
    return CAG.circle({"center":[183.83741,-123.2934978],"radius":1})
.union(
    CAG.circle({"center":[101.8216807,-132.5979887],"radius":1})
).union(
    CAG.circle({"center":[116.9998799,-169.0279526],"radius":1})
).union(
    CAG.circle({"center":[196.97741,-177.5934978],"radius":1})
).union(
    CAG.circle({"center":[141.17741,-138.4934978],"radius":1})
).union(
    CAG.circle({"center":[76.1339773,-142.75788],"radius":1})
).union(
    CAG.circle({"center":[92.5601743,-181.0941833],"radius":1})
).union(
    CAG.circle({"center":[172.917867,-197.2257902],"radius":1})
).extrude({ offset: [0, 0, 4.5] });
}


function _left_battery_mount_extrude_3_outline_fn(){
    return new CSG.Path2D([[150.97741,-180.9934978],[170.97741,-180.9934978]]).appendPoint([170.97741,-179.9934978]).appendPoint([150.97741,-179.9934978]).appendPoint([150.97741,-180.9934978]).close().innerToCAG()
.union(
    new CSG.Path2D([[181.07741,-161.9934978],[182.07741,-161.9934978]]).appendPoint([182.07741,-131.9934978]).appendPoint([181.07741,-131.9934978]).appendPoint([181.07741,-161.9934978]).close().innerToCAG()
).union(
    new CSG.Path2D([[143.67741,-161.9934978],[144.67741,-161.9934978]]).appendPoint([144.67741,-131.9934978]).appendPoint([143.67741,-131.9934978]).appendPoint([143.67741,-161.9934978]).close().innerToCAG()
).extrude({ offset: [0, 0, 3] });
}


function _xl_board_left_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[49.4477454,-148.4828963],[70.5472263,-198.1901582]]).appendArc([73.1696983,-199.2497057],{"radius":2,"clockwise":false,"large":false}).appendPoint([93.9613097,-190.4241903]).appendArc([94.6263873,-189.9643116],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.8256527,-176.1399447]).appendArc([109.3633021,-175.5231519],{"radius":2,"clockwise":true,"large":false}).appendPoint([118.3015007,-175.9307533]).appendArc([120.1094501,-177.3013218],{"radius":2,"clockwise":true,"large":false}).appendPoint([126.6799008,-197.1906524]).appendArc([127.4762725,-198.2318536],{"radius":2,"clockwise":false,"large":false}).appendPoint([145.7773143,-210.3263363]).appendArc([146.0021025,-210.4548033],{"radius":2,"clockwise":false,"large":false}).appendPoint([162.6872471,-218.6059905]).appendArc([162.9140099,-218.7000042],{"radius":2,"clockwise":false,"large":false}).appendPoint([184.5491796,-226.1495906]).appendArc([187.0897917,-224.914207],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.5668857,-180.312009]).appendArc([202.67741,-179.6563553],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.67741,-158.9934978]).appendArc([200.67741,-156.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.87741,-156.9934978]).appendArc([188.87741,-154.9934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.87741,-119.9934978]).appendArc([186.87741,-117.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.0932904,-117.9934978]).appendArc([127.5790746,-117.3000774],{"radius":2,"clockwise":true,"large":false}).appendPoint([122.4937275,-111.4065879]).appendArc([120.8399986,-110.7180395],{"radius":2,"clockwise":false,"large":false}).appendPoint([98.1941407,-112.3015921]).appendArc([96.4550946,-113.6104144],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.8300846,-118.0583993]).appendArc([93.3331435,-119.335348],{"radius":2,"clockwise":true,"large":false}).appendPoint([74.0748117,-123.0787885]).appendArc([72.5240125,-124.5265199],{"radius":2,"clockwise":false,"large":false}).appendPoint([69.1691766,-137.1019892]).appendArc([68.0182216,-138.4274759],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.5072929,-145.8604243]).appendArc([49.4477454,-148.4828962],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function _left_leg_cutouts_extrude_1_outline_fn(){
    return new CSG.Path2D([[110.2165381,-156.6616043],[161.7648099,-134.7806611]]).appendPoint([156.1382817,-121.5253913]).appendPoint([104.5900099,-143.4063345]).appendPoint([110.2165381,-156.6616043]).close().innerToCAG()
.union(
    new CSG.Path2D([[134.4869246,-197.6435673],[189.0516482,-210.2408264]]).appendPoint([192.2909434,-196.2098975]).appendPoint([137.7262198,-183.6126384]).appendPoint([134.4869246,-197.6435673]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
}


function _left_rubber_feet_extrude_0_5_outline_fn(){
    return CAG.circle({"center":[72.3470451,-186.5625768],"radius":3})
.union(
    CAG.circle({"center":[65.7046159,-170.9139943],"radius":3})
).union(
    CAG.circle({"center":[59.0621867,-155.2654118],"radius":3})
).extrude({ offset: [0, 0, 0.5] });
}


function _xl_board_left_extrude_11_9_outline_fn(){
    return new CSG.Path2D([[49.4477454,-148.4828963],[70.5472263,-198.1901582]]).appendArc([73.1696983,-199.2497057],{"radius":2,"clockwise":false,"large":false}).appendPoint([93.9613097,-190.4241903]).appendArc([94.6263873,-189.9643116],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.8256527,-176.1399447]).appendArc([109.3633021,-175.5231519],{"radius":2,"clockwise":true,"large":false}).appendPoint([118.3015007,-175.9307533]).appendArc([120.1094501,-177.3013218],{"radius":2,"clockwise":true,"large":false}).appendPoint([126.6799008,-197.1906524]).appendArc([127.4762725,-198.2318536],{"radius":2,"clockwise":false,"large":false}).appendPoint([145.7773143,-210.3263363]).appendArc([146.0021025,-210.4548033],{"radius":2,"clockwise":false,"large":false}).appendPoint([162.6872471,-218.6059905]).appendArc([162.9140099,-218.7000042],{"radius":2,"clockwise":false,"large":false}).appendPoint([184.5491796,-226.1495906]).appendArc([187.0897917,-224.914207],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.5668857,-180.312009]).appendArc([202.67741,-179.6563553],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.67741,-158.9934978]).appendArc([200.67741,-156.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.87741,-156.9934978]).appendArc([188.87741,-154.9934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.87741,-119.9934978]).appendArc([186.87741,-117.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.0932904,-117.9934978]).appendArc([127.5790746,-117.3000774],{"radius":2,"clockwise":true,"large":false}).appendPoint([122.4937275,-111.4065879]).appendArc([120.8399986,-110.7180395],{"radius":2,"clockwise":false,"large":false}).appendPoint([98.1941407,-112.3015921]).appendArc([96.4550946,-113.6104144],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.8300846,-118.0583993]).appendArc([93.3331435,-119.335348],{"radius":2,"clockwise":true,"large":false}).appendPoint([74.0748117,-123.0787885]).appendArc([72.5240125,-124.5265199],{"radius":2,"clockwise":false,"large":false}).appendPoint([69.1691766,-137.1019892]).appendArc([68.0182216,-138.4274759],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.5072929,-145.8604243]).appendArc([49.4477454,-148.4828962],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 11.9] });
}


function _board_left_extrude_11_9_outline_fn(){
    return new CSG.Path2D([[52.4741469,-146.6550849],[69.9773474,-139.225417]]).appendArc([71.1317469,-137.8868412],{"radius":2,"clockwise":false,"large":false}).appendPoint([74.288485,-125.7240357]).appendArc([75.8427286,-124.2632153],{"radius":2,"clockwise":true,"large":false}).appendPoint([95.0772235,-120.5244082]).appendArc([96.5817459,-119.2263414],{"radius":2,"clockwise":false,"large":false}).appendPoint([98.0644513,-115.0221281]).appendArc([99.8110787,-113.6921876],{"radius":2,"clockwise":true,"large":false}).appendPoint([119.4461947,-112.3191666]).appendArc([121.1021117,-113.0102553],{"radius":2,"clockwise":true,"large":false}).appendPoint([126.078915,-118.7975372]).appendArc([127.595319,-119.4934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.37741,-119.4934978]).appendArc([187.37741,-121.4934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.37741,-156.4934978]).appendArc([189.37741,-158.4934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.17741,-158.4934978]).appendArc([201.17741,-160.4934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([201.17741,-178.1648598]).appendArc([201.0722466,-178.8048554],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.1495508,-222.9865212]).appendArc([183.6035778,-224.2375627],{"radius":2,"clockwise":true,"large":false}).appendPoint([164.8228781,-217.7708492]).appendArc([164.5918805,-217.6747605],{"radius":2,"clockwise":true,"large":false}).appendPoint([147.8742096,-209.4587985]).appendArc([147.6511548,-209.3307507],{"radius":2,"clockwise":true,"large":false}).appendPoint([129.3041983,-197.1663476]).appendArc([128.5152429,-196.1414888],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.6310918,-175.8319454]).appendArc([119.764294,-174.4741742],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.5741257,-174.3074798]).appendArc([106.0923319,-174.9344918],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.6619262,-189.1636618]).appendArc([91.988941,-189.6318705],{"radius":2,"clockwise":true,"large":false}).appendPoint([73.9643588,-197.2828519]).appendArc([71.341887,-196.2233043],{"radius":2,"clockwise":true,"large":false}).appendPoint([51.4145993,-149.2775568]).appendArc([52.4741469,-146.6550849],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 11.9] });
}


function _left_reset_cutout_extrude_2_outline_fn(){
    return new CSG.Path2D([[180.09741,-134.8934978],[190.09741,-134.8934978]]).appendPoint([190.09741,-126.6934978]).appendPoint([180.09741,-126.6934978]).appendPoint([180.09741,-134.8934978]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _left_power_cutout_extrude_2_outline_fn(){
    return new CSG.Path2D([[179.55741,-151.9934978],[189.55741,-151.9934978]]).appendPoint([189.55741,-141.9934978]).appendPoint([179.55741,-141.9934978]).appendPoint([179.55741,-151.9934978]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function _left_standoffs_case_fn() {
                    

                // creating part 0 of case _left_standoffs
                let _left_standoffs__part_0 = _left_standoff_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let _left_standoffs__part_0_bounds = _left_standoffs__part_0.getBounds();
                let _left_standoffs__part_0_x = _left_standoffs__part_0_bounds[0].x + (_left_standoffs__part_0_bounds[1].x - _left_standoffs__part_0_bounds[0].x) / 2
                let _left_standoffs__part_0_y = _left_standoffs__part_0_bounds[0].y + (_left_standoffs__part_0_bounds[1].y - _left_standoffs__part_0_bounds[0].y) / 2
                _left_standoffs__part_0 = translate([-_left_standoffs__part_0_x, -_left_standoffs__part_0_y, 0], _left_standoffs__part_0);
                _left_standoffs__part_0 = rotate([0,0,0], _left_standoffs__part_0);
                _left_standoffs__part_0 = translate([_left_standoffs__part_0_x, _left_standoffs__part_0_y, 0], _left_standoffs__part_0);

                _left_standoffs__part_0 = translate([0,0,0], _left_standoffs__part_0);
                let result = _left_standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _left_holes_case_fn() {
                    

                // creating part 0 of case _left_holes
                let _left_holes__part_0 = _left_mounting_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let _left_holes__part_0_bounds = _left_holes__part_0.getBounds();
                let _left_holes__part_0_x = _left_holes__part_0_bounds[0].x + (_left_holes__part_0_bounds[1].x - _left_holes__part_0_bounds[0].x) / 2
                let _left_holes__part_0_y = _left_holes__part_0_bounds[0].y + (_left_holes__part_0_bounds[1].y - _left_holes__part_0_bounds[0].y) / 2
                _left_holes__part_0 = translate([-_left_holes__part_0_x, -_left_holes__part_0_y, 0], _left_holes__part_0);
                _left_holes__part_0 = rotate([0,0,0], _left_holes__part_0);
                _left_holes__part_0 = translate([_left_holes__part_0_x, _left_holes__part_0_y, 0], _left_holes__part_0);

                _left_holes__part_0 = translate([0,0,0], _left_holes__part_0);
                let result = _left_holes__part_0;
                
            
                    return result;
                }
            
            

                function _left_battery_mounts_case_fn() {
                    

                // creating part 0 of case _left_battery_mounts
                let _left_battery_mounts__part_0 = _left_battery_mount_extrude_3_outline_fn();

                // make sure that rotations are relative
                let _left_battery_mounts__part_0_bounds = _left_battery_mounts__part_0.getBounds();
                let _left_battery_mounts__part_0_x = _left_battery_mounts__part_0_bounds[0].x + (_left_battery_mounts__part_0_bounds[1].x - _left_battery_mounts__part_0_bounds[0].x) / 2
                let _left_battery_mounts__part_0_y = _left_battery_mounts__part_0_bounds[0].y + (_left_battery_mounts__part_0_bounds[1].y - _left_battery_mounts__part_0_bounds[0].y) / 2
                _left_battery_mounts__part_0 = translate([-_left_battery_mounts__part_0_x, -_left_battery_mounts__part_0_y, 0], _left_battery_mounts__part_0);
                _left_battery_mounts__part_0 = rotate([0,0,0], _left_battery_mounts__part_0);
                _left_battery_mounts__part_0 = translate([_left_battery_mounts__part_0_x, _left_battery_mounts__part_0_y, 0], _left_battery_mounts__part_0);

                _left_battery_mounts__part_0 = translate([0,0,0], _left_battery_mounts__part_0);
                let result = _left_battery_mounts__part_0;
                
            
                    return result;
                }
            
            

                function _left_base_case_fn() {
                    

                // creating part 0 of case _left_base
                let _left_base__part_0 = _xl_board_left_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _left_base__part_0_bounds = _left_base__part_0.getBounds();
                let _left_base__part_0_x = _left_base__part_0_bounds[0].x + (_left_base__part_0_bounds[1].x - _left_base__part_0_bounds[0].x) / 2
                let _left_base__part_0_y = _left_base__part_0_bounds[0].y + (_left_base__part_0_bounds[1].y - _left_base__part_0_bounds[0].y) / 2
                _left_base__part_0 = translate([-_left_base__part_0_x, -_left_base__part_0_y, 0], _left_base__part_0);
                _left_base__part_0 = rotate([0,0,0], _left_base__part_0);
                _left_base__part_0 = translate([_left_base__part_0_x, _left_base__part_0_y, 0], _left_base__part_0);

                _left_base__part_0 = translate([0,0,0], _left_base__part_0);
                let result = _left_base__part_0;
                
            
                    return result;
                }
            
            

                function _left_legs_case_fn() {
                    

                // creating part 0 of case _left_legs
                let _left_legs__part_0 = _left_leg_cutouts_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _left_legs__part_0_bounds = _left_legs__part_0.getBounds();
                let _left_legs__part_0_x = _left_legs__part_0_bounds[0].x + (_left_legs__part_0_bounds[1].x - _left_legs__part_0_bounds[0].x) / 2
                let _left_legs__part_0_y = _left_legs__part_0_bounds[0].y + (_left_legs__part_0_bounds[1].y - _left_legs__part_0_bounds[0].y) / 2
                _left_legs__part_0 = translate([-_left_legs__part_0_x, -_left_legs__part_0_y, 0], _left_legs__part_0);
                _left_legs__part_0 = rotate([0,0,0], _left_legs__part_0);
                _left_legs__part_0 = translate([_left_legs__part_0_x, _left_legs__part_0_y, 0], _left_legs__part_0);

                _left_legs__part_0 = translate([0,0,0], _left_legs__part_0);
                let result = _left_legs__part_0;
                
            
                    return result;
                }
            
            

                function _left_feet_case_fn() {
                    

                // creating part 0 of case _left_feet
                let _left_feet__part_0 = _left_rubber_feet_extrude_0_5_outline_fn();

                // make sure that rotations are relative
                let _left_feet__part_0_bounds = _left_feet__part_0.getBounds();
                let _left_feet__part_0_x = _left_feet__part_0_bounds[0].x + (_left_feet__part_0_bounds[1].x - _left_feet__part_0_bounds[0].x) / 2
                let _left_feet__part_0_y = _left_feet__part_0_bounds[0].y + (_left_feet__part_0_bounds[1].y - _left_feet__part_0_bounds[0].y) / 2
                _left_feet__part_0 = translate([-_left_feet__part_0_x, -_left_feet__part_0_y, 0], _left_feet__part_0);
                _left_feet__part_0 = rotate([0,0,0], _left_feet__part_0);
                _left_feet__part_0 = translate([_left_feet__part_0_x, _left_feet__part_0_y, 0], _left_feet__part_0);

                _left_feet__part_0 = translate([0,0,0], _left_feet__part_0);
                let result = _left_feet__part_0;
                
            
                    return result;
                }
            
            

                function _left_wall_case_fn() {
                    

                // creating part 0 of case _left_wall
                let _left_wall__part_0 = _left_outerWall_case_fn();

                // make sure that rotations are relative
                let _left_wall__part_0_bounds = _left_wall__part_0.getBounds();
                let _left_wall__part_0_x = _left_wall__part_0_bounds[0].x + (_left_wall__part_0_bounds[1].x - _left_wall__part_0_bounds[0].x) / 2
                let _left_wall__part_0_y = _left_wall__part_0_bounds[0].y + (_left_wall__part_0_bounds[1].y - _left_wall__part_0_bounds[0].y) / 2
                _left_wall__part_0 = translate([-_left_wall__part_0_x, -_left_wall__part_0_y, 0], _left_wall__part_0);
                _left_wall__part_0 = rotate([0,0,0], _left_wall__part_0);
                _left_wall__part_0 = translate([_left_wall__part_0_x, _left_wall__part_0_y, 0], _left_wall__part_0);

                _left_wall__part_0 = translate([0,0,0], _left_wall__part_0);
                let result = _left_wall__part_0;
                
            

                // creating part 1 of case _left_wall
                let _left_wall__part_1 = _left_innerWall_case_fn();

                // make sure that rotations are relative
                let _left_wall__part_1_bounds = _left_wall__part_1.getBounds();
                let _left_wall__part_1_x = _left_wall__part_1_bounds[0].x + (_left_wall__part_1_bounds[1].x - _left_wall__part_1_bounds[0].x) / 2
                let _left_wall__part_1_y = _left_wall__part_1_bounds[0].y + (_left_wall__part_1_bounds[1].y - _left_wall__part_1_bounds[0].y) / 2
                _left_wall__part_1 = translate([-_left_wall__part_1_x, -_left_wall__part_1_y, 0], _left_wall__part_1);
                _left_wall__part_1 = rotate([0,0,0], _left_wall__part_1);
                _left_wall__part_1 = translate([_left_wall__part_1_x, _left_wall__part_1_y, 0], _left_wall__part_1);

                _left_wall__part_1 = translate([0,0,0], _left_wall__part_1);
                result = result.subtract(_left_wall__part_1);
                
            
                    return result;
                }
            
            

                function _left_outerWall_case_fn() {
                    

                // creating part 0 of case _left_outerWall
                let _left_outerWall__part_0 = _xl_board_left_extrude_11_9_outline_fn();

                // make sure that rotations are relative
                let _left_outerWall__part_0_bounds = _left_outerWall__part_0.getBounds();
                let _left_outerWall__part_0_x = _left_outerWall__part_0_bounds[0].x + (_left_outerWall__part_0_bounds[1].x - _left_outerWall__part_0_bounds[0].x) / 2
                let _left_outerWall__part_0_y = _left_outerWall__part_0_bounds[0].y + (_left_outerWall__part_0_bounds[1].y - _left_outerWall__part_0_bounds[0].y) / 2
                _left_outerWall__part_0 = translate([-_left_outerWall__part_0_x, -_left_outerWall__part_0_y, 0], _left_outerWall__part_0);
                _left_outerWall__part_0 = rotate([0,0,0], _left_outerWall__part_0);
                _left_outerWall__part_0 = translate([_left_outerWall__part_0_x, _left_outerWall__part_0_y, 0], _left_outerWall__part_0);

                _left_outerWall__part_0 = translate([0,0,0], _left_outerWall__part_0);
                let result = _left_outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _left_innerWall_case_fn() {
                    

                // creating part 0 of case _left_innerWall
                let _left_innerWall__part_0 = _board_left_extrude_11_9_outline_fn();

                // make sure that rotations are relative
                let _left_innerWall__part_0_bounds = _left_innerWall__part_0.getBounds();
                let _left_innerWall__part_0_x = _left_innerWall__part_0_bounds[0].x + (_left_innerWall__part_0_bounds[1].x - _left_innerWall__part_0_bounds[0].x) / 2
                let _left_innerWall__part_0_y = _left_innerWall__part_0_bounds[0].y + (_left_innerWall__part_0_bounds[1].y - _left_innerWall__part_0_bounds[0].y) / 2
                _left_innerWall__part_0 = translate([-_left_innerWall__part_0_x, -_left_innerWall__part_0_y, 0], _left_innerWall__part_0);
                _left_innerWall__part_0 = rotate([0,0,0], _left_innerWall__part_0);
                _left_innerWall__part_0 = translate([_left_innerWall__part_0_x, _left_innerWall__part_0_y, 0], _left_innerWall__part_0);

                _left_innerWall__part_0 = translate([0,0,0], _left_innerWall__part_0);
                let result = _left_innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _left_rst_hole_case_fn() {
                    

                // creating part 0 of case _left_rst_hole
                let _left_rst_hole__part_0 = _left_reset_cutout_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _left_rst_hole__part_0_bounds = _left_rst_hole__part_0.getBounds();
                let _left_rst_hole__part_0_x = _left_rst_hole__part_0_bounds[0].x + (_left_rst_hole__part_0_bounds[1].x - _left_rst_hole__part_0_bounds[0].x) / 2
                let _left_rst_hole__part_0_y = _left_rst_hole__part_0_bounds[0].y + (_left_rst_hole__part_0_bounds[1].y - _left_rst_hole__part_0_bounds[0].y) / 2
                _left_rst_hole__part_0 = translate([-_left_rst_hole__part_0_x, -_left_rst_hole__part_0_y, 0], _left_rst_hole__part_0);
                _left_rst_hole__part_0 = rotate([0,0,0], _left_rst_hole__part_0);
                _left_rst_hole__part_0 = translate([_left_rst_hole__part_0_x, _left_rst_hole__part_0_y, 0], _left_rst_hole__part_0);

                _left_rst_hole__part_0 = translate([0,0,0], _left_rst_hole__part_0);
                let result = _left_rst_hole__part_0;
                
            
                    return result;
                }
            
            

                function _left_pwr_hole_case_fn() {
                    

                // creating part 0 of case _left_pwr_hole
                let _left_pwr_hole__part_0 = _left_power_cutout_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _left_pwr_hole__part_0_bounds = _left_pwr_hole__part_0.getBounds();
                let _left_pwr_hole__part_0_x = _left_pwr_hole__part_0_bounds[0].x + (_left_pwr_hole__part_0_bounds[1].x - _left_pwr_hole__part_0_bounds[0].x) / 2
                let _left_pwr_hole__part_0_y = _left_pwr_hole__part_0_bounds[0].y + (_left_pwr_hole__part_0_bounds[1].y - _left_pwr_hole__part_0_bounds[0].y) / 2
                _left_pwr_hole__part_0 = translate([-_left_pwr_hole__part_0_x, -_left_pwr_hole__part_0_y, 0], _left_pwr_hole__part_0);
                _left_pwr_hole__part_0 = rotate([0,0,0], _left_pwr_hole__part_0);
                _left_pwr_hole__part_0 = translate([_left_pwr_hole__part_0_x, _left_pwr_hole__part_0_y, 0], _left_pwr_hole__part_0);

                _left_pwr_hole__part_0 = translate([0,0,0], _left_pwr_hole__part_0);
                let result = _left_pwr_hole__part_0;
                
            
                    return result;
                }
            
            

                function left_tray_case_fn() {
                    

                // creating part 0 of case left_tray
                let left_tray__part_0 = _left_standoffs_case_fn();

                // make sure that rotations are relative
                let left_tray__part_0_bounds = left_tray__part_0.getBounds();
                let left_tray__part_0_x = left_tray__part_0_bounds[0].x + (left_tray__part_0_bounds[1].x - left_tray__part_0_bounds[0].x) / 2
                let left_tray__part_0_y = left_tray__part_0_bounds[0].y + (left_tray__part_0_bounds[1].y - left_tray__part_0_bounds[0].y) / 2
                left_tray__part_0 = translate([-left_tray__part_0_x, -left_tray__part_0_y, 0], left_tray__part_0);
                left_tray__part_0 = rotate([0,0,0], left_tray__part_0);
                left_tray__part_0 = translate([left_tray__part_0_x, left_tray__part_0_y, 0], left_tray__part_0);

                left_tray__part_0 = translate([0,0,0], left_tray__part_0);
                let result = left_tray__part_0;
                
            

                // creating part 1 of case left_tray
                let left_tray__part_1 = _left_holes_case_fn();

                // make sure that rotations are relative
                let left_tray__part_1_bounds = left_tray__part_1.getBounds();
                let left_tray__part_1_x = left_tray__part_1_bounds[0].x + (left_tray__part_1_bounds[1].x - left_tray__part_1_bounds[0].x) / 2
                let left_tray__part_1_y = left_tray__part_1_bounds[0].y + (left_tray__part_1_bounds[1].y - left_tray__part_1_bounds[0].y) / 2
                left_tray__part_1 = translate([-left_tray__part_1_x, -left_tray__part_1_y, 0], left_tray__part_1);
                left_tray__part_1 = rotate([0,0,0], left_tray__part_1);
                left_tray__part_1 = translate([left_tray__part_1_x, left_tray__part_1_y, 0], left_tray__part_1);

                left_tray__part_1 = translate([0,0,0], left_tray__part_1);
                result = result.subtract(left_tray__part_1);
                
            

                // creating part 2 of case left_tray
                let left_tray__part_2 = _left_battery_mounts_case_fn();

                // make sure that rotations are relative
                let left_tray__part_2_bounds = left_tray__part_2.getBounds();
                let left_tray__part_2_x = left_tray__part_2_bounds[0].x + (left_tray__part_2_bounds[1].x - left_tray__part_2_bounds[0].x) / 2
                let left_tray__part_2_y = left_tray__part_2_bounds[0].y + (left_tray__part_2_bounds[1].y - left_tray__part_2_bounds[0].y) / 2
                left_tray__part_2 = translate([-left_tray__part_2_x, -left_tray__part_2_y, 0], left_tray__part_2);
                left_tray__part_2 = rotate([0,0,0], left_tray__part_2);
                left_tray__part_2 = translate([left_tray__part_2_x, left_tray__part_2_y, 0], left_tray__part_2);

                left_tray__part_2 = translate([0,0,0], left_tray__part_2);
                result = result.union(left_tray__part_2);
                
            

                // creating part 3 of case left_tray
                let left_tray__part_3 = _left_base_case_fn();

                // make sure that rotations are relative
                let left_tray__part_3_bounds = left_tray__part_3.getBounds();
                let left_tray__part_3_x = left_tray__part_3_bounds[0].x + (left_tray__part_3_bounds[1].x - left_tray__part_3_bounds[0].x) / 2
                let left_tray__part_3_y = left_tray__part_3_bounds[0].y + (left_tray__part_3_bounds[1].y - left_tray__part_3_bounds[0].y) / 2
                left_tray__part_3 = translate([-left_tray__part_3_x, -left_tray__part_3_y, 0], left_tray__part_3);
                left_tray__part_3 = rotate([0,0,0], left_tray__part_3);
                left_tray__part_3 = translate([left_tray__part_3_x, left_tray__part_3_y, 0], left_tray__part_3);

                left_tray__part_3 = translate([0,0,0], left_tray__part_3);
                result = result.union(left_tray__part_3);
                
            

                // creating part 4 of case left_tray
                let left_tray__part_4 = _left_legs_case_fn();

                // make sure that rotations are relative
                let left_tray__part_4_bounds = left_tray__part_4.getBounds();
                let left_tray__part_4_x = left_tray__part_4_bounds[0].x + (left_tray__part_4_bounds[1].x - left_tray__part_4_bounds[0].x) / 2
                let left_tray__part_4_y = left_tray__part_4_bounds[0].y + (left_tray__part_4_bounds[1].y - left_tray__part_4_bounds[0].y) / 2
                left_tray__part_4 = translate([-left_tray__part_4_x, -left_tray__part_4_y, 0], left_tray__part_4);
                left_tray__part_4 = rotate([0,0,0], left_tray__part_4);
                left_tray__part_4 = translate([left_tray__part_4_x, left_tray__part_4_y, 0], left_tray__part_4);

                left_tray__part_4 = translate([0,0,0], left_tray__part_4);
                result = result.subtract(left_tray__part_4);
                
            

                // creating part 5 of case left_tray
                let left_tray__part_5 = _left_feet_case_fn();

                // make sure that rotations are relative
                let left_tray__part_5_bounds = left_tray__part_5.getBounds();
                let left_tray__part_5_x = left_tray__part_5_bounds[0].x + (left_tray__part_5_bounds[1].x - left_tray__part_5_bounds[0].x) / 2
                let left_tray__part_5_y = left_tray__part_5_bounds[0].y + (left_tray__part_5_bounds[1].y - left_tray__part_5_bounds[0].y) / 2
                left_tray__part_5 = translate([-left_tray__part_5_x, -left_tray__part_5_y, 0], left_tray__part_5);
                left_tray__part_5 = rotate([0,0,0], left_tray__part_5);
                left_tray__part_5 = translate([left_tray__part_5_x, left_tray__part_5_y, 0], left_tray__part_5);

                left_tray__part_5 = translate([0,0,0], left_tray__part_5);
                result = result.subtract(left_tray__part_5);
                
            

                // creating part 6 of case left_tray
                let left_tray__part_6 = _left_wall_case_fn();

                // make sure that rotations are relative
                let left_tray__part_6_bounds = left_tray__part_6.getBounds();
                let left_tray__part_6_x = left_tray__part_6_bounds[0].x + (left_tray__part_6_bounds[1].x - left_tray__part_6_bounds[0].x) / 2
                let left_tray__part_6_y = left_tray__part_6_bounds[0].y + (left_tray__part_6_bounds[1].y - left_tray__part_6_bounds[0].y) / 2
                left_tray__part_6 = translate([-left_tray__part_6_x, -left_tray__part_6_y, 0], left_tray__part_6);
                left_tray__part_6 = rotate([0,0,0], left_tray__part_6);
                left_tray__part_6 = translate([left_tray__part_6_x, left_tray__part_6_y, 0], left_tray__part_6);

                left_tray__part_6 = translate([0,0,0], left_tray__part_6);
                result = result.union(left_tray__part_6);
                
            

                // creating part 7 of case left_tray
                let left_tray__part_7 = _left_rst_hole_case_fn();

                // make sure that rotations are relative
                let left_tray__part_7_bounds = left_tray__part_7.getBounds();
                let left_tray__part_7_x = left_tray__part_7_bounds[0].x + (left_tray__part_7_bounds[1].x - left_tray__part_7_bounds[0].x) / 2
                let left_tray__part_7_y = left_tray__part_7_bounds[0].y + (left_tray__part_7_bounds[1].y - left_tray__part_7_bounds[0].y) / 2
                left_tray__part_7 = translate([-left_tray__part_7_x, -left_tray__part_7_y, 0], left_tray__part_7);
                left_tray__part_7 = rotate([0,0,0], left_tray__part_7);
                left_tray__part_7 = translate([left_tray__part_7_x, left_tray__part_7_y, 0], left_tray__part_7);

                left_tray__part_7 = translate([0,0,8], left_tray__part_7);
                result = result.subtract(left_tray__part_7);
                
            

                // creating part 8 of case left_tray
                let left_tray__part_8 = _left_pwr_hole_case_fn();

                // make sure that rotations are relative
                let left_tray__part_8_bounds = left_tray__part_8.getBounds();
                let left_tray__part_8_x = left_tray__part_8_bounds[0].x + (left_tray__part_8_bounds[1].x - left_tray__part_8_bounds[0].x) / 2
                let left_tray__part_8_y = left_tray__part_8_bounds[0].y + (left_tray__part_8_bounds[1].y - left_tray__part_8_bounds[0].y) / 2
                left_tray__part_8 = translate([-left_tray__part_8_x, -left_tray__part_8_y, 0], left_tray__part_8);
                left_tray__part_8 = rotate([0,0,0], left_tray__part_8);
                left_tray__part_8 = translate([left_tray__part_8_x, left_tray__part_8_y, 0], left_tray__part_8);

                left_tray__part_8 = translate([0,0,8], left_tray__part_8);
                result = result.subtract(left_tray__part_8);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_tray_case_fn();
            }

        