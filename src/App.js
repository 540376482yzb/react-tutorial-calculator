import React, { Component } from 'react'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)

    // LOCAL STATE
    this.state = {
      dataEntry: '',
      ans: 0
    }

  }

  // HANDLE STATE CHANGE ON BUTTON CLICK
  handleClick = (e) => {
    e.preventDefault()
    this.setState({ dataEntry: `${this.state.dataEntry}${e.target.value}` })
  }

  // HANDLE SUBMIT
  handleSubmit = e => {
    e.preventDefault()
    const ans = eval(this.state.dataEntry)
    this.setState({ ans })
  }

  //HANDLE CLEAR ENTRY
  handleClear = e => {
    e.preventDefault()
    this.setState({ dataEntry: '', ans: 0 })
  }

  render() {
    return (
      <main>
        <form style={styles.calculatorContainer} onSubmit={this.handleSubmit}>

          <div style={styles.subDisplay}>
            {this.state.dataEntry}
          </div>
          <div style={styles.mainDisplay}>
            {this.state.ans}
          </div>

          <br />

          <div style={styles.controlArea}>
            <div style={styles.controlBox}><button style={styles.controlBtn} disabled>...</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} disabled>...</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} disabled>...</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="ce" onClick={this.handleClear}>CE</button></div>
          </div>

          <div style={styles.controlArea}>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="7" onClick={this.handleClick}>7</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="8" onClick={this.handleClick}>8</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="9" onClick={this.handleClick}>9</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="/" onClick={this.handleClick}>/</button></div>
          </div>

          <div style={styles.controlArea}>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="4" onClick={this.handleClick}>4</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="5" onClick={this.handleClick}>5</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="6" onClick={this.handleClick}>6</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="*" onClick={this.handleClick}>*</button></div>
          </div>

          <div style={styles.controlArea}>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="1" onClick={this.handleClick}>1</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="2" onClick={this.handleClick}>2</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="3" onClick={this.handleClick}>3</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="-" onClick={this.handleClick}>-</button></div>
          </div>

          <div style={styles.controlArea}>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="0" onClick={this.handleClick}>0</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="." onClick={this.handleClick}>.</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="=">=</button></div>
            <div style={styles.controlBox}><button style={styles.controlBtn} value="+" onClick={this.handleClick}>+</button></div>
          </div>

        </form>
      </main>
    )
  }
}


//INLINE STYLES

const styles = {
  calculatorContainer: {
    width: '600px',
    height: '600px',
    border: 'solid 1px grey',
    borderRadius: 10,
    margin: 'auto auto',
    marginTop: 50,
    textAlign: 'center',
    padding: '30px'
  },
  subDisplay: {
    // border: 'solid 1px grey',
    padding: '10px',
    textAlign: 'right',
    minHeight: '41px'
  },
  mainDisplay: {
    border: 'solid 1px grey',
    padding: '10px',
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'right',
    cursor: "pointer",
    minHeight: '81px'
  },
  controlArea: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  controlBox: {
    width: `${500 / 4}px`,
    height: '80px',
    padding: '10px'
  },
  controlBtn: {
    width: '100%',
    height: '100%',
    cursor: 'pointer'
  },






}


