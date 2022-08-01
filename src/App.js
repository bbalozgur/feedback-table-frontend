import { useState } from 'react';
import  { Feedback } from 'feedbacky-ty';

import FeedBackTablePage from './containers/index';

function App() {
  const [isFeedback, setIsFeedback] = useState(null);

  const handleSubmitFeedback = (feedback)  => {
    fetch(`${process.env.REACT_APP_FEEDBACK_SERVICE}/v1/feedback`, {
      method: 'POST',
      body: JSON.stringify({
        feedback,
    }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then(res => {
      setIsFeedback(true);
      console.log('feedback:', res);
    })
    .catch(err => {
      setIsFeedback(false);
      console.error(err)
    });
  }
  return (
    <>
      <Feedback onSubmit={handleSubmitFeedback} shouldCloseAfterSubmit={isFeedback} />
      <FeedBackTablePage isFeedback={isFeedback} />
    </>
  );
}

export default App;
