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

import { FormClose, FormNext, Notification, Projects} from 'grommet-icons';
import AppBar from './pageComponents/AppBar';
import Card from './pageComponents/Card';
import Settings from './pageComponents/Settings';
import { persona1 } from './personas/persona1';
import { persona2 } from './personas/persona2';
import { persona3 } from './personas/persona3';
import { persona4 } from './personas/persona4';

import { cardStrings_enUK } from './strings/en-UK.js'
import { cardStrings_enIE } from './strings/en-IE.js'
import { cardStrings_deDE } from './strings/de-DE.js'
import { cardStrings_aeDU } from './strings/ae-DU.js'

import useTheme from "./hooks/useTheme";

import { ThemeContext, ThemeContextProvider } from './ThemeProvider'
import ToggleTheme from './ToggleTheme'
import { theme1 } from './themes/theme1';

const App = () => {

  const { theme, switchTheme, switchThemeWithString} = useTheme();

  const stateTheme = useContext(ThemeContext)
  //const [theme, setTheme] = useState(theme1);
  const [persona, setPersona] = useState(persona1);
  const [sidebarIsOpen, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebarIsOpen);
  let displayCardIsa = 0;
  if(persona.isa.currentAmount > 0) {
    displayCardIsa = true;
  }
  let displayCardWellness = false;
  if(persona.wellness.display == true) {
    displayCardWellness = true;
  }

  let strings;
  //get language from persona
  switch(persona.country.numberFormat) {
    case "en-UK":
      strings = cardStrings_enUK;
    break;
    case "en-IE":
      strings = cardStrings_enIE;
    break;
    case "de-DE":
      strings = cardStrings_deDE;
    break;
    case "ae-DU":
        strings = cardStrings_aeDU;
    break;
  }
    return (
      <ThemeContextProvider>
      <Grommet theme={theme} full dir={strings.language.direction}>
        <ResponsiveContext.Consumer>
          {size => (
            <Box background="pageBackground-1" fill>
              <AppBar>
                
                <Heading level='3'>{persona.personal.name.firstname} {persona.personal.name.lastname} : {persona.country.numberFormat}</Heading>
                <Button 
                  icon={<Projects />} 
                  onClick={toggleSidebar}
                  /*onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}*/
                />
              </AppBar>
              <Box direction='row' pad='medium' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='left' justify='start'>

                  <Card className="card" background="transparent" pad={{ left: '24px', top: '0px', bottom: '0px'}}>
                    <Heading level={3} size="large" margin={{ bottom: 'xsmall' , top: "0px"}}>{strings.home.title}</Heading>
                  </Card>
                  
                  <Card className="card" background={{ color: theme.card.types.linkcard.background}} border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }} elevation={theme.card.elevation}>
                    <Box direction="column">
                      <Button>
                        <Heading level={4} color="brand">{strings.inbox.title}&nbsp;&rsaquo;</Heading>
                      </Button>
                      <Paragraph className="lastChild">
                        {strings.inbox.text}
                      </Paragraph>
                    </Box>
                  </Card>
                  
                  <Card className="card" background={{ color: theme.card.types.linkcard.background}} border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }} elevation={theme.card.elevation}>
                    <Box direction="column">
                        <Button href="pension-calculator">
                          <Heading level={4} color="brand"><span>{strings.pension.title}</span>&nbsp;&rsaquo;</Heading>
                        </Button>
                        <Heading className="lastChild" level={1}>{new Intl.NumberFormat(persona.country.numberFormat, { style: 'currency', currency: persona.country.currency }).format(persona.pension.currentAmount)}</Heading>
                    </Box>
                  </Card>



                  { displayCardIsa ? (
                  <Card className="card" background={{ color: theme.card.types.linkcard.background}} border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }} elevation={theme.card.elevation}>
                    <Box direction="column">
                        <Button href="pension-calculator">
                          <Heading level={4} color="brand">Your ISA&nbsp;&rsaquo;</Heading>
                        </Button>
                        <Heading className="lastChild" level={1}>{new Intl.NumberFormat(persona.country.numberFormat, { style: 'currency', currency: persona.country.currency }).format(persona.isa.currentAmount)}</Heading>
                    </Box>
                  </Card>
                  ) : (
                    null
                  )}

                  { displayCardWellness ? (
                  <Card className="card" background={{ color: theme.card.types.linkcard.background}} border={{ style: "solid" , size: theme.card.border.width, color: theme.card.border.color}} round={{ size: theme.card.border.radius }} elevation={theme.card.elevation}>
                    <Box direction="column">
                      <Button>
                        <Heading level={4} color="brand">{strings.wellness.title}&nbsp;&rsaquo;</Heading>
                      </Button>
                      <Paragraph className="lastChild">
                      {strings.wellness.text}
                      </Paragraph>
                    </Box>
                  </Card>
                  ) : (
                    null
                  )}

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
                      gap="large"
                    >
                      <Box align="center" gap="small">
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
                        gap='large'
                      >
                      <Box align="center" gap="small">
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
      </ThemeContextProvider>
      
    );
  
}

export default App;
