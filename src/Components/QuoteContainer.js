/**
 * Created by southpaw on 9/12/19.
 */
import React from 'react';
import TwitterComponent from '../Components/TwitterComponent'
import Quotes from '../Components/Quotes'


const QuoteContainer = () => {

    return(
        <article>
            <h1 className="board-game">IS KANYE OK TODAY? </h1>
            <p>Sentiment analysis of his thoughts</p>
            <div className="flex-wrapper">
                <main className="app">
                    <section className="quotes">
                        <div className="quote-text">
                         <Quotes />
                        </div>
                    </section>

                    <section className="tweetDisplay">
                        <TwitterComponent />
                    </section>
                </main>

            </div>
        </article> /*This is a container to provide the context for other logic. Ideal for separating concerns.*/
    )
};

export default QuoteContainer;