import  { Feedback } from 'feedbacky-ty';

import FeedBackTablePage from './containers/index';

const submitFeedback = async ({feedback}) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_FEEDBACK_SERVICE}/v1/feedback`, {
      method: 'POST',
      body: JSON.stringify({
        feedback,
    }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    return await response.json();
  } catch (error) {
    throw new Error(`Unable to send feedback: ${error}`)
  }
}

function App() {
  const handleSubmitFeedback = async (feedback)  => {
    try {
      const response = await submitFeedback({feedback});
      console.log('response', response);
      return response;
    } catch (error) {
      console.error(`An error ocurred while sending feedback: ${error.message}`) 
    }
  }
  return (
    <>
      <Feedback onSubmit={handleSubmitFeedback} />
      <FeedBackTablePage />
    </>
  );
}

export default App;
