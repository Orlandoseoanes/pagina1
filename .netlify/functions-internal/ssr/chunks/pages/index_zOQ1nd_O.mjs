/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_yLoe5UEG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */

const $$Astro$b = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/layouts/Layout.astro", void 0);

const $$Astro$a = createAstro();
const $$Cardindex = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Cardindex;
  const { imagenes, descripcion, minititulo, clasesPersonalizada1, clasesPersonalizada2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative max-w-xl mx-auto mt-20" data-astro-cid-gw2zxrib> <img class="h-64 w-full object-cover rounded-md"${addAttribute(imagenes, "src")} alt="Random image" data-astro-cid-gw2zxrib> <div class="absolute inset-0 rounded-md" data-astro-cid-gw2zxrib></div> <div class="absolute inset-0 flex flex-col items-start justify-center p-6" data-astro-cid-gw2zxrib> <div${addAttribute(clasesPersonalizada1, "class")} data-astro-cid-gw2zxrib> <h1 data-astro-cid-gw2zxrib>${minititulo}</h1> </div> <br data-astro-cid-gw2zxrib> <div${addAttribute(clasesPersonalizada2, "class")} data-astro-cid-gw2zxrib> <h2 class=" text-3xl font-bold" data-astro-cid-gw2zxrib>${descripcion}</h2> </div> </div> </div> `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Cardindex.astro", void 0);

const $$Astro$9 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white"> <div class="container mx-auto px-4 py-8 flex items-center"> <!-- logo --> <div class="mr-auto md:w-48 flex-shrink-0"> <img class="h-8 md:h-10" src="/Logo (1).png" alt=""> </div> <!-- search --> <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl rounded-md hidden xl:flex items-center"></div> <!-- phone number --> <div class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end"> <span class="font-bold md:text-xl">8 800 332 65-66</span> <span class="font-semibold text-sm text-gray-400">Support 24/7</span> </div> <!-- buttons --> <nav class="contents"> <ul class="ml-4 xl:w-48 flex items-center justify-end"> <li class="ml-2 lg:ml-4 relative inline-block"> <a class="" href=""> <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-9x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg> </a> </li> <li class="ml-2 lg:ml-4 relative inline-block"> <a class="" href=""> <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">3</div> <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-9x"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg> </a> </li> <li class="ml-2 lg:ml-4 relative inline-block"> <a class="" href=""> <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">12</div> <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg> </a> </li> </ul> </nav> <!-- cart count --> <div class="ml-4 hidden sm:flex flex-col font-bold"> <span class="text-xs text-gray-400">Your Cart</span> <span>$2,650,59</span> </div> </div> <hr> </header>`;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Navbar.astro", void 0);

const $$Astro$8 = createAstro();
const $$Botonbanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Botonbanner;
  return renderTemplate`${maybeRenderHead()}<button data-astro-cid-o6lgmy7k> <span class="box" data-astro-cid-o6lgmy7k>
