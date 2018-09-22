import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import _ from 'lodash';
import TransformModules from '../utils/TransformModules';

const DEFAULT_FIELDS = Map({
	id: null,
	email: null,
});

export default createModule({
	name: 'auth',
	initialState: _.cloneDeep(DEFAULT_FIELDS),
	transformations: {
		..._.cloneDeep(TransformModules(DEFAULT_FIELDS)),
		init: {
			reducer: (state, { payload }) => {
				state = state.set('id', payload.id || null);
				state = state.set('email', payload.email || null);
				return state;
			},
		},
	},
});
