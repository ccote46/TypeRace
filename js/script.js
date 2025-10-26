var easyTests = [
    "The cat walked across the sunny yard. Birds sang in the trees while the wind moved the leaves gently. Children played near the fence. Dogs barked at passing cars. Flowers bloomed with bright colors. The sky was blue with a few white clouds. Everyone enjoyed the warm and quiet morning.",
    
    "Tom and his friends went to the park. They kicked the ball and ran around laughing. Some children played on swings while others climbed the jungle gym. People walked their dogs along the path. The sun shone brightly, making shadows on the green grass. Everyone had fun under the clear blue sky.",
    
    "Anna likes to read books in the library. She finds quiet corners to sit and enjoy stories. The pages are filled with pictures and words. Other children also read near her. The librarian helps everyone find new books. The room smells of paper and ink. Reading brings Anna joy every day.",
    
    "The small boat floated on the calm lake. Ducks swam nearby and fish jumped out of the water. The sun reflected on the surface and made it sparkle. Children threw small stones into the lake. Parents watched carefully. The air was fresh and the sound of water made everyone feel relaxed and happy.",
    
    "The boy ran through the garden chasing butterflies. Flowers of red, yellow, and blue surrounded him. Bees flew from flower to flower. He laughed as he tried to touch a butterfly. His sister watched from the porch. The wind blew gently. The garden smelled sweet and the sun shone warmly on the ground.",
    
    "A family went on a picnic in the park. They spread a blanket and brought sandwiches, juice, and fruit. Children played with a ball. Birds sang in the trees. The father read a book while the mother watched the children. Everyone enjoyed the bright sunny day together with smiles and laughter.",
    
    "The dog ran across the yard and barked at a passing car. The cat climbed a tree to watch from above. Birds chirped on the fence. Children ran around playing catch. The sun was high in the sky. Flowers moved slightly in the soft wind. It was a perfect day to play outside.",
    
    "The bakery smelled of fresh bread and sweet cakes. People came to buy cookies, muffins, and pies. The baker worked behind the counter with a smile. Children pressed their faces against the glass to see the treats. The sunlight shone through the window. Everyone left happy with warm bread in their hands.",
    
    "The teacher wrote letters on the blackboard. Students copied the words in their notebooks. Everyone worked quietly and focused on learning new things. Outside, the sun shone and the wind moved the trees. Birds sang in the distance. At the end of class, children packed their bags and left with happy faces.",
    
    "The market was full of colors and smells. People bought fruits, vegetables, and flowers. Children ran between stalls while parents chose fresh goods. Vendors called to customers and smiled. The sun was bright and the air was warm. Everyone enjoyed the lively place. Laughter and talking filled the busy streets with energy.",
    
    "A small bird sat on the window sill and sang a sweet song. The wind moved the leaves gently. Children watched from inside the house. Flowers in the garden moved with the breeze. The sun shone on the grass. Everyone listened and smiled. Nature felt alive and peaceful on this warm day.",
    
    "The river flowed quietly through the forest. Trees stood tall on both sides. Fish jumped out of the water and birds flew overhead. Children played near the river bank. The sun reflected on the water making it sparkle. Everyone enjoyed the calm and beauty of the forest. The day was perfect and peaceful.",
    
    "A boy built a small tower with blocks. Each block balanced on the one below. His sister watched and clapped when it grew tall. They laughed and played together. The sun shone through the window making the room bright. The day felt calm and full of happiness as they stacked each block carefully.",
    
    "The bakery door opened and a warm smell came out. People walked in to buy bread, pies, and muffins. The baker smiled and served each customer. Children looked at the cakes with wide eyes. The sun shone on the street outside. Everyone enjoyed the warm smells and sweet treats that filled the room.",
    
    "A boy ran across the field chasing a ball. His friends ran after him laughing. Dogs barked and birds flew above. The sun was high in the sky. Children played until they were tired. Grass moved under their feet. The day was full of fun and energy. Everyone enjoyed the bright afternoon together.",
    
    "The small town was quiet and calm. People walked along the streets and waved to neighbors. Children played near the fountain. Birds sang on the rooftops. The sun shone gently on the buildings. Shops opened and sold fresh food. Everyone smiled and greeted each other. Life felt peaceful and happy in the town.",
    
    "A girl painted a picture of flowers and trees. She used bright colors like red, yellow, and blue. Her brother watched and smiled. The sun shone through the window making the room warm. Birds chirped outside. Everyone enjoyed the quiet afternoon. The colors made the room feel cheerful and full of life.",
    
    "The dog ran in the garden chasing a butterfly. Flowers moved in the soft wind. Children laughed and played on the grass. The sun shone on the leaves. Birds flew from tree to tree. Everyone felt happy and relaxed. The garden was full of colors, sounds, and life making the day bright and joyful.",
    
    "A boy walked to school with his backpack. Children followed the path together. Birds sang in the trees above. The sun shone on the path. Flowers grew along the side of the road. Everyone waved to neighbors and smiled. The morning felt fresh and calm. The children enjoyed the walk and talked happily together.",
    
    "The park was full of children playing games. They ran, jumped, and laughed together. Dogs ran after balls while parents watched. Birds sang from the trees above. The sun shone and the air felt warm. Everyone enjoyed the bright day. The park was alive with colors, sounds, and happy voices all around."
];
var medTests = [ //100 words -- medium
    "The early morning sun peeked over the horizon, painting the sky in soft shades of orange and gold. Birds began their cheerful songs as the quiet village slowly came to life. Farmers led their animals out to pasture while children chased each other along dusty paths. The scent of fresh bread drifted from the bakery, mixing with the earthy aroma of dew-drenched grass. It was a simple scene, yet it carried a timeless sense of peace. Everyone moved with purpose, knowing that another day of work and laughter awaited under the ever-changing colors of the rising dawn.",
    "Technology continues to shape the rhythm of our lives in ways our grandparents could hardly imagine. A single device in our pocket can navigate us across continents, translate languages, and capture memories in brilliant detail. Yet with convenience comes distraction. The constant buzz of notifications can steal quiet moments meant for reflection or rest. Balancing the digital and the real requires discipline and awareness. We must learn to set boundaries, to look up from glowing screens and rediscover the texture of life: wind, laughter, and silence. Perhaps then, technology can serve us without quietly consuming our attention.", 
    "Learning something new always begins with uncertainty. Whether it is a language, an instrument, or a sport, the first attempts are full of awkward mistakes. Yet each failure is a necessary step toward mastery. Muscles remember what the mind forgets, and patterns form through repetition and patience. True learning is not about perfection but persistence. You show up, stumble, adjust, and try again. Slowly, confidence grows until what once felt impossible becomes second nature. The beauty lies not in the final result but in the quiet transformation that happens along the way, from confusion to clarity and doubt to skill.",
    "The small village sat between green hills and winding paths. Smoke rose from chimneys as families prepared their meals. Chickens wandered the yards, pecking at the ground. Children laughed and ran after each other, their voices echoing across fields. Shops opened slowly, selling bread, vegetables, and handmade goods. The scent of fresh herbs and flowers mingled with the air. Farmers brought their carts to the market, speaking with neighbors and exchanging news. Every day followed a rhythm of work and rest. Life was simple but full. People knew each other well and cared for one another. Evenings brought calm and quiet, with soft light fading over the hills.",
    "Every city has its rhythm: the echo of footsteps on pavement, the distant rumble of trains, and the pulse of life moving through crowded streets. Neon lights flicker, taxis honk, and food vendors shout over the noise. Amid this chaos, stories unfold as strangers meet, dreams rise, and hearts break beneath towering glass. For some, the city is freedom; for others, it is a maze. Yet beneath its steel and concrete, humanity beats in unison. Every sound, every light, every hurried breath becomes part of the same endless song, a reminder that even in the crowd we are never truly alone.",
    "Creativity often begins in boredom. When the mind has nothing to focus on, it begins to wander, connecting ideas that were never meant to meet. Artists, inventors, and dreamers have always known this secret: silence and stillness are not empty but full of potential. The challenge is to resist constant stimulation long enough to let imagination bloom. Doodles become designs, and daydreams turn into discoveries. Every great idea starts with a single curious thought that refuses to fade. So let your mind drift now and then. Who knows what might rise from the quiet corners of your own imagination?",
    "On the mountain trail, the air thinned with every step. Pines gave way to rock and wind, and clouds drifted so close they brushed my fingertips. The climb was brutal, but each turn revealed new wonders such as frozen waterfalls, distant valleys, and peaks glowing orange beneath the fading sun. At the summit, the world fell silent. I could see everything and nothing at once: endless sky, endless earth. The struggle vanished, replaced by awe. For a brief moment, I understood why people chase summits. It is not about conquering nature; it is about discovering how small and alive we really are.",
    "In the old library, sunlight fell across wooden tables covered with books. Pages whispered under careful fingers, and the smell of paper filled the air. Students studied in silence, writing notes and reading aloud softly. Outside, wind moved leaves on ancient trees that shaded the building. Time seemed to slow, letting thought take shape without rush. Every corner held stories waiting to be discovered. The walls echoed with ideas from the past. Quiet contemplation gave space for imagination to grow. Knowledge felt alive, connecting past and present. Here, learning was not forced but invited, a gentle path to understanding and insight."
];
var hardTests = [// still100 but with bigger harder wrds
    "The labyrinthine corridors of the ancient library exuded a musty fragrance that hinted at centuries of forgotten knowledge. Scrolls and tomes lay in haphazard stacks, their leather covers cracked and embossed with cryptic symbols. Scholars whispered in half-forgotten languages, deciphering passages that defied conventional syntax. Candles flickered, casting uncertain shadows across faded maps of lands both real and imagined. Each step triggered a creaking floorboard, echoing like a subtle warning. Here, comprehension demanded not only attention but patience and insight. Only those willing to wrestle with ambiguity could extract meaning from the dense texts, leaving superficial readers overwhelmed and mystified.",
    "Astronomers peer into the inky void, charting stellar phenomena whose scale challenges human intuition. Pulsars spin with uncanny precision, emitting radiation at intervals measured in milliseconds. Black holes warp the very fabric of spacetime, bending light in ways that seem paradoxical yet conform to rigorous equations. Observational data arrives in torrents, demanding sophisticated algorithms to parse patterns invisible to casual inspection. Even seasoned theorists wrestle with the abstraction inherent in cosmology, translating mathematical constructs into conceptual understanding. Each discovery raises questions of origin, destiny, and the limits of perception, reminding us that knowledge is a fractal pursuit of infinitesimal truths.",
    "In biochemical laboratories, meticulous protocols govern reactions that produce compounds with potentially profound consequences. Minute deviations in temperature, pH, or reagent concentration can yield dramatically different results, sometimes catastrophic. Researchers navigate complex instrumentation, calibrating spectrophotometers, centrifuges, and chromatography systems with exacting precision. Observations must be logged methodically, and conclusions drawn with statistical rigor. Peer review adds another layer of scrutiny, demanding reproducibility and clarity. In this environment, intuition alone is insufficient; mastery of theoretical principles and technical skill are indispensable. Success is measured not only by outcome but by the reliability, elegance, and interpretability of experimental design.",
    "The art of negotiation often hinges on subtle cues and tacit understanding rather than explicit statements. Linguistic nuance, timing, and posture interact to convey confidence, hesitation, or hidden intent. Skilled negotiators recognize microexpressions, modulate tone, and strategically frame arguments to maximize persuasive impact. Cultural conventions add layers of complexity, as gestures or phrases accepted in one society may provoke confusion or offense in another. Emotional intelligence becomes as essential as logic, requiring participants to anticipate reactions and adjust tactics accordingly. Outcomes depend on both preparation and adaptability, revealing that mastery in negotiation blends cognition, empathy, and strategic foresight.",
    "Quantum mechanics defies classical intuition, presenting phenomena that appear paradoxical yet are mathematically coherent. Particles exist in superpositions, collapsing into specific states only upon observation. Entanglement links separated particles in correlations that challenge notions of locality. Experiments with photons, electrons, and atoms demand exquisite control, as environmental interactions can decohere fragile quantum states. Interpretations vary, from Copenhagen to many-worlds, each attempting to reconcile empirical results with conceptual frameworks. Understanding requires both mathematical literacy and philosophical flexibility, as the domain tests assumptions about causality, measurement, and the fundamental nature of reality itself.",
    "Geopolitical landscapes shift unpredictably, influenced by economic, cultural, and military variables interacting across scales. Treaties are negotiated with complex contingencies, often embedding clauses contingent on future technological or demographic developments. Alliances can pivot overnight, and historical grievances may resurface unexpectedly. Analysts model these dynamics using game theory, statistical simulations, and historical analogies, but uncertainty persists. Leadership decisions require balancing pragmatism with ethical considerations, often under intense time pressure. Misjudgments propagate rapidly, with consequences spanning generations. Success is rarely absolute, measured instead in relative stability, influence, and the avoidance of catastrophic escalation.",
    "Neurobiology reveals a universe of complexity within a single human brain. Neurons communicate via electrochemical impulses, forming networks capable of learning, memory, and consciousness. Synaptic plasticity underlies behavioral adaptation, while neurotransmitter imbalances can drastically alter cognition and mood. Imaging techniques, from fMRI to optogenetics, expose functional architecture but cannot fully capture subjective experience. Theoretical models attempt to bridge physiology and phenomenology, yet uncertainty remains vast. Research demands precision, patience, and interdisciplinary fluency, integrating psychology, genetics, chemistry, and computational modeling. Progress is iterative, with small insights gradually elucidating the extraordinary interplay between molecular processes and emergent cognition.",
    "Cryptography safeguards information in increasingly sophisticated ways. Algorithms encode data into sequences incomprehensible without proper keys, employing number theory, modular arithmetic, and abstract algebra. Quantum computing threatens some traditional schemes, prompting development of post-quantum protocols resistant to superposition-based attacks. Security analysts must anticipate vulnerabilities in both software and human behavior, recognizing that social engineering often outpaces mathematical defenses. Key management, authentication, and encrypted transmission require meticulous implementation, as a minor oversight can compromise entire systems. The field merges theoretical elegance with practical stakes, where mastery is measured in resilience against adversaries who innovate as rapidly as defenders.",
    "Oceanography combines observation, modeling, and experimentation to understand the dynamics of Earth's waters. Currents transport heat and nutrients, influencing climate and ecosystems. Salinity, temperature, and pressure interact to create stratification, affecting biogeochemical cycles. Measuring instruments deployed from ships or autonomous vehicles capture vast datasets, which must be interpreted using complex numerical models. Phenomena such as El Niño or thermohaline circulation involve non-linear interactions that challenge prediction. Researchers synthesize physics, chemistry, biology, and geospatial analysis to anticipate changes. The ocean is both a laboratory and a puzzle, demanding rigorous methodology and cross-disciplinary insight to reveal the hidden mechanisms shaping planetary life.",
    "Linguistics uncovers the architecture of human language, revealing patterns in phonology, morphology, syntax, and semantics. Sounds combine according to rules that vary subtly across dialects. Words carry denotations and connotations, evolving over time in response to culture, migration, and technology. Pragmatics examines context-dependent meaning, while sociolinguistics investigates how language reflects and enforces social hierarchies. Fieldwork often involves eliciting native speaker intuitions, recording rare or endangered tongues, and analyzing corpora with computational tools. Understanding a language fully requires integrating historical, cognitive, and social perspectives, recognizing that every utterance embodies layers of systematic structure and human creativity simultaneously.",
    "In the cavernous halls of the museum, artifacts from distant civilizations were arranged with meticulous care. Marble statues gleamed under soft lighting, while delicate ceramics balanced on pedestals. Each piece carried a story, encoded in patterns, inscriptions, and wear that hinted at centuries of use. Scholars examined surfaces with magnifying tools, interpreting meaning from subtle nuances in design. Conversations were hushed, filled with precise terminology and careful hypotheses. Visitors moved slowly, absorbing information while contemplating history. The interplay of material culture, context, and human intention created a rich tapestry of knowledge. Understanding demanded patience, attention, and a willingness to embrace uncertainty in interpreting the past.",
    "High in the laboratory tower, scientists monitored a series of complex reactions that unfolded in precisely controlled environments. Temperatures, pressures, and concentrations were adjusted minutely, with even small variations producing dramatically different results. Sensors fed continuous streams of data to computer systems, which analyzed patterns and detected anomalies. Researchers consulted theoretical models, ensuring that experimental outcomes matched predictions. Every action required careful reasoning and meticulous execution. Mistakes could compromise months of work. The atmosphere was tense yet focused, each individual contributing to a collaborative pursuit of insight. Knowledge advanced incrementally, built on observation, analysis, and the persistent refinement of understanding through repeated trials and thoughtful interpretation."
] 

