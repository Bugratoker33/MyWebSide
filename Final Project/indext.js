
const header = document.querySelector('.category-header');

// header.addEventListener('mouseenter', function() {
//     this.style.color = '#ff6347'; /* Fare üzerine gelindiğinde renk değiştirme */
// });

header.addEventListener('mouseleave', function() {
    this.style.color = '#333'; /* Fare ayrıldığında renk eski haline döner */
});

function showNoProductsMessage() {
  alert("Üzgünüz, bu kategoride henüz ürün bulunmamaktadır.");
}

function addToCart(productNameId, productPriceId, productImageSrc) {
  console.log("Function called with:", productNameId, productPriceId, productImageSrc);

  var productName = document.getElementById(productNameId).textContent;
  var productPrice = parseFloat(document.getElementById(productPriceId).textContent);

  console.log("Product Details:", productName, productPrice);

  var cartList = document.getElementById("sepetListesi");
  var listItem = document.createElement("li");

  var productImage = document.createElement("img");
  productImage.src = productImageSrc;
  listItem.appendChild(productImage);

  var productInfo = document.createTextNode("Product Information: " + productName + " - Price: " + productPrice.toFixed(2) + " TL");
  listItem.appendChild(productInfo);

  cartList.appendChild(listItem);

  var totalPrice = parseFloat(document.getElementById("totalPrice").textContent.split(" ")[2]); // Mevcut toplam fiyatı alır

  totalPrice += productPrice;
  document.getElementById("totalPrice").textContent = "Total Price: " + totalPrice.toFixed(2) + " TL";
}

//sepete ekleme botonu ayarı 
function changeColorOnHover(isHovering) {
  var btn = document.getElementById('addToCartBtn');
  if (isHovering) {
    btn.style.backgroundColor = '#0056b3'; /* Mouse üzerine gelindiğindeki yeni renk */
  } else {
    btn.style.backgroundColor = '#007bff'; /* Varsayılan renk */
  }
}

function satınAl() {
  var totalPriceText = document.getElementById("totalPrice").textContent;
  
  // "Toplam Fiyat: " metnini temizle
  var totalPrice = parseFloat(totalPriceText.replace("Total Price: ", "").replace("TL", "").trim());
  
  if (totalPrice === 0 || isNaN(totalPrice)) {
    // Eğer toplam fiyat 0 ya da NaN ise, işlem yapma
   
    alert("Lütfen sepetinize ürün ekleyiniz")
  }else{
     // Bildirim göster
  alert(" You Have Purchased Successfully! Total Price: "  + totalPrice.toFixed(2) + " TL");
  }
}



// function satınAl() {
//   var totalPriceText = document.getElementById("totalPrice").textContent;
//   console.log("Total Price Text:", totalPriceText);

//   var totalPrice = parseFloat(totalPriceText.replace("Total Price: ", "").replace("TL", "").trim());

//   if (totalPrice === 0 || isNaN(totalPrice)) {
//     alert("Lütfen sepetinize ürün ekleyiniz");
//   } else {
//     alert("You Have Purchased Successfully! Total Price: " + totalPrice.toFixed(2) + " TL");
//   }
// }



// function addToCart(productNameId, productPriceId, productImageSrc, price) {
//     var totalPrice = 0; 
//   var productName = document.getElementById(productNameId).textContent;
//   var productPrice = parseFloat(document.getElementById(productPriceId).textContent);

//   var product = {
//     name: productName,
//     price: productPrice,
//     image: productImageSrc
//   };

//   var cartList = document.getElementById("sepetListesi");
//   var listItem = document.createElement("li");

//   var productImage = document.createElement("img");
//   productImage.src = product.image;
//   productImage.alt = product.name + " Resmi";
//   listItem.appendChild(productImage);

//   var productInfo = document.createTextNode("Ürün ismi: " + product.name + " - Fiyatı: " + product.price.toFixed(2) + " TL");
//   listItem.appendChild(productInfo);

//   cartList.appendChild(listItem);

//   totalPrice += totalPrice+ productPrice; // Her ürün eklediğinizde toplam fiyata ekleyin

