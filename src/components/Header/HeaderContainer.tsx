import React from 'react';
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


// CC
class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Header {...this.props} />
    }

};

const mapStateToProps = (state: AppStateType) => ({
    // Styled
    color: state.app.theme.global.color,
    background: state.app.theme.sidebar.background
});

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {})(HeaderContainer);