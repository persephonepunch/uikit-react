import { storiesOf, action } from '@kadira/storybook'
import { OffCanvas, Button } from 'uikit-react'
import { Component } from 'react'

/* eslint-disable */
class OpenButton extends Component {
  handleClick = () => {
    action('handleOpen')()
    this.props.handleOpen()
  }
  render() {
    const { handleClick } = this
    return <Button onClick={handleClick}>Open</Button>
  }
}

class CloseButton extends Component {
  handleClick = () => {
    action('handleClose')()
    this.props.handleClose()
  }
  render() {
    const { handleClick } = this
    return <Button onClick={handleClick}>Close</Button>
  }
}

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
OffCanvas.displayName = 'OffCanvas'

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

storiesOf('OffCanvas', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <OffCanvas
        animationMode="slide"
        target={OpenButton}
      >
        <h3>Title</h3>
        <p>{LoremIpsum}</p>
        <CloseButton />
      </OffCanvas>
    </div>
  ), {
    header: false,
    inline: true,
    propTables: [],
  })
  .addWithInfo('Modes', '', () => (
    <div className="uk-margin-bottom">
      <OffCanvas
        animationMode="push"
        target={OpenButton}
      >
        <h3>Title</h3>
        <p>{LoremIpsum}</p>
        <CloseButton />
      </OffCanvas>
    </div>
  ), {
    header: false,
    inline: true,
    propTables: [],
  })
