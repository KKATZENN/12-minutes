// To build GameLevels, each contains GameObjects from below imports
import GamEnvBackground from '../adventureGame/GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Npc from './GameEngine/Npc.js';
import DialogueSystem from '../adventureGame/GameEngine/DialogueSystem.js';
import Enemy from './GameEngine/Enemy.js';

class GameLevelDifferentWater {
  constructor(gameEnv) {
    // Values dependent on GameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    //enemy
    let enemy = new Enemy;

    // Background data
    const image_src_water = path + "/images/rpg/water.png";
    const image_data_water = {
        name: 'water',
        src: image_src_water,
        pixels: {height: 580, width: 1038}
    };

    // Player 1 sprite data (turtle)
    const TURTLE_SCALE_FACTOR = 10;
    const sprite_src_turtle = path + "/images/rpg/turtle.png";
    const sprite_data_turtle = {
        name: 'turtle',
        src: sprite_src_turtle,
        SCALE_FACTOR: TURTLE_SCALE_FACTOR,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/TURTLE_SCALE_FACTOR) }, 
        pixels: {height: 280, width: 256},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        downRight: {row: 0, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16 },
        left: {row: 1, start: 0, columns: 3 },
        right: {row: 2, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        upLeft: {row: 3, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 3, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }

    };

