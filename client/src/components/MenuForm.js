import React from 'react';

class Form extends React.Component {
  state = { item: '', price: '', description: ''}
  // state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const menu = { ...this.state }
    this.props.submit(menu)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { item, price, description} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="item"
          placeholder="Menu Item"
          value={item}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;