Comprar ahora
</span> </button> `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Botonbanner.astro", void 0);

const $$Astro$7 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-96" style="background-image: url(&quot;/Banner.jpg&quot;);" data-astro-cid-bbe6dxrz> <div class="hero-content w-full justify-start text-left text-neutral-content " data-astro-cid-bbe6dxrz> <div class="max-w-md" data-astro-cid-bbe6dxrz> <h1 class="mb-5 text-2xl  text-secondary font " data-astro-cid-bbe6dxrz>100% natural food</h1> <p class="mb-5 text-5xl font-bold" data-astro-cid-bbe6dxrz>Choose the best 
            healthier way
            of life</p> ${renderComponent($$result, "Botonbanner", $$Botonbanner, { "data-astro-cid-bbe6dxrz": true })} </div> </div> </div> `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Hero.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero2;
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-96 bg-base-100" data-astro-cid-glk5rbbc> <div class="hero-content flex-col lg:flex-row" data-astro-cid-glk5rbbc> <img src="/Photo.png" class="max-w-lg" data-astro-cid-glk5rbbc> <div data-astro-cid-glk5rbbc> <h1 class="text-3xl text-secondary" data-astro-cid-glk5rbbc>About us</h1> <p class="py-6 text-primary text-5xl font-bold" data-astro-cid-glk5rbbc>We Believe in Working <br data-astro-cid-glk5rbbc> Accredited Farmers</p> <p class="text-xl" data-astro-cid-glk5rbbc>
Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
</p> <div data-astro-cid-glk5rbbc> <div class="flex p-2 gap-2" data-astro-cid-glk5rbbc> <div data-astro-cid-glk5rbbc> <img src="/Icon.png" class="max-w-lg rounded-lg shadow-2xl" data-astro-cid-glk5rbbc> </div> <div class="" data-astro-cid-glk5rbbc> <p class="text-primary font-bold text-2xl" data-astro-cid-glk5rbbc>Organic Foods Only</p> <p class="text-lg" data-astro-cid-glk5rbbc>Simply dummy text of the printing and typesetting <br data-astro-cid-glk5rbbc> industry. Lorem Ipsum</p> </div> </div> <div class="flex p-2 gap-2" data-astro-cid-glk5rbbc> <div data-astro-cid-glk5rbbc> <img src="/Icon.png" class="max-w-lg rounded-lg shadow-2xl" data-astro-cid-glk5rbbc> </div> <div data-astro-cid-glk5rbbc> <p class="text-primary font-bold text-2xl" data-astro-cid-glk5rbbc>Quality Standards</p> <p class="text-lg" data-astro-cid-glk5rbbc>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p> </div> </div> </div> <button class="btn btn-lg	 btn-primary" data-astro-cid-glk5rbbc>shop now</button> </div> </div> </div> `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Hero2.astro", void 0);

const $$Astro$5 = createAstro();
const $$Card2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Card2;
  const { Badge, Foto, Titulo, Precio } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card w-4/5 bg-base-100 shadow-xl p-4 mt-2" data-astro-cid-sju3wfsi> <div class="badge badge-primary" data-astro-cid-sju3wfsi>${Badge}</div> <figure class="px-10 pt-10" data-astro-cid-sju3wfsi> <img${addAttribute(Foto, "src")} alt="Shoes" class="rounded-xl" data-astro-cid-sju3wfsi> </figure> <div class="card-body " data-astro-cid-sju3wfsi> <div class="items-start text-start text-primary text-xl font-bold" data-astro-cid-sju3wfsi> <p data-astro-cid-sju3wfsi>${Titulo}</p> </div> <div class="divider" data-astro-cid-sju3wfsi></div> <div class="card-actions flex justify-evenly" data-astro-cid-sju3wfsi> <div class="font-bold text-primary" data-astro-cid-sju3wfsi> <p data-astro-cid-sju3wfsi> $ ${Precio} </p> </div> <div class="rating" data-astro-cid-sju3wfsi> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-astro-cid-sju3wfsi> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-astro-cid-sju3wfsi> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-astro-cid-sju3wfsi> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-astro-cid-sju3wfsi> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-astro-cid-sju3wfsi> </div> <a href="/shop" data-astro-cid-sju3wfsi> <div data-tooltip="Price:-$20" class="button" data-astro-cid-sju3wfsi> <div class="button-wrapper" data-astro-cid-sju3wfsi> <div class="text" data-astro-cid-sju3wfsi>Buy Now</div> <span class="icon" data-astro-cid-sju3wfsi> <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sju3wfsi> <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" data-astro-cid-sju3wfsi></path> </svg> </span> </div> </div> </a> </div> </div> </div> `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Card2.astro", void 0);

const $$Astro$4 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<div class="flex    flex-col text-center" data-astro-cid-2j44jlrm> <div class="" data-astro-cid-2j44jlrm> <h4 class="text-4xl text-secondary" data-astro-cid-2j44jlrm>Categories</h4> <p class="text-primary text-3xl font-bold" data-astro-cid-2j44jlrm>OUR PRODUCTS</p> </div> <div class="flex flex-wrap  p-6   " data-astro-cid-2j44jlrm> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Vegetables", "Foto": "/Photo(1).png", "Titulo": "Calabrese Broccoli", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Fresh", "Foto": "/Photo (2).png", "Titulo": "Fresh banana", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Millets", "Foto": "/Photo (3).png", "Titulo": "White nuts", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Vegetables", "Foto": "/image 13.png", "Titulo": "Vegan red tomatoe", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Health", "Foto": "/image 14.png", "Titulo": "Mung bean", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Nuts", "Foto": "/Photo (4).png", "Titulo": "Brown Hazelnut", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Fresh", "Foto": "/Photo (5).png", "Titulo": "Eggs", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> <div class="w-full md:w-1/2 lg:w-1/4 flex justify-center" data-astro-cid-2j44jlrm> ${renderComponent($$result, "Card2", $$Card2, { "Badge": "Fresh", "Foto": "/Photo (6).png", "Titulo": "Zelco Suji Elaichi Rusk", "Precio": "250", "data-astro-cid-2j44jlrm": true })} </div> </div> </div> `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Menu.astro", void 0);