    // Player 2 sprite data (fish)
    const sprite_src_fish = path + "/images/rpg/fishies.png";
    const sprite_data_fish = {
        name: 'fish',
        src: sprite_src_fish,
        SCALE_FACTOR: 16,
        STEP_FACTOR: 400,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 384},
        INIT_POSITION: { x: 0, y: 0 },
        orientation: {rows: 8, columns: 12 },
        down: {row: 0, start: 0, columns: 3 }, 
        downRight: {row: 0, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16 }, 
        left: {row: 1, start: 0, columns: 3 },  
        right: {row: 2, start: 0, columns: 3 }, 
        up: {row: 3, start: 0, columns: 3 },    
        upLeft: {row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 73, left: 74, down: 75, right: 76 }
    };

    // NPC sprite data (frog)
    const sprite_src_frog = path + "/images/rpg/fishies.png";
    const sprite_data_frog = {
        name: 'npc',
        src: sprite_src_frog,
        SCALE_FACTOR: 16,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 384},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 8, columns: 12 },
        down: {row: 0, start: 10, columns: 3 }, 
        left: {row:1, start: 10, columns: 3},
        right: {row:2, start: 10, columns: 3}, 
        up: {row:3, start: 10, columns: 3},  
        dialogues: [
          "Ribbit.",
          "You hear how a mha fan went to a zoo to uh, might I say, interact with the frogs?",
          "Dont frogs breathe air? Why am I down here",
          "Croak. Oh wait wrong animal."
        ],

        reaction: function() {
          const dialogue = new DialogueSystem;

          dialogue.showRandomDialogue(sprite_data_frog);
        },

        walkingArea: {
          xMin: width / 10, //left boundary
          xMax: (width * 5 / 7), //right boundary 
          yMin: height / 4, //top boundary 
          yMax: (height * 8 / 15) //bottom boundary
        },

        speed : 5,
        direction: { x: 1, y: 1 },

        updatePosition: function () {
          console.log(`Manta Ray position: (${this.INIT_POSITION.x}, ${this.INIT_POSITION.y})`);
          this.INIT_POSITION.x += this.direction.x * this.speed; // Update x position based on direction and speed
          this.INIT_POSITION.y += this.direction.y * this.speed; // Update y position based on direction and speed

          if (this.INIT_POSITION.x <= this.walkingArea.xMin) {
            this.INIT_POSITION.x = this.walkingArea.xMin;
            this.direction.x = 1; 
          }
          if (this.INIT_POSITION.x >= this.walkingArea.xMax) {
            this.INIT_POSITION.x = this.walkingArea.xMax;
            this.direction.x = -1; 
          }
          if (this.INIT_POSITION.y <= this.walkingArea.yMin) {
            this.INIT_POSITION.y = this.walkingArea.yMin;
            this.direction.y = 1; 
          }
          if (this.INIT_POSITION.y >= this.walkingArea.yMax) {
            this.INIT_POSITION.y = this.walkingArea.yMax;
            this.direction.y = -1; 
          }

          const spriteElement = document.getElementById(this.id);
          if (spriteElement) { 
            spriteElement.style.transform = this.direction.x === -1 ? "scaleX(-1)" : "scaleX(1)";
        }
      },
    };

    const sprite_src_mantaRay = path + "/images/rpg/fishies.png"; // be sure to include the path
    const sprite_greet_mantaRay = "go away";
    const sprite_data_mantaRay = {
        id: 'mantaray',
        greeting: sprite_greet_mantaRay,
        src: sprite_src_mantaRay,
        SCALE_FACTOR: 400,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 25,
        pixels: {height: 1200, width: 1600},
        INIT_POSITION: { x: 100, y: 100 },
        orientation: {rows: 8, columns: 12 },
        down: {row: 5, start: 0, columns: 3 },
        downRight: {row: 5, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 5, start: 0, columns: 3, rotate: -Math.PI/16 },
        right: {row: 6, start: 0, columns: 3 },
        left: {row: 7, start: 0, columns: 3 },
        up: {row: 8, start: 0, columns: 3 },  
        upLeft: {row: 8, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 8, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },

        walkingArea: {
          xMin: width / 10, //left boundary
          xMax: (width * 5 / 7), //right boundary 
          yMin: height / 4, //top boundary 
          yMax: (height * 8 / 15) //bottom boundary
        },

        speed : 5,
        direction: { x: 1, y: 1 },

        updatePosition: function () {
          sprite_data_mantaRay.gameEnv = gameEnv;
          sprite_data_mantaRay.position = sprite_data_mantaRay.INIT_POSITION;

          console.log(`Manta Ray position: (${this.INIT_POSITION.x}, ${this.INIT_POSITION.y})`);
          this.INIT_POSITION.x += this.direction.x * this.speed; // Update x position based on direction and speed
          this.INIT_POSITION.y += this.direction.y * this.speed; // Update y position based on direction and speed

          if (this.INIT_POSITION.x <= this.walkingArea.xMin) {
            this.INIT_POSITION.x = this.walkingArea.xMin;
            this.direction.x = 1; 
          }
          if (this.INIT_POSITION.x >= this.walkingArea.xMax) {
            this.INIT_POSITION.x = this.walkingArea.xMax;
            this.direction.x = -1; 
          }
          if (this.INIT_POSITION.y <= this.walkingArea.yMin) {
            this.INIT_POSITION.y = this.walkingArea.yMin;
            this.direction.y = 1; 
          }
          if (this.INIT_POSITION.y >= this.walkingArea.yMax) {
            this.INIT_POSITION.y = this.walkingArea.yMax;
            this.direction.y = -1; 
          }

          const spriteElement = document.getElementById(this.id);
          if (spriteElement) { 
            spriteElement.style.transform = this.direction.x === -1 ? "scaleX(-1)" : "scaleX(1)";
        }
      },
        update: function() {
            // Skip update if already in killing process
            if (this.isKilling) {
                return;
            }
            
            // Find all player objects
            const players = this.gameEnv.gameObjects.filter(obj => 
                obj.constructor.name === 'Player'
            );
            
            if (players.length === 0) return;
            
            // Find nearest player
            let nearest = players[0];
            let minDist = Infinity;

            for (const player of players) {
                const dx = player.position.x - this.position.x;
                const dy = player.position.y - this.position.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = player;
                }
            }

            // Move towards nearest player
            const speed = 1.5; // Adjust speed as needed
            const dx = nearest.position.x - this.position.x;
            const dy = nearest.position.y - this.position.y;
            const angle = Math.atan2(dy, dx);
            
            // Update position
            this.position.x += Math.cos(angle) * speed;
            this.position.y += Math.sin(angle) * speed;

            setInterval(() => {
              sprite_data_mantaRay.updatePosition(); 
            }, 100)
            
            const playerX = player.position.x;
            const playerY = player.position.y;
                    
            if(this.enemy.playerDestroyed) {
              enemy.explode(playerX, playerY);
              
              setTimeout(() => {
                // Clean up any lingering resources before reload
                if (self && self.timerInterval) {
                  clearInterval(self.timerInterval);
              }
            // Force a complete page reload - most reliable way to reset
            location.reload();
              }, 4000);
            }
          },
      playanimation: function() {
        if (this.isAnimating) return;//if already animating,stop checking
        this.isAnimating = true; // Mark animation as running
    
        const spriteElement = document.getElementById(this.id); //Get the DOM element representing the sprite
        if (!spriteElement) {
          this.isAnimating = false; //if there is no id, then stop checking
          return;
        }
    
        spriteElement.style.transition = 'filter 1s ease-in-out'; // Set the CSS transition property
        spriteElement.style.filter = 'scale(1.5) brightness(1.5)'; //make bigger and a little brighter
        this.velocity.x *= 1.5; //multiply velocity by 1.5
    
        setTimeout(() => {
          spriteElement.style.filter = 'none';
          setTimeout(() => {
            spriteElement.style.transition = '';
            this.isAnimating = false;
          }, 1000);
        }, 1000);
      }

      };


      


    // List of objects defnitions for this level
    this.classes = [
      { class: GamEnvBackground, data: image_data_water },
      { class: Player, data: sprite_data_turtle },
      { class: Player, data: sprite_data_fish },
      { class: Npc, data: sprite_data_frog },
      { class: Enemy, data: sprite_data_mantaRay}
    ];
  }

}

export default GameLevelDifferentWater;