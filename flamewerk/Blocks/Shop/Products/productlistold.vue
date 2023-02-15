<template>
<div>
    <div
      class="
        m-6
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-3
        gap-4
        text-black
        my-24
      "
    >
      <div
        v-for="p in products.productenlijst"
        :key="p.id"
        class="border rounded-lg bg-gray-100 hover:shadow-lg"
      >
        <nuxt-link :to="`/products/${p.id}`">
          <div class="rounded-t-lg bg-white">
            <img class=" rounded-t-lg crop mx-auto max-h-48" :src="p.image" />
          </div>
          <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
            <h4
              class="
                mt-1
                font-semibold
                text-base
                leading-tight
                truncate
                text-gray-700
                w-full
                text-left
              "
            >
              {{ p.title }}
              
              
              
              <!-- Multi Currency Section -->
              
              
              <!-- <span class="text-right float-right">{{ p.price }} €</span> -->
              <span class="text-right float-right" v-if="$store.state.currency.currency == 'eur' " > {{ p.price.eur }} €</span>

              <span class="text-right float-right" v-if="$store.state.currency.currency == 'usd' "> {{ p.price.usd }} $</span>






            </h4>
            <div class="mt-1 text-sm text-gray-700">{{ p.description }}</div>
                        
          </div>


        </nuxt-link>


          <button
            class="
              snipcart-add-item
              mt-4
              border 
              border-purple
              bg-pink-200
              d
              hover:shadow-lg
              text-pink-700
              font-semibold
              py-2
              px-4
              rounded
              shadow
            "
            
          >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 fill-current dark:text-red text-red"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
          </button>         



          <button
            class="
              snipcart-add-item
              mt-4
              border 
              border-green-200
              d
              hover:shadow-lg
              text-gray-700
              font-semibold
              py-2
              px-4
              rounded
              shadow
            "
            style="background-color:rgb(0, 185, 0);"
            :data-item-id="p.identity"
            :data-item-price=  "`{&quot;usd&quot;: ${p.price.usd}, &quot;eur&quot;: ${p.price.eur}}`"
            :data-item-url="`/api/${p.id}.json`"
            :data-item-description="p.description"
            :data-item-image="p.image"
            :data-item-name="p.title"
            
          >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 fill-current dark:text-white text-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
          </button>         


      </div>
    </div>
  </div>
</template>



<script>

export default {
  layout: 'ecommerce',
  data(){
    return {
      products: []
    }
  },
  created: async function () {
    const res = await fetch("https://shop.a-os.com/api/producten.json" )
    this.products = await res.json()
    // console.log(this.products)
  },
}
</script>
