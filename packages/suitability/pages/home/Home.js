import { Fragment, useEffect, useMemo } from 'react'
import Head from 'next/head'

import NavBar from '@warren/ui/src/Molecules/Navigation/NavBar'
import InputBar from '@warren/ui/src/Organisms/InputBar'
import TalkingBoard from '@warren/ui/src/Organisms/TalkingBoard'

import withData from '../../ducks/helpers/withData'
import { TalkingBoardSection, FooterBar } from './styled'
import { Button } from '@warren/ui/src/Atoms'

import {
  startTalk as startTalkAction,
  saveUserMessage as saveUserMessageAction,
  setFormVisibility as setFormVisibilityAction,
} from '../../ducks/suitability'
import InputsHelpers from '../../helpers/inputs'

const Home = ({
  startTalk,
  messages,
  form,
  saveUserMessage,
  answers,
  setFormVisibility,
}) => {
  useEffect(() => {
    startTalk()
  }, [startTalk])

  const messagesMemo = useMemo(() => {
    return messages.map((message) => {
      return {
        ...message,
        label:
          (answers.question_name &&
            answers.question_name.charAt(0).toUpperCase()) ||
          '',
      }
    })
  }, [messages.length])

  const fields = form.inputs.map((field) => {
    if (InputsHelpers[field.mask]) {
      return {
        name: form.id,
        ...InputsHelpers[field.mask],
      }
    }
    return {
      name: form.id,
      ...InputsHelpers.default,
    }
  })

  const buttons = form.buttons.map((button) => {
    return {
      field: 'button',
      children: button.label.title,
      value: button.value,
      type: 'button',
      name: form.id,
      onClick: (e) => {
        saveUserMessage({
          answers: {
            [e.currentTarget.name]: e.currentTarget.value,
          },
          label: e.currentTarget.innerHTML,
          id: form.id,
        })
      },
    }
  })

  const onSubmit = (data) => {
    saveUserMessage({
      answers: data,
      id: form.id,
    })
  }

  const allData = [...fields, ...buttons]

  return (
    <Fragment>
      <Head>
        <title>Warren - O jeito novo de investir bem.</title>
        <link rel="icon" type="image/png" href="favicon.png" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2d3033" />
      </Head>

      <NavBar text="FALE COM O WARREN" />
      <TalkingBoardSection>
        <TalkingBoard
          messages={messagesMemo}
          onFinish={() => setFormVisibility(true)}
          maxHeight="60%"
        />
      </TalkingBoardSection>

      <FooterBar show={form.show}>
        <InputBar fields={allData} onSubmit={onSubmit} width="912px">
          <Button type="submit" size="medium">
            OK
          </Button>
        </InputBar>
      </FooterBar>
    </Fragment>
  )
}

export default withData({
  actions: {
    startTalk: startTalkAction,
    saveUserMessage: saveUserMessageAction,
    setFormVisibility: setFormVisibilityAction,
  },
  states: (state) => state.suitability,
})(Home)
