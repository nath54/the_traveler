canvas=document.getElementById("canvas");
context=canvas.getContext("2d");

tex=1280;
tey=720;

//GET IMAGES
is1=document.getElementById("is1");
is2=document.getElementById("is2");
is3=document.getElementById("is3");
is4=document.getElementById("is4");
is5=document.getElementById("is5");
is6=document.getElementById("is6");
is7=document.getElementById("is7");
is8=document.getElementById("is8");
is9=document.getElementById("is9");
is10=document.getElementById("is10");
is11=document.getElementById("is11");
is12=document.getElementById("is12");
is13=document.getElementById("is13");
is14=document.getElementById("is14");
is15=document.getElementById("is15");
is16=document.getElementById("is16");
is17=document.getElementById("is17");
is18=document.getElementById("is18");
is19=document.getElementById("is19");
is20=document.getElementById("is20");
is31=document.getElementById("is31");
is32=document.getElementById("is32");
is33=document.getElementById("is33");
is34=document.getElementById("is34");
is35=document.getElementById("is35");
is36=document.getElementById("is36");
is37=document.getElementById("is37");
is38=document.getElementById("is38");

im1=document.getElementById("im1");
im2=document.getElementById("im2");
im3=document.getElementById("im3");
im4=document.getElementById("im4");
im5=document.getElementById("im5");
im6=document.getElementById("im6");
im7=document.getElementById("im7");
im8=document.getElementById("im8");
im9=document.getElementById("im9");
im10=document.getElementById("im10");
im11=document.getElementById("im11");
im12=document.getElementById("im12");
im13=document.getElementById("im13");
im14=document.getElementById("im14");
im15=document.getElementById("im15");
im16=document.getElementById("im16");
im17=document.getElementById("im17");
im18=document.getElementById("im18");
im19=document.getElementById("im19");
im20=document.getElementById("im20");
im21=document.getElementById("im21");
im22=document.getElementById("im22");
im23=document.getElementById("im23");
im24=document.getElementById("im24");
im25=document.getElementById("im25");
im26=document.getElementById("im26");
im27=document.getElementById("im27");
im28=document.getElementById("im28");
im29=document.getElementById("im29");
im30=document.getElementById("im30");
im31=document.getElementById("im31");
im32=document.getElementById("im32");
im33=document.getElementById("im33");
im34=document.getElementById("im34");
im35=document.getElementById("im35");
im36=document.getElementById("im36");
im37=document.getElementById("im37");
im38=document.getElementById("im38");
im39=document.getElementById("im39");
im40=document.getElementById("im40");
im41=document.getElementById("im41");
im42=document.getElementById("im42");
im43=document.getElementById("im43");
im44=document.getElementById("im44");
im45=document.getElementById("im45");
im46=document.getElementById("im46");
im47=document.getElementById("im47");
im48=document.getElementById("im48");
im49=document.getElementById("im49");
im50=document.getElementById("im50");
im51=document.getElementById("im51");
im52=document.getElementById("im52");
im53=document.getElementById("im53");
im54=document.getElementById("im54");
im55=document.getElementById("im55");
im56=document.getElementById("im56");
im57=document.getElementById("im57");
im58=document.getElementById("im58");
im59=document.getElementById("im59");
im60=document.getElementById("im60");
im61=document.getElementById("im61");
im62=document.getElementById("im62");
im63=document.getElementById("im63");
im64=document.getElementById("im64");
im65=document.getElementById("im65");
im66=document.getElementById("im66");
im67=document.getElementById("im67");
im68=document.getElementById("im68");
im69=document.getElementById("im69");
im70=document.getElementById("im70");

