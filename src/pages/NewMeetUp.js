import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {


    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-b0ac8-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-TYpe' : 'application/json'
                }
            }
        ).then(() => history.replace('/')); 
    }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetUpPage;
