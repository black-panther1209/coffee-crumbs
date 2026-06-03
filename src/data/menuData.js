import breads from "../assets/breads/breads.png.jpeg";
import brownies from "../assets/brownies/brownie.png.jpeg";
import burgers from "../assets/burgers/burger.png.jpeg";
import cakes from "../assets/cakes/pastry.png.jpeg";
import chilli from "../assets/chilli/chilli.png";
import coffee from "../assets/coffee/hot coffee.png";
import coldcoffee from "../assets/coldcoffee/cold coffee.png";
import coolers from "../assets/coolers/coolers.png.jpeg";
import corn from "../assets/corn/corn.png";
import icecream from "../assets/icecream/ice cream.png.jpeg";
import momos from "../assets/momos/momo.png.jpeg";
import nachos from "../assets/nachos/nachos.png.jpeg";
import noodles from "../assets/noodles/noodles.png";
import pasta from "../assets/pasta/pasta.png.jpeg";
import pizza from "../assets/pizza/pizza.png.jpeg";
import rice from "../assets/rice/fried rice.png";
import rolls from "../assets/rolls/rolls.png";
import sandwiches from "../assets/sandwiches/sandwich.png";
import shakes from "../assets/shakes/smoothies.png.jpeg";
import snacks from "../assets/snacks/flitters.png.jpeg";
import soups from "../assets/soups/soup.png.jpeg";
const menuItems = [

  {
    category: "☕ HOT COFFEE",
    image: coffee,
    items: [
      { name: "Espresso", price: "₹69" },
      { name: "Americano", price: "₹79" },
      { name: "Cappuccino", price: "₹109" },
      { name: "Latte", price: "₹119" },
      { name: "Mocha", price: "₹129" },
      { name: "Flat White", price: "₹119" },
      { name: "Macchiato", price: "₹109" },
      { name: "Irish Coffee", price: "₹149" },
      { name: "Hazelnut Latte", price: "₹149" },
      { name: "Vanilla Latte", price: "₹139" },
      { name: "Caramel Cappuccino", price: "₹149" },
      { name: "Turkish Coffee", price: "₹139" },
      { name: "Affogato", price: "₹149" },
      { name: "Hot Chocolate", price: "₹119" },
    ],
  },

  {
    category: "🧊 COLD COFFEE",
    image: coldcoffee,
    items: [
      { name: "Cold Brew", price: "₹119" },
      { name: "Iced Latte", price: "₹129" },
      { name: "Iced Americano", price: "₹119" },
      { name: "Mocha Frappe", price: "₹169" },
      { name: "Vanilla Cold Coffee", price: "₹149" },
      { name: "Hazelnut Cold Coffee", price: "₹179" },
      { name: "Chocolate Cold Brew", price: "₹189" },
      { name: "Caramel Cold Coffee", price: "₹179" },
      { name: "Oreo Cold Coffee", price: "₹189" },
      { name: "Coffee Float", price: "₹199" },
      { name: "Iced Mocha", price: "₹169" },
      { name: "Belgian Chocolate Frappe", price: "₹199" },
    ],
  },

  {
    category: "🍰 CAKES & PASTRIES",
    image: cakes,
    items: [
      { name: "Chocolate Truffle Cake", price: "₹99" },
      { name: "Red Velvet Cake", price: "₹109" },
      { name: "Blueberry Cheesecake", price: "₹119" },
      { name: "Classic Cheesecake", price: "₹109" },
      { name: "Black Forest Cake", price: "₹89" },
      { name: "Tiramisu", price: "₹119" },
      { name: "Coffee Walnut Cake", price: "₹109" },
      { name: "Dutch Chocolate Pastry", price: "₹69" },
      { name: "Pineapple Pastry", price: "₹49" },
      { name: "Strawberry Pastry", price: "₹69" },
      { name: "Choco Lava Cake", price: "₹99" },
      { name: "Banoffee Pie", price: "₹109" },
      { name: "Butter Croissant", price: "₹49" },
      { name: "Chocolate Croissant", price: "₹69" },
      { name: "Cinnamon Roll", price: "₹89" },
    ],
  },

  {
    category: "🍫 BROWNIES",
     image: brownies,
    items: [
      { name: "Classic Chocolate Brownie", price: "₹99" },
      { name: "Walnut Brownie", price: "₹109" },
      { name: "Fudge Brownie", price: "₹119" },
      { name: "Nutella Brownie", price: "₹169" },
      { name: "Oreo Brownie", price: "₹149" },
      { name: "Caramel Brownie", price: "₹139" },
      { name: "Dark Chocolate Brownie", price: "₹159" },
      { name: "Chocolate Chip Brownie", price: "₹139" },
      { name: "Brownie Sundae", price: "₹199" },
    ],
  },

  {
    category: "🍨 ICE CREAMS",
     image: icecream,
    items: [
      { name: "Vanilla Bean", price: "₹69" },
      { name: "Belgian Chocolate", price: "₹89" },
      { name: "Butterscotch", price: "₹79" },
      { name: "Strawberry Cream", price: "₹79" },
      { name: "Blueberry Swirl", price: "₹99" },
      { name: "Black Currant", price: "₹99" },
      { name: "Coffee Caramel Crunch", price: "₹109" },
      { name: "Mint Chocolate Chip", price: "₹109" },
      { name: "Cookies & Cream", price: "₹109" },
      { name: "Salted Caramel", price: "₹119" },
      { name: "Nutella Blast", price: "₹129" },
      { name: "Oreo Delight", price: "₹119" },
      { name: "Mango Magic", price: "₹99" },
      { name: "Tender Coconut", price: "₹109" },
      { name: "Red Velvet Scoop", price: "₹119" },
    ],
  },

  {
    category: "🥤 SHAKES & SMOOTHIES",
    image: shakes,
    items: [
      { name: "Oreo Shake", price: "₹109" },
      { name: "Chocolate Shake", price: "₹99" },
      { name: "KitKat Shake", price: "₹119" },
      { name: "Brownie Shake", price: "₹139" },
      { name: "Vanilla Shake", price: "₹89" },
      { name: "Strawberry Shake", price: "₹99" },
      { name: "Blueberry Shake", price: "₹119" },
      { name: "Cold Cocoa", price: "₹89" },
      { name: "Mango Smoothie", price: "₹109" },
      { name: "Banana Shake", price: "₹69" },
      { name: "Peanut Butter Shake", price: "₹139" },
      { name: "Belgian Chocolate Shake", price: "₹149" },
      { name: "Caramel Shake", price: "₹109" },
      { name: "Mocha Shake", price: "₹129" },
      { name: "Nutella Shake", price: "₹149" },
    ],
  },

  {
    category: "🍹 COOLERS & REFRESHERS",
    image: coolers,
    items: [
      { name: "Mint Mojito", price: "₹99" },
      { name: "Blue Lagoon", price: "₹119" },
      { name: "Lemon Iced Tea", price: "₹69" },
      { name: "Peach Iced Tea", price: "₹79" },
      { name: "Watermelon Cooler", price: "₹99" },
      { name: "Virgin Mojito", price: "₹119" },
      { name: "Berry Blast Cooler", price: "₹129" },
      { name: "Lime Soda", price: "₹59" },
      { name: "Orange Sparkler", price: "₹99" },
      { name: "Green Apple Mojito", price: "₹129" },
    ],
  },

  {
    category: "🥪 SANDWICHES",
    image: sandwiches,
    items: [
      { name: "Classic Veg Sandwich", price: "₹49" },
      { name: "Grilled Cheese Sandwich", price: "₹69" },
      { name: "Paneer Tikka Sandwich", price: "₹89" },
      { name: "Corn & Cheese Sandwich", price: "₹79" },
      { name: "Mexican Sandwich", price: "₹99" },
      { name: "Peri Peri Veg Sandwich", price: "₹89" },
      { name: "Mushroom Cheese Sandwich", price: "₹89" },
      { name: "Italian Herb Sandwich", price: "₹99" },
      { name: "Club Sandwich", price: "₹99" },
      { name: "Tandoori Paneer Sandwich", price: "₹99" },
      { name: "Spicy Veggie Sandwich", price: "₹79" },
      { name: "Chocolate Sandwich", price: "₹69" },
      { name: "Cheesy Jalapeno Sandwich", price: "₹99" },
      { name: "Garlic Mayo Sandwich", price: "₹69" },
      { name: "Double Cheese Sandwich", price: "₹99" },
    ],
  },

  {
    category: "🍕 PIZZAS",
    image: pizza,
    items: [
      { name: "Margherita Pizza", price: "₹149" },
      { name: "Farmhouse Pizza", price: "₹229" },
      { name: "Veggie Supreme Pizza", price: "₹249" },
      { name: "Cheese Burst Pizza", price: "₹279" },
      { name: "Paneer Tikka Pizza", price: "₹259" },
      { name: "Mexican Green Wave Pizza", price: "₹239" },
      { name: "Mushroom Delight Pizza", price: "₹229" },
      { name: "Corn & Cheese Pizza", price: "₹219" },
      { name: "Peri Peri Pizza", price: "₹249" },
      { name: "BBQ Paneer Pizza", price: "₹289" },
      { name: "Italian Herbs Pizza", price: "₹199" },
      { name: "Double Cheese Pizza", price: "₹299" },
      { name: "Spicy Veg Pizza", price: "₹249" },
      { name: "Garlic Cheese Pizza", price: "₹229" },
    ],
  },

  {
  category: "🍔 BURGERS",
  image: burgers,
  items: [
    { name: "Classic Veg Burger", price: "₹69" },
    { name: "Cheese Burger", price: "₹79" },
    { name: "Paneer Burger", price: "₹109" },
    { name: "Double Patty Burger", price: "₹129" },
    { name: "Peri Peri Burger", price: "₹119" },
    { name: "Mexican Burger", price: "₹119" },
    { name: "Mushroom Burger", price: "₹99" },
    { name: "Crunchy Veg Burger", price: "₹89" },
    { name: "Cheesy Jalapeno Burger", price: "₹129" },
    { name: "BBQ Burger", price: "₹129" },
    { name: "Aloo Tikki Burger", price: "₹59" },
    { name: "Tandoori Paneer Burger", price: "₹129" },
  ],
},

{
  category: "🍝 PASTA",
  image: pasta,
  items: [
    { name: "White Sauce Pasta", price: "₹179" },
    { name: "Red Sauce Pasta", price: "₹169" },
    { name: "Pink Sauce Pasta", price: "₹189" },
    { name: "Cheesy Alfredo Pasta", price: "₹219" },
    { name: "Arrabbiata Pasta", price: "₹199" },
    { name: "Penne Pasta", price: "₹179" },
    { name: "Spaghetti Aglio Olio", price: "₹239" },
    { name: "Mushroom Pasta", price: "₹219" },
    { name: "Mexican Pasta", price: "₹229" },
    { name: "Peri Peri Pasta", price: "₹249" },
    { name: "Mac & Cheese Pasta", price: "₹259" },
    { name: "Baked Pasta", price: "₹259" },
  ],
},

{
  category: "🥡 CHINESE — NOODLES",
  image: noodles,
  items: [
    { name: "Hakka Noodles", price: "₹129" },
    { name: "Schezwan Noodles", price: "₹149" },
    { name: "Chilli Garlic Noodles", price: "₹159" },
    { name: "Singapore Noodles", price: "₹169" },
    { name: "Paneer Noodles", price: "₹179" },
    { name: "Mushroom Noodles", price: "₹169" },
    { name: "Manchurian Noodles", price: "₹189" },
    { name: "Triple Schezwan Noodles", price: "₹199" },
  ],
},

{
  category: "🌶️ CHILLI SPECIALS",
  image: chilli,
  items: [
    { name: "Chilli Potato", price: "₹99" },
    { name: "Honey Chilli Potato", price: "₹119" },
    { name: "Chilli Paneer Dry", price: "₹169" },
    { name: "Chilli Paneer Gravy", price: "₹179" },
    { name: "Chilli Mushroom", price: "₹149" },
    { name: "Chilli Baby Corn", price: "₹139" },
    { name: "Dragon Paneer", price: "₹199" },
  ],
},

{
  category: "🌽 CORN VARIETIES",
  image: corn,
  items: [
    { name: "Crispy Corn", price: "₹119" },
    { name: "Peri Peri Corn", price: "₹109" },
    { name: "Cheese Corn Bowl", price: "₹129" },
    { name: "Butter Masala Corn", price: "₹99" },
    { name: "Corn Cheese Balls", price: "₹149" },
    { name: "Mexican Corn Cup", price: "₹139" },
    { name: "Spicy Tandoori Corn", price: "₹129" },
    { name: "Garlic Butter Corn", price: "₹119" },
    { name: "Loaded Cheesy Corn", price: "₹159" },
    { name: "Sweet Corn Chaat", price: "₹99" },
    { name: "Creamy Corn Delight", price: "₹149" },
  ],
},

{
  category: "🌯 ROLLS",
  image: rolls,
  items: [
    { name: "Paneer Roll", price: "₹99" },
    { name: "Cheese Roll", price: "₹109" },
    { name: "Mushroom Roll", price: "₹119" },
    { name: "Tandoori Roll", price: "₹129" },
    { name: "Veg Spring Roll", price: "₹89" },
    { name: "Cheesy Spring Roll", price: "₹119" },
    { name: "Schezwan Roll", price: "₹129" },
    { name: "Peri Peri Roll", price: "₹109" },
    { name: "Mexican Veg Roll", price: "₹119" },
    { name: "Corn Cheese Roll", price: "₹99" },
    { name: "Garlic Mayo Roll", price: "₹89" },
    { name: "Crispy Veg Roll", price: "₹99" },
    { name: "Chilli Paneer Roll", price: "₹129" },
    { name: "Loaded Cheese Roll", price: "₹129" },
    { name: "Spicy Mushroom Roll", price: "₹119" },
  ],
},

{
  category: "🍚 RICE VARIETIES",
  image: rice,
  items: [
    { name: "Veg Fried Rice", price: "₹159" },
    { name: "Schezwan Fried Rice", price: "₹169" },
    { name: "Paneer Fried Rice", price: "₹189" },
    { name: "Mushroom Fried Rice", price: "₹179" },
    { name: "Triple Schezwan Rice", price: "₹199" },
    { name: "Burnt Garlic Rice", price: "₹189" },
    { name: "Singapore Rice", price: "₹199" },
    { name: "Chilli Garlic Rice", price: "₹169" },
    { name: "Manchurian Rice", price: "₹179" },
    { name: "Corn Fried Rice", price: "₹159" },
    { name: "Mexican Rice Bowl", price: "₹189" },
    { name: "Tandoori Paneer Rice", price: "₹199" },
    { name: "Cheese Fried Rice", price: "₹189" },
    { name: "Hot Garlic Rice", price: "₹179" },
    { name: "Dragon Rice", price: "₹199" },
  ],
},

{
  category: "🍲 SOUPS",
  image: soups,
  items: [
    { name: "Hot & Sour Soup", price: "₹119" },
    { name: "Manchow Soup", price: "₹129" },
    { name: "Sweet Corn Soup", price: "₹109" },
    { name: "Tomato Soup", price: "₹99" },
    { name: "Mushroom Soup", price: "₹149" },
    { name: "Veg Clear Soup", price: "₹99" },
    { name: "Noodle Soup", price: "₹159" },
  ],
},

{
  category: "🥟 MOMOS",
  image: momos,
  items: [
    { name: "Steam Veg Momos", price: "₹69" },
    { name: "Paneer Momos", price: "₹89" },
    { name: "Cheese Momos", price: "₹99" },
    { name: "Tandoori Momos", price: "₹119" },
    { name: "Fried Momos", price: "₹109" },
    { name: "Kurkure Momos", price: "₹129" },
    { name: "Schezwan Momos", price: "₹119" },
    { name: "Afghani Momos", price: "₹129" },
    { name: "Fried Veg Momos", price: "₹69" },
    { name: "Chilli Garlic Momos", price: "₹99" },
    { name: "Peri Peri Momos", price: "₹99" },
    { name: "Cheese Burst Momos", price: "₹119" },
    { name: "Corn Cheese Momos", price: "₹99" },
    { name: "Mushroom Momos", price: "₹89" },
    { name: "Crispy Fried Momos", price: "₹109" },
    { name: "Dragon Momos", price: "₹119" },
    { name: "Hot & Spicy Momos", price: "₹109" },
  ],
},

{
  category: "🫓 BREADS",
  image: breads,
  items: [
    { name: "Butter Garlic Bread", price: "₹119" },
    { name: "Cheese Garlic Bread", price: "₹149" },
    { name: "Herb Bread", price: "₹139" },
    { name: "Masala Bread", price: "₹149" },
    { name: "Stuffed Kulcha", price: "₹149" },
    { name: "Cheese Kulcha", price: "₹149" },
    { name: "Laccha Paratha", price: "₹69" },
  ],
},

{
  category: "🍟 FRITTERS & SNACKS",
  image: snacks,
  items: [
    { name: "Classic French Fries", price: "₹79" },
    { name: "Peri Peri Fries", price: "₹99" },
    { name: "Cheesy Fries", price: "₹119" },
    { name: "Loaded Fries", price: "₹149" },
    { name: "Masala Fries", price: "₹89" },
    { name: "Curly Fries", price: "₹109" },
    { name: "Bread Pakoda", price: "₹59" },
    { name: "Paneer Pakoda", price: "₹99" },
    { name: "Onion Pakoda", price: "₹69" },
    { name: "Mixed Veg Pakoda", price: "₹89" },
    { name: "Potato Cheese Shots", price: "₹129" },
    { name: "Crispy Nuggets", price: "₹149" },
    { name: "Veg Cutlet", price: "₹79" },
  ],
},

{
  category: "🌮 NACHOS VARIETIES",
  image: nachos,
  items: [
    { name: "Classic Salted Nachos", price: "₹79" },
    { name: "Cheese Nachos", price: "₹99" },
    { name: "Loaded Nachos", price: "₹149" },
    { name: "Mexican Nachos", price: "₹129" },
    { name: "Peri Peri Nachos", price: "₹109" },
    { name: "Salsa Nachos", price: "₹119" },
    { name: "Cheesy Jalapeno Nachos", price: "₹139" },
    { name: "Nachos Supreme", price: "₹149" },
    { name: "Corn Cheese Nachos", price: "₹129" },
    { name: "BBQ Nachos", price: "₹139" },
    { name: "Tandoori Nachos", price: "₹129" },
    { name: "Spicy Masala Nachos", price: "₹109" },
  ],
},

];
export default menuItems;