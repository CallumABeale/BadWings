function _right_standoff_extrude_4_5_outline_fn(){
    return CAG.circle({"center":[224.51741,-123.2934978],"radius":2.5})
.union(
    CAG.circle({"center":[306.5331394,-132.5979887],"radius":2.5})
).union(
    CAG.circle({"center":[291.3549401,-169.0279526],"radius":2.5})
).union(
    CAG.circle({"center":[211.37741,-177.5934978],"radius":2.5})
).union(
    CAG.circle({"center":[267.1774101,-138.4934978],"radius":2.5})
).union(
    CAG.circle({"center":[332.2208428,-142.75788],"radius":2.5})
).union(
    CAG.circle({"center":[315.7946457,-181.0941833],"radius":2.5})
).union(
    CAG.circle({"center":[235.4369531,-197.2257902],"radius":2.5})
).extrude({ offset: [0, 0, 4.5] });
}


function _right_mounting_extrude_4_5_outline_fn(){
    return CAG.circle({"center":[224.51741,-123.2934978],"radius":1})
.union(
    CAG.circle({"center":[306.5331394,-132.5979887],"radius":1})
).union(
    CAG.circle({"center":[291.3549401,-169.0279526],"radius":1})
).union(
    CAG.circle({"center":[211.37741,-177.5934978],"radius":1})
).union(
    CAG.circle({"center":[267.1774101,-138.4934978],"radius":1})
).union(
    CAG.circle({"center":[332.2208428,-142.75788],"radius":1})
).union(
    CAG.circle({"center":[315.7946457,-181.0941833],"radius":1})
).union(
    CAG.circle({"center":[235.4369531,-197.2257902],"radius":1})
).extrude({ offset: [0, 0, 4.5] });
}


function _right_battery_mount_extrude_3_outline_fn(){
    return new CSG.Path2D([[237.37741,-180.9934978],[257.37741,-180.9934978]]).appendPoint([257.37741,-179.9934978]).appendPoint([237.37741,-179.9934978]).appendPoint([237.37741,-180.9934978]).close().innerToCAG()
.union(
    new CSG.Path2D([[226.27741,-161.9934978],[227.27741,-161.9934978]]).appendPoint([227.27741,-131.9934978]).appendPoint([226.27741,-131.9934978]).appendPoint([226.27741,-161.9934978]).close().innerToCAG()
).union(
    new CSG.Path2D([[263.67741,-161.9934978],[264.67741,-161.9934978]]).appendPoint([264.67741,-131.9934978]).appendPoint([263.67741,-131.9934978]).appendPoint([263.67741,-161.9934978]).close().innerToCAG()
).extrude({ offset: [0, 0, 3] });
}


