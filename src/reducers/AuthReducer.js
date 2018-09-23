import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import _ from 'lodash';
import TransformModules from '../utils/TransformModules';

const DEFAULT_FIELDS = Map({
	user: null,
	projects: null,
});

export default createModule({
	name: 'auth',
	initialState: _.cloneDeep(DEFAULT_FIELDS),
	transformations: {
		..._.cloneDeep(TransformModules(DEFAULT_FIELDS)),
		setUser: {
			reducer: (state, { payload }) => {
				state = state.set('user', payload || null);
				return state;
			},
		},
		setProjects: {
			reducer: (state, { payload }) => {
				state = state.set('projects', payload || null);
				return state;
			},
		},
	},
});
