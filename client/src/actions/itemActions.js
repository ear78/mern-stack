import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from './types'

export const getItems = () => dispatch => {
	dispatch(setItemsLoading())
	axios
	 .get('/api/posts')
	 .then(res => dispatch({
		 type: GET_ITEMS,
		 payload: res.data
	 }))
}

export const deleteItem = (id) => dispatch => {
	dispatch(setItemsLoading())
	axios
		.delete(`/api/posts/${id}`)
		.then(res => dispatch({
			type: DELETE_ITEM,
			payload: id
		}))
}

export const addItem = (item) => dispatch => {
	dispatch(setItemsLoading())
	axios
		.post('/api/posts', item)
		.then(res => dispatch({
			type: ADD_ITEM,
			payload: res.data
		}))
}

export const updateItem = (id, item) => dispatch => {
	dispatch(setItemsLoading())
	axios
		.put(`/api/posts/${id}`, item)
		.then(res => dispatch({
			type: UPDATE_ITEM,
			payload: res.data
		}))
}

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
}
