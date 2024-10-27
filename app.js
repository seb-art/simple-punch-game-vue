new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    ended: false,
  },
  methods: {
    punch: function () {
      this.health -= 1;
      if (this.health <= 0) {
        this.ended = true;
      }
      
      const punchSound = document.getElementById("punch-sound");
      punchSound.currentTime = 0;
      punchSound.play();

      const bag = document.getElementById("bag");
      bag.classList.add("move");

      setTimeout(() => {
        bag.classList.remove("move");
      }, 300);
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    },
  },
  computed: {},
});
