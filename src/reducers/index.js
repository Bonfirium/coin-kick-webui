import globalReducer from './GlobalReducer';
import authReducer from './AuthReducer';

export default {
	global: globalReducer.reducer,
	auth: authReducer.reducer,
};
