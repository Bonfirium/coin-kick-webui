import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import _ from 'lodash';
import TransformModules from '../utils/TransformModules';

const DEFAULT_FIELDS = Map({
	id: null,
	name: null,
});

export default createModule({
	name: 'global',
	initialState: _.cloneDeep(DEFAULT_FIELDS),
	transformations: {
		..._.cloneDeep(TransformModules(DEFAULT_FIELDS)),
		init: {
			reducer: (state, { payload }) => {
				state = state.set('id', payload.id || null);
				state = state.set('name', payload.name || null);
				return state;
			},
		},
	},
});