//   // Update the total price in the paragraph, rounded to 2 decimal places
//   document.getElementById("totalPrice").textContent = "Toplam Fiyat: " + totalPrice.toFixed(2) + " TL";
// }
// ----------------------------------------------------------------------------------------////////////////////////////////////////////
// function addToCart(productNameId, productPriceId, productImageSrc, price) {
//     var totalPrice = 0;
//     var productName = document.getElementById(productNameId).textContent;
//     var productPrice = parseFloat(document.getElementById(productPriceId).textContent);

//     var product = {
//         name: productName,
//         price: productPrice,
//         image: productImageSrc
//     };

//     var cartList = document.getElementById("sepetListesi");
//     var listItem = document.createElement("li");

//     var productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name + " Resmi";
//     listItem.appendChild(productImage);

//     var productInfo = document.createTextNode("Ürün ismi: " + product.name + " - Fiyatı: " + product.price + " TL");
//     listItem.appendChild(productInfo);

//     cartList.appendChild(listItem);
   
//   totalPrice += productPrice;

//   // Update the total price in the paragraph, rounded to 2 decimal places
//   document.getElementById("totalPrice").textContent = "Toplam Fiyat: " + totalPrice.toFixed(2) + " TL";
// }
// if(addToCart.call!=null){
//     totalPrice += productPrice.toFixed(price);
   

//     // Update the total price in the span
//     document.getElementById("totalPrice").textContent = "Toplam Fiyat: " + totalPrice + " TL";
    
// }
     


// var totalPrice = 0;

// function addToCart(productNameId, productPriceId, productImageSrc) {
//     var productName = document.getElementById(productNameId).textContent;
//     var productPrice = parseFloat(document.getElementById(productPriceId).textContent);

//     var product = {
//         name: productName,
//         price: productPrice,
//         image: productImageSrc
//     };

//     var cartList = document.getElementById("sepetListesi");
//     var listItem = document.createElement("li");

//     var productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name + " Resmi";
//     listItem.appendChild(productImage);

//     var productInfo = document.createTextNode("Ürün ismi: " + product.name + " - Fiyatı: " + product.price + " TL");
//     listItem.appendChild(productInfo);

//     cartList.appendChild(listItem);

//     // Update the total price
//     totalPrice += product.price;

//     // Display the total price in the designated span
//     document.getElementById("totalPrice").textContent = "Toplam Fiyat: " + totalPrice + " TL";

//     // Rest of your code for displaying/handling the cart UI
// }

//  function addToCart(productNameId, productPriceId, productImageSrc) {
//      var productName = document.getElementById(productNameId).textContent;
//     var productPrice = document.getElementById(productPriceId).textContent;

// var product = {
//          name: productName,
//          price: parseFloat(productPrice),
//          image: productImageSrc
//         // Diğer ürün bilgileri burada eklenebilir
//      };

//     var cartList = document.getElementById("sepetListesi");

//      var listItem = document.createElement("li");

//      // Resmi ekliyoruz
//     var productImage = document.createElement("img");
//  productImage.src = product.image;  
//    productImage.alt = product.name + " Resmi";
//     listItem.appendChild(productImage);

//      // İsim ve fiyatı ekliyoruz
//      var productInfo = document.createTextNode("Ürün ismi: " + product.name + " - Fiyatı: " + product.price + " TL");
//     listItem.appendChild(productInfo);

//     cartList.appendChild(listItem);
//     document.querySelector('.sepet-icerik').style.display = 'block';
//    document.querySelector('.sepet').classList.add('sepet-acik');

//     // Sepet içeriğini aşağı kaydırma animasyonu için
//     const sepetDiv = document.querySelector('.sepet');
//     sepetDiv.style.transform = `translateY(${sepetDiv.scrollHeight}px)`;
// }

// var totalPrice = 0;

// function addToCart(productNameId, productPriceId, productImageSrc) {
//     var productName = document.getElementById(productNameId).textContent;
//     var productPrice = parseFloat(document.getElementById(productPriceId).textContent);

