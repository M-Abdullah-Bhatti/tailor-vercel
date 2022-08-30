const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Shirts" },
    { name: "Sweaters" },
    { name: "Pants" },
    { name: "Blazer" },
    { name: "Shoes" },
    { name: "Tie" },
    { name: "Accessories" },
    { name: "Measurement Kit" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Shirt",
      description: "Black Shirt",
      image: "./images/Tops/BlackPoloShirt.jpg",
      category: categories[0]._id,
      price: 15.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Shirt",
      description: "Black Solid Shirt",
      image: "./images/Tops/BlackSolidShirt.jpg",
      category: categories[0]._id,
      price: 15.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Shirt",
      description: "Blacked Shirt",
      image: "./images/Tops/BlackSpotShirt.jpg",
      category: categories[0]._id,
      price: 15.0,
      size: "large",
      quantity: 5,
    },

    {
      name: "Tie",
      category: categories[5]._id,
      description: "Brown Tie",
      image: "./images/Accessories/BrownTie.jpg",
      price: 10.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Tie",
      category: categories[5]._id,
      description: "Green & Blue Tie",
      image: "./images/Accessories/GreenBlueTie.png",
      price: 10.0,
      size: "large",
      quantity: 5,
    },

    {
      name: "Shirt",
      description: " Solid Blue Shirt",
      image: "./images/Tops/BlueSolidShirt.png",
      category: categories[0]._id,
      price: 15.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Shirt",
      description: "Green Blue Plaid Shirt",
      image: "./images/Tops/GreenBluePlaidShirt.png",
      category: categories[0]._id,
      price: 15.0,
      size: "large",
      quantity: 2,
    },

    {
      name: "Sweater",
      description: "Black Sweater",
      image: "./images/Tops/BlackSweater.jpg",
      category: categories[1]._id,
      price: 25.0,
      size: "large",
      quantity: 2,
    },
    {
      name: "Sweater",
      description: "Blue Sweather",
      image: "./images/Tops/BlueSweater.jpg",
      category: categories[1]._id,
      price: 25.0,
      size: "large",
      quantity: 2,
    },

    {
      name: "Pants",
      description: "Navy Pants",
      image: "./images/Bottoms/NavyPants.jpg",
      category: categories[2]._id,
      price: 20.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Pants",
      description: " Denim Pants",
      image: "./images/Bottoms/MediumDenimPants.jpg",
      category: categories[2]._id,
      price: 20.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Pants",
      description: "Khaki Pants",
      image: "./images/Bottoms/KhakiPants.jpg",
      category: categories[2]._id,
      price: 20.0,
      size: "large",
      quantity: 5,
    },

    {
      name: "Pants",
      description: "Grey Pants",
      image: "./images/Bottoms/GreyPants.jpg",
      category: categories[2]._id,
      price: 20.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Pants",
      description: "Dark Grey Pants",
      image: "./images/Bottoms/DarkGreyPants.png",
      category: categories[2]._id,
      price: 20.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Pants",
      description: "Dark Denim Pants",
      image: "./images/Bottoms/DarkDenimPants.png",
      category: categories[2]._id,
      price: 20.0,
      size: "large",
      quantity: 5,
    },

    {
      name: "Blazer",
      category: categories[3]._id,
      description: "Black blazer",
      image: "./images/Tops/Blazer.jpg",
      price: 50.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Pants",
      description: "Grey Pattern Pants",
      image: "./images/Bottoms/GreyPatternPants.png",
      category: categories[2]._id,
      price: 20.0,
      size: "large",
      quantity: 5,
    },

    {
      name: "Accessories",
      category: categories[6]._id,
      description: "Tan Belt",
      image: "./images/Accessories/TanBelt.jpg",
      price: 35.0,
      size: "36",
      quantity: 10,
    },
    {
      name: "Measurement Kit",
      category: categories[7]._id,
      description: "Measurement Kit Mens",
      image: "./images/Accessories/MeasurementKit.png",
      price: 5.0,
      size: "accessory",
      quantity: 5,
    },

    {
      name: "Shoes",
      category: categories[4]._id,
      description: "Brown Shoes",
      image: "./images/Accessories/BrownShoes.png",
      price: 35.0,
      size: "10",
      quantity: 3,
    },
    {
      name: "Shoes",
      category: categories[4]._id,
      description: "Grey Shoes",
      image: "./images/Accessories/GreyShoes.jpg",
      price: 35.0,
      size: "10",
      quantity: 3,
    },
    {
      name: "Shoes",
      category: categories[4]._id,
      description: "Tan Shoes",
      image: "./images/Accessories/TanShoes.jpg",
      price: 35.0,
      size: "10",
      quantity: 3,
    },
    {
      name: "Tie",
      category: categories[5]._id,
      description: "Black & Red Tie",
      image: "./images/Accessories/BlackRedTie.png",
      price: 10.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Shoes",
      category: categories[4]._id,
      description: "Black Shoes",
      image: "./images/Accessories/BlackShoes.jpg",
      price: 35.0,
      size: "10",
      quantity: 3,
    },

    {
      name: "Tie",
      category: categories[5]._id,
      description: "Green Plaid Tie",
      image: "./images/Accessories/GreenPlaidTie.jpg",
      price: 10.0,
      size: "large",
      quantity: 5,
    },
    {
      name: "Tie",
      category: categories[5]._id,
      description: "Grey & Blue",
      image: "./images/Accessories/GreyBlueTie.png",
      price: 10.0,
      size: "large",
      quantity: 5,
    },

    {
      name: "accessories",
      category: categories[6]._id,
      description: "hankerchief",
      image: "./images/Accessories/Hankerchief.png",
      price: 5.0,
      size: "accessory",
      quantity: 10,
    },
    {
      name: "Accessories",
      category: categories[6]._id,
      description: "Black Belt",
      image: "./images/Accessories/BlackBelt.jpg",
      price: 35.0,
      size: "36",
      quantity: 10,
    },
    {
      name: "Accessories",
      category: categories[6]._id,
      description: "Brown Belt",
      image: "./images/Accessories/BrownBelt.png",
      price: 35.0,
      size: "36",
      quantity: 10,
    },
    {
      name: "Shirt",
      description: "Blue Gingham Shirt",
      image: "./images/Tops/BlueGinghamShirt.png",
      category: categories[0]._id,
      price: 15.0,
      size: "large",
      quantity: 4,
    },
    {
      name: "Shirt",
      description: "Blue Plaid Shirt",
      image: "./images/Tops/BluePlaidShirt.png",
      category: categories[0]._id,
      price: 15.0,
      size: "large",
      quantity: 5,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    chest: "25",
    arms: "30",
    waist: "25",
    inseam: "35",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
    chest: "25",
    arms: "30",
    waist: "25",
    inseam: "35",
  });

  console.log("users seeded");

  process.exit();
});
