import alab1 from '../assets/alab_store_1.png';
import alab2 from '../assets/alab_store_2.png';
import alab3 from '../assets/alab_store_3.png';
import alab4 from '../assets/alab_store_4.png';
import alabBaanKangWat from '../assets/alab_baan_kang_wat.png';
import alabAppSell from '../assets/alab_app_sell.png';
import alabAppStock from '../assets/alab_app_stock.png';
import alabAppHistory from '../assets/alab_app_history.png';
import alabVideo1 from '../assets/alab_store_1.mov';
import alabVideo2 from '../assets/alab_store_2.mov';

export const brandStoreProjects = [
  {
    id: 'alab-brand-store',
    title: 'Brand Store For ALAB BRAND',
    brand: 'ALAB CNX',
    description:
      'Product craft brand from Chiang Mai — original magnets, embroidered hats, and luggage tags with local Thai-inspired designs. Pop-up brand store and market retail experience.',
    inspiration:
      'ALAB is inspired by the charm of Chiang Mai and its local culture. We transform local stories, places, and cultural details into simple, playful, and contemporary souvenirs.',
    role: {
      title: 'CEO & Creative Direction',
      description:
        'As the CEO of ALAB, I lead the brand from concept to product development. I create product ideas inspired by local places in Chiang Mai, develop the visual and product design, and collaborate with local artisans and authentic craft makers to turn these ideas into meaningful souvenirs. I also oversee branding, product direction, and overall business development.',
    },
    cover: alabBaanKangWat,
    locations: [
      {
        id: 'baan-kang-wat',
        name: 'Baan Kang Wat',
        label: 'Baan Kang Wat Store',
        media: [
          {
            id: 'baan-kang-wat-1',
            type: 'image',
            src: alabBaanKangWat,
            alt: 'ALAB CNX store at Baan Kang Wat',
          },
        ],
      },
      {
        id: 'white-market-nimman',
        name: 'White Market Nimman',
        label: 'White Market Nimman Store',
        media: [
          {
            id: 'white-market-1',
            type: 'image',
            src: alab4,
            alt: 'ALAB CNX store at White Market Nimman',
          },
        ],
      },
      {
        id: 'wualai-walking-street',
        name: 'Wualai Walking Street',
        label: 'Wualai Walking Street Store',
        media: [
          {
            id: 'wualai-1',
            type: 'image',
            src: alab3,
            alt: 'ALAB CNX store at Wualai Walking Street',
          },
          {
            id: 'wualai-2',
            type: 'image',
            src: alab1,
            alt: 'ALAB CNX magnets display at Wualai Walking Street',
          },
        ],
      },
      {
        id: 'thapae-walking-street',
        name: 'Thapae Walking Street',
        label: 'Thapae Walking Street Store',
        media: [
          {
            id: 'thapae-1',
            type: 'image',
            src: alab2,
            alt: 'ALAB CNX hats and luggage tags at Thapae Walking Street',
          },
        ],
      },
    ],
    app: {
      title: 'Sales Management Application',
      subtitle: 'Built by myself',
      description:
        'I created a custom application to manage and track ALAB sales every day — including selling products, checking stock, and reviewing daily sales history at each store.',
      screens: [
        {
          id: 'app-sell',
          label: 'Sell',
          src: alabAppSell,
          alt: 'ALAB sales app — Sell screen',
        },
        {
          id: 'app-stock',
          label: 'Stock',
          src: alabAppStock,
          alt: 'ALAB sales app — Stock screen',
        },
        {
          id: 'app-history',
          label: 'History',
          src: alabAppHistory,
          alt: 'ALAB sales app — daily sales history',
        },
      ],
    },
    media: [
      { id: 'alab-vid-1', type: 'video', src: alabVideo1, alt: 'ALAB brand store video 1' },
      { id: 'alab-vid-2', type: 'video', src: alabVideo2, alt: 'ALAB brand store video 2' },
    ],
  },
];
