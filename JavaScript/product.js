const products = [
  // top sold
   { id: 3, name: "MacBook Air M1", price: 899.99, inStock: true, image: "../Image/img3.png", category: "topSold" },
  { id: 4, name: "ASUS ZenBook", price: 749.99, inStock: true, image: "../Image/img4.png", category: "topSold" },
  { id: 6, name: "Acer Aspire 5", price: 459.99, inStock: true, image: "../Image/img6.png", category: "topSold" },
  { id: 11, name: "Intel Core i5 Desktop", price: 549.99, inStock: true, image: "../Image/img11.png", category: "topSold" },
  { id: 14, name: "HP EliteDesk", price: 649.99, inStock: true, image: "../Image/img14.png", category: "topSold" },
  { id: 17, name: "iMac 24-inch", price: 1299.99, inStock: true, image: "../Image/img17.png", category: "topSold" },
  { id: 19, name: "Dell OptiPlex", price: 499.99, inStock: true, image: "../Image/img19.png", category: "topSold" },
  { id: 21, name: "Mechanical Keyboard", price: 39.99, inStock: true, image: "../Image/img21.png", category: "topSold" },
  { id: 23, name: "Laptop Stand", price: 24.99, inStock: true, image: "../Image/img23.png", category: "topSold" },
  { id: 29, name: "LED Desk Lamp", price: 21.99, inStock: true, image: "../Image/img29.png", category: "topSold" },

//offer
  { id: 1, name: "Dell Inspiron 15", price: 499.99, inStock: true, image: "../Image/img1.png", category: "offer" },
  { id: 2, name: "HP Pavilion 14", price: 529.99, inStock: true, image: "../Image/img2.png", category: "offer" },
  { id: 5, name: "Lenovo IdeaPad", price: 599.99, inStock: true, image: "../Image/img5.png", category: "offer" },
  { id: 8, name: "Razer Blade 15", price: 1499.99, inStock: true, image: "../Image/img8.png", category: "offer" },
  { id: 10, name: "LG Gram 16", price: 1299.99, inStock: true, image: "../Image/img10.png", category: "offer" },
  { id: 12, name: "Gaming PC Ryzen 5", price: 799.99, inStock: true, image: "../Image/img12.png", category: "offer" },
  { id: 16, name: "Lenovo ThinkCentre", price: 589.99, inStock: true, image: "../Image/img16.png", category: "offer" },
  { id: 22, name: "USB Flash Drive 64GB", price: 8.99, inStock: true, image: "../Image/img22.png", category: "offer" },
  { id: 24, name: "Webcam Cover", price: 3.99, inStock: true, image: "../Image/img24.png", category: "offer" },
  { id: 28, name: "Cable Organizer", price: 7.99, inStock: true, image: "../Image/img28.png", category: "offer" },

  // Laptops
  { id: 1, name: "Dell Inspiron 15", price: 499.99, inStock: true, image: "../Image/img1.png", category: "laptops" },
  { id: 2, name: "HP Pavilion 14", price: 529.99, inStock: true, image: "../Image/img2.png", category: "laptops" },
  { id: 3, name: "MacBook Air M1", price: 899.99, inStock: true, image: "../Image/img3.png", category: "laptops" },
  { id: 4, name: "ASUS ZenBook", price: 749.99, inStock: true, image: "../Image/img4.png", category: "laptops" },
  { id: 5, name: "Lenovo IdeaPad", price: 599.99, inStock: true, image: "../Image/img5.png", category: "laptops" },
  { id: 6, name: "Acer Aspire 5", price: 459.99, inStock: true, image: "../Image/img6.png", category: "laptops" },
  { id: 7, name: "MSI Modern 14", price: 689.99, inStock: true, image: "../Image/img7.png", category: "laptops" },
  { id: 8, name: "Razer Blade 15", price: 1499.99, inStock: true, image: "../Image/img8.png", category: "laptops" },
  { id: 9, name: "Samsung Galaxy Book", price: 649.99, inStock: true, image: "../Image/img9.png", category: "laptops" },
  { id: 10, name: "LG Gram 16", price: 1299.99, inStock: true, image: "../Image/img10.png", category: "laptops" },

  // Computers
  { id: 11, name: "Intel Core i5 Desktop", price: 549.99, inStock: true, image: "../Image/img11.png", category: "computers" },
  { id: 12, name: "Gaming PC Ryzen 5", price: 799.99, inStock: true, image: "../Image/img12.png", category: "computers" },
  { id: 13, name: "Mini PC Celeron", price: 299.99, inStock: true, image: "../Image/img13.png", category: "computers" },
  { id: 14, name: "HP EliteDesk", price: 649.99, inStock: true, image: "../Image/img14.png", category: "computers" },
  { id: 15, name: "Acer Veriton", price: 499.99, inStock: true, image: "../Image/img15.png", category: "computers" },
  { id: 16, name: "Lenovo ThinkCentre", price: 589.99, inStock: true, image: "../Image/img16.png", category: "computers" },
  { id: 17, name: "iMac 24-inch", price: 1299.99, inStock: true, image: "../Image/img17.png", category: "computers" },
  { id: 18, name: "ASUS ExpertCenter", price: 699.99, inStock: true, image: "../Image/img18.png", category: "computers" },
  { id: 19, name: "Dell OptiPlex", price: 499.99, inStock: true, image: "../Image/img19.png", category: "computers" },
  { id: 20, name: "MSI Cubi N", price: 429.99, inStock: true, image: "../Image/img20.png", category: "computers" },

  // Accessories
  { id: 21, name: "Mechanical Keyboard", price: 39.99, inStock: true, image: "../Image/img21.png", category: "accessories" },
  { id: 22, name: "USB Flash Drive 64GB", price: 8.99, inStock: true, image: "../Image/img22.png", category: "accessories" },
  { id: 23, name: "Laptop Stand", price: 24.99, inStock: true, image: "../Image/img23.png", category: "accessories" },
  { id: 24, name: "Webcam Cover", price: 3.99, inStock: true, image: "../Image/img24.png", category: "accessories" },
  { id: 25, name: "Mouse Bungee", price: 14.99, inStock: true, image: "../Image/img25.png", category: "accessories" },
  { id: 26, name: "Laptop Lock", price: 19.99, inStock: true, image: "../Image/img26.png", category: "accessories" },
  { id: 27, name: "Audio Jack Splitter", price: 6.49, inStock: true, image: "../Image/img27.png", category: "accessories" },
  { id: 28, name: "Cable Organizer", price: 7.99, inStock: true, image: "../Image/img28.png", category: "accessories" },
  { id: 29, name: "LED Desk Lamp", price: 21.99, inStock: true, image: "../Image/img29.png", category: "accessories" },
  { id: 30, name: "Screen Cleaning Kit", price: 10.99, inStock: true, image: "../Image/img30.png", category: "accessories" }
];