//     var product = {
//         name: productName,
//         price: productPrice,
//         image: productImageSrc
//     };

//     var cartList = document.getElementById("sepetListesi");

//     var listItem = document.createElement("li");
//     var productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name + " Resmi";
//     listItem.appendChild(productImage);

//     var productInfo = document.createTextNode("Ürün ismi: " + product.name + " - Fiyatı: " + product.price + " TL");
//     listItem.appendChild(productInfo);

//     cartList.appendChild(listItem);
//     document.querySelector('.sepet-icerik').style.display = 'block';
//     document.querySelector('.sepet').classList.add('sepet-acik');

//     const sepetDiv = document.querySelector('.sepet');
//     sepetDiv.style.transform = `translateY(${sepetDiv.scrollHeight}px)`;

//     totalPrice = totalPrice+ product.price;
//     document.getElementById("totalPrice").textContent = "Toplam Fiyat: " + productPrice + " TL";
// }

// var totalPrice = 0; // Toplam fiyatı saklayacak değişken

// function addToCart(productNameId, productPriceId, productImageSrc) {
//     var productName = document.getElementById(productNameId).textContent;
//     var productPrice = parseFloat(document.getElementById(productPriceId).textContent);

//     var product = {
//         name: productName,
//         price: productPrice,
//         image: productImageSrc
//         // Diğer ürün bilgileri burada eklenebilir
//     };

//     var cartList = document.getElementById("sepetListesi");

//     var listItem = document.createElement("li");

//     // Resmi ekliyoruz
//     var productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name + " Resmi";
//     listItem.appendChild(productImage);

//     // İsim ve fiyatı ekliyoruz
//     var productInfo = document.createTextNode("Ürün ismi: " + product.name + " - Fiyatı: " + product.price + " TL");
//     listItem.appendChild(productInfo);

//     cartList.appendChild(listItem);
//     document.querySelector('.sepet-icerik').style.display = 'block';
//     document.querySelector('.sepet').classList.add('sepet-acik');

//     // Sepet içeriğini aşağı kaydırma animasyonu için
//     const sepetDiv = document.querySelector('.sepet');
//     sepetDiv.style.transform = `translateY(${sepetDiv.scrollHeight}px)`;

//     // Toplam fiyatı güncelle ve ekrana yansıt
//     totalPrice += product.price;
//     document.getElementById("totalPrice").textContent = totalPrice + " TL";
// }

// function addToCart(productName, productPrice, productImageSrc) {
//     var product = {
//         name: productName,
//         price: parseFloat(productPrice),
//         image: productImageSrc
//         // Diğer ürün bilgileri burada eklenebilir
//     };

//     var cartList = document.getElementById("sepetListesi");

//     var listItem = document.createElement("li");

//     // Resmi ekliyoruz
//     var productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name + " Resmi";
//     listItem.appendChild(productImage);

//     // İsim ve fiyatı ekliyoruz
//     var productInfo = document.createTextNode("Ürün ismi"+ product.name + " - " + "Fiyatı"+product.price + " TL");
//     listItem.appendChild(productInfo);

//     cartList.appendChild(listItem);
//     document.querySelector('.sepet-icerik').style.display = 'block';
//     document.querySelector('.sepet').classList.add('sepet-acik');

//     // Sepet içeriğini aşağı kaydırma animasyonu için
//     const sepetDiv = document.querySelector('.sepet');
//     sepetDiv.style.transform = `translateY(${sepetDiv.scrollHeight}px)`;
//     updateTotalPrice();
// }
// function updateTotalPrice() {
//     var totalPrice = 0;

//     // Sepetteki her ürünün fiyatını toplam fiyata ekle
//     var cartListItems = document.querySelectorAll("sepetListesi");
//     cartListItems.forEach(function(item) {
//         var priceString = item.textContent.match(/Fiyatı: (pro\d+(\.\d+)?)/); // Fiyatı bulma
//         if (priceString) {
//             var price = parseFloat(priceString[1]); // Fiyatı al
//             totalPrice += price;
//         }
//     });

