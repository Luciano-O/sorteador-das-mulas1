import React from 'react';

class SorteadorMM extends React.Component {
  state = {
    mulas: [],
    mulaAtual: '',
  }

  onInputChange = ({ target }) => {
    const mula = target.value
    this.setState({
      mulaAtual: mula,
    }) 
  }

  onBtnClick = () => {
    const { mulaAtual } = this.state
    this.setState((prevState) => {
      return({
        mulas: [...prevState.mulas, mulaAtual],
        mulaAtual: '',
      })
    })
  }

  render() {
    const { mulaAtual } = this.state;
    return(
      <form htmlFor="mula-input">
        <label>
          <input
            name="mula-input"
            type="text"
            onChange={ this.onInputChange }
            value={ mulaAtual }
          />
        </label>
        <button
          type="button"
          onClick={ this.onBtnClick }
        >
          Adicionar mula
        </button>
      </form>
    )
  }
}

export default SorteadorMM;
