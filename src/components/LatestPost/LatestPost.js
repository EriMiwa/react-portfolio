import React from 'react';

import "./LatestPost.css";
import Post from '../Post/Post';

function LatestPost() {
    return (
        <>
        <section className="module" id="news">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2 className="module-title font-alt fadein">Latest blog posts</h2>
                        <div className="module-subtitle font-serif fadein">A wonderful serenity has taken possession of my entire
                            soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
                    </div>
                </div>
                <div className="row multi-columns-row post-columns">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </section>
        </>
    );
}

export default LatestPost;