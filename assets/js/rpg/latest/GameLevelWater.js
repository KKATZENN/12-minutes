// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import PlayerOne from './PlayerOne.js';
import PlayerTwo from './PlayerTwo.js';
import NpcFrog from './NpcFrog.js';


class GameLevelWater {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

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
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/TURTLE_SCALE_FACTOR) }, 
        pixels: {height: 280, width: 256},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 1, start: 0, columns: 3 },
        right: {row: 2, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
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
        down: {row: 0, start: 0, columns: 3 },  // 1st row
        left: {row: 1, start: 0, columns: 3 },  // 2nd row
        right: {row: 2, start: 0, columns: 3 }, // 3rd row
        up: {row: 3, start: 0, columns: 3 },    // 4th row
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
        down: {row: 0, start: 9, columns: 3 }, 
        left: {row:1, start: 9, columns: 3},
        right: {row:2, start: 9, columns: 3},
        up: {row:3, start: 9, columns: 3},

        gameBoundries: {
          xMax: (12),
          xMin: 12,
          yMax: (12),
          yMin: 12
        }
    };

        // NPC data for creeper
    const sprite_src_mantaRay = path + "/images/rpg/fishies.png"; // be sure to include the path
    const sprite_greet_mantaRay = "go away";
    const sprite_data_mantaRay = {
        id: 'mantaray',
        greeting: sprite_greet_mantaRay,
        src: sprite_src_creeper,
        SCALE_FACTOR: 400,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 25,
        pixels: {height: 1200, width: 1600},
        INIT_POSITION: { x: 100, y: 100 },
        orientation: {rows: 1, columns: 2 },
        down: {row: 0, start: 0, columns: 2 },
        right: {row: 0, start: 0, columns: 2 },
        left: {row: 0, start: 0, columns: 2 },
        up: {row: 0, start: 0, columns: 2 },  
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

      setInterval(() => {
        sprite_data_creeper.updatePosition(); 
      }, 100);

    // List of objects defnitions for this level
    this.objects = [
      { class: Background, data: image_data_water },
      { class: PlayerOne, data: sprite_data_turtle },
      { class: PlayerTwo, data: sprite_data_fish },
      { class: NpcFrog, data: sprite_data_frog },
      { class: Enemy}
    ];
  }

}

export default GameLevelWater;