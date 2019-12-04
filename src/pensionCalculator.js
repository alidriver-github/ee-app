import React, { Component, useEffect, useState, useContext }from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Collapsible, 
  Grommet, 
  Heading,
  Layer,
  Menu,
  ResponsiveContext,
  Text,
  Paragraph
} from 'grommet';

import { FormClose, FormNext, Notification, Projects } from 'grommet-icons';
import AppBar from './pageComponents/AppBar';
import Card from './pageComponents/Card';
import Settings from './pageComponents/Settings';
import { persona1 } from './personas/persona1';
import { persona2 } from './personas/persona2';
import { persona3 } from './personas/persona3';
import { persona4 } from './personas/persona4';

import useTheme from "./hooks/useTheme";

import { ThemeContext, ThemeContextProvider } from './ThemeProvider'

const PensionCalculator = () => {

  const { theme, switchTheme, switchThemeWithString} = useTheme();

  const stateTheme = useContext(ThemeContext)
  //const [theme, setTheme] = useState(theme1);
  const [persona, setPersona] = useState(persona1);
  const [sidebarIsOpen, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebarIsOpen);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
      {size => (
            <Box background="pageBackground-1" fill>
              <AppBar>
                
                <Heading level='3'>{persona.personal.name.firstname} {persona.personal.name.lastname} : {persona.country.numberFormat}</Heading>
                <Button 
                  icon={<Projects/>} 
                  onClick={toggleSidebar}
                  /*onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}*/
                />
              </AppBar>
              <Box direction='row' pad='medium' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='left' justify='start'>

                  <Card className="card" background="transparent" pad={{ left: '24px', top: '0px', bottom: '0px'}}>
                    <Heading level={3} size="large" margin={{ bottom: 'xsmall' , top: "0px"}}>Calculator</Heading>
                  </Card>
                  
                  <Card className="card" background={{ color: theme.card.types.linkcard.background}} border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }} elevation={theme.card.elevation}>
                    <Box direction="column" gap="small" flex>
                      <Paragraph textAlign="center">
                      Look at what happens if you increase your contributions
                      </Paragraph>
                      <Box flex direction="row" gap="small">
                        <Button fill="horizontal" align="center" justify="center">
                          <Box fill pad="small" border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }} align="center">
                            <Heading level={4} color="brand">4%</Heading>
                            <Text size="small">Now</Text>
                          </Box>
                        </Button>
                        <Button fill="horizontal" align="center" justify="center">
                          <Box fill pad="small" border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }}  align="center">
                            <Heading level={4} color="brand">5%</Heading>
                            <Text size="small">+1%</Text>
                          </Box>
                        </Button>
                        <Button fill="horizontal" align="center" justify="center">
                          <Box pad="small" fill border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }}  align="center">
                            <Heading level={4} color="brand">6%</Heading>
                            <Text size="small">+2%</Text>
                          </Box>
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                  <Card className="card" background={{ color: theme.card.types.darkcard.background}} border={{ style: "solid" , size: theme.card.border.width}} round={{ size: theme.card.border.radius }} elevation={theme.card.elevation}>
                    <Box direction="column" flex>
                        <Heading textAlign="center" level={4}>At {persona.pension.retirementAge}, you'll get roughly</Heading>
                        <Heading textAlign="center" level={1}>{new Intl.NumberFormat(persona.country.numberFormat, { style: 'currency', maximumSignificantDigits: 3, currency: persona.country.currency }).format(persona.pension.retirementAmount)}</Heading>
                        <Paragraph textAlign="center" >
                          Based on current annuity rates, this projection works out as about {new Intl.NumberFormat(persona.country.numberFormat, { maximumSignificantDigits: 3, style: 'currency', currency: persona.country.currency }).format(persona.pension.annuityAmount.percentage4)} a month for the rest of your life.
                        </Paragraph>
                        <Box>
                          <Button fill="horizontal" align="center" border={{"width":"0px"}} justify="center" label="How did we calculate this?"></Button>
                        </Box>
                    </Box>
                  </Card>
                  
                
                </Box>
                {(!sidebarIsOpen || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={sidebarIsOpen}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='medium'
                      align='center'
                      justify='center'
                      gap="medium"
                    >
                      <Box align="center" gap="large">
                        <Heading level="3">Change Theme</Heading>
                        <Box gap="medium" align="center">
                          <Button onClick={() => switchThemeWithString('theme1')}>Theme 1 - Smart</Button>
                          <Button onClick={() => switchThemeWithString('theme2')}>Theme 2 - Another</Button>
                          <Button onClick={() => switchThemeWithString('theme3')}>Theme 3 - Wireframe</Button>
                        </Box>
                      </Box>
                      <Box align="center" gap="small">
                        <Heading level="3">Change Persona</Heading>
                        <Box gap="medium" align="center">
                          <Button onClick={() => setPersona(persona1)}>Persona 1 - GBP</Button>
                          <Button onClick={() => setPersona(persona2)}>Persona 2 - EUR</Button>
                          <Button onClick={() => setPersona(persona3)}>Persona 3 - EUR</Button>
                          <Button onClick={() => setPersona(persona4)}>Persona 4 - AED</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Collapsible>
                  ): (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose/>}
                          onClick={toggleSidebar}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                        gap="medium"
                      >
                      <Box align="center" gap="large">
                        <Heading level="3">Change Theme</Heading>
                        <Box gap="medium" align="center">
                          <Button onClick={() => switchThemeWithString('theme1')}>Theme 1 - Smart</Button>
                          <Button onClick={() => switchThemeWithString('theme2')}>Theme 2 - Another</Button>
                          <Button onClick={() => switchThemeWithString('theme3')}>Theme 3 - Wireframe</Button>
                        </Box>
                      </Box>
                      <Box align="center" gap="small">
                        <Heading level="3">Change Persona</Heading>
                        <Box gap="medium" align="center">
                          <Button onClick={() => setPersona(persona1)}>Persona 1 - GBP</Button>
                          <Button onClick={() => setPersona(persona2)}>Persona 2 - EUR</Button>
                          <Button onClick={() => setPersona(persona3)}>Persona 3 - EUR</Button>
                          <Button onClick={() => setPersona(persona4)}>Persona 4 - AED</Button>
                        </Box>
                      </Box>
                      </Box>
                    </Layer>
                )}
              </Box>
            </Box>
          )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
export default PensionCalculator