import { jsonToArray } from "../setupFirebase";

export const sendPatientProfileData = (data, id) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://healovo-default-rtdb.firebaseio.com/patients/-MZ-g9tp-5i9y95zoWw9.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: {
              first: data.name.first,
              last: data.name.last,
            },
            email: data.email,
            phone: data.phone,
            birthdate: data.birthdate,
            age: data.age,
            gender: data.gender,
            image: data.image,
            joinDate: data.joinDate,
            location: data.location,
            medications: data.medications,
            password: data.password,
            type: data.type,
            vitals: data.vitals,
            isChanged: data.isChanged,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending card data failed!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("sending data failed");
    }
  };
};

export const sendDoctorProfileData = (data, id) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://healovo-default-rtdb.firebaseio.com/doctors/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: {
              first: data.name.first,
              last: data.name.last,
            },
            email: data.email,
            phone: data.phone,
            birthdate: data.birthdate,
            price: data.price,
            gender: data.gender,
            age: data.age,
            communicationMethods: data.communicationMethods,
            degree: data.degree,
            image: data.image,
            joinDate: data.joinDate,
            location: data.location,
            overview: data.overview,
            password: data.password,
            rate: data.rate,
            reservationDates: data.reservationDates,
            specialty: data.specialty,
            type: data.type,
            isChanged: data.isChanged,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending card data failed!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("sending data failed");
    }
  };
};

// export const getAppointmentData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `https://healovo-default-rtdb.firebaseio.com/appointments.json`
//       );

//       if (!response.ok) {
//         throw new Error("fetching appointment data failed!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const appointmentsData = await fetchData();
//       const appointmentsArray = jsonToArray(appointmentsData);
//       console.log(appointmentsArray);
//     } catch (error) {
//       console.log("fetching appointment data failed!");
//     }
//   };
// };
