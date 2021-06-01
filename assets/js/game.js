var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//can log multiple values at once, like below
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

/* 1. subtract playerAttack from enemyHealth 
   2. use that value for enemyHealth variable
   3. log resulting message to console to confirm it worked 
   4. subtract enemyAttack value from playerHealth value
   5. use that value for playerHealth variable 
   6. log resulting confirmation to console

Guesses: 
   1. function(enemyHealth - playerAttack);
   2. var enemyHealth = 40;
   3. console.log (enemyHealth);
   4. function (playerHealth-enemyAttack);
   5. var playerHealth = 88;
   6. console.log (playerHealth);
*/
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + "now has" + enemyHealth + " health remaining. "
    );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
     )
};

fight();