const $$Astro$3 = createAstro();
const $$Hero3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero3;
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-screen" style="background-image: url(/Background.png);" data-astro-cid-plylcsvu> <div class="grid-column-start: 1;
    grid-row-start: 1;
    height: 100%;
    width: 100%;" data-astro-cid-plylcsvu></div> <div class="hero-content text-center text-neutral-content" data-astro-cid-plylcsvu> <div class="max-w-md" data-astro-cid-plylcsvu> <h1 class="mb-5 text-5xl text-secondary" data-astro-cid-plylcsvu>Testimonial</h1> <h3 class="mb-5 text-4xl font-bold text-primary" data-astro-cid-plylcsvu>What Our Customer Saying?</h3> <div class="avatar" data-astro-cid-plylcsvu> <div class="w-24 rounded-full" data-astro-cid-plylcsvu> <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" data-astro-cid-plylcsvu> </div> </div> <br data-astro-cid-plylcsvu> <div class="rating rating-sm" data-astro-cid-plylcsvu> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked data-astro-cid-plylcsvu> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked data-astro-cid-plylcsvu> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked data-astro-cid-plylcsvu> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked data-astro-cid-plylcsvu> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked data-astro-cid-plylcsvu> </div> <p data-astro-cid-plylcsvu>
Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been.
</p> <h2 class="text-primary text-xl font-bold" data-astro-cid-plylcsvu>Sara taylor</h2> <p class="text-primary text-lg" data-astro-cid-plylcsvu>Consumer</p> <hr data-astro-cid-plylcsvu> <br data-astro-cid-plylcsvu> <div class="flex gap-2" data-astro-cid-plylcsvu> <div class="avatar placeholder p-2" data-astro-cid-plylcsvu> <div class="bg-base-100 text-neutral-content rounded-full w-32 flex flex-col ring ring-secondary ring-offset-white ring-offset-2" data-astro-cid-plylcsvu> <span class="text-3xl font-bold text-primary" data-astro-cid-plylcsvu>100%</span> <span class="text-xl text-primary" data-astro-cid-plylcsvu>Organic</span> </div> </div> <div class="avatar placeholder p-2" data-astro-cid-plylcsvu> <div class="bg-base-100 text-neutral-content rounded-full w-32 flex flex-col ring ring-secondary ring-offset-white ring-offset-2" data-astro-cid-plylcsvu> <span class="text-3xl font-bold text-primary" data-astro-cid-plylcsvu>285</span> <span class="text-xl text-primary" data-astro-cid-plylcsvu>Active product</span> </div> </div> <div class="avatar placeholder p-2" data-astro-cid-plylcsvu> <div class="bg-base-100 text-neutral-content rounded-full w-32 flex flex-col ring ring-secondary ring-offset-white ring-offset-2" data-astro-cid-plylcsvu> <span class="text-3xl font-bold text-primary" data-astro-cid-plylcsvu>350+</span> <span class="text-xl text-primary" data-astro-cid-plylcsvu>Organic Orchads</span> </div> </div> </div> </div> </div> </div> `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Hero3.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card3;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg mt-4 flex justify-center items-center sm:p-4"> <div class="relative aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-3 lg:aspect-h-2 xl:aspect-w-2 xl:aspect-h-1"> <img class="rounded-lg max-w-full h-full object-cover" src="/Image (4).png" alt=""> <div class="absolute inset-0 flex justify-center items-center"> <div class="flex items-center justify-around  w-full"> <div> <h1 class="text-center font-bold text-white text-4xl">Subscribe to <br> our Newsletter</h1> </div> <div class="flex "> <input type="text" placeholder="Type here" class="input  input-lg  	 input-bordered w-full max-w-xs"> <button class="btn btn-lg		 btn-primary ml-2">Subscribe</button> </div> </div> </div> </div> </div>`;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Card3.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer p-10 bg-base-100 text-base-content w-full"> <nav class="flex flex-col justify-center items-center"> <h1 class="text-4xl text-primary font-bold">Contact us</h1> <h6 class="footer-title">Email</h6> <a class="link link-hover">needhelp@Organia.com</a> <a class="footer-title">Phone</a> <a class="link link-hover">666 888 888</a> <a class="footer-title">Addres</a> <a class="link link-hover">88 road, borklyn street, USA</a> </nav> <nav class="flex flex-col justify-center items-center"> <img src="/Logo (1).png" class="mx-auto"> <br> <p class="text-center text-neutral text-xl">
Simply dummy text of the printing and typesetting industry. <br>
Lorem Ipsum simply dummy text of the printing
</p> <br> <div class="flex gap-4 justify-center"> <button class="btn btn-circle"> <img src="/Insta.png" class="mx-auto"> </button> <button class="btn btn-circle"> <img src="/Vector (1).png" class="mx-auto"> </button> <button class="btn btn-circle"> <img src="/Vector (2).png" class="mx-auto"> </button> <button class="btn btn-circle"> <img src="/Vector.png" class="mx-auto"> </button> </div> </nav> </footer>`;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div class="flex flex-wrap mb-4"> ${renderComponent($$result2, "Cardindex", $$Cardindex, { "imagenes": "/Image (2).png", "minititulo": "Natural!!", "descripcion": "Get Garden Fresh Fruits", "clasesPersonalizada1": "text-white", "clasesPersonalizada2": "text-white" })} ${renderComponent($$result2, "Cardindex", $$Cardindex, { "imagenes": "/Image (3).png", "minititulo": "Offer!!", "descripcion": "Get 10% off  on Vegetables", "clasesPersonalizada1": "text-secondary", "clasesPersonalizada2": "text-primary" })} </div> ${renderComponent($$result2, "Hero2", $$Hero2, {})} ${renderComponent($$result2, "Menu", $$Menu, {})} ${renderComponent($$result2, "Hero3", $$Hero3, {})} ${renderComponent($$result2, "Card3", $$Card3, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/pages/index.astro", void 0);

const $$file = "C:/Users/oaseo/OneDrive/Escritorio/Nueva carpeta/pagina1/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navbar as $, $$Footer as a, $$Layout as b, index as i };