//     // Toplam fiyatı güncelle
//     var totalPriceElement = document.getElementById("toplamFiyat");
//     if (totalPriceElement) {
//         totalPriceElement.textContent = "Toplam Fiyat: " + totalPrice.toFixed(2) + " TL";
//     }
// }





//  function updateTotalPrice() {
//      var totalPrice = 0;

//     cartContent.forEach(function(product) {
//         totalPrice += product.price;
//     });

//     var totalPriceElement = document.getElementById("toplamFiyat");

//     if(totalPriceElement) {
//         totalPriceElement.textContent = "Toplam Fiyat: " + totalPrice.toFixed(2) + " TL";
//     }
// }

// function addToCart() {
//     var productName = document.getElementById("productName").textContent;
//     var productPrice = parseFloat(document.getElementById("productPrice").textContent);
//     var productImageSrc = document.getElementById("productImage").src;

//     var product = {
//         name: productName,
//         price: productPrice,
//         image: productImageSrc,
//         // Diğer ürün bilgileri burada eklenebilir
//     };

//     var cartList = document.getElementById("sepetListesi");

//     var listItem = document.createElement("li");

//     // Resmi ekliyoruz
//     var productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name + " Resmi";
//     listItem.appendChild(productImage);

//     // İsim ve fiyatı ekliyoruz
//     var productInfo = document.createTextNode(product.name + " - " + product.price + " TL");
//     listItem.appendChild(productInfo);

//     cartList.appendChild(listItem);
//     document.querySelector('.sepet-icerik').style.display = 'block';
//     document.querySelector('.sepet').classList.add('sepet-acik');

//     // Sepet içeriğini aşağı kaydırma animasyonu için
//     const sepetDiv = document.querySelector('.sepet');
//     sepetDiv.style.transform = `translateY(${sepetDiv.scrollHeight}px)`;
// }
// function addToCart() {
//     // Ürün adını alıyoruz
//     var productName = document.getElementById("productName").textContent;

//     // Ürün fiyatını alıyoruz
//     var productPrice = parseFloat(document.getElementById("productPrice").textContent);

//     // Sepete eklenecek ürünü seçiyoruz (örneğin, ürün adı ve fiyatını alabilirsiniz)
//     var product = {
//         name: productName,
//         price: productPrice,
//         // Diğer ürün bilgileri burada eklenebilir
//     };

//     // Sepet listesini alıyoruz
//     var cartList = document.getElementById("sepetListesi");

//     // Yeni bir liste öğesi oluşturuyoruz ve içeriği dolduruyoruz
//     var listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(product.name + " - " + product.price + " TL"));

//     // Listeyi sepet listesine ekliyoruz
//     cartList.appendChild(listItem);
// }
// function addToCart() {
//     // Ürün adını alıp h3 etiketinin içeriğine yerleştirme
//     var productName = document.getElementById("productName","fiyatı").textContent;

//     // Sepete eklenecek ürünü seçiyoruz (örneğin, ürün adını ve bilgilerini alabilirsiniz)
//     var product = {
//         name: productName,
//         fiyatı:fiyatı
        
//         // Diğer ürün bilgileri burada eklenebilir
//     };

//     // Sepet listesini alıyoruz
//     var cartList = document.getElementById("sepetListesi");

//     // Yeni bir liste öğesi oluşturuyoruz ve içeriği dolduruyoruz
//     var listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(product.name,product.fiyatı));

//     // Listeyi sepet listesine ekliyoruz
//     cartList.appendChild(listItem);
// }
// function addToCart(productName) {
//     // Sepete eklenecek ürünü seçiyoruz (örneğin, ürün adını ve bilgilerini alabilirsiniz)
//     var product = {
//         name: productName,
//         // Diğer ürün bilgileri burada eklenebilir
//     };

//     // Sepet listesini alıyoruz
//     var cartList = document.getElementById("sepetListesi");

//     // Yeni bir liste öğesi oluşturuyoruz ve içeriği dolduruyoruz
//     var listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(product.name));

//     // Listeyi sepet listesine ekliyoruz
//     cartList.appendChild(listItem);
// }