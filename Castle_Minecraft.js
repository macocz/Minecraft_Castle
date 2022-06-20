player.onChat(
    "castle", 
    function() {

        let position = player.position()
        generateMoat(position)
        generateCastle(position)
        generateWindows(position)
        generateBridge(position)
        generateGate(position)
    }
)

function generateMoat(position: Position) {
    blocks.fill(

        MOSSY_STONE_BRICKS, 

        position.add(pos(3, 0, 3)).add(pos(0, -3, 0)),
        position.add(pos(46, 0, 46)), 

        FillOperation.Hollow
    )

    blocks.fill (

        WATER, 

        position.add(pos(3, 0, 3)).add(pos(3, 0, 3)),
        position.add(pos(46, 0, 46)).add(pos(-3, 0, -3)), 

        FillOperation.Replace
    )
}

function generateCastle(position: Position) {
    blocks.fill(

        GOLD_ORE, 

        position.add(pos(3, 0, 3)).add(pos(7, 0, 7)), 
        position.add(pos(30, 1, 30)).add(pos(7, -3, 7)),

        FillOperation.Replace
    )
    
    blocks.fill(

        GOLD_ORE, 

        position.add(pos(3, 0, 3)).add(pos(7, 0 ,7)).add(pos(0, 1, 0)),
        position.add(pos(30, 6, 30)).add(pos(7, 0, 7)),

        FillOperation.Replace
    )

    blocks.fill(

        BEDROCK, 
        
        position.add(pos(3, 0, 3)).add(pos(0, 6, 0)).add(pos(7, 0, 7)).add(pos(0, 2, 0)),
        position.add(pos(30, 6, 30)).add(pos(7, 0, 7)).add(pos(0, 1, 0)), 

        FillOperation.Replace
    )
    
    blocks.fill(

        AIR, 

        position.add(pos(3, 0, 3)).add(pos(7, 0, 7)) .add(pos(1, 1, 1)),
        position.add(pos(30, 6, 30)).add(pos(7, 0, 7)).add(pos(-1, 2, -1)),

        FillOperation.Replace
    )
}

function generateWindows(position: Position) {   // width front and back
    for(let i = 2; i < 20; i += 4) {
        blocks.fill(

            CYAN_STAINED_GLASS_PANE, 

            position.add(pos(3, 0, 3)).add(pos(i+2, 2, 0)).add(pos(7, 0, 7)), 
            position.add(pos(3, 0, 3)).add(pos(i, 4, 0)).add(pos(7, 0, 7)),

            FillOperation.Replace
        )

        blocks.fill(
            CYAN_STAINED_GLASS_PANE, 
            position.add(pos(3, 0, 3)).add(pos(i+2, 2, 27)).add(pos(7, 0, 7)),
            position.add(pos(3, 0, 3)).add(pos(i, 4, 27)).add(pos(7, 0, 7)),

            FillOperation.Replace
        )
    }

    
    for(let i = 2; i < 20; i += 4) {  // length right abd left

        blocks.fill(

            CYAN_STAINED_GLASS_PANE, 

            position.add(pos(3, 0, 3)).add(pos(0, 2, i+2)).add(pos(7, 0, 7)),
            position.add(pos(3, 0, 3)).add(pos(0, 4, i)).add(pos(7, 0, 7)), 

            FillOperation.Replace
        )

        blocks.fill(
            CYAN_STAINED_GLASS_PANE, 

            position.add(pos(3, 0, 3)).add(pos(27, 2, i+2)).add(pos(7, 0 ,7)),
            position.add(pos(3, 0, 3)).add(pos(27, 4, i)).add(pos(7, 0 ,7)), 

            FillOperation.Replace
        )
    }
}

function generateBridge(position: Position) {
    blocks.fill(

        ACACIA_WOOD_SLAB,

        position.add(pos(3, 0, 3)).add(pos(30, 0, 0)).add(pos(3, 1, 0)),
        position.add(pos(3, 0, 3)).add(pos(28, 0, 0)).add(pos(1, 1, 6)),

        FillOperation.Replace
    )
}


function generateGate(position: Position) {

    blocks.fill(

            AIR, 

            position.add(pos(3, 0, 3)).add(pos(4, 1, 0)).add(pos(29, 0, 29)), 
            position.add(pos(3, 0, 3)).add(pos(22, 4, 0)).add(pos(7, 0, 7)), 

            FillOperation.Replace
        )
}