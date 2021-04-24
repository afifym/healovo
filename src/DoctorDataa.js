export const DoctorsData = [
  {
    id: 1,

    name: { first: "mohand", last: "mostafa" },
    degree: "Masters in medicine",
    image: "doctorAvtar.png",
    specialty: "Respiratory",
    rate: "2",
    location: "Luxor",
    communicationMethods: { clinic: true, home: true, video: true },
    reservationDates: [
      { day: "Mon", period: "1:00 pm - 6:00 pm" },
      { day: "Tue", period: "1:00 pm - 6:00 pm" },
      { day: "Wed", period: "5:00 pm - 12:00 pm" },
    ],
    email: "mohand.mostafa9811@gmail.com",
    password: "mohnad",
    gender: "male",
    phone: ["01288040837", "040350017"],
    price: 35,
    overview: `I am an ophthalmologist and a graduate of Mid-career Masters
     of Public Administration at the Harvard Kennedy School (HKS), Harvard
    University, USA (2019). I graduated from MSc of public healthfor eye 
    care at LSHTM, University of London (2020). My coursework at the Harvard
    Kennedy School wasfocused on health policy, leadership, management, health
    system reform, and communication. My coursework at LSHTM was focused on global
      health, epidemiology, health microeconomics, statistics, proposal writing, and
    global disability.`,
    type: "doctor",
    joinDate: "13-05-1997",
  },
  {
    id: 2,
    name: { first: "mohamed", last: "Fawzy" },
    degree: "Masters in Ophthalmologist",
    image: "doctorAvtar.png",
    specialty: "Ophthalmologist",
    rate: "2",
    location: "Tanta Egypt",
    communicationMethods: { clinic: true, home: false, video: true },
    reservationDates: [
      { day: "Mon", period: "1:00 pm - 6:00 pm" },
      { day: "Tue", period: "1:00 pm - 6:00 pm" },
      { day: "Wed", period: "5:00 pm - 12:00 pm" },
    ],
    email: "mohamed.fwazy@gmail.com",
    password: "fwazy",
    gender: "male",
    phone: ["01288040837", "040350017"],
    price: 35,
    overview: `I am an ophthalmologist and a graduate of Mid-career Masters
     of Public Administration at the Harvard Kennedy School (HKS), Harvard
    University, USA (2019). I graduated from MSc of public healthfor eye 
    care at LSHTM, University of London (2020). My coursework at the Harvard
    Kennedy School wasfocused on health policy, leadership, management, health
    system reform, and communication. My coursework at LSHTM was focused on global
      health, epidemiology, health microeconomics, statistics, proposal writing, and
    global disability.`,
    type: "doctor",
    joinDate: "13-05-1997",
  },
  {
    id: 3,
    name: { first: "mohamed", last: "afify" },
    degree: "Masters in medicine",
    image: "doctorAvtar.png",
    specialty: "Respiratory Specialist",
    rate: "2",
    location: "cario Egypt",
    communicationMethods: { clinic: true, home: true, video: true },
    reservationDates: [
      { day: "Mon", period: "1:00 pm - 6:00 pm" },
      { day: "Tue", period: "1:00 pm - 6:00 pm" },
      { day: "Wed", period: "5:00 pm - 12:00 pm" },
    ],
    email: "mohand.mostafa9811@gmail.com",
    password: "mohnad",
    gender: "male",
    phone: ["01288040837", "040350017"],
    price: 35,
    overview: `I am an ophthalmologist and a graduate of Mid-career Masters
     of Public Administration at the Harvard Kennedy School (HKS), Harvard
    University, USA (2019). I graduated from MSc of public healthfor eye 
    care at LSHTM, University of London (2020). My coursework at the Harvard
    Kennedy School wasfocused on health policy, leadership, management, health
    system reform, and communication. My coursework at LSHTM was focused on global
      health, epidemiology, health microeconomics, statistics, proposal writing, and
    global disability.`,
    type: "doctor",
    joinDate: "13-05-1997",
  },
];

const defaultFilterSetting = [
  {
    filterName: "Location",
    filterData: [
      { Any: true },
      { Video: false },
      { Home: false },
      { Clinic: false },
    ],
  },
  {
    filterName: "Rating",
    filterData: [
      { Any: true },
      { 2: false },
      { 3: false },
      { 4: false },
      { 5: false },
    ],
  },
  {
    filterName: "Gender",
    filterData: [{ Any: true }, { Male: false }, { Female: false }],
  },
  {
    filterName: "Price",
    filterData: [
      { Any: true },
      { "Less than $30": false },
      { "$30-$50": false },
      { "More than $50": false },
    ],
  },
  {
    filterName: "open now",
    filterData: [{ "open now": false }],
  },
];

const defaultFilterSetting = [
  {
    filterName: "Location",
    filterData: ["Any", "Video", "Home", "Clinic"],
  },
  {
    filterName: "Rating",
    filterData: ["Any", "2", "3", "4", "5"],
  },
  {
    filterName: "Gender",
    filterData: ["Any", "Male", "Female"],
  },
  {
    filterName: "Price",
    filterData: ["Any", "Less than $30", "$30-$50", "More than $50"],
  },
  {
    filterName: "open now",
    filterData: ["open now"],
  },
];

const defaultFilterSetting = [
  {
    filterName: "Location",
    filterData: {
      any: true,
      video: false,
      home: false,
      clinic: false,
    },
  },

  {
    filterName: "Gender",
    filterData: { any: true, male: false, female: false },
  },
  {
    filterName: "Rating",
    filterData: { any: true, 2: false, 3: false, 4: false, 5: false },
  },
  {
    filterName: "Price",
    filterData: {
      any: true,
      "Less than $30": false,
      "$30-$50": false,
      "More than $50": false,
    },
  },
  {
    filterName: "open now",
    filterData: { "open now": false },
  },
];
