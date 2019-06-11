import React from 'react'
import { connect } from 'react-redux'
import { Message, Button, Form, Container } from 'semantic-ui-react'
import { createProduct } from '../../store/actions/products'
import { checkImgURL, inputNumber } from '../../helper'
import './styles.css';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        img_url: '',
        name: '',
        price: '',
        description: '',
        createdAt: new Date(),
      },
      validation: false,
    };
    this.postProduct = this.postProduct.bind(this)
  }

  handleInput(e) {
    const { name, value } = e.target
    const { form } = this.state
    const newState = { form }
    newState.form[name] = name === 'price' ? inputNumber(value) : value
    this.setState(newState)
  }

  renderValidation(type, textFailed) {
    const { form, validation } = this.state;
    const nameValid = type === 'name' && form.name;
    const priceValid = type === 'price' && form.price;
    const descValid = type === 'description' && form.description;
    const imgUrlValid = type === 'img_url' && checkImgURL(form.img_url);
    const result = nameValid || priceValid || descValid || imgUrlValid;
    return (
      validation && !result &&
      <Message negative>
        <p>{ textFailed }</p>
      </Message>
		);
  }

  postProduct() {
    const { form } = this.state;
    const nameValid = form.name;
    const priceValid = form.price;
    const descValid = form.description;
    const imgUrlValid = checkImgURL(form.img_url);
    const isAllValid = nameValid && priceValid && descValid && imgUrlValid;
    if (isAllValid) {
      this.props.createProduct(this.state.form, (isSuccess) => {
        if (isSuccess) {
          this.props.history.push('/')
        }
      })
    } else {
      this.setState({ validation: true })
    }
  }

  render() {
    const { form } = this.state
    const { addProduct } = this.props;
    return (
      <div className="add-product">
        <Container>
          {
            (addProduct.isError) && (
              <Message negative>
                <Message.Header>Create Product failure</Message.Header>
                <p>
                  checking again your input must valid data
                </p>
              </Message>
            )
          }
          <Form>
            <Form.Field>
              <Form.Input fluid label="Nama Produk" name="name" value={form.name} placeholder='Isi nama produk' onChange={e => this.handleInput(e)} autoComplete="off" />
              { this.renderValidation('name', 'Mohon isi nama produk') }
            </Form.Field>
            <Form.Field>
              <Form.Input fluid label="Harga" name="price" value={form.price} placeholder='Isi harga produk' onChange={e => this.handleInput(e)} autoComplete="off" />
              { this.renderValidation('price', 'Mohon isi harga produk') }
            </Form.Field>
            <Form.Field>
              <Form.TextArea name="description" label='Deskripsi' value={form.description} placeholder='Isi description produk' onChange={e => this.handleInput(e)} autoComplete="off" />
              { this.renderValidation('description', 'Mohon isi deskripsi produk') }
            </Form.Field>
            <Form.Field>
              <label>Image Url</label>
              <input name="img_url" placeholder='Isi link url gambar produk' value={form.img_url} onChange={e => this.handleInput(e)} autoComplete="off" />
              { this.renderValidation('img_url', 'Url image tidak valid') }
            </Form.Field>
            <Button type='submit' onClick={this.postProduct}>Submit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addProduct: state.addProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (param, cb) => dispatch(createProduct(param, cb))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
