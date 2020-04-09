namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101050404010101040404010101040404010101040101010401040401010401010101010401010104010104010104010101010104010404040101040101040101010101040101010401010401010401010101010401010104010104040404010101010104010101040101040101010101010101040101040401010404040404040101010401010401010104010101010101010104010104010101040401010101010101040101040404010104040404040101010401010401040101010101010401010104040404010401010101010404010101010101010104040404010104040601010101010101010101010101010101`,
            img`
2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 . 2 . . . 2 2 2 . . . 2 
2 2 . 2 . 2 . 2 . . 2 2 . 2 2 2 
. 2 . 2 2 2 . 2 2 . 2 2 . 2 . . 
. 2 . 2 . . . 2 2 . 2 2 . 2 . . 
. 2 . 2 2 2 . 2 2 . 2 2 . 2 . . 
. 2 . 2 2 2 . 2 2 . . . . 2 . . 
. 2 . 2 2 2 . 2 2 . 2 2 2 2 2 2 
. 2 . 2 2 . . 2 2 . . . . . . 2 
. 2 . 2 2 . 2 2 2 . 2 2 2 2 2 2 
. 2 . 2 2 . 2 2 2 . . 2 2 2 2 2 
. 2 . 2 2 . . . 2 2 . . . . . 2 
. 2 . 2 2 . 2 . 2 2 2 2 2 2 . 2 
. 2 . . . . 2 . 2 2 2 2 2 . . 2 
. 2 2 2 2 2 2 . . . . 2 2 . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDark2,sprites.dungeon.floorLight5,sprites.dungeon.floorDark5,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
. f b b f 4 4 4 4 4 4 f b b f . 
. b b f f f e e e e f f f b b . 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 f 1 f 1 f f f . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(15)
