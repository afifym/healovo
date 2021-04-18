export const DoctorsData = [
  {
    id: 1,
    degree: "Masters in medicine",
    Specialty: "Respiratory Specialist",
    rate: 2,
    location: "Luxor Egypt",
    CommunicationMethods: { clinc: true, home: true, video: true },
    ReservationDates: [
      { day: "Mon", availablePeriod: "1:00 pm - 6:00 pm" },
      { day: "Tue", availablePeriod: "1:00 pm - 6:00 pm" },
      { day: "Wed", availablePeriod: "5:00 pm - 12:00 pm" },
    ],
    price: "35",
    doctorInfo: {
      name: "mohand mostafa",
      phone: "01288040837",
      email: "mohand.mostafa9811@gmail.com",
      password: "hamada",
      gender: "male",
      joinDate: "11-11-2011", //new Date().toISOString().slice(0, 10)
      image: "doctorAvtar.png",
    },
  },
  {
    /*image*/
    id: 2,
    avtarImg: "doctorAvtar2.png",
    name: { firstName: "mohamed", lastName: "Fwazy" },
    degree: "Masters in medicine",
    Specialty: "Neurology",
    rate: 4,
    location: { Governorate: "Alexandria", Country: "Egypt" },
    CommunicationMethods: { clinc: true, home: true, video: false },
    ReservationDates: [
      { day: "Mon", availablePeriod: "1:00 pm - 6:00 pm" },
      { day: "Tue", availablePeriod: "7:00 pm - 11:00 pm" },
      ,
    ],
    price: 45,
  },
  {
    id: 3,
    avtarImg: "doctorAvtar.png",
    name: { firstName: "abdalrhman", lastName: "amr" },
    degree: "Masters in medicine",
    Specialty: "Ophthalmology",
    rate: 3,
    location: { Governorate: "Cairo", Country: "Egypt" },
    CommunicationMethods: { clinc: true, home: false, video: false },
    ReservationDates: [
      { day: "Mon", availablePeriod: "1:00 pm - 6:00 pm" },

      { day: "Wed", availablePeriod: "5:00 pm - 12:00 pm" },
      { day: "Thurs", availablePeriod: "5:00 pm - 12:00 pm" },
    ],
    price: 95,
  },
];
