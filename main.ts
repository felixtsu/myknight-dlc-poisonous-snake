namespace myknight_felix_dlc {
    export function poisonousSnake() {
        Enemy.setEnemy(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, "巨蟒", function (enemy) {
        Enemy.setEnemyAbility(enemy, Enemy.aKind.hp, 200)
        Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.walk, [img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `,img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.walk, [img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `,img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.walk, [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `,img`
            . . . . . . . c c c c c c . . . 
            . . . . . . c 6 7 7 7 7 6 c . . 
            . . . . . c 7 7 7 7 7 7 7 7 c . 
            . . . . c 6 7 7 7 7 7 7 7 7 6 c 
            . . . . c 7 7 7 c 6 6 6 6 c 7 c 
            . . . . f 7 7 7 6 f 6 6 f 6 7 f 
            . . . . f 7 7 7 7 7 7 7 7 7 7 f 
            . . . . f 6 7 7 c 6 7 7 7 7 f . 
            . . c c c f 6 7 7 c c c c f . . 
            . c 7 7 7 c c f 7 7 7 2 6 c . . 
            c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
            c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
            . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
            . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
            . . c c 6 6 7 1 1 1 1 1 6 c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.walk, [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `,img`
            . . . . . . . c c c c c c . . . 
            . . . . . . c 6 7 7 7 7 6 c . . 
            . . . . . c 7 7 7 7 7 7 7 7 c . 
            . . . . c 6 7 7 7 7 7 7 7 7 6 c 
            . . . . c 7 7 7 c 6 6 6 6 c 7 c 
            . . . . f 7 7 7 6 f 6 6 f 6 7 f 
            . . . . f 7 7 7 7 7 7 7 7 7 7 f 
            . . . . f 6 7 7 c 6 7 7 7 7 f . 
            . . c c c f 6 7 7 c c c c f . . 
            . c 7 7 7 c c f 7 7 7 2 6 c . . 
            c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
            c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
            . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
            . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
            . . c c 6 6 7 1 1 1 1 1 6 c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.stand, [img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `,img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.stand, [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `,img`
            . . . . . . . c c c c c c . . . 
            . . . . . . c 6 7 7 7 7 6 c . . 
            . . . . . c 7 7 7 7 7 7 7 7 c . 
            . . . . c 6 7 7 7 7 7 7 7 7 6 c 
            . . . . c 7 7 7 c 6 6 6 6 c 7 c 
            . . . . f 7 7 7 6 f 6 6 f 6 7 f 
            . . . . f 7 7 7 7 7 7 7 7 7 7 f 
            . . . . f 6 7 7 c 6 7 7 7 7 f . 
            . . c c c f 6 7 7 c c c c f . . 
            . c 7 7 7 c c f 7 7 7 2 6 c . . 
            c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
            c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
            . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
            . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
            . . c c 6 6 7 1 1 1 1 1 6 c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.stand, [img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `,img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.stand, [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `,img`
            . . . . . . . c c c c c c . . . 
            . . . . . . c 6 7 7 7 7 6 c . . 
            . . . . . c 7 7 7 7 7 7 7 7 c . 
            . . . . c 6 7 7 7 7 7 7 7 7 6 c 
            . . . . c 7 7 7 c 6 6 6 6 c 7 c 
            . . . . f 7 7 7 6 f 6 6 f 6 7 f 
            . . . . f 7 7 7 7 7 7 7 7 7 7 f 
            . . . . f 6 7 7 c 6 7 7 7 7 f . 
            . . c c c f 6 7 7 c c c c f . . 
            . c 7 7 7 c c f 7 7 7 2 6 c . . 
            c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
            c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
            . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
            . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
            . . c c 6 6 7 1 1 1 1 1 6 c . . 
            . . . c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.attack, [img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . c c c c c c c . . . 
            . . . . . c f f 6 6 f f 7 c . . 
            . . . . c 7 6 6 6 6 6 6 7 6 c . 
            . . . c 7 7 7 7 7 7 7 7 7 7 c . 
            . . . c 7 8 1 f f 1 6 7 7 7 c . 
            . . . f 6 f 1 f f 1 f 7 7 7 f . 
            . . . f 6 f 2 2 2 2 f 7 7 7 f . 
            . . c c 6 f 2 2 2 2 f 7 7 6 f . 
            . c 7 7 7 7 2 2 2 2 7 7 f c . . 
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 6 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . c c c c c c c . . . 
            . . . . . c f f 6 6 f f 7 c . . 
            . . . . c 7 6 6 6 6 6 6 7 6 c . 
            . . . c 7 7 7 7 7 7 7 7 7 7 c . 
            . . . c 7 8 1 f f 1 6 7 7 7 c . 
            . . . f 6 f 1 f f 1 f 7 7 7 f . 
            . . . f 6 f 2 2 2 2 f 7 7 7 f . 
            . . c c 6 f 2 2 2 2 f 7 7 6 f . 
            . c 7 7 7 7 2 2 2 2 7 7 f c . . 
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 6 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . c c c c c c 6 6 6 c c . . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . . . . . . c 6 6 6 c c . . 
            . . . c c c c c c c 6 6 6 c c . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . . . . . . c 6 6 6 c c . . 
            . . . c c c c c c c 6 6 6 c c . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.attack, [img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . c c c c c c c . . . 
            . . . . . c f f 6 6 f f 7 c . . 
            . . . . c 7 6 6 6 6 6 6 7 6 c . 
            . . . c 7 7 7 7 7 7 7 7 7 7 c . 
            . . . c 7 8 1 f f 1 6 7 7 7 c . 
            . . . f 6 f 1 f f 1 f 7 7 7 f . 
            . . . f 6 f 2 2 2 2 f 7 7 7 f . 
            . . c c 6 f 2 2 2 2 f 7 7 6 f . 
            . c 7 7 7 7 2 2 2 2 7 7 f c . . 
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 6 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . c c c c c c c . . . 
            . . . . . c f f 6 6 f f 7 c . . 
            . . . . c 7 6 6 6 6 6 6 7 6 c . 
            . . . c 7 7 7 7 7 7 7 7 7 7 c . 
            . . . c 7 8 1 f f 1 6 7 7 7 c . 
            . . . f 6 f 1 f f 1 f 7 7 7 f . 
            . . . f 6 f 2 2 2 2 f 7 7 7 f . 
            . . c c 6 f 2 2 2 2 f 7 7 6 f . 
            . c 7 7 7 7 2 2 2 2 7 7 f c . . 
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 6 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . c c c c c c 6 6 6 c c . . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . . . . . . c 6 6 6 c c . . 
            . . . c c c c c c c 6 6 6 c c . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . . . . . . c 6 6 6 c c . . 
            . . . c c c c c c c 6 6 6 c c . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.attack, [img`
            . . . . c c c c c c c . . . . . 
            . . . c 6 7 7 7 7 7 6 c . . . . 
            . . c 6 7 c 6 6 6 6 c 7 c . . . 
            . . c 7 7 6 f 6 6 f 6 7 6 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 7 7 6 1 f f 1 8 7 f . . 
            . . f 7 7 7 f 1 f f 1 f 6 f . . 
            . . f 6 7 7 f 2 2 2 2 f f . . . 
            . . c f 6 7 7 2 2 2 2 f c c . . 
            . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
            c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
            c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 1 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . c c c c c c c . . . . . . 
            . . c 7 f f 6 6 f f c . . . . . 
            . c 6 7 6 6 6 6 6 6 7 c . . . . 
            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
            . c 7 7 7 6 1 f f 1 8 7 c . . . 
            . f 7 7 7 f 1 f f 1 f 6 f . . . 
            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . c c c c c c c . . . . . . 
            . . c 7 f f 6 6 f f c . . . . . 
            . c 6 7 6 6 6 6 6 6 7 c . . . . 
            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
            . c 7 7 7 6 1 f f 1 8 7 c . . . 
            . f 7 7 7 f 1 f f 1 f 6 f . . . 
            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `,img`
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c . . . . . . . . 
            . c c 6 6 6 c c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `,img`
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c . . . . . . . . 
            . c c 6 6 6 c c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `])
        Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.attack, [img`
            . . . . c c c c c c c . . . . . 
            . . . c 6 7 7 7 7 7 6 c . . . . 
            . . c 6 7 c 6 6 6 6 c 7 c . . . 
            . . c 7 7 6 f 6 6 f 6 7 6 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 7 7 6 1 f f 1 8 7 f . . 
            . . f 7 7 7 f 1 f f 1 f 6 f . . 
            . . f 6 7 7 f 2 2 2 2 f f . . . 
            . . c f 6 7 7 2 2 2 2 f c c . . 
            . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
            c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
            c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 1 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . c c c c c c c . . . . . . 
            . . c 7 f f 6 6 f f c . . . . . 
            . c 6 7 6 6 6 6 6 6 7 c . . . . 
            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
            . c 7 7 7 6 1 f f 1 8 7 c . . . 
            . f 7 7 7 f 1 f f 1 f 6 f . . . 
            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . c c c c c c c . . . . . . 
            . . c 7 f f 6 6 f f c . . . . . 
            . c 6 7 6 6 6 6 6 6 7 c . . . . 
            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
            . c 7 7 7 6 1 f f 1 8 7 c . . . 
            . f 7 7 7 f 1 f f 1 f 6 f . . . 
            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `,img`
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c . . . . . . . . 
            . c c 6 6 6 c c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `,img`
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c . . . . . . . . 
            . c c 6 6 6 c c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `])
        Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
            Bullet.shootFromSprite(enemy, "追踪毒液", 0, 80, 0, true)
        })
        Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
            Bullet.shootFromSprite(enemy, "毒液", 0, 120, 0, true)
            Bullet.shootFromSprite(enemy, "毒液", 45, 120, 0, true)
            Bullet.shootFromSprite(enemy, "毒液", 90, 120, 0, true)
            Bullet.shootFromSprite(enemy, "毒液", 135, 120, 0, true)
            Bullet.shootFromSprite(enemy, "毒液", 180, 120, 0, true)
            Bullet.shootFromSprite(enemy, "毒液", 225, 120, 0, true)
            Bullet.shootFromSprite(enemy, "毒液", 270, 120, 0, true)
            Bullet.shootFromSprite(enemy, "毒液", 315, 120, 0, true)
        })
        Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
            Bullet.shootFromSprite(enemy, "瞄准毒液", 0, 40, 0, true)
            Helper.after(0.2, function () {
                Bullet.shootFromSprite(enemy, "瞄准毒液", 0, 40, 0, true)
                Helper.after(0.2, function () {
                    Bullet.shootFromSprite(enemy, "瞄准毒液", 0, 40, 0, true)
                })
            })
        })
        Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
            Bullet.shootFromSprite(enemy, "毒液水池", 0, 0)
        })
        Enemy.addSKill(enemy, Enemy.sKind.spoils, function (tempVar, sprite) {
            Enemy.dropWeapon(enemy, playground_helpers.randomWeapon())
        })
    })
    Bullet.bulletOverlap("瞄准毒液", Bullet.overlapKind.two, function (projectile, otherSprite) {
        otherSprite.say("中毒了", 1000)
        for (let index = 0; index < 3; index++) {
            Bullet.setHp(otherSprite, -1)
            pause(1000)
        }
    })
    Bullet.bulletOverlap("追踪毒液", Bullet.overlapKind.two, function (projectile, otherSprite) {
        otherSprite.say("中毒了", 1000)
        for (let index = 0; index < 3; index++) {
            Bullet.setHp(otherSprite, -1)
            pause(1000)
        }
    })
    Bullet.bulletOverlap("毒液水池", Bullet.overlapKind.two, function (projectile, otherSprite) {
        Bullet.setHp(otherSprite, -1)
        otherSprite.say("这水有毒", 1000)
        pause(1000)
    })
    Bullet.setProjectiles("巨蟒投射物", function () {
        Bullet.setProjectile(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 6 . . . . . 
            . . . . . . 6 6 . 6 6 6 . . . . 
            . . . . . 6 7 7 6 7 6 . . . . . 
            . . . . 6 7 1 1 7 7 7 6 . . . . 
            . . . 6 7 7 1 1 1 1 7 6 6 . . . 
            . . . 6 7 1 1 1 1 1 7 7 6 . . . 
            . . . 6 7 7 1 1 1 7 7 6 6 . . . 
            . . . . 6 7 7 7 7 7 6 6 . . . . 
            . . . . . 6 7 6 6 6 . . . . . . 
            . . . . . 6 6 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, "毒液", function (projectile) {
            Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
            Bullet.setBullet(projectile, Bullet.bulletP.hitrec, 200)
        })
        Bullet.setProjectile(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 6 . . . . . 
            . . . . . . 6 6 . 6 6 6 . . . . 
            . . . . . 6 7 7 6 7 6 . . . . . 
            . . . . 6 7 1 1 7 7 7 6 . . . . 
            . . . 6 7 7 1 1 1 1 7 6 6 . . . 
            . . . 6 7 1 1 1 1 1 7 7 6 . . . 
            . . . 6 7 7 1 1 1 7 7 6 6 . . . 
            . . . . 6 7 7 7 7 7 6 6 . . . . 
            . . . . . 6 7 6 6 6 . . . . . . 
            . . . . . 6 6 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, "瞄准毒液", function (projectile) {
            Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
            Bullet.setBullet(projectile, Bullet.bulletP.hitrec, 200)
            Bullet.setBullet2(projectile, Bullet.bulletP2.indeflectible, true)
            Bullet.aimedshot(projectile)
        })
        Bullet.setProjectile(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 6 . . . . . 
            . . . . . . 6 6 . 6 6 6 . . . . 
            . . . . . 6 7 7 6 7 6 . . . . . 
            . . . . 6 7 1 1 7 7 7 6 . . . . 
            . . . 6 7 7 1 1 1 1 7 6 6 . . . 
            . . . 6 7 1 1 1 1 1 7 7 6 . . . 
            . . . 6 7 7 1 1 1 7 7 6 6 . . . 
            . . . . 6 7 7 7 7 7 6 6 . . . . 
            . . . . . 6 7 6 6 6 . . . . . . 
            . . . . . 6 6 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, "追踪毒液", function (projectile) {
            Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
            Bullet.setBullet(projectile, Bullet.bulletP.hitrec, 200)
            Bullet.setBullet2(projectile, Bullet.bulletP2.indeflectible, true)
            Bullet.aimedshot2(projectile)
            projectile.lifespan = 2000
        })
        Bullet.setProjectile(img`
            .....6666666666666666666666.....
            ....66666666666666666666666.....
            ....666677777667777777766666....
            ...66777771177677777777777666...
            ...61777711111777711177777766...
            ..6617777171117711111777777766..
            ..67771177711177111117777777766.
            .6677711117777771111711117777766
            .6777111117777777777711111777766
            67777711177777777777711111177776
            67777777777777777777771111177776
            67111777711777777711117111177776
            66711777111777777711117711177776
            66711777177777777711111177777776
            66677777777777777771111117777776
            67777777777777777777111117777776
            67777777777777777777711117777776
            67777777777777777777777777777776
            67711177777777777777777777777776
            67711177111177777777777777111776
            67711177111111777111777777111776
            67111177111111111111777711111776
            66111177711111111111777711111776
            66111177777711111111777111117776
            66111177777777777777777111177776
            66777777777777777777777111777766
            .6677777777111117777777777777766
            .6666777777111111177777777777766
            ..66677777711111117777777777666.
            ...666677677771111777777777666..
            ...66666666666666666666666666...
            ....666666666666666666666666....
            `, "毒液水池", function (projectile) {
            Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
            Bullet.setBullet2(projectile, Bullet.bulletP2.rebound, false)
            Bullet.setBullet(projectile, Bullet.bulletP.perishTogether, -1)
            projectile.lifespan = 10000
            projectile.z += -1
        })
    })
    Bullet.bulletOverlap("毒液", Bullet.overlapKind.two, function (projectile, otherSprite) {
        otherSprite.say("中毒了", 1000)
        for (let index = 0; index < 3; index++) {
            Bullet.setHp(otherSprite, -1)
            pause(1000)
        }
    })
    }
}

