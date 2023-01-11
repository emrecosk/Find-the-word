const topicsAll=["Animals","Animals2","Bathroom","Body","Buildings","Clothes","Clothes2","Colors","Computer","Countries",
"Food","Food2","Food3","Garden","Home","Home2","Hospital","Jobs","Jobs2","Kitchen","Music","Nature","Numbers","Personal","Places","Sports","Stationery","Subjects","Things","Transport"]


const topics = {

Animals: ["cat","frog","chicken","turtle","crab","rabbit","shark","crocodile","giraffe","cow","horse","butterfly","bull","pig","rhino","sheep","snake","panda","fish","penguin","tiger","duck","bat","dragon","fox","elephant","spider","fly","mouse","monkey","bird","dog","skunk"],

Animals2:["eagle","swan","bee","tortoise","wolf","lion","owl","caterpillar","gorilla","hippo","goat","snail","beetle","kangaroo","parrot","whale","grasshopper","ant","camel","lizard","rat","zebra","donkey","scorpion","squirrel","bear","dolphin","octopus","deer","peacock"],

Bathroom:["soap","toothpaste","shampoo","comb","dental floss","sink","toilet","hairbrush","lipstick","towel","bath","toothbrush","razor","shower","faucet","mirror","plug"],

Body:["eyes","teeth","toes","head","eyebrow","ears","hair","shoulder","tongue","bones","hand","finger","knee","moustache","ankle","nose","leg","thumb","neck","heel","mouth","beard","elbow","belly","armpit","arm","foot","wrist","chin","wings","feathers","tail"],

Buildings:["bridge","garage","hospital","skyscrapers","church","castle","airport","tunnel","florist","stadium","factory","windmill","zoo","house","statue","lighthouse","tent","road","billboard"],

Clothes:["Tshirt","suit","belt","pants","vest","gloves","dress","ring","skirt","earring","shirt","jacket","scarf","shorts","tie","coat","socks","earphones","sweater","umbrella","shoes","swimsuit","glasses","hat","bracelet","watch","necklace","bag"],

Clothes2:["jeans","blazer","backpack","slippers","apron","sneakers","tracksuit","mittens","crown","boots","sandals","goggles","sunglasses","hoodie","blouse","helmet","cap","raincoat","cardigan","headphones","handbag"],

Colors:["red","yellow","black","orange","purple","blue","green","white","grey","brown"],

Computer:["mouse","microphone","battery","calculator","socket","controller","monitor","printer","line","switch","laptop","keyboard","speakers","disc","tablet","phone","plug","headset","camera"],

Countries:["America","Australia","Canada","Ireland","France","England","Spain","Thailand","Egypt","China","India","Italy","Turkey","Argentina","Russia","Germany","Japan","Brazil","Mexico"],

Food:["chicken","hamburger","chocolate","noodles","baguette","apple","sandwich","peas","mangoes","muffin","oranges","candy","ketchup","shrimp","coconuts","bananas","fish","pie","wine","salt and pepper","eggs","lamb","lettuce","broccoli","lime","milk","peppers","pork","sushi","avocado","tomatoes","beef","coffee","lobster","lemonade"],

Food2:["cheeseburger","bread rolls","egg","spaghetti","celery","watermelon","donuts","burrito","cauliflower","walnut","lemon","corn","lollipop","croissant","eggplant","cake","steak","water","cherries","olives","pizza","cheese","soup","waffles","grapefruit","pears","salad","onions","kebabs","pumpkin","ice cream","fries","tea","orange juice","ginger"],

Food3:["carrots","rice","boiled eggs","cabbage","garlic","mushrooms","pasta","chilies","noodles","strawberries","cucumber","peanuts","potatoes","pineapple","bread","chips","cereal","milkshake","sausages","ice","popcorn","cookie","tangerine","grapes","butter","plums","spaghetti","bacon","cola","peaches","taco","kiwifruit"],

Garden:["bench","shed","drain","peg","fireworks","spade","wheelbarrow","mop","screw","bucket","flag","broom","gate","swing","ladder","screwdriver","drill","slide","fountain","hammer","nail","chimney","fence","barbecue","wall","saw","hammock"],

Home:["bed","computer","mirror","bin","chair","door","picture","fireplace","stove","sofa","cupboard","books","cushion","rug","window","shelves","clock","stereo","map","table","plant","dresser","light","telescope","coat hanger"],

Home2:["desk","fan","heater","doormat","lockers","drawers","lamp","fridge","fire extinguisher","tv","stool","vase","remote","deckchair","bookcase","curtains","handrail","armchair","closet","recliner","pillow"],

Hospital:["bandage","stretcher","medicine","cough","rash","syringe","scar","wheelchair","stethoscope","crutches","cut","headache","thermometer","needle"],

Jobs:["policeman","receptionist","nurse","mechanic","doctor","artist","dancer","cashier","firefighter","hairdresser","pilot","driver","carpenter","scientist","reporter","musician","lumberjack","teacher","dishwasher","farmer","waiter","mailman","baker","electrician","politician"],

Jobs2:["cleaner","builder","engineer","plumber","decorator","dentist","vet","security","tutor","chef","surgeon","photographer","masseuse","singer","pharmacist","florist","gardener","fisherman","soldier","illustrator","barman","clown","deliveryman","chauffeur"],

Kitchen:["cup","spoon","kettle","corkscrew","bowl","pan","toaster","wine glass","mixer","glass","jug","microwave","dishcloth","grater","knife","saucepan","teapot","cleaver","fork","chopsticks","plate","bottle","tray","spatula","peeler"],

Music:["violin","keyboard","saxophone","trumpet","clarinet","piano","drums","guitar","accordion","tambourine","harp","harmonica","banjo"],

Nature:["the sun","rainbow","river","volcano","the moon","flower","snow","bush","lightning","planet","rain","clouds","mountain","forest","cliffs","tree","leaf","desert","lake","wind","stars","island","tornado","earth"],

Numbers:["one","six","eleven","sixteen","thirty","two","seven","twelve","seventeen","forty","three","eight","thirteen","eighteen","fifty","four","nine","fourteen","nineteen","sixty","five","ten","fifteen","twenty","seventy","eighty","ninety","zero"],

Personal:["bag","purse","wallet","suitcase","zip","watch","keys","money","headphones","gift","glasses","flashlight","newspaper","button","laptop","pen","book","tissues","kite","phone","mug","whistle","straw","ticket","basket","cards","flower"],

Places:["bedroom","park","office","pool","corridor","library","classroom","supermarket","playground","bathroom","store","restaurant","study","kitchen","cafe","gym","stairs","garden","beach"],

Sports:["soccer","cycling","weightlifting","wrestling","diving","basketball","baseball","football","hockey","bowling","swimming","pool","chess","cricket","archery","boxing","volleyball","skateboarding","golf","javelin","tennis","running","skiing","karate","badminton","surfing","darts","rugby","long jump"],

Stationery:["pen","ruler","stapler","marker","pencil","tape","notepad","clipboard","calculator","folder","paintbrush","sharpener","scissors","crayons","blackboard","paper","pins","whiteboard","eraser","envelope"],

Subjects:["maths","music","Spanish","chemistry","English","geography","computing","Chinese","art","history","physics","biology"],

Things:["candle","magnet","satchel","traffic cone","atm","backpack","dice","padlock","letter","microscope","balloon","briefcase","globe","can","rucksack","sword","coins","box","luggage","axe","bolt","ball","lighter","drone","medal","snorkel","chain","shield"],

Transport:["bike","car","van","scooter","rocket","bus","truck","ambulance","skateboard","moped","plane","train","helicopter","escalator","tractor","motorbike","boat","elevator","limo"]

}
