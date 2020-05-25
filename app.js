new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startNewGame: function(){
            this.gameIsRunning += true;
        },
        attack: function() {
            if (this.monsterHealth != 0){
                //TODO: prevent health going through zero
                this.monsterHealth -= Math.ceil(Math.random() * 10);
            }
            else {
                alert('kek');
            }
            // this.playerHealth -= Math.floor(Math.random()* 10);
        },
        specialAttack: function() {
            if (this.monsterHealth != 0){
                this.monsterHealth -= 10;
            }
            else {
                alert('Reached 0!')
            }
        }
    }
}); 