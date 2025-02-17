const affirmations = [
  { id: 1, affirmation: 'I am grateful for this new day', read: false },
  { id: 2, affirmation: 'I am filled with energy and optimism', read: false },
  {
    id: 3,
    affirmation: 'I am ready to embrace new opportunities',
    read: false,
  },
  { id: 4, affirmation: 'I am calm and centered', read: false },
  { id: 5, affirmation: 'I am focused and determined', read: false },
  { id: 6, affirmation: 'I am in control of my day', read: false },
  { id: 7, affirmation: 'I am surrounded by positive energy', read: false },
  { id: 8, affirmation: 'I am capable of achieving my goals', read: false },
  { id: 9, affirmation: 'I am open to new experiences', read: false },
  { id: 10, affirmation: 'I am proud of who I am becoming', read: false },
  { id: 11, affirmation: 'I am healthy, wealthy, and wise', read: false },
  { id: 12, affirmation: 'I am positive and optimistic', read: false },
  { id: 13, affirmation: 'I am worthy of love and respect', read: false },
  { id: 14, affirmation: 'I am strong and resilient', read: false },
  { id: 15, affirmation: 'I am creative and resourceful', read: false },
  { id: 16, affirmation: 'I am confident and courageous', read: false },
  { id: 17, affirmation: 'I am surrounded by abundance', read: false },
  { id: 18, affirmation: 'I am focused on my goals', read: false },
  { id: 19, affirmation: 'I am patient and persistent', read: false },
  { id: 20, affirmation: 'I am successful in all my endeavors', read: false },
  {
    id: 21,
    affirmation: 'I am grateful for the blessings in my life',
    read: false,
  },
  { id: 22, affirmation: 'I am constantly growing and evolving', read: false },
  {
    id: 23,
    affirmation: 'I am attracting positivity and abundance',
    read: false,
  },
  {
    id: 24,
    affirmation: 'I am a magnet for success and happiness',
    read: false,
  },
  {
    id: 25,
    affirmation: 'I am grateful for my health and vitality',
    read: false,
  },
  { id: 26, affirmation: 'I am confident in my abilities', read: false },
  { id: 27, affirmation: 'I am grateful for the love in my life', read: false },
  {
    id: 28,
    affirmation: 'I am open to receiving all good things',
    read: false,
  },
  { id: 29, affirmation: 'I am surrounded by supportive people', read: false },
  { id: 30, affirmation: 'I am in tune with my inner wisdom', read: false },
  { id: 31, affirmation: 'I am deserving of all good things', read: false },
  { id: 32, affirmation: 'I am a positive thinker', read: false },
  { id: 33, affirmation: 'I am grateful for my inner peace', read: false },
  {
    id: 34,
    affirmation: 'I am thankful for the abundance in my life',
    read: false,
  },
  { id: 35, affirmation: 'I am worthy of success', read: false },
  { id: 36, affirmation: 'I am surrounded by love and kindness', read: false },
  { id: 37, affirmation: 'I am a beacon of peace and love', read: false },
  { id: 38, affirmation: 'I am confident in my unique abilities', read: false },
  { id: 39, affirmation: 'I am grateful for the gift of today', read: false },
  { id: 40, affirmation: 'I am open to new possibilities', read: false },
  { id: 41, affirmation: 'I am worthy of my dreams', read: false },
  { id: 42, affirmation: 'I am aligned with my highest self', read: false },
  { id: 43, affirmation: 'I am grateful for my journey', read: false },
  { id: 44, affirmation: 'I am in harmony with the universe', read: false },
  { id: 45, affirmation: 'I am a source of inspiration', read: false },
  { id: 46, affirmation: 'I am grateful for my inner strength', read: false },
  { id: 47, affirmation: 'I am a creator of my reality', read: false },
  { id: 48, affirmation: 'I am blessed with talents and skills', read: false },
  { id: 49, affirmation: 'I am grateful for this moment', read: false },
  { id: 50, affirmation: 'I am surrounded by beauty and joy', read: false },
  {
    id: 51,
    affirmation: 'I am grateful for my supportive friends',
    read: false,
  },
  { id: 52, affirmation: 'I am at peace with myself', read: false },
  { id: 53, affirmation: 'I am open to change and growth', read: false },
  { id: 54, affirmation: 'I am a reflection of my thoughts', read: false },
  { id: 55, affirmation: 'I am thankful for my loving family', read: false },
  { id: 56, affirmation: 'I am in control of my happiness', read: false },
  { id: 57, affirmation: 'I am constantly learning and growing', read: false },
  { id: 58, affirmation: 'I am grateful for the love I receive', read: false },
  { id: 59, affirmation: 'I am living my life with purpose', read: false },
  { id: 60, affirmation: 'I am grateful for my creative mind', read: false },
  { id: 61, affirmation: 'I am attracting positive experiences', read: false },
  { id: 62, affirmation: 'I am proud of all my accomplishments', read: false },
  { id: 63, affirmation: 'I am grateful for my unique journey', read: false },
  { id: 64, affirmation: 'I am a magnet for love and happiness', read: false },
  {
    id: 65,
    affirmation: 'I am grateful for my supportive partner',
    read: false,
  },
  { id: 66, affirmation: 'I am in charge of my destiny', read: false },
  {
    id: 67,
    affirmation: 'I am thankful for every lesson learned',
    read: false,
  },
  { id: 68, affirmation: 'I am surrounded by positive people', read: false },
  { id: 69, affirmation: 'I am grateful for my abundant life', read: false },
  {
    id: 70,
    affirmation: 'I am deserving of happiness and success',
    read: false,
  },
  {
    id: 71,
    affirmation: 'I am grateful for my loving family and friends',
    read: false,
  },
  { id: 72, affirmation: 'I am capable of achieving greatness', read: false },
  {
    id: 73,
    affirmation: 'I am in control of my thoughts and emotions',
    read: false,
  },
  { id: 74, affirmation: 'I am grateful for my healthy body', read: false },
  {
    id: 75,
    affirmation: 'I am open to receiving love and abundance',
    read: false,
  },
  {
    id: 76,
    affirmation: 'I am grateful for the simple things in life',
    read: false,
  },
  { id: 77, affirmation: 'I am a positive and powerful creator', read: false },
  {
    id: 78,
    affirmation: 'I am grateful for my inner peace and harmony',
    read: false,
  },
  {
    id: 79,
    affirmation: 'I am deserving of all the good in life',
    read: false,
  },
  {
    id: 80,
    affirmation: 'I am thankful for my supportive community',
    read: false,
  },
  { id: 81, affirmation: 'I am a beacon of positivity and light', read: false },
  {
    id: 82,
    affirmation: 'I am grateful for my unique talents and abilities',
    read: false,
  },
  {
    id: 83,
    affirmation: 'I am open to new adventures and experiences',
    read: false,
  },
  {
    id: 84,
    affirmation: 'I am grateful for my ability to learn and grow',
    read: false,
  },
  { id: 85, affirmation: 'I am a magnet for positive change', read: false },
  {
    id: 86,
    affirmation: 'I am grateful for my loving relationships',
    read: false,
  },
  {
    id: 87,
    affirmation: 'I am in tune with my inner wisdom and guidance',
    read: false,
  },
  {
    id: 88,
    affirmation: 'I am thankful for my unique perspective',
    read: false,
  },
  {
    id: 89,
    affirmation: 'I am open to the abundance of the universe',
    read: false,
  },
  { id: 90, affirmation: 'I am grateful for the beauty of life', read: false },
  { id: 91, affirmation: 'I am a positive force in the world', read: false },
  { id: 92, affirmation: 'I am thankful for my loving heart', read: false },
  { id: 93, affirmation: 'I am a powerful creator of my reality', read: false },
  {
    id: 94,
    affirmation: 'I am grateful for my loving and supportive family',
    read: false,
  },
  {
    id: 95,
    affirmation: 'I am open to all the good life has to offer',
    read: false,
  },
  {
    id: 96,
    affirmation: 'I am grateful for my health and well-being',
    read: false,
  },
  {
    id: 97,
    affirmation: 'I am a source of inspiration and positivity',
    read: false,
  },
  {
    id: 98,
    affirmation: 'I am thankful for the love and support I receive',
    read: false,
  },
  {
    id: 99,
    affirmation: 'I am a magnet for success and abundance',
    read: false,
  },
  {
    id: 100,
    affirmation: 'I am grateful for the joy and love in my life',
    read: false,
  },
];

export default affirmations;
