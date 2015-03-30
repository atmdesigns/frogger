// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.top = this.y;
    this.right = this.x + 70;
    this.left = this.x;
    this.bottom = this.y + 70;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 606) {
        this.x = this.x + this.speed * dt;
    }
    else
    {
        this.x = 0;
    }
    

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y,lives) {

    this.x = x;
    this.y = y;
    this.top = this.y;
    this.right = this.x + 70;
    this.left = this.x;
    this.bottom = this.y + 70;
    this.lives = lives;
    this.sprite = 'images/char-horn-girl.png';
  
}

Player.prototype.update = function() {
    
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   
   
}

// Move player back to beginning if he reaches the water
Player.prototype.reset = function() {
    
    this.x = 200;
    this.y = 400;

}

// Implement logic based on key pressed
Player.prototype.handleInput = function(direction) {

    if (direction == 'right' && this.x < 400) {
        this.x = this.x + 100;
    }
    if (direction == 'left' && this.x > 0) {
        this.x = this.x - 100;
    }
    if (direction == 'up' && this.y > 0) {
        this.y = this.y - 100;
    }
    if (direction == 'down' && this.y < 400) {
        this.y = this.y + 100;
    } 
    if (this.y == 0)   {
        player.reset();
    }
}

function checkCollisions () {
    allEnemies.forEach(function(enemy) {
        if (enemy.x < player.x + 50 &&
            enemy.x + 70 > player.x &&
            enemy.y < player.y + 50 &&
            enemy.y + 70 > player.y) 
        {
            console.log('collision');
            player.lives --;
            console.log(player.lives);
            player.reset();
        }
    });
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(0,0,200);
var enemy2 = new Enemy(100,100, 150);
var enemy3 = new Enemy(200,200, 125);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player(200, 400, 3);





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    
    player.handleInput(allowedKeys[e.keyCode]);
    

});
