import cx from 'classnames'
import { Component, PropTypes, createElement } from 'react'
import KeyHandler, { KEYDOWN } from 'react-key-handler'

export default class OffCanvas extends Component {

  static propTypes = {
    target: PropTypes.func.isRequired,
    animationMode: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    animationMode: 'uk-offcanvas-slide',
    className: '',
    children: '',
  }

  state = { shouldDisplay: false, isOpen: false }


  handleClick = () => {
    this.setState({ shouldDisplay: !this.state.shouldDisplay })
  }

  handleOpen = () => {
    this.setState(
      { shouldDisplay: true },
      () => setTimeout(() => this.setState({ isOpen: true }), 50)
    )
  }

  handleClose = () => {
    this.setState(
      { isOpen: false },
      () => setTimeout(() => this.setState({ shouldDisplay: false }), 300)
    )
  }

  render() {
    const { children, animationMode } = this.props
    const { isOpen } = this.state
    const className = cx('uk-offcanvas', {
      'uk-open': this.state.shouldDisplay && this.state.isOpen,
      'uk-offcanvas-overlay uk-open': this.state.shouldDisplay && this.state.isOpen && this.props.animationMode === 'push',
    })
    const style = {
      display: this.state.shouldDisplay && 'block',
    }
    const animationClass = cx('uk-offcanvas-bar', {
      'uk-offcanvas-bar-animation uk-offcanvas-slide': isOpen && animationMode === 'slide',
      'uk-offcanvas-bar-animation uk-offcanvas-push': isOpen && animationMode === 'push',
    })

    const { handleOpen, handleClose } = this
    const target = this.props.target &&
          createElement(this.props.target, { handleOpen, children: 'Open' })

    return (
      <div>
        <KeyHandler keyEventName={KEYDOWN} keyValue="Escape" onKeyHandle={handleClose} />
        {target}
        <div
          aria-hidden={isOpen}
          className={className}
          style={style}
        >
          <div className={animationClass}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
