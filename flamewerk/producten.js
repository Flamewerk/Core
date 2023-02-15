
export const useProducten = defineStore('producten', {
    state: () => ({
        "lijst": [
        {
            "id": 1,
            "identity": "1",
            "title": "T-shirt",
            "description": "Simple Black",
            "price": {
              "usd": 25,
              "eur": 29
            },
            "image": "https://flamewerk.com/stock/product/product1.jpg"
            },
            {
            "id": 2,
            "identity": "2",
            "title": "T-shirt",
            "description": "Aspen White.",
            "price": {
              "usd": 30,
              "eur": 33
            },
            "image": "https://flamewerk.com/stock/product/product2.jpg"
            },
            {
              "id": 3,
              "identity": "3",
              "title": "T-shirt",
              "description": "Charcoal.",
              "price": {
                "usd": 35,
                "eur": 38
              },
              "image": "https://flamewerk.com/stock/product/product3.jpg"
              },
              {
                "id": 4,
                "identity": "4",
                "title": "T-shirt",
                "description": "Iso Dots.",
                "price": {
                  "usd": 38,
                  "eur": 40
                },
                "image": "https://flamewerk.com/stock/product/product4.jpg"
                }



            ],
















        "digital": [
            {
            "id": 1,
            "identity": "1",
            "title": "Band - Music Album",
            "description": "Awesome Tunes by a band",
            "price": {
              "usd": 4.99,
              "eur": 4.99
            },
            "image": "https://flamewerk.com/stock/digital/product1.png"
            },

            {
                "id": 2,
                "identity": "2",
                "title": "Template",
                "description": "Simple Black",
                "price": {
                  "usd": 19,
                  "eur": 21
                },
                "image": "https://flamewerk.com/stock/digital/product2.png"
                },

            {
                "id": 3,
                "identity": "3",
                "title": "Book",
                "description": "Download our book",
                "price": {
                  "usd": 9.99,
                  "eur": 12.40
                },
                "image": "https://flamewerk.com/stock/digital/product3.png"
                },

            {
                "id": 4,
                "identity": "4",
                "title": "Ticket",
                "description": "Digital Ticket or NFT",
                "price": {
                  "usd": 10,
                  "eur": 15
                },
                "image": "https://flamewerk.com/stock/digital/product4.png"
                },



        ]



    })
})