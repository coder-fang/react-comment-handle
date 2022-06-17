import './index.css'
import React from 'react'
import avatar from './images/avatar.png'
import PropTypes from 'prop-types'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'
import CommentItem from './CommentItem'
import ChangeTab from './ChangeTab'
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'


// 定义函数组件
function HelloFn(){
  // 定义事件回调函数
  const clickHandler = () => {
    console.log('事件被触发了！');
  }
  return (
    // 绑定事件
    <button onClick={clickHandler}>这是我的第一个函数组件！click me!</button>
  )
}
// 定义类组件
class HelloC extends React.Component {
  // 定义事件回调函数
  clickHandler = () => {
    console.log('事件被触发了！');
  }
  render(){
    return (
      <button onClick={this.clickHandler}>这是我的第一个类组件！click me!</button>
    )
  }
}

class App extends React.Component {

  // 依赖的数据
state = {
  // hot: 热度排序  time: 时间排序
  tabs: [
    {
      id: 1,
      name: '热度',
      type: 'hot'
    },
    {
      id: 2,
      name: '时间',
      type: 'time'
    }
  ],
  active: 'hot',
  comments: [
    {
      id: 1,
      author: '刘德华',
      comment: '给我一杯忘情水',
      time: new Date('2021-10-10 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1
    },
    {
      id: 2,
      author: '周杰伦',
      comment: '哎哟，不错哦',
      time: new Date('2021-10-11 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0
    },
    {
      id: 3,
      author: '五月天',
      comment: '不打扰，是我的温柔',
      time: new Date('2021-10-11 10:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1
    }
  ]
}
  addComment = (comment) => {
    // 将添加的评论追加到评论list上
    const {comments} = this.state
    comments.unshift(comment)
    // 更新状态
    this.setState({comments})
  }

  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index,1)
    this.setState({comments})
  }
  // 提供回调函数
  changeCommentsSort = (newMsg) => {
      this.setState({comments:newMsg})
  }
  // static propTypes = {
      // comments: PropTypes.array.isRequired,
      // addComment: PropTypes.func.isRequired,
      // deleteComment: PropTypes.func.isRequired
  // }
  render(){
    return (
      <div className="App">
        {/* 渲染函数组件 */}
        <HelloFn />
        {/* 渲染类组件 */}
        <HelloC />
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>{this.state.comments.length} 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            {/* 子传父：① 首先需要父组件给子组件传一个回调函数，然后子组件调用 */}
            <ChangeTab changeMsg={this.changeCommentsSort} comments={this.state.comments}/>
          </div>
          {/* 添加评论 */}
          <CommentAdd addComment={this.addComment} />
          {/* 评论列表 */}
          <div className="comment-list">
            <CommentList comments={this.state.comments} deleteComment={this.deleteComment} />
          </div>
        </div>
      </div>
    )}
}

export default App
