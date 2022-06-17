import React, { Component } from "react";
import PropTypes from 'prop-types'
import avatar from './images/avatar.png'

class CommentItem extends Component {
    // static propTypes = {
    //     comment: PropTypes.array.isRequired,
    //     deleteComment: PropTypes.func.isRequired,
    //     index: PropTypes.number.isRequired
    // }
    handleDeleteComment = () => {
        const { comment, deleteComment, index } = this.props
        if (window.confirm(`确定删除${comment.author}的这条评论嘛？`)) {
            deleteComment(index)
        }
    }
    render() {
        const { comment } = this.props
        return (
            <div className="list-item">
              <div className="user-face">
                <img className="user-head" src={avatar} alt="" />
              </div>
              <div className="comment" >
                <div className="user">{comment.author}</div>
                <p className="text">{comment.comment}</p>
                <div className="info">
                  <span className="time">{comment.time.toLocaleString().replaceAll('/','-').replace('上午','').replace('下午','')}</span>
                  <span className="like liked">
                    <i className="icon" />
                  </span>
                  <span className="hate hated">
                    <i className="icon" />
                  </span>
                  <span className="reply btn-hover" onClick={this.handleDeleteComment}>删除</span>
                </div>
              </div>
            </div>
        )
    }
}
export default CommentItem