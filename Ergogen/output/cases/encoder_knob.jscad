function _encoder_outer_wall_extrude_11_outline_fn(){
    return CAG.circle({"center":[150.17741,-146.9934978],"radius":9})
.extrude({ offset: [0, 0, 11] });
}


function _encoder_inner_wall_extrude_11_outline_fn(){
    return CAG.circle({"center":[150.17741,-146.9934978],"radius":7.5})
.extrude({ offset: [0, 0, 11] });
}


function _encoder_center_support_extrude_5_3_outline_fn(){
    return new CSG.Path2D([[142.17741,-147.4434978],[158.17741,-147.4434978]]).appendPoint([158.17741,-146.5434978]).appendPoint([142.17741,-146.5434978]).appendPoint([142.17741,-147.4434978]).close().innerToCAG()
.extrude({ offset: [0, 0, 5.3] });
}


function _encoder_outer_wall_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[150.17741,-146.9934978],"radius":9})
.extrude({ offset: [0, 0, 1.5] });
}




                function _encoder_outer_case_fn() {
                    

                // creating part 0 of case _encoder_outer
                let _encoder_outer__part_0 = _encoder_outer_wall_extrude_11_outline_fn();

                // make sure that rotations are relative
                let _encoder_outer__part_0_bounds = _encoder_outer__part_0.getBounds();
                let _encoder_outer__part_0_x = _encoder_outer__part_0_bounds[0].x + (_encoder_outer__part_0_bounds[1].x - _encoder_outer__part_0_bounds[0].x) / 2
                let _encoder_outer__part_0_y = _encoder_outer__part_0_bounds[0].y + (_encoder_outer__part_0_bounds[1].y - _encoder_outer__part_0_bounds[0].y) / 2
                _encoder_outer__part_0 = translate([-_encoder_outer__part_0_x, -_encoder_outer__part_0_y, 0], _encoder_outer__part_0);
                _encoder_outer__part_0 = rotate([0,0,0], _encoder_outer__part_0);
                _encoder_outer__part_0 = translate([_encoder_outer__part_0_x, _encoder_outer__part_0_y, 0], _encoder_outer__part_0);

                _encoder_outer__part_0 = translate([0,0,0], _encoder_outer__part_0);
                let result = _encoder_outer__part_0;
                
            
                    return result;
                }
            
            

                function _encoder_inner_case_fn() {
                    

                // creating part 0 of case _encoder_inner
                let _encoder_inner__part_0 = _encoder_inner_wall_extrude_11_outline_fn();

                // make sure that rotations are relative
                let _encoder_inner__part_0_bounds = _encoder_inner__part_0.getBounds();
                let _encoder_inner__part_0_x = _encoder_inner__part_0_bounds[0].x + (_encoder_inner__part_0_bounds[1].x - _encoder_inner__part_0_bounds[0].x) / 2
                let _encoder_inner__part_0_y = _encoder_inner__part_0_bounds[0].y + (_encoder_inner__part_0_bounds[1].y - _encoder_inner__part_0_bounds[0].y) / 2
                _encoder_inner__part_0 = translate([-_encoder_inner__part_0_x, -_encoder_inner__part_0_y, 0], _encoder_inner__part_0);
                _encoder_inner__part_0 = rotate([0,0,0], _encoder_inner__part_0);
                _encoder_inner__part_0 = translate([_encoder_inner__part_0_x, _encoder_inner__part_0_y, 0], _encoder_inner__part_0);

                _encoder_inner__part_0 = translate([0,0,0], _encoder_inner__part_0);
                let result = _encoder_inner__part_0;
                
            
                    return result;
                }
            
            

                function _encoder_support_case_fn() {
                    

                // creating part 0 of case _encoder_support
                let _encoder_support__part_0 = _encoder_center_support_extrude_5_3_outline_fn();

                // make sure that rotations are relative
                let _encoder_support__part_0_bounds = _encoder_support__part_0.getBounds();
                let _encoder_support__part_0_x = _encoder_support__part_0_bounds[0].x + (_encoder_support__part_0_bounds[1].x - _encoder_support__part_0_bounds[0].x) / 2
                let _encoder_support__part_0_y = _encoder_support__part_0_bounds[0].y + (_encoder_support__part_0_bounds[1].y - _encoder_support__part_0_bounds[0].y) / 2
                _encoder_support__part_0 = translate([-_encoder_support__part_0_x, -_encoder_support__part_0_y, 0], _encoder_support__part_0);
                _encoder_support__part_0 = rotate([0,0,0], _encoder_support__part_0);
                _encoder_support__part_0 = translate([_encoder_support__part_0_x, _encoder_support__part_0_y, 0], _encoder_support__part_0);

                _encoder_support__part_0 = translate([0,0,0], _encoder_support__part_0);
                let result = _encoder_support__part_0;
                
            
                    return result;
                }
            
            

                function _encoder_base_case_fn() {
                    

                // creating part 0 of case _encoder_base
                let _encoder_base__part_0 = _encoder_outer_wall_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _encoder_base__part_0_bounds = _encoder_base__part_0.getBounds();
                let _encoder_base__part_0_x = _encoder_base__part_0_bounds[0].x + (_encoder_base__part_0_bounds[1].x - _encoder_base__part_0_bounds[0].x) / 2
                let _encoder_base__part_0_y = _encoder_base__part_0_bounds[0].y + (_encoder_base__part_0_bounds[1].y - _encoder_base__part_0_bounds[0].y) / 2
                _encoder_base__part_0 = translate([-_encoder_base__part_0_x, -_encoder_base__part_0_y, 0], _encoder_base__part_0);
                _encoder_base__part_0 = rotate([0,0,0], _encoder_base__part_0);
                _encoder_base__part_0 = translate([_encoder_base__part_0_x, _encoder_base__part_0_y, 0], _encoder_base__part_0);

                _encoder_base__part_0 = translate([0,0,0], _encoder_base__part_0);
                let result = _encoder_base__part_0;
                
            
                    return result;
                }
            
            

                function encoder_knob_case_fn() {
                    

                // creating part 0 of case encoder_knob
                let encoder_knob__part_0 = _encoder_outer_case_fn();

                // make sure that rotations are relative
                let encoder_knob__part_0_bounds = encoder_knob__part_0.getBounds();
                let encoder_knob__part_0_x = encoder_knob__part_0_bounds[0].x + (encoder_knob__part_0_bounds[1].x - encoder_knob__part_0_bounds[0].x) / 2
                let encoder_knob__part_0_y = encoder_knob__part_0_bounds[0].y + (encoder_knob__part_0_bounds[1].y - encoder_knob__part_0_bounds[0].y) / 2
                encoder_knob__part_0 = translate([-encoder_knob__part_0_x, -encoder_knob__part_0_y, 0], encoder_knob__part_0);
                encoder_knob__part_0 = rotate([0,0,0], encoder_knob__part_0);
                encoder_knob__part_0 = translate([encoder_knob__part_0_x, encoder_knob__part_0_y, 0], encoder_knob__part_0);

                encoder_knob__part_0 = translate([0,0,0], encoder_knob__part_0);
                let result = encoder_knob__part_0;
                
            

                // creating part 1 of case encoder_knob
                let encoder_knob__part_1 = _encoder_inner_case_fn();

                // make sure that rotations are relative
                let encoder_knob__part_1_bounds = encoder_knob__part_1.getBounds();
                let encoder_knob__part_1_x = encoder_knob__part_1_bounds[0].x + (encoder_knob__part_1_bounds[1].x - encoder_knob__part_1_bounds[0].x) / 2
                let encoder_knob__part_1_y = encoder_knob__part_1_bounds[0].y + (encoder_knob__part_1_bounds[1].y - encoder_knob__part_1_bounds[0].y) / 2
                encoder_knob__part_1 = translate([-encoder_knob__part_1_x, -encoder_knob__part_1_y, 0], encoder_knob__part_1);
                encoder_knob__part_1 = rotate([0,0,0], encoder_knob__part_1);
                encoder_knob__part_1 = translate([encoder_knob__part_1_x, encoder_knob__part_1_y, 0], encoder_knob__part_1);

                encoder_knob__part_1 = translate([0,0,0], encoder_knob__part_1);
                result = result.subtract(encoder_knob__part_1);
                
            

                // creating part 2 of case encoder_knob
                let encoder_knob__part_2 = _encoder_support_case_fn();

                // make sure that rotations are relative
                let encoder_knob__part_2_bounds = encoder_knob__part_2.getBounds();
                let encoder_knob__part_2_x = encoder_knob__part_2_bounds[0].x + (encoder_knob__part_2_bounds[1].x - encoder_knob__part_2_bounds[0].x) / 2
                let encoder_knob__part_2_y = encoder_knob__part_2_bounds[0].y + (encoder_knob__part_2_bounds[1].y - encoder_knob__part_2_bounds[0].y) / 2
                encoder_knob__part_2 = translate([-encoder_knob__part_2_x, -encoder_knob__part_2_y, 0], encoder_knob__part_2);
                encoder_knob__part_2 = rotate([0,0,0], encoder_knob__part_2);
                encoder_knob__part_2 = translate([encoder_knob__part_2_x, encoder_knob__part_2_y, 0], encoder_knob__part_2);

                encoder_knob__part_2 = translate([0,0,0], encoder_knob__part_2);
                result = result.union(encoder_knob__part_2);
                
            

                // creating part 3 of case encoder_knob
                let encoder_knob__part_3 = _encoder_base_case_fn();

                // make sure that rotations are relative
                let encoder_knob__part_3_bounds = encoder_knob__part_3.getBounds();
                let encoder_knob__part_3_x = encoder_knob__part_3_bounds[0].x + (encoder_knob__part_3_bounds[1].x - encoder_knob__part_3_bounds[0].x) / 2
                let encoder_knob__part_3_y = encoder_knob__part_3_bounds[0].y + (encoder_knob__part_3_bounds[1].y - encoder_knob__part_3_bounds[0].y) / 2
                encoder_knob__part_3 = translate([-encoder_knob__part_3_x, -encoder_knob__part_3_y, 0], encoder_knob__part_3);
                encoder_knob__part_3 = rotate([0,0,0], encoder_knob__part_3);
                encoder_knob__part_3 = translate([encoder_knob__part_3_x, encoder_knob__part_3_y, 0], encoder_knob__part_3);

                encoder_knob__part_3 = translate([0,0,0], encoder_knob__part_3);
                result = result.union(encoder_knob__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return encoder_knob_case_fn();
            }

        