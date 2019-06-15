import React, { Component } from 'react'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

export default class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Yuri Azevedo</span>
              <span className="place">Rio de Janeiro</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3001/files/kiara-brasil.jpg" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>31 curtidas</strong>

            <p>
              Um post qualquer
              <span>#teste #opa</span>
            </p>
          </footer>
        </article>
      </section>
    )
  }
}
