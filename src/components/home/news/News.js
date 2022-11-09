import React from 'react'
import './News.sass'
import Fire from '../../../assets/img/fire.svg'
import MainBlog from '../../../assets/img/news/main-news.png'
import FirstBlog from '../../../assets/img/news/first-blog.png'
import SecondBlog from '../../../assets/img/news/second-blog.png'
import ThirdBlog from '../../../assets/img/news/third-blog.png'
import FourthBlog from '../../../assets/img/news/fourth-blog.png'

const News = () => {
  return (
    <section className='news'>
        <div className="news_head">
            <div className="news_head-main">
                <div className="news_head-main-top">
                    <img src={Fire} alt="fire" />
                    <h3>FUTURE OF ESPORTS</h3>
                </div>
                <p>Latest News & Articles</p>
            </div>
            <div className="news_head-btn">
                <button><a href="#">Read More</a></button>
            </div>
        </div>
        <div className="news_blogs">
            <div className="news_blogs-main">
                <div className="news_blogs-main-img">
                    <img src={MainBlog} alt="main-blog" />
                </div>
                <div className="news_blogs-main-desc">
                    <span className='news_blogs-main-desc-date'>April 2, 2021</span>
                    <p>Esports Group teams up with the Indianapolis Colts</p>
                </div>
            </div>
            <div className="news_blogs-secondary">
                <div className="news_blogs-secondary-blog">
                    <img src={FirstBlog} alt="first-blog" />
                    <span>April 2, 2021</span>
                    <p>NAVI Reveals S1mple Fifth Anniversary</p>
                </div>
                <div className="news_blogs-secondary-blog">
                    <img src={SecondBlog} alt="second-blog" />
                    <span>April 2, 2021</span>
                    <p>A1esports Shares New Picture</p>
                </div>
                <div className="news_blogs-secondary-blog">
                    <img src={ThirdBlog} alt="third-blog" />
                    <span>April 2, 2021</span>
                    <p>T1 Unveil Partnership With Razer</p>
                </div>
                <div className="news_blogs-secondary-blog">
                    <img src={FourthBlog} alt="third-blog" />
                    <span>April 2, 2021</span>
                    <p>RX Secures Content Partnership With</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News