p1a1=document.getElementById("p1_a1");
p1a2=document.getElementById("p1_a2");
p1a3=document.getElementById("p1_a3");
p1a4=document.getElementById("p1_a4");
p1a5=document.getElementById("p1_a5");
p1a6=document.getElementById("p1_a6");
p1a7=document.getElementById("p1_a7");
p1b1=document.getElementById("p1_b1");
p1b2=document.getElementById("p1_b2");
p1b3=document.getElementById("p1_b3");
p1b4=document.getElementById("p1_b4");
p1b5=document.getElementById("p1_b5");
p1b6=document.getElementById("p1_b6");
p1b7=document.getElementById("p1_b7");
p1b8=document.getElementById("p1_b8");
p1c1=document.getElementById("p1_c1");
p1c2=document.getElementById("p1_c2");
p1c3=document.getElementById("p1_c3");
p1c4=document.getElementById("p1_c4");
p1c5=document.getElementById("p1_c5");
p1c6=document.getElementById("p1_c6");
p1c7=document.getElementById("p1_c7");
p1c8=document.getElementById("p1_c8");
p1c9=document.getElementById("p1_c9");
p1d1=document.getElementById("p1_d1");
p1d2=document.getElementById("p1_d2");
p1d3=document.getElementById("p1_d3");
p1d4=document.getElementById("p1_d4");
p1d5=document.getElementById("p1_d5");
p1d6=document.getElementById("p1_d6");
p1e1=document.getElementById("p1_e1");
p1e2=document.getElementById("p1_e2");
p1e3=document.getElementById("p1_e3");
p1e4=document.getElementById("p1_e4");
p1e5=document.getElementById("p1_e5");
p1e6=document.getElementById("p1_e6");
p1e7=document.getElementById("p1_e7");
p1e8=document.getElementById("p1_e8");
p1e9=document.getElementById("p1_e9");
p1e10=document.getElementById("p1_e10");
p1e11=document.getElementById("p1_e11");
p1e12=document.getElementById("p1_e12");
p1e13=document.getElementById("p1_e13");
p1f1=document.getElementById("p1_f1");
p1f2=document.getElementById("p1_f2");
p1f3=document.getElementById("p1_f3");
p1f4=document.getElementById("p1_f4");
p1f5=document.getElementById("p1_f5");
p1f6=document.getElementById("p1_f6");

p2a1=document.getElementById("p2_a1");
p2a2=document.getElementById("p2_a2");
p2a3=document.getElementById("p2_a3");
p2a4=document.getElementById("p2_a4");
p2a5=document.getElementById("p2_a5");
p2a6=document.getElementById("p2_a6");
p2a7=document.getElementById("p2_a7");
p2b1=document.getElementById("p2_b1");
p2b2=document.getElementById("p2_b2");
p2b3=document.getElementById("p2_b3");
p2b4=document.getElementById("p2_b4");
p2b5=document.getElementById("p2_b5");
p2b6=document.getElementById("p2_b6");
p2c1=document.getElementById("p2_c1");
p2c2=document.getElementById("p2_c2");
p2c3=document.getElementById("p2_c3");
p2c4=document.getElementById("p2_c4");
p2c5=document.getElementById("p2_c5");
p2c6=document.getElementById("p2_c6");
p2c7=document.getElementById("p2_c7");
p2c8=document.getElementById("p2_c8");
p2c9=document.getElementById("p2_c9");
p2f1=document.getElementById("p2_f1");
p2f2=document.getElementById("p2_f2");
p2f3=document.getElementById("p2_f3");
p2f4=document.getElementById("p2_f4");
p2f5=document.getElementById("p2_f5");
p2f6=document.getElementById("p2_f6");



//ELEMENTS MAPE

