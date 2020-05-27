new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        amountList: [],
    },
    methods: {
        startNewGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.amountList = [];
        },
        attack: function() {
            var damageToMonster = this.damage(10);
            this.isPlayer = true;
            this.addToActionList({
                text: "PLAYER HITS MONSTER FOR " + damageToMonster,
                isPlayer: true
            });
            this.monsterHealth -= damageToMonster;
            this.playerTurnIsAttached = !this.playerTurnIsAttached;

            if(this.checkWin()) {
                return;
            }   
            this.monsterAttacks();     
        },
        monsterAttacks: function(){
            var damageToPlayer = this.damage(15);
            this.isPlayer = false;
            this.addToActionList({
                text:"MONSTER HITS PLAYER FOR " + damageToPlayer,
                isPlayer: false
            });
            this.playerHealth -= damageToPlayer;  
            this.checkWin();
        },
        specialAttack: function() {
            var damageToMonster = this.damage(20);
            this.monsterHealth -= damageToMonster;

            this.addToActionList({
                text:"PLAYER HITS MONSTER WITH SPECIAL ATTACK FOR " + damageToMonster,
                isPlayer: true
            });

            if(this.checkWin()) {
                return;
            } 
            this.checkWin();
            this.monsterAttacks();
        },
        heal: function() {
            var heal = 10;
            if(this.playerHealth >= 100){
                this.playerHealth = 100;
            } 
            else {
                this.playerHealth += heal;     
            };
            this.addToActionList({
                text:"PLAYER HEALS FOR " + heal,
                isPlayer: true
            });   
            this.monsterAttacks();
        },
        giveUp: function() {
            
            this.startNewGame();
            this.gameIsRunning = !this.gameIsRunning;
        },
        damage: function(multiplier) {
            return Math.ceil(Math.random() * multiplier);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0){
                if (confirm('You won! New game?')){
                    this.startNewGame();
                }
                else{
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0){
                if (confirm('You lose! New game?')){
                    this.startNewGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        addToActionList: function(damage) {
            this.amountList.unshift(damage);
        }
    }
}); 