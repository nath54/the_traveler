#coding:utf-8

import random , pygame , time , os , numpy
from pygame.locals import *

pygame.init()

tex,tey=1200,720
fenetre=pygame.display.set_mode([tex,tey])
font=pygame.font.SysFont("Arial",20)

pygame.key.set_repeat( 40 , 30 )

emape=["images/sols/dirt_full_new.png","images/sols/black_cobalt_7.png","images/sols/acidic_floor_0.png","images/sols/bog_green_1_new.png","images/sols/cage_1.png","images/sols/cobble_blood_1_new.png","images/sols/crypt_10.png" ,"images/sols/crypt_domino_2a.png" ,"images/sols/crystal_floor_0.png" ,"images/sols/demonic_red_1.png" ,"images/sols/dirt_0_new.png" ,"images/sols/etched_0.png" ,"images/sols/floor_nerves_0.png" ,"images/sols/floor_sand_rock_0.png" ,"images/sols/floor_vines_0_new.png" ,"images/sols/frozen_0.png" ,"images/sols/green_bones_1.png" ,"images/sols/hive_0.png" ,"images/sols/ice_0_new.png" ,"images/sols/infernal_1.png" ,"images/sols/labyrinth_0.png" ,"images/sols/lair_0_new.png","images/sols/lava_0.png" ,"images/sols/mesh_0_new.png" ,"images/sols/mosaic_0.png" ,"images/sols/mud_0.png" ,"images/sols/moss_0.png" ,"images/sols/orc_0.png","images/sols/pebble_brown_0_new.png" ,"images/sols/pedestal_full.png" ,"images/sols/rect_gray_0_new.png" ,"images/sols/rough_red_0.png" ,"images/sols/sand_1.png" ,"images/sols/sandstone_floor_0.png" ,"images/sols/swamp_0_new.png" ,"images/sols/tomb_0_new.png" ,"images/sols/volcanic_floor_0.png" ,"images/sols/white_marble_0.png" ,"images/murs/catacombs_0.png" ,"images/murs/bars_red_1.png" ,"images/murs/beehives_0.png" ,"images/murs/brick_brown_0.png" ,"images/murs/brick_brown-vines_1.png" ,"images/murs/brick_dark_0.png" ,"images/murs/catacombs_15.png" ,"images/murs/church_0.png" ,"images/murs/cobalt_rock_1.png" ,"images/murs/cobalt_stone_1.png" ,"images/murs/crystal_wall_0.png" ,"images/murs/crystal_wall_lightblue.png" ,"images/murs/crystal_wall_lightcyan.png" ,"images/murs/crystal_wall_lightgray.png" ,"images/murs/crystal_wall_lightgreen.png" ,"images/murs/crystal_wall_lightmagenta.png" ,"images/murs/crystal_wall_lightred.png" ,"images/murs/crystal_wall_magenta.png" ,"images/murs/crystal_wall_red.png" ,"images/murs/crystal_wall_white.png" ,"images/murs/crystal_wall_yellow.png" ,"images/murs/emerald_1.png" ,"images/murs/green_crystal_wall.png" ,"images/murs/hell_1.png" ,"images/murs/hive_0.png" ,"images/murs/lab-metal_0.png" ,"images/murs/lab-rock_0.png" ,"images/murs/lab-stone_0.png" ,"images/murs/lair_0_new.png" ,"images/murs/marble_wall_1.png" ,"images/murs/metal_wall.png" ,"images/murs/metal_wall_brown.png","images/murs/metal_wall_cracked.png" ,"images/murs/metal_wall_white_0.png" ,"images/murs/mirrored_wall_new.png" ,"images/murs/orc_0.png" ,"images/murs/pebble_red_0_new.png" ,"images/murs/permarock_clear_red_0.png" ,"images/murs/permarock_red_0.png" ,"images/murs/relief_0.png" ,"images/murs/relief_brown_0.png" ,"images/murs/sandstone_wall_0.png" ,"images/murs/shoals_wall_1.png" ,"images/murs/silver_wall.png" ,"images/murs/slime_0_new.png" ,"images/murs/slime_stone_0.png" ,"images/murs/snake_0.png" ,"images/murs/stone_2_brown_0.png" ,"images/murs/stone_2_dark_0.png" ,"images/murs/stone_2_gray_0.png" ,"images/murs/stone_black_marked_0.png" ,"images/murs/stone_brick_1.png" ,"images/murs/stone_dark_0.png" ,"images/murs/stone_gray_0.png" ,"images/murs/stone2_brown_2_new.png" ,"images/murs/stone2_dark_2_new.png" ,"images/murs/stone2_gray_2_new.png" ,"images/murs/tomb_0.png" ,"images/murs/transparent_flesh.png" ,"images/murs/transparent_stone.png" ,"images/murs/transparent_wall_new.png" ,"images/murs/undead_0.png" ,"images/murs/undead_brown_0.png" ,"images/murs/vault_0.png" ,"images/murs/volcanic_wall_0.png" ,"images/murs/wall_flesh_0.png","images/murs/wall_vines_0.png" ,"images/murs/wall_yellow_rock_0.png" ,"images/murs/wax_wall_new.png" ,"images/murs/zot_blue_0_new.png"]

