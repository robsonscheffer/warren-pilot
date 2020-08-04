import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import NavBar from '@warren/ui/src/Molecules/Navigation/NavBar'
import InputBar from '@warren/ui/src/Organisms/InputBar'
import TalkingBoard from '@warren/ui/src/Organisms/TalkingBoard'
import { AvatarTextIcon, WarrenIcon } from '@warren/ui/src/Atoms/Icon'

const fields = [
  { field: 'text', mask: null, placeholder: 'Seu nome' },
  { field: 'number', mask: 'currecy', placeholder: 'R$ 0,00' },
]

const conversation = [
  {
    type: 'received',
    origin: <WarrenIcon />,
    text:
      "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to",
  },
  {
    type: 'sent',
    origin: <AvatarTextIcon fill="black">S</AvatarTextIcon>,
    text: "It's the job that's never started as takes longest to finish",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon variant="secondary">B</AvatarTextIcon>,
    text:
      "I am old, Gandalf. I don't look it, but I am beginning to feel it in my heart of hearts. Well-preserved indeed! Why, I feel all thin, sort of stretched, if you know what I mean: like butter that has been scraped over too much bread. That can't be right. I need a change, or something.",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon fill="textBody">T</AvatarTextIcon>,
    text:
      "But in the end it's only a passing thing, this shadow; even darkness must pass.",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon fill="textBody">T</AvatarTextIcon>,
    text:
      "But in the end it's only a passing thing, this shadow; even darkness must pass.",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon fill="textBody">T</AvatarTextIcon>,
    text:
      "But in the end it's only a passing thing, this shadow; even darkness must pass.",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon fill="textBody">T</AvatarTextIcon>,
    text:
      "But in the end it's only a passing thing, this shadow; even darkness must pass.",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon fill="textBody">T</AvatarTextIcon>,
    text:
      "But in the end it's only a passing thing, this shadow; even darkness must pass.",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon fill="textBody">T</AvatarTextIcon>,
    text:
      "But in the end it's only a passing thing, this shadow; even darkness must pass.",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon fill="textBody">T</AvatarTextIcon>,
    text:
      "But in the end it's only a passing thing, this shadow; even darkness must pass.",
  },
  {
    type: 'sent',
    origin: <AvatarTextIcon fill="black">S</AvatarTextIcon>,
    text: "It's the job that's never started as takes longest to finish",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon variant="secondary">B</AvatarTextIcon>,
    text:
      "I am old, Gandalf. I don't look it, but I am beginning to feel it in my heart of hearts. Well-preserved indeed! Why, I feel all thin, sort of stretched, if you know what I mean: like butter that has been scraped over too much bread. That can't be right. I need a change, or something.",
  },
  {
    type: 'sent',
    origin: <AvatarTextIcon fill="black">S</AvatarTextIcon>,
    text: "It's the job that's never started as takes longest to finish",
  },
  {
    type: 'received',
    origin: <AvatarTextIcon variant="secondary">B</AvatarTextIcon>,
    text:
      "I am old, Gandalf. I don't look it, but I am beginning to feel it in my heart of hearts. Well-preserved indeed! Why, I feel all thin, sort of stretched, if you know what I mean: like butter that has been scraped over too much bread. That can't be right. I need a change, or something.",
  },
]

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Warren - O jeito novo de investir bem.</title>
        <link rel="icon" type="image/png" href="favicon.png" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2d3033" />
      </Head>

      <NavBar text="FALE COM O WARREN" />
      <section className={styles.TalkingBoard}>
        <TalkingBoard messages={conversation} maxHeight="60%" />
      </section>

      <footer className={styles.FooterBar}>
        <InputBar
          fields={fields}
          onSubmit={(data) => console.log(data)}
        ></InputBar>
      </footer>
    </Fragment>
  )
}

export default Home
