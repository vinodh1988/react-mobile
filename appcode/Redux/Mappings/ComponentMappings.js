import {combineReducers} from 'redux';
import  {connect} from 'react-redux';
import {DataReducer} from '../Reducers/HomeReducer';
import {Home} from '../../Pages/Home';

mapStateToHomeProps=(state)=>{
    return {items:state.defaultData.items}
}

export let HomeComponent=connect(mapStateToHomeProps,null)(Home);

export default state=combineReducers({defaultData:DataReducer});