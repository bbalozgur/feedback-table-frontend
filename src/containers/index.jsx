import { memo } from 'react';

import FeedBackTable from '../components/feedBackTable/index.jsx';

const FeedBackTablePage = (isFeedback) => {
    return (
       <FeedBackTable isFeedback={isFeedback} />
    );
};

export default memo(FeedBackTablePage);