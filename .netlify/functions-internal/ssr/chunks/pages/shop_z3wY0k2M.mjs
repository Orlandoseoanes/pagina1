/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent } from '../astro_yLoe5UEG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Navbar, a as $$Footer, b as $$Layout } from './index_zOQ1nd_O.mjs';

const $$Astro$2 = createAstro();
const $$Shopbanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Shopbanner;
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-96" style="background-image: url(&quot;/Image (5).png&quot;);"> <div class="hero-overlay bg-opacity-60"></div> <div class="hero-content text-center text-neutral-content"> <div class="max-w-md"> <h1 class="mb-5 text-5xl font-bold text-primary">Shop single</h1> </div> </div> </div>`;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Shopbanner.astro", void 0);

const $$Astro$1 = createAstro();
const $$Carrito = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carrito;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-100  py-8"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row -mx-4"> <div class="md:flex-1 px-4"> <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4"> <img class="w-full h-full object-cover" src="/Photo (3).png" alt="Product Image"> </div> <div class="flex -mx-2 mb-4"> <div class="w-1/2 px-2"> <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button> </div> <div class="w-1/2 px-2"> <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button> </div> </div> </div> <div class="md:flex-1 px-4"> <h2 class="text-2xl font-bold   mb-2 text-primary">Product Name</h2> <p class="text-primary text-sm mb-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                  ante justo. Integer euismod libero id mauris malesuada tincidunt.
</p> <div class="flex mb-4"> <div class="mr-4"> <span class="font-boldtext-primary">Price:</span> <span class="text-primary">$29.99</span> </div> <div> <span class="font-boldtext-primary">Availability:</span> <span class="text-primary&quot;">In Stock</span> </div> </div> <div class="mb-4"> <span class="font-boldtext-primary">Quantity :</span> <div class="flex items-center mt-2"> <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs"> </div> </div> <div> <span class="font-boldtext-primary">Product Description:</span> <p class="text-primary text-sm mt-2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                      lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                      ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                      sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
</p> </div> </div> </div> </div> </div>`;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Carrito.astro", void 0);

const $$Astro = createAstro();
const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Shop;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "shop" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Shopbanner", $$Shopbanner, {})} ${renderComponent($$result2, "Carrito", $$Carrito, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/pages/shop.astro", void 0);

const $$file = "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/pages/shop.astro";
const $$url = "/shop";

export { $$Shop as default, $$file as file, $$url as url };
