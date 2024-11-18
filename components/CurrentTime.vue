<template>
    <div>
      <p class="text-jost font-bold text-dark-black text-base">{{ currentTime }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: this.getFormattedTime()
      };
    },
    created() {
      this.updateTime();
      this.timer = setInterval(this.updateTime, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    methods: {
      updateTime() {
        this.currentTime = this.getFormattedTime();
      },
      getFormattedTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let period = "AM";
  
        if (hours >= 12) {
          period = "PM";
          if (hours > 12) {
            hours -= 12;
          }
        }
  
        if (hours === 0) {
          hours = 12;
        }
  
        // Add leading zero to minutes if less than 10
        minutes = minutes < 10 ? `0${minutes}` : minutes;
  
        // Return the formatted time string without the period (AM/PM)
        return `${hours}:${minutes}`;
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  
  