const emape=[
[0,"dirt_full",is1],
[0,"black_cobalt_7",is2],
[0,"acidic_floor_0",is3],
[0,"bog_green_1",is4],
[0,"cage_1",is5],
[0,"cobble_blood_1",is6],
[0,"crypt_10",is7],
[0,"crypt_domino_2a",is8],
[0,"crystal_floor_0",is9],
[0,"demonic_red_1",is10],
[0,"dirt_0",is11],
[0,"etched_0",is12],
[0,"floor_nerves_0",is13],
[0,"floor_sand_rock_0",is14],
[0,"floor_vines_0",is15],
[0,"frozen_0",is16],
[0,"green_bones_1",is17],
[0,"hive_0",is18],
[0,"ice_0",is19],
[0,"infernal_1",is20],
[0,"labyrinth_0",is21],
[0,"lair_0",is22],
[0,"lava_0",is23],
[0,"mesh_0",is24],
[0,"mosaic_0",is25],
[0,"mud_0",is26],
[0,"moss_0",is27],
[0,"orc_0",is28],
[0,"pebble_brown_0",is29],
[0,"pedestal_full",is30],
[0,"rect_gray_0",is31],
[0,"rough_red_0",is32],
[0,"sand_1",is33],
[0,"sandstone_floor_0",is34],
[0,"swamp_0",is35],
[0,"tomb_0",is36],
[0,"volcanic_floor_0",is37],
[0,"white_marble_0",is38],

[1,"catacombe0",im1],
[1,"bars_red_1",im2],
[1,"beehives_0",im3],
[1,"brick_brown_0",im4],
[1,"brick_brown-vines_1",im5],
[1,"brick_dark_0",im6],
[1,"catacombs_15",im7],
[1,"church_0",im8],
[1,"cobalt_rock_1",im9],
[1,"cobalt_stone_1",im10],
[1,"crystal_wall_0",im11],
[1,"crystal_wall_lightblue",im12],
[1,"crystal_wall_lightcyan",im13],
[1,"crystal_wall_lightgray",im14],
[1,"crystal_wall_lightgreen",im15],
[1,"crystal_wall_lightmagenta",im16],
[1,"crystal_wall_lightred",im17],
[1,"crystal_wall_magenta",im18],
[1,"crystal_wall_red",im19],
[1,"crystal_wall_white",im20],
[1,"crystal_wall_yellow",im21],
[1,"emerald_1",im22],
[1,"green_crystal_wall",im23],
[1,"hell_1",im24],
[1,"hive_0",im25],
[1,"lab-metal_0",im26],
[1,"lab-rock_0",im27],
[1,"lab-stone_0",im28],
[1,"lair_0_new",im29],
[1,"marble_wall_1",im30],
[1,"metal_wall",im31],
[1,"metal_wall_brown",im32],
[1,"metal_wall_cracked",im33],
[1,"metal_wall_white_0",im34],
[1,"mirrored_wall_new",im35],
[1,"orc_0",im36],
[1,"pebble_red_0_new",im37],
[1,"permarock_clear_red_0",im38],
[1,"permarock_red_0",im39],
[1,"relief_0",im40],
[1,"relief_brown_0",im41],
[1,"sandstone_wall_0",im42],
[1,"shoals_wall_1",im43],
[1,"silver_wall",im44],
[1,"slime_0_new",im45],
[1,"slime_stone_0",im46],
[1,"snake_0",im47],
[1,"stone_2_brown_0",im48],
[1,"stone_2_dark_0",im49],
[1,"stone_2_gray_0",im50],
[1,"stone_black_marked_0",im51],
[1,"stone_brick_1",im52],
[1,"stone_dark_0",im53],
[1,"stone_gray_0",im54],
[1,"stone2_brown_2_new",im55],
[1,"stone2_dark_2_new",im56],
[1,"stone2_gray_2_new",im57],
[1,"tomb_0",im58],
[1,"transparent_flesh",im59],
[1,"transparent_stone",im60],
[1,"transparent_wall_new",im61],
[1,"undead_0",im62],
[1,"undead_brown_0",im63],
[1,"vault_0",im64],
[1,"volcanic_wall_0",im65],
[1,"wall_flesh_0",im66],
[1,"wall_vines_0",im67],
[1,"wall_yellow_rock_0",im68],
[1,"wax_wall_new",im69],
[1,"zot_blue_0_new",im70]

];

