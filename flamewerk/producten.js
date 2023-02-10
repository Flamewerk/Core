
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
            "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
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
            "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
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
              "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
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
                "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
                }
        ]

    })
})