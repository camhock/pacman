sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeScoreBy(10)
})
let dot: Sprite = null
tiles.setTilemap(tilemap`level1`)
let pac = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 . . . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(pac)
scene.cameraFollowSprite(pac)
tiles.placeOnTile(pac, tiles.getTileLocation(7, 10))
for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
    dot = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(dot, value)
}
for (let value of tiles.getTilesByType(sprites.dungeon.floorLight0)) {
    tiles.setWallAt(value, true)
}
let pinky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 1 1 3 1 1 3 3 . . . . 
    . . . 3 3 1 f 3 1 f 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 . 3 . 3 . 3 . 3 . . . . 
    . . . 3 . 3 . 3 . 3 . 3 . . . . 
    . . . 3 . 3 . 3 . 3 . 3 . . . . 
    . . . 3 . 3 . 3 . 3 . 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let inky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 1 1 7 1 1 7 7 . . . . 
    . . . 7 7 1 f 7 1 f 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let clyde = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . 8 8 1 1 8 1 1 8 8 . . . . 
    . . . 8 8 1 f 8 1 f 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 . 8 . 8 . 8 . 8 . . . . 
    . . . 8 . 8 . 8 . 8 . 8 . . . . 
    . . . 8 . 8 . 8 . 8 . 8 . . . . 
    . . . 8 . 8 . 8 . 8 . 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(clyde, tiles.getTileLocation(7, 8))
clyde.setVelocity(50, 50)
clyde.setFlag(SpriteFlag.BounceOnWall, true)
tiles.placeOnTile(inky, tiles.getTileLocation(10, 8))
inky.setVelocity(-21, -37)
inky.setFlag(SpriteFlag.BounceOnWall, true)
