import ChatThread from '../ChatThread/ChatThread';
import firebase, { auth, firestore } from '../../../utils/firebase';
import { Box, Card } from '@material-ui/core';
import ChatTray from '../ChatTray/ChatTray';

const addThread = async (chatRef, patientIDs, doctorIDs) => {
  for (let i = 0; i < patientIDs.length; i++) {
    for (let j = 0;j < doctorIDs.length; j++) {
        try {
        const response = await chatRef.add({
          patientID : patientIDs[i],
          doctorID: doctorIDs[j],
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        await chatRef.doc(response.id).collection('messages').add({ name: 'begining of chat' });

      } catch (error) {
        console.log('Error creating thread: ', error);
      }
    }
  }
  // try {
  //   const response = await chatRef.add({
  //     doctorID,
  //     patientID,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   });

  //   await chatRef.doc(response.id).collection('messages').add({ name: 'begining of chat' });
  // } catch (error) {
  //   console.log('Error creating thread: ', error);
  // }
};

const fetchThreadsByID = (idType, id)=>{
  let response
    try{
    response = await chatRef.where(idType, '==', id).get();

    } catch(error){
      console.log('Failed fetching threads: ',error)
    }

  return response;

  response.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

const fetchAppointmentsByID = (idType, id)=>{

}

const threadsToCreate = (userID, linkedIDs) => {
  addThread

}

const ChatRoom = () => {
  const chatRef = firestore.collection('chat');
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // const response = fetchThreadsByID(user.type, user.id);
    setThreads(response);
  }, [])

  createNewThread(chatRef, '123', '456');

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      style={{ width: '100%', height: '100%', backgroundColor: '#F1F2F4' }}
    >
      <Card style={{ width: '80%', height: '90%' }}>
        <Box
          style={{ height: '100%' }}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <ChatTray />
          {/* <ChatThread chatRef={chatRef} /> */}
        </Box>
      </Card>
    </Box>
  );
};

export default ChatRoom;
