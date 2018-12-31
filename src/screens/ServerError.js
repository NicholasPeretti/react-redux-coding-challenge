import React from 'react'
import styled from 'styled-components'
import Style from '../style'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import NavLogo from '../components/NavLogo'

const Center = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Space = styled.div`
  display: flex;
  height: ${Style.spacing.padding3};
`

const ServerError = () => (
  <Center style={{ marginTop: '200px' }}>
    <Column>
      <NavLogo />
      <Title>Ops! You just broke the internet!</Title>
      <Space/>
      <SubTitle>Just kidding. Retry in few minutes</SubTitle>
    </Column>
  </Center>
)

export default ServerError
