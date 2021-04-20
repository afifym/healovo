export const DoctorData = [
  {
    id: 1,
    // name: { first: 'mohand', last: 'mostafa' },
    // degree: 'Masters in medicine',
    // image: 'mohamed_fawzy.png',
    // specialty: 'Respiratory Specialist',
    // rate: '2',
    // location: 'Luxor Egypt',
    communicationMethods: { clinic: true, home: true, video: true },
    communicationMethods: { clinic: true, home: true, video: true },

    reservationDates: [
      { day: 'Mon', period: '1:00 pm - 6:00 pm' },
      { day: 'Tue', period: '1:00 pm - 6:00 pm' },
      { day: 'Wed', period: '5:00 pm - 12:00 pm' },
    ],
    // email: 'mohand.mostafa9811@gmail.com',
    // password: 'mohnad',
    // gender: 'male',
    // phone: ['01288040837', '040350017'],
    // price: 35,
    // overview: 'mohamed fawzy gaaaaaaaaaaaaaaaaaaaaaamed gadeeen ya gd3an',
    // type: 'doctor',
    // joinDate: '13-05-1997',
  },
];

export const PatientData = [
  {
    id: 1,
    name: { first: 'abdalrhman', last: 'amr' },
    age: '25',
    image: 'mohamed_fawzy.png',

    email: 'mohand.mostafa9811@gmail.com',
    password: 'mohnad',
    gender: 'male',
    phone: ['01288040837', '040350017'],

    type: 'doctor',
    location: 'Luxor Egypt',
    joinDate: '13-05-1997',
    vitals: {
      height: '173',
      weight: '120',
      massIndex: '22',
      fat: '7.4',
      bbi: '5',
    },

    medications: [
      {
        name: 'hyfresh',
        type: 'eye medicain',
        duration: '6', //in hour
      },
    ],
  },
];

{
  /* <Box display='flex' m={2}>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: '0 1em', width: '150px' }}
            >
              User Type
            </Typography>
            <RadioGroup
              aria-label='user-type'
              name='user-type'
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <Box display='flex'>
                <FormControlLabel
                  value='patient'
                  control={<Radio color='primary' />}
                  label='Patient'
                />
                <FormControlLabel
                  value='doctor'
                  control={<Radio color='primary' />}
                  label='Doctor'
                />
              </Box>
            </RadioGroup>
          </Box> */
}
