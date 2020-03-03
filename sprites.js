function sprite(img, x, y, w, h){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.draw=function(xcanvas, ycanvas){
        ctx.drawImage(img, this.x, this.y, this.w, this.h, xcanvas, ycanvas , this.w, this.h)
    }
}

//var characterSheet=new Image();characterSheet.src='char.png';

var sprite_char_right001=new Image();sprite_char_right001.src='char_right001.png';
var sprite_char_left001=new Image();sprite_char_left001.src='char_left001.png';
var zombie_walk_sheet = new Image(); zombie_walk_sheet.src='zombieSheetWalk.png'
var zombie_walk_sheet_invert= new Image();zombie_walk_sheet_invert.src='zombieSheetWalkInvert.png'
var floor= new Image();floor.src='floor.png';

var zombie_walk001= new sprite(zombie_walk_sheet, 4, 4, 39, 76);
var zombie_walk002= new sprite(zombie_walk_sheet, 49, 4, 44, 76);
var zombie_walk003= new sprite(zombie_walk_sheet, 96, 4, 46, 76);
var zombie_walk004= new sprite(zombie_walk_sheet, 152, 4, 38, 76);
var zombie_walk005= new sprite(zombie_walk_sheet, 201, 4, 38, 76);
var zombie_walk006= new sprite(zombie_walk_sheet, 239, 4, 38, 76);
var zombie_walk007= new sprite(zombie_walk_sheet_invert, 7, 4, 40, 76);
var zombie_walk008= new sprite(zombie_walk_sheet_invert, 47, 4, 38, 76);
var zombie_walk009= new sprite(zombie_walk_sheet_invert, 92, 5, 40, 75);
var zombie_walk010= new sprite(zombie_walk_sheet_invert, 144, 6, 47, 74);
var zombie_walk011= new sprite(zombie_walk_sheet_invert, 192, 6, 46, 74);
var zombie_walk012= new sprite(zombie_walk_sheet_invert, 244, 6, 38, 74);