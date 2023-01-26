export const PatientData = [
  {
    id: 1,
    name: { first: "abdalrhman", last: "amr" },
    image: "mohamed_fawzy.png",

    email: "mohand.mostafa9811@gmail.com",
    password: "mohnad",
    gender: "male",
    phone: ["01288040837", "040350017"],

    type: "doctor",
    location: "Luxor Egypt",
    joinDate: "13-05-1997",
    vitals: {
      height: "173",
      weight: "120",
      massIndex: "22",
      fat: "7.4",
      bbi: "5",
    },

    medications: [
      {
        name: "hyfresh",
        type: "eye medicain",
        duration: "6", //in hour
      },
    ],
  },
];