var mape=[
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

function Map(nom){this.terrain=mape;
}

var map=new Map("mape");




keys=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "];
kpress=[false       ,   false           ,false           , false             , false];

tc=32
cam=[0,0]


//0=nom , 1=vie , 2=mana , 3=degats , 4=portee , 5=t regen vie , 6=t regen mana , 7=t att, 8=vitesse , 9=dist reconnaitre ennemis , 10=esquive , 11=defense , 12=anims 
var prs=[
["Yui",100,100,[1,7],tc,500,500,500,3,100,80,1,[ [p1a1,p1a2,p1a3,p1a4,p1a5,p1a6,p1a7] , [p1b1,p1b2,p1b3,p1b4,p1b5,p1b6,p1b7,p1b8] , [p1c1,p1c2,p1c3,p1c4,p1c5,p1c6,p1c7,p1c8,p1c9] , [p1d1,p1d2,p1d3,p1d4,p1d5,p1d6] , [p1e1,p1e2,p1e3,p1e4,p1e5,p1e6,p1e7,p1e8,p1e9,p1e10,p1e11,p1e12,p1e13] , [p1f1,p1f2,p1f3,p1f4,p1f5,p1f6] , [p1a1] ] ],
["Squelette",20,0,[1,5],tc,1000,1000,600,3,65,90,0,[ [p2a1,p2a2,p2a3,p2a4,p2a5,p2a6,p2a7] , [p2b1,p2b2,p2b3,p2b4,p2b5,p2b6] , [p2c1,p2c2,p2c3,p2c4,p2c5,p2c6,p2c7,p2c8,p2c9] , [p2b1,p2b2,p2b3,p2b4,p2b5,p2b6] , [p2b1,p2b2,p2b3,p2b4,p2b5,p2b6] , [p2f1,p2f2,p2f3,p2f4,p2f5,p2f6] , [p2a1] ] ]
];

function int(n){ return parseInt(n); }

function randomchoice(lst){ return lst[int(Math.random()*lst.length)]; }

function range(start, end) {
    var lst = [];
    for ( i = start; i <= end; i++) lst.push(i);
    return lst;
}

function rcollision( r1 , r2 ){
    x1=r1[0];
    y1=r1[1];
    tx1=r1[2];
    ty1=r1[3]
    x2=r2[0];
    y2=r2[1];
    tx2=r2[2];
    ty2=r2[3];
    cx=false;
    cy=false;
    if( x1 >= x2 && x1 <= x2+tx2) cx=true
    if( x1+tx1 >= x2 && x1+tx1 <= x2+tx2) cx=true
    if( y1 >= y2 && y1 <= y2+ty2) cy=true
    if( y1+ty1 >= y2 && y1+ty1 <= y2+ty2) cy=true
    return cx&&cy
}


function affichage(mape,perso,bots){
        mape=map.terrain;
        context.fillStyle=" rgb(0,0,0) ";
        context.fillRect(0,0,tex,tey);
        for( x of range( int(-cam[0]/tc) , int((-cam[0]+tex)/tc) ) ){
                for( y of range( int(-cam[1]/tc) , int((-cam[1]+tey)/tc) ) ){
                        if( x>=0 && y>=0 && x<mape[0].length && y<mape.length){
                                m=mape[y][x];
                                context.drawImage( emape[m][2] , cam[0]+x*tc, cam[1]+y*tc, tc, tc);
                        }
                }
        }
        for(x=0 ; x<bots.length ; x++){
            var ee=bots[x];
            var e = ee.p;
            try{
                context.drawImage( e.img , 0 , 64*e.sens , 64 ,64, cam[0]+e.px , cam[1]+e.py , e.tx, e.ty);
                //vie de l'ennemie:
                if( e.vie < e.vie_tot ){
                    context.fillStyle = "rgb(200,0,0)";
                    context.strokeStyle = " rgb(20,0,0) ";
                    if( e.vie > 0){
                        context.fillRect( cam[0]+e.px, cam[1]+e.py-10, int(e.vie/e.vie_tot*e.tx), 5 );
                        context.strokeRect( cam[0]+e.px, cam[1]+e.py-10, e.tx, 5);
                    }
                }
            }
            catch{
            }
        }
        context.drawImage( perso.img , 0 ,64*perso.sens ,64 ,64 , cam[0]+perso.px , cam[1]+perso.py , perso.tx, perso.ty);
        //vie du personnage:
        context.fillStyle = "rgb(200,0,0)";
        context.strokeStyle = " rgb(20,0,0) ";
        if( perso.vie>0 ) context.fillRect( 15, 15, int(perso.vie/perso.vie_tot*200), 20 );
        context.strokeRect( 15, 15, 200, 20);
        //mana du personnage:
        context.fillStyle = "rgb(0,100,200)";
        context.strokeStyle = " rgb(0,0,20) ";
        if( perso.mana>0 ) context.fillRect( 15, 40, int(perso.mana/perso.mana_tot*200), 5 );
        context.strokeRect( 15, 40, 200, 5);
}

function getCollisionWithMap(perso){
        iscollision=false;
        for( x of range(int(perso.px/tc)-1,int(perso.px/tc)+1) ){
            for( y of range(int(perso.py/tc)-1,int(perso.py/tc)+1) ){
                m=map.terrain[x][y];
                if( emape[m][0] == 1 ){
                    if( rcollision( (perso.px,perso.py,perso.tx,perso.ty) , (x*tc,y*tc,tc,tc) ) ){
                        iscollision=true;
                    }
                }
            }
        }
        return iscollision;
}

function dist( p1,p2){ return Math.sqrt( Math.pow( (p1[0]-p2[0]),2) + Math.pow((p1[1]-p2[1]),2) ); }

function getEnemiesTouches(perso,enemies,pr){
        px=perso.px+perso.tx/2;
        py=perso.py+perso.ty/2;
        lst=[];
        for( e of enemies ){
            if( dist([px,py],[e.px+e.tx/2,e.py+e.ty/2]) < perso.portee && perso.tipe != e.tipe && e.vie>0){
                    lst.push( e );
            }
        }
        if( dist([px,py],[pr.px+pr.tx/2,pr.py+pr.ty/2]) < perso.portee && perso.tipe!=pr.tipe && pr.vie>0){
            lst.push( pr );
        }
        return lst;
}

class Perso{
        constructor(px,py,tp,isia,tipe,prs,isimo){
                var dt=new Date();
                //location
                this.px=px;
                this.py=py;
                this.tx=tc;
                this.ty=tc;
                //mouvement
                this.vit=prs[tp][8];
                //time
                this.t=1;
                this.mort=false;
                this.tk=1;
                this.dbg=dt.getTime();
                this.dkup=dt.getTime();
                this.dkdown=dt.getTime();
                this.dkleft=dt.getTime();
                this.dkright=dt.getTime();
                this.dregen_vie=dt.getTime();
                this.dregen_mana=dt.getTime();
                this.tregen_vie=prs[tp][5];
                this.tregen_mana=prs[tp][6];
                this.datt=dt.getTime();
                this.dupdate=dt.getTime();
                this.dan=dt.getTime();
                this.tanim=100;
                //keys
                this.kup="ArrowUp";
                this.kdown="ArrowDown";
                this.kleft="ArrowLeft";
                this.kright="ArrowRight";
                this.katt=" ";
                //data
                this.tp=tp;
                this.tipe=tipe;  //0=gentil , 1=neutre , 2=méchant 
                this.isia=isia;
                this.nom=prs[tp][0];
                this.vie_tot=prs[tp][1];
                this.vie=this.vie_tot;
                this.mana_tot=prs[tp][2];
                this.mana=this.mana_tot;
                this.degats=prs[tp][3];
                this.portee=prs[tp][4];
                this.tatt=prs[tp][7];
                this.esquive=prs[tp][10];
                this.dist_reco_en=prs[tp][9];
                this.def=prs[tp][11];
                this.is_imobil=isimo; // pour les bots ( si le bot bouge ou pas )
                //images
                this.sens=0;
                var anims=prs[tp][12];
                this.an_1=anims[0];
                this.an_2=anims[1];
                this.an_3=anims[2];
                this.an_4=anims[3];
                this.an_5=anims[4];
                this.an_6=anims[5];
                this.an_7=anims[6];
                this.imgs=this.an_7;
                this.an=0;
                this.img=this.imgs[this.an];
        }
        bouger(aa,enemies,perso){
            if( !this.mort){
                var dt=new Date();
                if(aa==this.kup && dt.getTime()-this.dkup>=this.tk){
                        this.dkup=dt.getTime();
                        this.py-=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.py+=this.vit;
                        this.sens=0;
                        if( this.imgs != this.an_3 && this.imgs!=this.an_4 && this.imgs!=this.an_5 ){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.kdown && dt.getTime()-this.dkdown>=this.tk){
                        this.dkdown=dt.getTime();
                        this.py+=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.py-=this.vit;
                        this.sens=2;
                        if( this.imgs != this.an_3 && this.imgs!=this.an_4 && this.imgs!=this.an_5 ){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.kleft && dt.getTime()-this.dkleft>=this.tk){
                        this.dkleft=dt.getTime();
                        this.px-=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.px+=this.vit;
                        this.sens=1;
                        if( this.imgs != this.an_3  && this.imgs!=this.an_4 && this.imgs!=this.an_5){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.kright && dt.getTime()-this.dkright>=this.tk){
                        this.dkright=dt.getTime();
                        this.px+=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.px-=this.vit;
                        this.sens=3;
                        if( this.imgs != this.an_3 && this.imgs!=this.an_4  && this.imgs!=this.an_5){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.katt && dt.getTime()-this.datt>=this.tatt){
                        this.datt=dt.getTime();
                        var len=getEnemiesTouches(this,enemies,perso);
                        var dgts=this.degats[0]+int(Math.random()*(this.degats[1]-this.degats[0]));
                        for( var l of len ){
                                aa=int(Math.random()*100);
                                if( aa <= l.esquive && l.def<dgts){
                                    l.vie-=dgts-l.def;
                                }
                                break;
                        }
                        if( this.imgs!=this.an_4){
                            this.imgs=this.an_4;
                            this.an=0;
                        }
                }
            }
        }
        update(enemies,perso){
                var dt=new Date();
                if( !this.mort && this.vie<0 ){
                    this.mort=true;
                    this.sens=0;
                    this.imgs=this.an_6;
                    this.an=0;
                }
                if( dt.getTime()-this.dan>=this.tanim){
                    this.dan=dt.getTime();
                    if( !this.mort || this.an<this.imgs.length-1) this.an+=1;
                    if( this.an>=this.imgs.length ){
                        this.an=0;
                        if( this.imgs!=this.an_7 && this.imgs!=this.an_6) this.imgs=this.an_7;
                    }
                    this.img=this.imgs[this.an];
                }
                if( !this.mort && dt.getTime()-this.dupdate>=this.t){
                        this.dupdate=dt.getTime();
                        if( this.px < 0 ) this.px=0;
                        if( this.py < 0 ) this.py=0;
                        if( this.px > tex-this.tx ) this.px=tex-this.tx
                        if( this.py > tey-this.ty ) this.py=tey-this.ty
                        if( this.vie<this.vie_tot && dt.getTime()-this.dregen_vie>=this.tregen_vie){
                            this.vie+=1;
                            this.dregen_vie=dt.getTime();
                        }
                        if( this.mana<this.mana_tot && dt.getTime()-this.dregen_mana>=this.tregen_mana){
                            this.mana+=1;
                            this.dregen_mana=dt.getTime();
                        }
                }
            //partie bot
            if( this.isia ){
                if( this.tipe == 2 && perso.vie>0){
                    var px=perso.px+perso.tx/2;
                    var py=perso.py+perso.ty/2;
                    var mx=this.px+this.tx/2;
                    var my=this.py+this.ty/2;
                    var dd=dist([px,py],[mx,my])
                    if( dd <= this.dist_reco_en ){
                        if( dd <= this.portee ){
                            this.bouger(" ",enemies,perso);
                        }
                        else{
                            bouger_ia( this , [this.px,this.py] , [px,py] , enemies , perso );
                        }
                    }
                }
                if( !this.is_imobil ){
                    var mvs=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];
                    var mvp=[0,1,2,3];
                    for( x=0 ; x==20 ; x++ ) mvp.push( this.sens );
                    var m=randomchoice(mvp);
                    this.bouger( mvs,enemies,perso );
                }
        }
        }
}

function bouger_ia( b , p1 , p2 , enemies ,perso){ //p1=position du bot , p2=position de la cible
    if( true ){
        if( p1[0] < p2[0] ) b.bouger( "ArrowRight" ,enemies,perso);
        else if( p1[0] > p2[0] ) b.bouger("ArrowLeft",enemies,perso);
        if( p1[1] < p2[1] ) b.bouger("ArrowDown",enemies,perso);
        else if( p1[1] > p2[1] ) b.bouger("ArrowUp",enemies,perso);
    }
}

class Bot{
    constructor(p){
        this.p=p;
    }
}

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    kpress[ keys.indexOf(nomTouche) ] = true;
}, false);

document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    kpress[ keys.indexOf(nomTouche) ] = false;
}, false);

function main(){
        perso=new Perso(400,450,0,false,0,prs,false);
        mape=new Map();
        var enemies=[];
        var bots=[];
        
        for( x=0 ; x<10 ; x++ ){
            var rx=100+Math.random()*500;
            var ry=100+Math.random()*500;
            e=new Perso(rx,ry,1,true,2,prs,false);
            enemies.push( e );
            bb=new Bot(enemies[x]);
            bots.push( bb );
        }
        
        encour=true;

        function mainboucle(){
                perso.update(enemies,perso);
                for(x=0;x<keys.length;x++){
                        if( kpress[x] ){
                            perso.bouger( keys[x] , enemies , perso);
                        }
                }
                for ( var b of bots ){
                    b.p.update(enemies,perso);
                }
                cam=[-perso.px+tex/2,-perso.py+tey/2];
                affichage(mape,perso,bots);
                if(encour) window.requestAnimationFrame(mainboucle);
        }
        window.requestAnimationFrame(mainboucle);
}


main()

