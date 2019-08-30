import React from 'react';

import "./Post.css";

function Post() {
    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="post mb-20 fadein">
                    <div className="post-thumbnail"><a href="#"><img src="assets/images/post-1.jpg"
                        alt="Blog-post Thumbnail" /></a></div>
                    <div className="post-header font-alt">
                        <h2 className="post-title"><a href="#">Our trip to the Alps</a></h2>
                        <div className="post-meta">By&nbsp;<a href="#">Mark Stone</a>&nbsp;| 23 November | 3 Comments
                        </div>
                    </div>
                    <div className="post-entry">
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                            which I enjoy with my whole heart.</p>
                    </div>
                    <div className="post-more"><a className="more-link" href="#">Read more</a></div>
                </div>
            </div>
        </>
    );
}

export default Post;