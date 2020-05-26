new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startNewGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.monsterHealth -= this.damage(10);

            if(this.checkWin()) {
                return;
            } 
            this.playerHealth -= this.damage(15);
            this.checkWin();
        },
        specialAttack: function() {
            this.monsterHealth -= this.damage(20);

            if(this.checkWin()) {
                return;
            } 
            this.playerHealth -= this.damage(25);
            this.checkWin();
        },
        heal: function() {
            if(this.playerHealth >= 100){
                this.playerHealth = 100;
            } 
            else {
                this.playerHealth +=10;
                
            }   
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
        }
        
    }
}); 