function _xl_board_right_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[357.8475271,-145.8604243],[340.3365984,-138.427476]]).appendArc([339.1856434,-137.1019892],{"radius":2,"clockwise":true,"large":false}).appendPoint([335.8308075,-124.5265199]).appendArc([334.2800083,-123.0787885],{"radius":2,"clockwise":false,"large":false}).appendPoint([315.0216765,-119.335348]).appendArc([313.5247354,-118.0583994],{"radius":2,"clockwise":true,"large":false}).appendPoint([311.8997253,-113.6104144]).appendArc([310.1606793,-112.3015921],{"radius":2,"clockwise":false,"large":false}).appendPoint([287.5148214,-110.7180395]).appendArc([285.8610926,-111.406588],{"radius":2,"clockwise":false,"large":false}).appendPoint([280.7757455,-117.3000774]).appendArc([279.2615296,-117.9934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([221.47741,-117.9934978]).appendArc([219.47741,-119.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.47741,-154.9934978]).appendArc([217.47741,-156.9934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.67741,-156.9934978]).appendArc([205.67741,-158.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.67741,-179.6563553]).appendArc([205.7879343,-180.3120089],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.2650283,-224.914207]).appendArc([223.8056404,-226.1495905],{"radius":2,"clockwise":false,"large":false}).appendPoint([245.4408101,-218.7000043]).appendArc([245.6675729,-218.6059905],{"radius":2,"clockwise":false,"large":false}).appendPoint([262.3527175,-210.4548033]).appendArc([262.5775057,-210.3263363],{"radius":2,"clockwise":false,"large":false}).appendPoint([280.8189115,-198.2712647]).appendArc([281.6510567,-197.109091],{"radius":2,"clockwise":false,"large":false}).appendPoint([286.7928839,-177.4627309]).appendArc([288.6959372,-175.969366],{"radius":2,"clockwise":true,"large":false}).appendPoint([300.4828524,-175.7820534]).appendArc([301.9793811,-176.4199974],{"radius":2,"clockwise":true,"large":false}).appendPoint([315.1037406,-190.5364972]).appendArc([315.7870279,-191.0157034],{"radius":2,"clockwise":false,"large":false}).appendPoint([335.1851218,-199.2497058]).appendArc([337.8075936,-198.1901582],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.9070747,-148.4828962]).appendArc([357.8475271,-145.8604243],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function _right_leg_cutouts_extrude_1_outline_fn(){
    return new CSG.Path2D([[246.5900101,-134.7806611],[298.1382819,-156.6616043]]).appendPoint([303.7648101,-143.4063345]).appendPoint([252.2165383,-121.5253913]).appendPoint([246.5900101,-134.7806611]).close().innerToCAG()
.union(
    new CSG.Path2D([[219.8769547,-210.0654034],[274.4416783,-197.4681443]]).appendPoint([271.2023831,-183.4372154]).appendPoint([216.6376595,-196.0344745]).appendPoint([219.8769547,-210.0654034]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
}


function _right_rubber_feet_extrude_0_5_outline_fn(){
    return CAG.circle({"center":[336.0077749,-186.5625768],"radius":3})
.union(
    CAG.circle({"center":[342.6502041,-170.9139943],"radius":3})
).union(
    CAG.circle({"center":[349.2926333,-155.2654118],"radius":3})
).extrude({ offset: [0, 0, 0.5] });
}


function _xl_board_right_extrude_11_9_outline_fn(){
    return new CSG.Path2D([[357.8475271,-145.8604243],[340.3365984,-138.427476]]).appendArc([339.1856434,-137.1019892],{"radius":2,"clockwise":true,"large":false}).appendPoint([335.8308075,-124.5265199]).appendArc([334.2800083,-123.0787885],{"radius":2,"clockwise":false,"large":false}).appendPoint([315.0216765,-119.335348]).appendArc([313.5247354,-118.0583994],{"radius":2,"clockwise":true,"large":false}).appendPoint([311.8997253,-113.6104144]).appendArc([310.1606793,-112.3015921],{"radius":2,"clockwise":false,"large":false}).appendPoint([287.5148214,-110.7180395]).appendArc([285.8610926,-111.406588],{"radius":2,"clockwise":false,"large":false}).appendPoint([280.7757455,-117.3000774]).appendArc([279.2615296,-117.9934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([221.47741,-117.9934978]).appendArc([219.47741,-119.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.47741,-154.9934978]).appendArc([217.47741,-156.9934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.67741,-156.9934978]).appendArc([205.67741,-158.9934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.67741,-179.6563553]).appendArc([205.7879343,-180.3120089],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.2650283,-224.914207]).appendArc([223.8056404,-226.1495905],{"radius":2,"clockwise":false,"large":false}).appendPoint([245.4408101,-218.7000043]).appendArc([245.6675729,-218.6059905],{"radius":2,"clockwise":false,"large":false}).appendPoint([262.3527175,-210.4548033]).appendArc([262.5775057,-210.3263363],{"radius":2,"clockwise":false,"large":false}).appendPoint([280.8189115,-198.2712647]).appendArc([281.6510567,-197.109091],{"radius":2,"clockwise":false,"large":false}).appendPoint([286.7928839,-177.4627309]).appendArc([288.6959372,-175.969366],{"radius":2,"clockwise":true,"large":false}).appendPoint([300.4828524,-175.7820534]).appendArc([301.9793811,-176.4199974],{"radius":2,"clockwise":true,"large":false}).appendPoint([315.1037406,-190.5364972]).appendArc([315.7870279,-191.0157034],{"radius":2,"clockwise":false,"large":false}).appendPoint([335.1851218,-199.2497058]).appendArc([337.8075936,-198.1901582],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.9070747,-148.4828962]).appendArc([357.8475271,-145.8604243],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 11.9] });
}


function _board_right_extrude_11_9_outline_fn(){
    return new CSG.Path2D([[355.8806731,-146.6550849],[338.3774726,-139.225417]]).appendArc([337.2230731,-137.8868412],{"radius":2,"clockwise":true,"large":false}).appendPoint([334.066335,-125.7240357]).appendArc([332.5120914,-124.2632153],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.2775965,-120.5244082]).appendArc([311.7730741,-119.2263414],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.2903687,-115.0221281]).appendArc([308.5437413,-113.6921876],{"radius":2,"clockwise":false,"large":false}).appendPoint([288.9086253,-112.3191666]).appendArc([287.2527083,-113.0102553],{"radius":2,"clockwise":false,"large":false}).appendPoint([282.275905,-118.7975372]).appendArc([280.759501,-119.4934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.97741,-119.4934978]).appendArc([220.97741,-121.4934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.97741,-156.4934978]).appendArc([218.97741,-158.4934978],{"radius":2,"clockwise":true,"large":false}).appendPoint([209.17741,-158.4934978]).appendArc([207.17741,-160.4934978],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.17741,-178.1648598]).appendArc([207.2825734,-178.8048554],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.2052692,-222.9865212]).appendArc([224.7512422,-224.2375627],{"radius":2,"clockwise":false,"large":false}).appendPoint([243.5319419,-217.7708492]).appendArc([243.7629395,-217.6747605],{"radius":2,"clockwise":false,"large":false}).appendPoint([260.4806104,-209.4587985]).appendArc([260.7036652,-209.3307507],{"radius":2,"clockwise":false,"large":false}).appendPoint([279.0506217,-197.1663476]).appendArc([279.8395771,-196.1414888],{"radius":2,"clockwise":false,"large":false}).appendPoint([286.7237282,-175.8319454]).appendArc([288.590526,-174.4741742],{"radius":2,"clockwise":true,"large":false}).appendPoint([300.7806943,-174.3074798]).appendArc([302.2624881,-174.9344918],{"radius":2,"clockwise":true,"large":false}).appendPoint([315.6928938,-189.1636618]).appendArc([316.365879,-189.6318705],{"radius":2,"clockwise":false,"large":false}).appendPoint([334.3904612,-197.2828519]).appendArc([337.012933,-196.2233043],{"radius":2,"clockwise":false,"large":false}).appendPoint([356.9402207,-149.2775568]).appendArc([355.8806731,-146.6550849],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 11.9] });
}


