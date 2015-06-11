function LPiece() {
    
    this.state1 = {
        [1,0],
        [1,0],
        [1,1]
    };
    this.state2 = {
        [0,0,1],
        [1,1,1]
    };
    this.state3 = {
        [1,1],
        [0,1],
        [0,1]
    };
    this.state4 = {
        [1,1,1],
        [1,0,0]
    };
    
    this.states = [this.state1, this.state2, this.state3, this.state4];
    this.curState = 0;
    
    this.gridx = 4;
    this.gridy = -3;
    this.color = 0;
};

function ReverseLPiece() {
    
    this.state1 = {
        [0,1],
        [0,1],
        [1,1]
    };
    this.state2 = {
        [1,1,1],
        [0,0,1]
    };
    this.state3 = {
        [1,1],
        [1,0],
        [1,0]
    };
    this.state4 = {
        [1,0,0],
        [1,1,1]
    };
    
    this.states = [this.state1, this.state2, this.state3, this.state4];
    this.curState = 0;
    
    this.gridx = 4;
    this.gridy = -3;
    this.color = 0;
};

function TShape() {
    this.state1 = {
        [0,1,0],
        [1,1,1]
    };
    this.state2 = {
        [0,1],
        [1,1],
        [0,1]
    };
    this.state3 = {
        [1,1,1],
        [0,1,0]
    };
    this.state4 = {
        [1,0],
        [1,1],
        [1,0]
    };
    
    this.states = [this.state1, this.state2, this.state3, this.state4];
    this.curState = 0;
    
    this.gridx = 3;
    this.gridy = -2;
    this.color = 0;
};

function LinePiece() {
    
    this.state1 = {
        [1],
        [1],
        [1],
        [1]
    };
    this.state2 = {
        [1,1,1,1]
    };
    
    this.states = [this.state1, this.state2];
    this.curState = 0;
    
    this.gridx = 4; 
    this.gridy = -4;
    this.color = 0;
};

function BlockPiece() {
    
    this.state1 = {
        [1,1],
        [1,1]
    };
    
    this.states = [this.state1];
    this.curState = 0;
    
    this.gridx = 4;
    this.gridy = -2;
    this.color = 0;
};

function GetRandomPiece() {
    var rand = Math.floor(Math.random() * 5);
    var piece;
    
    switch(rand) {
            case 0: piece = new LPiece();
            break;
            case 1: piece = new ReverseLPiece();
            break;
            case 2: piece = new TShape();
            break;
            case 3: piece = new LinePiece();
            break;
            case 4: piece = new BlockPiece();
            break;
    };
    
    piece.color = Math.floor(Math.random() * 8);
    return piece;
};