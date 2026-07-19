export const siteConfig = {
  name: 'Prateek Dental Care',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'Prateek Dental Care offers modern dental treatments, implants, orthodontics, and preventive care in Wakad, Pune.',
  telephone: ['+91 72298 32893', '+91 70283 32893'],
  email: 'info@prateekdental.com',
  address: {
    streetAddress: 'shop no 205, Kaspate Wasti Rd, near police lines, Vishnu Dev Nagar, Wakad',
    addressLocality: 'Pune, Pimpri-Chinchwad',
    addressRegion: 'Maharashtra',
    postalCode: '411057',
    addressCountry: 'IN',
  },
  areaServed: ['Wakad', 'Pune'],
  geo: {
    latitude: 18.6020818,
    longitude: 73.7703083,
  },
  openingHours: [
    { dayOfWeek: 'Monday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Tuesday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Wednesday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Thursday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Friday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Saturday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Sunday', opens: '00:00', closes: '23:59' },
  ],
  display: {
    phone: '72298 32893, 70283 32893',
    address:
      'shop no 205, Kaspate Wasti Rd, near police lines, Vishnu Dev Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057',
    hours: 'Open 24 hours',
  },
  googleBusiness: {
    rating: '5.0',
    reviewCount: 'More than 100+ reviews',
    profileUrl:
      'https://www.google.com/maps/place/Prateek+Dental+Care/@18.602082,73.770308,16z/data=!4m6!3m5!1s0x3bc2b9d4046792f5:0xb1bad92a7987bca5!8m2!3d18.6020818!4d73.7703083!16s%2Fg%2F11lcmys8vt?hl=en',
    reviewsUrl:
      'https://www.google.com/maps/place/Prateek+Dental+Care/@18.602082,73.770308,16z/data=!4m18!1m9!3m8!1s0x3bc2b9d4046792f5:0xb1bad92a7987bca5!2sPrateek+Dental+Care!8m2!3d18.6020818!4d73.7703083!9m1!1b1!16s%2Fg%2F11lcmys8vt!3m7!1s0x3bc2b9d4046792f5:0xb1bad92a7987bca5!8m2!3d18.6020818!4d73.7703083!9m1!1b1!16s%2Fg%2F11lcmys8vt?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D',
  },
};

export const toAbsoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${siteConfig.siteUrl.replace(/\/$/, '')}${path}`;