cac,cacc="#","|"

tc=50

nmape=[]
for e in emape:
    nmape.append( [ e,pygame.transform.scale(pygame.image.load(e),[tc,tc])] )

def load():
    f=open( "mape.nath" , "r") .read().split(cac)
    ff=[]
    for g in f:
        ff.append( g.split(cacc) )
    mtx=len(ff)
    mty=len(ff[0])
    mape=numpy.zeros([mtx,mty],dtype=int)
    for x in range(mtx):
        for y in range(mty):
            mape[x,y]=int(ff[x][y])
    return mape

def save(mape):
    txt=""
    for x in range( mape.shape[0] ):
        for y in range( mape.shape[1] ):
            txt+=str(mape[x,y])+cacc
        txt=txt[:-1]+cac
    txt=txt[:-1]
    f=open( "mape.nath" , "w")
    f.write( txt )
    f.close()

def export(mape):
    txt="mape=["
    for x in range( mape.shape[0] ):
        txt+="["
        for y in range( mape.shape[1] ):
            txt+=str(mape[y,x])+","
        txt=txt[:-1]+"],"
    txt=txt[:-1]+"];"
    f=open( "mape.js" , "w")
    f.write( txt )
    f.close()


print("création de la mape")
if "mape.nath" in os.listdir("./"):
    mape=load()
else:
    mtx,mty=1000,1000
    mape=numpy.zeros([mtx,mty],dtype=int)
    for x in range(mtx):
        for y in range(mty):
            mape[x,y]=0
    save(mape)
print("finit")

cam=[0,0]

def aff(mape,pos,fps,msel,tcurs):
    fenetre.fill((0,0,0))
    for x in range( int( (-cam[0])/tc ) , int( (-cam[0]+tex)/tc ) ):
        for y in range( int( (-cam[1])/tc ) , int( (-cam[1]+tey)/tc ) ):
            if x >= 0 and y >= 0 and x < mape.shape[0] and y < mape.shape[1]:
                fenetre.blit(  nmape[mape[x,y]][1] , [cam[0]+x*tc,cam[1]+y*tc] )
    px=int(pos[0]/tc)*tc
    py=int(pos[1]/tc)*tc
    for x in range(-tcurs,tcurs+1):
        for y in range(-tcurs,tcurs+1):
            pygame.draw.rect(fenetre,(0,0,200),(px+x*tc,py+y*tc,tc,tc),1)
    fenetre.blit( pygame.transform.scale( nmape[msel][1] , [100,100]) , [15,50] )
    fenetre.blit( font.render(nmape[msel][0],True,(255,255,255)), [15,30])
    fenetre.blit( font.render("fps="+str(fps),True,(255,255,255)), [15,15])
    pygame.display.update()


tce=0.15
dce=time.time()
isclick=False
vit=tc
msel=1
fps=0
tcurs=0
encour=True
while encour:
    t1=time.time()
    pos=pygame.mouse.get_pos()
    aff(mape,pos,fps,msel,tcurs)
    for event in pygame.event.get():
        if event.type==QUIT:
            save(mape)
            exit()
        elif event.type==KEYDOWN:
            if event.key==K_ESCAPE:
                encour=False
            elif event.key==K_s:
                save(mape)
            elif event.key==K_l:
                mape=load()
            elif event.key==K_e:
                export(mape)
            elif event.key==K_UP: cam[1]+=vit
            elif event.key==K_DOWN: cam[1]-=vit
            elif event.key==K_LEFT: cam[0]+=vit
            elif event.key==K_RIGHT: cam[0]-=vit
            elif event.key==K_PAGEDOWN and msel>0 and time.time()-dce>=tce:
                dce=time.time()
                msel-=1
            elif event.key==K_PAGEUP and msel<len(nmape)-1 and time.time()-dce >=tce:
                dce=time.time()
                msel+=1
        elif event.type==MOUSEBUTTONDOWN:
            if event.button==4 and tcurs < 30: tcurs+=1
            elif event.button==5 and tcurs > 0: tcurs-=1
            elif event.button == 1:
                isclick=True
        elif event.type==MOUSEBUTTONUP:
            if event.button==4 or event.button==5:
                pass
            elif event.button==1:
                isclick=False
    if isclick:
            px=int((pos[0]-cam[0])/tc)
            py=int((pos[1]-cam[1])/tc)
            for x in range(-tcurs,tcurs+1):
                for y in range(-tcurs,tcurs+1):
                    xx,yy=x+px,y+py
                    if xx >= 0 and xx < mape.shape[0] and yy >= 0 and yy < mape.shape[1]:
                        mape[xx,yy]=msel
    tt=(time.time()-t1)
    if tt!=0: fps=int(1.0/tt)





save(mape)










