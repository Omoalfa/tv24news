import React from 'react';
import data from './data'
import Card from './Card';

const MainSection = () => {
    return (
        <section>
            <div className="left-pane">
                {
                    data.map(value => {
                        return (
                            <Card image={value.image} title={value.title} content={value.content} />
                        )
                    } )
                }
            </div>
            <div className="right-pane">
            </div>
        </section>
    )
}

export default MainSection