function _right_reset_cutout_extrude_2_outline_fn(){
    return new CSG.Path2D([[218.25741,-134.8934978],[228.25741,-134.8934978]]).appendPoint([228.25741,-126.6934978]).appendPoint([218.25741,-126.6934978]).appendPoint([218.25741,-134.8934978]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _right_power_cutout_extrude_2_outline_fn(){
    return new CSG.Path2D([[218.79741,-151.9934978],[228.79741,-151.9934978]]).appendPoint([228.79741,-141.9934978]).appendPoint([218.79741,-141.9934978]).appendPoint([218.79741,-151.9934978]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function _right_standoffs_case_fn() {
                    

                // creating part 0 of case _right_standoffs
                let _right_standoffs__part_0 = _right_standoff_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let _right_standoffs__part_0_bounds = _right_standoffs__part_0.getBounds();
                let _right_standoffs__part_0_x = _right_standoffs__part_0_bounds[0].x + (_right_standoffs__part_0_bounds[1].x - _right_standoffs__part_0_bounds[0].x) / 2
                let _right_standoffs__part_0_y = _right_standoffs__part_0_bounds[0].y + (_right_standoffs__part_0_bounds[1].y - _right_standoffs__part_0_bounds[0].y) / 2
                _right_standoffs__part_0 = translate([-_right_standoffs__part_0_x, -_right_standoffs__part_0_y, 0], _right_standoffs__part_0);
                _right_standoffs__part_0 = rotate([0,0,0], _right_standoffs__part_0);
                _right_standoffs__part_0 = translate([_right_standoffs__part_0_x, _right_standoffs__part_0_y, 0], _right_standoffs__part_0);

                _right_standoffs__part_0 = translate([0,0,0], _right_standoffs__part_0);
                let result = _right_standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _right_holes_case_fn() {
                    

                // creating part 0 of case _right_holes
                let _right_holes__part_0 = _right_mounting_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let _right_holes__part_0_bounds = _right_holes__part_0.getBounds();
                let _right_holes__part_0_x = _right_holes__part_0_bounds[0].x + (_right_holes__part_0_bounds[1].x - _right_holes__part_0_bounds[0].x) / 2
                let _right_holes__part_0_y = _right_holes__part_0_bounds[0].y + (_right_holes__part_0_bounds[1].y - _right_holes__part_0_bounds[0].y) / 2
                _right_holes__part_0 = translate([-_right_holes__part_0_x, -_right_holes__part_0_y, 0], _right_holes__part_0);
                _right_holes__part_0 = rotate([0,0,0], _right_holes__part_0);
                _right_holes__part_0 = translate([_right_holes__part_0_x, _right_holes__part_0_y, 0], _right_holes__part_0);

                _right_holes__part_0 = translate([0,0,0], _right_holes__part_0);
                let result = _right_holes__part_0;
                
            
                    return result;
                }
            
            

                function _right_battery_mounts_case_fn() {
                    

                // creating part 0 of case _right_battery_mounts
                let _right_battery_mounts__part_0 = _right_battery_mount_extrude_3_outline_fn();

                // make sure that rotations are relative
                let _right_battery_mounts__part_0_bounds = _right_battery_mounts__part_0.getBounds();
                let _right_battery_mounts__part_0_x = _right_battery_mounts__part_0_bounds[0].x + (_right_battery_mounts__part_0_bounds[1].x - _right_battery_mounts__part_0_bounds[0].x) / 2
                let _right_battery_mounts__part_0_y = _right_battery_mounts__part_0_bounds[0].y + (_right_battery_mounts__part_0_bounds[1].y - _right_battery_mounts__part_0_bounds[0].y) / 2
                _right_battery_mounts__part_0 = translate([-_right_battery_mounts__part_0_x, -_right_battery_mounts__part_0_y, 0], _right_battery_mounts__part_0);
                _right_battery_mounts__part_0 = rotate([0,0,0], _right_battery_mounts__part_0);
                _right_battery_mounts__part_0 = translate([_right_battery_mounts__part_0_x, _right_battery_mounts__part_0_y, 0], _right_battery_mounts__part_0);

                _right_battery_mounts__part_0 = translate([0,0,0], _right_battery_mounts__part_0);
                let result = _right_battery_mounts__part_0;
                
            
                    return result;
                }
            
            

                function _right_base_case_fn() {
                    

                // creating part 0 of case _right_base
                let _right_base__part_0 = _xl_board_right_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _right_base__part_0_bounds = _right_base__part_0.getBounds();
                let _right_base__part_0_x = _right_base__part_0_bounds[0].x + (_right_base__part_0_bounds[1].x - _right_base__part_0_bounds[0].x) / 2
                let _right_base__part_0_y = _right_base__part_0_bounds[0].y + (_right_base__part_0_bounds[1].y - _right_base__part_0_bounds[0].y) / 2
                _right_base__part_0 = translate([-_right_base__part_0_x, -_right_base__part_0_y, 0], _right_base__part_0);
                _right_base__part_0 = rotate([0,0,0], _right_base__part_0);
                _right_base__part_0 = translate([_right_base__part_0_x, _right_base__part_0_y, 0], _right_base__part_0);

                _right_base__part_0 = translate([0,0,0], _right_base__part_0);
                let result = _right_base__part_0;
                
            
                    return result;
                }
            
            

                function _right_legs_case_fn() {
                    

                // creating part 0 of case _right_legs
                let _right_legs__part_0 = _right_leg_cutouts_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _right_legs__part_0_bounds = _right_legs__part_0.getBounds();
                let _right_legs__part_0_x = _right_legs__part_0_bounds[0].x + (_right_legs__part_0_bounds[1].x - _right_legs__part_0_bounds[0].x) / 2
                let _right_legs__part_0_y = _right_legs__part_0_bounds[0].y + (_right_legs__part_0_bounds[1].y - _right_legs__part_0_bounds[0].y) / 2
                _right_legs__part_0 = translate([-_right_legs__part_0_x, -_right_legs__part_0_y, 0], _right_legs__part_0);
                _right_legs__part_0 = rotate([0,0,0], _right_legs__part_0);
                _right_legs__part_0 = translate([_right_legs__part_0_x, _right_legs__part_0_y, 0], _right_legs__part_0);

                _right_legs__part_0 = translate([0,0,0], _right_legs__part_0);
                let result = _right_legs__part_0;
                
            
                    return result;
                }
            
            

                function _right_feet_case_fn() {
                    

                // creating part 0 of case _right_feet
                let _right_feet__part_0 = _right_rubber_feet_extrude_0_5_outline_fn();

                // make sure that rotations are relative
                let _right_feet__part_0_bounds = _right_feet__part_0.getBounds();
                let _right_feet__part_0_x = _right_feet__part_0_bounds[0].x + (_right_feet__part_0_bounds[1].x - _right_feet__part_0_bounds[0].x) / 2
                let _right_feet__part_0_y = _right_feet__part_0_bounds[0].y + (_right_feet__part_0_bounds[1].y - _right_feet__part_0_bounds[0].y) / 2
                _right_feet__part_0 = translate([-_right_feet__part_0_x, -_right_feet__part_0_y, 0], _right_feet__part_0);
                _right_feet__part_0 = rotate([0,0,0], _right_feet__part_0);
                _right_feet__part_0 = translate([_right_feet__part_0_x, _right_feet__part_0_y, 0], _right_feet__part_0);

                _right_feet__part_0 = translate([0,0,0], _right_feet__part_0);
                let result = _right_feet__part_0;
                
            
                    return result;
                }
            
            

                function _right_wall_case_fn() {
                    

                // creating part 0 of case _right_wall
                let _right_wall__part_0 = _right_outerWall_case_fn();

                // make sure that rotations are relative
                let _right_wall__part_0_bounds = _right_wall__part_0.getBounds();
                let _right_wall__part_0_x = _right_wall__part_0_bounds[0].x + (_right_wall__part_0_bounds[1].x - _right_wall__part_0_bounds[0].x) / 2
                let _right_wall__part_0_y = _right_wall__part_0_bounds[0].y + (_right_wall__part_0_bounds[1].y - _right_wall__part_0_bounds[0].y) / 2
                _right_wall__part_0 = translate([-_right_wall__part_0_x, -_right_wall__part_0_y, 0], _right_wall__part_0);
                _right_wall__part_0 = rotate([0,0,0], _right_wall__part_0);
                _right_wall__part_0 = translate([_right_wall__part_0_x, _right_wall__part_0_y, 0], _right_wall__part_0);

                _right_wall__part_0 = translate([0,0,0], _right_wall__part_0);
                let result = _right_wall__part_0;
                
            

                // creating part 1 of case _right_wall
                let _right_wall__part_1 = _right_innerWall_case_fn();

                // make sure that rotations are relative
                let _right_wall__part_1_bounds = _right_wall__part_1.getBounds();
                let _right_wall__part_1_x = _right_wall__part_1_bounds[0].x + (_right_wall__part_1_bounds[1].x - _right_wall__part_1_bounds[0].x) / 2
                let _right_wall__part_1_y = _right_wall__part_1_bounds[0].y + (_right_wall__part_1_bounds[1].y - _right_wall__part_1_bounds[0].y) / 2
                _right_wall__part_1 = translate([-_right_wall__part_1_x, -_right_wall__part_1_y, 0], _right_wall__part_1);
                _right_wall__part_1 = rotate([0,0,0], _right_wall__part_1);
                _right_wall__part_1 = translate([_right_wall__part_1_x, _right_wall__part_1_y, 0], _right_wall__part_1);

                _right_wall__part_1 = translate([0,0,0], _right_wall__part_1);
                result = result.subtract(_right_wall__part_1);
                
            
                    return result;
                }
            
            

                function _right_outerWall_case_fn() {
                    

                // creating part 0 of case _right_outerWall
                let _right_outerWall__part_0 = _xl_board_right_extrude_11_9_outline_fn();

                // make sure that rotations are relative
                let _right_outerWall__part_0_bounds = _right_outerWall__part_0.getBounds();
                let _right_outerWall__part_0_x = _right_outerWall__part_0_bounds[0].x + (_right_outerWall__part_0_bounds[1].x - _right_outerWall__part_0_bounds[0].x) / 2
                let _right_outerWall__part_0_y = _right_outerWall__part_0_bounds[0].y + (_right_outerWall__part_0_bounds[1].y - _right_outerWall__part_0_bounds[0].y) / 2
                _right_outerWall__part_0 = translate([-_right_outerWall__part_0_x, -_right_outerWall__part_0_y, 0], _right_outerWall__part_0);
                _right_outerWall__part_0 = rotate([0,0,0], _right_outerWall__part_0);
                _right_outerWall__part_0 = translate([_right_outerWall__part_0_x, _right_outerWall__part_0_y, 0], _right_outerWall__part_0);

                _right_outerWall__part_0 = translate([0,0,0], _right_outerWall__part_0);
                let result = _right_outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _right_innerWall_case_fn() {
                    

                // creating part 0 of case _right_innerWall
                let _right_innerWall__part_0 = _board_right_extrude_11_9_outline_fn();

                // make sure that rotations are relative
                let _right_innerWall__part_0_bounds = _right_innerWall__part_0.getBounds();
                let _right_innerWall__part_0_x = _right_innerWall__part_0_bounds[0].x + (_right_innerWall__part_0_bounds[1].x - _right_innerWall__part_0_bounds[0].x) / 2
                let _right_innerWall__part_0_y = _right_innerWall__part_0_bounds[0].y + (_right_innerWall__part_0_bounds[1].y - _right_innerWall__part_0_bounds[0].y) / 2
                _right_innerWall__part_0 = translate([-_right_innerWall__part_0_x, -_right_innerWall__part_0_y, 0], _right_innerWall__part_0);
                _right_innerWall__part_0 = rotate([0,0,0], _right_innerWall__part_0);
                _right_innerWall__part_0 = translate([_right_innerWall__part_0_x, _right_innerWall__part_0_y, 0], _right_innerWall__part_0);

                _right_innerWall__part_0 = translate([0,0,0], _right_innerWall__part_0);
                let result = _right_innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _right_rst_hole_case_fn() {
                    

                // creating part 0 of case _right_rst_hole
                let _right_rst_hole__part_0 = _right_reset_cutout_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _right_rst_hole__part_0_bounds = _right_rst_hole__part_0.getBounds();
                let _right_rst_hole__part_0_x = _right_rst_hole__part_0_bounds[0].x + (_right_rst_hole__part_0_bounds[1].x - _right_rst_hole__part_0_bounds[0].x) / 2
                let _right_rst_hole__part_0_y = _right_rst_hole__part_0_bounds[0].y + (_right_rst_hole__part_0_bounds[1].y - _right_rst_hole__part_0_bounds[0].y) / 2
                _right_rst_hole__part_0 = translate([-_right_rst_hole__part_0_x, -_right_rst_hole__part_0_y, 0], _right_rst_hole__part_0);
                _right_rst_hole__part_0 = rotate([0,0,0], _right_rst_hole__part_0);
                _right_rst_hole__part_0 = translate([_right_rst_hole__part_0_x, _right_rst_hole__part_0_y, 0], _right_rst_hole__part_0);

                _right_rst_hole__part_0 = translate([0,0,0], _right_rst_hole__part_0);
                let result = _right_rst_hole__part_0;
                
            
                    return result;
                }
            
            

                function _right_pwr_hole_case_fn() {
                    

                // creating part 0 of case _right_pwr_hole
                let _right_pwr_hole__part_0 = _right_power_cutout_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _right_pwr_hole__part_0_bounds = _right_pwr_hole__part_0.getBounds();
                let _right_pwr_hole__part_0_x = _right_pwr_hole__part_0_bounds[0].x + (_right_pwr_hole__part_0_bounds[1].x - _right_pwr_hole__part_0_bounds[0].x) / 2
                let _right_pwr_hole__part_0_y = _right_pwr_hole__part_0_bounds[0].y + (_right_pwr_hole__part_0_bounds[1].y - _right_pwr_hole__part_0_bounds[0].y) / 2
                _right_pwr_hole__part_0 = translate([-_right_pwr_hole__part_0_x, -_right_pwr_hole__part_0_y, 0], _right_pwr_hole__part_0);
                _right_pwr_hole__part_0 = rotate([0,0,0], _right_pwr_hole__part_0);
                _right_pwr_hole__part_0 = translate([_right_pwr_hole__part_0_x, _right_pwr_hole__part_0_y, 0], _right_pwr_hole__part_0);

                _right_pwr_hole__part_0 = translate([0,0,0], _right_pwr_hole__part_0);
                let result = _right_pwr_hole__part_0;
                
            
                    return result;
                }
            
            

                function right_tray_case_fn() {
                    

                // creating part 0 of case right_tray
                let right_tray__part_0 = _right_standoffs_case_fn();

                // make sure that rotations are relative
                let right_tray__part_0_bounds = right_tray__part_0.getBounds();
                let right_tray__part_0_x = right_tray__part_0_bounds[0].x + (right_tray__part_0_bounds[1].x - right_tray__part_0_bounds[0].x) / 2
                let right_tray__part_0_y = right_tray__part_0_bounds[0].y + (right_tray__part_0_bounds[1].y - right_tray__part_0_bounds[0].y) / 2
                right_tray__part_0 = translate([-right_tray__part_0_x, -right_tray__part_0_y, 0], right_tray__part_0);
                right_tray__part_0 = rotate([0,0,0], right_tray__part_0);
                right_tray__part_0 = translate([right_tray__part_0_x, right_tray__part_0_y, 0], right_tray__part_0);

                right_tray__part_0 = translate([0,0,0], right_tray__part_0);
                let result = right_tray__part_0;
                
            

                // creating part 1 of case right_tray
                let right_tray__part_1 = _right_holes_case_fn();

                // make sure that rotations are relative
                let right_tray__part_1_bounds = right_tray__part_1.getBounds();
                let right_tray__part_1_x = right_tray__part_1_bounds[0].x + (right_tray__part_1_bounds[1].x - right_tray__part_1_bounds[0].x) / 2
                let right_tray__part_1_y = right_tray__part_1_bounds[0].y + (right_tray__part_1_bounds[1].y - right_tray__part_1_bounds[0].y) / 2
                right_tray__part_1 = translate([-right_tray__part_1_x, -right_tray__part_1_y, 0], right_tray__part_1);
                right_tray__part_1 = rotate([0,0,0], right_tray__part_1);
                right_tray__part_1 = translate([right_tray__part_1_x, right_tray__part_1_y, 0], right_tray__part_1);

                right_tray__part_1 = translate([0,0,0], right_tray__part_1);
                result = result.subtract(right_tray__part_1);
                
            

                // creating part 2 of case right_tray
                let right_tray__part_2 = _right_battery_mounts_case_fn();

                // make sure that rotations are relative
                let right_tray__part_2_bounds = right_tray__part_2.getBounds();
                let right_tray__part_2_x = right_tray__part_2_bounds[0].x + (right_tray__part_2_bounds[1].x - right_tray__part_2_bounds[0].x) / 2
                let right_tray__part_2_y = right_tray__part_2_bounds[0].y + (right_tray__part_2_bounds[1].y - right_tray__part_2_bounds[0].y) / 2
                right_tray__part_2 = translate([-right_tray__part_2_x, -right_tray__part_2_y, 0], right_tray__part_2);
                right_tray__part_2 = rotate([0,0,0], right_tray__part_2);
                right_tray__part_2 = translate([right_tray__part_2_x, right_tray__part_2_y, 0], right_tray__part_2);

                right_tray__part_2 = translate([0,0,0], right_tray__part_2);
                result = result.union(right_tray__part_2);
                
            

                // creating part 3 of case right_tray
                let right_tray__part_3 = _right_base_case_fn();

                // make sure that rotations are relative
                let right_tray__part_3_bounds = right_tray__part_3.getBounds();
                let right_tray__part_3_x = right_tray__part_3_bounds[0].x + (right_tray__part_3_bounds[1].x - right_tray__part_3_bounds[0].x) / 2
                let right_tray__part_3_y = right_tray__part_3_bounds[0].y + (right_tray__part_3_bounds[1].y - right_tray__part_3_bounds[0].y) / 2
                right_tray__part_3 = translate([-right_tray__part_3_x, -right_tray__part_3_y, 0], right_tray__part_3);
                right_tray__part_3 = rotate([0,0,0], right_tray__part_3);
                right_tray__part_3 = translate([right_tray__part_3_x, right_tray__part_3_y, 0], right_tray__part_3);

                right_tray__part_3 = translate([0,0,0], right_tray__part_3);
                result = result.union(right_tray__part_3);
                
            

                // creating part 4 of case right_tray
                let right_tray__part_4 = _right_legs_case_fn();

                // make sure that rotations are relative
                let right_tray__part_4_bounds = right_tray__part_4.getBounds();
                let right_tray__part_4_x = right_tray__part_4_bounds[0].x + (right_tray__part_4_bounds[1].x - right_tray__part_4_bounds[0].x) / 2
                let right_tray__part_4_y = right_tray__part_4_bounds[0].y + (right_tray__part_4_bounds[1].y - right_tray__part_4_bounds[0].y) / 2
                right_tray__part_4 = translate([-right_tray__part_4_x, -right_tray__part_4_y, 0], right_tray__part_4);
                right_tray__part_4 = rotate([0,0,0], right_tray__part_4);
                right_tray__part_4 = translate([right_tray__part_4_x, right_tray__part_4_y, 0], right_tray__part_4);

                right_tray__part_4 = translate([0,0,0], right_tray__part_4);
                result = result.subtract(right_tray__part_4);
                
            

                // creating part 5 of case right_tray
                let right_tray__part_5 = _right_feet_case_fn();

                // make sure that rotations are relative
                let right_tray__part_5_bounds = right_tray__part_5.getBounds();
                let right_tray__part_5_x = right_tray__part_5_bounds[0].x + (right_tray__part_5_bounds[1].x - right_tray__part_5_bounds[0].x) / 2
                let right_tray__part_5_y = right_tray__part_5_bounds[0].y + (right_tray__part_5_bounds[1].y - right_tray__part_5_bounds[0].y) / 2
                right_tray__part_5 = translate([-right_tray__part_5_x, -right_tray__part_5_y, 0], right_tray__part_5);
                right_tray__part_5 = rotate([0,0,0], right_tray__part_5);
                right_tray__part_5 = translate([right_tray__part_5_x, right_tray__part_5_y, 0], right_tray__part_5);

                right_tray__part_5 = translate([0,0,0], right_tray__part_5);
                result = result.subtract(right_tray__part_5);
                
            

                // creating part 6 of case right_tray
                let right_tray__part_6 = _right_wall_case_fn();

                // make sure that rotations are relative
                let right_tray__part_6_bounds = right_tray__part_6.getBounds();
                let right_tray__part_6_x = right_tray__part_6_bounds[0].x + (right_tray__part_6_bounds[1].x - right_tray__part_6_bounds[0].x) / 2
                let right_tray__part_6_y = right_tray__part_6_bounds[0].y + (right_tray__part_6_bounds[1].y - right_tray__part_6_bounds[0].y) / 2
                right_tray__part_6 = translate([-right_tray__part_6_x, -right_tray__part_6_y, 0], right_tray__part_6);
                right_tray__part_6 = rotate([0,0,0], right_tray__part_6);
                right_tray__part_6 = translate([right_tray__part_6_x, right_tray__part_6_y, 0], right_tray__part_6);

                right_tray__part_6 = translate([0,0,0], right_tray__part_6);
                result = result.union(right_tray__part_6);
                
            

                // creating part 7 of case right_tray
                let right_tray__part_7 = _right_rst_hole_case_fn();

                // make sure that rotations are relative
                let right_tray__part_7_bounds = right_tray__part_7.getBounds();
                let right_tray__part_7_x = right_tray__part_7_bounds[0].x + (right_tray__part_7_bounds[1].x - right_tray__part_7_bounds[0].x) / 2
                let right_tray__part_7_y = right_tray__part_7_bounds[0].y + (right_tray__part_7_bounds[1].y - right_tray__part_7_bounds[0].y) / 2
                right_tray__part_7 = translate([-right_tray__part_7_x, -right_tray__part_7_y, 0], right_tray__part_7);
                right_tray__part_7 = rotate([0,0,0], right_tray__part_7);
                right_tray__part_7 = translate([right_tray__part_7_x, right_tray__part_7_y, 0], right_tray__part_7);

                right_tray__part_7 = translate([0,0,8], right_tray__part_7);
                result = result.subtract(right_tray__part_7);
                
            

                // creating part 8 of case right_tray
                let right_tray__part_8 = _right_pwr_hole_case_fn();

                // make sure that rotations are relative
                let right_tray__part_8_bounds = right_tray__part_8.getBounds();
                let right_tray__part_8_x = right_tray__part_8_bounds[0].x + (right_tray__part_8_bounds[1].x - right_tray__part_8_bounds[0].x) / 2
                let right_tray__part_8_y = right_tray__part_8_bounds[0].y + (right_tray__part_8_bounds[1].y - right_tray__part_8_bounds[0].y) / 2
                right_tray__part_8 = translate([-right_tray__part_8_x, -right_tray__part_8_y, 0], right_tray__part_8);
                right_tray__part_8 = rotate([0,0,0], right_tray__part_8);
                right_tray__part_8 = translate([right_tray__part_8_x, right_tray__part_8_y, 0], right_tray__part_8);

                right_tray__part_8 = translate([0,0,8], right_tray__part_8);
                result = result.subtract(right_tray__part_8);
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_tray_case_fn();
            }

        