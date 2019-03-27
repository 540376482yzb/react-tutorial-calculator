import React, { Component } from 'react'

export default class HomeContainer extends Component {
  render() {
    return (
      <main>
        <section style={styles.calculatorContainer}>

        </section>
      </main>
    )
  }
}

const styles = {
  calculatorContainer: {
    width: '600px',
    height: '600px',
    border: 1,
    borderRadius: 10
  }

}


