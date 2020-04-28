/**
 * Created by southpaw on 10/12/19.
 */
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterComponent = () => {
    return(
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="kanyewest"
            options={{height: 400}}
            theme="dark"
            data-chrome="noheader noborders"
        />
    )
}

export default TwitterComponent;

