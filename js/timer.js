class StopWatch {
    constructor(displaySelector) {
        // Initialize time values
        this.milisec = 0;
        this.sec = 0;
        this.min = 0;

        // Cache the jQuery display element
        this.display = $(displaySelector);

        // Timer reference
        this.timer = null;
    }

    // Update stopwatch logic
    update() {
        this.milisec += 10; // called every 10ms
        if (this.milisec >= 1000) {
            this.milisec = 0;
            this.sec++;
            if (this.sec >= 60) {
                this.sec = 0;
                this.min++;
            }
        }

        this.display.text(
            `${String(this.min).padStart(2, "0")}:${String(this.sec).padStart(2, "0")}:${String(Math.floor(this.milisec / 10)).padStart(2, "0")}`
        );

        console.log(this.milisec);
    }

    start(){
        console.log("starting wtach");

        if (this.timer !== null){
            clearInterval(this.timer);
        }
        this.timer = setInterval(() => this.update(), 10);
    }

    //pause timer (will be used soon)
    stop(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    //put everything to zero
    reset() {
        this.stop();
        this.milisec = 0;
        this.sec = 0;
        this.min = 0;
        this.display.text("00:00:00");
    }

    getWPM(textTyped){
        if(this.timer == null){
            // Convert everything to minutes
            var totalMinutes = this.min + (this.sec / 60) + (this.milisec / 60000);
            
            // Prevent division by zero
            if(totalMinutes < 0.01){
                return 0;
            }
            
            // Count actual words (split by spaces)
            var wordCount = textTyped.trim().split(/\s+/).length;
            var wpm = wordCount / totalMinutes;
            
            return Math.round(wpm);
        }
        else{
            return null;
        }
    }
    


}