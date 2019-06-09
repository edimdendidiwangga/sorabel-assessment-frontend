import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'
import './styles.css';

const FormExampleForm = () => (
  <div className="add-product">
    <Container>
      <Form>
        <Form.Field>
          <label>Nama Produk</label>
          <input placeholder='Isi nama produk' />
        </Form.Field>
        <Form.Field>
          <label>Harga</label>
          <input placeholder='Isi harga produk' />
        </Form.Field>
        <Form.Field>
          <Form.TextArea label='Deskripsi' placeholder='Isi description produk' />
        </Form.Field>
        <Form.Field>
          <label>Image Url</label>
          <input placeholder='Isi link url gambar produk' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  </div>
)

export default FormExampleForm
