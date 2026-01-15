import PaperPrintWeb from '../assets/PaperPrint_web.png';
import RoomInfluenceWeb from '../assets/RoomInfluence_web.png';
import ManachaiTecWeb from '../assets/ManachaiTec_web.png';
import websitePlaceholder from '../assets/website_placeholder.png';
// import ChiangMAiLivingHubWeb from '../assets/ChiangMAiLivingHub_web.png'; // Uncomment when file is added

export const websiteProjects = [
  {
    id: 'paper-prints',
    title: 'Paper Prints',
    description: 'Desktop website design with responsive image display for web',
    url: null,
    type: 'Desktop Design',
    image: PaperPrintWeb,
  },
  {
    id: 'roomfluence',
    title: 'Roomfluence',
    description: 'Website design and development',
    url: 'https://roomfluence.com',
    type: 'Website',
    image: RoomInfluenceWeb,
  },
  {
    id: 'radio-rayong',
    title: 'เช่าวิทยุสื่อสารระยอง',
    description: 'Website design for radio rental service',
    url: 'https://xn--72cf3b4bafa2a3aa6ae1btg0a8cq9lxgi.com/manachai-website-main/index.html',
    type: 'Website',
    image: ManachaiTecWeb,
  },
  {
    id: 'chiangmai-living-hub',
    title: 'Chiang Mai Living Hub',
    description: 'Community living platform website',
    url: 'https://chiangmailivinghub.com/',
    type: 'Website',
    image: websitePlaceholder, // Set to image when ChiangMAiLivingHub_web.png is added
  },
];

