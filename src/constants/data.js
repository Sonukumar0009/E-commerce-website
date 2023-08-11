import images from './images';

const wines = [
  {
    title: 'Royal Challenge',
    price: 'Rs 1500',
    tags: 'per Bottle contain 800ml',
  },
  {
    title: 'kingfisher',
    price: 'Rs 1100',
    tags: 'per Bottle contain 700ml',
  },
  {
    title: 'Old Monk',
    price: 'Rs 2000',
    tags: 'per Bottle contain 850ml',
  },
  {
    title: 'Goa Kings ',
    price: 'Rs 1800',
    tags: 'per Bottle contain 650ml',
  },
  {
    title: 'White Owl',
    price: 'Rs 1750',
    tags: 'per Bottle contain 1000ml',
  },
];

const cocktails = [
  {
    title: 'lobster Malai Tikka ',
    price: 'RS 350',
    tags: '170-225g of Tikka per serving',
    
  },
  {
    title: "Butter Chicken",
    price: 'Rs 320',
    tags: '6-8 oz (170-225g) of chicken per serving',
  },
  {
    title: 'Paneer Makhani',
    price: 'Rs 270',
    tags: ' 6-8 oz of paneer per serving',
  },
  {
    title: 'Chicken Biryani',
    price: 'Rs 310',
    tags: '-8 oz of chicken plus 1 cup of biryani per serving',
  },
  {
    title: 'Golden Saffron Naan',
    price: 'Rs 90',
    tags: '1 Naan contain 3 slice',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
