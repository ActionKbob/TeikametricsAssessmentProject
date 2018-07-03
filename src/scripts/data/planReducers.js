import { combineReducers } from 'redux';

const plan = ( state = { timeline : 'monthly', type : undefined }, action ) => {

	const { type, payload } = action;

	switch( type )
	{
		case 'PlanTimeLine':
			return { ...state, timeline : payload }

		case 'PlanType':
			return { ...state, type : payload }
	}

	return state;

}

export default combineReducers( { plan } );