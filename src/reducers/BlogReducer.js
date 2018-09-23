import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import _ from 'lodash';
import TransformModules from '../utils/TransformModules';

const DEFAULT_FIELDS = Map({
	projects: [],
	project: null,
});

export default createModule({
	name: 'blog',
	initialState: _.cloneDeep(DEFAULT_FIELDS),
	transformations: {
		..._.cloneDeep(TransformModules(DEFAULT_FIELDS)),
		setProject: {
			reducer: (state, { payload }) => {
				state = state.set('project', payload || null);
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
