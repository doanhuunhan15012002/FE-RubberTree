import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function New(props) {
  //navigation
  const {navigation, route} = props
  //functions of navigate to/back
  const {navigate, goBack} = navigation
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('OnBoarding')}
      >
        Logout
      </Button>
    </Background>
  )
}
