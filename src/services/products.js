import { ApiEndpoints } from '../api/constants';

class ProsecutorsOfficesService {
  apiEndpoints = {}

  constructor() {
    this.apiEndpoints = ApiEndpoints
  }

  createProduct = async (product) => {
    try {
      const response = await fetch(this.apiEndpoints.products, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  updateProduct = async (id, product) => {
    try {
      const response = await fetch(`${this.apiEndpoints.products}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  deleteProduct = async (id) => {
    try {
      const response = await fetch(`${this.apiEndpoints.products}/${id}`, {
        method: 'DELETE'
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  getProducts = async () => {
    try {
      const response = await fetch(this.apiEndpoints.products)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  getProduct = async (id) => {
    try {
      const response = await fetch(`${this.apiEndpoints.products}/${id}`)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  getFindProducts = async (name = "") => {
    console.log(name)
    try {
      const response = await fetch(`${this.apiEndpoints.search}?query=${name}`)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default ProsecutorsOfficesService