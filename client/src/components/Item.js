import React, { Fragment } from 'react';
import axios from 'axios';
import Form from './MenuForm';

class Item extends React.Component {
  state = { menu: {}, edit: false }

  componentDidMount() {
    axios.get('/api/menus/${this.props.matcg.params.id}')
      .then( res => this.setState({ menu: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (menu) => {
    axios.put('/api/menus/${this.props.match.params.id}', { menu })
      .then( res => this.setState({ menu: res.data, edit: false}) );
  }

  show() {
    const { menu: { item, description, price}} = this.state;
    return (
      <div>
        <h1>{item}</h1>
        <h3>{description}</h3>
        <h3>{price}</h3>
      </div>
    )
  }
  delete = () => {
    axios.delete('api/menus/${this.props.match.params.id}')
    .then( res => this.setState({ menu: res.data }) )
  }

  edit() {
    return <Form {...this.state.item} submit={this.submit} />
  }

  render() {
    const { edit } = this.state;
    return (
      <Fragment>
      <div>
        <button onClick={this.delete}>Delete</button>
      </div>
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
      </div>
      </Fragment>
    )
  }
}

export default Item;