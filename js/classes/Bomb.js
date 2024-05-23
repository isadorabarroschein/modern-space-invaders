class Bomb {
    static radius: 30;
    construtor({position, velocity }) {
    this.position = position = position;
    this.velocity = velocity = velocity;
    this.radius = 0;
    this.color = " ";
    this.opacity = 1;
    this.active = false;

    gsap.to(this, {
        radius: 30
    });
  }
} 

      