var tests; //set this equal to easy med or hard dep on usr choice
var rand = 0; 
var watch; //create instance of stopwatch
var difficulty;
var incorrect = 0;
var totalTyped = 0;
let hasStarted = false;

const redLightLink = "https://img2.clipart-library.com/27/red-traffic-light-clipart/red-traffic-light-clipart-4.png";
const greenLightLink = "https://freesvg.org/img/traffic_semaphore_silhouette_green.png";
const yellowLightLink = "https://www.clker.com/cliparts/M/K/0/d/z/d/traffic-semaphore-yellow-light-hi.png"

function getRand(){
    return Math.floor(Math.random() * tests.length);
}

$(document).ready(function(){ //this rusn when doc is opened
    watch = new StopWatch("#displayTime");
    $("#stopLight").attr("src", yellowLightLink); //initalize stoplight


    $("#startButton").click(function(){
        if (!tests) {
            alert("Please select a difficulty first!");
            return;
        }
        
        rand = getRand();
        $("#testrandom").text(tests[rand]);
    
        // Reset
        watch.reset();
        $("#input").val("");
        $("#startButton").css("color", "black");
        incorrect = 0;
        totalTyped = 0;
        hasStarted = false;
    
        $("#stopLight").attr("src", yellowLightLink);
    
    });

    //set difficulties
    $("#easy").click(function(){
        difficulty = "Easy";
        tests = easyTests;
    })

    $("#medium").click(function(){
        difficulty = "Medium";
        tests = medTests;
    })

    $("#hard").click(function(){
        difficulty = "Hard";
        tests = hardTests;
    })

    $("input").click(function(){
        $("#stopLight").attr("src", yellowLightLink);
    });

    $("#input").on("keypress keyup", function(){
        totalTyped++;
        
        var userInput = $("#input").val();
            if (tests[rand].startsWith(userInput)) {
                $("#startButton").css("color", "green")
                $("#stopLight").attr("src", greenLightLink)
                $("#input").css("border", "3px solid var(--racing-green)")            
            }
            else{
            $("#startButton").css("color", "red")
            $("#stopLight").attr("src", redLightLink)
            $("#input").css("border", "3px solid var(--racing-red)") 
            incorrect++;

            }
            if(tests[rand] == userInput){
                $("#startButton").css("color", "purple")
                watch.stop();
                var wpm = watch.getWPM(userInput);
                var accuracy = Math.round(((totalTyped - incorrect) / totalTyped) * 100);


                $("#finalWPM").text("WPM: " + wpm);
                $("#finalTime").text("Time: " + $("#displayTime").text());
                $("#accuracy").text("Accuracy: " + String(accuracy) + "%");
                
                
                $("#resultsHolder").css("display", "block");
            }
    });
    $("#easy, #medium, #hard").click(function() {
        $("#easy, #medium, #hard").removeClass("active-diff"); // remove 
        $(this).addClass("active-diff"); 

    });

    //start watch when txt field selected
    $("#input").click(function(){
        if (!tests) { //if nothing is selected dont start timer
            return;
        }

        if (!hasStarted) { 
            watch.start();
            hasStarted = true;
        }
    });

    //reset everything for for new game
    $("#playAgain").click(function(){
        watch.reset();
        $("#stopLight").attr("src", yellowLightLink);
        $("#resultsHolder").css("display", "none");
        $("#input").val("");
        $("#testrandom").text("Click the button to start!");
        incorrect = 0;
        totalTyped = 0;
        hasStarted = false;
    })

});
