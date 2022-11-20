import React from 'react'
import BackgroundSection from '../../../../Components/BackgroundSection'
import Section from '../../../../Components/Section'

const Main = () => {
  return (
    <Section scrollFadePosition={0}>
        <BackgroundSection backgroundImageName="background-video.jpg" darkMode={true}>
            <h1>Vídeo</h1>
            <h2>HigheR</h2>
        </BackgroundSection>
    </Section>
  )
}

export default Main