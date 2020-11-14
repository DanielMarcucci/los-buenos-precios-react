import React, { useEffect, useState } from 'react';
import ProductServices from './services/products'

export const ProductItem = (props) => {
  const products = props.data

  const list = products.map(product => {
    return (
      <div className="col-md-4" key={product._id}>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{product.name}</h4>
          </div>
          <div className="card-body">
            {product.prices.map(price => <h1 className="card-title pricing-card-title" key={price.type}>Q {price.price} <small className="text-muted">{price.type}</small></h1>)}
            <ul className="list-unstyled mt-3 mb-4">
              <li>{product.description}</li>
              <li>
                <img src={product.image} width="200" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  })
  return list
}

function App() {
  const productServices = new ProductServices()

  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState("")

  const loadProducts = () => {
    productServices.getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch(err => console.error(err))
  }

  const findProducts = (text) => {
    console.log(`name: ${text}`)
    productServices.getFindProducts(text)
      .then((data) => {
        setProducts(data)
      })
      .catch(err => console.error(err))
  }

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  useEffect(loadProducts, [])

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Los Buenos Precios</h5>
        <div className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar" onChange={handleChange} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => findProducts(searchText)}>Buscar</button>
        </div>
      </div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Sobre Nosotros</h1>
        <p className="lead">
          Somos la plataforma líder de soluciones de valor agregado y productos tecnológicos en toda Centro  América
          <br />
          Presencia en el país con una red de 15 subsidiarias en toda la región con centros de consolidación ubicados en Guatemala y Salvador  atendiendo a 41 países.
        </p>
      </div>
      <div className="container">
        <div className="row mb-3 text-center">
          <ProductItem data={products} />
        </div>

        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img className="mb-2" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
              <small className="d-block mb-3 text-muted">© 2017-2020</small>
            </div>
            {/* <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Cool stuff</a></li>
                <li><a className="text-muted" href="#">Random feature</a></li>
                <li><a className="text-muted" href="#">Team feature</a></li>
                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                <li><a className="text-muted" href="#">Another one</a></li>
                <li><a className="text-muted" href="#">Last time</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Resource</a></li>
                <li><a className="text-muted" href="#">Resource name</a></li>
                <li><a className="text-muted" href="#">Another resource</a></li>
                <li><a className="text-muted" href="#">Final resource</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Locations</a></li>
                <li><a className="text-muted" href="#">Privacy</a></li>
                <li><a className="text-muted" href="#">Terms</a></li>
              </ul>
            </div> */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
